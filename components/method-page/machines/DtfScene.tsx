"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Box, BODY, ONYX, METAL, CORAL, Rig, phase, makeCanvas, createReveal, teeGeometry, rnd } from "./kit";

/*
  DTF on a heat press: the printed transfer film slides in over a dark tee, the hot plate swings down and presses,
  lifts, and the film is peeled back from the collar to the hem, leaving the print on the fabric.
*/

const CYCLE = 8;
const ART = 0.62; // printed area size (world units)

/** a bold badge: the kind of flat, opaque, white-backed vector art DTF is good at */
function drawBadge() {
  const { c, g } = makeCanvas(512);
  g.fillStyle = CORAL; g.beginPath(); g.arc(256, 226, 168, 0, Math.PI * 2); g.fill();
  g.lineWidth = 14; g.strokeStyle = "#ffffff"; g.beginPath(); g.arc(256, 226, 140, 0, Math.PI * 2); g.stroke();
  g.fillStyle = "#ffffff"; g.font = "900 190px Arial, Helvetica, sans-serif"; g.textAlign = "center"; g.textBaseline = "middle";
  g.fillText("Y", 256, 236);
  g.fillStyle = "#F7C84D";
  for (let i = 0; i < 5; i++) { const a = -Math.PI / 2 + (i - 2) * 0.32; g.beginPath(); g.arc(256 + Math.cos(a) * 112, 226 + Math.sin(a) * 112 - 4, 9, 0, Math.PI * 2); g.fill(); }
  g.fillStyle = "#ffffff"; g.font = "900 54px Arial, Helvetica, sans-serif"; g.fillText("STREET CLUB", 256, 452);
  return c;
}

export default function DtfScene({ animate }: { animate: boolean }) {
  const lid = useRef<THREE.Group>(null);
  const film = useRef<THREE.Group>(null);
  const filmPeel = useRef<THREE.Group>(null);
  const filmMat = useRef<THREE.MeshStandardMaterial>(null);
  const filmArtMat = useRef<THREE.MeshBasicMaterial>(null);
  const heat = useRef<THREE.MeshStandardMaterial>(null);
  const lamp = useRef<THREE.MeshStandardMaterial>(null);
  const steam = useRef<THREE.Points>(null);

  const { art, print, teeGeo, steamGeo } = useMemo(() => {
    const art = drawBadge();
    const tex = new THREE.CanvasTexture(art); tex.colorSpace = THREE.SRGBColorSpace;
    const print = createReveal(art, "rows");
    const n = 40, pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { pos[i * 3] = (rnd(i) - 0.5) * 1.6; pos[i * 3 + 1] = rnd(i + 99); pos[i * 3 + 2] = (rnd(i + 199) - 0.5) * 1.6; }
    const steamGeo = new THREE.BufferGeometry(); steamGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return { art: tex, print, teeGeo: teeGeometry(), steamGeo };
  }, []);
  useEffect(() => () => { art.dispose(); print.tex.dispose(); teeGeo.dispose(); steamGeo.dispose(); }, [art, print, teeGeo, steamGeo]);

  useFrame((state, dt) => {
    const t = animate ? state.clock.elapsedTime % CYCLE : 6.5;
    const slideIn = phase(t, 0.2, 1.1);           // film slides in from the front
    const close = phase(t, 1.2, 1.9) - phase(t, 3.3, 4.0); // lid down, then up
    const peel = phase(t, 4.2, 5.4);              // film peeled from the collar side
    const reset = t > CYCLE - 0.5;

    if (lid.current) lid.current.rotation.x = -0.78 * (1 - close);
    if (heat.current) heat.current.emissiveIntensity = close > 0.95 ? 0.9 + Math.sin(state.clock.elapsedTime * 6) * 0.15 : close * 0.4;
    if (lamp.current) lamp.current.emissiveIntensity = close > 0.95 ? 1.8 : 0.4;
    if (film.current) { film.current.position.z = 1.9 * (1 - slideIn); film.current.visible = !reset && peel < 1; }
    if (filmPeel.current) filmPeel.current.rotation.x = -2.2 * peel;
    const filmOpacity = 1 - peel * 0.9;
    if (filmMat.current) filmMat.current.opacity = 0.32 * filmOpacity;
    // before the press the ink is on the film; after it, the film is just a carrier as it peels away
    if (filmArtMat.current) filmArtMat.current.opacity = t < 3.3 ? 1 : 0;
    print.reveal(reset ? 0 : t < 3.3 ? 0 : 1);

    if (steam.current) {
      steam.current.visible = close > 0.95;
      const a = steam.current.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < a.count; i++) { let y = a.getY(i) + dt * 0.5; if (y > 1) y -= 1; a.setY(i, y); }
      a.needsUpdate = true;
    }
  });

  return (
    <Rig>
      {/* base, lower platen and the tee */}
      <Box args={[2.5, 0.32, 2.4]} position={[0, 0.16, 0.25]} color={BODY} radius={0.12} rough={0.55} metal={0.15} />
      <Box args={[1.8, 0.12, 2.0]} position={[0, 0.38, 0.35]} color="#3A404B" radius={0.04} rough={0.85} metal={0} />
      <mesh geometry={teeGeo} position={[0, 0.44, 0.35]} castShadow receiveShadow>
        <meshStandardMaterial color="#1B2230" roughness={0.95} />
      </mesh>
      <mesh position={[0, 0.483, 0.35 - 0.05]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[ART, ART]} />
        <meshStandardMaterial map={print.tex} transparent roughness={0.6} polygonOffset polygonOffsetFactor={-2} />
      </mesh>

      {/* the transfer film: hinged at its collar edge so it can be peeled back */}
      <group ref={film} position={[0, 0, 0]}>
        <group position={[0, 0.49, 0.35 - 0.05 - 0.45]}>
          <group ref={filmPeel}>
            <group position={[0, 0, 0.45]}>
              <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[1.0, 0.9]} />
                <meshStandardMaterial ref={filmMat} color="#F4F7FB" transparent opacity={0.32} roughness={0.15} metalness={0.1} side={THREE.DoubleSide} depthWrite={false} />
              </mesh>
              <mesh position={[0, 0.002, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[ART, ART]} />
                <meshBasicMaterial ref={filmArtMat} map={art} transparent depthWrite={false} />
              </mesh>
            </group>
          </group>
        </group>
      </group>

      {/* the press: a back column and the hot upper plate on a hinge */}
      <Box args={[0.5, 1.3, 0.45]} position={[0, 0.95, -0.98]} color={ONYX} radius={0.08} />
      <Box args={[0.36, 0.14, 0.2]} position={[0.42, 1.25, -0.98]} color="#0B0F17" radius={0.03} />
      <mesh position={[0.42, 1.25, -0.875]}>
        <boxGeometry args={[0.22, 0.07, 0.005]} />
        <meshStandardMaterial ref={lamp} color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.4} />
      </mesh>
      <group ref={lid} position={[0, 1.42, -0.85]} rotation={[-0.78, 0, 0]}>
        <group position={[0, -0.86, 1.2]}>
          <Box args={[1.86, 0.2, 2.06]} position={[0, 0, 0]} color={ONYX} radius={0.06} rough={0.4} metal={0.3} />
          {/* the heating element underneath */}
          <mesh position={[0, -0.105, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry args={[1.72, 1.92]} />
            <meshStandardMaterial ref={heat} color="#6B7280" emissive="#FF6A1A" emissiveIntensity={0} metalness={0.7} roughness={0.35} />
          </mesh>
          <mesh position={[0, 0.105, 0.6]}>
            <boxGeometry args={[1.5, 0.012, 0.03]} />
            <meshStandardMaterial color={CORAL} emissive={CORAL} emissiveIntensity={0.4} />
          </mesh>
          {/* the handle */}
          <mesh position={[0, 0.06, 1.18]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.045, 0.045, 1.1, 16]} />
            <meshStandardMaterial color={METAL} metalness={0.7} roughness={0.3} />
          </mesh>
        </group>
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.06, 0.06, 0.6, 16]} />
          <meshStandardMaterial color={METAL} metalness={0.7} roughness={0.3} />
        </mesh>
      </group>

      <points ref={steam} geometry={steamGeo} position={[0, 0.6, 0.35]} scale={[1, 0.9, 1]} visible={false}>
        <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.35} depthWrite={false} />
      </points>
    </Rig>
  );
}

