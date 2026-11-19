import { Truck, PackageOpen, PenTool, BadgeIndianRupee, Sparkles, MapPin, ShieldCheck, Shirt } from "lucide-react";
import type { CollectionPageContent, Photo } from "../types";

export const CDN = "https://yoode.com/cdn/shop/files";
export const SHOP = "https://yoode.com";

/** The "More than …" tiles every page links to; each page drops its own. */
const TILES: Record<string, { title: string; href: string; photo: Photo }> = {
  tshirts: { title: "Custom T-Shirts", href: "/custom-t-shirt-printing", photo: { src: "/categories/custom_tshirts.webp", alt: "Custom printed T-shirts" } },
  polos: { title: "Custom Polos", href: "/custom-polos", photo: { src: "/categories/premium_polos.webp", alt: "Custom embroidered polo shirts" } },
  hoodies: { title: "Custom Hoodies", href: "/custom-hoodies", photo: { src: "/categories/hoodies_sweatshirts.webp", alt: "Custom hoodies and sweatshirts" } },
  jerseys: { title: "Custom Jerseys", href: "/custom-sports-jerseys", photo: { src: "/categories/custom_sports.webp", alt: "Custom jerseys for teams" } },
  gifting: { title: "Corporate Gifts", href: "/corporate-gifting-company-in-bangalore", photo: { src: "/categories/corporate_gifting.webp", alt: "Corporate gifting products by Yoode" } },
  festive: { title: "Festive Shirts", href: "/onam-shirt", photo: { src: "/categories/trenz_festive.webp", alt: "Festive printed shirts" } },
};

export function moreTiles(...keys: (keyof typeof TILES)[]): CollectionPageContent["more"]["items"] {
  return keys.map((k) => TILES[k]);
}

/** Trust strip for the custom-print pages. */
export const CUSTOM_TRUST: CollectionPageContent["trust"] = [
  { icon: PackageOpen, label: "No minimum order" },
  { icon: PenTool, label: "Free design mockup" },
  { icon: Truck, label: "Free shipping in India" },
  { icon: BadgeIndianRupee, label: "Bulk discounts" },
];

/** Trust strip for the festive (ready-to-wear) collections. */
export const FESTIVE_TRUST: CollectionPageContent["trust"] = [
  { icon: Sparkles, label: "Designed in Trivandrum" },
  { icon: Shirt, label: "Sizes 22 to 52" },
  { icon: MapPin, label: "4 Experience Centres" },
  { icon: ShieldCheck, label: "Easy size exchange" },
];

/** The three printing methods, linking to their own pages. */
export const METHOD = {
  dtg: { title: "Direct-to-garment (DTG)", href: "/dtg-printing", tag: "DTG", photo: { src: "/Services/dtg.webp", alt: "DTG printer printing a T-shirt" } },
  dtf: { title: "Direct-to-film (DTF)", href: "/dtf-printing", tag: "DTF", photo: { src: "/Services/dtf.webp", alt: "DTF transfer being pressed onto a garment" } },
  embroidery: { title: "Logo embroidery", href: "/embroidery", tag: "Embroidery", photo: { src: "/Services/embroidery.webp", alt: "Embroidery machine stitching a logo" } },
};

export const STEP_PHOTOS: Photo[] = [
  { src: "/process/step1.webp", alt: "Choosing a garment" },
  { src: "/process/step2.webp", alt: "Sharing a design with the Yoode team" },
  { src: "/process/step4.webp", alt: "Finished custom apparel ready to wear" },
];
