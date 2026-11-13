"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { ServicesHero } from "@/components/ServicesHero";
import { ExperienceCenters } from "@/components/ExperienceCenters";
import { Process } from "@/components/Process";
import { MethodSpreads } from "@/components/method-spreads/MethodSpreads";

/* product glyphs, referenced with <use> */
const SPRITE = () => (
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <symbol id="g-tee" viewBox="0 0 100 100"><path d="M22 14 L38 8 Q50 19 62 8 L78 14 L94 32 L79 41 L79 92 L21 92 L21 41 L6 32 Z"/></symbol>
        <symbol id="g-polo" viewBox="0 0 100 100"><path d="M22 14 L38 8 Q50 19 62 8 L78 14 L94 32 L79 41 L79 92 L21 92 L21 41 L6 32 Z"/><path d="M38 8 L45 30 L50 23 L55 30 L62 8" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/><path d="M50 23 V44" stroke="#fff" strokeWidth="2"/><circle cx="50" cy="31" r="1.4" fill="#fff"/><circle cx="50" cy="38" r="1.4" fill="#fff"/></symbol>
        <symbol id="g-hoodie" viewBox="0 0 100 100"><path d="M20 22 L34 12 Q50 -2 66 12 L80 22 L95 40 L80 48 L80 94 L20 94 L20 48 L5 40 Z"/><path d="M38 16 Q50 8 62 16 Q50 30 38 16 Z" fill="#fff"/><path d="M33 70 H67 V90 H33 Z" fill="none" stroke="#fff" strokeWidth="2"/><path d="M44 30 V52 M56 30 V52" stroke="#fff" strokeWidth="2"/></symbol>
        <symbol id="g-jersey" viewBox="0 0 100 100"><path d="M22 14 L38 8 Q50 22 62 8 L78 14 L94 32 L79 41 L79 92 L21 92 L21 41 L6 32 Z"/><path d="M21 52 H79 M21 60 H79" stroke="#fff" strokeWidth="3"/><text x="50" y="84" textAnchor="middle" fontFamily="Bodoni Moda,serif" fontSize="22" fill="#fff">10</text></symbol>
        <symbol id="g-cap" viewBox="0 0 100 100"><path d="M18 60 Q18 26 50 26 Q82 26 82 60 Z"/><path d="M10 60 H92 Q100 66 90 71 H10 Q4 66 10 60 Z"/><path d="M50 26 V60" stroke="#fff" strokeWidth="2"/></symbol>
        <symbol id="g-box" viewBox="0 0 100 100"><path d="M14 40 H86 V88 H14 Z"/><path d="M10 28 H90 V40 H10 Z"/><path d="M50 28 V88" stroke="#fff" strokeWidth="3"/><path d="M40 28 Q50 10 50 28 Q50 10 60 28" fill="none" stroke="#fff" strokeWidth="2"/></symbol>
        <symbol id="g-bag" viewBox="0 0 100 100"><path d="M26 30 Q26 8 50 8 Q74 8 74 30 V88 Q74 94 68 94 H32 Q26 94 26 88 Z"/><path d="M34 40 H66 V70 H34 Z" fill="none" stroke="#fff" strokeWidth="2"/><path d="M38 30 Q38 16 50 16 Q62 16 62 30" fill="none" stroke="#fff" strokeWidth="2"/></symbol>
        <symbol id="g-bottle" viewBox="0 0 100 100"><path d="M42 6 H58 V18 Q68 26 68 38 V88 Q68 94 62 94 H38 Q32 94 32 88 V38 Q32 26 42 18 Z"/><path d="M38 48 H62 M38 56 H62" stroke="#fff" strokeWidth="2"/></symbol>
        <symbol id="g-note" viewBox="0 0 100 100"><path d="M24 10 H80 V92 H24 Z"/><path d="M20 24 H30 M20 40 H30 M20 56 H30 M20 72 H30" stroke="#fff" strokeWidth="3"/><path d="M40 34 H68 M40 46 H68 M40 58 H60" stroke="#fff" strokeWidth="2"/></symbol>
      </svg>
);

/* ---------- content ---------- */

const HERO_INDEX = ["DTG print", "DTF transfer", "Embroidery", "Coloreel", "Screen print", "UV print", "Engraving"];
const HERO_LINKS = ["m-dtg", "m-dtf", "m-embroidery", "m-coloreel", "m-screen", "m-uv", "m-engraving"];

const PILLARS = [
  { k: "Corporate", glyph: "g-polo", color: "text-yoode-onyx", title: <>Equip your team. <em>Define your brand.</em></>, text: "Onboarding kits, embroidered polos, event tees and gift boxes with your mark on every piece.",
    list: ["Bulk pricing from 25 pieces", "Dedicated account manager", "GST invoicing, pan-India dispatch"], go: "Explore corporate" },
  { k: "Sports & teams", glyph: "g-jersey", color: "text-yoode-coral", title: <>Kit your team. <em>Own the field.</em></>, text: "Sublimated jerseys, training wear and supporter merch. Official kit partner to Kombans FC.",
    list: ["Names and numbers per player", "Mockup request by sport", "Match-day turnaround on request"], go: "Explore sportswear" },
  { k: "Personalised", glyph: "g-hoodie", color: "text-amber-500", title: <>Make it yours. <em>One piece or a thousand.</em></>, text: "Hoodies, caps, bottles and notebooks. No minimum order, a free mockup within 24 hours.",
    list: ["Design online or at a centre", "Template gallery or your own art", "Pay only after you approve"], go: "Start designing" },
];

const MATRIX_COLS = ["DTG", "DTF", "Embroidery", "Coloreel", "Screen", "UV", "Engraving"];
// y = recommended, m = works with the right artwork, - = not offered
const MATRIX_ROWS: [string, string, string][] = [
  ["Cotton tees", "Round, V, oversized", "yymmy--"],
  ["Polos", "Pique and jersey", "myyym--"],
  ["Hoodies & sweatshirts", "Fleece, French terry", "myymy--"],
  ["Jerseys", "Polyester, sublimated", "-ymmm--"],
  ["Caps", "Cotton twill", "-yyy---"],
  ["Jackets", "Bomber, softshell", "-myy---"],
  ["Bags & totes", "Canvas, poly", "yyymy--"],
  ["Bottles & mugs", "Steel, ceramic", "-----yy"],
  ["Pens & desk", "Metal, wood", "-----yy"],
  ["Notebooks", "Leather, hardbound", "-----yy"],
  ["Gift boxes & awards", "Wood, acrylic, crystal", "-----yy"],
];

// [artwork, best fit, columns it points at in the matrix]
const PICKER: [string, string, number[]][] = [
  ["A photo or gradient", "DTG on cotton, UV on hard goods", [0, 5]],
  ["A logo in 1–6 colours", "DTF for small runs, screen for 50+", [1, 4]],
  ["Something premium and permanent", "Embroidery, Coloreel or engraving", [2, 3, 6]],
  ["500 pieces by Friday", "Screen printing, talk to us today", [4]],
];

type Swatch = [name: string, hex: string];
const PRODUCTS: { name: string; sub: string; glyph: string; how: string; badge?: string; was?: string; price: string; swatches: Swatch[] }[] = [
  { name: "Men's Cotton Polo", sub: "Pique cotton · S–XXL · 4.9★", glyph: "g-polo", how: "Embroidery", badge: "−50%", was: "₹1,560", price: "₹780", swatches: [["Navy", "#1B2A48"], ["Ink", "#15161B"], ["Bone", "#F1ECE2"], ["Bordeaux", "#7A1F2B"]] },
  { name: "Polo Half-Sleeve Jersey", sub: "Polyester · S–XXL · 4.9★", glyph: "g-jersey", how: "Sublimation · DTF", badge: "−20%", was: "₹875", price: "₹700", swatches: [["Signal red", "#C8102E"], ["Lagoon", "#2C9AAB"], ["Forest", "#2E7D4F"], ["Saffron", "#E5A100"]] },
  { name: "Heavyweight Hoodie", sub: "320 GSM fleece · XS–3XL", glyph: "g-hoodie", how: "DTF · Screen", price: "On request", swatches: [["Ink", "#15161B"], ["Sand", "#D2C6A8"], ["Amethyst", "#6C4AB6"], ["Walnut", "#7A5A42"]] },
  { name: "Corporate Gift Box", sub: "Curated kit · 4.7★", glyph: "g-box", how: "Engraving · UV", badge: "−11%", was: "₹2,800", price: "₹2,499", swatches: [["Walnut", "#7A5A42"], ["Navy", "#1B2A48"], ["Ink", "#15161B"], ["Terracotta", "#D8734F"]] },
  { name: "RedBolt Space Backpack", sub: "Laptop sleeve · embroidered", glyph: "g-bag", how: "Embroidery", price: "₹4,999", swatches: [["Lagoon", "#2C9AAB"], ["Ink", "#15161B"], ["Signal red", "#C8102E"], ["Navy", "#1B2A48"]] },
  { name: "Structured Cap", sub: "6-panel twill · 3D embroidery", glyph: "g-cap", how: "Coloreel · Embroidery", price: "On request", swatches: [["Saffron", "#E5A100"], ["Ink", "#15161B"], ["Bone", "#F1ECE2"], ["Forest", "#2E7D4F"]] },
  { name: "Steel Bottle", sub: "750 ml · double wall", glyph: "g-bottle", how: "UV · Engraving", price: "On request", swatches: [["Forest", "#2E7D4F"], ["Ink", "#15161B"], ["Sand", "#D2C6A8"], ["Bordeaux", "#7A1F2B"]] },
  { name: "Hardbound Notebook", sub: "A5 · leather cover", glyph: "g-note", how: "Engraving · Foil", price: "On request", swatches: [["Terracotta", "#D8734F"], ["Ink", "#15161B"], ["Navy", "#1B2A48"], ["Lagoon", "#2C9AAB"]] },
];

const WALK: [string, string][] = [
  ["Walk in", "Bring a logo on your phone. Nothing else needed."],
  ["Design it", "Pick the blank, feel the fabric, choose the method with a designer beside you."],
  ["Wear it", "Approve the mockup on the spot. Single pieces can be ready the same day."],
];

const BRANDS = ["Meta", "Infosys", "Slack", "Samsung", "Amazon", "Netflix", "Google", "IBM", "Microsoft", "Cisco", "UST", "Kombans FC"];

const TESTIMONIALS: [string, string, string, string][] = [
  ["Ordered 500 personalised welcome kits for our new hires. They arrived ahead of schedule and the packaging was stunning.", "Rahul Verma", "People operations", "Welcome kits · 500"],
  ["The print quality on our custom team hoodies was phenomenal. Every detail was sharp and the fabric is premium.", "Maya Collins", "Team lead", "Hoodies · DTF"],
  ["Embroidered polos for our sales team. The stitching is flawless and they look incredibly professional.", "Ethan Brooks", "Sales director", "Polos · Embroidery"],
];

const NUMBERS: [string, string][] = [["10,000+", "Orders delivered"], ["500+", "Teams and brands"], ["50+", "Colours in stock"], ["18 yrs", "Of printing"]];

const FAQS: [string, string][] = [
  ["Do you offer bulk discounts?", "Yes. The per-piece price steps down with quantity, and screen printing gets cheaper the more you print. Tell us the number and we'll quote the tier the same day."],
  ["What is your typical turnaround time?", "Your free mockup lands within 24 hours. Most orders ship within 5 to 10 working days after you approve it. Single pieces at an experience centre can be ready the same day, and rush orders are possible when the stock is in."],
  ["Can I mix and match sizes and colours?", "Yes. One order can carry any mix of sizes and shades of the same product at the same price. Names and numbers per piece are fine too."],
  ["Which printing method is best for my design?", "Photos and gradients go DTG on cotton or UV on hard goods. Logos and flat-colour vectors go DTF for small runs and screen printing from 50 pieces. Anything that should feel premium and last goes to embroidery, Coloreel or engraving. Send the file and we'll recommend."],
  ["Do you have a minimum order quantity?", "No. One piece is an order. The only exception is screen printing, where the screens make sense from about 50 pieces."],
  ["How do I contact customer support?", "WhatsApp or call +91 8069 750 293, email info@yoode.com, or walk into any of the four experience centres. Replies within two hours on working days."],
];

/* ---------- shared bits (Yoode type + colour standards) ---------- */

const CONTAINER = "mx-auto w-full max-w-[1400px] px-6 md:px-12";
const EYEBROW = "text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-yoode-coral";
const H2 = "font-display font-extrabold uppercase tracking-tight text-yoode-onyx leading-[1.02] text-[clamp(30px,4.4vw,60px)] [&_em]:not-italic [&_em]:text-yoode-coral";
const CARD = "rounded-[24px] bg-[#F9F5F1]";

const BTN = {
  coral: "bg-yoode-coral text-white hover:bg-[#C13828]",
  onyx: "bg-yoode-onyx text-white hover:bg-yoode-coral",
  outline: "border border-yoode-onyx text-yoode-onyx hover:bg-yoode-onyx hover:text-white",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1DA851]",
  outlineLight: "border border-white/40 text-white hover:bg-white hover:text-yoode-onyx",
};

function Btn({ href, variant, children, external }: { href: string; variant: keyof typeof BTN; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      data-magnetic
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group/b inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider shadow-sm transition-colors will-change-transform ${BTN[variant]}`}
    >
      {children}
      <span aria-hidden className="inline-block transition-transform duration-300 group-hover/b:translate-x-1">→</span>
    </a>
  );
}

function SectionHead({ eyebrow, title, text, compact }: { eyebrow: string; title: React.ReactNode; text: string; compact?: boolean }) {
  return (
    <div className={`${compact ? "mb-0" : "mb-12 md:mb-16"} grid items-end gap-1.5 md:gap-8 md:grid-cols-[1.2fr_.8fr]`}>
      <div>
        <div className={`${EYEBROW} ${compact ? "mb-1 text-[11px] md:text-xs" : "mb-3"}`}>{eyebrow}</div>
        <h2 data-split className={`${H2} ${compact ? "!text-[clamp(22px,2.2vw,34px)] !leading-[1.05]" : ""}`}>{title}</h2>
      </div>
      <p className={`max-w-[44ch] font-medium leading-relaxed text-gray-500 md:justify-self-end ${compact ? "text-xs md:text-sm" : "text-sm md:text-base"}`}>{text}</p>
    </div>
  );
}

function Glyph({ id, className, color }: { id: string; className?: string; color?: string }) {
  return <svg viewBox="0 0 100 100" aria-hidden style={color ? { color } : undefined} className={`fill-current ${className ?? ""}`}><use href={`#${id}`} /></svg>;
}

function ProductCard({ p, i }: { p: (typeof PRODUCTS)[number]; i: number }) {
  const [sel, setSel] = useState(0);
  const color = p.swatches[sel][1];
  return (
    <article className="group/c flex flex-col w-[clamp(240px,20vw,290px)] flex-none gap-2">
      <div className={`${CARD} relative grid aspect-[4/3.0] place-items-center overflow-hidden rounded-[20px] transition-shadow duration-300 group-hover/c:shadow-md`}>
        <span className="absolute left-3.5 top-3 text-[10px] font-semibold tracking-[0.14em] text-gray-400">{String(i + 1).padStart(2, "0")}</span>
        {p.badge && (
          <span className="absolute right-3 top-3 rounded-full bg-yoode-coral px-2.5 py-0.5 text-[9px] font-bold tracking-wider text-white shadow-xs">
            {p.badge}
          </span>
        )}
        <Glyph id={p.glyph} color={color} className="h-[64%] w-auto max-h-[135px] drop-shadow-[0_12px_20px_rgba(21,22,27,.12)] transition-[transform,color] duration-500 group-hover/c:-translate-y-1 group-hover/c:-rotate-2" />
        <span className="absolute bottom-2.5 left-3.5 text-[9px] font-bold uppercase tracking-[0.14em] text-gray-500">{p.how}</span>
      </div>
      <div className="flex items-start justify-between gap-2 px-0.5">
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-[14px] md:text-[15px] font-bold leading-tight text-yoode-onyx truncate" title={p.name}>{p.name}</h3>
          <div className="mt-0.5 text-[11px] text-gray-500 truncate" title={p.sub}>{p.sub}</div>
        </div>
        <div className="whitespace-nowrap text-right shrink-0">
          {p.was && <s className="mr-1.5 text-[11px] font-normal text-gray-400">{p.was}</s>}
          <span className="text-xs md:text-sm font-bold text-yoode-onyx">{p.price}</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-0.5">
        {p.swatches.map(([name, hex], s) => (
          <button
            key={name}
            type="button"
            aria-label={name}
            title={name}
            aria-pressed={s === sel}
            onClick={() => setSel(s)}
            style={{ backgroundColor: hex }}
            className={`size-[15px] cursor-pointer rounded-full border border-black/15 transition-transform hover:scale-125 ${s === sel ? "scale-125 ring-1.5 ring-yoode-onyx ring-offset-1.5" : ""}`}
          />
        ))}
      </div>
    </article>
  );
}

function Matrix({ hot, onHot }: { hot: number[]; onHot: (cols: number[]) => void }) {
  const lit = (col: number) => (hot.includes(col) ? "bg-yoode-coral/10" : "");
  return (
    <div data-matrix className="overflow-x-auto rounded-[24px] border border-gray-200 bg-white">
      <table onPointerLeave={() => onHot([])} className="w-full min-w-[640px] border-collapse text-[13px]">
        <thead>
          <tr>
            <th className="sticky left-0 bg-white px-5 py-3.5 text-left text-xs font-semibold text-gray-500">Product</th>
            {MATRIX_COLS.map((c, i) => (
              <th key={c} onPointerEnter={() => onHot([i])} className={`px-2 py-3.5 text-center text-xs font-semibold text-yoode-onyx transition-colors ${lit(i)}`}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MATRIX_ROWS.map(([name, sub, codes]) => (
            <tr key={name} className="group/r">
              <td className="sticky left-0 whitespace-nowrap border-t border-gray-100 bg-white px-5 py-2.5 font-semibold text-yoode-onyx group-hover/r:bg-[#F9FAFB]">
                {name}
                <small className="ml-2 hidden text-xs font-normal text-gray-400 xl:inline">{sub}</small>
              </td>
              {[...codes].map((c, i) => (
                <td key={i} onPointerEnter={() => onHot([i])} className={`border-t border-gray-100 px-2 py-2.5 text-center transition-colors group-hover/r:bg-[#F9FAFB] ${lit(i)}`}>
                  {c === "y" && <i aria-label="Recommended" className="inline-block size-3 rounded-full bg-yoode-coral" />}
                  {c === "m" && <i aria-label="Works with the right artwork" className="inline-block size-3 rounded-full border-[1.5px] border-yoode-onyx" />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MethodGuide() {
  const [hot, setHot] = useState<number[]>([]);
  return (
    <section id="guide" className="bg-[#F9FAFB] py-14 lg:flex lg:min-h-[100svh] lg:items-center lg:py-10">
      <div className={`${CONTAINER} grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-12`}>
        <div>
          <h2 data-split className={`${H2} text-[clamp(26px,2.5vw,36px)]!`}>Which method for which product.</h2>
          <p className="mt-4 max-w-[40ch] text-sm font-medium leading-relaxed text-gray-500">
            Hover a method to compare. Or skip this and send us the file, we&apos;ll pick.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-gray-500">
            <span className="flex items-center gap-2"><i className="size-3 rounded-full bg-yoode-coral" />Recommended</span>
            <span className="flex items-center gap-2"><i className="size-3 rounded-full border-[1.5px] border-yoode-onyx" />Works with the right artwork</span>
          </div>
          <div className="mt-7">
            <div className="mb-2.5 font-display text-sm font-bold text-yoode-onyx">Not sure? Start from your artwork</div>
            <div className="grid gap-2">
              {PICKER.map(([art, fit, cols]) => (
                <a
                  key={art}
                  href="#quote"
                  data-reveal
                  onPointerEnter={() => setHot(cols)}
                  onPointerLeave={() => setHot([])}
                  onFocus={() => setHot(cols)}
                  onBlur={() => setHot([])}
                  className="group/pk flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-3 transition-colors hover:border-yoode-coral focus-visible:border-yoode-coral focus-visible:outline-none"
                >
                  <span>
                    <b className="block text-[13px] font-semibold text-yoode-onyx">{art}</b>
                    <span className="text-xs text-gray-500">{fit}</span>
                  </span>
                  <span aria-hidden className="text-yoode-coral transition-transform duration-300 group-hover/pk:translate-x-1">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <Matrix hot={hot} onHot={setHot} />
      </div>
    </section>
  );
}

export function ServicesClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rootEl = rootRef.current;
    if (!rootEl) return;
    const root: HTMLDivElement = rootEl;
    gsap.registerPlugin(ScrollTrigger);

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(hover:hover)").matches;
    const $ = <T extends HTMLElement = HTMLElement>(s: string) => root.querySelector<T>(s)!;
    const $$ = <T extends HTMLElement = HTMLElement>(s: string) => [...root.querySelectorAll<T>(s)];

    let cancelled = false;
    const disposers: Array<() => void> = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onEl = (el: Element, type: string, fn: (e: any) => void, opts?: AddEventListenerOptions) => {
      el.addEventListener(type, fn, opts);
      disposers.push(() => el.removeEventListener(type, fn, opts));
    };
    let ctx: gsap.Context | null = null;

    const fontsReady = document.fonts && document.fonts.load
      ? Promise.all(['600 40px "Bodoni Moda"', '400 40px "Bodoni Moda"', 'italic 400 40px "Bodoni Moda"', "400 16px Manrope", "600 16px Manrope", '400 12px "IBM Plex Mono"'].map((f) => document.fonts.load(f).catch(() => {})))
      : Promise.resolve();
    Promise.race([fontsReady, new Promise((r) => setTimeout(r, 2500))]).then(() => { if (!cancelled) init(); });

    function init() {
      ctx = gsap.context(() => {
        /* ---------- text splitting ---------- */
        const linesOf = (el: HTMLElement): HTMLElement[] => {
          return [el];
        };
        const splits = new Map<Element, HTMLElement[]>(); $$("[data-split]").forEach((el) => splits.set(el, linesOf(el)));

        /* ---------- scroll ---------- */
        if (!reduced) {
          // horizontal strips (wide screens)
          const mm = gsap.matchMedia();
          mm.add("(min-width: 901px)", () => {
            ([["#lookTrack", "[data-look]"]] as const).forEach(([id, sec]) => {
              const track = $(id);
              if (!track) return;
              const dist = () => Math.max(0, track.scrollWidth - document.documentElement.clientWidth);
              gsap.to(track, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: $(sec), start: "top top", end: () => "+=" + dist(), pin: true, scrub: 0.7, invalidateOnRefresh: true, anticipatePin: 1 } });
            });
          });

          $$("[data-split]").forEach((el) => { if (el.closest("[data-method]")) return;
            gsap.from(splits.get(el)!, { yPercent: 110, duration: 1, stagger: 0.08, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } }); });
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
            gsap.from(el, { y: 30, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 93%", once: true } }); });
          gsap.from(root.querySelectorAll("[data-matrix] tbody tr"), { opacity: 0, x: -14, duration: 0.6, stagger: 0.05, ease: "power2.out", scrollTrigger: { trigger: $("[data-matrix]"), start: "top 85%", once: true } });
        }

        ScrollTrigger.refresh();

        /* ---------- magnetism and anchors (default browser cursor) ---------- */
        if (fine && !reduced) {
          $$("[data-magnetic]").forEach((el) => {
            const x = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" }), y = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
            onEl(el, "pointermove", (e: PointerEvent) => { const r = el.getBoundingClientRect(); x((e.clientX - (r.left + r.width / 2)) * 0.3); y((e.clientY - (r.top + r.height / 2)) * 0.3); });
            onEl(el, "pointerleave", () => { x(0); y(0); });
          });
        }
        $$('a[href^="#"]').forEach((a) => {
          onEl(a, "click", (e: Event) => { const id = a.getAttribute("href")!.slice(1); const el = id && document.getElementById(id); if (!el) return; e.preventDefault();
            el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" }); });
        });
      }, root);
    }

    return () => {
      cancelled = true;
      disposers.forEach((d) => d());
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="relative min-h-screen overflow-x-clip bg-white font-sans text-yoode-onyx antialiased">
      <SPRITE />

      <div className="relative z-[1]">
        {/* ================= INITIAL HERO OVERVIEW ================= */}
        <div id="top">
          <ServicesHero methods={HERO_INDEX.map((label, i) => ({ label, id: HERO_LINKS[i] }))} />
        </div>

        {/* ================= WHITE CURVED TRANSITION SECTION ================= */}
        {/* --ov: how far the bar rides up over the hero (always more than the corner radius); it stays solid there.
            --fade: how far it then reaches down over the first method spread, fading out. The bar is exactly
            --ov + --fade tall and pulls that spread up by --fade, so it starts right where the hero ends. before: is a hero-coloured backing so nothing shows outside the rounded corners. */}
        <div id="look-closer" className="pointer-events-none relative z-30 w-full [--ov:56px] [--fade:64px] sm:[--ov:70px] md:[--ov:84px] md:[--fade:80px] mt-[calc(var(--ov)*-1)] mb-[calc(var(--fade)*-1)] before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-[var(--ov)] before:bg-yoode-onyx">
          <div className="w-full h-[calc(var(--ov)+var(--fade))] bg-[linear-gradient(to_bottom,#FAF9F6_var(--ov),rgba(250,249,246,0.6)_calc(var(--ov)+var(--fade)*0.45),rgba(250,249,246,0)_100%)] rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[60px] shadow-[0_-15px_40px_rgba(0,0,0,0.18)] px-6 md:px-12 pt-3.5 md:pt-4 flex items-start justify-between gap-3 *:pointer-events-auto">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yoode-coral opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yoode-coral"></span>
              </span>
              <span className="font-display font-extrabold uppercase tracking-wider text-xs md:text-sm text-yoode-onyx">
                Interactive Fabric Studio
              </span>
              <span className="hidden sm:inline text-xs text-gray-500 font-medium">
                · Zoom into the weave &amp; explore 7 crafts
              </span>
            </div>
            <a
              href="#m-dtg"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yoode-onyx text-white text-xs font-bold uppercase tracking-wider hover:bg-yoode-coral transition-colors shadow-sm cursor-pointer"
            >
              <span>Scroll to Explore</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </div>
        </div>

        {/* ================= SEVEN SPREADS (shared with each method's own page) ================= */}
        <MethodSpreads />

        <section className="relative z-[2] bg-white rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[60px] shadow-[0_-20px_50px_rgba(0,0,0,0.35)] -mt-16 sm:-mt-20 md:-mt-24 border-t border-black/5 py-[clamp(70px,10vw,140px)]">
          <div className={`${CONTAINER} grid justify-items-center gap-5 text-center`}>
            <div className={EYEBROW}>Walk in. Design it. Wear it.</div>
            <h2 data-split className={`${H2} max-w-[18ch]`}>That&apos;s the whole counter. Bring the artwork and we&apos;ll pick the method.</h2>
            <div data-reveal className="mt-2 flex flex-wrap justify-center gap-3">
              <Btn href="#quote" variant="coral">Start your order</Btn>
              <Btn href="#guide" variant="outline">See the method guide</Btn>
            </div>
          </div>
        </section>

        {/* ================= WHO IT'S FOR ================= */}
        <section id="who" className="py-[clamp(70px,9vw,130px)]">
          <div className={CONTAINER}>
            <SectionHead eyebrow="Who it's for" title={<>Made for the team, the field, <em>or just you.</em></>} text="Everything is customised. What changes is who it's for, how many you need, and how fast you need them." />
            <div className="grid gap-6 md:grid-cols-3">
              {PILLARS.map((p, i) => (
                <a key={p.k} href="#" data-reveal data-cursor="View" className={`group/p relative grid min-h-[420px] grid-rows-[auto_1fr_auto] gap-7 overflow-hidden p-8 transition-colors duration-500 hover:bg-[#F3EBE3] ${CARD}`}>
                  <div className="relative z-[1] flex justify-between text-xs font-bold uppercase tracking-[0.2em] text-gray-500"><span>{p.k}</span><span>{String(i + 1).padStart(2, "0")}</span></div>
                  <div className="relative z-[1]">
                    <h3 className="font-display text-[clamp(22px,2.2vw,32px)] font-extrabold uppercase leading-[1.05] tracking-tight [&_em]:not-italic [&_em]:text-yoode-coral">{p.title}</h3>
                    <p className="mt-3.5 max-w-[30ch] text-sm font-medium leading-relaxed text-gray-500">{p.text}</p>
                    <ul className="mt-4 grid list-none gap-1.5 p-0 text-[13px] font-medium text-yoode-onyx">
                      {p.list.map((l) => <li key={l} className="before:mr-1.5 before:text-yoode-coral before:content-['—']">{l}</li>)}
                    </ul>
                  </div>
                  <span className="relative z-[1] inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider">
                    {p.go} <span aria-hidden className="transition-transform duration-300 group-hover/p:translate-x-1.5">→</span>
                  </span>
                  <Glyph id={p.glyph} className={`pointer-events-none absolute -bottom-[8%] -right-[10%] w-3/5 opacity-90 transition-transform duration-700 group-hover/p:-translate-x-[6%] group-hover/p:-translate-y-[6%] group-hover/p:-rotate-[4deg] ${p.color}`} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ================= METHOD GUIDE ================= */}
        <MethodGuide />

        {/* ================= PRODUCTS ================= */}
        <section id="shop" data-look className="relative overflow-hidden bg-white h-[100svh] max-h-[100svh] flex flex-col justify-between pt-5 pb-5 md:pt-7 md:pb-6">
          <div className="w-full flex-none">
            <div className={CONTAINER}>
              <SectionHead compact eyebrow="Most loved" title={<>The pieces teams <em>come back for.</em></>} text="Pick a colour on any card. Every piece ships in bulk, customised with the method noted on it. Prices are per piece before customisation." />
            </div>
          </div>

          <div className="my-auto w-full py-4 md:py-6">
            <div id="lookTrack" className="flex gap-4 md:gap-5 px-6 will-change-transform md:px-12 py-1">
              {PRODUCTS.map((p, i) => <ProductCard key={p.name} p={p} i={i} />)}
            </div>
          </div>

          <div className="w-full flex-none">
            <div className={`${CONTAINER} flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wider text-gray-500`}>
              <span>Prices per piece before customisation · bulk pricing on request</span>
              <a href="#quote" className="inline-flex items-center gap-1.5 rounded-full border border-yoode-onyx px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-yoode-onyx hover:bg-yoode-onyx hover:text-white transition-colors">
                Shop all pieces <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <Process id="process" />

        {/* ================= CENTRES ================= */}
        <ExperienceCenters
          id="centres"
          subHeading="Experience Centres"
          title="See it. Touch it. Make it yours."
          description="Most merch is bought off a screen. Ours has four front doors. Walk in for fabric swatches, samples and a mockup on the spot."
        >
          <div className="mt-12 md:mt-16 w-full grid gap-6 md:grid-cols-3 pt-8 border-t border-gray-200/80">
            {WALK.map(([b, text]) => (
              <div key={b} className="text-sm text-gray-500">
                <b className="mb-1 block font-display text-base font-bold text-yoode-onyx">{b}</b>
                {text}
              </div>
            ))}
          </div>
        </ExperienceCenters>

        {/* ================= PROOF ================= */}
        <div aria-label="Trusted by" className="overflow-hidden border-y border-gray-200 py-5">
          <div className="animate-marquee gap-16 whitespace-nowrap">
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <span key={i} className="font-display text-[clamp(20px,2.4vw,32px)] font-bold text-yoode-onyx after:ml-16 after:text-yoode-coral after:content-['·']">{b}</span>
            ))}
          </div>
        </div>
        <section className="py-[clamp(70px,9vw,130px)]">
          <div className={CONTAINER}>
            <SectionHead eyebrow="From the order book" title={<>Loved by people who <em>care</em> about quality.</>} text="Real orders from teams who turned an idea into something people actually wear." />
            <div className="grid gap-5 lg:grid-cols-3">
              {TESTIMONIALS.map(([quote, who, role, order]) => (
                <div key={who} data-reveal className={`grid min-h-[300px] grid-rows-[auto_1fr_auto] gap-5 p-8 ${CARD}`}>
                  <div className="text-[13px] tracking-[0.2em] text-yoode-coral">★★★★★</div>
                  <blockquote className="m-0 font-display text-[clamp(18px,1.5vw,22px)] font-semibold leading-snug">{quote}</blockquote>
                  <div className="flex justify-between gap-3 text-[13px] text-gray-500"><span><b className="font-semibold text-yoode-onyx">{who}</b> · {role}</span><span>{order}</span></div>
                </div>
              ))}
            </div>
            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-gray-200 pt-7 tabular-nums lg:grid-cols-4">
              {NUMBERS.map(([n, label]) => (
                <div key={label} data-reveal>
                  <b className="block font-display text-[clamp(36px,5vw,72px)] font-extrabold leading-[0.95] tracking-tight text-yoode-onyx">{n}</b>
                  <small className="text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section id="faq" className="bg-[#F9FAFB] py-[clamp(70px,9vw,130px)]">
          <div className={`${CONTAINER} grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]`}>
            <aside className="lg:sticky lg:top-28">
              <div className={`${EYEBROW} mb-3`}>Before you order</div>
              <h2 data-split className={H2}>Answers to the <em>usual</em> questions.</h2>
              <p className="mt-5 max-w-[36ch] text-sm font-medium leading-relaxed text-gray-500 md:text-base">Still have one? A real person replies within two hours on working days.</p>
              <div className="mt-5"><Btn href="#quote" variant="onyx">Ask us</Btn></div>
            </aside>
            <div>
              {FAQS.map(([q, a], i) => (
                <details key={q} open={i === 0} data-reveal className="group/d border-t border-gray-200 last:border-b">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-display text-base font-bold leading-snug md:text-xl [&::-webkit-details-marker]:hidden">
                    {q}
                    <i className="grid size-9 flex-none place-items-center rounded-full border border-gray-300 text-base font-normal not-italic transition-[transform,background-color] duration-300 group-open/d:rotate-45 group-open/d:bg-yoode-onyx group-open/d:text-white">+</i>
                  </summary>
                  <div className="max-w-[56ch] pb-6 text-sm font-medium leading-relaxed text-gray-500 md:text-base">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================= END ================= */}
        <section id="quote" className="relative overflow-hidden bg-yoode-onyx py-[clamp(90px,12vw,170px)] text-white">
          <svg aria-hidden className="pointer-events-none absolute -bottom-[10%] -right-[4%] w-[42%] fill-current text-white/5"><use href="#g-tee" /></svg>
          <div className={`${CONTAINER} relative`}>
            <div className={`${EYEBROW} mb-5`}>Ready when you are</div>
            <h2 data-split className="max-w-[12ch] font-display text-[clamp(38px,7vw,112px)] font-extrabold uppercase leading-[0.95] tracking-tight [&_em]:not-italic [&_em]:text-yoode-coral">
              Your brand deserves more than <em>ordinary.</em>
            </h2>
            <p className="mt-7 max-w-[44ch] text-sm font-medium leading-relaxed text-white/70 md:text-base">Tell us what you need. A real person replies within two hours on working days, and your free mockup lands within twenty-four.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Btn href="https://wa.me/918069750293" variant="whatsapp" external>Chat on WhatsApp</Btn>
              <Btn href="#shop" variant="outlineLight">Browse the catalogue</Btn>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
