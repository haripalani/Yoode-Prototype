"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";

/*
  A live DTG printer: a flat T-shirt rides in on the platen, the print head sweeps across it while the platen
  steps forward, and the artwork appears row by row where the head has passed. Then the platen slides out,
  the finished print rests for a beat, and the cycle starts again.
*/

const CYCLE = 8.2; // seconds per print
const T_IN = 1.1, T_PRINT = 5.0, T_OUT = 6.0; // phase ends: slide in, print, slide out (then hold)
const ART_TOP = -0.42, ART_BOTTOM = 0.08; // the artwork's span on the platen (local z; -z is the collar)
const LOAD_Z = 1.9; // platen position when slid out to the front

const ONYX = "#111827", BODY = "#1F2937", METAL = "#4B5563", CORAL = "#E53935";
const INKS = ["#19C3E6", "#F0517A", "#F7C84D", "#F8FAFC", "#111111"];

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

/** the sunset-and-waves artwork, drawn once */
function drawArtwork(size: number) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d")!;
  const s = size / 512;
  g.fillStyle = "#FBAE3C";
  g.beginPath(); g.arc(256 * s, 190 * s, 104 * s, 0, Math.PI * 2); g.fill();
  g.lineCap = "round"; g.lineWidth = 34 * s;
  [["#2443D0", 285], ["#F0517A", 342], ["#12B5C9", 399]].forEach(([col, y]) => {
    g.strokeStyle = col as string; g.beginPath();
    for (let x = 70; x <= 442; x += 6) {
      const yy = (y as number) + Math.sin((x - 70) / 62) * 22;
      if (x === 70) g.moveTo(x * s, yy * s); else g.lineTo(x * s, yy * s);
    }
    g.stroke();
  });
  return c;
}

/** the print texture: the artwork, revealed down to a given row as the head passes */
function createPrintTexture() {
  const art = drawArtwork(512);
  const cv = document.createElement("canvas"); cv.width = cv.height = 512;
  const ctx = cv.getContext("2d")!;
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  let lastRow = -1;
  return {
    tex,
    /** reveal the artwork down to `p` (0..1), rows from the collar side first */
    reveal(p: number) {
      const row = Math.round(p * 128);
      if (row === lastRow) return;
      lastRow = row;
      ctx.clearRect(0, 0, 512, 512);
      const h = (row / 128) * 512;
      if (h > 0) ctx.drawImage(art, 0, 0, 512, h, 0, 0, 512, h);
      tex.needsUpdate = true;
    },
  };
}

/** stable pseudo-random in [0,1) */
const rnd = (i: number) => { const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); };

/** a T-shirt laid flat (outline in XY, extruded a hair thick; the scene turns it to lie on the platen) */
function teeShape() {
  const s = new THREE.Shape();
  s.moveTo(-0.17, 0.64);
  s.lineTo(-0.44, 0.57); s.lineTo(-0.72, 0.36); s.lineTo(-0.58, 0.17); s.lineTo(-0.44, 0.27);
  s.lineTo(-0.44, -0.66); s.quadraticCurveTo(0, -0.69, 0.44, -0.66);
  s.lineTo(0.44, 0.27); s.lineTo(0.58, 0.17); s.lineTo(0.72, 0.36); s.lineTo(0.44, 0.57);
  s.lineTo(0.17, 0.64); s.quadraticCurveTo(0, 0.46, -0.17, 0.64);
  return s;
}

export default function DtgScene({ animate }: { animate: boolean }) {
  const platen = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const rig = useRef<THREE.Group>(null);
  const ink = useRef<THREE.Points>(null);
  const led = useRef<THREE.MeshStandardMaterial>(null);
  const print = useMemo(() => createPrintTexture(), []);

  const teeGeo = useMemo(() => {
    const geo = new THREE.ExtrudeGeometry(teeShape(), { depth: 0.025, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.012, bevelSegments: 3, curveSegments: 18 });
    geo.rotateX(-Math.PI / 2);
    return geo;
  }, []);

  // ink spray: a short column of droplets under the head, in the cartridge colours
  const inkGeo = useMemo(() => {
    const n = 90, pos = new Float32Array(n * 3), col = new Float32Array(n * 3), c = new THREE.Color();
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (rnd(i) - 0.5) * 0.22; pos[i * 3 + 1] = rnd(i + 500); pos[i * 3 + 2] = (rnd(i + 1000) - 0.5) * 0.08;
      c.set(INKS[i % 3]); col.set([c.r, c.g, c.b], i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return g;
  }, []);

  useEffect(() => () => { print.tex.dispose(); teeGeo.dispose(); inkGeo.dispose(); }, [print, teeGeo, inkGeo]);

  useFrame((state, dt) => {
    const t = animate ? state.clock.elapsedTime % CYCLE : T_OUT + 0.5;
    let platenZ: number, printP: number, headX = 0, spraying = false;
    const zAt = (p: number) => -(ART_TOP + (ART_BOTTOM - ART_TOP) * p); // platen z that puts row p under the head

    if (t < T_IN) { // slide in to the first row
      const k = ease(t / T_IN); platenZ = LOAD_Z + (zAt(0) - LOAD_Z) * k; printP = 0;
    } else if (t < T_PRINT) { // print: head sweeps, platen steps forward a pass at a time
      const k = (t - T_IN) / (T_PRINT - T_IN), passes = 14, pass = k * passes;
      const step = Math.floor(pass) + ease(clamp01((pass % 1) * 6)); // a quick step between sweeps
      printP = clamp01(step / passes);
      platenZ = zAt(printP);
      headX = Math.cos(pass * Math.PI) * 0.62; // one sweep per pass
      spraying = true;
    } else if (t < T_OUT) { // slide out, finished
      const k = ease((t - T_PRINT) / (T_OUT - T_PRINT)); platenZ = zAt(1) + (LOAD_Z - zAt(1)) * k; printP = 1;
    } else { // rest on the platen, then clear for the next shirt
      platenZ = LOAD_Z; printP = t > CYCLE - 0.25 ? 0 : 1;
    }

    if (platen.current) platen.current.position.z = platenZ;
    if (head.current) head.current.position.x = headX;
    print.reveal(printP);

    if (ink.current) {
      ink.current.visible = spraying;
      if (spraying) {
        const a = ink.current.geometry.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < a.count; i++) { let y = a.getY(i) - dt * 3.2; if (y < 0) y += 1; a.setY(i, y); }
        a.needsUpdate = true;
        ink.current.position.x = headX;
      }
    }
    if (led.current) led.current.emissiveIntensity = spraying ? 1.6 + Math.sin(state.clock.elapsedTime * 18) * 0.6 : 0.8;

    // a gentle parallax toward the pointer
    if (rig.current) {
      rig.current.rotation.y = THREE.MathUtils.damp(rig.current.rotation.y, -0.32 + state.pointer.x * 0.12, 3, dt);
      rig.current.rotation.x = THREE.MathUtils.damp(rig.current.rotation.x, state.pointer.y * -0.04, 3, dt);
    }
  });

  return (
    <group ref={rig} rotation={[0, -0.32, 0]} position={[0, -0.55, 0]}>
      {/* chassis and the rails the platen rides on */}
      <RoundedBox args={[3.3, 0.42, 2.7]} radius={0.12} smoothness={4} position={[0, 0.21, 0.35]} castShadow receiveShadow>
        <meshStandardMaterial color={BODY} roughness={0.55} metalness={0.15} />
      </RoundedBox>
      {[-0.55, 0.55].map((x) => (
        <mesh key={x} position={[x, 0.445, 0.55]} receiveShadow>
          <boxGeometry args={[0.07, 0.05, 2.5]} />
          <meshStandardMaterial color={METAL} roughness={0.35} metalness={0.6} />
        </mesh>
      ))}
      <mesh position={[0, 0.25, 1.705]}>
        <boxGeometry args={[2.6, 0.04, 0.01]} />
        <meshStandardMaterial color={CORAL} emissive={CORAL} emissiveIntensity={0.35} />
      </mesh>

      {/* the platen, with the shirt laid flat on it */}
      <group ref={platen} position={[0, 0, LOAD_Z]}>
        <RoundedBox args={[1.75, 0.07, 2.05]} radius={0.03} smoothness={3} position={[0, 0.5, 0]} castShadow receiveShadow>
          <meshStandardMaterial color="#3A404B" roughness={0.85} />
        </RoundedBox>
        <mesh geometry={teeGeo} position={[0, 0.535, 0]} castShadow receiveShadow>
          <meshStandardMaterial color="#F7F6F2" roughness={0.95} />
        </mesh>
        <mesh position={[0, 0.577, (ART_TOP + ART_BOTTOM) / 2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[ART_BOTTOM - ART_TOP, ART_BOTTOM - ART_TOP]} />
          <meshStandardMaterial map={print.tex} transparent roughness={0.9} polygonOffset polygonOffsetFactor={-2} />
        </mesh>
      </group>

      {/* gantry: two posts and the bridge, with the ink cartridges on top */}
      {[-1.5, 1.5].map((x) => (
        <RoundedBox key={x} args={[0.26, 0.86, 0.6]} radius={0.06} smoothness={3} position={[x, 0.82, 0]} castShadow>
          <meshStandardMaterial color={ONYX} roughness={0.5} metalness={0.2} />
        </RoundedBox>
      ))}
      <RoundedBox args={[3.26, 0.32, 0.6]} radius={0.08} smoothness={4} position={[0, 1.36, 0]} castShadow>
        <meshStandardMaterial color={ONYX} roughness={0.45} metalness={0.25} />
      </RoundedBox>
      <mesh position={[0, 1.2, 0.302]}>
        <boxGeometry args={[2.9, 0.035, 0.01]} />
        <meshStandardMaterial color={METAL} roughness={0.3} metalness={0.7} />
      </mesh>
      {INKS.map((c, i) => (
        <RoundedBox key={c} args={[0.36, 0.16, 0.3]} radius={0.04} smoothness={3} position={[-0.92 + i * 0.42, 1.6, 0]} castShadow>
          <meshStandardMaterial color={c} roughness={0.35} />
        </RoundedBox>
      ))}

      {/* the print head, sweeping along the bridge */}
      <group ref={head} position={[0, 0, 0]}>
        <RoundedBox args={[0.46, 0.3, 0.62]} radius={0.06} smoothness={3} position={[0, 1.0, 0.04]} castShadow>
          <meshStandardMaterial color="#374151" roughness={0.4} metalness={0.3} />
        </RoundedBox>
        <mesh position={[0, 1.0, 0.356]}>
          <boxGeometry args={[0.3, 0.05, 0.01]} />
          <meshStandardMaterial color={CORAL} emissive={CORAL} emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0.15, 1.1, 0.356]}>
          <circleGeometry args={[0.025, 16]} />
          <meshStandardMaterial ref={led} color="#4ADE80" emissive="#4ADE80" emissiveIntensity={0.8} />
        </mesh>
      </group>
      <points ref={ink} geometry={inkGeo} position={[0, 0.58, 0.04]} scale={[1, 0.27, 1]} visible={false}>
        <pointsMaterial size={0.022} vertexColors transparent opacity={0.9} depthWrite={false} />
      </points>
    </group>
  );
}
