// Garment definition for the 3D kit studio.
//
// The model is the placeholder shirt (public/studio/shirt.glb, from public/shirt_baked.glb): one mesh whose UV map holds five
// clean islands, one per pattern piece. A real CLO3D garment will ship the same facts in its
// <garment>.panels.json, so only the numbers below are specific to this model.
//
// uv:   the panel's island in UV space [u0, v0, u1, v1]. v grows downwards on the body, and
//       u grows towards the viewer's right when the panel is seen from outside.
// view: camera azimuth in radians that faces the panel (0 = front).
// role: what the look artwork paints on it. Trims take a colour only.

export type PanelId = "front" | "back" | "right_sleeve" | "left_sleeve" | "collar";
export type PanelRole = "front" | "back" | "sleeve" | "trim";

export interface Panel {
  label: string;
  uv: [number, number, number, number];
  view: number;
  role: PanelRole;
  noArt?: boolean;
  /** Size in cm, from the UV island. */
  w: number;
  h: number;
}

// UV units to centimetres. Chosen so the front is 72 cm long, a normal adult M jersey.
// The islands are in true proportion to each other, so one factor fits every panel.
export const CM_PER_UV = 103;

const panel = (p: Omit<Panel, "w" | "h">): Panel => ({
  ...p,
  w: (p.uv[2] - p.uv[0]) * CM_PER_UV,
  h: (p.uv[3] - p.uv[1]) * CM_PER_UV,
});

export const GARMENT = {
  id: "crew-placeholder",
  name: "Crew neck jersey (placeholder model)",
  model: "/studio/shirt.glb", // slimmed copy of public/shirt_baked.glb (scripts/slim-studio-model.mjs)
  atlasPx: 2048,
  panels: {
    front: panel({ label: "Front", uv: [0.015, 0.018, 0.5, 0.719], view: 0, role: "front" }),
    back: panel({ label: "Back", uv: [0.505, 0.021, 0.989, 0.719], view: Math.PI, role: "back" }),
    right_sleeve: panel({ label: "Right sleeve", uv: [0.015, 0.723, 0.383, 0.937], view: -Math.PI / 2, role: "sleeve" }),
    left_sleeve: panel({ label: "Left sleeve", uv: [0.388, 0.726, 0.754, 0.937], view: Math.PI / 2, role: "sleeve" }),
    collar: panel({ label: "Collar", uv: [0.023, 0.944, 0.481, 0.981], view: 0, role: "trim", noArt: true }),
  } satisfies Record<PanelId, Panel>,
};

export const PANEL_IDS = Object.keys(GARMENT.panels) as PanelId[];

/** A UV point on the model as a panel and centimetres on it, or null between panels. */
export function uvToPanel(u: number, v: number): { panel: PanelId; x: number; y: number } | null {
  for (const id of PANEL_IDS) {
    const [u0, v0, u1, v1] = GARMENT.panels[id].uv;
    if (u >= u0 && u <= u1 && v >= v0 && v <= v1) {
      return { panel: id, x: (u - u0) * CM_PER_UV, y: (v - v0) * CM_PER_UV };
    }
  }
  return null;
}
