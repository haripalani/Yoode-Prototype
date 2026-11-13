"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import type { MachineKind } from "../types";
import DtgScene from "./DtgScene";
import DtfScene from "./DtfScene";
import EmbroideryScene from "./EmbroideryScene";
import ScreenScene from "./ScreenScene";
import UvScene from "./UvScene";
import EngravingScene from "./EngravingScene";

/*
  The live machine on each method page, one scene per method, all in the same studio (camera, lights, soft floor
  shadow) so the pages read as a set. It renders only while on screen; with reduced motion it shows the finished
  piece standing still.
*/

function Scene({ kind, animate }: { kind: MachineKind; animate: boolean }) {
  switch (kind) {
    case "dtg": return <DtgScene animate={animate} />;
    case "dtf": return <DtfScene animate={animate} />;
    case "embroidery": return <EmbroideryScene animate={animate} />;
    case "coloreel": return <EmbroideryScene animate={animate} coloreel />;
    case "screen": return <ScreenScene animate={animate} />;
    case "uv": return <UvScene animate={animate} />;
    case "engraving": return <EngravingScene animate={animate} />;
  }
}

const LABELS: Record<MachineKind, string> = {
  dtg: "Animated DTG printer printing artwork onto a T-shirt",
  dtf: "Animated heat press transferring a DTF film print onto a hoodie",
  embroidery: "Animated embroidery machine stitching a logo",
  coloreel: "Animated Coloreel embroidery machine stitching a gradient design with one thread",
  screen: "Animated screen printing press pulling ink through a screen onto a T-shirt",
  uv: "Animated UV printer printing full colour around a steel bottle",
  engraving: "Animated laser engraver burning a design into a leather patch",
};

export default function Machine3D({ kind, className = "" }: { kind: MachineKind; className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [animate] = useState(() => typeof window === "undefined" || !matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    const el = wrap.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className={className} role="img" aria-label={LABELS[kind]}>
      <Canvas
        frameloop={visible && animate ? "always" : "demand"}
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [0, 3.5, 6.7], fov: 30 }}
        onCreated={({ camera }) => camera.lookAt(0, 0.15, 0.75)}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.55} />
        <hemisphereLight args={["#ffffff", "#E8E2DA", 0.6]} />
        <directionalLight position={[3.5, 6, 4]} intensity={1.6} castShadow shadow-mapSize={[1024, 1024]} shadow-bias={-0.0004}>
          <orthographicCamera attach="shadow-camera" args={[-4, 4, 4, -4, 0.5, 20]} />
        </directionalLight>
        <directionalLight position={[-4, 2.5, -2]} intensity={0.45} color="#FFE7DC" />
        <Scene kind={kind} animate={animate} />
        <ContactShadows position={[0, -0.56, 0.3]} opacity={0.35} scale={8} blur={2.6} far={2} frames={1} />
      </Canvas>
    </div>
  );
}
