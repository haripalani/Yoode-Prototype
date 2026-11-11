"use client";

// The kit studio's 3D stage: the garment wears a texture painted from the studio's choices
// (lib/studio/painter.ts), turns to the requested side, and can be orbited and zoomed.
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { GARMENT } from "@/lib/studio/garment";
import { paintAtlas, resolveFontFamily, type StudioDesign, type StudioImages } from "@/lib/studio/painter";
import { HOTSPOTS, hotspotUV, type Hotspot } from "@/lib/studio/hotspots";

interface KitStudio3DProps {
  design: StudioDesign;
  /** Images the design's logos use, by element id. */
  images: Record<string, string>;
  /** Camera azimuth in radians (0 = front, PI = back). */
  view: number;
  /** Id of the pointer for the part being edited. */
  activeHotspot?: string;
  /** Pointers to leave out, such as logo spots that already hold a logo. */
  hiddenHotspots?: string[];
  onHotspot?: (hotspot: Hotspot) => void;
}

const FOV = 28;
const wrapAngle = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));

/** Finds the surface point (and its normal) that wears a given UV coordinate. */
function pointAtUV(geometry: THREE.BufferGeometry, u: number, v: number) {
  const uv = geometry.attributes.uv as THREE.BufferAttribute;
  const pos = geometry.attributes.position as THREE.BufferAttribute;
  const nor = geometry.attributes.normal as THREE.BufferAttribute | undefined;
  const index = geometry.index;
  const count = index ? index.count : pos.count;
  const at = (i: number) => (index ? index.getX(i) : i);
  const p = new THREE.Vector3(u, v, 0), a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  const bary = new THREE.Vector3();
  for (let i = 0; i < count; i += 3) {
    const ia = at(i), ib = at(i + 1), ic = at(i + 2);
    a.set(uv.getX(ia), uv.getY(ia), 0); b.set(uv.getX(ib), uv.getY(ib), 0); c.set(uv.getX(ic), uv.getY(ic), 0);
    if (!THREE.Triangle.getBarycoord(p, a, b, c, bary)) continue;
    if (bary.x < -1e-4 || bary.y < -1e-4 || bary.z < -1e-4) continue;
    const mix = (attr: THREE.BufferAttribute) => new THREE.Vector3()
      .addScaledVector(new THREE.Vector3().fromBufferAttribute(attr, ia), bary.x)
      .addScaledVector(new THREE.Vector3().fromBufferAttribute(attr, ib), bary.y)
      .addScaledVector(new THREE.Vector3().fromBufferAttribute(attr, ic), bary.z);
    return { position: mix(pos), normal: nor ? mix(nor).normalize() : null };
  }
  return null;
}

/** The "+" pointers pinned to the garment. They fade out when they face away from the camera. */
function Hotspots({ geometry, active, hidden = [], onSelect }: { geometry: THREE.BufferGeometry; active?: string; hidden?: string[]; onSelect?: (h: Hotspot) => void }) {
  const placed = useMemo(() => HOTSPOTS.flatMap(h => {
    // A point in a cut-out (like the neck opening) slides down the panel to the first fabric.
    for (let dy = 0; dy <= 12; dy += 0.5) {
      const hit = pointAtUV(geometry, ...hotspotUV({ ...h, y: h.y + dy }));
      if (hit) return [{ ...h, ...hit }];
    }
    return [];
  }), [geometry]);
  const hiddenKey = hidden.join();
  const pins = useMemo(() => placed.filter(p => !hiddenKey.split(",").includes(p.id)), [placed, hiddenKey]);
  const els = useRef<(HTMLDivElement | null)[]>([]);
  const toCam = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ camera }) => {
    pins.forEach((pin, i) => {
      const el = els.current[i];
      if (!el) return;
      // Facing: the surface normal against the direction to the camera. Without normals, use the
      // direction out from the garment's vertical axis.
      toCam.copy(camera.position).sub(pin.position).normalize();
      const out = pin.normal ?? new THREE.Vector3(pin.position.x, 0, pin.position.z).normalize();
      const facing = out.dot(toCam) > 0.05;
      if (el.dataset.facing !== String(facing)) {
        el.dataset.facing = String(facing);
        el.style.opacity = facing ? "1" : "0";
        el.style.pointerEvents = facing ? "auto" : "none";
        el.querySelector("button")?.setAttribute("tabindex", facing ? "0" : "-1");
      }
    });
  });

  return pins.map((pin, i) => (
    <Html key={pin.id} position={pin.position} center zIndexRange={[5, 0]}>
      <div ref={el => { els.current[i] = el; }} className="transition-opacity duration-300">
        <button
          type="button"
          onClick={() => onSelect?.(pin)}
          aria-label={pin.label}
          aria-pressed={pin.id === active}
          className={`group relative flex items-center justify-center w-[22px] h-[22px] rounded-full cursor-pointer transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.22)] hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
            pin.id === active ? "bg-[#111111] text-white scale-110" : "bg-white text-[#111111]"
          }`}
        >
          {pin.id !== active && <span aria-hidden className="absolute inset-0 rounded-full bg-white/70 animate-ping [animation-duration:2.4s]" />}
          <svg aria-hidden viewBox="0 0 12 12" className="relative w-2.5 h-2.5">
            <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span className="pointer-events-none absolute left-full ml-2 whitespace-nowrap rounded-full bg-[#111111] px-2.5 py-1 text-[10px] font-bold tracking-wide text-white opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0">
            {pin.label}
          </span>
        </button>
      </div>
    </Html>
  ));
}

/** The canvas holding every print panel, and the texture the garment wears from it. */
class AtlasTexture {
  readonly canvas = document.createElement("canvas");
  readonly texture: THREE.CanvasTexture;
  readonly images: StudioImages = {};

  constructor() {
    this.canvas.width = this.canvas.height = GARMENT.atlasPx;
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.flipY = false; // glTF UVs start at the top-left, like a canvas
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.anisotropy = 8;
  }

  paint(design: StudioDesign) {
    paintAtlas(this.canvas, design, this.images);
    this.texture.needsUpdate = true;
  }

  /** Loads the images the design uses (key -> url), drops the rest, and calls back as each arrives. */
  setImages(urls: Record<string, string>, onReady: () => void) {
    for (const key of Object.keys(this.images)) if (!(key in urls)) delete this.images[key];
    for (const [key, url] of Object.entries(urls)) {
      if (this.images[key]?.src === url) continue;
      const img = new Image();
      img.onload = () => { if (this.images[key] === img) onReady(); };
      this.images[key] = img;
      img.src = url;
    }
  }

  dispose() { this.texture.dispose(); }
}

/** Soft studio lighting from three's RoomEnvironment, so no HDR file is downloaded. */
function addStudioLight({ gl, scene }: RootState) {
  const pmrem = new THREE.PMREMGenerator(gl);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.75;
  pmrem.dispose();
}

function Garment({ design, images, view, activeHotspot, hiddenHotspots, onHotspot }: KitStudio3DProps) {
  const { nodes, materials } = useGLTF(GARMENT.model) as unknown as {
    nodes: Record<string, THREE.Mesh>;
    materials: Record<string, THREE.MeshStandardMaterial>;
  };
  const geometry = useMemo(() => Object.values(nodes).find(n => n.isMesh)!.geometry, [nodes]);
  const sphere = useMemo(() => {
    // Measured from the vertices, so the shared geometry from the model cache is left untouched.
    return new THREE.Box3()
      .setFromBufferAttribute(geometry.attributes.position as THREE.BufferAttribute)
      .getBoundingSphere(new THREE.Sphere());
  }, [geometry]);
  const knit = Object.values(materials)[0]?.normalMap ?? null;
  const distance = (sphere.radius / Math.sin((FOV * Math.PI) / 360)) * 1.02;

  // Repaint on every change. Logos and web fonts arrive later, so repaint again when they do.
  const [atlas] = useState(() => new AtlasTexture());
  useEffect(() => () => atlas.dispose(), [atlas]);
  useEffect(() => {
    let live = true;
    const paint = () => { if (live) atlas.paint(design); };
    paint();
    atlas.setImages(images, paint);
    const fonts = design.elements.filter(e => e.font).map(e => document.fonts.load(`900 40px ${resolveFontFamily(e.font!)}`));
    Promise.all(fonts).then(paint, paint);
    return () => { live = false; };
  }, [atlas, design, images]);

  // Turn the camera to the requested side whenever it changes; the visitor can orbit freely after.
  const controls = useRef<OrbitControlsImpl>(null);
  const goal = useRef<number | null>(null);
  useEffect(() => { goal.current = view; }, [view]);
  useFrame(({ camera }) => {
    const c = controls.current;
    if (goal.current === null || !c) return;
    const sph = new THREE.Spherical().setFromVector3(camera.position.clone().sub(c.target));
    const diff = wrapAngle(goal.current - sph.theta);
    if (Math.abs(diff) < 0.002) { sph.theta = goal.current; goal.current = null; }
    else sph.theta += diff * 0.14;
    sph.radius += (distance - sph.radius) * 0.14;
    camera.position.copy(c.target).add(new THREE.Vector3().setFromSpherical(sph));
    c.update();
  });

  return (
    <>
      <group position={sphere.center.clone().negate()}>
        <mesh geometry={geometry}>
          <meshStandardMaterial map={atlas.texture} normalMap={knit} normalScale={new THREE.Vector2(0.6, 0.6)} roughness={0.92} metalness={0} side={THREE.DoubleSide} />
        </mesh>
        <Hotspots geometry={geometry} active={activeHotspot} hidden={hiddenHotspots} onSelect={onHotspot} />
      </group>
      <OrbitControls
        ref={controls}
        enablePan={false}
        enableDamping
        minDistance={distance * 0.45}
        maxDistance={distance * 1.6}
        minPolarAngle={Math.PI * 0.3}
        maxPolarAngle={Math.PI * 0.62}
      />
    </>
  );
}

/** Shown on the stage while the garment downloads. */
function Loading() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-black/45 whitespace-nowrap">
        <div className="w-32 h-1 rounded-full bg-black/10 overflow-hidden">
          <div className="h-full bg-black/60 transition-[width] duration-200" style={{ width: `${Math.max(6, progress)}%` }} />
        </div>
        Loading 3D kit · {Math.round(progress)}%
      </div>
    </Html>
  );
}

export default function KitStudio3D(props: KitStudio3DProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ fov: FOV, position: [0, 0.06, 1.5], near: 0.01, far: 50 }}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.NeutralToneMapping }}
      onCreated={addStudioLight}
      aria-label="3D preview of your kit. Drag to turn, scroll to zoom."
    >
      <directionalLight position={[1.5, 2.5, 3]} intensity={1.4} />
      <Suspense fallback={<Loading />}>
        <Garment {...props} />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload(GARMENT.model);
