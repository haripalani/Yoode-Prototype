"use client";

// The right side of the kit studio: the current step's choices on a wheel (the mirror of the steps
// wheel on the left), with chips above it to switch between parts of the step, and the few
// controls that are not a list of choices (sliders, upload, text) underneath.
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronRight, Hash, Layers, Palette, Plus, Shirt, Sparkles, Trash2, Type, Upload } from "lucide-react";
import type { PanelId } from "@/lib/studio/garment";
import {
  AREAS, ALL_SIZES, AUDIENCES, COLOR_AREAS, COMBOS, FABRIC_GROUPS, FONTS, GARMENTS, LOGO_METHODS, LOOKS, PALETTE, PATTERNS,
  READY_KITS, SLEEVE_LABEL, SPOTS, colorName, fabricKey, garmentById, spotById, type SpotKind,
} from "@/lib/studio/catalog";
import { DEFAULT_PATTERN, renderPanel, type Fade, type LookId, type PatternFill, type PatternId, type StudioDesign } from "@/lib/studio/painter";
import { newId, type KitConfig } from "@/lib/studio/kitDesign";
import type { StudioStep } from "@/lib/studio/hotspots";
import Wheel, { type WheelItem } from "./Wheel";

export const STEPS: Array<{ id: StudioStep; label: string; title: string; Icon: typeof Shirt }> = [
  { id: "shirt", label: "Shirt", title: "Your garment", Icon: Shirt },
  { id: "look", label: "Look", title: "Design", Icon: Layers },
  { id: "colours", label: "Colours", title: "Kit colours", Icon: Palette },
  { id: "logos", label: "Logos", title: "Logos", Icon: Sparkles },
  { id: "names", label: "Names", title: "Names & numbers", Icon: Hash },
  { id: "text", label: "Text", title: "Text", Icon: Type },
];

interface Props {
  step: StudioStep;
  onStep: (s: StudioStep) => void;
  config: KitConfig;
  update: (fn: (c: KitConfig) => KitConfig) => void;
  /** Turn the 3D kit to a panel. */
  focus: (panel: PanelId) => void;
  logoSpot: string;
  setLogoSpot: (spot: string) => void;
  player: number;
  setPlayer: (i: number) => void;
  /** Which part of the names step is open. "team" is the team list. */
  namesPart: NamesPart;
  setNamesPart: (p: NamesPart) => void;
}
export type NamesPart = "team" | "names" | "numbers" | "lettering";

const WHEEL = { w: 340, h: 300, r: 220, step: 14, visible: 2 };
const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
const initials = (s: string) => s.split(/[\s-]+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();

const chip = (on: boolean) =>
  `px-2.5 py-1.5 rounded-lg border text-[11px] font-bold whitespace-nowrap transition-colors cursor-pointer ${
    on ? "bg-[#111111] text-white border-[#111111]" : "bg-white/80 text-black/65 border-black/10 hover:border-black/35 hover:text-black"
  }`;
const field = "min-w-0 h-9 px-2.5 rounded-lg border border-black/15 bg-white text-[12px] font-semibold focus:outline-none focus:border-black";

function Chips<T extends string>({ value, items, onChange, label }: { value: T; items: Array<[T, string]>; onChange: (v: T) => void; label: string }) {
  return (
    <div className="flex flex-wrap gap-1" role="tablist" aria-label={label}>
      {items.map(([id, text]) => (
        <button key={id} type="button" role="tab" aria-selected={value === id} onClick={() => onChange(id)} className={chip(value === id)}>{text}</button>
      ))}
    </div>
  );
}

function Slider({ label, value, min, max, step, unit = "", onChange }: { label: string; value: number; min: number; max: number; step: number; unit?: string; onChange: (v: number) => void }) {
  return (
    <label className="block">
      <span className="flex justify-between text-[10.5px] font-bold text-black/55"><span>{label}</span><span className="text-black tabular-nums">{Math.round(value * 100) / 100}{unit}</span></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(+e.target.value)} className="w-full accent-black cursor-pointer" />
    </label>
  );
}

/** The front panel drawn with a design, for wheel nodes. */
function Thumb({ design }: { design: StudioDesign }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => { if (ref.current) renderPanel(ref.current, "front", design); }, [design]);
  return <canvas ref={ref} width={72} height={100} className="w-full h-full object-cover scale-[1.6] translate-y-[12%]" aria-hidden />;
}
const thumbDesign = (look: LookId, slots: [string, string, string], pattern?: PatternFill): StudioDesign =>
  ({ look, slots, panelColor: {}, pattern: pattern ? { front: pattern } : {}, fade: {}, elements: [] });

const swatches = (none?: { id: string; label: string }): WheelItem[] => [
  ...(none ? [{ id: none.id, label: none.label, content: <span className="text-[9px]">OFF</span> }] : []),
  ...PALETTE.map(([name, hex]) => ({ id: hex, label: name, color: hex })),
];

const spotItems = (kind: SpotKind, filled: (id: string) => boolean = () => false): WheelItem[] =>
  SPOTS[kind].map(s => ({ id: s.id, label: s.label, content: initials(s.label), filled: filled(s.id) }));

// ---------------------------------------------------------------- the column
export default function StudioOptions(props: Props) {
  const { step, onStep } = props;
  const idx = STEPS.findIndex(s => s.id === step);
  const next = STEPS[idx + 1];
  const view = useStepView(props);

  return (
    <div className="hidden md:flex flex-col shrink-0 z-20 w-[340px] h-full max-h-[560px] py-2">
      <div className="px-2 shrink-0">
        <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">Step {idx + 1} of {STEPS.length}</span>
        <h2 className="mt-0.5 text-[17px] leading-tight font-black tracking-tight text-black">{STEPS[idx].title}</h2>
        {view.parts && <div className="mt-2.5">{view.parts}</div>}
      </div>

      <div className="flex-1 min-h-0 flex items-center">
        <Wheel side="right" {...WHEEL} label={`${STEPS[idx].title} options`} items={view.items} active={view.active} onPick={view.pick} />
      </div>

      {view.extras && <div className="px-2 flex flex-col gap-2 shrink-0">{view.extras}</div>}

      {next && (
        <button type="button" onClick={() => onStep(next.id)}
          className="mt-3 mx-2 shrink-0 self-end flex items-center gap-1.5 bg-[#111111] hover:bg-black text-white pl-4 pr-3 h-10 rounded-xl text-[11px] font-black uppercase tracking-[0.1em] cursor-pointer shadow-[0_8px_18px_rgba(0,0,0,0.18)] active:scale-[0.97] transition-all">
          Next: {next.label} <ChevronRight size={14} />
        </button>
      )}
    </div>
  );
}

interface StepView { parts?: ReactNode; items: WheelItem[]; active: string; pick: (id: string) => void; extras?: ReactNode }

/** What the right side shows for the current step and part. */
function useStepView(p: Props): StepView {
  const { step, config: c, update, focus } = p;
  const [shirtPart, setShirtPart] = useState<"style" | "sleeve" | "fit" | "fabric">("style");
  const [lookPart, setLookPart] = useState<"designs" | "kits" | "patterns" | "fades">("designs");
  const [colourPart, setColourPart] = useState<"0" | "1" | "2" | "panels" | "combos">("0");
  const [area, setArea] = useState<PanelId>("front");
  const [panelArea, setPanelArea] = useState<PanelId>("front");
  const [logoSel, setLogoSel] = useState<string>("new");
  const [logoPart, setLogoPart] = useState<"spot" | "method">("spot");
  const [nameSpot, setNameSpot] = useState<Record<"names" | "numbers", string>>({ names: "back-top", numbers: "back" });
  const [textSel, setTextSel] = useState<string>("new");
  const [textSpot, setTextSpot] = useState("front-chest");
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const file = useRef<HTMLInputElement>(null);

  const areaChips = (value: PanelId, onChange: (a: PanelId) => void, list = AREAS) => (
    <Chips label="Panel" value={value} onChange={a => { onChange(a); focus(a); }} items={list.map(a => [a.id, a.label] as [PanelId, string])} />
  );

  switch (step) {
    // ------------------------------------------------------------ Shirt
    case "shirt": {
      const g = garmentById(c.garmentId);
      const parts = <Chips label="Shirt" value={shirtPart} onChange={setShirtPart} items={[["style", "Style"], ["sleeve", "Sleeve"], ["fit", "Fit"], ["fabric", "Fabric"]]} />;
      const summary = <p className="text-[11px] font-semibold text-black/50">{g.name} · {SLEEVE_LABEL[c.sleeve]} · {c.audience} · {c.fabric.split(" · ")[1]}</p>;
      if (shirtPart === "style") return {
        parts, extras: summary, active: g.id,
        items: GARMENTS.map(x => ({ id: x.id, label: x.name, hint: x.neck, content: x.code })),
        pick: id => update(k => { const x = garmentById(id); return { ...k, garmentId: id, sleeve: x.sleeves.includes(k.sleeve) ? k.sleeve : x.sleeves[0] }; }),
      };
      if (shirtPart === "sleeve") return {
        parts, extras: g.sleeves.length < 2 ? <p className="text-[11px] font-semibold text-black/50">The {g.name.toLowerCase()} comes in one sleeve length.</p> : summary, active: c.sleeve,
        items: g.sleeves.map(s => ({ id: s, label: SLEEVE_LABEL[s], hint: s === "full" ? "+₹50 per piece" : "Included", content: s === "half" ? "HS" : s === "full" ? "FS" : "SL" })),
        pick: id => update(k => ({ ...k, sleeve: id as KitConfig["sleeve"] })),
      };
      if (shirtPart === "fit") return {
        parts, extras: <p className="text-[11px] font-semibold text-black/50">Mix men&apos;s, women&apos;s and kids&apos; sizes in the team list.</p>, active: c.audience,
        items: AUDIENCES.map(a => ({ id: a, label: a, content: a[0] })),
        pick: id => update(k => ({ ...k, audience: id as KitConfig["audience"] })),
      };
      return {
        parts, extras: summary, active: c.fabric,
        items: FABRIC_GROUPS.flatMap(fg => fg.items.map(item => ({
          id: fabricKey(fg, item), label: item, hint: `${fg.name} · ${fg.gsm} · ${fg.add ? `+${inr(fg.add)}` : "included"}`, content: initials(item),
        }))),
        pick: id => update(k => ({ ...k, fabric: id })),
      };
    }

    // ------------------------------------------------------------ Look
    case "look": {
      const parts = <Chips label="Look" value={lookPart} onChange={setLookPart} items={[["designs", "Designs"], ["kits", "Ready kits"], ["patterns", "Patterns"], ["fades", "Fades"]]} />;
      if (lookPart === "designs") return {
        parts, active: c.look,
        items: LOOKS.map(l => ({ id: l.id, label: l.name, content: <Thumb design={thumbDesign(l.id, c.slots)} /> })),
        pick: id => update(k => ({ ...k, look: id as LookId })),
      };
      if (lookPart === "kits") {
        const on = READY_KITS.find(k => k.look === c.look && k.slots.join() === c.slots.join());
        return {
          parts, extras: <p className="text-[11px] font-semibold text-black/50">Finished designs, colours included. Your logos, names and text stay.</p>,
          active: on?.name ?? "",
          items: READY_KITS.map(k => ({ id: k.name, label: k.name, content: <Thumb design={thumbDesign(k.look, k.slots)} /> })),
          pick: id => { const k = READY_KITS.find(x => x.name === id)!; update(x => ({ ...x, look: k.look, slots: [...k.slots], panelColor: {} })); },
        };
      }
      if (lookPart === "patterns") {
        const pat: PatternFill = { ...DEFAULT_PATTERN, ...c.pattern[area] };
        const set = (patch: Partial<PatternFill>) => update(k => ({ ...k, pattern: { ...k.pattern, [area]: { ...DEFAULT_PATTERN, ...k.pattern[area], on: true, ...patch } } }));
        const ink = pat.color ?? c.slots[1];
        return {
          parts, active: pat.on ? pat.id : "none",
          items: [
            { id: "none", label: "No pattern", content: <span className="text-[9px]">OFF</span> },
            ...PATTERNS.map(x => ({ id: x.id, label: x.name, content: <Thumb design={thumbDesign("plain", [c.slots[0], ink, c.slots[2]], { ...DEFAULT_PATTERN, id: x.id, on: true, opacity: 0.8, scale: 7 })} /> })),
          ],
          pick: id => (id === "none" ? set({ on: false }) : set({ id: id as PatternId })),
          extras: (
            <>
              {areaChips(area, setArea)}
              {pat.on && (
                <>
                  <div className="grid grid-cols-3 gap-2">
                    <Slider label="Scale" value={pat.scale} min={3} max={16} step={0.5} onChange={v => set({ scale: v })} />
                    <Slider label="Angle" value={pat.angle} min={0} max={180} step={5} unit="°" onChange={v => set({ angle: v })} />
                    <Slider label="Strength" value={Math.round(pat.opacity * 100)} min={10} max={100} step={5} unit="%" onChange={v => set({ opacity: v / 100 })} />
                  </div>
                  <ColourStrip value={ink} onPick={hex => set({ color: hex })} label="Pattern colour" />
                  <button type="button" className={`${chip(false)} self-start`} onClick={() => update(k => ({ ...k, pattern: Object.fromEntries(AREAS.map(a => [a.id, { ...pat, on: true }])) }))}>Use on every panel</button>
                </>
              )}
            </>
          ),
        };
      }
      const fade: Fade = { on: false, type: "linear", position: 0, angle: 0, color: c.slots[1], ...c.fade[area] };
      const set = (patch: Partial<Fade>) => update(k => ({ ...k, fade: { ...k.fade, [area]: { type: "linear", position: 0, angle: 0, color: k.slots[1], ...k.fade[area], on: true, ...patch } } }));
      return {
        parts, active: fade.on ? fade.color : "none",
        items: swatches({ id: "none", label: "No fade" }),
        pick: id => (id === "none" ? set({ on: false }) : set({ color: id })),
        extras: (
          <>
            {areaChips(area, setArea)}
            {fade.on && (
              <>
                <div className="flex gap-1">
                  {(["linear", "radial"] as const).map(t => <button key={t} type="button" aria-pressed={fade.type === t} className={chip(fade.type === t)} onClick={() => set({ type: t })}>{t === "linear" ? "Straight" : "Round"}</button>)}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Slider label="Position" value={fade.position} min={-1} max={1} step={0.05} onChange={v => set({ position: v })} />
                  {fade.type === "linear" && <Slider label="Angle" value={fade.angle} min={0} max={360} step={5} unit="°" onChange={v => set({ angle: v })} />}
                </div>
                <button type="button" className={`${chip(false)} self-start`} onClick={() => update(k => ({ ...k, fade: Object.fromEntries(AREAS.map(a => [a.id, { ...fade, on: true }])) }))}>Use on every panel</button>
              </>
            )}
          </>
        ),
      };
    }

    // ------------------------------------------------------------ Colours
    case "colours": {
      const parts = <Chips label="Colours" value={colourPart} onChange={setColourPart} items={[["0", "Main"], ["1", "Accent"], ["2", "Details"], ["panels", "Each panel"], ["combos", "Combos"]]} />;
      const kitButtons = (
        <div className="flex flex-wrap gap-1">
          <button type="button" className={chip(false)} onClick={() => update(k => ({ ...k, slots: [k.slots[2], k.slots[0], k.slots[1]] }))}>Shuffle</button>
          <button type="button" className={chip(false)} onClick={() => update(k => ({ ...k, slots: [k.slots[1], k.slots[0], k.slots[2]] }))}>Swap main and accent</button>
          {Object.keys(c.panelColor).length > 0 && <button type="button" className={chip(false)} onClick={() => update(k => ({ ...k, panelColor: {} }))}>Reset panel colours</button>}
        </div>
      );
      if (colourPart === "combos") {
        const on = COMBOS.find(k => k.slots.join() === c.slots.join());
        return {
          parts, extras: kitButtons, active: on?.name ?? "",
          items: COMBOS.map(k => ({
            id: k.name, label: k.name,
            content: <span className="absolute inset-0 flex">{k.slots.map((h, i) => <i key={i} className="flex-1" style={{ background: h }} />)}</span>,
          })),
          pick: id => update(x => ({ ...x, slots: [...COMBOS.find(k => k.name === id)!.slots] })),
        };
      }
      if (colourPart === "panels") {
        const own = c.panelColor[panelArea];
        return {
          parts, active: own ?? "kit",
          items: [{ id: "kit", label: "Kit colour", content: <span className="text-[9px]">KIT</span> }, ...swatches()],
          pick: id => update(k => {
            const panelColor = { ...k.panelColor };
            if (id === "kit") delete panelColor[panelArea]; else panelColor[panelArea] = id;
            return { ...k, panelColor };
          }),
          extras: <>{areaChips(panelArea, setPanelArea, COLOR_AREAS)}<p className="text-[11px] font-semibold text-black/50">Colour one panel on its own. The rest follow the kit colours.</p></>,
        };
      }
      const slot = +colourPart as 0 | 1 | 2;
      const hint = ["Body of the kit", "Design artwork and cuffs", "Names, numbers and text"][slot];
      return {
        parts, active: c.slots[slot],
        extras: <><p className="text-[11px] font-semibold text-black/50">{hint} · {colorName(c.slots[slot])}</p>{kitButtons}</>,
        items: swatches(),
        pick: hex => update(k => { const slots = [...k.slots] as KitConfig["slots"]; slots[slot] = hex; return { ...k, slots }; }),
      };
    }

    // ------------------------------------------------------------ Logos
    case "logos": {
      const logo = c.logos.find(l => l.id === logoSel);
      const parts = (
        <div className="flex flex-wrap gap-1" role="tablist" aria-label="Logos">
          {c.logos.map((l, i) => (
            <button key={l.id} type="button" role="tab" aria-selected={logo?.id === l.id} onClick={() => { setLogoSel(l.id); focus(spotById("logo", l.spot).panel); }} className={chip(logo?.id === l.id)}>Logo {i + 1}</button>
          ))}
          <button type="button" role="tab" aria-selected={!logo} onClick={() => setLogoSel("new")} className={`${chip(!logo)} flex items-center gap-1`}><Plus size={12} /> Add logo</button>
        </div>
      );
      if (!logo) {
        const add = (f?: File) => {
          if (!f) return;
          if (!/^image\/(svg\+xml|png|jpeg|webp|gif)$/.test(f.type)) { setError("Use an SVG, PNG, JPG, WEBP or GIF file."); return; }
          if (f.size > 10 * 1024 * 1024) { setError("That file is over 10 MB."); return; }
          setError("");
          const id = `logo-${newId()}`;
          update(k => ({ ...k, logos: [...k.logos, { id, url: URL.createObjectURL(f), name: f.name, spot: p.logoSpot, size: 100, method: "print" }] }));
          setLogoSel(id);
          focus(spotById("logo", p.logoSpot).panel);
        };
        return {
          parts, active: p.logoSpot,
          items: spotItems("logo", id => c.logos.some(l => l.spot === id)),
          pick: id => { p.setLogoSpot(id); focus(spotById("logo", id).panel); },
          extras: (
            <>
              <label onDragOver={e => e.preventDefault()} onDrop={e => { e.preventDefault(); add(e.dataTransfer.files[0]); }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl border-[1.5px] border-dashed border-black/20 hover:border-black/45 hover:bg-white/70 transition-colors cursor-pointer">
                <Upload size={16} className="text-black/60 shrink-0" />
                <span className="min-w-0">
                  <b className="block text-[12px]">Upload for the {spotById("logo", p.logoSpot).label.toLowerCase()}</b>
                  <small className="block text-[10px] text-black/45">SVG, PNG, JPG, WEBP or GIF · max 10 MB</small>
                </span>
                <input ref={file} type="file" accept="image/svg+xml,image/png,image/jpeg,image/webp,image/gif" hidden onChange={e => { add(e.target.files?.[0]); e.target.value = ""; }} />
              </label>
              {error && <p className="text-[11px] font-bold text-red-600" role="alert">{error}</p>}
            </>
          ),
        };
      }
      const set = (patch: Partial<KitConfig["logos"][number]>) => update(k => ({ ...k, logos: k.logos.map(l => (l.id === logo.id ? { ...l, ...patch } : l)) }));
      const extras = (
        <>
          <Chips label="Logo setting" value={logoPart} onChange={setLogoPart} items={[["spot", "Position"], ["method", "Method"]]} />
          <div className="flex items-end gap-3">
            <div className="flex-1"><Slider label="Size" value={logo.size} min={40} max={140} step={5} unit="%" onChange={v => set({ size: v })} /></div>
            <button type="button" aria-label={`Remove ${logo.name}`} onClick={() => { update(k => ({ ...k, logos: k.logos.filter(l => l.id !== logo.id) })); setLogoSel("new"); }}
              className="h-8 px-2.5 rounded-lg flex items-center gap-1 text-[11px] font-bold text-black/50 hover:text-red-600 hover:bg-red-50 cursor-pointer"><Trash2 size={13} /> Remove</button>
          </div>
        </>
      );
      if (logoPart === "method") return {
        parts, extras, active: logo.method,
        items: LOGO_METHODS.map(m => ({ id: m.id, label: m.name, hint: `${m.desc} · ${m.add ? `+${inr(m.add)} per piece` : "included"}`, content: initials(m.name) })),
        pick: id => set({ method: id }),
      };
      return {
        parts, extras, active: logo.spot,
        items: spotItems("logo", id => c.logos.some(l => l.spot === id && l.id !== logo.id)),
        pick: id => { set({ spot: id }); focus(spotById("logo", id).panel); },
      };
    }

    // ------------------------------------------------------------ Names & numbers
    case "names": {
      const part = p.namesPart;
      const parts = <Chips label="Names and numbers" value={part} onChange={v => { p.setNamesPart(v); if (v !== "lettering") focus("back"); }} items={[["team", "Team list"], ["names", "Names"], ["numbers", "Numbers"], ["lettering", "Lettering"]]} />;
      if (part === "lettering") return {
        parts, active: c.font,
        items: FONTS.map(f => ({ id: f.id, label: f.name, content: <span className="text-[15px]" style={{ fontFamily: f.family }}>12</span> })),
        pick: id => update(k => ({ ...k, font: id })),
      };
      if (part === "team") {
        const row = c.team[p.player];
        const setRow = (patch: Partial<KitConfig["team"][number]>) => row && update(k => ({ ...k, team: k.team.map(r => (r.id === row.id ? { ...r, ...patch } : r)) }));
        const addRow = () => {
          update(k => ({ ...k, team: [...k.team, { id: `row-${newId()}`, name: "", number: "", size: k.team.at(-1)?.size ?? `${k.audience} ${k.audience === "Kids" ? "28" : "M"}` }] }));
          p.setPlayer(c.team.length);
          focus("back");
        };
        const sizes = c.team.reduce<Record<string, number>>((m, r) => ({ ...m, [r.size]: (m[r.size] ?? 0) + 1 }), {});
        return {
          parts, active: row?.id ?? "",
          items: c.team.map((r, i) => ({ id: r.id, label: r.name || `Player ${i + 1}`, hint: r.size, content: r.number || "–" })),
          pick: id => { p.setPlayer(Math.max(0, c.team.findIndex(r => r.id === id))); focus("back"); },
          extras: (
            <>
              {row && (
                <div className="grid grid-cols-[1fr_52px_86px_auto] gap-1.5 items-center">
                  <input aria-label="Player name" className={field} value={row.name} maxLength={14} placeholder="Name" onChange={e => setRow({ name: e.target.value })} />
                  <input aria-label="Player number" className={field} value={row.number} maxLength={2} inputMode="numeric" placeholder="No." onChange={e => setRow({ number: e.target.value.replace(/\D/g, "") })} />
                  <select aria-label="Player size" className={field} value={row.size} onChange={e => setRow({ size: e.target.value })}>
                    {ALL_SIZES.map(s => <option key={s}>{s}</option>)}
                  </select>
                  <button type="button" aria-label="Remove this player" onClick={() => { update(k => ({ ...k, team: k.team.filter(r => r.id !== row.id) })); p.setPlayer(Math.max(0, p.player - 1)); }}
                    className="w-8 h-9 rounded-lg flex items-center justify-center text-black/45 hover:text-red-600 hover:bg-red-50 cursor-pointer"><Trash2 size={14} /></button>
                </div>
              )}
              <div className="flex items-center justify-between gap-2">
                <button type="button" onClick={addRow} className={`${chip(false)} flex items-center gap-1`}><Plus size={12} /> Add a player</button>
                <span className="text-[10.5px] font-semibold text-black/45 truncate">{c.team.length} {c.team.length === 1 ? "shirt" : "shirts"} · {Object.entries(sizes).map(([s, n]) => `${s} ×${n}`).join(", ")}</span>
              </div>
            </>
          ),
        };
      }
      const key = part; // "names" | "numbers"
      const kind: SpotKind = key === "names" ? "name" : "number";
      const spot = nameSpot[key];
      const placed = c[key].some(m => m.spot === spot);
      return {
        parts, active: spot,
        items: spotItems(kind, id => c[key].some(m => m.spot === id)),
        pick: id => { setNameSpot(s => ({ ...s, [key]: id })); focus(spotById(kind, id).panel); },
        extras: (
          <div className="flex items-center justify-between gap-2">
            <p className="text-[11px] font-semibold text-black/50">{placed ? `A ${kind} prints here on every shirt.` : `No ${kind} here yet.`}</p>
            <button type="button" className={chip(placed)} onClick={() => update(k => ({
              ...k,
              [key]: placed ? k[key].filter(m => m.spot !== spot) : [...k[key], { id: `${kind}-${newId()}`, spot }],
            }))}>{placed ? "Remove" : `Add ${kind} here`}</button>
          </div>
        ),
      };
    }

    // ------------------------------------------------------------ Text
    case "text": {
      const text = c.texts.find(t => t.id === textSel);
      const parts = (
        <div className="flex flex-wrap gap-1" role="tablist" aria-label="Text">
          {c.texts.map(t => (
            <button key={t.id} type="button" role="tab" aria-selected={text?.id === t.id} onClick={() => { setTextSel(t.id); focus(spotById("text", t.spot).panel); }} className={`${chip(text?.id === t.id)} max-w-36 truncate`}>{t.text}</button>
          ))}
          <button type="button" role="tab" aria-selected={!text} onClick={() => setTextSel("new")} className={`${chip(!text)} flex items-center gap-1`}><Plus size={12} /> Add text</button>
        </div>
      );
      if (!text) {
        const place = () => {
          if (!draft.trim()) return;
          const id = `text-${newId()}`;
          update(k => ({ ...k, texts: [...k.texts, { id, text: draft.trim(), spot: textSpot }] }));
          setTextSel(id);
          setDraft("");
        };
        return {
          parts, active: textSpot,
          items: spotItems("text", id => c.texts.some(t => t.spot === id)),
          pick: id => { setTextSpot(id); focus(spotById("text", id).panel); },
          extras: (
            <form onSubmit={e => { e.preventDefault(); place(); }} className="flex gap-1.5">
              <input value={draft} onChange={e => setDraft(e.target.value)} maxLength={40} placeholder="Club name, motto or year" aria-label="Text to add" className={`${field} flex-1`} />
              <button type="submit" disabled={!draft.trim()} className="h-9 px-4 rounded-lg bg-[#111111] text-white text-[11px] font-black uppercase tracking-wider disabled:opacity-30 cursor-pointer">Place</button>
            </form>
          ),
        };
      }
      const set = (patch: Partial<KitConfig["texts"][number]>) => update(k => ({ ...k, texts: k.texts.map(t => (t.id === text.id ? { ...t, ...patch } : t)) }));
      return {
        parts, active: text.spot,
        items: spotItems("text", id => c.texts.some(t => t.spot === id && t.id !== text.id)),
        pick: id => { set({ spot: id }); focus(spotById("text", id).panel); },
        extras: (
          <div className="flex gap-1.5">
            <input value={text.text} maxLength={40} aria-label="Text" onChange={e => set({ text: e.target.value })} className={`${field} flex-1`} />
            <button type="button" aria-label={`Remove ${text.text}`} onClick={() => { update(k => ({ ...k, texts: k.texts.filter(t => t.id !== text.id) })); setTextSel("new"); }}
              className="h-9 px-2.5 rounded-lg flex items-center gap-1 text-[11px] font-bold text-black/50 hover:text-red-600 hover:bg-red-50 cursor-pointer"><Trash2 size={13} /> Remove</button>
          </div>
        ),
      };
    }
  }
}

/** A single row of colour dots, for a second colour that does not need its own wheel. */
function ColourStrip({ value, onPick, label }: { value: string; onPick: (hex: string) => void; label: string }) {
  return (
    <div>
      <span className="block text-[10.5px] font-bold text-black/55 mb-1">{label}</span>
      <div className="flex gap-1 overflow-x-auto pb-1 [scrollbar-width:thin]" role="radiogroup" aria-label={label}>
        {PALETTE.map(([name, hex]) => (
          <button key={hex} type="button" role="radio" aria-checked={hex === value} aria-label={name} title={name} onClick={() => onPick(hex)}
            className={`w-5 h-5 shrink-0 rounded-full border cursor-pointer ${hex === value ? "ring-2 ring-offset-1 ring-black border-transparent" : "border-black/15"}`} style={{ background: hex }} />
        ))}
      </div>
    </div>
  );
}
