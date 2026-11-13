"use client";

import { MethodPage } from "./MethodPage";
import { METHOD_PAGES } from "./content";

/** Picks the method's content on the client (it holds icon components, which can't cross from a server page). */
export function MethodClient({ slug }: { slug: string }) {
  return <MethodPage c={METHOD_PAGES[slug]} />;
}
