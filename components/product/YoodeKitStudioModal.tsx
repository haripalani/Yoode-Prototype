"use client";

// The Yoode Kit Studio: choose a garment on the left wheel, design it in 3D in the middle, and work
// through the six steps on the right (Shirt, Look, Colours, Logos, Names & numbers, Text).
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { X, Check, ChevronRight, ChevronDown, ShieldCheck, Undo2, Redo2, RotateCcw, Heart, ShoppingBag, ArrowUpRight } from "lucide-react";
import { ColorVariant } from "@/data/rainsProductData";
import { GARMENT, type PanelId } from "@/lib/studio/garment";
import { SLEEVE_LABEL, garmentById, logoMethodById, nextTier, spotById, unitPrice } from "@/lib/studio/catalog";
import { initialConfig, logoImages, toDesign, type KitConfig } from "@/lib/studio/kitDesign";
import { HOTSPOTS, activeHotspot, type Hotspot, type StudioStep } from "@/lib/studio/hotspots";
import StudioOptions, { STEPS, type NamesPart } from "./studio/StudioOptions";
import Wheel from "./studio/Wheel";

// three.js needs the browser, so the 3D stage loads on the client only, when the studio opens.
const KitStudio3D = dynamic(() => import("./KitStudio3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center text-[11px] font-bold uppercase tracking-widest text-black/40">
      Loading 3D kit…
    </div>
  ),
});

// Camera side for the view buttons.
const VIEWS: Array<{ id: string; label: string; az: number }> = [
  { id: "F", label: "Front", az: 0 },
  { id: "B", label: "Back", az: Math.PI },
  { id: "L", label: "Left side", az: Math.PI / 2 },
  { id: "R", label: "Right side", az: -Math.PI / 2 },
];


interface YoodeKitStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialColor?: ColorVariant;
  onAddToCart?: (config: KitConfig) => void;
}

/** Undo and redo for the design: every change is a step back (up to 150). */
function useHistory<T>(init: () => T) {
  const [h, setH] = useState(() => ({ past: [] as T[], now: init(), future: [] as T[] }));
  return {
    value: h.now,
    canUndo: h.past.length > 0,
    canRedo: h.future.length > 0,
    set: (fn: (t: T) => T) => setH(x => {
      const now = fn(x.now);
      return now === x.now ? x : { past: [...x.past.slice(-149), x.now], now, future: [] };
    }),
    undo: () => setH(x => (x.past.length ? { past: x.past.slice(0, -1), now: x.past[x.past.length - 1], future: [x.now, ...x.future] } : x)),
    redo: () => setH(x => (x.future.length ? { past: [...x.past, x.now], now: x.future[0], future: x.future.slice(1) } : x)),
  };
}

export default function YoodeKitStudioModal({ isOpen, onClose, onAddToCart }: YoodeKitStudioModalProps) {
  const params = useParams();
  const slug = (params?.slug as string) || "";
  const history = useHistory(() => initialConfig(slug.includes("polo") ? "polo" : "round-neck"));
  const config = history.value;
  const update = history.set;

  const [step, setStep] = useState<StudioStep>("shirt");
  const [namesPart, setNamesPart] = useState<NamesPart>("team");
  const [logoSpot, setLogoSpot] = useState("left-chest");
  const [player, setPlayer] = useState(0);
  const [view, setView] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const garment = garmentById(config.garmentId);
  const qty = Math.max(1, config.team.length);
  // Logo methods other than print add to every piece.
  const logoAdd = config.logos.reduce((sum, l) => sum + logoMethodById(l.method).add, 0);
  const tier = nextTier(garment, qty);
  const price = {
    unit: unitPrice(garment, config.sleeve, config.fabric, qty) + logoAdd,
    qty,
    next: tier && ([tier[0], unitPrice(garment, config.sleeve, config.fabric, tier[0]) + logoAdd] as [number, number]),
  };

  // The 3D kit shows one player from the team list at a time.
  const shown = config.team[Math.min(player, config.team.length - 1)];
  const design = useMemo(() => toDesign(config, shown), [config, shown]);
  const images = useMemo(() => logoImages(config), [config]);

  // ---------------------------------------------------------------- navigation
  // Opening a step turns the kit to the side it edits.
  const STEP_VIEW: Partial<Record<StudioStep, number>> = { shirt: 0, names: Math.PI, text: 0 };
  const goStep = (s: StudioStep) => {
    setStep(s);
    if (s === "logos") setView(GARMENT.panels[spotById("logo", logoSpot).panel].view);
    else if (STEP_VIEW[s] !== undefined) setView(STEP_VIEW[s]!);
  };
  const focus = (panel: PanelId) => setView(GARMENT.panels[panel].view);

  // A pointer on the 3D kit opens its step, picks its logo spot, and turns the kit to face it.
  const selectHotspot = (h: Hotspot) => {
    setStep(h.target);
    if (h.target === "names") setNamesPart("names");
    if (h.spot) setLogoSpot(h.spot);
    setView(GARMENT.panels[h.panel].view);
  };

  const crumb = step === "shirt" ? 1 : step === "names" && namesPart === "team" ? 3 : 2;
  const crumbs: Array<[n: number, label: string, go: () => void]> = [
    [1, "Choose garment", () => goStep("shirt")],
    [2, "Design your kit", () => { if (crumb !== 2) goStep("look"); }],
    [3, "Team & order", () => { goStep("names"); setNamesPart("team"); }],
  ];

  // Fetch the 3D code and the garment while the shopper is still on the product page,
  // so the studio opens with the kit ready.
  useEffect(() => {
    const start = () => { void import("./KitStudio3D"); };
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(start, 2000);
    return () => clearTimeout(id);
  }, []);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleAddToCart = () => {
    setIsAdded(true);
    onAddToCart?.(config);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1800);
  };

  if (!isOpen) return null;

  const viewId = VIEWS.find(v => Math.abs(Math.atan2(Math.sin(v.az - view), Math.cos(v.az - view))) < 0.01)?.id;

  return (
    <div className="fixed inset-0 z-[200] w-screen h-screen bg-[#F6F5F2] text-[#111111] flex flex-col overflow-hidden font-sans select-none">

      {/* ------------------------------------------------------------- top bar */}
      <header className="w-full h-14 shrink-0 px-4 md:px-12 flex items-center justify-between border-b border-black/[0.06] bg-[#F6F5F2]/95 backdrop-blur-sm z-30">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Yoode Home">
            <svg className="w-7 h-7 text-black transition-transform group-hover:scale-105" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" fill="none" />
              <circle cx="12" cy="28" r="5" fill="none" />
              <path d="M16 14.5 L32 30" />
              <path d="M16 25.5 L32 10" />
              <circle cx="23.5" cy="20" r="1.5" fill="currentColor" />
            </svg>
          </Link>
          <nav className="flex items-center gap-6 text-[11px] md:text-[12px] font-bold tracking-[0.16em] uppercase text-black/75">
            <span className="text-black border-b-2 border-black pb-0.5 cursor-pointer">DESIGN STUDIO</span>
            <Link href="/custom-sports-jerseys" className="hover:text-black transition-colors hidden sm:inline">SPORTS SHOWCASE</Link>
            <Link href="/services" className="hover:text-black transition-colors hidden sm:inline">ATELIER SERVICES</Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 bg-black/[0.04] px-4 py-1.5 rounded-full border border-black/[0.06]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-black uppercase tracking-wider text-black">{garment.name}</span>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest hidden sm:inline">· Kit Studio</span>
        </div>

        <div className="flex items-center gap-4 md:gap-6 text-[12px] font-bold tracking-[0.14em] uppercase text-black/80">
          <div className="hidden sm:flex items-center gap-1.5 cursor-pointer hover:text-black">
            <span className="text-sm">🇮🇳</span>
            <span className="text-[11px] font-extrabold">INR</span>
            <ChevronDown size={13} className="text-gray-400" />
          </div>
          <button type="button" className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer">
            <Heart size={15} className="text-black" />
            <span className="hidden md:inline">Favorites</span>
          </button>
          <button type="button" className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer">
            <ShoppingBag size={15} />
            <span className="hidden md:inline">Bag</span>
            <span className="text-[10px] bg-black text-white rounded-full w-4 h-4 flex items-center justify-center font-bold">{isAdded ? "1" : "0"}</span>
          </button>
          <button type="button" onClick={onClose} title="Close Studio"
            className="w-8 h-8 rounded-full bg-black/5 hover:bg-black hover:text-white transition-colors flex items-center justify-center text-gray-800 cursor-pointer ml-1">
            <X size={16} strokeWidth={2.5} />
          </button>
        </div>
      </header>

      {/* ------------------------------------------------------------- where you are */}
      <div className="w-full h-9 shrink-0 flex items-center justify-between px-6 md:px-12 border-b border-black/[0.03]">
        <nav aria-label="Studio progress" className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest">
          {crumbs.map(([n, label, go], i) => (
            <span key={n} className="flex items-center gap-1">
              {i > 0 && <ChevronRight size={12} className="text-black/30" />}
              <button type="button" onClick={go} aria-current={crumb === n ? "step" : undefined}
                className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${crumb === n ? "text-black font-extrabold bg-black/[0.05]" : "text-black/45 hover:text-black hover:bg-black/[0.03]"}`}>
                {n}. {label}
              </button>
            </span>
          ))}
        </nav>
        <div className="hidden sm:flex items-center gap-3 text-[11px] font-bold text-gray-500 tracking-wider">
          <span>100% Sublimation Guaranteed</span>
          <span>·</span>
          <span>No Minimum Order</span>
        </div>
      </div>

      {/* ------------------------------------------------------------- workspace */}
      <div className="flex-1 min-h-0 w-full max-w-[1520px] mx-auto px-2 md:px-8 flex items-center justify-between relative overflow-hidden py-1">

        {/* Steps wheel */}
        <div className="hidden md:block shrink-0 z-20">
          <Wheel
            side="left"
            label="Steps"
            w={300}
            h={480}
            r={330}
            step={11}
            visible={3}
            header={<span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Step {STEPS.findIndex(x => x.id === step) + 1} of {STEPS.length}</span>}
            items={STEPS.map(({ id, label, Icon }) => ({ id, label, content: <Icon size={16} strokeWidth={2.2} /> }))}
            active={step}
            onPick={id => goStep(id as StudioStep)}
          />
        </div>

        {/* 3D stage */}
        <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-2 h-full max-h-[100%] min-w-0">
          <div className="relative w-[340px] sm:w-[420px] md:w-[480px] lg:w-[540px] h-[48vh] sm:h-[52vh] max-h-[440px] md:max-h-[480px] flex items-center justify-center">
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-black/[0.10] blur-xl rounded-[100%] pointer-events-none z-0" />

            {/* Undo / redo / start over */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 flex items-center gap-0.5 p-0.5 bg-white/90 rounded-full border border-black/10 shadow-xs">
              {([
                ["Undo", Undo2, history.undo, history.canUndo],
                ["Redo", Redo2, history.redo, history.canRedo],
                ["Start over", RotateCcw, () => update(() => initialConfig(garment.id)), true],
              ] as const).map(([label, Icon, run, enabled]) => (
                <button key={label} type="button" onClick={run} disabled={!enabled} aria-label={label} title={label}
                  className="w-8 h-7 rounded-full flex items-center justify-center text-black/60 hover:text-black hover:bg-black/5 disabled:opacity-25 disabled:pointer-events-none cursor-pointer">
                  <Icon size={14} />
                </button>
              ))}
            </div>

            <div className="absolute inset-0 z-10">
              <KitStudio3D
                design={design}
                images={images}
                view={view}
                activeHotspot={activeHotspot(step, logoSpot)}
                hiddenHotspots={HOTSPOTS.filter(h => h.spot && config.logos.some(l => l.spot === h.spot)).map(h => h.id)}
                onHotspot={selectHotspot}
              />
            </div>
          </div>

          {/* Sides of the kit */}
          <div className="flex items-center gap-1 mt-3 p-1 bg-white/70 rounded-xl border border-black/[0.06] shrink-0 z-20" role="group" aria-label="Turn the kit">
            {VIEWS.map(v => (
              <button key={v.id} type="button" onClick={() => setView(v.az)} aria-label={v.label} title={v.label} aria-pressed={viewId === v.id}
                className={`w-9 h-8 rounded-lg text-[11px] font-black transition-colors cursor-pointer ${viewId === v.id ? "bg-[#111111] text-white" : "text-black/55 hover:text-black hover:bg-white"}`}>
                {v.id}
              </button>
            ))}
          </div>
          <p className="mt-1.5 text-[10px] font-semibold text-black/40 shrink-0">Drag to turn · click a + to edit that part</p>

          {/* Price and add to cart */}
          <div className="flex items-center gap-4 mt-2 shrink-0 z-20">
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                {garment.name} · {SLEEVE_LABEL[config.sleeve]}
              </span>
              <span className="text-lg md:text-xl font-black tracking-tight text-black">
                ₹{price.unit.toLocaleString("en-IN")}<span className="ml-1 text-[11px] font-bold text-black/45">per piece</span>
              </span>
              <span className="text-[10px] font-semibold text-black/50 whitespace-nowrap">
                {price.qty} {price.qty === 1 ? "shirt" : "shirts"} · ₹{(price.unit * price.qty).toLocaleString("en-IN")}
                {price.next && <> · ₹{price.next[1].toLocaleString("en-IN")} from {price.next[0]}</>}
              </span>
            </div>
            <button type="button" onClick={handleAddToCart}
              className="bg-black hover:bg-neutral-800 text-white font-black text-xs md:text-[13px] px-7 py-2.5 tracking-[0.16em] uppercase rounded-xs transition-all active:scale-95 cursor-pointer shadow-sm flex items-center gap-2 whitespace-nowrap shrink-0">
              {isAdded ? <><Check size={14} /><span>IN BAG</span></> : <><span>ADD TO CART</span><ArrowUpRight size={14} /></>}
            </button>
          </div>
        </div>

        {/* The step's options */}
        <StudioOptions
          step={step}
          onStep={goStep}
          config={config}
          update={update}
          focus={focus}
          logoSpot={logoSpot}
          setLogoSpot={setLogoSpot}
          player={Math.min(player, Math.max(0, config.team.length - 1))}
          setPlayer={setPlayer}
          namesPart={namesPart}
          setNamesPart={setNamesPart}
        />
      </div>

      {/* ------------------------------------------------------------- footer */}
      <footer className="w-full h-10 shrink-0 px-4 md:px-12 flex items-center justify-between border-t border-black/[0.06] text-xs font-bold tracking-wider text-black/60 uppercase">
        <button type="button" onClick={handleShare} className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer">
          <Heart size={14} className="text-black" />
          <span>{isCopied ? "Link copied" : "Save configuration"}</span>
        </button>
        <div className="hidden sm:flex items-center gap-2 text-[11px] text-gray-500 normal-case font-medium">
          <span>Factory direct from Tirupur, India</span>
          <span>·</span>
          <span>Free design mockup sent within 24 hours</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-gray-400 normal-case font-normal">
          <ShieldCheck size={14} className="text-emerald-600" />
          <span className="hidden sm:inline">100% Guaranteed colorfast &amp; zero shrinkage</span>
          <span className="sm:hidden">Made in India</span>
        </div>
      </footer>
    </div>
  );
}
