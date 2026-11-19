import type { ReactNode } from "react";

/*
  Everything a corporate-gifting city page (Bangalore, Chennai, Trivandrum) says. GiftingPage.tsx renders it; each
  city has one content file in ./content. Sections every city shares (why Yoode, catalogue, recent deliveries,
  process) live in GiftingPage.tsx itself.
*/

export type Pair = [title: string, text: string];

export type GiftingCityContent = {
  city: string;
  /** big outline word behind the hero */
  ghost: string;

  hero: { eyebrow: string; title: ReactNode; text: string[] };

  intro: { eyebrow: string; title: ReactNode; text: string[]; tagline: string; after: string[] };

  benefits: { eyebrow: string; title: ReactNode; text: string; note: string; items: Pair[] };

  /** what the gifts are for: employees, clients, festivals, bulk … */
  occasions: Pair[];

  faqs: Pair[];

  seo: { title: string; body: ReactNode }[];
};
