import Link from "next/link";
import { Scissors, Award, ShieldCheck, Truck, Sparkles, Briefcase, Users, Gift, Shirt } from "lucide-react";
import type { MethodPageContent } from "../types";

export const embroidery: MethodPageContent = {
  spreadId: "m-embroidery",
  short: "Embroidery",
  name: "Embroidery",
  kicker: "Machine embroidery",
  machine: "embroidery",
  lightHero: true,

  trust: [
    { icon: Scissors, label: "Stitched in thread" },
    { icon: Award, label: "Logos & monograms" },
    { icon: ShieldCheck, label: "Preview & approval" },
    { icon: Truck, label: "Delivery across India" },
  ],

  explain: {
    eyebrow: "What is embroidery?",
    title: <>Your logo, stitched <em>into the fabric.</em></>,
    text: "Machine embroidery turns your artwork into a stitch file, then sews it into the garment with thread. Nothing is printed; the design becomes part of the cloth, with a raised, textured finish.",
    steps: [
      ["Check the garment and artwork", "Review fabric, logo size, thread colours and the required placement."],
      ["Digitise and stitch", "Convert the artwork into a stitch file and sew it with the embroidery machine."],
      ["Trim and inspect", "Trim loose threads and backing, then check the finished piece against the order."],
    ],
  },

  products: {
    eyebrow: "Choose your base garment",
    title: <>Explore embroidery by <em>apparel type.</em></>,
    text: "Embroidery suits sturdy fabrics that can hold stitches without puckering. Fabric, logo size and thread colours are confirmed before production.",
    note: "Photos are for reference. Available garments, colours and embroidery areas are confirmed with your quote.",
    items: [
      { name: "Polos", text: "The classic choice for a neat left-chest logo on pique cotton.", tag: "Pique", min: "1 piece", photo: { src: "/mens-polo.webp", alt: "A navy polo with a small logo on the chest" } },
      { name: "Caps", text: "Raised logos and lettering on the front panel of twill caps.", tag: "Twill", min: "1 piece", photo: { src: "/cap.jpg", alt: "A navy cap with a white embroidered letter on the front", pos: "45% 50%", zoom: 1.2 } },
      { name: "Jackets", text: "Chest logos and back designs on denim, canvas and heavier jackets.", tag: "Outerwear", min: "1 piece", photo: { src: "/denim-jacket.webp", alt: "A blue denim jacket on a hanger" } },
      { name: "Hoodies & Sweatshirts", text: "Tonal or contrast logos on fleece for staff wear and gifting.", tag: "Fleece", min: "1 piece", photo: { src: "/categories/corporate_gifting.webp", alt: "A charcoal hoodie with a gold stitched logo in a gift box", pos: "30% 75%", zoom: 2 } },
    ],
  },

  why: {
    eyebrow: "Made to last",
    title: <>Why choose <em>embroidery?</em></>,
    text: "Choose embroidery when you want a logo that looks premium, feels textured and lasts as long as the garment.",
    items: [
      { icon: Award, title: "A premium finish", text: "Raised thread gives logos a professional look suited to uniforms and corporate wear." },
      { icon: ShieldCheck, title: "Built to last", text: "Stitches do not crack or peel, and the design typically lasts as long as the garment." },
      { icon: Shirt, title: "Made for sturdy fabrics", text: "Works well on pique, twill, denim and fleece that can hold stitches cleanly." },
    ],
  },

  result: {
    eyebrow: "See the possibilities",
    title: <>From plain polo <em>to embroidered logo.</em></>,
    text: "See how a logo can look once it is stitched into a garment. Final detail depends on logo size, stitch count and the fabric.",
    before: { label: "Plain polo", photo: { src: "/polo/navy-front.jpg", alt: "A plain navy polo with no logo", pos: "50% 35%" } },
    after: { label: "Embroidered", photo: { src: "/Services/embroidery.webp", alt: "A multicolour crest being stitched onto navy fabric on an embroidery machine", pos: "50% 70%" } },
  },

  video: {
    eyebrow: "Watch the stitching process",
    title: <>See embroidery <em>in action.</em></>,
    text: "See how a logo goes from a digital file to finished stitches. A short video can show hooping, stitching and finishing.",
    steps: [
      ["Hooping the garment", "See the fabric and backing held tight in the embroidery hoop."],
      ["Machine stitching", "Watch the needles lay down each thread colour in turn."],
      ["Trimming & finishing", "Understand how loose threads and backing are cleaned up."],
    ],
    poster: { src: "/Services/embroidery.webp", alt: "", pos: "50% 35%" },
    caption: "From stitch file to finished logo",
  },

  placements: {
    eyebrow: "Where should your logo go?",
    title: <>Choose your <em>embroidery placement.</em></>,
    text: "Embroidery is usually best for compact logos in visible, flat positions. Share your idea and Yoode will check the available area.",
    note: "Embroidery areas depend on garment style, size and hoop access. Confirm placement before quoting.",
    items: [
      { name: "Left chest", text: "The standard spot for company logos on polos, shirts and jackets.", photo: { src: "/polo/green-front.jpg", alt: "The front of a green polo" }, area: [56, 32, 13, 9] },
      { name: "Cap front", text: "A centred logo or short word on the front panel of a cap.", photo: { src: "/studio/cap-front.jpg", alt: "A cream cap with a tonal stitched wave logo on the front", pos: "50% 45%", zoom: 1.5 }, area: [40, 32, 20, 15] },
      { name: "Upper back", text: "A name, tagline or second logo across the shoulders.", photo: { src: "/polo/navy-back.jpg", alt: "The back of a navy polo", pos: "50% 30%" }, area: [34, 22, 32, 12] },
    ],
  },

  band: {
    eyebrow: "Your logo. In thread.",
    title: <>Have a logo <em>ready for stitching?</em></>,
    text: "Turn your logo into uniforms, caps and gifts that last. Tell Yoode what you want embroidered and receive guidance on the right options.",
    cta: "Get an embroidery quote",
  },

  tips: {
    eyebrow: "Before you send your file",
    title: <>What works best for <em>embroidery?</em></>,
    text: "Good embroidery starts with a logo that suits thread and a fabric that can hold it. Check these essentials before requesting a quote.",
    items: [
      "Vector or high-resolution logo with clear shapes and edges",
      "Text large enough to stitch cleanly, with no hairline details",
      "A limited set of thread colours, matched where needed",
      "Confirmed logo size, position and garment colour",
    ],
    aside: {
      eyebrow: "Stitch count & small text",
      title: <>Does logo detail <em>affect the stitching?</em></>,
      text: "Yes. Bold, simple shapes stitch crisply at small sizes. Detailed crests, thin lines and very small lettering need more stitches and more space, and may need simplifying.",
      pair: [
        { label: "Bold, simple mark", photo: { src: "/cap.jpg", alt: "Bold mark: a single embroidered letter on a cap", pos: "50% 45%", zoom: 2.2 } },
        { label: "Detailed crest", photo: { src: "/Services/embroidery.webp", alt: "Detailed crest: a multicolour embroidered badge with fine lettering", pos: "50% 75%", zoom: 2.2 } },
      ],
      note: "Thread colours are matched as closely as possible; exact brand colours can vary slightly.",
    },
  },

  steps: {
    title: <>How to order embroidery <em>with Yoode.</em></>,
    items: [
      ["Choose your garment", "Share the apparel type, colour, size breakdown and required quantity."],
      ["Send your logo", "Upload your logo with your preferred size, placement and thread colours."],
      ["Review & approve", "Check the stitch preview, garment details and quote before approving."],
      ["Stitching & delivery", "Yoode prepares the approved order and arranges delivery as agreed."],
    ],
  },

  compare: {
    title: <>Embroidery vs Coloreel vs <em>DTF printing.</em></>,
    text: "Not every logo needs the same decoration method. Here is a practical starting point for choosing among common options.",
    cols: ["Embroidery", "Coloreel embroidery", "DTF printing"],
    rows: [
      ["How it works", "Coloured threads stitched into the fabric", "One white thread dyed on the machine as it stitches", "Design printed on film, then heat-pressed"],
      ["Artwork fit", "Logos and monograms in solid colours", "Logos with gradients or many colours", "Detailed multicolour logos and text"],
      ["Fabric suitability", "Pique, twill, denim, fleece", "Similar to standard embroidery", "Cotton, polyester and many blends"],
      ["Typical order fit", "Uniforms, caps and corporate wear", "Premium logos and small runs", "Single pieces to mid-size runs"],
      ["Surface feel", "Raised, textured stitches", "Raised stitches with blended colour", "Smooth layer on the surface"],
    ],
    note: "This is a general guide, not a fixed performance or pricing guarantee. The best method depends on the exact order.",
  },

  useCases: {
    title: <>Where embroidered apparel <em>works best.</em></>,
    text: "From uniforms to gifts, embroidery is useful when a logo should look premium and last.",
    items: [
      { icon: Briefcase, title: "Corporate uniforms", text: "Polos, shirts and jackets with a neat chest logo for everyday wear." },
      { icon: Users, title: "Teams & clubs", text: "Caps, jackets and training wear with crests that hold up to use." },
      { icon: Gift, title: "Corporate gifting", text: "Hoodies and caps with tonal logos for welcome kits and events." },
      { icon: Sparkles, title: "Brand merchandise", text: "Embroidered caps and outerwear for brands that want texture." },
    ],
  },

  bulk: {
    title: <>Need embroidery <em>in bulk?</em></>,
    text: "Planning uniforms or staff wear? Share your garments, logo and quantity to receive an order-specific quotation from Yoode.",
  },

  faqs: {
    text: "Practical answers about embroidery fabrics, logo files, thread colours, pricing and delivery.",
    items: [
      ["What is machine embroidery and how does it work?", "Your logo is converted into a stitch file (digitising), then an embroidery machine sews it into the garment with thread, one colour at a time."],
      ["Which fabrics are suitable for embroidery?", "Pique, twill, denim, canvas and fleece usually embroider well. Very thin or stretchy fabrics may pucker; Yoode can review the garment and confirm suitability."],
      ["What is digitising and why is it needed?", "Digitising turns your artwork into stitch instructions: direction, density and order. It is what lets the machine reproduce your logo in thread."],
      ["Can I order just one embroidered piece?", "Yoode supports custom enquiries without a minimum order. Share your chosen garment and logo to confirm available embroidery options and pricing."],
      ["What logo files should I send for embroidery?", "A vector file (AI, SVG, PDF) is ideal. A clear high-resolution PNG can also be reviewed for digitising."],
      ["Can embroidery reproduce small text and fine detail?", "Up to a point. Very small lettering and hairline details may not stitch cleanly, so they may need enlarging or simplifying. Yoode will flag this during review."],
      ["How much does embroidery cost?", "Pricing depends on the garment, logo size, stitch count, quantity and delivery location. Share your brief with Yoode for an order-specific quote."],
      ["How long does embroidery and delivery take?", "The timeline depends on garment availability, logo approval, quantity and destination. Yoode will confirm the estimated schedule before production."],
    ],
  },

  learn: {
    eyebrow: "Embroidery by Yoode",
    title: <>Machine embroidery for <em>custom apparel.</em></>,
    text: "Helpful information before choosing embroidery for your next apparel order.",
    articles: [
      { title: "Embroidery for logos that last", body: "Embroidery is a common choice for uniforms, caps and corporate wear because the logo is stitched into the fabric rather than printed on top. The raised thread gives a textured, professional finish, and stitches do not crack or peel the way some prints can. At Yoode, begin with the garments you want to brand, their colours and the number of pieces you need. The team can review your logo, recommend a size and placement, and suggest thread colours." },
      { title: "Choosing fabrics for embroidery", body: "Embroidery needs a fabric that can hold stitches without puckering. Pique polos, twill caps, denim and fleece usually work well, while thin, stretchy or very lightweight fabrics may need extra backing or a different method. Garment construction matters too: seams, buttons and pockets limit where the hoop can reach. Share the exact garment with Yoode and ask for a fabric check before your order is approved." },
      { title: "Preparing a logo for digitising", body: "Every embroidery job starts with digitising, which turns your logo into a stitch file. A vector logo gives the cleanest starting point. Thin lines, gradients and very small lettering do not translate directly into thread, so they may be adjusted or enlarged. The same logo may need a separate stitch file for a cap and a polo because of size and fabric. Reviewing a stitch preview helps confirm the result before production." },
      { title: "Order custom embroidery across India", body: <>Whether you need one embroidered cap or a full set of staff uniforms, prepare a short brief covering logo, garment style, colour, sizes, quantities and delivery location. Yoode offers delivery across India. If your logo has gradients or many colours, see <Link href="/coloreel-embroidery">Coloreel embroidery</Link>; for printed alternatives on mixed fabrics, compare <Link href="/dtf-printing">DTF printing</Link>. You can also browse all <Link href="/services">decoration services</Link> before requesting a tailored quote.</> },
    ],
  },

  quote: {
    title: <>Get a quote for <em>embroidery.</em></>,
    text: "Tell Yoode what you want embroidered, where it should go and how many pieces you need. We'll help you review the options.",
    photo: { src: "/polo/navy-model.jpg", alt: "A man wearing a navy zip polo and grey trousers", pos: "50% 40%" },
    placementLabel: "Embroidery placement",
    placementOptions: ["Left chest", "Cap front", "Upper back", "Sleeve", "Multiple placements"],
  },
};
