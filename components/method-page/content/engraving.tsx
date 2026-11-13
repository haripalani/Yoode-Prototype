import Link from "next/link";
import { Zap, Award, ShieldCheck, Truck, Gift, Trophy, Briefcase, Calendar, PenTool } from "lucide-react";
import type { MethodPageContent } from "../types";

export const engraving: MethodPageContent = {
  spreadId: "m-engraving",
  short: "Engraving",
  name: "Laser engraving",
  kicker: "Laser engraving",
  machine: "engraving",
  lightHero: false,

  trust: [
    { icon: Zap, label: "No ink, permanent mark" },
    { icon: Award, label: "Steel, wood & leather" },
    { icon: ShieldCheck, label: "Preview & approval" },
    { icon: Truck, label: "Delivery across India" },
  ],

  explain: {
    eyebrow: "What is laser engraving?",
    title: <>Marked by light, <em>made to keep.</em></>,
    text: "Laser engraving uses a focused laser beam to mark or remove the surface of a material, tracing your artwork into it. There is no ink involved, so the design becomes part of the product itself.",
    steps: [
      ["Check the product and artwork", "Review the material, finish, engraving size and the required position."],
      ["Set up and engrave", "Fix the product in place, set the laser for the material and engrave the design."],
      ["Clean and inspect", "Clean away residue and check the finished mark against the agreed details."],
    ],
  },

  products: {
    eyebrow: "Choose your base product",
    title: <>Explore laser engraving by <em>product type.</em></>,
    text: "Laser engraving suits steel, wood, leather and coated metal. Material, finish and engraving area are confirmed before production.",
    note: "Photos are for reference. Available products, finishes and engraving areas are confirmed with your quote.",
    items: [
      { name: "Bottles", text: "Names and logos on stainless steel and powder-coated bottles.", tag: "Steel", min: "1 piece", photo: { src: "/Services/Sports kit.png", alt: "A grey steel water bottle in a gift kit", pos: "50% 48%", zoom: 2.6 } },
      { name: "Pens", text: "Fine names and logos along metal pen barrels.", tag: "Metal", min: "1 piece", photo: { src: "/gift-box.webp", alt: "A black and gold metal pen in a gift box", pos: "58% 72%", zoom: 2.8 } },
      { name: "Plaques", text: "Detailed artwork and text on wooden plaques and awards.", tag: "Wood", min: "1 piece", photo: { src: "/Services/engraving.webp", alt: "A round wooden plaque being engraved with a tree design", pos: "58% 62%", zoom: 1.8 } },
      { name: "Gift Boxes", text: "Engraved items and lids for personal and corporate gift sets.", tag: "Gift sets", min: "1 piece", photo: { src: "/Services/Personalized gift.png", alt: "An open gift box with a leather notebook, pen, tumbler and keepsakes", pos: "50% 45%", zoom: 1.6 } },
    ],
  },

  why: {
    eyebrow: "Made to be kept",
    title: <>Why choose <em>laser engraving?</em></>,
    text: "Choose laser engraving when the mark should be permanent and understated, without adding ink.",
    items: [
      { icon: ShieldCheck, title: "Permanent mark", text: "No ink to fade, peel or scratch off; the design is part of the surface." },
      { icon: PenTool, title: "Fine detail", text: "Small text, signatures and line art can be engraved cleanly when sized correctly." },
      { icon: Award, title: "A premium look", text: "A tonal, natural finish suited to gifts, awards and keepsakes." },
    ],
  },

  result: {
    eyebrow: "See the possibilities",
    title: <>From plain material <em>to engraved design.</em></>,
    text: "See how a laser traces artwork into a surface. The final contrast and depth depend on the material, its finish and the artwork.",
    before: { label: "Plain material", photo: { src: "/laptop-sleeve.jpg", alt: "A plain black leather laptop sleeve" } },
    after: { label: "Laser engraved", photo: { src: "/Services/engraving.webp", alt: "A laser engraving a detailed tree and lettering into a round wooden plaque", pos: "50% 60%" } },
  },

  video: {
    eyebrow: "Watch the engraving process",
    title: <>See laser engraving <em>in action.</em></>,
    text: "See how a design goes from a digital file to a permanent mark. A short video can show the setup, the laser pass and the finished piece.",
    steps: [
      ["Product setup", "See the item positioned and focused under the laser."],
      ["Laser engraving", "Watch the beam trace the artwork into the surface."],
      ["Clean & finish", "Understand how residue is removed and the mark is checked."],
    ],
    poster: { src: "/Services/engraving.webp", alt: "", pos: "50% 25%" },
    caption: "From artwork to permanent mark",
  },

  placements: {
    eyebrow: "Where should your design go?",
    title: <>Choose your <em>engraving area.</em></>,
    text: "The engraving area depends on the product's shape and size. Share your idea and Yoode will check what space is available.",
    note: "Engraving areas depend on product model, shape and equipment. Confirm placement before quoting.",
    items: [
      { name: "Bottle body", text: "A name or logo on the side of a bottle or tumbler.", photo: { src: "/Services/Corporate.png", alt: "A grey steel tumbler in a gift box", pos: "47% 50%", zoom: 3 }, area: [18, 40, 42, 34] },
      { name: "Leather cover", text: "Initials or a logo on a leather sleeve, wallet or notebook.", photo: { src: "/laptop-sleeve.jpg", alt: "A black leather laptop sleeve", pos: "45% 50%", zoom: 1.3 }, area: [55, 52, 36, 20] },
      { name: "Gift box lid", text: "A message or logo on the lid or inside flap of a gift box.", photo: { src: "/gift-box.webp", alt: "The open lid of a navy gift box", pos: "60% 25%", zoom: 1.6 }, area: [28, 32, 58, 12] },
    ],
  },

  band: {
    eyebrow: "Your design. Made permanent.",
    title: <>Planning a gift <em>or an award?</em></>,
    text: "Engrave names, logos and messages into steel, wood and leather. Tell Yoode what you want engraved and receive guidance on the right options.",
    cta: "Get an engraving quote",
  },

  tips: {
    eyebrow: "Before you send your file",
    title: <>What works best for <em>laser engraving?</em></>,
    text: "Engraving is single-tone, so clean artwork matters most. Check these essentials before requesting a quote.",
    items: [
      "Vector artwork or a high-contrast black-and-white file",
      "Text large enough to read at the engraved size",
      "Exact product model, material and finish confirmed",
      "Confirmed engraving size and position on the product",
    ],
    aside: {
      eyebrow: "Steel vs leather",
      title: <>Does the material <em>affect the result?</em></>,
      text: "Yes. Coated steel reveals a bright metal mark, bare steel gives a subtler tone, and leather and wood darken where the laser burns. The same file can look quite different on each.",
      pair: [
        { label: "Steel", photo: { src: "/watch.jpg", alt: "Steel: a watch with a brushed steel case", pos: "40% 50%", zoom: 1.6 } },
        { label: "Leather", photo: { src: "/Services/Personalized gift.png", alt: "Leather: a brown leather notebook cover with a debossed logo", pos: "40% 52%", zoom: 3 } },
      ],
      note: "Engraved contrast varies with the material and finish; a sample is the best way to judge it.",
    },
  },

  steps: {
    title: <>How to order laser engraving <em>with Yoode.</em></>,
    items: [
      ["Choose your product", "Share the product type, model, finish and required quantity."],
      ["Send your artwork", "Upload your logo, text or names with the preferred size and position."],
      ["Review & approve", "Check the engraving preview, product details and quote before approving."],
      ["Engraving & delivery", "Yoode prepares the approved order and arranges delivery as agreed."],
    ],
  },

  compare: {
    title: <>Laser engraving vs UV printing vs <em>embroidery.</em></>,
    text: "Not every gift or product needs the same method. Here is a practical starting point for choosing among common options.",
    cols: ["Laser engraving", "UV printing", "Embroidery"],
    rows: [
      ["How it works", "Laser marks or removes the surface; no ink", "Ink jetted onto the surface and cured by UV light", "Coloured threads stitched into fabric"],
      ["Artwork fit", "Single-tone logos, text and line art", "Full colour, gradients and photos", "Logos and monograms in solid colours"],
      ["Material suitability", "Steel, wood, leather and coated metal", "Metal, glass, wood, plastic and more", "Pique, twill, denim, fleece"],
      ["Typical order fit", "Single pieces, gifts and awards", "Single pieces to mid-size runs", "Uniforms, caps and corporate wear"],
      ["Surface feel", "Flush or recessed, permanent mark", "Slightly raised, glossy layer", "Raised, textured stitches"],
    ],
    note: "This is a general guide, not a fixed performance or pricing guarantee. The best method depends on the exact order.",
  },

  useCases: {
    title: <>Where laser engraving <em>works best.</em></>,
    text: "From personal gifts to recognition awards, engraving is useful when a piece is meant to be kept.",
    items: [
      { icon: Gift, title: "Personal gifts", text: "Names, dates and messages on bottles, pens and leather goods." },
      { icon: Trophy, title: "Awards & recognition", text: "Engraved plaques and keepsakes for milestones and achievements." },
      { icon: Briefcase, title: "Corporate gifting", text: "Understated logos on premium items for clients and teams." },
      { icon: Calendar, title: "Events & occasions", text: "Personalised mementos for weddings, launches and anniversaries." },
    ],
  },

  bulk: {
    title: <>Need laser engraving <em>in bulk?</em></>,
    text: "Planning corporate gifts or awards? Share your products, artwork, any name lists and quantity to receive an order-specific quotation from Yoode.",
  },

  faqs: {
    text: "Practical answers about laser engraving materials, design files, personalisation, pricing and delivery.",
    items: [
      ["What is laser engraving and how does it work?", "A focused laser beam marks or removes a thin layer of the material, tracing your artwork into the surface. No ink is used."],
      ["Which materials can be laser engraved?", "Stainless and coated steel, wood, leather and some other materials. Results vary by material and finish, so Yoode can review the product and confirm suitability."],
      ["Can laser engraving be done in colour?", "No. Engraving is single-tone; the colour comes from the material itself. For full-colour designs on hard goods, UV printing may suit better."],
      ["Can I order just one engraved item?", "Yoode supports custom enquiries without a minimum order. Share your chosen product and design to confirm available engraving options and pricing."],
      ["What design files should I send for engraving?", "A vector file (AI, SVG, PDF) is ideal. A high-contrast black-and-white PNG can also be reviewed."],
      ["Can each item be engraved with a different name?", "Personalisation with individual names is often possible. Share the list with your brief so Yoode can confirm how it will be handled."],
      ["How much does laser engraving cost?", "Pricing depends on the product, engraving size, personalisation, quantity and delivery location. Share your brief with Yoode for an order-specific quote."],
      ["How long does laser engraving and delivery take?", "The timeline depends on product availability, artwork approval, quantity and destination. Yoode will confirm the estimated schedule before production."],
    ],
  },

  learn: {
    eyebrow: "Laser engraving by Yoode",
    title: <>Laser engraving for <em>gifts and awards.</em></>,
    text: "Helpful information before choosing laser engraving for your next order.",
    articles: [
      { title: "Laser engraving for permanent personalisation", body: "Laser engraving marks a design directly into the material, so there is no ink to fade or peel. That makes it a popular choice for gifts, awards and anything meant to be kept. It suits names, dates, signatures, logos and line art on steel, wood and leather. At Yoode, begin with the products you want to engrave, the artwork or names and the number of pieces you need, and the team can confirm what is possible." },
      { title: "Choosing materials for engraving", body: "Each material responds differently to the laser. Coated steel bottles often reveal a bright metal mark, bare steel gives a subtler tone, and wood and leather darken where the laser burns. Grain, finish and colour all affect contrast. If you are combining several products in a gift set, share the exact models with Yoode so each item's engraving area and expected result can be checked before approval." },
      { title: "Preparing artwork for laser engraving", body: "Engraving is single-tone, so artwork should be clean and high-contrast. Vector files keep logos and text sharp. Gradients and photos do not translate directly and usually need simplifying. Very small text can become hard to read on textured materials, so ask for a check. If each item carries a different name, prepare a clear list. Reviewing a preview helps confirm size and placement before production." },
      { title: "Order laser engraving across India", body: <>Whether you need one engraved gift or a set of awards for your team, prepare a short brief covering artwork, product type, finish, any names, quantities and delivery location. Yoode offers delivery across India. For full-colour logos on hard goods, compare <Link href="/uv-printing">UV printing</Link>; for branded apparel in a gift kit, see <Link href="/embroidery">embroidery</Link>. You can also browse all <Link href="/services">decoration services</Link> before requesting a tailored quote.</> },
    ],
  },

  quote: {
    title: <>Get a quote for <em>laser engraving.</em></>,
    text: "Tell Yoode what you want engraved, which products it goes on and how many pieces you need. We'll help you review the options.",
    photo: { src: "/categories/corporate_gifting.webp", alt: "An open corporate gift box with a hoodie, notebooks and mugs on a desk", pos: "50% 50%" },
    placementLabel: "Engraving area",
    placementOptions: ["Bottle body", "Pen barrel", "Plaque face", "Leather cover", "Box lid"],
  },
};
