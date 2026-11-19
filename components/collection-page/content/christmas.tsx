import type { CollectionPageContent, Product } from "../types";
import { CDN, SHOP, FESTIVE_TRUST, moreTiles } from "./shared";

/** [name, slug, image file, kind] — kind: "le" limited edition shirt ₹649, "sh" shirt ₹549, "tee" graphic tee ₹650 */
const ROWS: [string, string, string, "le" | "sh" | "tee"][] = [
  ["Women's Merryday Cuban Collar Shirt – Red", "womens-merryday-cuban-collar-shirt-red-1", "womens-merryday-half-cuban-collar-shirt-red-1.webp", "le"],
  ["Men's Merryday Cuban Collar Shirt – Red", "mens-merryday-cuban-collar-shirt-red", "mens-merryday-cuban-collar-shirt-red-1.webp", "le"],
  ["Women's Hollyday Cuban Collar Shirt – Green", "womens-hollyday-cuban-collar-shirt-green", "womens-hollyday-half-cuban-collar-shirt-green-1.webp", "sh"],
  ["Men's Hollyday Cuban Collar Shirt – Green", "mens-hollyday-cuban-collar-shirt-green", "mens-hollyday-half-cuban-collar-shirt-green-1.webp", "sh"],
  ["Men's Merryday Cuban Collar Shirt – White", "mens-merryday-cuban-collar-shirt-white", "mens-merryday-cuban-collar-shirt-white-1.webp", "le"],
  ["Women's Merryday Cuban Collar Shirt – White", "womens-merryday-cuban-collar-shirt-white-1", "womens-merryday-half-cuban-collar-shirt-white-1.webp", "le"],
  ["Women's Crimson Cuban Collar Shirt – Navy Blue", "womens-crimson-cuban-collar-shirt-navy-blue", "womens-crimson-half-cuban-collar-shirt-navy-blue-1.webp", "sh"],
  ["Men's Crimson Cuban Collar Shirt – Navy Blue", "mens-crimson-cuban-collar-shirt-navy-blue", "mens-crimson-half-cuban-collar-shirt-navy-blue-1.webp", "sh"],
  ["Women's Starwing Cuban Collar Shirt – Navy Blue", "womens-starwing-cuban-collar-shirt-navy-blue", "womens-starwing-half-cuban-collar-shirt-navy-blue-1.webp", "le"],
  ["Men's Starwing Cuban Collar Shirt – Navy Blue", "mens-starwing-cuban-collar-shirt-navy-blue", "mens-starwing-half-cuban-collar-shirt-navy-blue-1.webp", "le"],
  ["Men's Holylume Cuban Collar Shirt", "mens-holylume-cuban-collar-shirt", "mens-holylume-cuban-collar-shirt-2.webp", "sh"],
  ["Women's Holylume Cuban Collar Shirt", "womens-holylume-cuban-collar-shirt", "womens-holylume-half-cuban-collar-shirt-1.webp", "sh"],
  ["Men's Starwing Cuban Collar Shirt – Black", "mens-starwing-cuban-collar-shirt-black", "mens-starwing-half-cuban-collar-shirt-black-1.webp", "le"],
  ["Women's Starwing Cuban Collar Shirt – Black", "womens-starwing-cuban-collar-shirt-black", "womens-starwing-half-cuban-collar-shirt-black-1.webp", "le"],
  ["Men's Snowtale Cuban Collar Shirt – Red", "mens-snowtale-cuban-collar-shirt-red", "mens-snowtale-half-cuban-collar-shirt-red-1.webp", "sh"],
  ["Women's Snowtale Cuban Collar Shirt – Red", "womens-snowtale-cuban-collar-shirt-red", "womens-snowtale-half-cuban-collar-shirt-red-1.webp", "sh"],
  ["Women's Crimson Cuban Collar Shirt – Light Blue", "womens-crimson-cuban-collar-shirt-light-blue", "womens-crimson-half-cuban-collar-shirt-light-blue-1.webp", "sh"],
  ["Men's Crimson Cuban Collar Shirt – Light Blue", "mens-crimson-cuban-collar-shirt-light-blue", "mens-crimson-half-cuban-collar-shirt-light-blue-1.webp", "sh"],
  ["Women's Reinrose Cuban Collar Shirt", "womens-reinrose-cuban-collar-shirt", "womens-reinrose-cuban-collar-shirt-1.webp", "sh"],
  ["Men's Reinrose Cuban Collar Shirt", "mens-reinrose-cuban-collar-shirt", "mens-reinrose-cuban-collar-shirt-1.webp", "sh"],
  ["Men's Wishland Cuban Collar Shirt", "mens-wishland-cuban-collar-shirt", "mens-wishland-cuban-collar-shirt-1.webp", "sh"],
  ["Women's Wishland Cuban Collar Shirt", "womens-wishland-cuban-collar-shirt", "womens-wishland-half-cuban-collar-shirt-1.webp", "sh"],
  ["Women's Snowtale Cuban Collar Shirt – Blue", "womens-snowtale-cuban-collar-shirt-blue", "womens-snowtale-half-cuban-collar-shirt-blue-1.webp", "sh"],
  ["Men's Snowtale Cuban Collar Shirt – Blue", "mens-snowtale-cuban-collar-shirt-blue", "mens-snowtale-half-cuban-collar-shirt-blue-1.webp", "sh"],
  ["Men's Hollyday Cuban Collar Shirt – Brown", "mens-hollyday-cuban-collar-shirt-brown", "mens-hollyday-cuban-collar-shirt-brown-1.webp", "sh"],
  ["Women's Hollyday Cuban Collar Shirt – Brown", "womens-hollyday-cuban-collar-shirt-brown", "womens-hollyday-half-cuban-collar-shirt-brown-1.webp", "sh"],
  ["Men's Starwing Cuban Collar Shirt – Red", "mens-starwing-cuban-collar-shirt-red", "mens-starwing-half-cuban-collar-shirt-red-1.webp", "le"],
  ["Women's Starwing Cuban Collar Shirt – Red", "womens-starwing-cuban-collar-shirt-red", "womens-starwing-half-cuban-collar-shirt-red-1.webp", "le"],
  ["Men's Crimson Cuban Collar Shirt – Red", "mens-crimson-cuban-collar-shirt-red", "mens-crimson-half-cuban-collar-shirt-red-1.webp", "sh"],
  ["Women's Crimson Cuban Collar Shirt – Red", "womens-crimson-cuban-collar-shirt-red", "womens-crimson-half-cuban-collar-shirt-red-1.webp", "sh"],
  ["Men's Crimson Cuban Collar Shirt – White", "mens-crimson-cuban-collar-shirt-white", "mens-crimson-half-cuban-collar-shirt-white-1.webp", "sh"],
  ["Women's Crimson Cuban Collar Shirt – White", "womens-crimson-cuban-collar-shirt-white", "womens-crimson-half-cuban-collar-shirt-white-1.webp", "sh"],
  ["Women's Red Reign T-Shirt", "womens-red-reign-t-shirt", "womens-santa-clause-black-3.webp", "tee"],
  ["Men's Red Reign T-Shirt", "mens-red-reign-t-shirt", "mens-santa-clause-black-3.webp", "tee"],
  ["Women's Merry Broke T-Shirt – White", "womens-merry-broke-t-shirt-white", "womens-fully-broke-white-3.webp", "tee"],
  ["Men's Merry Broke T-Shirt – White", "mens-merry-broke-t-shirt-white", "mens-fully-broke-white-3.webp", "tee"],
];

const PRICE = { le: ["₹649", "₹1,099"], sh: ["₹549", "₹1,099"], tee: ["₹650", "₹1,299"] } as const;

const items: Product[] = ROWS.map(([name, slug, file, kind]) => ({
  name,
  gender: name.startsWith("Women") ? "Women" : "Men",
  price: PRICE[kind][0],
  was: PRICE[kind][1],
  badges: kind === "le" ? ["Limited Edition", "Sale"] : ["Sale"],
  href: `${SHOP}/collections/christmas-shirts-for-men-and-women/products/${slug}`,
  photo: { src: `${CDN}/${file}`, alt: name, pos: "50% 20%" },
}));

export const christmas: CollectionPageContent = {
  short: "Christmas shirt",
  ghost: "XMAS",
  whatsapp: "I would like to know more about the Christmas shirt collection",

  hero: {
    eyebrow: "Trenz · Holiday collection",
    title: <>Christmas shirts for <em>men</em> & women</>,
    text: "Cuban collar shirts and graphic tees for the party season: Merryday, Hollyday, Starwing, Snowtale and more, in matching men's and women's cuts.",
    primary: "Shop the collection",
    collage: [
      { src: `${CDN}/mens-merryday-cuban-collar-shirt-red-1.webp`, alt: "Men's Merryday Cuban collar shirt in red", pos: "50% 15%" },
      { src: `${CDN}/womens-hollyday-half-cuban-collar-shirt-green-1.webp`, alt: "Women's Hollyday Cuban collar shirt in green", pos: "50% 15%" },
      { src: `${CDN}/mens-starwing-half-cuban-collar-shirt-navy-blue-1.webp`, alt: "Men's Starwing Cuban collar shirt in navy", pos: "50% 15%" },
    ],
    chip: "36 styles · from ₹549",
  },

  trust: FESTIVE_TRUST,

  shop: {
    eyebrow: "Holiday collection",
    title: <>Shop the <em>Christmas</em> shirts</>,
    text: "Every shirt comes in half and full sleeve, regular and oversized fit. Prices start at ₹549 and vary by sleeve and fit.",
    genderFilter: true,
    initial: 12,
    items,
    viewAll: { label: "All 40 on yoode.com", href: `${SHOP}/collections/christmas-shirts-for-men-and-women` },
    note: "Prices shown are the starting price per piece. Choose sleeve, fit and size on the product page.",
  },

  story: {
    eyebrow: "The collection",
    title: <>Made for the <em>party</em> season</>,
    photo: { src: `${CDN}/HOLIDAY-web-banner-webp.webp`, alt: "Yoode holiday collection", pos: "30% 50%" },
    chapters: [
      {
        title: "Christmas, without the costume",
        body: <p>A good Christmas shirt is one you would wear again in January. The prints lean on the season, with holly, stars, snow and winter florals, but keep to a few colours so they look festive rather than fancy dress. <b>Merryday</b> and <b>Starwing</b> are the limited runs; <b>Crimson</b>, <b>Snowtale</b> and <b>Hollyday</b> come in several colourways.</p>,
      },
      {
        title: "The Cuban collar does the work",
        body: <p>Every shirt sits on a Cuban collar that lies open and flat, so it looks relaxed at a house party and tidy at an office celebration. Wear it open over a tee, or buttoned with chinos.</p>,
      },
      {
        title: "Half sleeve, full sleeve, regular and oversized",
        body: <p>Half sleeve for warm December evenings, full sleeve for air-conditioned venues. Regular fit for a neat look, oversized for a relaxed drop-shoulder one. Sizes run from 22 to 52.</p>,
      },
      {
        title: "Matching for couples, families and teams",
        body: <p>Every print has a men&apos;s and a women&apos;s version, each cut on its own pattern. Pair them for couples, families or the whole office Secret Santa, or pick a Red Reign or Merry Broke graphic tee for something lighter.</p>,
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
    text: "Sizing, fit and delivery for the holiday collection.",
    items: [
      ["Which fit should I choose, regular or oversized?", "Regular fit looks neat buttoned up at office parties. Oversized drops the shoulder seam for a relaxed look and suits wearing open over a tee."],
      ["How do I find my size?", "Measure a shirt you already own across the chest and compare it with the size chart on the product page. Sizes run from 22 to 52."],
      ["Do you have matching shirts for couples and families?", "Yes. Every print has a men's and a women's version, each cut on its own pattern, so couples and families can match."],
      ["Will my order arrive before Christmas?", "Order early in December to be safe. Delivery times depend on your location; the estimate is shown at checkout."],
      ["Can my company order Christmas shirts in bulk?", "Yes. Teams order matching shirts for office parties and year-end events. Share the prints, quantity and sizes on WhatsApp and we will put the order together."],
    ],
  },

  more: { title: <>More from <em>Yoode</em></>, items: moreTiles("festive", "tshirts", "hoodies", "gifting") },

  quote: {
    title: <>Shirts for the office <em>party?</em></>,
    text: "Planning matching shirts for a Christmas party or year-end event? Tell us the prints, quantity and sizes and we will put it together.",
    photo: { src: `${CDN}/mens-starwing-half-cuban-collar-shirt-red-1.webp`, alt: "Men's Starwing Cuban collar shirt in red", pos: "50% 15%" },
    options: ["Men's Christmas shirts", "Women's Christmas shirts", "Mixed men & women", "Graphic tees"],
  },
};
