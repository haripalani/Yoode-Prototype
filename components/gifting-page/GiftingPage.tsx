"use client";

import React from "react";
import Link from "next/link";
import {
  Star, Search, BadgePercent, Clock, Headphones, ShieldCheck, CreditCard, Rocket, ArrowUpRight, Phone, MapPin,
  Briefcase, UserPlus, Handshake, PartyPopper, Boxes,
} from "lucide-react";
import { CONTAINER, SECTION, EYEBROW, H2, H3, CARD, BODY, btnClass, Arrow, SectionHead } from "@/components/yoode-ui";
import { type Field, HERO_SECTION, HERO_INNER, HERO_H1, HERO_SHORT, goToForm, Pic, FaqSection, SeoBlock, EnquiryForm, WhatsAppIcon, waLink } from "@/components/landing/parts";
import { ExperienceCenters } from "@/components/ExperienceCenters";
import type { GiftingCityContent } from "./types";

/*
  One template for the corporate-gifting city pages, in the home-page language: a dark hero with the call-back
  form, a curved panel, then the sections. City copy comes from ./content; the catalogue, "why Yoode", recent
  deliveries and process are the same for every city and live here.
*/

const CDN = "https://yoode.com/cdn/shop/files";

const WHY = [
  { icon: Star, title: "4.9★ Google rating", text: "Hundreds of happy customers and repeat corporate clients." },
  { icon: Search, title: "Exactly what you need", text: "Apparel, drinkware, bags, stationery and hampers in one place." },
  { icon: BadgePercent, title: "Bulk order discounts", text: "The price per piece drops as your order grows." },
  { icon: Clock, title: "On-time delivery", text: "A dedicated team keeps every order to its event date." },
  { icon: Headphones, title: "Support when you need it", text: "Questions, changes and guidance from one point of contact." },
  { icon: ShieldCheck, title: "Trusted by enterprises", text: "150+ corporates, from startups to large enterprises." },
  { icon: CreditCard, title: "Flexible payments", text: "Bank transfer, UPI and card, with GST invoicing." },
  { icon: Rocket, title: "Rush orders", text: "Tight deadline? Ask us. We turn rush orders around." },
];

const CATALOGUE = [
  { title: "T-shirts & polos", href: "/custom-polos", photo: { src: "/menu/polo-color.webp", alt: "Custom polo shirt" } },
  { title: "Hoodies & jackets", href: "/custom-hoodies", photo: { src: "/menu/hoodie-color.webp", alt: "Custom hoodie" } },
  { title: "Drinkware", href: "/category", photo: { src: "/menu/drinkware-color.webp", alt: "Branded mugs and bottles" } },
  { title: "Backpacks & bags", href: "/category", photo: { src: "/menu/backpack-color.webp", alt: "Branded backpack" } },
  { title: "Caps & headwear", href: "/category", photo: { src: "/menu/cap-embroidered-color.webp", alt: "Embroidered cap" } },
  { title: "Gift hampers", href: "/category", photo: { src: "/menu/gift-hamper-color.webp", alt: "Corporate gift hamper" } },
  { title: "Eco-friendly gifts", href: "/category", photo: { src: "/menu/eco-gifts-color.webp", alt: "Eco-friendly gifts" } },
  { title: "Promo products", href: "/category", photo: { src: "/menu/promo-products-color.webp", alt: "Pens, notebooks and promotional products" } },
];

const DELIVERIES = [
  ["corp-recent-work-tshirt-notebook.jpg", "Branded T-shirt and notebook kit"],
  ["corp-recent-work-bag.jpg", "Branded bags"],
  ["corp-recent-work-giftbox.jpg", "Corporate gift box"],
  ["corp-recent-work-mugs.jpg", "Branded mugs"],
  ["corp-recent-work-bottles.jpg", "Branded bottles"],
  ["corp-recent-work-mousepad.jpg", "Branded mouse pads"],
  ["corp-recent-work-temperature-bottle.jpg", "Temperature display bottles"],
] as const;

const PROCESS = [
  ["Share the brief", "Occasion, number of recipients, budget per head and delivery date."],
  ["Pick the gifts", "We shortlist products that fit the brief, and send samples where you need them."],
  ["Approve the mockup", "See your logo on every item before anything goes into production."],
  ["Packed & delivered", "Branded, packed and delivered to one office or to every recipient's door."],
];

const OCCASION_ICONS = [UserPlus, Handshake, PartyPopper, Boxes, Briefcase];

const CITIES = [
  { name: "Bangalore", href: "/corporate-gifting-company-in-bangalore" },
  { name: "Chennai", href: "/corporate-gifting-company-in-chennai" },
  { name: "Trivandrum", href: "/corporate-gifting-company-in-trivandrum" },
];

export function GiftingPage({ c }: { c: GiftingCityContent }) {
  const callBack = (compact: boolean) => (
    <EnquiryForm
      compact={compact}
      title="Quick call back"
      text={`Free consultation for corporate gifting in ${c.city}. We call or WhatsApp you back.`}
      intro={`Hi Yoode, I would like a call back about corporate gifting in ${c.city}.`}
      cta="Request call back"
      fields={([
        { id: "name", label: "Name *", placeholder: "Your name", required: true },
        { id: "phone", label: "Phone number *", type: "tel", placeholder: "+91 XXXXX XXXXX", required: true },
        { id: "email", label: "Business email", type: "email", placeholder: "you@company.com" },
        { id: "company", label: "Company", placeholder: "Company name" },
        { id: "qty", label: "Recipients", type: "number", placeholder: "e.g. 120" },
        { id: "occasion", label: "Occasion", placeholder: "Select an occasion", options: ["Employee welcome kits", "Client gifts", "Festive gifting", "Event / conference merch", "Rewards & milestones", "Other"] },
        { id: "notes", label: "Message", placeholder: "Budget per person, products you like, delivery date…", wide: true },
      ] as Field[]).filter((field) => !compact || !["email", "qty"].includes(field.id))}
    />
  );
  const consult = waLink(`Hi Yoode, I'd like a free corporate gifting consultation in ${c.city}.`);

  return (
    <div className="w-full bg-white font-sans text-yoode-onyx antialiased">
      {/* ================= HERO with call-back form ================= */}
      <section className={HERO_SECTION}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-[10%] -bottom-[10%] h-[60vw] w-[60vw] rounded-full bg-yoode-coral/15 blur-[150px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06)_0%,transparent_70%)]" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-[10%] select-none overflow-hidden text-center">
          <span className="font-display text-[20vw] font-black leading-none tracking-tighter text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}>{c.ghost}</span>
        </div>

        <div className={`${CONTAINER} ${HERO_INNER} relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16`}>
          <div className="min-w-0">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-yoode-coral backdrop-blur-md">
              <MapPin className="size-3.5" /> {c.hero.eyebrow}
            </div>
            <h1 className={`font-display ${HERO_H1} font-extrabold uppercase leading-[0.98] tracking-tight [&_em]:not-italic [&_em]:text-yoode-coral`}>{c.hero.title}</h1>
            {c.hero.text.map((t, i) => (
              <p key={t} className={`mt-5 max-w-[56ch] text-base font-medium leading-relaxed text-white/70 ${i > 0 ? "hidden [@media(min-width:1280px)_and_(min-height:960px)]:block" : `[@media(min-width:1024px)_and_(max-height:760px)]:hidden ${HERO_SHORT}`}`}>{t}</p>
            ))}

            <dl className="m-0 mt-8 grid [@media(max-height:700px)]:hidden [@media(min-width:1024px)_and_(max-height:860px)]:hidden max-w-[560px] grid-cols-3 gap-px overflow-hidden rounded-[20px] bg-white/10">
              {[["150+", "Corporates served"], ["4.9★", "Google rating"], ["Pan-India", "Delivery"]].map(([v, k]) => (
                <div key={k} className="bg-yoode-onyx px-4 py-4">
                  <dd className="m-0 font-display text-2xl font-extrabold md:text-3xl">{v}</dd>
                  <dt className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">{k}</dt>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={consult} target="_blank" rel="noopener noreferrer" className={btnClass("coral")}><WhatsAppIcon /> Get gift ideas</a>
              <a href="tel:+918069750293" className={btnClass("outlineLight")}><Phone className="size-4" /> Call us</a>
            </div>
          </div>

          {/* the call-back form sits beside the text on desktop; on smaller screens it follows the hero */}
          <div id="quote" data-callback className="hidden scroll-mt-24 lg:block">{callBack(true)}</div>
        </div>
      </section>

      {/* ================= CURVED PANEL: intro ================= */}
      <div className="relative z-40 -mt-[48px] rounded-t-[40px] bg-[#FAF9F6] shadow-[0_-10px_40px_rgba(0,0,0,0.12)] md:-mt-[72px] md:rounded-t-[60px]">
        <section className={SECTION}>
          <div className={`${CONTAINER} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
            <div className={`${CARD} relative aspect-[5/4] overflow-hidden`}>
              <Pic photo={{ src: `${CDN}/yd-blr-gift.webp`, alt: `Corporate gifts by Yoode in ${c.city}` }} width={1200} />
              <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-yoode-onyx shadow-sm">
                <span className="text-yoode-coral">150+</span> corporates served
              </span>
            </div>
            <div className="min-w-0">
              <div className={`${EYEBROW} mb-3`}>{c.intro.eyebrow}</div>
              <h2 className={H2}>{c.intro.title}</h2>
              {c.intro.text.map((t) => <p key={t} className={`mt-5 max-w-[56ch] ${BODY}`}>{t}</p>)}
              <blockquote className="m-0 mt-8 border-l-4 border-yoode-coral pl-5 font-display text-lg font-bold leading-snug text-yoode-onyx md:text-xl">{c.intro.tagline}</blockquote>
              {c.intro.after.map((t) => <p key={t} className={`mt-5 max-w-[56ch] ${BODY}`}>{t}</p>)}
            </div>
          </div>
        </section>
        <section data-callback className="scroll-mt-24 bg-yoode-onyx py-16 lg:hidden">
          <div className={CONTAINER}>{callBack(false)}</div>
        </section>
      </div>

      {/* ================= CATALOGUE ================= */}
      <section className={`bg-[#F9FAFB] ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHead eyebrow="What we brand" title={<>Gifts people <em>actually</em> use</>} text="Every item can carry your logo, colours, a name or a message. Mix them into kits or hampers." />
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {CATALOGUE.map(({ title, href, photo }) => (
              <Link key={title} href={href} className="group/c flex flex-col gap-3 rounded-[24px] bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
                <div className="aspect-square overflow-hidden rounded-[18px] bg-[#F3F1EE]">
                  <div className="size-full p-4 transition-transform duration-700 ease-out group-hover/c:scale-105 md:p-6"><Pic photo={photo} className="!object-contain" width={500} /></div>
                </div>
                <div className="flex items-center justify-between gap-2 px-2 pb-1">
                  <h3 className="text-[15px] font-bold leading-tight text-yoode-onyx">{title}</h3>
                  <ArrowUpRight className="size-4 shrink-0 text-gray-400 transition-colors group-hover/c:text-yoode-coral" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className={SECTION}>
        <div className={CONTAINER}>
          <SectionHead eyebrow="Why Yoode" title={<>Why Yoode is your <em>first choice</em></>} text="Everything from product selection to branding, packing and delivery, handled by one team." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className={`${CARD} grid min-h-[220px] grid-rows-[auto_1fr_auto] gap-5 p-7 transition-colors duration-500 hover:bg-[#F3EBE3]`}>
                <div className="flex justify-between text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  <Icon className="size-6 text-yoode-coral" />
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className={`${H3} self-end text-lg`}>{title}</h3>
                <p className="text-sm font-medium leading-relaxed text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENEFITS (dark) ================= */}
      <section className="relative overflow-hidden bg-yoode-onyx py-[clamp(70px,9vw,130px)] text-white">
        <div aria-hidden className="pointer-events-none absolute -right-[8%] -top-1/2 h-[140%] w-[45%] rounded-full bg-yoode-coral/15 blur-[120px]" />
        <div className={`${CONTAINER} relative grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16`}>
          <div>
            <div className={`${EYEBROW} mb-3`}>{c.benefits.eyebrow}</div>
            <h2 className="font-display text-[clamp(30px,4.4vw,56px)] font-extrabold uppercase leading-[1.02] tracking-tight [&_em]:not-italic [&_em]:text-yoode-coral">{c.benefits.title}</h2>
            <p className="mt-5 max-w-[52ch] text-sm font-medium leading-relaxed text-white/70 md:text-base">{c.benefits.text}</p>
            <ul className="m-0 mt-10 list-none p-0">
              {c.benefits.items.map(([title, text], i) => (
                <li key={title} className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-white/10 py-5 last:border-b">
                  <span className="font-display text-2xl font-extrabold leading-none tracking-tight text-yoode-coral">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <b className="block font-display text-base font-bold">{title}</b>
                    <span className="mt-0.5 block text-sm font-medium text-white/60">{text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[28px] ring-1 ring-white/10">
              <Pic photo={{ src: `${CDN}/yd-blr-giftbox.webp`, alt: "Branded corporate gift box" }} width={1000} />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-[20px] bg-white p-6 text-yoode-onyx shadow-2xl md:left-auto md:w-[300px]">
              <div className="font-display text-4xl font-extrabold text-yoode-coral">150+</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider">Corporates served</div>
              <p className="mt-2 text-xs font-medium leading-relaxed text-gray-500">{c.benefits.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OCCASIONS ================= */}
      <section className={SECTION}>
        <div className={CONTAINER}>
          <SectionHead eyebrow="Gifting for every occasion" title={<>Who are you <em>gifting?</em></>} text={`Corporate gifting in ${c.city} for the people and moments that matter to your business.`} />
          <div className="grid gap-6 md:grid-cols-2">
            {c.occasions.map(([title, text], i) => {
              const Icon = OCCASION_ICONS[i % OCCASION_ICONS.length];
              return (
                <div key={title} className={`${CARD} flex gap-6 p-7 transition-colors duration-500 hover:bg-[#F3EBE3] md:p-9`}>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-yoode-coral shadow-sm"><Icon className="size-5" /></span>
                  <div>
                    <h3 className={`${H3} text-lg md:text-xl`}>{title}</h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-gray-500">{text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= RECENT DELIVERIES (marquee) ================= */}
      <section className={`overflow-hidden bg-[#F9FAFB] ${SECTION}`}>
        <style>{`@keyframes yd-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}.yd-marquee{animation:yd-marquee 40s linear infinite}.yd-marquee:hover{animation-play-state:paused}@media (prefers-reduced-motion:reduce){.yd-marquee{animation:none}}`}</style>
        <div className={`${CONTAINER} mb-12`}>
          <div className={`${EYEBROW} mb-3`}>Preferred by the best, trusted by the rest</div>
          <h2 className={H2}>Recent <em>deliveries</em></h2>
        </div>
        <div className="yd-marquee flex w-max gap-4 md:gap-6">
          {[...DELIVERIES, ...DELIVERIES].map(([file, alt], i) => (
            <div key={i} aria-hidden={i >= DELIVERIES.length} className="h-[260px] w-[220px] shrink-0 overflow-hidden rounded-[24px] bg-[#F3F1EE] md:h-[340px] md:w-[290px]">
              <Pic photo={{ src: `${CDN}/${file}`, alt }} width={600} />
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className={SECTION}>
        <div className={CONTAINER}>
          <SectionHead eyebrow="Bulk gifting made simple" title={<>From brief to <em>doorstep</em></>} text="The same four steps for 50 gifts or 5,000, and nothing is produced until you approve it." />
          <ol className="m-0 grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map(([title, text], i) => (
              <li key={title} className="border-t-2 border-yoode-onyx pt-5">
                <b className="block font-display text-[clamp(36px,4vw,56px)] font-extrabold leading-none tracking-tight text-yoode-coral">{String(i + 1).padStart(2, "0")}</b>
                <h3 className="mt-4 font-display text-lg font-bold text-yoode-onyx">{title}</h3>
                <p className="mt-1.5 text-sm font-medium leading-relaxed text-gray-500">{text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap gap-3">
            <a href="#quote" onClick={goToForm} className={btnClass("coral")}>Request a quote <Arrow /></a>
            <a href={consult} target="_blank" rel="noopener noreferrer" className={btnClass("outline")}><WhatsAppIcon /> Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* ================= STORES ================= */}
      <ExperienceCenters subHeading="Visit us" title={`See the gifts in person before you order.`} />

      {/* ================= FAQ ================= */}
      <FaqSection text={`What companies in ${c.city} ask before placing a gifting order.`} items={c.faqs} />

      {/* ================= OTHER CITIES ================= */}
      <section className="border-t border-gray-200 py-10">
        <div className={`${CONTAINER} flex flex-wrap items-center gap-3`}>
          <span className="mr-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Corporate gifting in</span>
          {CITIES.map(({ name, href }) => (
            name === c.city ? (
              <span key={name} className="rounded-full bg-yoode-onyx px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">{name}</span>
            ) : (
              <Link key={name} href={href} className="rounded-full border border-gray-300 px-4 py-2 text-xs font-bold uppercase tracking-wider text-yoode-onyx transition-colors hover:border-yoode-onyx">{name}</Link>
            )
          ))}
        </div>
      </section>

      {/* ================= SEO copy ================= */}
      <SeoBlock blocks={c.seo} />
    </div>
  );
}
