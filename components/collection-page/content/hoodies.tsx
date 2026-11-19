import { Layers, Palette, Sparkles, Users, Truck } from "lucide-react";
import type { CollectionPageContent } from "../types";
import { CDN, SHOP, CUSTOM_TRUST, METHOD, STEP_PHOTOS, moreTiles } from "./shared";

const P = `${SHOP}/collections/custom-hoodies/products`;

export const hoodies: CollectionPageContent = {
  short: "hoodie",
  ghost: "HOODIES",
  whatsapp: "I would like to customize hoodies & sweatshirts",

  hero: {
    eyebrow: "Custom hoodies & sweatshirts",
    title: <>Custom hoodies & sweatshirts with <em>logo</em> printing</>,
    text: "Hoodies and sweatshirts made for comfort, style and everyday wear. Add your logo, artwork or design by print or embroidery.",
    primary: "Pick your hoodie",
    rating: { score: "4.9", label: "250+ Google reviews" },
    collage: [
      { src: `${CDN}/women-oversized-hoodie-3.webp`, alt: "Women's pullover hoodie", pos: "50% 20%" },
      { src: `${CDN}/custom-mens-premium-zipper-hoodie-red-1.webp`, alt: "Men's red zipper hoodie" },
      { src: `${CDN}/women-sweatshirt-11.webp`, alt: "Women's sweatshirt" },
    ],
    chip: "Embroidery or print, your call",
  },

  trust: CUSTOM_TRUST,

  shop: {
    eyebrow: "Shop custom hoodies & sweatshirts",
    title: <>Pick your <em>hoodie</em></>,
    text: "Zippers, pullovers and sweatshirts for men and women, in up to 11 colours each.",
    items: [
      { name: "Men's Blend Zipper Hoodie", price: "₹2,080", was: "₹2,899", badges: ["Sale"], colours: 11, href: `${P}/men-s-blend-zipper-hoodie`, photo: { src: `${CDN}/custom-mens-premium-zipper-hoodie-red-1.webp`, alt: "Men's blend zipper hoodie in red" }, hover: { src: `${CDN}/custom-mens-premium-zipper-hoodie-red-2.webp`, alt: "Men's zipper hoodie, back" } },
      { name: "Men's Cotton Pullover Hoodie", price: "₹1,260", was: "₹1,799", badges: ["Sale"], colours: 11, rating: "4.6", href: `${P}/men-s-cotton-pullover-hoodie`, photo: { src: `${CDN}/mens-hoodie-18.webp`, alt: "Men's cotton pullover hoodie" }, hover: { src: `${CDN}/custom-mens-classic-pullover-hoodie-white-2.webp`, alt: "Men's pullover hoodie, back" } },
      { name: "Women's Blend Pullover Hoodie", price: "₹1,790", was: "₹2,499", badges: ["Sale"], colours: 11, href: `${P}/women-s-blend-pullover-hoodie`, photo: { src: `${CDN}/women-oversized-hoodie-3.webp`, alt: "Women's blend pullover hoodie" }, hover: { src: `${CDN}/custom-womens-premium-pullover-hoodie-red-1.webp`, alt: "Women's pullover hoodie in red" } },
      { name: "Women's Blend Zipper Hoodie", price: "₹1,800", was: "₹2,499", badges: ["Sale"], colours: 11, href: `${P}/women-s-blend-zipper-hoodie`, photo: { src: `${CDN}/women-zipper-hoodie-6.webp`, alt: "Women's blend zipper hoodie" }, hover: { src: `${CDN}/custom-womens-premium-zipper-hoodie-sky-blue-2_02ef9a6f-d847-446c-99ed-6572a5d39564.webp`, alt: "Women's zipper hoodie in sky blue" } },
      { name: "Women's Cotton Sweatshirt", price: "₹890", was: "₹1,199", badges: ["Sale"], colours: 11, href: `${P}/women-s-cotton-sweatshirt`, photo: { src: `${CDN}/women-sweatshirt-11.webp`, alt: "Women's cotton sweatshirt" }, hover: { src: `${CDN}/custom-womens-classic-sweatshirt-navy-2.webp`, alt: "Women's sweatshirt in navy" } },
    ],
    viewAll: { label: "View all hoodies", href: `${SHOP}/collections/hoodie-and-sweatshirt` },
  },

  steps: {
    eyebrow: "How it works",
    title: <>Your custom hoodie in <em>3 steps</em></>,
    text: "Pick it, share it, wear it. You approve a mockup before anything is made.",
    items: [
      { title: "Choose your hoodie", text: "Pick the style, colour and fit you want to customise.", photo: STEP_PHOTOS[0] },
      { title: "Share your design", text: "Send your logo and get a professional mockup back.", photo: STEP_PHOTOS[1] },
      { title: "Wear it your way", text: "Your custom hoodies are delivered ready to wear.", photo: STEP_PHOTOS[2] },
    ],
  },

  why: {
    eyebrow: "Why customers choose us",
    title: <>Hoodies people <em>keep</em> wearing</>,
    text: "Soft fabric, clean decoration and production that keeps to schedule.",
    items: [
      { icon: Layers, title: "Premium fabric quality", text: "Soft fabrics that keep their shape after repeated washing." },
      { icon: Palette, title: "Easy customisation", text: "Logo, artwork or design to suit your brand, team or style." },
      { icon: Sparkles, title: "Quality print & embroidery", text: "Bold prints and detailed stitching, produced with care." },
      { icon: Users, title: "For teams & businesses", text: "Company merch, staff uniforms, events, clubs and teams." },
      { icon: Truck, title: "Fast, reliable delivery", text: "Production kept on schedule so orders arrive on time." },
    ],
  },

  methods: {
    eyebrow: "Printing & embroidery options",
    title: <>Custom hoodie printing & <em>embroidery</em></>,
    text: "The best option depends on your design, the garment and the finish you want.",
    items: [
      { ...METHOD.dtg, text: "Suited to gradients, fine lines and multi-colour artwork, with a soft finish on cotton hoodies." },
      { ...METHOD.dtf, text: "Bold logos and vibrant graphics with excellent durability, on any colour of hoodie." },
      { ...METHOD.embroidery, text: "A refined, stitched finish for branded and team apparel that lasts for years." },
    ],
  },

  occasions: {
    eyebrow: "For every occasion",
    title: <>Hoodies for <em>every</em> occasion</>,
    text: "From the office to the weekend, one hoodie, many reasons.",
    items: [
      { title: "Business & teamwear", text: "A professional, unified look for teams, staff and businesses.", photo: { src: `${CDN}/Mask_group_33.png`, alt: "Business and teamwear hoodies" } },
      { title: "Matching hoodies", text: "Matching designs for friends, couples and special moments.", photo: { src: `${CDN}/Mask_group_34.png`, alt: "Matching hoodies for couples and friends" } },
      { title: "Streetwear hoodies", text: "Your artwork, bold graphics and personal style.", photo: { src: `${CDN}/Mask_group_35.png`, alt: "Streetwear hoodies with custom designs" } },
    ],
  },

  testimonials: [
    { name: "Arjun K.", role: "Startup co-founder", quote: "We got hoodies for our team and the process was smooth. Excellent print quality and a really comfortable fit." },
    { name: "Neha P.", role: "Student event coordinator", quote: "Matching hoodies for our college event, and the team helped us at every step." },
    { name: "Rohit S.", role: "Operations manager", quote: "The embroidery was clean and matched the approved preview. Delivered on time, and the quality has held up after several washes." },
  ],

  faqs: {
    text: "Minimums, design help, methods and timelines for custom hoodies and sweatshirts.",
    items: [
      ["Is there a minimum order quantity for custom hoodies and sweatshirts?", "No minimum. We accept single pieces as well as larger team and business orders."],
      ["Can I add my logo, artwork or custom design?", "Yes. Logos, graphics, text and artwork can all be added, and our team checks the design before production."],
      ["What printing and customization options are available?", "DTG printing, DTF printing and logo embroidery. The best option depends on your design, the garment and the finish you want."],
      ["What if I don't have a design ready?", "Share an idea, a logo or some inspiration and our team helps build the design before production."],
      ["How long does production and delivery take?", "It depends on order size and customisation. You get an estimated timeline once the design is approved."],
      ["Are custom hoodies suitable for businesses, teams, and events?", "Yes. Common uses are company merchandise, staff uniforms, college clubs, sports teams, events and promotions."],
    ],
  },

  guides: {
    title: <>Expert hoodie <em>guides</em></>,
    href: `${SHOP}/blogs/custom-hoodie`,
    items: [
      { title: "Custom hoodies for birthdays, anniversaries and special occasions", href: `${SHOP}/blogs/custom-hoodie/custom-hoodies-for-birthdays-anniversaries-and-special-occasions` },
      { title: "Top 5 custom hoodie styles every team will love", href: `${SHOP}/blogs/custom-hoodie/top-5-custom-hoodie-styles-every-team-will-love` },
      { title: "Custom hoodie printing: what to know before you order", href: `${SHOP}/blogs/custom-hoodie/custom-hoodie-printing-what-to-know-before-you-order` },
    ],
  },

  more: { title: <>More than custom <em>hoodies</em></>, items: moreTiles("tshirts", "polos", "jerseys", "gifting") },

  quote: {
    title: <>Create your custom <em>hoodies</em></>,
    text: "Send your design on WhatsApp. Need artwork? We make a free mockup and share it before production.",
    photo: { src: "/categories/hoodies_sweatshirts.webp", alt: "Custom hoodies and sweatshirts" },
    options: ["Men's zipper hoodie", "Men's pullover hoodie", "Women's pullover hoodie", "Women's zipper hoodie", "Women's sweatshirt"],
  },

  seo: [
    {
      title: "Custom hoodies & sweatshirts designed around your ideas",
      body: <p>Start from a logo, a sketch or just an idea. We turn it into a hoodie that represents your brand, team or personal style, and show you a mockup before production.</p>,
    },
    {
      title: "Custom hoodie printing & embroidery made easy",
      body: <p>Not sure whether to print or embroider? Our team helps you choose the placement, garment, colours and method that suit your design.</p>,
    },
    {
      title: "Designed for small orders and bulk requirements",
      body: <p>One hoodie or a few hundred: the process is the same simple one, from mockup to delivery.</p>,
    },
  ],
};
