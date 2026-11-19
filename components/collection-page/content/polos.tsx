import Link from "next/link";
import { Wind, Palette, Ruler, MousePointerClick, Timer } from "lucide-react";
import type { CollectionPageContent } from "../types";
import { CDN, SHOP, CUSTOM_TRUST, METHOD, STEP_PHOTOS, moreTiles } from "./shared";

const P = `${SHOP}/collections/custom-polos/products`;

export const polos: CollectionPageContent = {
  short: "polo",
  ghost: "POLOS",
  whatsapp: "I would like to create custom polo shirts",

  hero: {
    eyebrow: "Custom embroidered polos",
    title: <>Custom polo shirts with <em>logo</em> for teams & businesses</>,
    text: "Premium company polos with custom embroidery, tailored fits and quality fabrics for businesses, teams, events and staff uniforms.",
    primary: "Pick your polo",
    rating: { score: "4.9", label: "250+ Google reviews" },
    collage: [
      { src: "/polo/navy-model.jpg", alt: "Model wearing a navy custom polo", pos: "50% 25%" },
      { src: "/polo/navy-collar.jpg", alt: "Polo collar and placket detail" },
      { src: "/polo/women-navy-model.jpg", alt: "Women's navy polo", pos: "50% 25%" },
    ],
    chip: "Logo embroidered on the left chest",
  },

  trust: CUSTOM_TRUST,

  shop: {
    eyebrow: "Shop custom embroidered polos",
    title: <>Pick your <em>polo</em></>,
    text: "Cotton and blend polos for men and women, in up to 13 colours. Add your logo by embroidery or DTF print.",
    items: [
      { name: "Men's Cotton Polo", price: "₹780", was: "₹1,099", badges: ["Sale"], colours: 15, rating: "4.6", href: `${P}/men-s-cotton-polo`, photo: { src: `${CDN}/custom-mens-classic-polo-wine-1.webp`, alt: "Men's cotton polo in wine" }, hover: { src: `${CDN}/custom-mens-classic-polo-wine-2.webp`, alt: "Men's cotton polo, back" } },
      { name: "Men's Cotton Polo With Tipping", price: "₹780", was: "₹1,099", badges: ["Sale"], colours: 11, rating: "4.4", href: `${P}/men-s-cotton-polo-with-tipping`, photo: { src: `${CDN}/men-solid-polo-with-tipping-color-black-1.webp`, alt: "Men's polo with tipping in black" }, hover: { src: `${CDN}/men-solid-polo-with-tipping-color-black-2.webp`, alt: "Men's polo with tipping, back" } },
      { name: "Women's Cotton Polo", price: "₹680", was: "₹899", badges: ["Sale"], colours: 11, href: `${P}/women-s-cotton-polo`, photo: { src: `${CDN}/custom-womens-classic-polo-white-1.webp`, alt: "Women's cotton polo in white" }, hover: { src: `${CDN}/custom-womens-classic-polo-white-2.webp`, alt: "Women's cotton polo, back" } },
      { name: "Women's Cotton Zipper Polo", price: "₹690", was: "₹999", badges: ["Sale"], colours: 11, href: `${P}/women-s-cotton-zipper-polo`, photo: { src: `${CDN}/custom-womens-classic-zipper-polo-wine-2.webp`, alt: "Women's zipper polo in wine" }, hover: { src: `${CDN}/custom-womens-classic-zipper-polo-wine-1.webp`, alt: "Women's zipper polo" } },
      { name: "Contrast Trim Polo – Black-White", price: "₹720", was: "₹999", badges: ["Sale"], href: `${P}/contrast-trim-polo-black-white`, photo: { src: `${CDN}/ContrastTrimPolo.webp`, alt: "Black polo with white contrast trim" } },
      { name: "Two-Tone Full Sleeve Zipper Polo", price: "₹1,060", was: "₹1,499", badges: ["Sale"], href: `${P}/two-tone-full-sleeve-zipper-polo-black-white`, photo: { src: `${CDN}/Two-ToneFullSleeveZipperPolo.webp`, alt: "Two-tone full sleeve zipper polo" } },
    ],
    viewAll: { label: "View all polos", href: `${SHOP}/collections/polos` },
    note: "Prices are per piece before customisation. Embroidery or print is quoted on your mockup.",
  },

  why: {
    eyebrow: "Why choose Yoode",
    title: <>Polos built for the <em>workday</em></>,
    text: "Comfortable through a long shift, sharp enough for a client meeting.",
    items: [
      { icon: Wind, title: "Premium breathable fabric", text: "Soft cotton and blend piqué that stays comfortable all day and keeps its shape wash after wash." },
      { icon: Palette, title: "Fully customisable design", text: "Your logo, colours and placement, embroidered or printed." },
      { icon: Ruler, title: "Precision sizing & fit", text: "Separate men's and women's cuts, so the whole team looks right." },
      { icon: MousePointerClick, title: "Hassle-free ordering", text: "Share your logo on WhatsApp, approve the preview, done." },
      { icon: Timer, title: "Fast turnaround", text: "Most orders finish within a few business days of approval." },
    ],
  },

  placements: {
    eyebrow: "Logo placements",
    title: <>Custom polo logo <em>placements</em></>,
    text: "Pick one placement or combine them. You see every position on the preview before production.",
    items: [
      { title: "Left chest", text: "The timeless, professional choice for corporate branding and team identity.", photo: { src: "/polo/clean-navy-front.png", alt: "Navy polo front" }, area: [56, 30, 17, 13] },
      { title: "Sleeve (left & right)", text: "Subtle branding, numbers or accents on the sleeve for a polished look.", photo: { src: "/polo/navy-front.jpg", alt: "Navy polo sleeve" }, area: [9, 22, 16, 15] },
      { title: "Back", text: "Room for bold team names, slogans and large visuals.", photo: { src: "/polo/clean-navy-back.png", alt: "Navy polo back" }, area: [27, 25, 46, 32] },
    ],
  },

  steps: {
    eyebrow: "How it works",
    title: <>Design your custom <em>polos</em></>,
    text: "No design? No problem. Share your logo and we take care of the rest.",
    items: [
      { title: "Choose your polo", text: "Pick the style, colour and sizes from the lineup.", photo: STEP_PHOTOS[0] },
      { title: "Send your design", text: "Share your logo on WhatsApp and our team prepares the embroidery or print preview.", photo: STEP_PHOTOS[1] },
      { title: "Wear it with class", text: "Look sharp every day in polos built for comfort and lasting wear.", photo: STEP_PHOTOS[2] },
    ],
  },

  occasions: {
    eyebrow: "For every team & business",
    title: <>Polos for every <em>team</em></>,
    text: "Fit, durable stitching and a clean logo matter most. Here is where our polos work hardest.",
    items: [
      { title: "Corporate polos", text: "Comfortable through long shifts, neat in meetings and on client visits.", photo: { src: `${CDN}/Mask_group_15.png`, alt: "Corporate polo T-shirt" } },
      { title: "Golf polos", text: "Light and breathable for corporate golf days, sports events and outdoor work.", photo: { src: `${CDN}/Mask_group_16.png`, alt: "Golf polo T-shirt" } },
      { title: "Event & promo polos", text: "Exhibitions, volunteer drives and promotions. Comfortable all day and great in photos.", photo: { src: `${CDN}/Mask_group_17.png`, alt: "Event and promotional polos" } },
      { title: "Staff uniforms", text: "Everyday uniforms for cafés, retail, delivery and service teams.", photo: { src: `${CDN}/Mask_group_18.png`, alt: "Polos for business staff" } },
    ],
  },

  methods: {
    eyebrow: "Printing & embroidery",
    title: <>Custom polo printing & <em>embroidery</em></>,
    text: "Both work well on polos. We recommend one based on your design and budget.",
    items: [
      { ...METHOD.embroidery, text: "A stitched logo in high-quality thread: durable, textured and premium. Ideal for corporate polos, staff uniforms and hospitality." },
      { ...METHOD.dtf, text: "Best for vibrant, full-colour logos and detailed artwork. Heat-applied, it stays bright after washing and does not crack, peel or fade." },
    ],
  },

  testimonials: [
    { name: "David R.", role: "Corporate team manager", quote: "We ordered polos for our sales team and the quality beat our expectations. Clean embroidery, comfortable fit. We have already placed a second order." },
    { name: "Sarah L.", role: "Small business owner", quote: "Ordering was simple: I sent the logo, approved the design, and the embroidered polos arrived as promised. The colours matched our brand." },
    { name: "Michael T.", role: "Event coordinator", quote: "Polos for our trade show arrived on time. The DTF print was vibrant and the fabric felt premium. The team looked consistent." },
  ],

  faqs: {
    text: "What teams ask before ordering polos. Anything else, ask us on WhatsApp.",
    items: [
      ["Is there a minimum order quantity for custom polo shirts?", "No. We take single polos for personal use as well as bulk orders for teams, events and businesses."],
      ["Can I choose where my logo is placed on the polo shirt?", "Yes. Left chest, right chest, sleeve, back or another position. You get a preview of the placement before production."],
      ["What if I don't have a design for my custom polo?", "Share your logo, artwork or ideas and our team designs it, including placement, colour matching and branding advice."],
      ["How long does it take to receive my order?", "It depends on order size and customisation. Most orders finish within a few business days, and you get an estimated delivery date before production starts."],
      ["Should I choose DTF printing or embroidery for my polos?", "Both work well. DTF suits vibrant full-colour logos and detailed artwork; embroidery gives a premium, textured finish. We recommend one based on your design and budget."],
      ["Do you offer free shipping?", "Yes, on eligible orders. It depends on the delivery location and order value, so contact us for the details on yours."],
    ],
  },

  guides: {
    title: <>Custom polo <em>insights</em></>,
    href: `${SHOP}/blogs/custom-polo`,
    items: [
      { title: "Why businesses still choose polo shirts for professional branding", href: `${SHOP}/blogs/custom-polo/why-businesses-still-choose-polo-shirts-for-professional-branding` },
      { title: "Corporate uniforms made easy with custom embroidered polo shirts", href: `${SHOP}/blogs/custom-polo/corporate-uniforms-made-easy-with-custom-embroidered-polo-shirts` },
      { title: "Why polo T-shirts with logos are the perfect blend of style and professionalism", href: `${SHOP}/blogs/custom-polo/why-polo-t-shirts-with-logos-are-the-perfect-blend-of-style-and-professionalism` },
    ],
  },

  more: { title: <>More than custom <em>polos</em></>, items: moreTiles("tshirts", "hoodies", "jerseys", "gifting") },

  quote: {
    title: <>Ready to create your custom <em>polo?</em></>,
    text: "Premium custom polos for your team, business or event. Send your logo and we come back with a free embroidery or print mockup.",
    photo: { src: "/polo/navy-model.jpg", alt: "Navy custom polo", pos: "50% 20%" },
    options: ["Men's cotton polo", "Men's polo with tipping", "Women's cotton polo", "Women's zipper polo", "Contrast trim polo", "Full sleeve zipper polo"],
  },

  seo: [
    {
      title: "Custom polo T-shirts for men: classy, fun and comfortable",
      body: <p>A collared polo is the easiest way to look put-together at work without dressing up. Our polos come in white, black, grey, royal blue, red and more, in cotton, polyester and blends, so you can match the fabric to the job.</p>,
    },
    {
      title: "Custom printed polo T-shirts: design your own",
      body: <p>Upload your logo or image, choose front and back placements and combine print with embroidery. Need plain tees too? See our <Link href="/custom-t-shirt-printing">custom T-shirt printing</Link>.</p>,
    },
    {
      title: "Custom embroidered polo shirts that show team spirit",
      body: <p>Embroidered polos make a practical corporate gift: add each person&apos;s name, and an embroidery artist reviews every order before it is stitched. Planning gifts for a team? See <Link href="/corporate-gifting-company-in-bangalore">corporate gifting</Link>.</p>,
    },
  ],
};
