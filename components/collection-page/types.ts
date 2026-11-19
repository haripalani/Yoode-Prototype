import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

/*
  Everything a collection landing page (custom T-shirts, polos, hoodies, Onam, Christmas …) says and shows.
  CollectionPage.tsx renders it; each page has one content file in ./content. Titles are ReactNode so a phrase
  can be wrapped in <em> (rendered coral). Every section after the shop grid is optional.
*/

/** A photo: a path in /public or a full https URL (the live Yoode CDN). */
export type Photo = { src: string; alt: string; pos?: string };

export type Product = {
  name: string;
  /** "Men" / "Women": drives the shop filter on festive pages */
  gender?: "Men" | "Women";
  /** e.g. "₹549" or "From ₹430" */
  price: string;
  /** compare-at price, struck through */
  was?: string;
  badges?: string[];
  /** number of colours, shown as "8+ colours" */
  colours?: number;
  rating?: string;
  href: string;
  photo: Photo;
  /** shown on hover */
  hover?: Photo;
};

export type Pair = [title: string, text: string];

export type CollectionPageContent = {
  /** short name used in buttons and the form, e.g. "polo" */
  short: string;
  /** big outline word behind the hero, e.g. "POLOS" */
  ghost: string;
  /** pre-filled WhatsApp message */
  whatsapp: string;

  hero: {
    eyebrow: string;
    title: ReactNode;
    text: string;
    primary: string;
    rating?: { score: string; label: string };
    /** three photos for the hero collage: big, top-right, bottom-right */
    collage: [Photo, Photo, Photo];
    /** small floating chip on the collage */
    chip: string;
  };

  trust: { icon: LucideIcon; label: string }[];

  shop: {
    eyebrow: string;
    title: ReactNode;
    text: string;
    /** show the Men / Women filter */
    genderFilter?: boolean;
    /** how many cards before "Show all" */
    initial?: number;
    items: Product[];
    viewAll?: { label: string; href: string };
    note?: string;
  };

  steps?: { eyebrow: string; title: ReactNode; text: string; items: { title: string; text: string; photo: Photo }[] };

  why?: { eyebrow: string; title: ReactNode; text: string; items: { icon: LucideIcon; title: string; text: string }[] };

  /** printing / decoration methods; `href` points at the method's own page */
  methods?: { eyebrow: string; title: ReactNode; text: string; items: { title: string; text: string; href: string; photo: Photo; tag: string }[] };

  /** logo placements, with the zone outlined on the photo: [left, top, width, height] in % */
  placements?: { eyebrow: string; title: ReactNode; text: string; items: { title: string; text: string; photo: Photo; area: [number, number, number, number] }[] };

  occasions?: { eyebrow: string; title: ReactNode; text: string; items: { title: string; text: string; photo: Photo }[] };

  /** editorial long-read (festive collections): numbered chapters beside a sticky photo */
  story?: { eyebrow: string; title: ReactNode; photo: Photo; chapters: { title: string; body: ReactNode }[] };

  /** fit & sizing facts shown as a spec strip */
  specs?: { eyebrow: string; title: ReactNode; items: Pair[] };

  testimonials?: { name: string; role: string; quote: string }[];

  faqs?: { text: string; items: Pair[] };

  guides?: { title: ReactNode; href: string; items: { title: string; href: string }[] };

  more: { title: ReactNode; items: { title: string; href: string; photo: Photo }[] };

  quote: {
    title: ReactNode;
    text: string;
    photo: Photo;
    /** "What are you ordering?" options */
    options: string[];
  };

  /** SEO copy, collapsed behind "Read more" at the foot of the page */
  seo?: { title: string; body: ReactNode }[];
};
