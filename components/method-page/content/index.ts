import type { MethodPageContent } from "../types";
import { dtg } from "./dtg";
import { dtf } from "./dtf";
import { embroidery } from "./embroidery";
import { coloreel } from "./coloreel";
import { screen } from "./screen";
import { uv } from "./uv";
import { engraving } from "./engraving";

/** Every method page, by its URL slug. */
export const METHOD_PAGES: Record<string, MethodPageContent> = {
  "dtg-printing": dtg,
  "dtf-printing": dtf,
  embroidery,
  "coloreel-embroidery": coloreel,
  "screen-printing": screen,
  "uv-printing": uv,
  "laser-engraving": engraving,
};
