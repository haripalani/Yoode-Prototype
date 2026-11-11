// Paints the garment's print panels. Every panel is drawn in centimetres, so the same code
// fills the on-screen texture (about 20 px per cm) and a 300 dpi print file (118 px per cm).
//
// Layers, bottom to top: base colour -> fade -> pattern -> design artwork -> elements
// (logos, text, names, numbers).
import { GARMENT, CM_PER_UV, PANEL_IDS, type PanelId, type PanelRole } from "./garment";

export type LookId = "plain" | "cuffs" | "chevron" | "hoops" | "sash" | "halves" | "yoke" | "stripes" | "sides";
export type PatternId = "stripes" | "pinstripe" | "diagonal" | "checks" | "dots" | "zigzag" | "waves" | "diamonds";

export interface PatternFill {
  id: PatternId;
  on: boolean;
  /** Repeat size in cm. */
  scale: number;
  angle: number;
  /** 0 to 1. */
  opacity: number;
  /** Ink colour. Defaults to the accent colour. */
  color?: string;
}

export interface Fade {
  on: boolean;
  type: "linear" | "radial";
  /** -1 to 1: slides where the blend happens. */
  position: number;
  angle: number;
  color: string;
}

export interface StudioElement {
  id: string;
  type: "logo" | "text" | "name" | "number";
  panel: PanelId;
  /** Centre of the element on its panel, in cm. */
  x: number;
  y: number;
  /** Box size in cm. Text is fitted into it. */
  w: number;
  h: number;
  angle?: number;
  text?: string;
  /** CSS font-family list. var(--x) is resolved from the page. */
  font?: string;
  /** A colour slot (0 body, 1 accent, 2 detail) or a hex colour. */
  color?: number | string;
  /** Key into the images map, for logos. */
  src?: string;
}

export interface StudioDesign {
  look: LookId;
  /** Body, accent, detail. */
  slots: [string, string, string];
  panelColor: Partial<Record<PanelId, string>>;
  pattern: Partial<Record<PanelId, PatternFill>>;
  fade: Partial<Record<PanelId, Fade>>;
  elements: StudioElement[];
}

export type StudioImages = Record<string, HTMLImageElement | undefined>;

const BLEED_CM = 0.4; // paint a little past each panel edge so UV seams never show a gap

type Ctx = CanvasRenderingContext2D;

// ---------------------------------------------------------------- design artwork
const cuff = (ctx: Ctx, w: number, h: number, color: string) => {
  ctx.fillStyle = color;
  ctx.fillRect(-1, h - 3.5, w + 2, 4.5);
};
const body = (role: PanelRole) => role === "front" || role === "back";

const LOOKS: Record<LookId, (ctx: Ctx, w: number, h: number, role: PanelRole, s: StudioDesign["slots"]) => void> = {
  plain() {},
  cuffs(ctx, w, h, role, s) {
    if (role === "sleeve") cuff(ctx, w, h, s[1]);
  },
  chevron(ctx, w, h, role, s) {
    if (role === "sleeve") return cuff(ctx, w, h, s[1]);
    if (!body(role)) return;
    const top = role === "front" ? 16 : 20, depth = 16, band = 9;
    const v = (y: number, c: string) => {
      ctx.fillStyle = c;
      ctx.beginPath();
      ctx.moveTo(0, y); ctx.lineTo(w / 2, y + depth); ctx.lineTo(w, y);
      ctx.lineTo(w, y + band); ctx.lineTo(w / 2, y + depth + band); ctx.lineTo(0, y + band);
      ctx.closePath();
      ctx.fill();
    };
    v(top, s[1]);
    v(top + band + 1.2, s[2]);
    v(top + band + 2.6, s[0]);
  },
  hoops(ctx, w, h, role, s) {
    if (role === "trim") return;
    for (let y = 8; y < h; y += 14) {
      ctx.fillStyle = s[1];
      ctx.fillRect(-1, y, w + 2, 6);
    }
  },
  sash(ctx, w, h, role, s) {
    if (role === "sleeve") return cuff(ctx, w, h, s[1]);
    if (!body(role)) return;
    const flip = role === "back" ? -1 : 1; // over the left shoulder on both sides
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(flip * -0.75);
    ctx.fillStyle = s[1];
    ctx.fillRect(-80, -7, 160, 14);
    ctx.fillStyle = s[2];
    ctx.fillRect(-80, 7, 160, 1.5);
    ctx.restore();
  },
  halves(ctx, w, h, role, s) {
    if (role === "sleeve") { ctx.fillStyle = s[1]; ctx.fillRect(-1, -1, w + 2, h + 2); return; }
    if (!body(role)) return;
    // The wearer's left half: the viewer's right on the front, the viewer's left on the back.
    ctx.fillStyle = s[1];
    ctx.fillRect(role === "front" ? w / 2 : -1, -1, w / 2 + 1, h + 2);
  },
  yoke(ctx, w, h, role, s) {
    if (role === "sleeve") { ctx.fillStyle = s[1]; ctx.fillRect(-1, -1, w + 2, 7); return; }
    if (!body(role)) return;
    ctx.fillStyle = s[1];
    ctx.fillRect(-1, -1, w + 2, 15);
    ctx.fillStyle = s[2];
    ctx.fillRect(-1, 14, w + 2, 1.2);
  },
  stripes(ctx, w, h, role, s) {
    if (role === "sleeve") return cuff(ctx, w, h, s[1]);
    if (!body(role)) return;
    ctx.fillStyle = s[1];
    for (let x = 3; x < w; x += 8) ctx.fillRect(x, -1, 3.2, h + 2);
  },
  sides(ctx, w, h, role, s) {
    if (role === "sleeve") { ctx.fillStyle = s[1]; ctx.fillRect(-1, h - 5, w + 2, 6); return; }
    if (!body(role)) return;
    ctx.fillStyle = s[1];
    ctx.fillRect(-1, 18, 7, h);
    ctx.fillRect(w - 6, 18, 7, h);
    ctx.fillStyle = s[2];
    ctx.fillRect(6, 18, 1, h);
    ctx.fillRect(w - 7, 18, 1, h);
  },
};

// ---------------------------------------------------------------- patterns
/** Each pattern draws one repeat of size s (cm) around the origin, over a large square. */
const PATTERNS: Record<PatternId, (ctx: Ctx, s: number, reach: number) => void> = {
  stripes(ctx, s, r) { for (let x = -r; x < r; x += s) ctx.fillRect(x, -r, s / 2, 2 * r); },
  pinstripe(ctx, s, r) { for (let x = -r; x < r; x += s / 2) ctx.fillRect(x, -r, s * 0.06, 2 * r); },
  diagonal(ctx, s, r) {
    ctx.save(); ctx.rotate(Math.PI / 4);
    for (let x = -r * 1.5; x < r * 1.5; x += s) ctx.fillRect(x, -r * 1.5, s * 0.35, 3 * r);
    ctx.restore();
  },
  checks(ctx, s, r) {
    for (let y = -r, i = 0; y < r; y += s / 2, i++)
      for (let x = -r + (i % 2) * (s / 2); x < r; x += s) ctx.fillRect(x, y, s / 2, s / 2);
  },
  dots(ctx, s, r) {
    ctx.beginPath();
    for (let y = -r, i = 0; y < r; y += s / 2, i++)
      for (let x = -r + (i % 2) * (s / 2); x < r; x += s) { ctx.moveTo(x + s * 0.14, y); ctx.arc(x, y, s * 0.14, 0, Math.PI * 2); }
    ctx.fill();
  },
  zigzag(ctx, s, r) {
    ctx.lineWidth = s * 0.12;
    for (let y = -r; y < r; y += s / 1.6) {
      ctx.beginPath();
      for (let x = -r, up = true; x <= r; x += s / 2, up = !up) ctx.lineTo(x, y + (up ? 0 : s / 3));
      ctx.stroke();
    }
  },
  waves(ctx, s, r) {
    ctx.lineWidth = s * 0.1;
    for (let y = -r; y < r; y += s / 2) {
      ctx.beginPath();
      for (let x = -r; x <= r; x += s / 12) ctx.lineTo(x, y + Math.sin((x / s) * Math.PI * 2) * s * 0.15);
      ctx.stroke();
    }
  },
  diamonds(ctx, s, r) {
    ctx.beginPath();
    for (let y = -r, i = 0; y < r; y += s / 2, i++)
      for (let x = -r + (i % 2) * (s / 2); x < r; x += s) {
        ctx.moveTo(x, y - s / 4); ctx.lineTo(x + s / 4, y); ctx.lineTo(x, y + s / 4); ctx.lineTo(x - s / 4, y); ctx.closePath();
      }
    ctx.fill();
  },
};

export const DEFAULT_PATTERN: PatternFill = { id: "stripes", on: false, scale: 8, angle: 0, opacity: 0.35 };

function drawPattern(ctx: Ctx, w: number, h: number, p: PatternFill, ink: string) {
  ctx.save();
  ctx.globalAlpha = p.opacity;
  ctx.fillStyle = ctx.strokeStyle = ink;
  ctx.translate(w / 2, h / 2);
  ctx.rotate((p.angle * Math.PI) / 180);
  PATTERNS[p.id](ctx, Math.max(1, p.scale), Math.hypot(w, h));
  ctx.restore();
}

function drawFade(ctx: Ctx, w: number, h: number, f: Fade, base: string) {
  let g: CanvasGradient;
  if (f.type === "radial") {
    const cy = h / 2 + (f.position * h) / 2;
    g = ctx.createRadialGradient(w / 2, cy, 0, w / 2, cy, Math.max(w, h) * 0.75);
    g.addColorStop(0, base);
    g.addColorStop(1, f.color);
  } else {
    // A line through the panel's centre at the fade's angle (0 = top to bottom).
    const a = (f.angle * Math.PI) / 180, half = Math.hypot(w, h) / 2;
    const dx = Math.sin(a) * half, dy = Math.cos(a) * half;
    g = ctx.createLinearGradient(w / 2 - dx, h / 2 - dy, w / 2 + dx, h / 2 + dy);
    g.addColorStop(Math.max(0, f.position * 0.5), base);
    g.addColorStop(Math.min(1, 1 + f.position * 0.5), f.color);
  }
  ctx.fillStyle = g;
  ctx.fillRect(-BLEED_CM, -BLEED_CM, w + 2 * BLEED_CM, h + 2 * BLEED_CM);
}

// ---------------------------------------------------------------- colours and fonts
export function baseColor(design: StudioDesign, id: PanelId): string {
  return design.panelColor[id] ?? design.slots[GARMENT.panels[id].role === "trim" ? 1 : 0];
}

const colorOf = (design: StudioDesign, c: StudioElement["color"]) =>
  typeof c === "number" ? design.slots[c] : c ?? design.slots[2];

/** Relative luminance, 0 (black) to 1 (white). */
export function luminance(hex: string): number {
  const n = parseInt(hex.replace("#", "").padEnd(6, "0").slice(0, 6), 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(v => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
}

/** Canvas can't read CSS variables, so swap var(--x) for the value set on the page. */
export function resolveFontFamily(family: string): string {
  if (typeof document === "undefined") return family;
  const css = getComputedStyle(document.documentElement);
  return family.replace(/var\((--[\w-]+)\)/g, (_, name: string) => css.getPropertyValue(name).trim() || "sans-serif");
}

// ---------------------------------------------------------------- elements
const isText = (el: StudioElement) => el.type !== "logo";

function drawElement(ctx: Ctx, el: StudioElement, design: StudioDesign, images: StudioImages) {
  ctx.save();
  ctx.translate(el.x, el.y);
  ctx.rotate(((el.angle ?? 0) * Math.PI) / 180);
  if (isText(el)) {
    const str = el.type === "name" ? (el.text ?? "").toUpperCase() : el.text ?? "";
    if (str) {
      // Height sets the size, width squeezes the text if it is too long for the box.
      ctx.font = `900 ${el.h}px ${resolveFontFamily(el.font ?? "Impact, sans-serif")}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const tw = ctx.measureText(str).width || 1;
      ctx.scale(Math.min(1, el.w / tw), 1);
      ctx.fillStyle = colorOf(design, el.color);
      ctx.fillText(str, 0, el.h * 0.04);
    }
  } else {
    const img = el.src ? images[el.src] : undefined;
    if (img?.complete && img.naturalWidth) {
      // Fit inside the box, keeping the logo's proportions.
      const k = Math.min(el.w / img.naturalWidth, el.h / img.naturalHeight);
      const w = img.naturalWidth * k, h = img.naturalHeight * k;
      ctx.drawImage(img, -w / 2, -h / 2, w, h);
    }
  }
  ctx.restore();
}

// ---------------------------------------------------------------- panels
/** Draws one panel into a context already scaled to cm, with the panel's top-left at the origin. */
export function drawPanel(ctx: Ctx, id: PanelId, design: StudioDesign, images: StudioImages) {
  const p = GARMENT.panels[id];
  const base = baseColor(design, id);
  ctx.save();
  ctx.beginPath();
  ctx.rect(-BLEED_CM, -BLEED_CM, p.w + 2 * BLEED_CM, p.h + 2 * BLEED_CM);
  ctx.clip();
  ctx.fillStyle = base;
  ctx.fillRect(-BLEED_CM, -BLEED_CM, p.w + 2 * BLEED_CM, p.h + 2 * BLEED_CM);
  const fade = design.fade[id];
  if (fade?.on) drawFade(ctx, p.w, p.h, fade, base);
  const pattern = design.pattern[id];
  if (pattern?.on) drawPattern(ctx, p.w, p.h, pattern, pattern.color ?? design.slots[1]);
  if (!p.noArt) LOOKS[design.look](ctx, p.w, p.h, p.role, design.slots);
  for (const el of design.elements) if (el.panel === id) drawElement(ctx, el, design, images);
  ctx.restore();
}

/** The whole UV atlas that the 3D model wears. */
export function paintAtlas(canvas: HTMLCanvasElement, design: StudioDesign, images: StudioImages) {
  const S = canvas.width;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const ppc = S / CM_PER_UV;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = design.slots[0]; // the gaps between islands, so stray UVs stay on-colour
  ctx.fillRect(0, 0, S, S);
  for (const id of PANEL_IDS) {
    const p = GARMENT.panels[id];
    ctx.save();
    ctx.translate(p.uv[0] * S, p.uv[1] * S);
    ctx.scale(ppc, ppc);
    drawPanel(ctx, id, design, images);
    ctx.restore();
  }
}

/** One panel drawn onto a canvas of any size, for print files and option thumbnails. */
export function renderPanel(canvas: HTMLCanvasElement, id: PanelId, design: StudioDesign, images: StudioImages = {}) {
  const p = GARMENT.panels[id];
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const k = Math.min(canvas.width / p.w, canvas.height / p.h);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate((canvas.width - p.w * k) / 2, (canvas.height - p.h * k) / 2);
  ctx.scale(k, k);
  drawPanel(ctx, id, design, images);
}

/** One panel as a print file at the given dpi. */
export function exportPanel(id: PanelId, design: StudioDesign, images: StudioImages, dpi = 300): HTMLCanvasElement {
  const p = GARMENT.panels[id], ppc = dpi / 2.54;
  const c = document.createElement("canvas");
  c.width = Math.ceil(p.w * ppc);
  c.height = Math.ceil(p.h * ppc);
  renderPanel(c, id, design, images);
  return c;
}
