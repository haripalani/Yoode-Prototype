"use client";

// A wheel of choices laid along an arc of a circle whose centre sits behind the garment.
// side "left":  the arc bows out to the left, labels pop out to the left (the steps).
// side "right": the mirror image, labels pop out to the right (each step's options).
// The active item sits at the apex. Items slide along the arc when it changes.
import type { CSSProperties, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface WheelItem {
  id: string;
  label: string;
  /** Second line under the active item's label, e.g. a price. */
  hint?: string;
  /** What sits inside the node: letters, an icon, a thumbnail. */
  content?: ReactNode;
  /** Node fill, for colour swatches. */
  color?: string;
  /** Marked as chosen without being the active one (e.g. a spot that already holds a name). */
  filled?: boolean;
}

interface WheelProps {
  side: "left" | "right";
  items: WheelItem[];
  active: string;
  onPick: (id: string) => void;
  /** Accessible name, e.g. "Steps". */
  label: string;
  w: number;
  h: number;
  r: number;
  /** Degrees between neighbours. */
  step: number;
  /** Items shown on each side of the active one. */
  visible?: number;
  /** Header over the wheel. */
  header?: ReactNode;
}

export default function Wheel({ side, items, active, onPick, label, w, h, r, step, visible = 3, header }: WheelProps) {
  const left = side === "left";
  // The apex sits 150px in from the wheel's outer edge, leaving room for the labels.
  const apexX = left ? 150 : w - 150;
  const centreX = left ? apexX + r : apexX - r;
  const cy = h / 2;
  const at = (deg: number) => {
    const a = (deg * Math.PI) / 180;
    return { x: centreX + (left ? -1 : 1) * r * Math.cos(a), y: cy - r * Math.sin(a) };
  };
  const reach = Math.min(step * (visible + 0.8), 60);
  const top = at(reach), bottom = at(-reach), up = at(reach + 3.2), down = at(-reach - 3.2);
  const idx = Math.max(0, items.findIndex(i => i.id === active));
  const go = (d: number) => {
    const next = items[idx + d];
    if (next) onPick(next.id);
  };
  const arrow = (pos: { x: number; y: number }, dir: -1 | 1) => (
    <button
      type="button"
      onClick={() => go(dir)}
      disabled={!items[idx + dir]}
      style={{ left: pos.x, top: pos.y }}
      className="absolute -translate-x-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-white/95 shadow-sm border border-black/10 flex items-center justify-center hover:bg-black hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer active:scale-95"
      aria-label={dir < 0 ? `Previous: ${items[idx - 1]?.label ?? ""}` : `Next: ${items[idx + 1]?.label ?? ""}`}
    >
      {dir < 0 ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
    </button>
  );

  return (
    <div className="relative shrink-0 select-none" style={{ width: w, height: h }} role="listbox" aria-label={label}>
      {header && <div className={`absolute top-0 z-30 ${left ? "left-4" : "right-2"}`}>{header}</div>}
      {arrow(up, -1)}

      <svg className="absolute inset-0 pointer-events-none" width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" aria-hidden>
        <defs>
          <linearGradient id={`wheel-fade-${side}`} gradientUnits="userSpaceOnUse" x1="0" y1={top.y} x2="0" y2={bottom.y}>
            <stop offset="0" stopColor="#000" stopOpacity="0" />
            <stop offset="0.14" stopColor="#000" stopOpacity="0.18" />
            <stop offset="0.86" stopColor="#000" stopOpacity="0.18" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`M ${top.x} ${top.y} A ${r} ${r} 0 0 ${left ? 0 : 1} ${bottom.x} ${bottom.y}`} stroke={`url(#wheel-fade-${side})`} strokeWidth="1.5" />
      </svg>

      {items.map((item, i) => {
        const offset = i - idx;
        const isActive = offset === 0;
        const hidden = Math.abs(offset) > visible;
        const deg = (left ? -1 : 1) * offset * step;
        const style: CSSProperties = {
          left: centreX,
          top: cy,
          transformOrigin: "0 0",
          transform: `rotate(${deg}deg) translateX(${left ? -r : r}px) rotate(${-deg}deg) translate(-50%, -50%)`,
          opacity: hidden ? 0 : 1,
          pointerEvents: hidden ? "none" : undefined,
          zIndex: isActive ? 20 : 10,
          transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease",
        };
        const dark = item.color ? null : isActive || item.filled;
        return (
          <div key={item.id} className="absolute will-change-transform group" style={style} aria-hidden={hidden || undefined}>
            <div className={`absolute top-1/2 -translate-y-1/2 flex flex-col pointer-events-none whitespace-nowrap transition-all duration-300 ${
              left ? "right-full mr-4 items-end" : "left-full ml-4 items-start"} ${
              isActive ? "opacity-100 translate-x-0" : `opacity-0 ${left ? "-translate-x-2" : "translate-x-2"} group-hover:opacity-100 group-hover:translate-x-0`}`}>
              <span className={`text-[12px] font-extrabold tracking-wide px-3.5 py-1 rounded-full shadow-md border ${
                isActive ? "bg-[#111111] text-white border-black" : "bg-white/95 text-black/90 border-black/10 shadow-xs"}`}>
                {item.label}
              </span>
              {isActive && item.hint && <span className="mt-1 px-1 text-[10px] font-bold text-black/50">{item.hint}</span>}
            </div>
            <button
              type="button"
              role="option"
              aria-selected={isActive}
              aria-label={item.hint ? `${item.label}, ${item.hint}` : item.label}
              tabIndex={hidden ? -1 : undefined}
              onClick={() => onPick(item.id)}
              title={item.label}
              style={item.color ? { background: item.color } : undefined}
              className={`relative rounded-full flex items-center justify-center overflow-hidden font-black transition-all duration-300 cursor-pointer ${
                isActive
                  ? "w-13 h-13 text-[13px] shadow-[0_12px_28px_rgba(0,0,0,0.35)] scale-110 ring-4 ring-black/10"
                  : "w-9 h-9 text-[10px] shadow-xs border border-black/15 group-hover:scale-110 group-hover:shadow-md group-hover:border-black/30"} ${
                dark === null ? "" : dark ? "bg-[#121212] text-white" : "bg-white text-black/75"} ${
                item.color && isActive ? "ring-black/80" : ""}`}
            >
              {item.content}
              {item.color && item.filled && !isActive && <span className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-white ring-1 ring-black/40" />}
            </button>
          </div>
        );
      })}

      {arrow(down, 1)}
    </div>
  );
}
