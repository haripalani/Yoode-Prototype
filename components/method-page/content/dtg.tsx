import Link from "next/link";
import { Droplets, Palette, ShieldCheck, Truck, Sparkles, Tag, Calendar, Shirt } from "lucide-react";
import type { MethodPageContent } from "../types";

export const dtg: MethodPageContent = {
  spreadId: "m-dtg",
  short: "DTG",
  name: "DTG printing",
  kicker: "Direct-to-garment",
  machine: "dtg",
  lightHero: true,

  trust: [
    { icon: Droplets, label: "Direct ink printing" },
    { icon: Palette, label: "Detailed colour artwork" },
    { icon: ShieldCheck, label: "Preview & approval" },
    { icon: Truck, label: "Delivery across India" },
  ],

  explain: {
    eyebrow: "What is DTG printing?",
    title: <>Digital printing, directly <em>on your garment.</em></>,
    text: "DTG (direct-to-garment) printing applies water-based inks straight onto fabric. It works particularly well for detailed designs on suitable cotton garments, without requiring separate screens for each colour.",
    steps: [
      ["Check the garment and artwork", "Review fabric type, print size, colours and required placement."],
      ["Prepare and print", "Pretreat when needed, print directly onto the fabric and cure the ink."],
      ["Inspect the result", "Check the completed print against the agreed order details."],
    ],
  },

  products: {
    eyebrow: "Choose your base garment",
    title: <>Explore DTG printing by <em>apparel type.</em></>,
    text: "Choose a garment that suits your purpose. Fabric suitability, available colours and print dimensions are confirmed before production.",
    note: "Photos are for reference. Available garments, colours and print areas are confirmed with your quote.",
    items: [
      { name: "Custom T-Shirts", text: "Everyday cotton tees for detailed graphics, photos and personal designs.", tag: "Regular fit", min: "1 piece", photo: { src: "/categories/custom_tshirts.webp", alt: "A folded charcoal cotton T-shirt", pos: "40% 70%" } },
      { name: "Oversized T-Shirts", text: "Relaxed silhouettes with space for bold, full-colour artwork.", tag: "Oversized fit", min: "1 piece", photo: { src: "/categories/oversized_tees.webp", alt: "An oversized printed T-shirt worn on the street", pos: "50% 30%" } },
      // the hoodie and the sweatshirt share one photo, each card zoomed in on its own garment
      { name: "Hoodies", text: "Add your design to a compatible hoodie for a layered, casual look.", tag: "Hooded", min: "1 piece", photo: { src: "/categories/hoodies_sweatshirts.webp", alt: "A grey pullover hoodie", pos: "60% 40%", zoom: 2 } },
      { name: "Sweatshirts", text: "Explore cotton-rich sweatshirt options for artwork and merchandise.", tag: "Crew neck", min: "1 piece", photo: { src: "/categories/hoodies_sweatshirts.webp", alt: "A cream crewneck sweatshirt", pos: "92% 44%", zoom: 2.3 } },
    ],
  },

  why: {
    eyebrow: "Design details matter",
    title: <>Why choose <em>DTG printing?</em></>,
    text: "Choose DTG when colour-rich artwork and a softer printed feel matter more than a heavy, raised graphic.",
    items: [
      { icon: Palette, title: "Made for colourful artwork", text: "Useful for photos, gradients and designs with multiple colour transitions." },
      { icon: Sparkles, title: "Fine graphic detail", text: "Supports illustrations, lettering and complex artwork when files are prepared correctly." },
      { icon: Droplets, title: "Soft printed feel", text: "Ink interacts with the fabric rather than sitting as a thick transfer layer." },
    ],
  },

  result: {
    eyebrow: "See the possibilities",
    title: <>From blank tee <em>to DTG print.</em></>,
    text: "See how a graphic can appear when applied to a garment. Final colour and detail depend on fabric, file quality and print settings.",
    before: { label: "Blank tee", photo: { src: "/womens-tshirt.webp", alt: "A blank cotton T-shirt on a hanger", pos: "50% 45%" } },
    after: { label: "DTG printed", photo: { src: "/Services/dtg.webp", alt: "A full-colour lion design freshly printed on a black T-shirt on a DTG printer", pos: "50% 62%" } },
  },

  video: {
    eyebrow: "Watch the printing process",
    title: <>See DTG printing <em>in action.</em></>,
    text: "See how a design goes from a digital file to a printed T-shirt. A short video can show the garment preparation, direct ink printing and finishing stages.",
    steps: [
      ["Garment preparation", "See how the fabric is prepared before printing."],
      ["Direct-to-garment printing", "Watch the design printed directly onto the garment."],
      ["Final print & finishing", "Understand the curing and finished-print stages."],
    ],
    poster: { src: "/Services/dtg.webp", alt: "", pos: "50% 55%" },
    caption: "From artwork to finished print",
  },

  placements: {
    eyebrow: "Where should your artwork go?",
    title: <>Choose your DTG <em>print placement.</em></>,
    text: "Print placement affects how visible your artwork is and how much space it needs. Share your idea and Yoode will check the available print area.",
    note: "Available print areas depend on garment style, size and equipment. Confirm placement before quoting.",
    items: [
      { name: "Front print", text: "A prominent choice for illustrations, portraits and statement artwork.", photo: { src: "/tshirts-promo.webp", alt: "A graphic front print on a T-shirt", pos: "53% 36%", zoom: 1.9 }, area: [37, 26, 30, 26] },
      { name: "Back print", text: "Useful for large graphics, event artwork and apparel collections.", photo: { src: "/polo/navy-back.jpg", alt: "The back of a navy polo" }, area: [32, 30, 36, 30] },
      { name: "Small chest print", text: "A restrained position for initials, compact logos and subtle details.", photo: { src: "/polo/navy-front.jpg", alt: "The front of a navy polo" }, area: [56, 34, 12, 9] },
    ],
  },

  band: {
    eyebrow: "Your idea. Your T-shirt.",
    title: <>Have artwork <em>ready for printing?</em></>,
    text: "Turn your design into wearable merchandise. Tell Yoode what you want to print and receive guidance on the right DTG options.",
    cta: "Get a DTG quote",
  },

  tips: {
    eyebrow: "Before you send your file",
    title: <>What works best for <em>DTG printing?</em></>,
    text: "Good print results start with compatible fabric and a clean design file. Check these essentials before requesting a quote.",
    items: [
      "High-resolution artwork at the intended print dimensions",
      "Cotton or cotton-rich garment, subject to suitability",
      "Clear background / transparent PNG where appropriate",
      "Confirmed print size, position and garment colour",
    ],
    aside: {
      eyebrow: "Light vs dark garments",
      title: <>Does T-shirt colour <em>affect the print?</em></>,
      text: "Yes. Light fabric and dark fabric can need different preparation. Dark garments commonly require pretreatment and a white underbase for colourful designs.",
      pair: [
        { label: "Light garment", photo: { src: "/polo/white-front.jpg", alt: "Light garment: a plain white polo" } },
        { label: "Dark garment", photo: { src: "/polo/black-front.jpg", alt: "Dark garment: a plain black polo" } },
      ],
      note: "Colour accuracy can vary between the digital preview and the finished fabric.",
    },
  },

  steps: {
    title: <>How to order DTG printing <em>with Yoode.</em></>,
    items: [
      ["Choose your garment", "Share the apparel type, colour, size breakdown and required quantity."],
      ["Send your artwork", "Upload your logo or design with your preferred print dimensions and placement."],
      ["Review & approve", "Check the design preview, garment details and quote before approving."],
      ["Printing & delivery", "Yoode prepares the approved order and arranges delivery as agreed."],
    ],
  },

  compare: {
    title: <>DTG vs DTF vs <em>screen printing.</em></>,
    text: "Not every design needs the same printing process. Here is a practical starting point for choosing among common methods.",
    cols: ["DTG printing", "DTF printing", "Screen printing"],
    rows: [
      ["How it works", "Ink printed directly on the garment", "Design transferred from printed film", "Ink pushed through a prepared screen"],
      ["Artwork fit", "Photos, gradients, detailed multicolour graphics", "Logos and detailed designs across many fabrics", "Solid-colour designs, repeat production"],
      ["Fabric suitability", "Usually best on cotton-rich items", "Works with a broader range of fabrics", "Depends on ink and garment combination"],
      ["Typical order fit", "Single designs and smaller runs", "Flexible quantities and placement needs", "Often efficient at higher quantities"],
      ["Surface feel", "Often softer on suitable fabrics", "More noticeable transfer layer", "Varies with ink and coverage"],
    ],
    note: "This is a general guide, not a fixed performance or pricing guarantee. The best method depends on the exact order.",
  },

  useCases: {
    title: <>Where DTG-printed apparel <em>works best.</em></>,
    text: "From personal designs to branded collections, DTG is useful when artwork detail matters.",
    items: [
      { icon: Sparkles, title: "Creative merchandise", text: "Illustrated apparel and limited-edition designs with colourful visuals." },
      { icon: Tag, title: "Clothing brands", text: "New design launches and sampling before expanding a collection." },
      { icon: Calendar, title: "Events & groups", text: "Distinctive T-shirts for gatherings, launches and team occasions." },
      { icon: Shirt, title: "Personal designs", text: "Photos, artwork and meaningful graphics on everyday garments." },
    ],
  },

  bulk: {
    title: <>Need DTG printing <em>in bulk?</em></>,
    text: "Planning merchandise or team apparel? Share your garment, artwork and quantity to receive an order-specific quotation from Yoode.",
  },

  faqs: {
    text: "Practical answers about DTG fabrics, design files, print colours, pricing and delivery.",
    items: [
      ["What is DTG printing and how does it work?", "DTG printing uses a digital printer to apply water-based ink directly onto compatible garments. The design is prepared, printed and cured to help set the ink."],
      ["Which fabrics are suitable for DTG printing?", "Cotton and cotton-rich fabrics generally give the best results. Yoode can review the garment material and confirm whether DTG is suitable."],
      ["Can DTG printing be done on black or dark T-shirts?", "Yes, dark garments may be printed using suitable pretreatment and a white ink base. The final result depends on the fabric and artwork."],
      ["Can I order just one DTG-printed T-shirt?", "Yoode supports custom-apparel enquiries without a minimum order. Share your chosen garment and design to confirm available DTG options and pricing."],
      ["What design files should I send for DTG printing?", "A clear high-resolution PNG is a useful starting point. SVG or PDF artwork may also be reviewed; final specifications depend on print size."],
      ["Can DTG print photographs, gradients and multiple colours?", "Yes. Detailed, multicolour artwork is one of DTG’s strengths, although print colours may differ slightly from screen previews."],
      ["How much does DTG T-shirt printing cost?", "Pricing depends on the garment, print dimensions, artwork, quantity and delivery location. Share your brief with Yoode for an order-specific quote."],
      ["How long does DTG printing and delivery take?", "The timeline depends on garment availability, artwork approval, quantity and destination. Yoode will confirm the estimated schedule before production."],
    ],
  },

  learn: {
    eyebrow: "DTG printing by Yoode",
    title: <>Direct-to-garment printing for <em>custom apparel.</em></>,
    text: "Helpful information before choosing DTG printing for your next apparel order.",
    articles: [
      { title: "DTG printing for detailed T-shirt designs", body: "DTG printing is a popular option when a T-shirt design includes photographs, gradients, illustrations or several colours. Rather than preparing separate screens, direct-to-garment technology applies ink onto a suitable fabric surface. This can be useful for creative merchandise, everyday clothing and artwork-led collections. At Yoode, begin with the kind of result you want, the garment colour and the number of pieces you need. The team can review your design, recommend a suitable print area and help you understand what to expect from the finished fabric." },
      { title: "Choosing cotton fabrics for DTG T-shirt printing", body: "Fabric choice can make a noticeable difference to the look and feel of a printed design. Cotton and cotton-rich garments usually work well for DTG T-shirt printing, while fabric texture, colour and construction may affect the result. A light T-shirt may need different preparation from a dark one. For hoodies, oversized T-shirts and sweatshirts, confirm the exact material before choosing the technique. Share your preferred garment with Yoode and ask for an artwork and fabric review before your order is approved." },
      { title: "Preparing artwork for direct-to-garment printing", body: "Send a clear image that matches your intended print dimensions. A high-resolution PNG with a suitable background is often useful, but the best file format depends on the artwork and production workflow. If your design contains tiny lettering, thin lines or transparency, ask for it to be checked before printing. Position also matters: a centre-front graphic needs different dimensions from a smaller chest print. Reviewing a mockup helps confirm the layout and allows you to check details before your custom T-shirt moves into production." },
      { title: "Order custom printed T-shirts across India", body: <>Whether you need DTG printing for a single design or a coordinated garment order, it helps to prepare a short brief covering artwork, product style, colour, sizes, quantities and delivery location. Yoode offers custom-apparel support and <Link href="/collections/custom-t-shirt-printing">custom T-shirt printing</Link> options, with delivery across India. You can also explore <Link href="/pages/print-on-demand">print-on-demand services</Link> if you are considering smaller batches or testing a new concept. Request a tailored quote and confirm the agreed schedule before production.</> },
    ],
  },

  quote: {
    title: <>Get a quote for <em>DTG printing.</em></>,
    text: "Tell Yoode what you want to print, where it should go and how many pieces you need. We'll help you review the options.",
    photo: { src: "/tshirts-promo.webp", alt: "A DTG-printed graphic T-shirt worn in a street-style shoot", pos: "29% 42%", zoom: 1.9 },
    placementLabel: "Print placement",
    placementOptions: ["Front", "Back", "Left chest", "Multiple placements"],
  },
};
