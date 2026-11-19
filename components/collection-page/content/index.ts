import type { CollectionPageContent } from "../types";
import { tshirts } from "./tshirts";
import { polos } from "./polos";
import { hoodies } from "./hoodies";
import { onam } from "./onam";
import { christmas } from "./christmas";

/** Every collection landing page, by its URL slug (the same handles as the live Shopify collections). */
export const COLLECTION_PAGES: Record<string, CollectionPageContent> = {
  "custom-t-shirt-printing": tshirts,
  "custom-polos": polos,
  "custom-hoodies": hoodies,
  "onam-shirt": onam,
  "christmas-shirts-for-men-and-women": christmas,
};
