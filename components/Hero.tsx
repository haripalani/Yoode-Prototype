"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const pills = ["Limited Edition", "Premium Fabric", "Pan-India", "No Minimum"];

// Models wearing each design, cropped waist-up (public/christmas/models-half, from public/christmas/Models)
const shirts = [
  { src: "/christmas/models-half/silent-night.webp", name: "Silent Night" },
  { src: "/christmas/models-half/alpine-chalet.webp", name: "Alpine Chalet" },
  { src: "/christmas/models-half/nordic-sleigh.webp", name: "Nordic Sleigh" },
  { src: "/christmas/models-half/reindeer-folk.webp", name: "Reindeer Folk" },
  { src: "/christmas/models-half/north-pole.webp", name: "North Pole Heritage" },
  { src: "/christmas/models-half/winter-branches.webp", name: "Winter Branches" },
];


const STAGE_GLOW = "#1A4D35";
const ROTATE_MS = 4500;

// Deterministic page snowfall (no hydration mismatch)
// 40 flakes, no blur filters: transform-only animation stays cheap for the compositor
const flakes = Array.from({ length: 40 }, (_, i) => {
  const big = i % 9 === 0;
  return {
    left: `${(i * 53) % 100}%`,
    size: big ? 7 + (i % 4) : 2 + (i % 4),
    duration: 9 + ((i * 7) % 9),
    delay: -((i * 1.37) % 16),
    drift: (i % 2 ? 1 : -1) * (10 + ((i * 13) % 30)),
    opacity: big ? 0.45 : 0.55 + ((i * 11) % 40) / 100,
  };
});

export function Hero() {
  const [shown, setShown] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setShown((p) => (p + 1) % shirts.length), ROTATE_MS);
    return () => clearTimeout(t);
  }, [shown, paused]);

  return (
    <section
      aria-label="Christmas collection"
      className="relative w-full overflow-hidden text-white min-h-[100svh] lg:h-[100svh] lg:min-h-[700px] flex flex-col items-center lg:block pt-[92px] lg:pt-0 pb-14 lg:pb-0"
      style={{
        background: `radial-gradient(ellipse 70% 60% at 50% 62%, ${STAGE_GLOW} 0%, #123B28 55%, #0B2117 100%)`,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes heroSnow { from { transform: translate3d(0,-10vh,0); } to { transform: translate3d(var(--dx),110vh,0); } }
        @keyframes santaFly { from { transform: translate3d(105vw,0,0); } to { transform: translate3d(-40vw,0,0); } }
        @keyframes santaBob { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-10px) rotate(1deg); } }
        @keyframes ornamentSway { 0%,100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }
        @media (prefers-reduced-motion: reduce) {
          .hero-flake, .santa-fly { animation: none !important; display: none; }
          .ornament-swing { animation: none !important; }
        }
      `,
        }}
      />

      {/* Falling snow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
        {flakes.map((f, i) => (
          <span
            key={i}
            className="hero-flake absolute top-0 rounded-full bg-white"
            style={{
              left: f.left,
              width: f.size,
              height: f.size,
              opacity: f.opacity,
              animation: `heroSnow ${f.duration}s linear ${f.delay}s infinite`,
              ["--dx" as string]: `${f.drift}px`,
            }}
          />
        ))}
      </div>

      {/* Spotlight beam falling onto the shirts */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-[1] h-[78svh] w-[min(60vw,900px)] -translate-x-1/2 blur-[6px] hidden lg:block"
        style={{
          clipPath: "polygon(42% 0, 58% 0, 100% 100%, 0 100%)",
          background: "linear-gradient(to bottom, rgba(255,236,190,0.16), rgba(255,236,190,0.07) 60%, rgba(255,236,190,0))",
        }}
      />

      {/* Santa's sleigh crossing the sky, behind the headline */}
      <div aria-hidden="true" className="santa-fly pointer-events-none absolute left-0 top-[9svh] z-[2] hidden lg:block" style={{ animation: "santaFly 26s linear 1.5s infinite", transform: "translate3d(105vw,0,0)" }}>
        <div style={{ animation: "santaBob 2.4s ease-in-out infinite" }}>
          <SantaSleigh className="h-auto w-[min(26vw,440px)]" />
        </div>
      </div>

      {/* Snowy ground */}
      <SnowBank />

      {/* Eyebrow + headline */}
      <div className="relative z-[3] order-1 w-full text-center lg:absolute lg:inset-x-0 lg:top-[calc(78px+3.5svh)] px-4">
        <p className="font-sans font-extrabold uppercase tracking-[0.04em] text-xmas-gold text-[5.2vw] sm:text-[3.4vw] lg:text-[min(2.05vw,4.2svh)] leading-none">
          It’s the most wonderful time
        </p>
        <h1 className="mt-[1.2svh] font-poster uppercase leading-[0.92] tracking-[0.01em] text-white text-[19vw] lg:text-[min(12.4vw,25svh)] drop-shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          Of the year!
        </h1>
      </div>

      {/* Shirt spotlight stage */}
      <div
        className="relative z-[4] order-3 mx-auto mt-auto mb-0 lg:mt-0 h-[60svh] w-full max-w-[560px] lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-[40px] lg:h-[min(68svh,52vw)] lg:w-[min(64vw,1150px)] lg:max-w-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* light pool behind the featured shirt + shadow on the snow */}
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[4%] h-[92%] w-[min(80%,620px)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,236,190,0.38),rgba(255,236,190,0.12)_55%,transparent)]" />

        {shirts.map((shirt, i) => {
          const n = shirts.length;
          const offset = (i - shown + n) % n; // 0 = centre, 1 = right, n-1 = left
          const role = offset === 0 ? "center" : offset === 1 ? "right" : offset === n - 1 ? "left" : "hidden";
          const side = (x: string) =>
            isDesktop
              ? { left: x, height: "78%", opacity: 1, filter: "brightness(0.6) saturate(0.85) blur(1.5px)", zIndex: 2 }
              : { left: x === "20%" ? "4%" : "96%", height: "70%", opacity: 1, filter: "brightness(0.5) saturate(0.8) blur(1px)", zIndex: 2 };
          const pose = {
            center: { left: "50%", height: "100%", opacity: 1, filter: "brightness(1) saturate(1) blur(0px)", zIndex: 3 },
            left: side("20%"),
            right: side("80%"),
            hidden: { left: "50%", height: "60%", opacity: 0, filter: "brightness(0.6) saturate(0.85) blur(2px)", zIndex: 1 },
          }[role];
          return (
            <motion.button
              key={shirt.src}
              type="button"
              onClick={() => setShown(i)}
              tabIndex={role === "hidden" ? -1 : 0}
              aria-label={role === "center" ? `${shirt.name} (featured)` : `Show ${shirt.name}`}
              initial={false}
              animate={pose}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute bottom-0 -translate-x-1/2 aspect-[831/1100] rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-xmas-gold ${role === "hidden" ? "pointer-events-none" : "cursor-pointer"}`}
              style={{ zIndex: pose.zIndex }}
            >
              <img
                src={shirt.src}
                // the three models visible on load come first; the rest load lazily
                loading={i < 2 || i === shirts.length - 1 ? "eager" : "lazy"}
                decoding="async"
                alt={`Model wearing the ${shirt.name} Christmas shirt`}
                draggable={false}
                className={`relative h-full w-full object-contain object-bottom select-none transition-transform duration-500 ${role === "center" ? "" : "hover:-translate-y-2"}`}
                style={{ maskImage: "linear-gradient(to bottom, #000 70%, transparent 97%)", WebkitMaskImage: "linear-gradient(to bottom, #000 70%, transparent 97%)" }}
              />
            </motion.button>
          );
        })}

        {/* Nameplate: the design currently in the spotlight */}
        <Link
          href="/category"
          aria-live="polite"
          className="group absolute bottom-[34px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-xmas-gold/70 bg-xmas-forest/90 py-1.5 pl-4 pr-1.5 text-white shadow-[0_10px_24px_-8px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-colors hover:border-xmas-gold"
        >
          <span className="flex flex-col leading-none">
            <span className="text-[8px] font-bold uppercase tracking-[0.24em] text-xmas-gold">Now showing</span>
            <span className="mt-1 text-[13px] font-bold">{shirts[shown].name}</span>
          </span>
          <span className="flex gap-1" aria-hidden="true">
            {shirts.map((_, i) => (
              <span key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === shown ? "w-4 bg-xmas-gold" : "w-1.5 bg-white/35"}`} />
            ))}
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-xmas-red transition-transform group-hover:rotate-45">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </div>

      {/* Left: feature pill tags — under the headline, above the left tree */}
      <ul className="relative z-[5] order-2 mt-5 hidden lg:flex max-w-[340px] flex-wrap justify-center gap-2.5 px-4 lg:absolute lg:left-[5vw] lg:top-[calc(41svh+14px)] lg:mt-0 lg:max-w-[190px] xl:max-w-[300px] lg:justify-start lg:px-0">
        {pills.map((c) => (
          <li
            key={c}
            className="rounded-full border border-white/45 bg-white/[0.06] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-white backdrop-blur-sm"
          >
            {c}
          </li>
        ))}
      </ul>

      {/* Right: "Shop now" ornament hanging on a string from the top edge.
          String + bauble swing together from the anchor point at the top. */}
      <div
        className="ornament-swing z-[6] absolute right-4 top-0 flex w-[72px] lg:right-[7vw] lg:w-[min(9vw,17svh)] flex-col items-center origin-top transition-transform duration-700 ease-out hover:rotate-[-5deg]"
        style={{ animation: "ornamentSway 5s ease-in-out infinite" }}
      >
        <span aria-hidden="true" className="block h-[34svh] lg:h-[calc(21svh+10px)] w-[1.5px] bg-gradient-to-b from-xmas-gold/20 via-xmas-gold/70 to-[#F7DB8F]" />
        <Link href="/category" aria-label="Shop now" className="-mt-[1px] block w-full">
          <Ornament />
        </Link>
      </div>

      {/* Matching decorated trees framing the scene */}
      <TreeCorner side="left" />
      <TreeCorner side="right" />
    </section>
  );
}

/** Glossy red bauble with gold cap, "SHOP NOW!" printed on it. */
function Ornament() {
  return (
    <svg viewBox="0 0 200 240" className="h-auto w-full drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]">
      <defs>
        <radialGradient id="orn-body" cx="38%" cy="36%" r="70%">
          <stop offset="0" stopColor="#FF6B6B" />
          <stop offset="0.35" stopColor="#E0393F" />
          <stop offset="0.75" stopColor="#B3141B" />
          <stop offset="1" stopColor="#5C0F14" />
        </radialGradient>
        <linearGradient id="orn-cap" x1="0" x2="1">
          <stop offset="0" stopColor="#8A6420" />
          <stop offset="0.45" stopColor="#F7DB8F" />
          <stop offset="1" stopColor="#9C7426" />
        </linearGradient>
        <radialGradient id="orn-shine" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="22" r="11" fill="none" stroke="url(#orn-cap)" strokeWidth="5" />
      <rect x="78" y="30" width="44" height="22" rx="4" fill="url(#orn-cap)" />
      <circle cx="100" cy="140" r="92" fill="url(#orn-body)" />
      <ellipse cx="66" cy="96" rx="30" ry="18" fill="url(#orn-shine)" transform="rotate(-35 66 96)" />
      <g transform="rotate(-18 100 140)" fill="#FFFFFF" fontFamily="var(--font-anton), Impact, sans-serif" textAnchor="middle">
        <text x="100" y="134" fontSize="34" letterSpacing="1">SHOP</text>
        <text x="100" y="172" fontSize="34" letterSpacing="1">NOW!</text>
      </g>
    </svg>
  );
}

/** Gift box with ribbon and bow; colours default to red with gold ribbon. Gradients run left → right. */
function GiftBox({
  className = "",
  box = ["#E0393F", "#B3141B", "#831418"],
  lid = ["#F04A50", "#A3121A"],
  ribbon = ["#C9962E", "#F7DB8F", "#B07F24"],
}: {
  className?: string;
  box?: string[];
  lid?: string[];
  ribbon?: string[];
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 120 128" className={`drop-shadow-[0_12px_18px_rgba(0,0,0,0.4)] ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-box`} x1="0" x2="1">
          <stop offset="0" stopColor={box[0]} />
          <stop offset="0.6" stopColor={box[1]} />
          <stop offset="1" stopColor={box[2]} />
        </linearGradient>
        <linearGradient id={`${id}-lid`} x1="0" x2="1">
          <stop offset="0" stopColor={lid[0]} />
          <stop offset="1" stopColor={lid[1]} />
        </linearGradient>
        <linearGradient id={`${id}-rib`} x1="0" x2="1">
          <stop offset="0" stopColor={ribbon[0]} />
          <stop offset="0.5" stopColor={ribbon[1]} />
          <stop offset="1" stopColor={ribbon[2]} />
        </linearGradient>
      </defs>
      <path d="M58 34 C 40 6, 14 14, 26 30 C 32 38, 48 36, 58 34 Z" fill={`url(#${id}-rib)`} />
      <path d="M62 34 C 80 6, 106 14, 94 30 C 88 38, 72 36, 62 34 Z" fill={`url(#${id}-rib)`} />
      <rect x="16" y="56" width="88" height="68" rx="4" fill={`url(#${id}-box)`} />
      <rect x="16" y="56" width="88" height="8" fill="#000" opacity="0.12" />
      <rect x="10" y="38" width="100" height="22" rx="4" fill={`url(#${id}-lid)`} />
      <rect x="52" y="38" width="16" height="86" fill={`url(#${id}-rib)`} />
      <circle cx="60" cy="36" r="7" fill={`url(#${id}-rib)`} />
    </svg>
  );
}

/* ---------- Christmas tree ---------- */

const TREE_CX = 150;
// Tiers from bottom to top: apex y, base y, half width
const TIERS = [
  { top: 178, base: 338, hw: 146 },
  { top: 122, base: 268, hw: 120 },
  { top: 72, base: 194, hw: 92 },
  { top: 30, base: 124, hw: 62 },
];

type Pt = [number, number];

/** Branch tier outline: straight sides with a toothed bottom edge of needle tips. */
function tierPoints({ top, base, hw }: (typeof TIERS)[number]): Pt[] {
  const teeth = Math.max(5, Math.round(hw / 13));
  const step = (hw * 2) / teeth;
  const pts: Pt[] = [
    [TREE_CX, top],
    [TREE_CX - hw, base],
  ];
  for (let i = 0; i < teeth; i++) {
    const x0 = TREE_CX - hw + i * step;
    pts.push([x0 + step / 2, base - 11 - (i % 2) * 3], [x0 + step, base]);
  }
  return pts;
}

const toPath = (pts: Pt[]) => "M" + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(" L") + " Z";

// Fairy lights: points along a gentle swag across each tier (rounded → identical on server and client)
const LIGHTS = TIERS.flatMap((t, ti) => {
  const y = t.top + (t.base - t.top) * 0.62;
  const half = t.hw * 0.68;
  const n = 5 + ti;
  return Array.from({ length: n }, (_, i) => {
    const u = i / (n - 1);
    const x = TREE_CX - half + u * half * 2;
    const sag = Math.sin(u * Math.PI) * 14;
    return {
      x: Math.round(x * 10) / 10,
      y: Math.round((y + sag - (u - 0.5) * 18) * 10) / 10,
      delay: ((ti * 7 + i * 3) % 10) / 4,
      warm: (i + ti) % 3 !== 0,
    };
  });
});

const BAUBLES = [
  { x: 112, y: 312, r: 9, c: "#B3141B" },
  { x: 196, y: 300, r: 8, c: "#E2B64A" },
  { x: 150, y: 286, r: 7, c: "#FFFDF8" },
  { x: 236, y: 322, r: 7, c: "#B3141B" },
  { x: 64, y: 326, r: 7, c: "#E2B64A" },
  { x: 120, y: 238, r: 8, c: "#E2B64A" },
  { x: 184, y: 246, r: 8, c: "#B3141B" },
  { x: 150, y: 214, r: 6, c: "#FFFDF8" },
  { x: 128, y: 168, r: 7, c: "#B3141B" },
  { x: 176, y: 176, r: 6, c: "#E2B64A" },
  { x: 150, y: 112, r: 6, c: "#B3141B" },
];

function ChristmasTree({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const tiers = TIERS.map(tierPoints);
  return (
    <svg viewBox="0 0 300 400" className={className}>
      <defs>
        <linearGradient id={`${id}-needles`} x1="0" x2="1">
          <stop offset="0" stopColor="#2F8257" />
          <stop offset="0.45" stopColor="#1F5C3F" />
          <stop offset="1" stopColor="#0E3021" />
        </linearGradient>
        <linearGradient id={`${id}-trunk`} x1="0" x2="1">
          <stop offset="0" stopColor="#7A4A2A" />
          <stop offset="1" stopColor="#3E2414" />
        </linearGradient>
        <linearGradient id={`${id}-star`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFF1C2" />
          <stop offset="0.5" stopColor="#F2C14E" />
          <stop offset="1" stopColor="#B98A26" />
        </linearGradient>
        <radialGradient id={`${id}-bauble`} cx="35%" cy="32%" r="70%">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="0.35" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.35" />
        </radialGradient>
        <filter id={`${id}-glow`} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <style>{`
        @keyframes treeTwinkle { 0%,100% { opacity: .35 } 50% { opacity: 1 } }
        .tree-light { animation: treeTwinkle 2.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .tree-light { animation: none; } }
      `}</style>

      {/* trunk */}
      <rect x="134" y="326" width="32" height="52" rx="3" fill={`url(#${id}-trunk)`} />

      {/* tiers, bottom first; each upper tier casts a soft shadow on the one below */}
      {tiers.map((pts, i) => (
        <g key={i}>
          {i > 0 && <path d={toPath(pts)} transform="translate(0 8)" fill="#04140C" opacity="0.28" />}
          <path d={toPath(pts)} fill={`url(#${id}-needles)`} />
          {/* snow resting on the needle tips, heavier on the lit (left) side */}
          <polyline
            points={pts
              .slice(2, Math.round(pts.length * 0.78))
              .map(([x, y]) => `${x.toFixed(1)},${(y - 3).toFixed(1)}`)
              .join(" ")}
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity="0.92"
          />
        </g>
      ))}

      {/* baubles */}
      {BAUBLES.map((b, i) => (
        <g key={i}>
          <circle cx={b.x} cy={b.y} r={b.r} fill={b.c} />
          <circle cx={b.x} cy={b.y} r={b.r} fill={`url(#${id}-bauble)`} />
        </g>
      ))}

      {/* fairy lights */}
      <g filter={`url(#${id}-glow)`}>
        {LIGHTS.map((l, i) => (
          <circle key={i} className="tree-light" cx={l.x} cy={l.y} r="3.2" fill={l.warm ? "#FFE3A1" : "#FFFFFF"} style={{ animationDelay: `${l.delay}s` }} />
        ))}
      </g>

      {/* star */}
      <g filter={`url(#${id}-glow)`}>
        <path
          d="M150 4 L157.6 21.5 L176.6 23.4 L162.3 36 L166.5 54.6 L150 45 L133.5 54.6 L137.7 36 L123.4 23.4 L142.4 21.5 Z"
          fill={`url(#${id}-star)`}
          stroke="#FFF1C2"
          strokeWidth="1.2"
        />
      </g>
    </svg>
  );
}

/* ---------- Corner tree ---------- */

function TreeCorner({ side }: { side: "left" | "right" }) {
  const left = side === "left";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none z-[5] hidden lg:block lg:absolute lg:bottom-[56px] h-[30svh] min-h-[220px] aspect-[300/400] ${left ? "lg:left-[2.5vw]" : "lg:right-[2.5vw]"}`}
    >
      <div className="absolute bottom-[1%] left-1/2 h-[7%] w-[120%] -translate-x-1/2 rounded-[50%] bg-[#0B2117]/30 blur-md" />
      <ChristmasTree className={`absolute inset-x-0 bottom-[6%] h-[94%] w-full ${left ? "-scale-x-100" : ""}`} />
      <div className={`absolute bottom-0 flex items-end ${left ? "left-[52%]" : "right-[52%]"}`}>
        {left ? (
          <>
            <GiftBox className="relative z-[2] h-auto w-[26%] min-w-[54px] -mr-3" box={["#F7DB8F", "#E2B64A", "#B9892C"]} lid={["#FBE6A6", "#D9A93F"]} ribbon={["#9E1B1F", "#E0393F", "#831418"]} />
            <GiftBox className="relative z-[1] h-auto w-[34%] min-w-[70px]" />
          </>
        ) : (
          <>
            <GiftBox className="relative z-[1] h-auto w-[34%] min-w-[70px] -mr-3" box={["#2C7A4F", "#1F5C3F", "#123B28"]} lid={["#358C5C", "#1A4D35"]} ribbon={["#B3141B", "#E0393F", "#831418"]} />
            <GiftBox className="relative z-[2] h-auto w-[26%] min-w-[54px]" box={["#FFFDF8", "#F1E7D6", "#DCCBB0"]} lid={["#FFFFFF", "#EADFCB"]} ribbon={["#B3141B", "#E0393F", "#831418"]} />
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- Fluffy snow bank with snowflakes ---------- */

// Gently rolling snow drifts. Sample a few wide mounds, then join them with a smooth
// curve (quadratic segments through midpoints) so the edge has no corners.
// Values are rounded so server and client render identical paths.
const r1 = (n: number) => Math.round(n * 10) / 10;

function driftPoints(base: number, phase: number): [number, number][] {
  const pts: [number, number][] = [];
  for (let x = -60; x <= 1500; x += 120) {
    pts.push([x, r1(base + 9 * Math.sin(x * 0.006 + phase) + 6 * Math.sin(x * 0.017 + phase * 2.3))]);
  }
  return pts;
}

function smoothDrift(pts: [number, number][]) {
  let d = `M${pts[0][0]} 200 L${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const [x, y] = pts[i];
    const mx = r1((x + pts[i + 1][0]) / 2);
    const my = r1((y + pts[i + 1][1]) / 2);
    d += ` Q${x} ${y} ${mx} ${my}`;
  }
  const last = pts[pts.length - 1];
  return `${d} L${last[0]} ${last[1]} L${last[0]} 200 Z`;
}

const BANK_PATH = smoothDrift(driftPoints(114, 0));
const BANK_BACK = smoothDrift(driftPoints(98, 1.7));

// Crisp six-armed snowflakes: [left %, bottom %, size px, opacity]
const BANK_FLAKES: [number, number, number, number][] = [
  [7, 15, 26, 0.95], [16, 9, 16, 0.9], [27, 17, 20, 0.85], [37, 7, 14, 0.9], [44, 18, 30, 0.95],
  [56, 8, 18, 0.9], [63, 16, 22, 0.85], [72, 10, 14, 0.9], [81, 17, 24, 0.95], [92, 9, 18, 0.9],
];
const SKY_FLAKES: [number, number, number][] = [
  [9, 62, 30], [24, 44, 22], [35, 70, 18], [68, 66, 20], [77, 48, 26], [90, 70, 22],
];

function Flake({ size, opacity = 1, className = "" }: { size: number; opacity?: number; className?: string }) {
  return (
    <svg viewBox="-12 -12 24 24" width={size} height={size} className={className} style={{ opacity }} aria-hidden="true">
      <g stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" fill="none">
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <g key={a} transform={`rotate(${a})`}>
            <line x1="0" y1="0" x2="0" y2="-10" />
            <line x1="0" y1="-6" x2="-3" y2="-8.5" />
            <line x1="0" y1="-6" x2="3" y2="-8.5" />
          </g>
        ))}
      </g>
    </svg>
  );
}

function SnowBank() {
  return (
    <>
      {/* a few large, faint flakes in the sky */}
      {SKY_FLAKES.map(([l, b, sz], i) => (
        <span key={`sky-${i}`} aria-hidden="true" className="pointer-events-none absolute z-[1] hidden lg:block" style={{ left: `${l}%`, bottom: `${b}%` }}>
          <Flake size={sz} opacity={0.18} />
        </span>
      ))}

      <svg aria-hidden="true" viewBox="0 0 1440 200" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[24svh] w-full">
        <defs>
          <linearGradient id="hero-bank" x1="0" y1="0" x2="0" y2="1">
            {/* fades into the next section's cream so the hand-off is seamless */}
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.55" stopColor="#FDFAF4" />
            <stop offset="1" stopColor="#FBF6EE" />
          </linearGradient>
        </defs>
        <path d={BANK_BACK} fill="#DCE7EB" opacity="0.55" />
        <path d={BANK_PATH} fill="url(#hero-bank)" />
      </svg>

      {/* flakes resting along the bank */}
      {BANK_FLAKES.map(([l, b, sz, o], i) => (
        <span key={`bank-${i}`} aria-hidden="true" className="pointer-events-none absolute z-[2] hidden lg:block" style={{ left: `${l}%`, bottom: `${b}%` }}>
          <Flake size={sz} opacity={o} className="drop-shadow-[0_1px_2px_rgba(11,33,23,0.35)]" />
        </span>
      ))}
    </>
  );
}

/* ---------- Santa's sleigh (silhouette, flying left) ---------- */

function Reindeer({ x, y, nose = false }: { x: number; y: number; nose?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g stroke="#F6E7C1" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* legs mid-gallop */}
        <path d="M34 47 L22 55 L14 55" />
        <path d="M39 49 L29 61 L20 63" />
        <path d="M65 46 L79 50 L88 48" />
        <path d="M69 43 L83 42 L92 38" />
        {/* antlers */}
        <path d="M19 13 L23 2 M21.5 7 L28 4.5 M17 13 L13 3 M15 8 L9 5.5" strokeWidth="2.2" />
        <path d="M73 37 L80 34" strokeWidth="2.6" />
      </g>
      <g fill="#F6E7C1">
        <ellipse cx="51" cy="41" rx="24" ry="11" />
        <path d="M31 37 Q23 29 21 19 L28 17 Q31 27 39 33 Z" />
        <ellipse cx="16" cy="18" rx="9.5" ry="5.5" transform="rotate(-14 16 18)" />
        <path d="M22 13 L27 9 L25 15 Z" />
      </g>
      {nose && (
        <circle cx="7" cy="19.5" r="3.4" fill="#FF4D4D" style={{ filter: "drop-shadow(0 0 5px rgba(255,77,77,0.9))" }} />
      )}
    </g>
  );
}

function SantaSleigh({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 440 112" className={className} aria-hidden="true">
      {/* harness line */}
      <path d="M24 44 Q110 54 120 50 Q205 60 215 54 Q290 66 312 68" fill="none" stroke="#F6E7C1" strokeWidth="1.6" opacity="0.85" />
      <Reindeer x={0} y={22} nose />
      <Reindeer x={98} y={30} />
      <Reindeer x={196} y={34} />
      {/* sleigh */}
      <g fill="#F6E7C1">
        <path d="M318 92 L308 62 Q332 72 360 68 L394 62 Q406 60 412 50 L418 92 Z" />
        {/* sack */}
        <circle cx="404" cy="46" r="13" />
        <path d="M398 34 L404 28 L410 34 Z" />
        {/* Santa */}
        <circle cx="372" cy="54" r="15" />
        <circle cx="364" cy="34" r="7.5" />
        <path d="M357 31 Q366 20 386 16 Q378 26 372 30 Z" />
        <circle cx="388" cy="15" r="3.5" />
      </g>
      {/* runners */}
      <path d="M432 100 H318 Q298 100 296 86 Q295 78 303 78" fill="none" stroke="#F2C14E" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M332 92 L330 100 M400 92 L402 100" stroke="#F2C14E" strokeWidth="3" strokeLinecap="round" />
      {/* reins from Santa's hands */}
      <path d="M362 56 Q336 60 312 68" fill="none" stroke="#F6E7C1" strokeWidth="1.6" />
    </svg>
  );
}
