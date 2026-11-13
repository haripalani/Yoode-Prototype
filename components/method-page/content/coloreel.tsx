import Link from "next/link";
import { Palette, Scissors, ShieldCheck, Truck, Sparkles, Award, Tag, Gift, Briefcase } from "lucide-react";
import type { MethodPageContent } from "../types";

export const coloreel: MethodPageContent = {
  spreadId: "m-coloreel",
  short: "Coloreel",
  name: "Coloreel embroidery",
  kicker: "Coloreel embroidery",
  machine: "coloreel",
  lightHero: true,

  trust: [
    { icon: Palette, label: "Gradients in thread" },
    { icon: Scissors, label: "One thread, dyed as it stitches" },
    { icon: ShieldCheck, label: "Preview & approval" },
    { icon: Truck, label: "Delivery across India" },
  ],

  explain: {
    eyebrow: "What is Coloreel embroidery?",
    title: <>One thread, <em>coloured as it stitches.</em></>,
    text: "Coloreel is a unit fitted to an embroidery machine that dyes a single white thread on the fly. The colour changes along the thread as it feeds, so a logo can blend from one shade into another without switching threads.",
    steps: [
      ["Check the garment and artwork", "Review fabric, logo size, colours and gradients, and the required placement."],
      ["Digitise, colour and stitch", "Create the stitch file with colour data; the thread is dyed as the machine sews."],
      ["Trim and inspect", "Trim loose threads and backing, then check the finished piece against the order."],
    ],
  },

  products: {
    eyebrow: "Choose your base garment",
    title: <>Explore Coloreel by <em>apparel type.</em></>,
    text: "Coloreel stitches like standard embroidery, so it suits the same sturdy fabrics. Fabric, logo size and colours are confirmed before production.",
    note: "Photos are for reference. Available garments, colours and embroidery areas are confirmed with your quote.",
    items: [
      { name: "Caps", text: "Gradient logos and multicolour marks on the front panel of twill caps.", tag: "Twill", min: "1 piece", photo: { src: "/categories/accessories_group.webp", alt: "A navy cap with a leather patch, laid flat", pos: "90% 52%", zoom: 2.6 } },
      { name: "Polos", text: "Colour-rich chest logos on pique polos for teams and brands.", tag: "Pique", min: "1 piece", photo: { src: "/categories/premium_polos.webp", alt: "Folded navy pique polos on a wooden shelf" } },
      { name: "Jackets", text: "Larger blended designs on denim, canvas and heavier jackets.", tag: "Outerwear", min: "1 piece", photo: { src: "/denim-jacket.webp", alt: "A blue denim jacket on a hanger", pos: "50% 45%", zoom: 1.3 } },
      { name: "Hoodies & Sweatshirts", text: "Stitched artwork with shading on fleece garments.", tag: "Fleece", min: "1 piece", photo: { src: "/categories/hoodies_sweatshirts.webp", alt: "A man wearing a grey pullover hoodie", pos: "58% 38%", zoom: 1.7 } },
    ],
  },

  why: {
    eyebrow: "Colour without limits",
    title: <>Why choose <em>Coloreel?</em></>,
    text: "Choose Coloreel when your logo has gradients or more colours than standard embroidery can handle well.",
    items: [
      { icon: Palette, title: "Gradients in embroidery", text: "Smooth colour transitions that standard embroidery cannot stitch with fixed thread colours." },
      { icon: Sparkles, title: "No colour limit", text: "The thread is dyed as it feeds, so the design is not limited by the machine's thread cones." },
      { icon: Award, title: "Still real embroidery", text: "The raised, textured feel of stitched thread, with the same durability as standard embroidery." },
    ],
  },

  result: {
    eyebrow: "See the possibilities",
    title: <>From plain cap <em>to coloured thread.</em></>,
    text: "A white thread is dyed along its length as it feeds into the machine. Final colour depends on the fabric, thread and artwork.",
    before: { label: "Plain cap", photo: { src: "/studio/cap-side.jpg", alt: "A plain cream cap with no logo, seen from the side" } },
    after: { label: "Dyed thread", photo: { src: "/Services/coloreel.webp", alt: "Thread running through a Coloreel unit, dyed in a blend of blue, pink and orange", pos: "35% 70%", zoom: 1.5 } },
  },

  video: {
    eyebrow: "Watch the stitching process",
    title: <>See Coloreel <em>in action.</em></>,
    text: "See how a single white thread changes colour as it stitches. A short video can show the dyeing unit, the stitching and the finished logo.",
    steps: [
      ["Dyeing the thread", "See the white thread coloured inside the Coloreel unit."],
      ["Machine stitching", "Watch the colour shift along the design as it is sewn."],
      ["Trimming & finishing", "Understand how the finished piece is cleaned up and checked."],
    ],
    poster: { src: "/Services/coloreel.webp", alt: "", pos: "50% 40%" },
    caption: "From white thread to coloured logo",
  },

  placements: {
    eyebrow: "Where should your logo go?",
    title: <>Choose your <em>Coloreel placement.</em></>,
    text: "Coloreel uses the same positions as standard embroidery. Share your idea and Yoode will check the available area.",
    note: "Embroidery areas depend on garment style, size and hoop access. Confirm placement before quoting.",
    items: [
      { name: "Cap front", text: "A gradient logo centred on the front panel of a cap.", photo: { src: "/studio/cap-front.jpg", alt: "The front panel of a cream cap" }, area: [38, 28, 24, 18] },
      { name: "Left chest", text: "A colour-rich logo in the standard chest position.", photo: { src: "/polo/navy-front.jpg", alt: "The front of a navy polo" }, area: [56, 32, 13, 9] },
      { name: "Upper back", text: "A wider blended design across the shoulders.", photo: { src: "/polo/polo_navy_back_1792740440615.jpg", alt: "The back of a navy polo" }, area: [34, 22, 32, 12] },
    ],
  },

  band: {
    eyebrow: "Your colours. In thread.",
    title: <>Have a colourful logo <em>to stitch?</em></>,
    text: "Bring gradients and full-colour logos into embroidery. Tell Yoode what you want stitched and receive guidance on the right Coloreel options.",
    cta: "Get a Coloreel quote",
  },

  tips: {
    eyebrow: "Before you send your file",
    title: <>What works best for <em>Coloreel?</em></>,
    text: "Coloreel handles colour freely, but the logo still has to suit thread. Check these essentials before requesting a quote.",
    items: [
      "Vector or high-resolution logo with gradients clearly defined",
      "Shapes and text large enough to stitch cleanly",
      "Colour references for any brand colours that must match",
      "Confirmed logo size, position and garment colour",
    ],
    aside: {
      eyebrow: "Standard vs Coloreel",
      title: <>When does Coloreel <em>make a difference?</em></>,
      text: "Standard embroidery switches between fixed thread colours, which suits solid-colour logos. Coloreel changes colour along one thread, which suits gradients and blended shading.",
      pair: [
        { label: "Standard threads", photo: { src: "/Services/embroidery.webp", alt: "Standard embroidery: a crest stitched in separate solid thread colours", pos: "45% 70%", zoom: 1.8 } },
        { label: "Coloreel unit", photo: { src: "/Services/coloreel.webp", alt: "Coloreel: the dyeing unit that colours one thread as it feeds", pos: "48% 35%", zoom: 2.5 } },
      ],
      note: "Thread colour can look different from a screen preview; ask for a sample check on brand colours.",
    },
  },

  steps: {
    title: <>How to order Coloreel <em>with Yoode.</em></>,
    items: [
      ["Choose your garment", "Share the apparel type, colour, size breakdown and required quantity."],
      ["Send your logo", "Upload your logo with your preferred size, placement and colour references."],
      ["Review & approve", "Check the stitch preview, garment details and quote before approving."],
      ["Stitching & delivery", "Yoode prepares the approved order and arranges delivery as agreed."],
    ],
  },

  compare: {
    title: <>Coloreel vs embroidery vs <em>DTF printing.</em></>,
    text: "Not every colourful logo needs the same method. Here is a practical starting point for choosing among common options.",
    cols: ["Coloreel embroidery", "Embroidery", "DTF printing"],
    rows: [
      ["How it works", "One white thread dyed on the machine as it stitches", "Coloured threads stitched into the fabric", "Design printed on film, then heat-pressed"],
      ["Artwork fit", "Logos with gradients or many colours", "Logos and monograms in solid colours", "Detailed multicolour logos and text"],
      ["Fabric suitability", "Pique, twill, denim, fleece", "Pique, twill, denim, fleece", "Cotton, polyester and many blends"],
      ["Typical order fit", "Premium logos and small runs", "Uniforms, caps and corporate wear", "Single pieces to mid-size runs"],
      ["Surface feel", "Raised stitches with blended colour", "Raised, textured stitches", "Smooth layer on the surface"],
    ],
    note: "This is a general guide, not a fixed performance or pricing guarantee. The best method depends on the exact order.",
  },

  useCases: {
    title: <>Where Coloreel <em>works best.</em></>,
    text: "From brand caps to premium gifts, Coloreel is useful when a logo's colours matter.",
    items: [
      { icon: Tag, title: "Colourful brand logos", text: "Gradient marks that would lose their character in solid thread." },
      { icon: Sparkles, title: "Premium merchandise", text: "Caps and jackets with a stitched finish that stands out." },
      { icon: Gift, title: "Gifting & launches", text: "Limited pieces for events, launches and special occasions." },
      { icon: Briefcase, title: "Corporate wear", text: "Polos and outerwear with full-colour logos in thread." },
    ],
  },

  bulk: {
    title: <>Need Coloreel <em>in bulk?</em></>,
    text: "Planning branded caps or polos? Share your garments, logo and quantity to receive an order-specific quotation from Yoode.",
  },

  faqs: {
    text: "Practical answers about Coloreel colours, fabrics, logo files, pricing and delivery.",
    items: [
      ["What is Coloreel embroidery and how does it work?", "Coloreel is a unit added to an embroidery machine. It dyes a single white thread as it feeds into the needle, so colours can change continuously along the stitches."],
      ["How is Coloreel different from standard embroidery?", "Standard embroidery switches between separate thread cones, one colour at a time. Coloreel colours one thread on demand, which makes gradients and many-colour designs possible."],
      ["Which fabrics are suitable for Coloreel?", "The same fabrics as standard embroidery: pique, twill, denim and fleece usually work well. Yoode can review the garment and confirm suitability."],
      ["Can I order just one Coloreel-embroidered piece?", "Yoode supports custom enquiries without a minimum order. Share your chosen garment and logo to confirm available Coloreel options and pricing."],
      ["What logo files should I send for Coloreel?", "A vector file (AI, SVG, PDF) is ideal. A clear high-resolution PNG can also be reviewed for digitising."],
      ["Can Coloreel match my brand colours exactly?", "Colours are matched as closely as possible, but thread can look different from a screen or print. Share colour references and ask for a sample check if exact matching matters."],
      ["How much does Coloreel embroidery cost?", "Pricing depends on the garment, logo size, stitch count, quantity and delivery location. Share your brief with Yoode for an order-specific quote."],
      ["How long does Coloreel embroidery and delivery take?", "The timeline depends on garment availability, logo approval, quantity and destination. Yoode will confirm the estimated schedule before production."],
    ],
  },

  learn: {
    eyebrow: "Coloreel embroidery by Yoode",
    title: <>Coloreel embroidery for <em>colourful logos.</em></>,
    text: "Helpful information before choosing Coloreel for your next apparel order.",
    articles: [
      { title: "Gradients and full colour in embroidery", body: "Standard embroidery works with a set of fixed thread colours, so gradients and soft shading are hard to reproduce. Coloreel changes this by dyeing a single white thread as it stitches, letting colour shift smoothly along the design. The result is still real embroidery, with raised thread and a textured finish. At Yoode, begin with your logo, the garments you want to brand and the number of pieces you need, and the team can advise whether Coloreel suits the design." },
      { title: "Choosing garments for Coloreel", body: "Coloreel stitches like standard embroidery, so it needs fabrics that can hold stitches without puckering. Twill caps, pique polos, denim and fleece are usual choices. Garment colour matters too: a gradient can look different on a dark base than on a light one. Share the exact garment and colour with Yoode and ask for a review before your order is approved." },
      { title: "Preparing a logo for Coloreel", body: "Start with a vector logo where gradients and colour stops are clearly defined. Thread is not ink, so very fine detail and tiny text still need enough size to stitch cleanly. If brand colours must match, share references such as Pantone codes. The logo is digitised into a stitch file with colour data, and reviewing a preview helps confirm placement, size and colours before production." },
      { title: "Order Coloreel embroidery across India", body: <>Whether you need a single gradient-logo cap or a branded set of polos, prepare a short brief covering logo, garment style, colour, sizes, quantities and delivery location. Yoode offers delivery across India. If your logo uses a few solid colours, standard <Link href="/embroidery">embroidery</Link> may be the simpler choice; for printed full-colour logos, compare <Link href="/dtf-printing">DTF printing</Link>. You can also browse all <Link href="/services">decoration services</Link> before requesting a tailored quote.</> },
    ],
  },

  quote: {
    title: <>Get a quote for <em>Coloreel embroidery.</em></>,
    text: "Tell Yoode what you want stitched, where it should go and how many pieces you need. We'll help you review the options.",
    photo: { src: "/polo/women-navy-model.jpg", alt: "A woman wearing a navy zip polo and grey trousers", pos: "50% 40%" },
    placementLabel: "Embroidery placement",
    placementOptions: ["Cap front", "Left chest", "Upper back", "Multiple placements"],
  },
};
