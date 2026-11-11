// Everything a customer chooses in the kit studio, and how it becomes a design the 3D painter
// can draw. Names and numbers come from the team list: the 3D kit shows one player at a time.
import type { PanelId } from "./garment";
import { DEFAULT_FABRIC, fontById, spotById, type Audience, type Sleeve } from "./catalog";
import { luminance, type Fade, type LookId, type PatternFill, type StudioDesign, type StudioElement } from "./painter";

export interface PlacedLogo {
  id: string;
  url: string;
  name: string;
  spot: string;
  /** Percent of the spot's size. */
  size: number;
  /** How it is applied: see LOGO_METHODS. */
  method: string;
}
export interface PlacedMark { id: string; spot: string }
export interface PlacedText { id: string; text: string; spot: string }
export interface TeamRow { id: string; name: string; number: string; size: string }

export interface KitConfig {
  garmentId: string;
  sleeve: Sleeve;
  audience: Audience;
  fabric: string;
  look: LookId;
  slots: [string, string, string];
  panelColor: Partial<Record<PanelId, string>>;
  pattern: Partial<Record<PanelId, PatternFill>>;
  fade: Partial<Record<PanelId, Fade>>;
  logos: PlacedLogo[];
  names: PlacedMark[];
  numbers: PlacedMark[];
  texts: PlacedText[];
  font: string;
  team: TeamRow[];
}

export const newId = () => Math.random().toString(36).slice(2, 9);

export const initialConfig = (garmentId: string): KitConfig => ({
  garmentId,
  sleeve: "half",
  audience: "Men",
  fabric: DEFAULT_FABRIC,
  look: "chevron",
  slots: ["#1b2a4a", "#f5a70b", "#ffffff"],
  panelColor: {},
  pattern: {},
  fade: {},
  logos: [],
  names: [{ id: "name-1", spot: "back-top" }],
  numbers: [{ id: "number-1", spot: "back" }],
  texts: [],
  font: "athletic",
  team: [{ id: "row-1", name: "Arjun", number: "12", size: "Men M" }],
});

/** Stand-ins shown when the team list has no name or number for the player on screen. */
export const SAMPLE_NAME = "PLAYER";
export const SAMPLE_NUMBER = "99";

export function toDesign(c: KitConfig, player?: TeamRow): StudioDesign {
  // Names, numbers and text use the detail colour, unless it would vanish on the body colour.
  const detail = Math.abs(luminance(c.slots[2]) - luminance(c.slots[0])) < 0.25
    ? (luminance(c.slots[0]) > 0.45 ? "#111111" : "#ffffff")
    : c.slots[2];
  const font = fontById(c.font).family;
  const box = (kind: Parameters<typeof spotById>[0], spot: string) => {
    const s = spotById(kind, spot);
    return { panel: s.panel, x: s.x, y: s.y, w: s.w, h: s.h };
  };
  const elements: StudioElement[] = [
    ...c.logos.map((l): StudioElement => {
      const b = box("logo", l.spot), k = l.size / 100;
      return { id: l.id, type: "logo", ...b, w: b.w * k, h: b.h * k, src: l.id };
    }),
    ...c.names.map((n): StudioElement => ({ id: n.id, type: "name", ...box("name", n.spot), text: player?.name || SAMPLE_NAME, font, color: detail })),
    ...c.numbers.map((n): StudioElement => ({ id: n.id, type: "number", ...box("number", n.spot), text: player?.number || SAMPLE_NUMBER, font, color: detail })),
    ...c.texts.map((t): StudioElement => ({ id: t.id, type: "text", ...box("text", t.spot), text: t.text, font, color: detail })),
  ];
  return { look: c.look, slots: c.slots, panelColor: c.panelColor, pattern: c.pattern, fade: c.fade, elements };
}

/** The uploaded logos, by element id, for the painter's image map. */
export const logoImages = (c: KitConfig) => Object.fromEntries(c.logos.map(l => [l.id, l.url]));
