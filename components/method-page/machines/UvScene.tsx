"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Box, BODY, ONYX, METAL, CORAL, Rig, clamp01, makeCanvas, createReveal } from "./kit";

/*
  UV printing on a steel bottle: the bottle turns on a rotary attachment while the head sweeps along it, and the
  violet UV lamp riding beside the head cures each pass the moment it lands, so the full-colour wrap builds up
  around the bottle.
*/

const CYCLE = 8.2, T0 = 0.6, T1 = 5.8;
const INKS = ["#19C3E6", "#F0517A", "#F7C84D", "#111111", "#F8FAFC"];
const R = 0.25, LEN = 1.35, AXIS_Y = 0.83;

function drawWrap() {
  const { c, g } = makeCanvas(512);
  const sky = g.createLinearGradient(0, 0, 512, 0);
  sky.addColorStop(0, "#6D28D9"); sky.addColorStop(0.5, CORAL); sky.addColorStop(1, "#F7C84D");
  g.fillStyle = sky; g.fillRect(0, 70, 512, 372);
  g.fillStyle = "#FFF3D6"; g.beginPath(); g.arc(330, 220, 62, 0, Math.PI * 2); g.fill();
  g.fillStyle = "#1F1235";
  g.beginPath(); g.moveTo(0, 442); g.lineTo(0, 330); g.lineTo(90, 250); g.lineTo(170, 320); g.lineTo(260, 230); g.lineTo(370, 340); g.lineTo(440, 280); g.lineTo(512, 330); g.lineTo(512, 442); g.fill();
  g.fillStyle = "#ffffff"; g.font = "900 46px Arial, Helvetica, sans-serif"; g.textAlign = "center"; g.fillText("YOODE", 256, 410);
  return c;
}

export default function UvScene({ animate }: { animate: boolean }) {
  const bottle = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const uv = useRef<THREE.MeshStandardMaterial>(null);
  const glow = useRef<THREE.PointLight>(null);
  const wrap = useMemo(() => createReveal(drawWrap(), "cols"), []);
  useEffect(() => () => wrap.tex.dispose(), [wrap]);

  useFrame((state) => {
    const t = animate ? state.clock.elapsedTime % CYCLE : T1 + 0.5;
    const k = clamp01((t - T0) / (T1 - T0)), printing = t > T0 && t < T1;
    wrap.reveal(t > CYCLE - 0.3 ? 0 : k);
    // one full turn while printing, so the newest column is always the one under the head
    if (bottle.current) bottle.current.rotation.x = -k * Math.PI * 2 + Math.PI / 2;
    if (head.current) head.current.position.x = printing ? Math.sin(state.clock.elapsedTime * 7) * 0.42 : 0;
    const on = printing ? 2.2 + Math.sin(state.clock.elapsedTime * 30) * 0.3 : 0.25;
    if (uv.current) uv.current.emissiveIntensity = on;
    if (glow.current) glow.current.intensity = printing ? 1.6 : 0;
  });

  return (
    <Rig>
      {/* chassis and the rotary attachment */}
      <Box args={[3.3, 0.42, 2.7]} position={[0, 0.21, 0.35]} color={BODY} radius={0.12} rough={0.55} metal={0.15} />
      <mesh position={[0, 0.25, 1.705]}>
        <boxGeometry args={[2.6, 0.04, 0.01]} />
        <meshStandardMaterial color={CORAL} emissive={CORAL} emissiveIntensity={0.35} />
      </mesh>
      <Box args={[1.9, 0.16, 0.7]} position={[0, 0.5, 0]} color="#3A404B" radius={0.04} rough={0.8} metal={0.1} />
      {[-0.21, 0.21].map((z) => (
        <mesh key={z} position={[0, 0.62, z]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 1.5, 20]} />
          <meshStandardMaterial color="#111111" roughness={0.6} />
        </mesh>
      ))}

      {/* the steel bottle, lying on the rollers; its print wrap turns with it */}
      <group position={[0, AXIS_Y, 0]}>
        <group ref={bottle}>
          <group rotation={[0, 0, Math.PI / 2]}>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[R, R, LEN, 48]} />
              <meshStandardMaterial color="#C9CED6" metalness={0.55} roughness={0.28} />
            </mesh>
            <mesh>
              <cylinderGeometry args={[R + 0.003, R + 0.003, LEN * 0.8, 64, 1, true]} />
              <meshStandardMaterial map={wrap.tex} transparent roughness={0.25} metalness={0.1} />
            </mesh>
            <mesh position={[0, LEN / 2 + 0.07, 0]}>
              <cylinderGeometry args={[R * 0.72, R * 0.8, 0.14, 32]} />
              <meshStandardMaterial color="#9AA1AB" metalness={0.6} roughness={0.3} />
            </mesh>
            <mesh position={[0, LEN / 2 + 0.2, 0]} castShadow>
              <cylinderGeometry args={[R * 0.62, R * 0.62, 0.14, 32]} />
              <meshStandardMaterial color={ONYX} roughness={0.5} />
            </mesh>
          </group>
        </group>
      </group>

      {/* gantry with the ink bank */}
      {[-1.5, 1.5].map((x) => <Box key={x} args={[0.26, 0.98, 0.6]} position={[x, 0.9, 0]} color={ONYX} radius={0.06} />)}
      <Box args={[3.26, 0.32, 0.6]} position={[0, 1.5, 0]} color={ONYX} radius={0.08} rough={0.45} metal={0.25} />
      {INKS.map((c, i) => <Box key={c} args={[0.32, 0.16, 0.3]} position={[-0.84 + i * 0.42, 1.74, 0]} color={c} radius={0.04} rough={0.35} metal={0} />)}

      {/* the head and its UV lamp */}
      <group ref={head}>
        <Box args={[0.42, 0.3, 0.56]} position={[0, 1.3, 0.02]} color="#374151" radius={0.06} rough={0.4} metal={0.3} />
        <Box args={[0.2, 0.22, 0.5]} position={[0.34, 1.28, 0.02]} color="#0B0F17" radius={0.04} />
        <mesh position={[0.34, 1.165, 0.02]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.16, 0.44]} />
          <meshStandardMaterial ref={uv} color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.25} />
        </mesh>
        <pointLight ref={glow} position={[0.34, 1.1, 0.02]} color="#8B5CF6" intensity={0} distance={1.1} decay={2} />
        <mesh position={[0, 1.3, 0.305]}>
          <boxGeometry args={[0.28, 0.05, 0.01]} />
          <meshStandardMaterial color={CORAL} emissive={CORAL} emissiveIntensity={0.6} />
        </mesh>
      </group>
      <mesh position={[0, 1.33, 0.302]}>
        <boxGeometry args={[2.9, 0.035, 0.01]} />
        <meshStandardMaterial color={METAL} roughness={0.3} metalness={0.7} />
      </mesh>
    </Rig>
  );
}
