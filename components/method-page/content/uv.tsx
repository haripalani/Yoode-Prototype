import Link from "next/link";
import { Sun, Palette, ShieldCheck, Truck, Package, Sparkles, Gift, Calendar, Briefcase, Tag } from "lucide-react";
import type { MethodPageContent } from "../types";

export const uv: MethodPageContent = {
  spreadId: "m-uv",
  short: "UV",
  name: "UV printing",
  kicker: "UV printing",
  machine: "uv",
  lightHero: false,

  trust: [
    { icon: Sun, label: "Ink cured by UV light" },
    { icon: Package, label: "Metal, glass, wood & plastic" },
    { icon: ShieldCheck, label: "Preview & approval" },
    { icon: Truck, label: "Delivery across India" },
  ],

  explain: {
    eyebrow: "What is UV printing?",
    title: <>Full colour, cured <em>on hard surfaces.</em></>,
    text: "UV printing jets ink onto a product and sets it immediately with ultraviolet light. Because the ink cures on contact instead of soaking in, it can print full-colour designs on metal, glass, wood and plastic.",
    steps: [
      ["Check the product and artwork", "Review the material, surface shape, print size and the required position."],
      ["Print and cure", "Print the design onto the product while UV lamps cure the ink as it lands."],
      ["Inspect the result", "Check the finished print for colour, alignment and coverage against the order."],
    ],
  },

  products: {
    eyebrow: "Choose your base product",
    title: <>Explore UV printing by <em>product type.</em></>,
    text: "UV printing suits hard goods with a reasonably smooth surface. Material, shape and print area are confirmed before production.",
    note: "Photos are for reference. Available products, colours and print areas are confirmed with your quote.",
    items: [
      { name: "Bottles", text: "Full-colour logos and artwork on steel and plastic bottles.", tag: "Steel & plastic", min: "1 piece", photo: { src: "/Services/Sports kit.png", alt: "A grey steel water bottle with a printed logo in a gift kit", pos: "50% 48%", zoom: 2.6 } },
      { name: "Pens", text: "Small logos and names on metal and plastic pen barrels.", tag: "Desk", min: "1 piece", photo: { src: "/gift-box.webp", alt: "A black and gold pen beside a navy notebook in a gift box", pos: "55% 70%", zoom: 2.5 } },
      { name: "Notebooks", text: "Colour logos and artwork on notebook and diary covers.", tag: "Stationery", min: "1 piece", photo: { src: "/categories/corporate_gifting.webp", alt: "Navy and green branded notebooks in a corporate gift box", pos: "70% 52%", zoom: 2.2 } },
      { name: "Gift Boxes", text: "Printed lids and packaging that match the products inside.", tag: "Packaging", min: "1 piece", photo: { src: "/Services/Personalized gift.png", alt: "An open gift box with a leather notebook, pen, tumbler and candle", pos: "50% 50%", zoom: 1.8 } },
    ],
  },

  why: {
    eyebrow: "Colour on hard goods",
    title: <>Why choose <em>UV printing?</em></>,
    text: "Choose UV printing when a logo or artwork needs full colour on something that isn't fabric.",
    items: [
      { icon: Palette, title: "Full colour on hard goods", text: "Prints gradients, photos and multicolour logos on metal, glass, wood and plastic." },
      { icon: Sparkles, title: "Slightly raised, glossy finish", text: "Cured ink sits on the surface with a subtle texture and sheen." },
      { icon: Package, title: "One piece or many", text: "No screens or plates to prepare, so single items and small runs are practical." },
    ],
  },

  result: {
    eyebrow: "See the possibilities",
    title: <>From blank surface <em>to UV print.</em></>,
    text: "See how full-colour artwork is printed and cured on a flat surface. Final colour and finish depend on the material, surface and artwork.",
    before: { label: "Blank surface", photo: { src: "/laptop-sleeve.jpg", alt: "A plain black laptop sleeve with no print" } },
    after: { label: "UV printed", photo: { src: "/Services/uv_printing.webp", alt: "A UV printer printing a bright multicolour geometric design onto a flat panel", pos: "62% 78%", zoom: 1.6 } },
  },

  video: {
    eyebrow: "Watch the printing process",
    title: <>See UV printing <em>in action.</em></>,
    text: "See how a design goes from a digital file to a cured print on a product. A short video can show the setup, the print pass and the UV curing.",
    steps: [
      ["Product setup", "See the product positioned and aligned on the print bed or rotary jig."],
      ["Printing & curing", "Watch ink jetted onto the surface and cured by UV light instantly."],
      ["Final check", "Understand how the finished print is checked before packing."],
    ],
    poster: { src: "/Services/uv_printing.webp", alt: "", pos: "50% 40%" },
    caption: "From artwork to cured print",
  },

  placements: {
    eyebrow: "Where should your artwork go?",
    title: <>Choose your UV <em>print area.</em></>,
    text: "The print area depends on the product's shape and size. Share your idea and Yoode will check what space is available.",
    note: "Print areas depend on product model, shape and equipment. Confirm placement before quoting.",
    items: [
      { name: "Bottle wrap", text: "A logo or design on the body of a bottle or tumbler.", photo: { src: "/Services/Corporate.png", alt: "A grey steel tumbler in a gift box", pos: "47% 50%", zoom: 3 }, area: [18, 40, 42, 34] },
      { name: "Notebook cover", text: "A full-colour logo or artwork on the front cover.", photo: { src: "/gift-box.webp", alt: "A navy notebook in a gift box", pos: "35% 70%", zoom: 2 }, area: [22, 24, 44, 50] },
      { name: "Mug face", text: "A logo on the side of a mug, opposite the handle.", photo: { src: "/categories/corporate_gifting.webp", alt: "A black mug with a gold logo in a gift box", pos: "62% 82%", zoom: 2.5 }, area: [32, 32, 42, 26] },
    ],
  },

  band: {
    eyebrow: "Your logo. On anything hard.",
    title: <>Have artwork <em>ready for printing?</em></>,
    text: "Put full-colour logos on bottles, pens, notebooks and boxes. Tell Yoode what you want to print and receive guidance on the right UV options.",
    cta: "Get a UV printing quote",
  },

  tips: {
    eyebrow: "Before you send your file",
    title: <>What works best for <em>UV printing?</em></>,
    text: "Good UV prints start with a suitable surface and a clean file. Check these essentials before requesting a quote.",
    items: [
      "High-resolution or vector artwork at the intended print size",
      "Exact product model, material and colour confirmed",
      "Transparent background, with any white areas marked",
      "Confirmed print size and position on the product",
    ],
    aside: {
      eyebrow: "Flat vs curved surfaces",
      title: <>Does product shape <em>affect the print?</em></>,
      text: "Yes. Flat surfaces such as notebook covers and box lids print most easily. Curved items such as bottles and tumblers need the right setup, and the usable print area is smaller.",
      pair: [
        { label: "Flat surface", photo: { src: "/Services/Corporate.png", alt: "Flat surface: a grey notebook cover", pos: "27% 45%", zoom: 3 } },
        { label: "Curved surface", photo: { src: "/Services/Personalized gift.png", alt: "Curved surface: a cream steel tumbler", pos: "52% 35%", zoom: 3.5 } },
      ],
      note: "Colour accuracy can vary between the digital preview and the finished product.",
    },
  },

  steps: {
    title: <>How to order UV printing <em>with Yoode.</em></>,
    items: [
      ["Choose your product", "Share the product type, model, colour and required quantity."],
      ["Send your artwork", "Upload your logo or design with your preferred print size and position."],
      ["Review & approve", "Check the design preview, product details and quote before approving."],
      ["Printing & delivery", "Yoode prepares the approved order and arranges delivery as agreed."],
    ],
  },

  compare: {
    title: <>UV printing vs laser engraving vs <em>pad printing.</em></>,
    text: "Not every hard-goods design needs the same method. Here is a practical starting point for choosing among common options.",
    cols: ["UV printing", "Laser engraving", "Pad printing"],
    rows: [
      ["How it works", "Ink jetted onto the surface and cured by UV light", "Laser removes or marks the surface; no ink", "Ink transferred from a plate by a silicone pad"],
      ["Artwork fit", "Full colour, gradients and photos", "Single-tone logos, text and line art", "Simple logos in one or a few solid colours"],
      ["Surface suitability", "Metal, glass, wood, plastic and more", "Steel, wood, leather and coated metal", "Small and curved plastic or metal items"],
      ["Typical order fit", "Single pieces to mid-size runs", "Single pieces, gifts and awards", "Often efficient at higher quantities"],
      ["Surface feel", "Slightly raised, glossy layer", "Flush or recessed, permanent mark", "Thin, flat ink layer"],
    ],
    note: "This is a general guide, not a fixed performance or pricing guarantee. The best method depends on the exact order.",
  },

  useCases: {
    title: <>Where UV-printed products <em>work best.</em></>,
    text: "From gift kits to event giveaways, UV printing is useful when colour matters on hard goods.",
    items: [
      { icon: Gift, title: "Corporate gifting", text: "Bottles, notebooks and pens printed to match a brand's colours." },
      { icon: Briefcase, title: "Welcome kits", text: "Branded desk and drinkware items for new joiners." },
      { icon: Calendar, title: "Events & conferences", text: "Colourful giveaways for delegates, speakers and partners." },
      { icon: Tag, title: "Personalised items", text: "Names and artwork on single gifts and small batches." },
    ],
  },

  bulk: {
    title: <>Need UV printing <em>in bulk?</em></>,
    text: "Planning gift kits or event merchandise? Share your products, artwork and quantity to receive an order-specific quotation from Yoode.",
  },

  faqs: {
    text: "Practical answers about UV printing materials, design files, finish, pricing and delivery.",
    items: [
      ["What is UV printing and how does it work?", "UV printing jets ink onto the product and cures it immediately with ultraviolet light. Because the ink sets on contact, it can print on surfaces that ink would not normally soak into."],
      ["Which materials can be UV printed?", "Metal, glass, wood, acrylic, many plastics and some leathers. Coatings and textures affect adhesion, so Yoode can review the product and confirm suitability."],
      ["Can UV printing go on curved items like bottles?", "Many cylindrical items can be printed with the right setup. The usable print area depends on the product's shape and size."],
      ["Can I order just one UV-printed item?", "Yoode supports custom enquiries without a minimum order. Share your chosen product and design to confirm available UV options and pricing."],
      ["What design files should I send for UV printing?", "A vector file (AI, SVG, PDF) or a high-resolution PNG with a transparent background is a useful starting point."],
      ["Can UV printing reproduce photos and gradients?", "Yes. UV printing handles full colour, including photos and gradients, although colours may differ slightly from screen previews."],
      ["How much does UV printing cost?", "Pricing depends on the product, print size, artwork, quantity and delivery location. Share your brief with Yoode for an order-specific quote."],
      ["How long does UV printing and delivery take?", "The timeline depends on product availability, artwork approval, quantity and destination. Yoode will confirm the estimated schedule before production."],
    ],
  },

  learn: {
    eyebrow: "UV printing by Yoode",
    title: <>UV printing for <em>branded hard goods.</em></>,
    text: "Helpful information before choosing UV printing for your next merchandise order.",
    articles: [
      { title: "UV printing for full-colour logos on hard goods", body: "UV printing is a practical way to put full-colour artwork on items that aren't fabric, such as bottles, pens, notebooks and gift boxes. The ink is cured by ultraviolet light the moment it lands, so it sits on the surface with a slightly raised, glossy finish. It handles gradients and photos as well as simple logos. At Yoode, begin with the products you want to brand, the artwork and the number of pieces you need, and the team can confirm what is possible." },
      { title: "Choosing products for UV printing", body: "Smooth, rigid surfaces usually give the best UV prints. Metal, glass, wood and many plastics work well, while heavily textured, soft-touch or oily surfaces may need a test. Shape matters as much as material: a flat notebook cover gives more room than a curved pen barrel. If you are building a gift kit, share the exact product models with Yoode so each item's print area can be checked before approval." },
      { title: "Preparing artwork for UV printing", body: "Send artwork at the size it will be printed. Vector files keep logos sharp; high-resolution images suit photos. Make the background transparent unless you want it printed, and mark any areas that should be white on a coloured or clear product. Small text on a curved surface can be harder to read, so ask for a check. Reviewing a mockup on the actual product helps confirm placement before production." },
      { title: "Order UV printing across India", body: <>Whether you need one personalised bottle or branded items for a full gift kit, prepare a short brief covering artwork, product type, colour, quantities and delivery location. Yoode offers delivery across India. For a permanent, ink-free mark on steel, wood or leather, compare <Link href="/laser-engraving">laser engraving</Link>. You can also browse all <Link href="/services">decoration services</Link> before requesting a tailored quote.</> },
    ],
  },

  quote: {
    title: <>Get a quote for <em>UV printing.</em></>,
    text: "Tell Yoode what you want to print, which products it goes on and how many pieces you need. We'll help you review the options.",
    photo: { src: "/gift-box.webp", alt: "A navy corporate gift box with a notebook, pen and mug", pos: "50% 50%" },
    placementLabel: "Print area",
    placementOptions: ["Bottle body", "Pen barrel", "Notebook cover", "Box lid", "Multiple areas"],
  },
};
