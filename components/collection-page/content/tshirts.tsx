import { Gift, Briefcase, Users, Heart } from "lucide-react";
import type { CollectionPageContent } from "../types";
import { CDN, SHOP, CUSTOM_TRUST, METHOD, STEP_PHOTOS, moreTiles } from "./shared";

export const tshirts: CollectionPageContent = {
  short: "T-shirt",
  ghost: "TEES",
  whatsapp: "I would like to create a custom t-shirt",

  hero: {
    eyebrow: "Custom T-shirt printing · India",
    title: <>Custom T-shirt printing <em>online</em> in India</>,
    text: "Create custom tees with your logo, artwork or design. Premium printing, quality fabrics and fast delivery for businesses, events, teams and personal wear.",
    primary: "Pick your tee",
    rating: { score: "4.9", label: "250+ Google reviews" },
    collage: [
      { src: "/categories/custom_tshirts.webp", alt: "Custom printed T-shirts" },
      { src: "/categories/oversized_tees.webp", alt: "Oversized printed tees" },
      { src: "/Services/dtg.webp", alt: "T-shirt being printed" },
    ],
    chip: "Free mockup in 24 hrs",
  },

  trust: CUSTOM_TRUST,

  shop: {
    eyebrow: "Customise your T-shirt online",
    title: <>Pick a <em>style</em> to print</>,
    text: "Start with the garment. Every style takes your logo, artwork or text, from a single piece to a full team order.",
    items: [
      { name: "Custom Round Neck Tees", price: "From ₹430", href: `${SHOP}/collections/t-shirts`, photo: { src: `${CDN}/Mask_group_92.png`, alt: "Custom round neck tees" } },
      { name: "Custom Polo T-Shirts", price: "From ₹430", href: `${SHOP}/collections/polos`, photo: { src: `${CDN}/Mask_group_90.png`, alt: "Custom polo T-shirts" } },
      { name: "Custom Embroidered Hoodies", price: "From ₹1,180", href: `${SHOP}/collections/hoodies`, photo: { src: `${CDN}/Mask_group_89.png`, alt: "Custom embroidered hoodies" } },
      { name: "Custom Sweatshirts", price: "From ₹890", href: `${SHOP}/collections/sweatshirts`, photo: { src: `${CDN}/Mask_group_91.png`, alt: "Custom sweatshirts" } },
    ],
    viewAll: { label: "View all tees", href: `${SHOP}/collections/polo-and-t-shirt` },
  },

  steps: {
    eyebrow: "How it works",
    title: <>How custom T-shirt <em>printing</em> works</>,
    text: "Three steps, and nothing is printed until you have approved the mockup.",
    items: [
      { title: "Choose your tee", text: "Browse the collection and pick the style, colour and fit you want.", photo: STEP_PHOTOS[0] },
      { title: "Send your design", text: "Share your design on WhatsApp. No design yet? We make a free mockup for you.", photo: STEP_PHOTOS[1] },
      { title: "Wear it with class", text: "Your custom tees are printed, packed and delivered, ready to wear.", photo: STEP_PHOTOS[2] },
    ],
  },

  methods: {
    eyebrow: "Printing methods",
    title: <>Custom T-shirt printing <em>methods</em></>,
    text: "Not sure which one suits your design? Send it over and we will recommend the right method.",
    items: [
      { ...METHOD.dtg, text: "Fine detail, gradients and multi-colour artwork. The ink soaks into the fabric, so the print stays soft and light. Small batches are no problem." },
      { ...METHOD.dtf, text: "Made for dark tees, stretch fabrics and tricky materials. The design is printed on film and pressed on, keeping colours vivid and edges clean wash after wash." },
      { ...METHOD.embroidery, text: "Thread stitched into the fabric, so logos stay sharp for years. The pick for uniforms, corporate tees and branded workwear. Print fades; embroidery stays." },
    ],
  },

  occasions: {
    eyebrow: "For every occasion",
    title: <>T-shirts for <em>every</em> occasion</>,
    text: "From one gift tee to matching shirts for a whole company, the same simple process applies.",
    items: [
      { title: "Personalised gifts", text: "A name, a photo or an inside joke turns a tee into a keepsake for birthdays, farewells and celebrations.", photo: { src: `${CDN}/Mask_group_78.png`, alt: "Personalised T-shirt gift" } },
      { title: "Corporate T-shirts", text: "Office events, exhibitions and team days. Comfortable round necks or embroidered polos people actually wear.", photo: { src: `${CDN}/Mask_group_79.png`, alt: "Corporate team T-shirts" } },
      { title: "Event T-shirts", text: "Marathons, cultural fests, trips and community meet-ups. Matching tees make the group easy to spot.", photo: { src: `${CDN}/Mask_group_80.png`, alt: "Custom event T-shirts" } },
      { title: "Matching T-shirts", text: "Friends, couples and families, built around shared humour, a favourite line or a simple graphic.", photo: { src: `${CDN}/Mask_group_81.png`, alt: "Matching custom T-shirts" } },
    ],
  },

  why: {
    eyebrow: "Why Yoode",
    title: <>Made for how <em>you</em> order</>,
    text: "Whether it is one tee or a run for a whole college fest, you get the same care.",
    items: [
      { icon: Gift, title: "One piece is fine", text: "No minimum order. Print a single gift tee or a few hundred for an event." },
      { icon: Users, title: "Design help included", text: "Send finished artwork or a rough idea. Our team prepares the final design and a mockup." },
      { icon: Briefcase, title: "Bulk pricing", text: "The price per tee drops as quantity rises, based on style, method and customisation." },
      { icon: Heart, title: "Dispatched in 3–4 days", text: "Most orders leave within three to four working days of design approval, with free shipping in India." },
    ],
  },

  testimonials: [
    { name: "Rahul M", role: "Family reunion order", quote: "We ordered matching tees for a family reunion. The print quality was solid and every piece was consistent. We will order again." },
    { name: "Priya S", role: "Corporate event order", quote: "We had no design ready, so the team made one for us and sent a mockup before printing. Everything arrived on time." },
    { name: "Aakash R", role: "College event order", quote: "A last-minute order for our college fest. Quick dispatch, clean prints, and people kept asking where we got the tees." },
  ],

  faqs: {
    text: "Short answers on methods, shipping, minimums and design help. Ask us anything else on WhatsApp.",
    items: [
      ["Which printing method should I choose for my custom t-shirt?", "Embroidery suits logos and simple branding. DTG and DTF suit detailed, colourful artwork. If you are not sure, send us the design and we will recommend a method."],
      ["Do you offer free shipping across India?", "Yes. Shipping is free on all custom tee orders across India, whether it is one piece or a bulk order. No delivery charges are added at checkout."],
      ["Is there any minimum order quantity?", "No. Order a single piece, or a larger run for an event, company, college or group."],
      ["How long does it take to dispatch an order?", "Usually three to four working days after you approve the design. Timing can vary with the method, quantity, location and busy seasons."],
      ["Do you provide help with designing?", "Yes. Send finished artwork, or a rough idea or reference image on WhatsApp, and our team prepares the final design before printing."],
      ["Are bulk order discounts available?", "Yes. Bulk pricing depends on the style, method, quantity and customisation. The price per tee usually falls as the quantity goes up."],
    ],
  },

  guides: {
    title: <>Custom T-shirt <em>guides</em></>,
    href: `${SHOP}/blogs/custom-t-shirt`,
    items: [
      { title: "Why businesses use branded apparel to build stronger customer connections", href: `${SHOP}/blogs/custom-t-shirt/why-businesses-use-branded-apparel-to-build-stronger-customer-connections` },
      { title: "DIY vs professional custom T-shirt printing: what should you choose?", href: `${SHOP}/blogs/custom-t-shirt/diy-vs-professional-custom-t-shirt-printing-what-should-you-choose` },
      { title: "Choosing the right font for your custom T-shirt design", href: `${SHOP}/blogs/custom-t-shirt/choosing-the-right-font-for-your-custom-t-shirt-design` },
    ],
  },

  more: { title: <>More than custom <em>T-shirts</em></>, items: moreTiles("polos", "hoodies", "jerseys", "gifting") },

  quote: {
    title: <>Start your custom <em>T-shirt</em> printing</>,
    text: "Got an idea? Share it on WhatsApp. No design? We create and send a free mockup before anything is printed.",
    photo: { src: "/categories/apparels.webp", alt: "Custom apparel by Yoode" },
    options: ["Round neck tees", "Polo T-shirts", "Hoodies", "Sweatshirts", "Oversized tees"],
  },

  seo: [
    {
      title: "Custom T-shirt printing made simple",
      body: <p>You do not need to arrive with a finished design. Share your idea on WhatsApp and our team makes a mockup, suggests the right printing method, revises it with you and prepares the job before production starts.</p>,
    },
    {
      title: "Quality custom T-shirts delivered across India",
      body: <p>We focus on comfortable fabric, clean printing and finishing that lasts. Whether you order one tee or dress a whole team, every order is packed carefully and shipped across India with no extra delivery charge.</p>,
    },
  ],
};
