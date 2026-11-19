import type { CollectionPageContent, Product } from "../types";
import { CDN, SHOP, FESTIVE_TRUST, moreTiles } from "./shared";

/** [name, slug, image file, limited edition?, sale?] — prices: regular ₹549 / limited ₹649, as on the live collection */
const ROWS: [string, string, string, boolean, boolean][] = [
  ["Women's Kashish Cuban Collar Shirt", "womens-kashish-cuban-collar-shirt", "womens-kashish-cuban-collar-shirt-1.webp", false, false],
  ["Men's Kashish Cuban Collar Shirt", "mens-kashish-cuban-collar-shirt", "mens-kashish-cuban-collar-shirt-1.webp", false, false],
  ["Men's Thiruvonam Cuban Collar Shirt", "mens-thiruvonam-cuban-collar-shirt", "men3.webp", true, true],
  ["Women's Indraloka Cuban Collar Shirt", "womens-indraloka-cuban-collar-shirt", "Indraloka-women-half-regular-1.webp", false, true],
  ["Women's Mandara Cuban Collar Shirt", "womens-mandara-cuban-collar-shirt", "mandara-full-regular-3.webp", false, true],
  ["Men's Vismayam Cuban Collar Shirt", "mens-avathaaram-cuban-collar-shirt", "Avathaaram-half-regular-1.webp", false, true],
  ["Women's Ponnonam Cuban Collar Shirt", "womens-vismayam-cuban-collar-shirt", "ponnonam-women-half-regular-1.webp", false, true],
  ["Men's Kalabham Cuban Collar Shirt", "mens-kalabham-cuban-collar-shirt", "kalabham-half-regular-1.webp", false, true],
  ["Women's Chamayam Cuban Collar Shirt", "womens-chamayam-cuban-collar-shirt", "womens-chamayam-cuban-collar-shirt-7.webp", true, true],
  ["Men's Keraliyam Cuban Collar Shirt", "mens-keraliyam-cuban-collar-shirt", "mens-keraliyam-half-regular-1.webp", false, true],
  ["Men's Nandanam Cuban Collar Shirt", "mens-nandanam-cuban-collar-shirt", "nandanam-half-regular-1.webp", false, true],
  ["Women's Thiruvonam Cuban Collar Shirt", "womens-thiruvonam-cuban-collar-shirt", "3_28acca28-8592-46d1-98f0-b1dfc0aa7b11.webp", true, true],
  ["Men's Uthradam Cuban Collar Shirt", "mens-uthradam-cuban-collar-shirt", "6_a6647a1e-973b-41b6-b45e-4810a09993e4.webp", false, true],
  ["Women's Chingam Cuban Collar Shirt", "womens-chingam-cuban-collar-shirt", "chingam-regular-women-1.webp", false, true],
  ["Men's Chamayam Cuban Collar Shirt", "mens-chamayam-cuban-collar-shirt", "mens-chamayam-cuban-collar-shirt-1.webp", true, true],
  ["Women's Keraliyam Cuban Collar Shirt", "womens-keraliyam-cuban-collar-shirt", "womens-keraliyam-half-regular-1.webp", false, true],
  ["Men's Mandara Cuban Collar Shirt", "mens-mandara-cuban-collar-shirt", "1_e77a61fb-492e-4614-9ead-f1c234bfce42.webp", false, true],
  ["Women's Nandanam Cuban Collar Shirt", "womens-nandanam-cuban-collar-shirt", "nandanam-women-half-regular-1.webp", false, true],
  ["Men's Chingam Cuban Collar Shirt", "mens-chingam-cuban-collar-shirt", "chingam-cuban-collar-shirt-1.webp", false, true],
  ["Women's Vismayam Cuban Collar Shirt", "womens-avathaaram-cuban-collar-shirt", "Avathaaram-women-half-regular-1.webp", false, true],
  ["Men's Ponnonam Cuban Collar Shirt", "mens-vismayam-cuban-collar-shirt", "ponnonam-half-regular-1.webp", false, true],
  ["Women's Uthradam Cuban Collar Shirt", "womens-uthradam-cuban-collar-shirt", "uthradam-women-halfsleeve-1.webp", false, true],
  ["Men's Indraloka Cuban Collar Shirt", "mens-indraloka-cuban-collar-shirt", "Indraloka-half-regular-1.webp", false, true],
  ["Women's Kalabham Cuban Collar Shirt", "womens-kalabham-cuban-collar-shirt", "kalabham-women-half-regular-1.webp", false, true],
];

const items: Product[] = ROWS.map(([name, slug, file, limited, sale]) => ({
  name,
  gender: name.startsWith("Women") ? "Women" : "Men",
  price: limited ? "₹649" : "₹549",
  was: sale ? (limited ? "₹1,199" : "₹1,099") : undefined,
  badges: [...(limited ? ["Limited Edition"] : []), ...(sale ? ["Sale"] : [])],
  href: `${SHOP}/collections/onam-shirt/products/${slug}`,
  photo: { src: `${CDN}/${file}`, alt: name, pos: "50% 20%" },
}));

export const onam: CollectionPageContent = {
  short: "Onam shirt",
  ghost: "ONAM",
  whatsapp: "I would like to know more about the Onam shirt collection",

  hero: {
    eyebrow: "Trenz · Onam collection",
    title: <>Onam printed shirts for <em>men</em> & women</>,
    text: "Cuban collar shirts named after the festival and the Malayalam calendar. Designed and printed in Trivandrum, in matching men's and women's cuts.",
    primary: "Shop the collection",
    collage: [
      { src: `${CDN}/men3.webp`, alt: "Men's Thiruvonam Cuban collar shirt", pos: "50% 15%" },
      { src: `${CDN}/Indraloka-women-half-regular-1.webp`, alt: "Women's Indraloka Cuban collar shirt", pos: "50% 15%" },
      { src: `${CDN}/kalabham-half-regular-1.webp`, alt: "Men's Kalabham Cuban collar shirt", pos: "50% 15%" },
    ],
    chip: "24 prints · from ₹549",
  },

  trust: FESTIVE_TRUST,

  shop: {
    eyebrow: "Onam collection",
    title: <>Shop the <em>Onam</em> shirts</>,
    text: "Every print comes in half and full sleeve, regular and oversized fit. Prices start at ₹549 and vary by sleeve and fit.",
    genderFilter: true,
    initial: 12,
    items,
    note: "Prices shown are the starting price per shirt. Choose sleeve, fit and size on the product page.",
  },

  story: {
    eyebrow: "The collection",
    title: <>Designed around the <em>festival</em></>,
    photo: { src: `${CDN}/Onam.png`, alt: "Yoode Onam collection" },
    chapters: [
      {
        title: "Onam shirts that look seasonal",
        body: <p>An Onam shirt should feel like Onam, not a generic holiday print. Every design here takes its name from the festival and the Malayalam calendar: <b>Thiruvonam</b> and <b>Uthradam</b> for the key days, <b>Chingam</b> for the start of the year, <b>Ponnonam</b> for the richest part of the season. Keraliyam, Kalabham, Nandanam and Mandara borrow the colours of a Kerala home in Athapookalam week. Each print sits on a Cuban collar that lies open and flat.</p>,
      },
      {
        title: "What makes a Kerala style shirt different",
        body: <p>Mostly restraint. A print fails when it tries to say everything at once. These shirts are designed and printed in Trivandrum, and feedback from our Experience Centres in Marthandam, Chennai and Bangalore decides what stays. Wear a half-sleeve print with a kasavu mundu in the day, and the same shirt over dark denim in the evening.</p>,
      },
      {
        title: "Half sleeve, full sleeve, regular and oversized",
        body: <p>Half sleeve for the humidity, full sleeve for air-conditioned halls and office celebrations. Regular fit sits well with a mundu; oversized drops the shoulder for a relaxed look. Sizes run from 22 to 52. Not sure? Measure a shirt you already own across the chest and check the size chart on the product page.</p>,
      },
      {
        title: "Matching shirts for men, women and boys",
        body: <p>Every design has a men&apos;s and a women&apos;s version, each cut on its own pattern rather than resized. Sizes start at 22, so boys can match too. Some prints are limited runs, and you can see all of them at any of our four Experience Centres.</p>,
      },
    ],
  },

  specs: {
    eyebrow: "Fit & sizing",
    title: <>One print, <em>four</em> ways to wear it</>,
    items: [
      ["Collar", "Cuban collar, lies open and flat"],
      ["Sleeves", "Half sleeve or full sleeve"],
      ["Fit", "Regular or oversized"],
      ["Sizes", "22 to 52, men's and women's cuts"],
    ],
  },

  faqs: {
    text: "Sizing, fit and delivery for the Onam collection.",
    items: [
      ["Which fit should I choose, regular or oversized?", "Regular fit pairs well with a mundu and looks neat at family functions. Oversized drops the shoulder seam for a relaxed, younger look and suits jeans or chinos."],
      ["How do I find my size?", "Measure a shirt you already own across the chest and compare it with the size chart on the product page. Sizes run from 22 to 52."],
      ["Are there matching shirts for couples and families?", "Yes. Every print has a men's and a women's version, each cut on its own pattern, and sizes from 22 make matching shirts for boys possible."],
      ["Can I see the shirts before buying?", "Yes. The collection is available at our Experience Centres in Trivandrum, Marthandam, Chennai and Bangalore."],
      ["Can my company order Onam shirts in bulk?", "Yes. Teams often order matching Onam shirts for office celebrations. Share the quantity and sizes on WhatsApp and we will put the order together."],
    ],
  },

  more: { title: <>More from <em>Yoode</em></>, items: moreTiles("tshirts", "polos", "hoodies", "gifting") },

  quote: {
    title: <>Onam shirts for the whole <em>team?</em></>,
    text: "Planning matching shirts for an office Onam celebration? Tell us the prints, quantity and sizes and we will put it together.",
    photo: { src: `${CDN}/mens-chamayam-cuban-collar-shirt-1.webp`, alt: "Men's Chamayam Cuban collar shirt", pos: "50% 15%" },
    options: ["Men's Onam shirts", "Women's Onam shirts", "Mixed men & women", "Kids / boys sizes"],
  },
};
