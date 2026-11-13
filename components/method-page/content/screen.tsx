import Link from "next/link";
import { Layers, Users, ShieldCheck, Truck, Palette, Package, Calendar, Briefcase, Tag, Trophy } from "lucide-react";
import type { MethodPageContent } from "../types";

export const screen: MethodPageContent = {
  spreadId: "m-screen",
  short: "Screen",
  name: "Screen printing",
  kicker: "Screen printing",
  machine: "screen",
  lightHero: false,

  trust: [
    { icon: Layers, label: "One screen per colour" },
    { icon: Users, label: "Built for larger runs" },
    { icon: ShieldCheck, label: "Preview & approval" },
    { icon: Truck, label: "Delivery across India" },
  ],

  explain: {
    eyebrow: "What is screen printing?",
    title: <>Ink pushed through <em>a mesh stencil.</em></>,
    text: "Screen printing presses ink through a fine mesh screen onto the garment, one screen for each colour. Once the screens are made, the same design can be printed quickly and consistently across many pieces.",
    steps: [
      ["Check the garments and artwork", "Review fabric, garment colours, number of ink colours and print size."],
      ["Make screens and print", "Prepare one screen per colour, then pull each ink through onto the garment."],
      ["Cure and inspect", "Heat-cure the ink and check the printed pieces against the agreed details."],
    ],
  },

  products: {
    eyebrow: "Choose your base garment",
    title: <>Explore screen printing by <em>apparel type.</em></>,
    text: "Screen printing suits orders where the same design goes on many garments. Fabric, ink colours and print size are confirmed before production.",
    note: "Photos are for reference. Available garments, colours and print areas are confirmed with your quote.",
    items: [
      { name: "Event T-Shirts", text: "The same design on every tee for runs, launches, festivals and fests.", tag: "Cotton jersey", min: "50 pieces", photo: { src: "/categories/custom_tshirts.webp", alt: "Hands folding a charcoal cotton T-shirt on a table", pos: "50% 60%" } },
      { name: "Uniforms", text: "Consistent logos across staff and team polos and tees.", tag: "Staff & teams", min: "50 pieces", photo: { src: "/banner-1.png", alt: "Three people wearing navy, grey and black polos with a small chest logo", pos: "50% 50%", zoom: 1.3 } },
      { name: "Merch Drops", text: "Bold graphic tees for brands, bands and creators releasing a collection.", tag: "Oversized fit", min: "50 pieces", photo: { src: "/categories/oversized_tees.webp", alt: "A woman wearing an oversized graphic T-shirt on a city street", pos: "50% 35%" } },
      { name: "Sweatshirts", text: "Solid-colour graphics on cotton-rich sweatshirts and hoodies.", tag: "Fleece", min: "50 pieces", photo: { src: "/categories/hoodies_sweatshirts.webp", alt: "A stack of folded sweatshirts in cream, sage, grey and navy", pos: "12% 55%", zoom: 1.5 } },
    ],
  },

  why: {
    eyebrow: "Made for volume",
    title: <>Why choose <em>screen printing?</em></>,
    text: "Choose screen printing when one design is going on many garments and bold, solid colour matters.",
    items: [
      { icon: Package, title: "Efficient at volume", text: "Once the screens are set up, each extra piece is quick to print." },
      { icon: Palette, title: "Bold, opaque colour", text: "Thick ink layers give strong, matte colour, including on dark garments." },
      { icon: Layers, title: "Consistent results", text: "The same screens print every piece, so the design stays uniform across the run." },
    ],
  },

  result: {
    eyebrow: "See the possibilities",
    title: <>From blank tee <em>to screen print.</em></>,
    text: "See how ink is pulled through a screen onto a garment. Final colour and coverage depend on the fabric, ink and artwork.",
    before: { label: "Blank tee", photo: { src: "/womens-tshirt.webp", alt: "A blank green T-shirt on a hanger", pos: "50% 45%" } },
    after: { label: "Screen printed", photo: { src: "/Services/screen_printing.webp", alt: "A printer pulling orange ink across a screen onto a black T-shirt", pos: "50% 70%" } },
  },

  video: {
    eyebrow: "Watch the printing process",
    title: <>See screen printing <em>in action.</em></>,
    text: "See how a design goes from artwork to a stack of printed garments. A short video can show the screens, the print stroke and the curing stage.",
    steps: [
      ["Preparing screens", "See how a separate screen is made for each ink colour."],
      ["Pulling the ink", "Watch the squeegee push ink through the mesh onto the garment."],
      ["Curing & finishing", "Understand how heat sets the ink before packing."],
    ],
    poster: { src: "/Services/screen_printing.webp", alt: "", pos: "50% 40%" },
    caption: "From screens to finished run",
  },

  placements: {
    eyebrow: "Where should your artwork go?",
    title: <>Choose your screen <em>print placement.</em></>,
    text: "Each placement needs its own set of screens. Share your idea and Yoode will check the available print area.",
    note: "Available print areas depend on garment style, size and press setup. Confirm placement before quoting.",
    items: [
      { name: "Front print", text: "The main spot for event artwork and bold graphics.", photo: { src: "/categories/best_sellers.webp", alt: "A navy T-shirt with a large printed mountain graphic on the front", pos: "50% 40%", zoom: 2 }, area: [18, 45, 64, 32] },
      { name: "Back print", text: "Large designs, sponsor lists and event dates across the back.", photo: { src: "/polo/navy-back.jpg", alt: "The back of a navy polo" }, area: [32, 30, 36, 30] },
      { name: "Left chest", text: "A compact logo for uniforms and staff wear.", photo: { src: "/polo/black-front.jpg", alt: "The front of a black polo" }, area: [56, 32, 13, 9] },
    ],
  },

  band: {
    eyebrow: "One design. Every shirt.",
    title: <>Planning an event <em>or merch drop?</em></>,
    text: "Print the same design across your whole run. Tell Yoode what you want to print and receive guidance on the right screen printing options.",
    cta: "Get a screen printing quote",
  },

  tips: {
    eyebrow: "Before you send your file",
    title: <>What works best for <em>screen printing?</em></>,
    text: "Screen printing rewards clean, solid-colour artwork. Check these essentials before requesting a quote.",
    items: [
      "Vector artwork with solid colours and clear edges",
      "A defined number of ink colours, with colour references",
      "Garment colours and size breakdown for the full run",
      "Confirmed print size and position for each placement",
    ],
    aside: {
      eyebrow: "Light vs dark garments",
      title: <>Does garment colour <em>affect the print?</em></>,
      text: "Yes. On light garments inks print directly. On dark garments, colours usually need a white underbase printed first, which adds a screen and a print stroke.",
      pair: [
        { label: "Light garment", photo: { src: "/polo/clean-white-front.png", alt: "Light garment: a plain white polo" } },
        { label: "Dark garment", photo: { src: "/polo/clean-black-front.png", alt: "Dark garment: a plain black polo" } },
      ],
      note: "Ink colours are matched as closely as possible; colours can vary between the preview and the fabric.",
    },
  },

  steps: {
    title: <>How to order screen printing <em>with Yoode.</em></>,
    items: [
      ["Choose your garments", "Share the apparel type, colours, size breakdown and total quantity."],
      ["Send your artwork", "Upload your design with its ink colours, print size and placement."],
      ["Review & approve", "Check the design preview, garment details and quote before approving."],
      ["Printing & delivery", "Yoode prepares the approved order and arranges delivery as agreed."],
    ],
  },

  compare: {
    title: <>Screen printing vs DTF vs <em>DTG printing.</em></>,
    text: "Not every design needs the same printing process. Here is a practical starting point for choosing among common methods.",
    cols: ["Screen printing", "DTF printing", "DTG printing"],
    rows: [
      ["How it works", "Ink pushed through a prepared screen", "Design printed on film, then heat-pressed", "Ink printed directly on the garment"],
      ["Artwork fit", "Solid-colour designs, repeat production", "Logos and detailed designs across many fabrics", "Photos, gradients, detailed multicolour graphics"],
      ["Fabric suitability", "Cotton and blends, depending on ink", "Cotton, polyester and many blends", "Usually best on cotton-rich items"],
      ["Typical order fit", "Larger runs of the same design", "Single pieces to mid-size runs", "Single designs and smaller runs"],
      ["Surface feel", "Matte ink layer, thicker with more coverage", "Smooth layer on the surface", "Often softer on suitable fabrics"],
    ],
    note: "This is a general guide, not a fixed performance or pricing guarantee. The best method depends on the exact order.",
  },

  useCases: {
    title: <>Where screen-printed apparel <em>works best.</em></>,
    text: "From events to uniforms, screen printing is useful when many garments carry the same design.",
    items: [
      { icon: Calendar, title: "Events & fests", text: "Matching tees for runs, conferences, college fests and launches." },
      { icon: Briefcase, title: "Staff uniforms", text: "Consistent logos across large teams and multiple locations." },
      { icon: Tag, title: "Merch drops", text: "Graphic tees and sweatshirts for brands, bands and creators." },
      { icon: Trophy, title: "Clubs & teams", text: "Training tees and supporter wear printed in team colours." },
    ],
  },

  bulk: {
    title: <>Need screen printing <em>in bulk?</em></>,
    text: "Planning a large run? Share your garments, artwork, ink colours and quantity to receive an order-specific quotation from Yoode.",
  },

  faqs: {
    text: "Practical answers about screen printing quantities, ink colours, fabrics, pricing and delivery.",
    items: [
      ["What is screen printing and how does it work?", "A separate mesh screen is made for each colour in the design. Ink is pushed through each screen onto the garment, then heat-cured to set it."],
      ["What is the minimum order for screen printing?", "Screen printing starts from 50 pieces, because each design needs screens to be prepared. For smaller quantities, DTG or DTF printing may suit better."],
      ["How many colours can screen printing use?", "Each colour needs its own screen, so designs with a few solid colours are the best fit. Yoode can review your artwork and advise on the number of screens."],
      ["Can screen printing be done on dark garments?", "Yes. Dark garments usually need a white underbase printed first so the colours stay bright and opaque."],
      ["What design files should I send for screen printing?", "Vector artwork (AI, SVG, PDF) with clearly separated colours is ideal. High-resolution files can also be reviewed and prepared."],
      ["Can screen printing reproduce photos and gradients?", "Gradients and photos are possible with halftone techniques, but solid colours are where screen printing is strongest. DTG may suit photographic artwork better."],
      ["How much does screen printing cost?", "Pricing depends on the garment, number of colours, placements, quantity and delivery location. Share your brief with Yoode for an order-specific quote."],
      ["How long does screen printing and delivery take?", "The timeline depends on garment availability, screen preparation, artwork approval, quantity and destination. Yoode will confirm the estimated schedule before production."],
    ],
  },

  learn: {
    eyebrow: "Screen printing by Yoode",
    title: <>Screen printing for <em>events and merchandise.</em></>,
    text: "Helpful information before choosing screen printing for your next apparel order.",
    articles: [
      { title: "Screen printing for larger apparel runs", body: "Screen printing is a well-established method for printing the same design on many garments. Each colour is printed through its own screen, which takes setup time, but once the screens are ready the run moves quickly and stays consistent. That makes it a common choice for event tees, staff uniforms and merchandise drops. At Yoode, begin with the design, the garment colours and the total quantity, and the team can confirm whether screen printing suits the order." },
      { title: "Choosing garments for screen printing", body: "Cotton and cotton-rich blends usually take screen printing ink well. Garment colour affects the process: dark garments often need a white underbase so colours stay opaque, which adds a screen. If your run includes several garment colours or styles, the ink and setup may need adjusting for each. Share the exact garments and size breakdown with Yoode and ask for a review before your order is approved." },
      { title: "Preparing artwork for screen printing", body: "Screen printing works best with vector artwork and a clear set of solid colours, because each colour becomes a separate screen. Fewer colours generally mean simpler setup. Very fine lines and tiny text can fill in or break up, so ask for them to be checked. If the design goes on the front and back, each placement needs its own screens. Reviewing a mockup helps confirm sizes and colours before production." },
      { title: "Order screen printing across India", body: <>Whether you are planning tees for an event or uniforms for a large team, prepare a short brief covering artwork, ink colours, garment style, sizes, quantities and delivery location. Yoode offers delivery across India. For orders under 50 pieces, compare <Link href="/dtg-printing">DTG printing</Link> or <Link href="/dtf-printing">DTF printing</Link>. You can also browse all <Link href="/services">decoration services</Link> before requesting a tailored quote.</> },
    ],
  },

  quote: {
    title: <>Get a quote for <em>screen printing.</em></>,
    text: "Tell Yoode what you want to print, how many colours it uses and how many pieces you need. We'll help you review the options.",
    photo: { src: "/tshirts-promo.webp", alt: "Three people wearing printed graphic T-shirts in a street-style shoot", pos: "50% 45%" },
    placementLabel: "Print placement",
    placementOptions: ["Front", "Back", "Left chest", "Front & back", "Multiple placements"],
  },
};
