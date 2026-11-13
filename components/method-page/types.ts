import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

/*
  Everything a method page (DTG, DTF, Embroidery, …) says and shows. MethodPage.tsx renders it; each method has one
  content file in ./content. Titles are ReactNode so a phrase can be wrapped in <em> (rendered coral).
*/

/** A real photo from /public. `pos` is the CSS object-position; `zoom` (>1) crops in around `pos`. */
export type Photo = { src: string; alt: string; pos?: string; zoom?: number };

/** The live 3D machine shown in "What is …" */
export type MachineKind = "dtg" | "dtf" | "embroidery" | "coloreel" | "screen" | "uv" | "engraving";

export type Pair = [title: string, text: string];

export type MethodPageContent = {
  /** spread id on the Services page (also the hero), e.g. "m-dtg" */
  spreadId: string;
  /** short label used in tags and buttons, e.g. "DTG" */
  short: string;
  /** e.g. "DTG printing", "Embroidery" */
  name: string;
  /** small grey line on product cards, e.g. "Direct-to-garment" */
  kicker: string;
  machine: MachineKind;
  /** hero tone: a light hero gets the dark header */
  lightHero: boolean;

  trust: { icon: LucideIcon; label: string }[];

  explain: { eyebrow: string; title: ReactNode; text: string; steps: Pair[] };

  products: {
    eyebrow: string; title: ReactNode; text: string; note: string;
    items: { name: string; text: string; tag: string; min: string; photo: Photo }[];
  };

  why: { eyebrow: string; title: ReactNode; text: string; items: { icon: LucideIcon; title: string; text: string }[] };

  result: {
    eyebrow: string; title: ReactNode; text: string;
    before: { label: string; photo: Photo };
    after: { label: string; photo: Photo };
  };

  video: { eyebrow: string; title: ReactNode; text: string; steps: Pair[]; poster: Photo; caption: string };

  placements: {
    eyebrow: string; title: ReactNode; text: string; note: string;
    /** `area` outlines the decoration zone on the photo: [left, top, width, height] in % of the 4:5 card */
    items: { name: string; text: string; photo: Photo; area: [number, number, number, number] }[];
  };

  band: { eyebrow: string; title: ReactNode; text: string; cta: string };

  tips: {
    eyebrow: string; title: ReactNode; text: string; items: string[];
    aside: { eyebrow: string; title: ReactNode; text: string; pair: [{ label: string; photo: Photo }, { label: string; photo: Photo }]; note: string };
  };

  steps: { title: ReactNode; items: Pair[] };

  compare: { title: ReactNode; text: string; cols: [string, string, string]; rows: [string, string, string, string][]; note: string };

  useCases: { title: ReactNode; text: string; items: { icon: LucideIcon; title: string; text: string }[] };

  bulk: { title: ReactNode; text: string };

  faqs: { text: string; items: Pair[] };

  learn: { eyebrow: string; title: ReactNode; text: string; articles: { title: string; body: ReactNode }[] };

  quote: {
    title: ReactNode; text: string; photo: Photo;
    /** product dropdown (defaults come from products.items) and decoration placement dropdown */
    placementLabel: string; placementOptions: string[];
  };
};
