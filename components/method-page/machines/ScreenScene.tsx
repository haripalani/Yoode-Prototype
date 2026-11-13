"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Box, BODY, ONYX, METAL, CORAL, Rig, phase, makeCanvas, createReveal, teeGeometry } from "./kit";

/*
  A screen-printing press. The hinged screen drops onto the tee, the squeegee pulls a bead of ink across the mesh,
  and the screen lifts: one colour down. Then the second screen does the same for the next colour.
*/

const CYCLE = 8.6;
const PASSES = [{ start: 0.3, ink: CORAL }, { start: 3.0, ink: ONYX }];
const ART_TOP = -0.42, ART_BOTTOM = 0.1, TEE_Z = 0.35;

function layerA() {
  const { c, g } = makeCanvas(512);
  g.fillStyle = CORAL;
  g.beginPath(); g.arc(256, 214, 150, 0, Math.PI * 2); g.fill();
  g.fillRect(96, 400, 320, 34);
  return c;
}
function layerB() {
  const { c, g } = makeCanvas(512);
  g.fillStyle = ONYX; g.font = "900 128px Arial, Helvetica, sans-serif"; g.textAlign = "center"; g.textBaseline = "middle";
  g.fillText("CREW", 256, 222);
  g.font = "900 40px Arial, Helvetica, sans-serif"; g.fillText("EST · 2026", 256, 476);
  return c;
}

export default function ScreenScene({ animate }: { animate: boolean }) {
  const frame = useRef<THREE.Group>(null);
  const squeegee = useRef<THREE.Group>(null);
  const bead = useRef<THREE.MeshStandardMaterial>(null);

  const { a, b, teeGeo } = useMemo(() => ({ a: createReveal(layerA(), "rows"), b: createReveal(layerB(), "rows"), teeGeo: teeGeometry() }), []);
  useEffect(() => () => { a.tex.dispose(); b.tex.dispose(); teeGeo.dispose(); }, [a, b, teeGeo]);

  useFrame((state) => {
    const t = animate ? state.clock.elapsedTime % CYCLE : 7;
    // which pass is on, and how far it has got
    const cur = t < PASSES[1].start - 0.1 ? 0 : 1, s = PASSES[cur].start;
    const down = phase(t, s, s + 0.6) - phase(t, s + 2.0, s + 2.6);
    const pull = phase(t, s + 0.7, s + 1.9);
    const reset = t > CYCLE - 0.4;

    if (frame.current) frame.current.rotation.x = -0.7 * (1 - down);
    if (squeegee.current) squeegee.current.position.z = -0.62 + pull * 1.24;
    if (bead.current) bead.current.color.set(PASSES[cur].ink);

    a.reveal(reset ? 0 : cur === 0 ? pull : 1);
    b.reveal(reset ? 0 : cur === 1 ? pull : 0);
  });

  const art = ART_BOTTOM - ART_TOP;
  return (
    <Rig>
      <Box args={[3.0, 0.42, 2.6]} position={[0, 0.21, 0.3]} color={BODY} radius={0.12} rough={0.55} metal={0.15} />
      <mesh position={[0, 0.25, 1.605]}>
        <boxGeometry args={[2.4, 0.04, 0.01]} />
        <meshStandardMaterial color={CORAL} emissive={CORAL} emissiveIntensity={0.35} />
      </mesh>
      {/* the platen and the tee */}
      <Box args={[1.75, 0.07, 2.0]} position={[0, 0.465, TEE_Z]} color="#3A404B" radius={0.03} rough={0.85} metal={0} />
      <mesh geometry={teeGeo} position={[0, 0.5, TEE_Z]} castShadow receiveShadow>
        <meshStandardMaterial color="#F7F6F2" roughness={0.95} />
      </mesh>
      {[a, b].map((layer, i) => (
        <mesh key={i} position={[0, 0.542 + i * 0.002, TEE_Z + (ART_TOP + ART_BOTTOM) / 2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[art, art]} />
          <meshStandardMaterial map={layer.tex} transparent roughness={0.95} polygonOffset polygonOffsetFactor={-2 - i} />
        </mesh>
      ))}

      {/* the hinge at the back and the screen on its arm */}
      <Box args={[0.36, 0.5, 0.36]} position={[0, 0.66, -0.98]} color={ONYX} radius={0.06} />
      <group ref={frame} position={[0, 0.66, -0.9]} rotation={[-0.7, 0, 0]}>
        <Box args={[0.18, 0.08, 0.5]} position={[0, 0, 0.1]} color={METAL} radius={0.02} metal={0.6} rough={0.35} />
        <group position={[0, -0.04, 1.08]}>
          {/* the aluminium frame */}
          {([[0, -0.78, 1.6, 0.09], [0, 0.78, 1.6, 0.09], [-0.78, 0, 0.09, 1.65], [0.78, 0, 0.09, 1.65]] as const).map(([x, z, w, d], i) => (
            <Box key={i} args={[w, 0.07, d]} position={[x, 0, z]} color="#9CA3AF" radius={0.02} metal={0.8} rough={0.3} />
          ))}
          {/* the mesh */}
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[1.48, 1.48]} />
            <meshStandardMaterial color="#5B8C7A" transparent opacity={0.45} roughness={0.6} side={THREE.DoubleSide} depthWrite={false} />
          </mesh>
          {/* the squeegee and the bead of ink it pushes */}
          <group ref={squeegee} position={[0, 0.05, -0.62]}>
            <group>
              <Box args={[1.36, 0.2, 0.045]} position={[0, 0.08, 0]} rotation={[0.35, 0, 0]} color="#F59E0B" radius={0.01} rough={0.6} metal={0} />
              <Box args={[1.44, 0.07, 0.12]} position={[0, 0.2, -0.04]} rotation={[0.35, 0, 0]} color={ONYX} radius={0.02} />
              <mesh position={[0, 0.01, 0.06]}>
                <boxGeometry args={[1.3, 0.03, 0.05]} />
                <meshStandardMaterial ref={bead} color={CORAL} roughness={0.4} />
              </mesh>
            </group>
          </group>
        </group>
      </group>
    </Rig>
  );
}
