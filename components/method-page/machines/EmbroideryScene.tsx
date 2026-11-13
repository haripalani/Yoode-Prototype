"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Box, BODY, ONYX, METAL, CORAL, Rig, clamp01, resample, circlePts, createPathReveal } from "./kit";

/*
  An embroidery head over a moving hoop. The needle stays put and the hoop travels under it, exactly as on a real
  machine; satin stitches appear where the needle has been. With `coloreel`, a single white thread is dyed on the
  machine as it feeds, so the design shifts colour continuously with no thread changes.
*/

const CYCLE = 8.6, T0 = 0.4, T1 = 6.8; // stitching runs T0..T1, then the finished piece rests
const D = 1.08; // embroidered area (world units) = the canvas
const NZ = 0.42; // the needle's z

type Stitch = { x: number; y: number; col: string; jump: boolean };

/** satin stitch: a zig-zag across a centre line, `w` wide */
function satin(line: [number, number][], w: number, step: number, color: (k: number) => string): Stitch[] {
  const c = resample(line, step), out: Stitch[] = [];
  for (let i = 0; i < c.length; i++) {
    const a = c[Math.max(0, i - 1)], b = c[Math.min(c.length - 1, i + 1)];
    const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1;
    const s = i % 2 ? 1 : -1;
    out.push({ x: c[i][0] + (-dy / len) * w * s, y: c[i][1] + (dx / len) * w * s, col: color(i / (c.length - 1)), jump: i === 0 });
  }
  return out;
}

function design(coloreel: boolean): Stitch[] {
  if (!coloreel) {
    return [
      ...satin(circlePts(0.5, 0.5, 0.33), 0.035, 0.0065, () => CORAL),
      ...satin([[0.5, 0.53], [0.37, 0.33]], 0.04, 0.006, () => "#F8FAFC"),
      ...satin([[0.5, 0.53], [0.63, 0.33]], 0.04, 0.006, () => "#F8FAFC"),
      ...satin([[0.5, 0.53], [0.5, 0.71]], 0.04, 0.006, () => "#F8FAFC"),
    ];
  }
  // five petals and a ring, one thread whose colour moves through the spectrum as it stitches
  const rose: [number, number][] = Array.from({ length: 361 }, (_, i) => {
    const th = (i / 360) * Math.PI, r = 0.27 * Math.cos(5 * th);
    return [0.5 + r * Math.cos(th), 0.5 + r * Math.sin(th)];
  });
  const hue = (from: number, to: number) => (k: number) => `hsl(${Math.round(from + (to - from) * k) % 360}, 85%, 55%)`;
  return [...satin(rose, 0.022, 0.006, hue(330, 520)), ...satin(circlePts(0.5, 0.5, 0.36), 0.03, 0.0065, hue(160, 330))];
}

export default function EmbroideryScene({ animate, coloreel = false }: { animate: boolean; coloreel?: boolean }) {
  const hoop = useRef<THREE.Group>(null);
  const needle = useRef<THREE.Mesh>(null);
  const dye = useRef<THREE.MeshStandardMaterial>(null);

  const { stitches, sew } = useMemo(() => {
    const stitches = design(coloreel);
    const sew = createPathReveal(1024, stitches.length, (g, from, to) => {
      g.lineCap = "round";
      for (let i = from + 1; i <= to; i++) {
        const a = stitches[i - 1], b = stitches[i];
        if (b.jump) continue;
        g.strokeStyle = "rgba(0,0,0,0.35)"; g.lineWidth = 6.5;
        g.beginPath(); g.moveTo(a.x * 1024, a.y * 1024 + 1.5); g.lineTo(b.x * 1024, b.y * 1024 + 1.5); g.stroke();
        g.strokeStyle = b.col; g.lineWidth = 5;
        g.beginPath(); g.moveTo(a.x * 1024, a.y * 1024); g.lineTo(b.x * 1024, b.y * 1024); g.stroke();
      }
    });
    return { stitches, sew };
  }, [coloreel]);
  useEffect(() => () => sew.tex.dispose(), [sew]);

  const fabric = coloreel ? "#EDE6DA" : "#1E2A44";

  useFrame((state) => {
    const t = animate ? state.clock.elapsedTime % CYCLE : T1 + 0.5;
    const k = clamp01((t - T0) / (T1 - T0));
    const sewing = t > T0 && t < T1;
    const n = t > CYCLE - 0.3 ? 0 : k * (stitches.length - 1);
    sew.to(n);
    const s = stitches[Math.min(stitches.length - 1, Math.floor(n))];
    const tx = sewing ? -(s.x - 0.5) * D : 0, tz = sewing ? NZ - (s.y - 0.5) * D : NZ;
    if (hoop.current) {
      hoop.current.position.x = THREE.MathUtils.lerp(hoop.current.position.x, tx, 0.35);
      hoop.current.position.z = THREE.MathUtils.lerp(hoop.current.position.z, tz, 0.35);
    }
    if (needle.current) needle.current.position.y = sewing ? 0.66 + Math.sin(state.clock.elapsedTime * 38) * 0.11 : 0.78;
    if (dye.current) { dye.current.color.set(s.col); dye.current.emissive.set(s.col); }
  });

  const spools = coloreel ? ["#F8FAFC"] : [CORAL, "#F8FAFC", "#F7C84D", "#1E40AF"];

  return (
    <Rig>
      {/* table */}
      <Box args={[3.0, 0.3, 2.3]} position={[0, 0.15, 0.25]} color={BODY} radius={0.12} rough={0.55} metal={0.15} />
      <mesh position={[0, 0.25, 1.405]}>
        <boxGeometry args={[2.4, 0.04, 0.01]} />
        <meshStandardMaterial color={CORAL} emissive={CORAL} emissiveIntensity={0.35} />
      </mesh>

      {/* the hoop and the fabric in it, travelling under the needle */}
      <group ref={hoop} position={[0, 0, NZ]}>
        <mesh position={[0, 0.335, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <circleGeometry args={[0.62, 64]} />
          <meshStandardMaterial color={fabric} roughness={0.95} />
        </mesh>
        <mesh position={[0, 0.338, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[D, D]} />
          <meshStandardMaterial map={sew.tex} transparent roughness={0.55} polygonOffset polygonOffsetFactor={-2} />
        </mesh>
        <mesh position={[0, 0.36, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[0.63, 0.035, 12, 72]} />
          <meshStandardMaterial color="#C8A97E" roughness={0.6} />
        </mesh>
        {/* the arm that carries the hoop */}
        <Box args={[0.95, 0.05, 0.14]} position={[1.05, 0.34, 0]} color={METAL} radius={0.02} metal={0.6} rough={0.35} />
      </group>

      {/* the machine: column, arm, head, needle, thread on top */}
      <Box args={[0.75, 1.25, 0.62]} position={[0, 0.92, -0.78]} color={ONYX} radius={0.1} />
      <Box args={[0.62, 0.38, 1.5]} position={[0, 1.42, -0.12]} color={ONYX} radius={0.1} />
      <Box args={[0.46, 0.5, 0.44]} position={[0, 1.12, NZ]} color="#374151" radius={0.07} rough={0.4} metal={0.3} />
      <mesh position={[0, 1.1, NZ + 0.222]}>
        <boxGeometry args={[0.3, 0.05, 0.01]} />
        <meshStandardMaterial color={CORAL} emissive={CORAL} emissiveIntensity={0.6} />
      </mesh>
      <mesh ref={needle} position={[0, 0.78, NZ]} castShadow>
        <cylinderGeometry args={[0.014, 0.006, 0.36, 8]} />
        <meshStandardMaterial color="#D1D5DB" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.39, NZ]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.05, 0.01, 8, 24]} />
        <meshStandardMaterial color="#9CA3AF" metalness={0.8} roughness={0.3} />
      </mesh>

      {spools.map((col, i) => (
        <group key={i} position={[coloreel ? 0 : -0.15 + (i % 2) * 0.3, 1.72, coloreel ? -0.55 : -0.62 + Math.floor(i / 2) * 0.3]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.085, 0.085, 0.2, 24]} />
            <meshStandardMaterial color={col} roughness={0.7} />
          </mesh>
          <mesh position={[0, 0.12, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.025, 24]} />
            <meshStandardMaterial color="#E5E7EB" roughness={0.5} />
          </mesh>
        </group>
      ))}

      {/* Coloreel: the dye unit colours the white thread on its way to the needle */}
      {coloreel && (
        <group position={[0, 1.7, 0.05]}>
          <Box args={[0.38, 0.22, 0.42]} color="#0B0F17" radius={0.05} />
          <mesh position={[0, 0, 0.215]}>
            <boxGeometry args={[0.26, 0.06, 0.01]} />
            <meshStandardMaterial ref={dye} color="#ffffff" emissive="#ffffff" emissiveIntensity={1.2} />
          </mesh>
        </group>
      )}
    </Rig>
  );
}
