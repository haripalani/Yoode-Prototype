"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { CONTAINER, SECTION, EYEBROW, H2, H3, CARD, btnClass, Arrow, SectionHead, Note } from "@/components/yoode-ui";
import { HERO_SECTION, HERO_INNER, HERO_H1, HERO_SHORT, Pic, FaqSection, TestimonialRow, SeoBlock, EnquiryForm, WhatsAppIcon, waLink } from "@/components/landing/parts";
import type { CollectionPageContent, Product } from "./types";

/*
  One template for the collection landing pages (custom T-shirts, polos, hoodies, Onam, Christmas), in the
  home-page language: a dark hero under the transparent header, a curved panel, then the sections. All copy and
  photos come from the page's content file (./content); sections that a page has no content for are skipped.
*/

type Sort = "featured" | "low" | "high";
const priceOf = (p: Product) => Number(p.price.replace(/[^\d.]/g, "")) || 0;

function ProductCard({ p }: { p: Product }) {
  return (
    <a href={p.href} target="_blank" rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-[28px] bg-white p-3 text-left shadow-sm outline-none transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-yoode-coral focus-visible:ring-offset-4">
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-[20px] bg-[#F3F1EE]">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"><Pic photo={p.photo} width={700} /></div>
        {p.hover && (
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"><Pic photo={p.hover} width={700} /></div>
        )}
        {p.badges && p.badges.length > 0 && (
          <div className="absolute left-2 top-2 flex flex-wrap gap-1.5 md:left-3 md:top-3">
            {p.badges.map((b) => (
              <span key={b} className={`rounded-md px-2 py-0.5 text-[9px] font-semibold md:rounded-lg md:px-2.5 md:py-1 md:text-[11px] ${b === "Sale" ? "bg-yoode-coral text-white" : "bg-[#2D2B2A] text-white"}`}>{b}</span>
            ))}
          </div>
        )}
        <div className="absolute inset-x-3 bottom-3 flex items-end justify-end gap-2">
          {p.colours && (
            <span className="mr-auto flex h-11 flex-col items-center justify-center rounded-xl bg-white/95 px-3 shadow-sm backdrop-blur-md">
              <span className="text-[9px] font-bold tracking-widest text-gray-400">COLOURS</span>
              <span className="mt-0.5 text-[11px] font-bold tracking-wide text-yoode-onyx">{p.colours}+</span>
            </span>
          )}
          <span aria-hidden className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/95 text-gray-600 shadow-sm backdrop-blur-md transition-colors group-hover:bg-yoode-coral group-hover:text-white">
            <ArrowRight className="size-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 px-1 pb-2 pt-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3 sm:px-2">
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          {p.rating && (
            <span className="flex items-center gap-1 text-[11px] font-bold text-gray-500"><Star className="size-3 fill-[#F5B700] text-[#F5B700]" /> {p.rating}</span>
          )}
          <h3 className="text-[15px] font-bold leading-tight text-yoode-onyx">{p.name}</h3>
        </div>
        <div className="flex shrink-0 flex-row-reverse items-baseline justify-end gap-2 sm:flex-col sm:items-end sm:gap-0">
          {p.was && <span className="text-[12px] font-medium text-gray-400 line-through">{p.was}</span>}
          <span className="text-[15px] font-bold text-yoode-onyx">{p.price}</span>
        </div>
      </div>
    </a>
  );
}

function Pills<T extends string>({ value, options, onChange, label }: { value: T; options: [T, string][]; onChange: (v: T) => void; label: string }) {
  return (
    <div role="group" aria-label={label} className="flex rounded-full bg-white p-1 shadow-sm">
      {options.map(([v, text]) => (
        <button key={v} type="button" onClick={() => onChange(v)} aria-pressed={value === v}
          className={`cursor-pointer rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${value === v ? "bg-yoode-onyx text-white" : "text-gray-500 hover:text-yoode-onyx"}`}>
          {text}
        </button>
      ))}
    </div>
  );
}

export function CollectionPage({ c }: { c: CollectionPageContent }) {
  const [gender, setGender] = useState<"All" | "Men" | "Women">("All");
  const [sort, setSort] = useState<Sort>("featured");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    const list = c.shop.items.filter((p) => gender === "All" || p.gender === gender);
    if (sort === "low") return [...list].sort((a, b) => priceOf(a) - priceOf(b));
    if (sort === "high") return [...list].sort((a, b) => priceOf(b) - priceOf(a));
    return list;
  }, [c.shop.items, gender, sort]);
  const limit = c.shop.initial ?? filtered.length;
  const visible = showAll ? filtered : filtered.slice(0, limit);

  const wa = waLink(c.whatsapp);

  return (
    <div className="w-full bg-white font-sans text-yoode-onyx antialiased">
      {/* ================= HERO ================= */}
      <section className={HERO_SECTION}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-[10%] -bottom-[10%] h-[60vw] w-[60vw] rounded-full bg-yoode-coral/15 blur-[150px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06)_0%,transparent_70%)]" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-[12%] select-none overflow-hidden text-center">
          <span className="font-display text-[22vw] font-black leading-none tracking-tighter text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}>{c.ghost}</span>
        </div>

        <div className={`${CONTAINER} relative z-10 ${HERO_INNER} grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16`}>
          <div className="min-w-0">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-yoode-coral backdrop-blur-md">
              {c.hero.eyebrow}
            </div>
            <h1 className={`font-display ${HERO_H1} font-extrabold uppercase leading-[0.98] tracking-tight [&_em]:not-italic [&_em]:text-yoode-coral`}>{c.hero.title}</h1>
            <p className={`mt-5 max-w-[54ch] text-base font-medium leading-relaxed text-white/70 lg:text-lg ${HERO_SHORT}`}>{c.hero.text}</p>

            {c.hero.rating && (
              <div className="mt-6 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-white font-display text-lg font-extrabold text-[#4285F4]">G</span>
                <div>
                  <div className="flex items-center gap-1.5 text-sm font-bold">
                    <span className="flex text-[#F5B700]">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="size-3.5 fill-current" />)}</span>
                    {c.hero.rating.score}
                  </div>
                  <span className="text-xs font-medium text-white/50">{c.hero.rating.label}</span>
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#shop" className={btnClass("coral")}>{c.hero.primary} <Arrow /></a>
              <a href={wa} target="_blank" rel="noopener noreferrer" className={btnClass("outlineLight")}><WhatsAppIcon /> Share design</a>
            </div>
          </div>

          {/* collage: one tall photo, two stacked; desktop only, sized to the screen so the hero never runs past the fold */}
          <div className="relative hidden h-[min(600px,calc(100svh-240px))] grid-cols-[1.25fr_1fr] grid-rows-2 gap-4 lg:grid">
            <div className="relative row-span-2 overflow-hidden rounded-[28px] bg-white/5 ring-1 ring-white/10"><Pic photo={c.hero.collage[0]} width={900} eager /></div>
            <div className="relative overflow-hidden rounded-[28px] bg-white/5 ring-1 ring-white/10"><Pic photo={c.hero.collage[1]} width={600} eager /></div>
            <div className="relative overflow-hidden rounded-[28px] bg-white/5 ring-1 ring-white/10"><Pic photo={c.hero.collage[2]} width={600} eager /></div>
            <div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-yoode-onyx shadow-xl md:left-6">
              <span className="size-2 animate-pulse rounded-full bg-green-500" />
              {c.hero.chip}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CURVED PANEL: trust strip ================= */}
      <div className="relative z-40 -mt-[48px] rounded-t-[40px] bg-[#FAF9F6] shadow-[0_-10px_40px_rgba(0,0,0,0.12)] md:-mt-[72px] md:rounded-t-[60px]">
        <div className="border-b border-gray-200 pt-4 md:pt-6">
          <ul className={`${CONTAINER} m-0 grid list-none grid-cols-2 gap-y-4 py-6 md:grid-cols-4`}>
            {c.trust.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center justify-center gap-2.5 text-center text-xs font-bold uppercase tracking-wider text-yoode-onyx">
                <Icon className="size-4 shrink-0 text-yoode-coral" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= SHOP ================= */}
        <section id="shop" className={`scroll-mt-24 ${SECTION}`}>
          <div className={CONTAINER}>
            <SectionHead eyebrow={c.shop.eyebrow} title={c.shop.title} text={c.shop.text} />

            {c.shop.genderFilter && (
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <Pills label="Filter by fit" value={gender} onChange={(v) => { setGender(v); setShowAll(false); }}
                  options={[["All", `All · ${c.shop.items.length}`], ["Men", "Men"], ["Women", "Women"]]} />
                <Pills label="Sort" value={sort} onChange={setSort} options={[["featured", "Featured"], ["low", "Price ↑"], ["high", "Price ↓"]]} />
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
              {visible.map((p) => <ProductCard key={p.name} p={p} />)}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {!showAll && filtered.length > limit && (
                <button type="button" onClick={() => setShowAll(true)} className={btnClass("onyx")}>Show all {filtered.length} <Arrow /></button>
              )}
              {c.shop.viewAll && (
                <a href={c.shop.viewAll.href} target="_blank" rel="noopener noreferrer" className={btnClass("outline")}>{c.shop.viewAll.label} <Arrow /></a>
              )}
            </div>
            {c.shop.note && <Note className="text-center">{c.shop.note}</Note>}
          </div>
        </section>
      </div>

      {/* ================= STEPS ================= */}
      {c.steps && (
        <section className={`bg-[#F9FAFB] ${SECTION}`}>
          <div className={CONTAINER}>
            <SectionHead eyebrow={c.steps.eyebrow} title={c.steps.title} text={c.steps.text} />
            <ol className="m-0 grid list-none gap-6 p-0 md:grid-cols-3">
              {c.steps.items.map(({ title, text, photo }, i) => (
                <li key={title} className="group/s flex flex-col gap-5">
                  <div className={`${CARD} relative aspect-[4/3] overflow-hidden`}>
                    <div className="size-full transition-transform duration-700 ease-out group-hover/s:scale-105"><Pic photo={photo} /></div>
                    <span className="absolute left-4 top-4 grid size-12 place-items-center rounded-full bg-white font-display text-lg font-extrabold text-yoode-coral shadow-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="border-t-2 border-yoode-onyx pt-4">
                    <h3 className={`${H3} text-xl`}>{title}</h3>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-gray-500">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-12 flex justify-center">
              <a href={wa} target="_blank" rel="noopener noreferrer" className={btnClass("coral")}><WhatsAppIcon /> Start customising</a>
            </div>
          </div>
        </section>
      )}

      {/* ================= WHY ================= */}
      {c.why && (
        <section className={SECTION}>
          <div className={CONTAINER}>
            <SectionHead eyebrow={c.why.eyebrow} title={c.why.title} text={c.why.text} />
            <div className={`grid gap-6 sm:grid-cols-2 ${c.why.items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              {c.why.items.map(({ icon: Icon, title, text }, i) => (
                <div key={title} className={`${CARD} grid min-h-[260px] grid-rows-[auto_1fr_auto] gap-6 p-8 transition-colors duration-500 hover:bg-[#F3EBE3] ${c.why!.items.length === 5 && i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2 bg-yoode-onyx text-white hover:!bg-yoode-onyx" : ""}`}>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    <Icon className="size-6 text-yoode-coral" />
                    <span>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className={`${H3} self-end text-[clamp(20px,1.8vw,26px)] ${c.why!.items.length === 5 && i === 0 ? "!text-white" : ""}`}>{title}</h3>
                  <p className={`max-w-[34ch] text-sm font-medium leading-relaxed ${c.why!.items.length === 5 && i === 0 ? "text-white/60" : "text-gray-500"}`}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= METHODS ================= */}
      {c.methods && (
        <section className={`bg-[#F9FAFB] ${SECTION}`}>
          <div className={CONTAINER}>
            <SectionHead eyebrow={c.methods.eyebrow} title={c.methods.title} text={c.methods.text} />
            <div className={`grid gap-6 ${c.methods.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
              {c.methods.items.map(({ title, text, href, photo, tag }) => (
                <Link key={title} href={href} className="group/m flex flex-col overflow-hidden rounded-[24px] bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <div className="size-full transition-transform duration-700 ease-out group-hover/m:scale-105"><Pic photo={photo} /></div>
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-yoode-coral shadow-xs">{tag}</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-7">
                    <h3 className={`${H3} text-xl`}>{title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-gray-500">{text}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-xs font-bold uppercase tracking-wider text-yoode-onyx group-hover/m:text-yoode-coral">
                      How it works <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= PLACEMENTS ================= */}
      {c.placements && (
        <section className={SECTION}>
          <div className={CONTAINER}>
            <SectionHead eyebrow={c.placements.eyebrow} title={c.placements.title} text={c.placements.text} />
            <div className="grid gap-6 md:grid-cols-3">
              {c.placements.items.map(({ title, text, photo, area: [l, t, w, h] }) => (
                <div key={title} className="group/p flex flex-col gap-3">
                  <div className={`${CARD} relative aspect-[4/5] overflow-hidden`}>
                    <div className="size-full transition-transform duration-700 ease-out group-hover/p:scale-105"><Pic photo={photo} /></div>
                    <span aria-hidden style={{ left: `${l}%`, top: `${t}%`, width: `${w}%`, height: `${h}%` }}
                      className="pointer-events-none absolute rounded-lg border-2 border-dashed border-yoode-coral/90 bg-yoode-coral/5 transition-[scale] duration-500 group-hover/p:scale-105" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-600 shadow-xs">{title}</span>
                  </div>
                  <div className="px-0.5">
                    <h3 className="font-display text-base font-bold text-yoode-onyx">{title}</h3>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-gray-500">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= OCCASIONS ================= */}
      {c.occasions && (
        <section className={`${c.placements ? "bg-[#F9FAFB]" : ""} ${SECTION}`}>
          <div className={CONTAINER}>
            <SectionHead eyebrow={c.occasions.eyebrow} title={c.occasions.title} text={c.occasions.text} />
            <div className={`grid gap-6 sm:grid-cols-2 ${c.occasions.items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
              {c.occasions.items.map(({ title, text, photo }) => (
                <article key={title} className="group/o relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[24px] bg-yoode-onyx p-6 text-white">
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover/o:scale-105"><Pic photo={photo} /></div>
                  <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="relative">
                    <h3 className="font-display text-xl font-extrabold uppercase leading-tight tracking-tight">{title}</h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-white/75">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= STORY (festive editorial) ================= */}
      {c.story && (
        <section className={`bg-[#F9FAFB] ${SECTION}`}>
          <div className={`${CONTAINER} grid items-start gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16`}>
            <div className="lg:sticky lg:top-28">
              <div className={`${EYEBROW} mb-3`}>{c.story.eyebrow}</div>
              <h2 className={H2}>{c.story.title}</h2>
              <div className={`${CARD} mt-8 aspect-[4/5] overflow-hidden`}><Pic photo={c.story.photo} /></div>
            </div>
            <ol className="m-0 list-none p-0">
              {c.story.chapters.map(({ title, body }, i) => (
                <li key={title} className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-gray-200 py-8 last:border-b">
                  <span className="font-display text-3xl font-extrabold leading-none tracking-tight text-yoode-coral">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className={`${H3} text-xl md:text-2xl`}>{title}</h3>
                    <div className="mt-3 space-y-3 text-sm font-medium leading-relaxed text-gray-500 md:text-base [&_b]:text-yoode-onyx">{body}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ================= SPECS strip ================= */}
      {c.specs && (
        <section className="relative overflow-hidden bg-yoode-onyx py-[clamp(60px,7vw,100px)] text-white">
          <div aria-hidden className="pointer-events-none absolute -right-[8%] -top-1/2 h-[140%] w-[45%] rounded-full bg-yoode-coral/15 blur-[120px]" />
          <div className={`${CONTAINER} relative`}>
            <div className={`${EYEBROW} mb-3`}>{c.specs.eyebrow}</div>
            <h2 className="max-w-[20ch] font-display text-[clamp(30px,4.4vw,56px)] font-extrabold uppercase leading-[1.02] tracking-tight [&_em]:not-italic [&_em]:text-yoode-coral">{c.specs.title}</h2>
            <dl className="m-0 mt-12 grid gap-px overflow-hidden rounded-[24px] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {c.specs.items.map(([k, v]) => (
                <div key={k} className="bg-yoode-onyx p-7">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">{k}</dt>
                  <dd className="m-0 mt-3 font-display text-lg font-bold leading-snug">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ================= TESTIMONIALS ================= */}
      {c.testimonials && <TestimonialRow items={c.testimonials} title={<>Loved by <em>customers.</em></>} />}

      {/* ================= FAQ ================= */}
      {c.faqs && <FaqSection text={c.faqs.text} items={c.faqs.items} />}

      {/* ================= GUIDES ================= */}
      {c.guides && (
        <section className={SECTION}>
          <div className={CONTAINER}>
            <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className={`${EYEBROW} mb-3`}>From the Yoode blog</div>
                <h2 className={H2}>{c.guides.title}</h2>
              </div>
              <a href={c.guides.href} target="_blank" rel="noopener noreferrer" className={btnClass("outline")}>Read all <Arrow /></a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {c.guides.items.map(({ title, href }, i) => (
                <a key={title} href={href} target="_blank" rel="noopener noreferrer"
                  className={`${CARD} group/g flex min-h-[220px] flex-col justify-between gap-8 p-7 transition-colors duration-500 hover:bg-[#F3EBE3]`}>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Guide · {String(i + 1).padStart(2, "0")}</span>
                  <h3 className={`${H3} text-lg md:text-xl`}>{title}</h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-yoode-onyx group-hover/g:text-yoode-coral">Read guide <ArrowUpRight className="size-3.5" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= MORE THAN … ================= */}
      <section className={`bg-[#F9FAFB] ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="mb-12">
            <div className={`${EYEBROW} mb-3`}>Keep exploring</div>
            <h2 className={H2}>{c.more.title}</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {c.more.items.map(({ title, href, photo }) => (
              <Link key={title} href={href} className="group/x relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[24px] bg-[#F3F1EE] p-4 md:p-6">
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover/x:scale-105"><Pic photo={photo} width={600} /></div>
                <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                <div className="relative flex items-center justify-between gap-2 text-white">
                  <h3 className="font-display text-base font-extrabold uppercase tracking-tight md:text-xl">{title}</h3>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur-md transition-colors group-hover/x:bg-yoode-coral">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section id="quote" className="relative overflow-hidden bg-yoode-onyx text-white">
        <div aria-hidden className="pointer-events-none absolute -bottom-1/4 -left-[10%] h-[70%] w-[50%] rounded-full bg-yoode-coral/15 blur-[140px]" />
        <div className={`${CONTAINER} relative grid gap-10 py-[clamp(70px,9vw,130px)] lg:grid-cols-[.9fr_1.1fr] lg:gap-14`}>
          <div className="flex flex-col">
            <div className={`${EYEBROW} mb-4`}>Get a free mockup</div>
            <h2 className="font-display text-[clamp(36px,5.5vw,84px)] font-extrabold uppercase leading-[0.96] tracking-tight [&_em]:not-italic [&_em]:text-yoode-coral">{c.quote.title}</h2>
            <p className="mt-6 max-w-[44ch] text-sm font-medium leading-relaxed text-white/70 md:text-base">{c.quote.text}</p>
            <div className="mt-8 flex justify-center lg:mt-auto lg:justify-start lg:pt-10">
              <div className="aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-[24px] shadow-2xl ring-1 ring-white/10"><Pic photo={c.quote.photo} /></div>
            </div>
          </div>
          <EnquiryForm
            title="Get a mockup"
            text={`Tell us about your ${c.short} order. We reply on WhatsApp with a free design mockup.`}
            intro={`Hi Yoode, I'd like a mockup for ${c.short}s.`}
            cta="Send my details on WhatsApp"
            fields={[
              { id: "name", label: "Name *", placeholder: "Your name or company", required: true },
              { id: "phone", label: "Phone number *", type: "tel", placeholder: "+91 XXXXX XXXXX", required: true },
              { id: "product", label: "What are you ordering? *", placeholder: "Select a product", required: true, options: [...c.quote.options, "Help me choose"] },
              { id: "qty", label: "Quantity", type: "number", placeholder: "e.g. 25" },
              { id: "notes", label: "Requirements *", placeholder: "Colours, sizes, logo placement, deadline…", required: true, wide: true },
            ]}
          />
        </div>
      </section>

      {/* ================= SEO copy ================= */}
      {c.seo && <SeoBlock blocks={c.seo} />}
    </div>
  );
}
