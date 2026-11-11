// The "+" pointers pinned to the 3D garment. Each one sits on a panel (in cm, like the artwork)
// and opens the studio step that edits that part of the kit.
import { CM_PER_UV, GARMENT, type PanelId } from "./garment";

/** The studio's six steps, in order. */
export type StudioStep = "shirt" | "look" | "colours" | "logos" | "names" | "text";

export interface Hotspot {
  id: string;
  label: string;
  panel: PanelId;
  /** Point on the panel in cm. */
  x: number;
  y: number;
  target: StudioStep;
  /** For logo pointers, the print position they choose. */
  spot?: string;
}

const P = GARMENT.panels;

export const HOTSPOTS: Hotspot[] = [
  { id: "collar", label: "Neck & sleeve", panel: "front", x: P.front.w / 2, y: 2.5, target: "shirt" },
  { id: "left-chest", label: "Left chest logo", panel: "front", x: 34, y: 17, target: "logos", spot: "left-chest" },
  { id: "right-chest", label: "Right chest logo", panel: "front", x: 16, y: 17, target: "logos", spot: "right-chest" },
  { id: "body", label: "Kit colours", panel: "front", x: P.front.w / 2, y: 40, target: "colours" },
  { id: "hem", label: "Design", panel: "front", x: 12, y: P.front.h - 7, target: "look" },
  { id: "sleeve", label: "Sleeve logo", panel: "left_sleeve", x: P.left_sleeve.w / 2, y: P.left_sleeve.h / 2 - 2, target: "logos", spot: "left-sleeve" },
  { id: "right-sleeve", label: "Sleeve logo", panel: "right_sleeve", x: P.right_sleeve.w / 2, y: P.right_sleeve.h / 2 - 2, target: "logos", spot: "right-sleeve" },
  { id: "back-logo", label: "Back neck logo", panel: "back", x: P.back.w / 2, y: 6, target: "logos", spot: "back-neck" },
  { id: "player", label: "Names & numbers", panel: "back", x: P.back.w / 2, y: 18.5, target: "names" }, // between the name and the number
];

/** The pointer that matches what is being edited, so it can be shown as selected. */
export function activeHotspot(step: StudioStep, spot: string): string | undefined {
  return HOTSPOTS.find(h => h.target === step && (!h.spot || h.spot === spot))?.id;
}

/** UV coordinates of a hotspot on the garment's texture atlas. */
export function hotspotUV(h: Hotspot): [number, number] {
  const [u0, v0] = P[h.panel].uv;
  return [u0 + h.x / CM_PER_UV, v0 + h.y / CM_PER_UV];
}
