import Link from "next/link";
import { Layers, Shirt, ShieldCheck, Truck, Palette, Users, Tag, Trophy, Sparkles } from "lucide-react";
import type { MethodPageContent } from "../types";

export const dtf: MethodPageContent = {
  spreadId: "m-dtf",
  short: "DTF",
  name: "DTF printing",
  kicker: "Direct-to-film",
  machine: "dtf",
  lightHero: false,

  trust: [
    { icon: Layers, label: "Printed film transfers" },
    { icon: Shirt, label: "Cotton, polyester & blends" },
    { icon: ShieldCheck, label: "Preview & approval" },
    { icon: Truck, label: "Delivery across India" },
  ],

  explain: {
    eyebrow: "What is DTF printing?",
    title: <>Printed on film, <em>pressed onto fabric.</em></>,
    text: "DTF (direct-to-film) printing puts your design onto a special film with a white ink layer built in. The film is coated with adhesive powder, then heat-pressed onto the garment and peeled away, leaving the print on the fabric.",
    steps: [
      ["Check the garment and artwork", "Review fabric, garment colour, print size and the required placement."],
      ["Print and press", "Print the design onto film, apply the adhesive and heat-press it onto the garment."],
      ["Peel and inspect", "Peel away the film and check the finished print against the agreed details."],
    ],
  },

  products: {
    eyebrow: "Choose your base product",
    title: <>Explore DTF printing by <em>product type.</em></>,
    text: "Because the design is transferred rather than printed into the fabric, DTF suits a wide range of garments and accessories. Material and print size are confirmed before production.",
    note: "Photos are for reference. Available products, colours and print areas are confirmed with your quote.",
    items: [
      { name: "Hoodies", text: "Bold front and back graphics on fleece, in light or dark colours.", tag: "Fleece", min: "1 piece", photo: { src: "/categories/hoodies_sweatshirts.webp", alt: "A man wearing a grey pullover hoodie beside a stack of folded sweatshirts", pos: "58% 38%", zoom: 1.7 } },
      { name: "Sports Jerseys", text: "Names, numbers and team logos on polyester performance fabric.", tag: "Polyester", min: "1 piece", photo: { src: "/images/cta_jersey_model.jpg", alt: "A player wearing a white and orange jersey with a name and number 18", pos: "50% 35%", zoom: 1.4 } },
      { name: "Caps", text: "Compact logos and marks on cap front panels, subject to cap style.", tag: "Headwear", min: "1 piece", photo: { src: "/cap.jpg", alt: "A navy baseball cap with a white letter logo on the front" } },
      { name: "Bags", text: "Logos on backpacks, totes and other fabric bags with a flat print area.", tag: "Accessories", min: "1 piece", photo: { src: "/backpack.jpg", alt: "A black backpack with a small red logo on the front" } },
    ],
  },

  why: {
    eyebrow: "Flexible by design",
    title: <>Why choose <em>DTF printing?</em></>,
    text: "Choose DTF when you need a bright, opaque print on fabrics or colours that are hard to print directly.",
    items: [
      { icon: Shirt, title: "Works across many fabrics", text: "Suitable for cotton, polyester and blends, including sportswear that DTG cannot print well." },
      { icon: Layers, title: "White ink built in", text: "A white layer sits under the colours, so designs stay bright on black and dark garments." },
      { icon: Palette, title: "Detail and full colour", text: "Handles small text, fine lines and multicolour logos when the artwork is prepared correctly." },
    ],
  },

  result: {
    eyebrow: "See the possibilities",
    title: <>From blank garment <em>to DTF print.</em></>,
    text: "See how a transferred design can look once it is pressed onto a garment. Final colour and feel depend on the fabric, file quality and press settings.",
    before: { label: "Blank garments", photo: { src: "/process/step1.webp", alt: "A plain black T-shirt, a blue T-shirt and a grey hoodie laid flat", pos: "50% 45%" } },
    after: { label: "DTF printed", photo: { src: "/Services/dtf.webp", alt: "A hand peeling the film away from a colourful printed design on a white hoodie", pos: "45% 55%" } },
  },

  video: {
    eyebrow: "Watch the printing process",
    title: <>See DTF printing <em>in action.</em></>,
    text: "See how a design goes from a digital file to a pressed print. A short video can show the film printing, the heat press and the peel.",
    steps: [
      ["Printing the film", "See the design and its white layer printed onto transfer film."],
      ["Heat pressing", "Watch the film pressed onto the garment with heat and pressure."],
      ["Peel & finish", "Understand the peel and the finished-print check."],
    ],
    poster: { src: "/Services/dtf.webp", alt: "", pos: "50% 45%" },
    caption: "From film to finished print",
  },

  placements: {
    eyebrow: "Where should your artwork go?",
    title: <>Choose your DTF <em>print placement.</em></>,
    text: "DTF transfers can go on most flat areas of a garment or accessory. Share your idea and Yoode will check the available print area.",
    note: "Available print areas depend on product style, size and seams. Confirm placement before quoting.",
    items: [
      { name: "Front print", text: "A strong choice for team names, numbers and statement logos.", photo: { src: "/images/cta_jersey_model.jpg", alt: "The front of a printed sports jersey", pos: "50% 30%", zoom: 1.8 }, area: [33, 24, 34, 32] },
      { name: "Back print", text: "Room for large graphics, names and numbers or event artwork.", photo: { src: "/polo/navy-back.jpg", alt: "The back of a navy polo" }, area: [32, 30, 36, 30] },
      { name: "Cap front", text: "A compact logo on the front panel of a structured or soft cap.", photo: { src: "/studio/cap-front.jpg", alt: "The front panel of a cream cap", pos: "50% 45%", zoom: 1.6 }, area: [34, 27, 32, 22] },
    ],
  },

  band: {
    eyebrow: "Your logo. Any fabric.",
    title: <>Have artwork <em>ready for printing?</em></>,
    text: "Put your design on hoodies, jerseys, caps and bags. Tell Yoode what you want to print and receive guidance on the right DTF options.",
    cta: "Get a DTF quote",
  },

  tips: {
    eyebrow: "Before you send your file",
    title: <>What works best for <em>DTF printing?</em></>,
    text: "A clean file and a confirmed product make the transfer process straightforward. Check these essentials before requesting a quote.",
    items: [
      "High-resolution artwork or vector file at the intended print size",
      "Transparent background, with no unwanted boxes or halos",
      "Product material confirmed, especially for heat-sensitive fabrics",
      "Confirmed print size, position and product colour",
    ],
    aside: {
      eyebrow: "Cotton vs polyester",
      title: <>Does the fabric <em>affect the print?</em></>,
      text: "DTF works on both, which is one of its strengths. Press temperature and time are adjusted for the material, and some synthetic or coated fabrics need a test first.",
      pair: [
        { label: "Cotton tee", photo: { src: "/womens-tshirt.webp", alt: "Cotton: a plain green T-shirt on a hanger", pos: "50% 45%" } },
        { label: "Polyester jersey", photo: { src: "/images/cta_jersey_rack.jpg", alt: "Polyester: a white sports jersey on a rail", pos: "50% 30%", zoom: 1.6 } },
      ],
      note: "Colour accuracy can vary between the digital preview and the finished transfer.",
    },
  },

  steps: {
    title: <>How to order DTF printing <em>with Yoode.</em></>,
    items: [
      ["Choose your product", "Share the product type, colour, size breakdown and required quantity."],
      ["Send your artwork", "Upload your logo or design with your preferred print size and placement."],
      ["Review & approve", "Check the design preview, product details and quote before approving."],
      ["Printing & delivery", "Yoode prepares the approved order and arranges delivery as agreed."],
    ],
  },

  compare: {
    title: <>DTF vs DTG vs <em>screen printing.</em></>,
    text: "Not every design needs the same printing process. Here is a practical starting point for choosing among common methods.",
    cols: ["DTF printing", "DTG printing", "Screen printing"],
    rows: [
      ["How it works", "Design printed on film, then heat-pressed", "Ink printed directly on the garment", "Ink pushed through a prepared screen"],
      ["Artwork fit", "Logos, text and detailed multicolour designs", "Photos, gradients, detailed multicolour graphics", "Solid-colour designs, repeat production"],
      ["Fabric suitability", "Cotton, polyester and many blends", "Usually best on cotton-rich items", "Depends on ink and garment combination"],
      ["Typical order fit", "Single pieces to mid-size runs", "Single designs and smaller runs", "Often efficient at higher quantities"],
      ["Surface feel", "Smooth layer that sits on the fabric", "Often softer on suitable fabrics", "Varies with ink and coverage"],
    ],
    note: "This is a general guide, not a fixed performance or pricing guarantee. The best method depends on the exact order.",
  },

  useCases: {
    title: <>Where DTF-printed products <em>work best.</em></>,
    text: "From sports teams to brand merchandise, DTF is useful when the fabric or colour rules other methods out.",
    items: [
      { icon: Trophy, title: "Sports teams", text: "Names, numbers and crests on polyester jerseys and training wear." },
      { icon: Tag, title: "Brand merchandise", text: "Logos on hoodies, caps and bags across a mix of materials." },
      { icon: Users, title: "Staff & events", text: "Consistent branding across different garment types in one order." },
      { icon: Sparkles, title: "Small batches", text: "Short runs and one-off pieces without setting up screens." },
    ],
  },

  bulk: {
    title: <>Need DTF printing <em>in bulk?</em></>,
    text: "Planning team kits or merchandise? Share your products, artwork and quantity to receive an order-specific quotation from Yoode.",
  },

  faqs: {
    text: "Practical answers about DTF fabrics, design files, durability, pricing and delivery.",
    items: [
      ["What is DTF printing and how does it work?", "DTF printing prints your design onto a transfer film with a white ink layer, coats it with adhesive powder and heat-presses it onto the product. The film is then peeled away, leaving the print on the fabric."],
      ["Which fabrics can be DTF printed?", "DTF works on cotton, polyester and many blends. Some heat-sensitive, coated or very textured materials may need a test first. Yoode can review the product and confirm suitability."],
      ["Can DTF print on black or dark garments?", "Yes. A white ink layer is printed under the colours, so designs stay opaque and bright on dark fabrics."],
      ["Can I order just one DTF-printed piece?", "Yoode supports custom enquiries without a minimum order. Share your chosen product and design to confirm available DTF options and pricing."],
      ["What design files should I send for DTF printing?", "A high-resolution PNG with a transparent background is a useful starting point. Vector files such as SVG, PDF or AI may also be reviewed."],
      ["How does a DTF print feel compared with DTG?", "A DTF print sits on the surface as a thin, smooth layer, so it is usually more noticeable to the touch than DTG on cotton. Large solid areas feel heavier than small logos."],
      ["How much does DTF printing cost?", "Pricing depends on the product, print size, artwork, quantity and delivery location. Share your brief with Yoode for an order-specific quote."],
      ["How long does DTF printing and delivery take?", "The timeline depends on product availability, artwork approval, quantity and destination. Yoode will confirm the estimated schedule before production."],
    ],
  },

  learn: {
    eyebrow: "DTF printing by Yoode",
    title: <>Direct-to-film printing for <em>custom apparel.</em></>,
    text: "Helpful information before choosing DTF printing for your next order.",
    articles: [
      { title: "DTF printing for logos on any fabric", body: "DTF printing is a practical option when your design needs to go on a fabric that is difficult to print directly, such as polyester sportswear, or on a dark garment where colours must stay bright. The design is printed onto film first, so the same transfer process works across hoodies, jerseys, caps and bags. At Yoode, start with the products you want to brand, their colours and the number of pieces you need. The team can review your artwork and recommend a suitable print size for each item." },
      { title: "Choosing products for DTF transfers", body: "Most flat fabric areas can take a DTF transfer, but materials react differently to heat. Cotton and polyester generally press well, while some coated, nylon or very textured products may need a test or a different method. Seams, zips and pockets also limit where a print can sit. Share the exact product with Yoode and ask for a material check before your order is approved, especially if you are mixing several product types in one order." },
      { title: "Preparing artwork for direct-to-film printing", body: "Send a clear file that matches the intended print size. A transparent PNG or a vector file avoids unwanted background boxes around your logo. Very thin lines, tiny text and soft semi-transparent edges can be harder to transfer cleanly, so ask for them to be checked. If the same logo is going on a cap and a hoodie back, it may need different sizes. Reviewing a mockup helps confirm the layout before production." },
      { title: "Order custom DTF printing across India", body: <>Whether you need DTF printing for one jersey or a full team order, prepare a short brief covering artwork, product type, colour, sizes, quantities and delivery location. Yoode offers delivery across India. If your design is a photograph on a cotton tee, compare <Link href="/dtg-printing">DTG printing</Link>; for large runs of simple designs, look at <Link href="/screen-printing">screen printing</Link>. You can also browse all <Link href="/services">decoration services</Link> before requesting a tailored quote.</> },
    ],
  },

  quote: {
    title: <>Get a quote for <em>DTF printing.</em></>,
    text: "Tell Yoode what you want to print, which products it goes on and how many pieces you need. We'll help you review the options.",
    photo: { src: "/categories/custom_sports.webp", alt: "A mannequin in a printed blue sports jersey and shorts in a stadium", pos: "50% 40%" },
    placementLabel: "Print placement",
    placementOptions: ["Front", "Back", "Left chest", "Cap front", "Multiple placements"],
  },
};
