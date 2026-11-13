"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";

/* Shared pieces for the method machines: timing helpers, the "reveal" texture and a few stock parts. */

export const ONYX = "#111827", BODY = "#1F2937", METAL = "#4B5563", CORAL = "#E53935";

export const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
export const ease = (t: number) => { t = clamp01(t); return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
/** progress of `t` through [a, b], eased */
export const phase = (t: number, a: number, b: number) => ease((t - a) / (b - a));
/** stable pseudo-random in [0,1) */
export const rnd = (i: number) => { const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); };

export function makeCanvas(size = 512) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  return { c, g: c.getContext("2d")! };
}

/**
  A texture that shows `art` (a canvas) up to some progress p in 0..1:
  "rows" reveals top to bottom, "cols" left to right, "fade" all at once by opacity.
*/
export function createReveal(art: HTMLCanvasElement, mode: "rows" | "cols" | "fade" = "rows") {
  const size = art.width;
  const { c, g } = makeCanvas(size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  let last = -1;
  return {
    tex,
    reveal(p: number) {
      const step = Math.round(clamp01(p) * 128);
      if (step === last) return;
      last = step;
      g.clearRect(0, 0, size, size);
      const k = step / 128;
      if (k > 0) {
        if (mode === "rows") { const h = k * size; g.drawImage(art, 0, 0, size, h, 0, 0, size, h); }
        else if (mode === "cols") { const w = k * size; g.drawImage(art, 0, 0, w, size, 0, 0, w, size); }
        else { g.globalAlpha = k; g.drawImage(art, 0, 0); g.globalAlpha = 1; }
      }
      tex.needsUpdate = true;
    },
  };
}

/**
  A texture drawn along a path of points (0..1 canvas coords), stroke by stroke: embroidery stitches, laser burns.
  `draw(g, from, to)` paints the segments between two point indices; the texture repaints only what is new.
*/
export function createPathReveal(size: number, count: number, draw: (g: CanvasRenderingContext2D, from: number, to: number) => void, base?: (g: CanvasRenderingContext2D) => void) {
  const { c, g } = makeCanvas(size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  let done = 0;
  const reset = () => { g.clearRect(0, 0, size, size); base?.(g); done = 0; tex.needsUpdate = true; };
  reset();
  return {
    tex,
    /** draw up to point index n */
    to(n: number) {
      n = Math.max(0, Math.min(count - 1, Math.floor(n)));
      if (n < done) reset();
      if (n > done) { draw(g, done, n); done = n; tex.needsUpdate = true; }
    },
    reset,
  };
}

/** a T-shirt laid flat (outline in XY; extrude it and turn it to lie flat) */
export function teeShape() {
  const s = new THREE.Shape();
  s.moveTo(-0.17, 0.64);
  s.lineTo(-0.44, 0.57); s.lineTo(-0.72, 0.36); s.lineTo(-0.58, 0.17); s.lineTo(-0.44, 0.27);
  s.lineTo(-0.44, -0.66); s.quadraticCurveTo(0, -0.69, 0.44, -0.66);
  s.lineTo(0.44, 0.27); s.lineTo(0.58, 0.17); s.lineTo(0.72, 0.36); s.lineTo(0.44, 0.57);
  s.lineTo(0.17, 0.64); s.quadraticCurveTo(0, 0.46, -0.17, 0.64);
  return s;
}

export function teeGeometry() {
  const geo = new THREE.ExtrudeGeometry(teeShape(), { depth: 0.025, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.012, bevelSegments: 3, curveSegments: 18 });
  geo.rotateX(-Math.PI / 2);
  return geo;
}

/** a rounded box with a plain standard material */
export function Box({ args, position, color, radius = 0.05, rough = 0.5, metal = 0.2, rotation, emissive, emissiveIntensity }: {
  args: [number, number, number]; position?: [number, number, number]; rotation?: [number, number, number]; color: string;
  radius?: number; rough?: number; metal?: number; emissive?: string; emissiveIntensity?: number;
}) {
  return (
    <RoundedBox args={args} radius={Math.min(radius, Math.min(...args) / 2 - 0.001)} smoothness={3} position={position} rotation={rotation} castShadow receiveShadow>
      <meshStandardMaterial color={color} roughness={rough} metalness={metal} emissive={emissive ?? "#000000"} emissiveIntensity={emissiveIntensity ?? 0} />
    </RoundedBox>
  );
}

/** points along a polyline (0..1 coords), roughly `step` apart */
export function resample(pts: [number, number][], step: number): [number, number][] {
  const out: [number, number][] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, ay] = pts[i], [bx, by] = pts[i + 1];
    const n = Math.max(1, Math.ceil(Math.hypot(bx - ax, by - ay) / step));
    for (let k = 0; k < n; k++) out.push([ax + (bx - ax) * (k / n), ay + (by - ay) * (k / n)]);
  }
  out.push(pts[pts.length - 1]);
  return out;
}

/** a circle as a polyline */
export function circlePts(cx: number, cy: number, r: number, seg = 96, start = -Math.PI / 2): [number, number][] {
  return Array.from({ length: seg + 1 }, (_, i) => { const a = start + (i / seg) * Math.PI * 2; return [cx + Math.cos(a) * r, cy + Math.sin(a) * r] as [number, number]; });
}

/** the shared stage: every machine sits at the same spot, turned a little, leaning toward the pointer */
export function Rig({ children }: { children: React.ReactNode }) {
  const rig = useRef<THREE.Group>(null);
  useFrame((state, dt) => {
    if (!rig.current) return;
    rig.current.rotation.y = THREE.MathUtils.damp(rig.current.rotation.y, -0.32 + state.pointer.x * 0.12, 3, dt);
    rig.current.rotation.x = THREE.MathUtils.damp(rig.current.rotation.x, state.pointer.y * -0.04, 3, dt);
  });
  return <group ref={rig} rotation={[0, -0.32, 0]} position={[0, -0.55, 0]}>{children}</group>;
}
