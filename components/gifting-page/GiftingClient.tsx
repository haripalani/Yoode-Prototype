"use client";

import { GiftingPage } from "./GiftingPage";
import { GIFTING_PAGES } from "./content";

export function GiftingClient({ slug }: { slug: string }) {
  return <GiftingPage c={GIFTING_PAGES[slug]} />;
}
