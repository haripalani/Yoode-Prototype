"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Box, BODY, ONYX, METAL, CORAL, Rig, clamp01, resample, circlePts, createPathReveal, rnd } from "./kit";

/*
  A laser engraver. The gantry carries the head over a leather patch and the beam traces the artwork, scorching a
  permanent line into the surface with a wisp of smoke; there is no ink anywhere.
*/

const CYCLE = 8.8, T0 = 0.4, T1 = 6.8;
const S = 1.0, MAT_Z = 0.4, MAT_Y = 0.5;

type P = { x: number; y: number; jump: boolean };

function artwork(): P[] {
  const strokes: [number, number][][] = [
    circlePts(0.5, 0.5, 0.42, 120),
    circlePts(0.5, 0.5, 0.385, 120),
    [[0.2, 0.62], [0.33, 0.44], [0.42, 0.55], [0.55, 0.34], [0.68, 0.52], [0.74, 0.46], [0.8, 0.62]],
    circlePts(0.66, 0.33, 0.06, 48),
    [[0.18, 0.62], [0.82, 0.62]],
    [[0.36, 0.7], [0.64, 0.7]],
    [[0.41, 0.76], [0.59, 0.76]],
  ];
  return strokes.flatMap((s) => resample(s, 0.004).map(([x, y], i) => ({ x, y, jump: i === 0 })));
}

export default function EngravingScene({ animate }: { animate: boolean }) {
  const beam = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const ray = useRef<THREE.Mesh>(null);
  const hot = useRef<THREE.PointLight>(null);
  const smoke = useRef<THREE.Points>(null);

  const { pts, burn, smokeGeo } = useMemo(() => {
    const pts = artwork();
    const burn = createPathReveal(1024, pts.length, (g, from, to) => {
      g.lineCap = "round"; g.lineJoin = "round";
      for (const [w, col] of [[11, "rgba(70,40,20,0.28)"], [5, "#2E1A0E"]] as const) {
        g.strokeStyle = col; g.lineWidth = w; g.beginPath();
        for (let i = from; i <= to; i++) {
          const p = pts[i];
          if (i === from || p.jump) g.moveTo(p.x * 1024, p.y * 1024); else g.lineTo(p.x * 1024, p.y * 1024);
        }
        g.stroke();
      }
    });
    const n = 50, pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { pos[i * 3] = (rnd(i) - 0.5) * 0.12; pos[i * 3 + 1] = rnd(i + 50); pos[i * 3 + 2] = (rnd(i + 150) - 0.5) * 0.12; }
    const smokeGeo = new THREE.BufferGeometry(); smokeGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return { pts, burn, smokeGeo };
  }, []);
  useEffect(() => () => { burn.tex.dispose(); smokeGeo.dispose(); }, [burn, smokeGeo]);

  useFrame((state, dt) => {
    const t = animate ? state.clock.elapsedTime % CYCLE : T1 + 0.5;
    const k = clamp01((t - T0) / (T1 - T0)), on = t > T0 && t < T1;
    const n = t > CYCLE - 0.3 ? 0 : k * (pts.length - 1);
    burn.to(n);
    const p = on ? pts[Math.floor(n)] : { x: 0.5, y: -0.25, jump: true };
    const x = (p.x - 0.5) * S, z = MAT_Z + (p.y - 0.5) * S;
    const firing = on && !p.jump;
    if (beam.current) beam.current.position.z = THREE.MathUtils.lerp(beam.current.position.z, z - 0.16, 0.5);
    if (head.current) head.current.position.x = THREE.MathUtils.lerp(head.current.position.x, x, 0.5);
    if (ray.current) { ray.current.visible = firing; (ray.current.material as THREE.MeshBasicMaterial).opacity = 0.7 + Math.sin(state.clock.elapsedTime * 50) * 0.2; }
    if (hot.current) { hot.current.intensity = firing ? 1.4 : 0; hot.current.position.set(x, MAT_Y + 0.06, z); }
    if (smoke.current) {
      smoke.current.visible = firing;
      smoke.current.position.set(x, MAT_Y + 0.03, z);
      const a = smoke.current.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < a.count; i++) { let y = a.getY(i) + dt * 0.9; if (y > 1) y -= 1; a.setY(i, y); }
      a.needsUpdate = true;
    }
  });

  return (
    <Rig>
      {/* cabinet and honeycomb bed */}
      <Box args={[3.1, 0.46, 2.6]} position={[0, 0.23, 0.35]} color={BODY} radius={0.12} rough={0.55} metal={0.15} />
      <mesh position={[0, 0.25, 1.655]}>
        <boxGeometry args={[2.5, 0.04, 0.01]} />
        <meshStandardMaterial color={CORAL} emissive={CORAL} emissiveIntensity={0.35} />
      </mesh>
      <mesh position={[0, 0.462, 0.35]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[2.5, 2.1]} />
        <meshStandardMaterial color="#2B3038" roughness={0.6} metalness={0.4} />
      </mesh>

      {/* the leather patch and the burn */}
      <Box args={[1.24, 0.04, 1.24]} position={[0, 0.48, MAT_Z]} color="#8A5A35" radius={0.06} rough={0.85} metal={0} />
      <mesh position={[0, MAT_Y + 0.002, MAT_Z]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[S, S]} />
        <meshStandardMaterial map={burn.tex} transparent roughness={0.9} polygonOffset polygonOffsetFactor={-2} />
      </mesh>

      {/* rails along the sides and the moving beam with the laser head */}
      {[-1.35, 1.35].map((x) => <Box key={x} args={[0.14, 0.12, 2.3]} position={[x, 0.6, 0.35]} color={METAL} radius={0.03} metal={0.7} rough={0.3} />)}
      <group ref={beam} position={[0, 0, MAT_Z - 0.75]}>
        <Box args={[2.9, 0.14, 0.18]} position={[0, 0.98, 0]} color={ONYX} radius={0.04} />
        {[-1.35, 1.35].map((x) => <Box key={x} args={[0.2, 0.36, 0.26]} position={[x, 0.8, 0]} color={ONYX} radius={0.04} />)}
        <group ref={head}>
          <Box args={[0.24, 0.32, 0.26]} position={[0, 0.94, 0.16]} color="#374151" radius={0.05} rough={0.4} metal={0.3} />
          <mesh position={[0, 0.94, 0.292]}>
            <boxGeometry args={[0.16, 0.04, 0.01]} />
            <meshStandardMaterial color={CORAL} emissive={CORAL} emissiveIntensity={0.6} />
          </mesh>
          <mesh position={[0, 0.74, 0.16]}>
            <coneGeometry args={[0.06, 0.12, 16]} />
            <meshStandardMaterial color="#9CA3AF" metalness={0.8} roughness={0.3} />
          </mesh>
          <mesh ref={ray} position={[0, (0.68 + MAT_Y) / 2, 0.16]} visible={false}>
            <cylinderGeometry args={[0.006, 0.006, 0.68 - MAT_Y, 8]} />
            <meshBasicMaterial color="#FF4D2E" transparent opacity={0.8} />
          </mesh>
        </group>
      </group>
      <pointLight ref={hot} color="#FF7A2E" intensity={0} distance={0.8} decay={2} />
      <points ref={smoke} geometry={smokeGeo} scale={[1, 0.5, 1]} visible={false}>
        <pointsMaterial size={0.035} color="#D6D3D1" transparent opacity={0.35} depthWrite={false} />
      </points>
    </Rig>
  );
}
