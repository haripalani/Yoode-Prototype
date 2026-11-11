// What the kit studio sells and offers: garments, fabrics, sizes, prices, colours, designs,
// patterns, fonts, and the standard print positions on the garment.
//
// Every garment wears the placeholder 3D model for now (lib/studio/garment.ts). When the real
// CLO3D models arrive, each garment gets its own `model` and panel map.
// Prices are placeholders until the owner confirms them.
import { GARMENT, type PanelId } from "./garment";
import type { LookId, PatternId } from "./painter";

// ---------------------------------------------------------------- garments
export type Audience = "Men" | "Women" | "Kids";
export type Sleeve = "half" | "full" | "none";

export interface Garment {
  id: string;
  name: string;
  /** Two letters for the garment wheel. */
  code: string;
  neck: string;
  /** Sleeve lengths it comes in. The first is the default. */
  sleeves: Sleeve[];
  /** Price per piece at each quantity, half sleeve. Full sleeve adds FULL_SLEEVE_ADD. */
  tiers: Array<[minQty: number, price: number]>;
}

const JERSEY: Garment["tiers"] = [[1, 549], [10, 499], [25, 459], [50, 429], [100, 399]];
const POLO: Garment["tiers"] = [[1, 649], [10, 589], [25, 549], [50, 509], [100, 469]];

export const GARMENTS: Garment[] = [
  { id: "round-neck", name: "Round neck jersey", code: "RN", neck: "Round neck", sleeves: ["half", "full"], tiers: JERSEY },
  { id: "v-neck", name: "V-neck jersey", code: "VN", neck: "V-neck", sleeves: ["half", "full"], tiers: JERSEY },
  { id: "mandarin", name: "Mandarin collar jersey", code: "MC", neck: "Mandarin collar", sleeves: ["half", "full"], tiers: POLO },
  { id: "raglan-round", name: "Raglan round neck", code: "RR", neck: "Round neck", sleeves: ["half", "full"], tiers: JERSEY },
  { id: "raglan-v", name: "Raglan V-neck", code: "RV", neck: "V-neck", sleeves: ["half", "full"], tiers: JERSEY },
  { id: "polo", name: "Polo", code: "PO", neck: "Polo collar", sleeves: ["half", "full"], tiers: POLO },
  { id: "raglan-polo", name: "Raglan polo", code: "RP", neck: "Polo collar", sleeves: ["half", "full"], tiers: POLO },
  { id: "zip-polo", name: "Zip polo", code: "ZP", neck: "Quarter zip", sleeves: ["half", "full"], tiers: POLO },
  { id: "sleeveless", name: "Sleeveless jersey", code: "SL", neck: "Round neck", sleeves: ["none"], tiers: JERSEY },
  { id: "cycling", name: "Cycling jersey, full zip", code: "CY", neck: "Full zip", sleeves: ["half"], tiers: POLO },
];

export const FULL_SLEEVE_ADD = 50;
export const SLEEVE_LABEL: Record<Sleeve, string> = { half: "Half sleeve", full: "Full sleeve", none: "Sleeveless" };

export const garmentById = (id: string) => GARMENTS.find(g => g.id === id) ?? GARMENTS[0];

// ---------------------------------------------------------------- fabrics
export interface FabricGroup {
  name: string;
  gsm: string;
  /** Added to the price per piece. */
  add: number;
  items: string[];
}

export const FABRIC_GROUPS: FabricGroup[] = [
  { name: "Essential", gsm: "160–180 GSM", add: 0, items: ["Micro-Poly", "Dot Knit", "Interlock Dry-Fit"] },
  { name: "Textured", gsm: "180 GSM", add: 60, items: ["Honeycomb Mesh", "Box Knit", "Emboss Knit"] },
  { name: "Premium", gsm: "140–220 GSM", add: 120, items: ["Pique Cotton 220", "Airlite 140", "Long Mesh 160"] },
];

/** Fabric choices are stored as "Group · Fabric". */
export const fabricKey = (g: FabricGroup, item: string) => `${g.name} · ${item}`;
export const DEFAULT_FABRIC = fabricKey(FABRIC_GROUPS[0], FABRIC_GROUPS[0].items[0]);
export const fabricGroupOf = (key: string) => FABRIC_GROUPS.find(g => key.startsWith(`${g.name} · `)) ?? FABRIC_GROUPS[0];

// ---------------------------------------------------------------- sizes
export const SIZES: Record<Audience, string[]> = {
  Men: ["S", "M", "L", "XL", "2XL", "3XL"],
  Women: ["XS", "S", "M", "L", "XL", "2XL"],
  Kids: ["24", "26", "28", "30", "32", "34"],
};
export const AUDIENCES = Object.keys(SIZES) as Audience[];
export const ALL_SIZES = AUDIENCES.flatMap(a => SIZES[a].map(s => `${a} ${s}`));

// ---------------------------------------------------------------- price
export function unitPrice(garment: Garment, sleeve: Sleeve, fabric: string, qty: number) {
  const tier = [...garment.tiers].reverse().find(([min]) => qty >= min) ?? garment.tiers[0];
  return tier[1] + (sleeve === "full" ? FULL_SLEEVE_ADD : 0) + fabricGroupOf(fabric).add;
}
/** The next quantity that lowers the price, and the price there. */
export function nextTier(garment: Garment, qty: number) {
  return garment.tiers.find(([min]) => min > qty) ?? null;
}

// ---------------------------------------------------------------- colours
/** Colours the dye house can match. */
export const PALETTE: Array<[name: string, hex: string]> = [
  ["White", "#ffffff"], ["Ivory", "#f2efe6"], ["Silver", "#c3c6cb"], ["Steel", "#868d96"], ["Charcoal", "#3a3e44"], ["Black", "#111111"],
  ["Lemon", "#fbe64d"], ["Gold", "#f5a70b"], ["Orange", "#f2711c"], ["Coral", "#f0645a"], ["Red", "#d32228"], ["Maroon", "#7a1426"],
  ["Pink", "#ec6aa5"], ["Magenta", "#b5207a"], ["Purple", "#5b2a86"], ["Lavender", "#a99be0"], ["Navy", "#1b2a4a"], ["Royal", "#1f4fb8"],
  ["Sky", "#5fb2ea"], ["Cyan", "#08b3cc"], ["Teal", "#0f766e"], ["Bottle", "#0b4d33"], ["Green", "#1f9d4c"], ["Lime", "#9bd43a"],
  ["Olive", "#5f6b2f"], ["Khaki", "#b7a57a"], ["Brown", "#6b4429"], ["Sand", "#e2cfa8"],
];
export const colorName = (hex: string) => PALETTE.find(([, h]) => h.toLowerCase() === hex.toLowerCase())?.[0] ?? hex.toUpperCase();

export const COMBOS: Array<{ name: string; slots: [string, string, string] }> = [
  { name: "Navy & Gold", slots: ["#1b2a4a", "#f5a70b", "#ffffff"] },
  { name: "Black & Red", slots: ["#111111", "#d32228", "#ffffff"] },
  { name: "Royal & White", slots: ["#1f4fb8", "#ffffff", "#111111"] },
  { name: "Bottle & Gold", slots: ["#0b4d33", "#f5a70b", "#ffffff"] },
  { name: "White & Cyan", slots: ["#ffffff", "#08b3cc", "#1b2a4a"] },
  { name: "Maroon & Charcoal", slots: ["#7a1426", "#3a3e44", "#ffffff"] },
  { name: "Purple & Lemon", slots: ["#5b2a86", "#fbe64d", "#ffffff"] },
  { name: "Orange & Black", slots: ["#f2711c", "#111111", "#ffffff"] },
];

// ---------------------------------------------------------------- designs
/** Each design and how many of the kit colours it uses. */
export const LOOKS: Array<{ id: LookId; name: string; colors: 1 | 2 | 3 }> = [
  { id: "plain", name: "Plain", colors: 1 },
  { id: "cuffs", name: "Cuffs", colors: 2 },
  { id: "chevron", name: "Chevron", colors: 3 },
  { id: "hoops", name: "Hoops", colors: 2 },
  { id: "sash", name: "Sash", colors: 3 },
  { id: "halves", name: "Halves", colors: 2 },
  { id: "yoke", name: "Yoke", colors: 3 },
  { id: "stripes", name: "Stripes", colors: 2 },
  { id: "sides", name: "Side panels", colors: 3 },
];
export const lookById = (id: LookId) => LOOKS.find(l => l.id === id) ?? LOOKS[0];

/** Finished designs with colours, for a head start. */
export const READY_KITS: Array<{ name: string; look: LookId; slots: [string, string, string] }> = [
  { name: "Midnight Chevron", look: "chevron", slots: ["#1b2a4a", "#f5a70b", "#ffffff"] },
  { name: "Crimson Sash", look: "sash", slots: ["#ffffff", "#d32228", "#111111"] },
  { name: "Harbour Hoops", look: "hoops", slots: ["#1f4fb8", "#ffffff", "#111111"] },
  { name: "Forest Yoke", look: "yoke", slots: ["#0b4d33", "#f2efe6", "#f5a70b"] },
  { name: "Ember Halves", look: "halves", slots: ["#111111", "#f2711c", "#ffffff"] },
  { name: "Ice Stripes", look: "stripes", slots: ["#ffffff", "#5fb2ea", "#1b2a4a"] },
];

export const PATTERNS: Array<{ id: PatternId; name: string }> = [
  { id: "stripes", name: "Stripes" }, { id: "pinstripe", name: "Pinstripe" }, { id: "diagonal", name: "Diagonal" },
  { id: "checks", name: "Checks" }, { id: "dots", name: "Dots" }, { id: "zigzag", name: "Zigzag" },
  { id: "waves", name: "Waves" }, { id: "diamonds", name: "Diamonds" },
];

/** The panels that take a pattern or a fade. The collar takes a colour only. */
export const AREAS: Array<{ id: PanelId; label: string }> = [
  { id: "front", label: "Front" }, { id: "back", label: "Back" },
  { id: "left_sleeve", label: "Left sleeve" }, { id: "right_sleeve", label: "Right sleeve" },
];
export const COLOR_AREAS: Array<{ id: PanelId; label: string }> = [...AREAS, { id: "collar", label: "Collar" }];

// ---------------------------------------------------------------- lettering
export const FONTS = [
  { id: "athletic", name: "Athletic Block", family: "Impact, sans-serif" },
  { id: "modern", name: "Modern Sans", family: "var(--font-sora), sans-serif" },
  { id: "condensed", name: "Tall Condensed", family: "var(--font-anton), Impact, sans-serif" },
  { id: "classic", name: "Classic Serif", family: "Georgia, serif" },
  { id: "mono", name: "Technical Mono", family: "Courier New, monospace" },
];
export const fontById = (id: string) => FONTS.find(f => f.id === id) ?? FONTS[0];

// ---------------------------------------------------------------- logo methods
/** How each logo is applied. Printing is part of the sublimated kit; the rest add to the price per piece. */
export const LOGO_METHODS = [
  { id: "print", name: "Sublimation print", desc: "Printed into the fabric, never peels", add: 0 },
  { id: "embroidery", name: "Embroidery", desc: "High-density stitch, sealed on the reverse", add: 50 },
  { id: "dtf", name: "DTF print", desc: "Raised matte film, vivid and stretchy", add: 35 },
  { id: "reflective", name: "Reflective", desc: "Shines back in headlights at night", add: 40 },
  { id: "patch", name: "3D silicone patch", desc: "Moulded rubber badge you can feel", add: 70 },
];
export const logoMethodById = (id: string) => LOGO_METHODS.find(m => m.id === id) ?? LOGO_METHODS[0];

// ---------------------------------------------------------------- print positions
export type SpotKind = "logo" | "number" | "name" | "text";

export interface Spot {
  id: string;
  label: string;
  panel: PanelId;
  /** Centre and box size in cm on the panel. */
  x: number;
  y: number;
  w: number;
  h: number;
}

const P = GARMENT.panels;
export const SPOTS: Record<SpotKind, Spot[]> = {
  logo: [
    { id: "left-chest", label: "Left chest", panel: "front", x: 34, y: 17, w: 9, h: 9 },
    { id: "right-chest", label: "Right chest", panel: "front", x: 16, y: 17, w: 9, h: 9 },
    { id: "centre-chest", label: "Centre chest", panel: "front", x: P.front.w / 2, y: 24, w: 16, h: 11 },
    { id: "back-neck", label: "Back neck", panel: "back", x: P.back.w / 2, y: 6, w: 7, h: 4.5 },
    { id: "left-sleeve", label: "Left sleeve", panel: "left_sleeve", x: P.left_sleeve.w / 2, y: P.left_sleeve.h / 2 - 2, w: 7, h: 7 },
    { id: "right-sleeve", label: "Right sleeve", panel: "right_sleeve", x: P.right_sleeve.w / 2, y: P.right_sleeve.h / 2 - 2, w: 7, h: 7 },
  ],
  number: [
    { id: "back", label: "Back", panel: "back", x: P.back.w / 2, y: 33, w: 26, h: 22 },
    { id: "front", label: "Front", panel: "front", x: P.front.w / 2, y: 40, w: 14, h: 10 },
    { id: "left-sleeve", label: "Left sleeve", panel: "left_sleeve", x: P.left_sleeve.w / 2, y: P.left_sleeve.h / 2 - 2, w: 8, h: 7 },
  ],
  name: [
    { id: "back-top", label: "Above number", panel: "back", x: P.back.w / 2, y: 13, w: 26, h: 4.5 },
    { id: "back-bottom", label: "Below number", panel: "back", x: P.back.w / 2, y: 50, w: 26, h: 4.5 },
  ],
  text: [
    { id: "front-chest", label: "Across chest", panel: "front", x: P.front.w / 2, y: 30, w: 32, h: 6 },
    { id: "back-neck", label: "Back neck", panel: "back", x: P.back.w / 2, y: 5.5, w: 18, h: 2.6 },
    { id: "back-hem", label: "Back hem", panel: "back", x: P.back.w / 2, y: 58, w: 30, h: 4 },
    { id: "front-hem", label: "Front hem", panel: "front", x: P.front.w / 2, y: 62, w: 24, h: 3 },
  ],
};
export const spotById = (kind: SpotKind, id: string) => SPOTS[kind].find(s => s.id === id) ?? SPOTS[kind][0];
