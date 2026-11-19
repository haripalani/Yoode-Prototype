"use client";

import { CollectionPage } from "./CollectionPage";
import { COLLECTION_PAGES } from "./content";

/** Picks the page's content on the client (it holds icon components, which can't cross from a server page). */
export function CollectionClient({ slug }: { slug: string }) {
  return <CollectionPage c={COLLECTION_PAGES[slug]} />;
}
