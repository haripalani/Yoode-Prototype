/* The seven customisation methods, shown as full-screen spreads on the Services page (and singly on a method's own page). */

export type Tone = "light" | "dark";
export type Side = "left" | "right";

export type Method = (typeof METHODS)[number];

export const METHODS: { id: string; tag: string; side: Side; tone: Tone; chapter: string; kword: string; title: React.ReactNode; lede: string; facts: [string, string][]; prods: string[]; href?: string }[] = [
  { id: "m-dtg", tag: "DTG", side: "left", tone: "light", chapter: "Direct-to-garment · 180 GSM combed cotton", kword: "DTG",
    title: <>Ink that <em>soaks in.</em></>,
    lede: "Water-based ink sprayed straight into the knit. It sinks between the loops instead of sitting on them, so a photograph prints with every gradient and the shirt still feels like a shirt.",
    facts: [["Best for", "Photos, gradients, art"], ["Fabric", "100% cotton"], ["Minimum", "1 piece"], ["Wash life", "50+ washes"]], prods: ["Tees", "Sweatshirts", "Totes"],
    href: "/dtg-printing" },
  { id: "m-dtf", tag: "DTF", side: "right", tone: "dark", chapter: "Direct-to-film · 320 GSM fleece", kword: "DTF",
    title: <>A print that <em>sits on top.</em></>,
    lede: "The artwork is printed on film, pressed onto the fleece at heat, and the film peeled away cold. What stays is a bold, flat layer with white ink built in, so it works on black, on polyester, on anything.",
    facts: [["Best for", "Logos and vectors"], ["Fabric", "Any, including poly"], ["Minimum", "1 piece"], ["Wash life", "60+ washes"]], prods: ["Hoodies", "Jerseys", "Caps", "Bags"],
    href: "/dtf-printing" },
  { id: "m-embroidery", tag: "Embroidery", side: "left", tone: "light", chapter: "Embroidery · Pique cotton", kword: "Embroidery",
    title: <>Thread, <em>four thousand</em> times.</>,
    lede: "Your artwork is digitised into a stitch file, then a needle lays satin thread across the pique, pass after pass. It does not print; it becomes part of the cloth, and it outlasts the garment.",
    facts: [["Best for", "Logos, monograms"], ["Fabric", "Pique, twill, fleece"], ["Minimum", "1 piece"], ["Life", "Outlasts the garment"]], prods: ["Polos", "Caps", "Jackets", "Towels"],
    href: "/embroidery" },
  { id: "m-coloreel", tag: "Coloreel", side: "right", tone: "light", chapter: "Coloreel · Cotton twill", kword: "Coloreel",
    title: <>One thread, <em>every colour.</em></>,
    lede: "A single white thread, dyed on the machine as it feeds. Gradients and photoreal logos in embroidery, with no thread changes and no colour limit.",
    facts: [["Best for", "Gradient logos"], ["Fabric", "As embroidery"], ["Minimum", "1 piece"], ["Colours", "Unlimited"]], prods: ["Caps", "Polos", "Jackets"],
    href: "/coloreel-embroidery" },
  { id: "m-screen", tag: "Screen", side: "left", tone: "dark", chapter: "Screen printing · Cotton jersey", kword: "Screen",
    title: <>Pull once, print <em>five hundred.</em></>,
    lede: "Ink pulled through a mesh stencil, one colour per screen. Thick, matte, opaque, and once the screens are made every extra piece is cheap and fast. Built for events, uniforms and merch drops.",
    facts: [["Best for", "1–6 solid colours"], ["Fabric", "Cotton, blends"], ["Minimum", "50 pieces"], ["Wash life", "50+ washes"]], prods: ["Event tees", "Uniforms", "Totes"],
    href: "/screen-printing" },
  { id: "m-uv", tag: "UV", side: "right", tone: "dark", chapter: "UV printing · Brushed steel", kword: "UV",
    title: <>Colour that <em>cures on steel.</em></>,
    lede: "Droplets of ink land on the metal and an ultraviolet lamp sets them the instant they touch. Full colour on bottles, pens and boxes, slightly raised, glossy and scratch resistant.",
    facts: [["Best for", "Full colour, hard goods"], ["Surface", "Metal, glass, wood, plastic"], ["Minimum", "1 piece"], ["Finish", "Gloss, raised"]], prods: ["Bottles", "Pens", "Notebooks", "Phone cases"],
    href: "/uv-printing" },
  { id: "m-engraving", tag: "Engraving", side: "left", tone: "dark", chapter: "Laser engraving · Full-grain leather", kword: "Engraving",
    title: <>Burned in. <em>Never off.</em></>,
    lede: "A laser traces your artwork into leather, wood or steel and takes the surface with it. No ink, nothing to fade or peel. The finish for gifts, awards and anything meant to be kept.",
    facts: [["Best for", "Gifts, awards"], ["Surface", "Steel, wood, leather"], ["Minimum", "1 piece"], ["Finish", "Permanent"]], prods: ["Bottles", "Pens", "Plaques", "Gift boxes"],
    href: "/laser-engraving" },
];

// Full class strings so Tailwind can see them.
export const TONE = {
  light: { fg: "text-yoode-onyx", soft: "text-gray-700", mute: "text-gray-500", rule: "border-black/15", ruleBg: "bg-black/15",
    scrim: { left: "bg-linear-to-r from-white/90 via-white/70 via-[36%] to-white/0 to-[64%]", right: "bg-linear-to-l from-white/90 via-white/70 via-[36%] to-white/0 to-[64%]",
      narrow: "group-[.narrow]/f:bg-linear-to-t group-[.narrow]/f:from-white/95 group-[.narrow]/f:via-white/80 group-[.narrow]/f:via-[48%] group-[.narrow]/f:to-white/0 group-[.narrow]/f:to-[72%]" } },
  dark: { fg: "text-white", soft: "text-white/80", mute: "text-white/60", rule: "border-white/20", ruleBg: "bg-white/20",
    scrim: { left: "bg-linear-to-r from-[#0c0c0c]/90 via-[#0c0c0c]/70 via-[36%] to-[#0c0c0c]/0 to-[64%]", right: "bg-linear-to-l from-[#0c0c0c]/90 via-[#0c0c0c]/70 via-[36%] to-[#0c0c0c]/0 to-[64%]",
      narrow: "group-[.narrow]/f:bg-linear-to-t group-[.narrow]/f:from-[#0c0c0c]/95 group-[.narrow]/f:via-[#0c0c0c]/80 group-[.narrow]/f:via-[48%] group-[.narrow]/f:to-[#0c0c0c]/0 group-[.narrow]/f:to-[72%]" } },
};

