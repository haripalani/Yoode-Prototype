"use client";

import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Play, Check, Phone } from "lucide-react";
import { MethodSpreads } from "@/components/method-spreads/MethodSpreads";
import { CONTAINER, SECTION, EYEBROW, H2, H3, CARD, BODY, Btn, btnClass, Arrow, SectionHead, Note } from "@/components/yoode-ui";
import type { MethodPageContent, Photo } from "./types";

/*
  One template for every method page (DTG, DTF, Embroidery, Coloreel, Screen, UV, Engraving), laid out like the
  home page: the method's Services spread as a full-screen hero under the transparent header, then a curved panel,
  then the sections. All copy and photos come from the method's content file (./content).
*/

// the live 3D machine (three.js) is fetched only in the browser, after the page itself
const Machine3D = dynamic(() => import("./machines/Machine3D"), { ssr: false, loading: () => <div className="aspect-[5/4] w-full" /> });

/* ---------------- small pieces ---------------- */

const FIELD = "w-full rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-sm text-yoode-onyx placeholder:text-gray-400 transition-colors focus:border-yoode-coral focus:bg-white focus:outline-none";
const LABEL = "mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-gray-500";

/** A real photo, cropped by object-position and an optional zoom around it. */
function Pic({ photo, className = "", decorative }: { photo: Photo; className?: string; decorative?: boolean }) {
  const { src, alt, pos = "50% 50%", zoom = 1 } = photo;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={decorative ? "" : alt} loading="lazy" decoding="async" className={`size-full object-cover ${className}`}
      style={{ objectPosition: pos, transform: zoom > 1 ? `scale(${zoom})` : undefined, transformOrigin: pos }} />
  );
}

/** Label chip that sits on a photo. */
function Chip({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span className={`absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] shadow-xs ${accent ? "text-yoode-coral" : "text-gray-600"}`}>
      {children}
    </span>
  );
}

/** Numbered row, as in the Services fact lists: rule on top, coral number, bold title, quiet line. */
function StepRow({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <li className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-gray-200 py-4 last:border-b">
      <span className="font-display text-2xl font-extrabold leading-none tracking-tight text-yoode-coral">{String(n).padStart(2, "0")}</span>
      <div>
        <b className="block font-display text-base font-bold text-yoode-onyx">{title}</b>
        <span className="mt-0.5 block text-sm font-medium text-gray-500">{text}</span>
      </div>
    </li>
  );
}

/** "https://youtu.be/…", a youtube.com watch/embed/shorts link, or a direct .mp4/.webm → something the player can load */
function parseVideoUrl(raw: string) {
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    const host = url.hostname.toLowerCase();
    let id = "";
    if (host === "youtu.be") id = url.pathname.split("/")[1];
    else if (["youtube.com", "www.youtube.com", "m.youtube.com", "www.youtube-nocookie.com", "youtube-nocookie.com"].includes(host)) {
      if (url.pathname === "/watch") id = url.searchParams.get("v") || "";
      else if (/^\/(embed|shorts|live)\//.test(url.pathname)) id = url.pathname.split("/")[2];
    }
    if (id && /^[A-Za-z0-9_-]{11}$/.test(id)) return { type: "youtube" as const, src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0` };
    if (/\.(mp4|webm)$/i.test(url.pathname)) return { type: "video" as const, src: url.href };
    return null;
  } catch {
    return null;
  }
}

/* ---------------- page ---------------- */

export function MethodPage({ c }: { c: MethodPageContent }) {
  const productNames = c.products.items.map((p) => p.name);
  const [formData, setFormData] = useState({ fullname: "", phone: "", quantity: "", city: "", product: "", placement: "Help me choose", notes: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [inputUrl, setInputUrl] = useState("");
  const [isVideoDrawerOpen, setIsVideoDrawerOpen] = useState(false);
  const [videoMedia, setVideoMedia] = useState<{ type: "youtube" | "video"; src: string } | null>(null);
  const [videoStatus, setVideoStatus] = useState("");
  const videoInputRef = useRef<HTMLInputElement>(null);

  const selectProduct = (name: string) => {
    setFormData((prev) => ({ ...prev, product: name }));
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleVideoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const media = parseVideoUrl(inputUrl.trim());
    if (!media) { setVideoStatus("Please enter a valid YouTube or direct .mp4/.webm link."); return; }
    setVideoMedia(media);
    setVideoStatus("Video loaded into player.");
    setIsVideoDrawerOpen(false);
  };

  const handlePlayClick = () => {
    if (!videoMedia) {
      setIsVideoDrawerOpen(true);
      setTimeout(() => videoInputRef.current?.focus(), 150);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => { e.preventDefault(); setFormSubmitted(true); };

  return (
    <div className="w-full bg-white font-sans text-yoode-onyx antialiased">
      {/* ================= HERO: the method's Services spread, full screen, playing on load ================= */}
      <MethodSpreads ids={[c.spreadId]} linkable={false} hero={{ cta: { href: "#quote", label: `Get a ${c.short} quote` } }} />

      {/* ================= CURVED PANEL (second section, as on the home page) =================
          The pull-up is always larger than the corner radius (48 > 40, 72 > 60) so the hero, not the page
          background, shows outside the curve. */}
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

        {/* ================= WHAT IS IT ================= */}
        <section id="explained" className={SECTION}>
          <div className={`${CONTAINER} grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
            <div className="min-w-0">
              <div className={`${EYEBROW} mb-3`}>{c.explain.eyebrow}</div>
              <h2 className={H2}>{c.explain.title}</h2>
              <p className={`mt-5 mb-8 max-w-[52ch] ${BODY}`}>{c.explain.text}</p>
              <ol className="m-0 list-none p-0">
                {c.explain.steps.map(([title, text], i) => <StepRow key={title} n={i + 1} title={title} text={text} />)}
              </ol>
            </div>
            {/* the live machine, straight on the section (no card) */}
            <Machine3D kind={c.machine} className="mx-auto aspect-[5/4] w-full min-w-0 max-w-[560px] lg:max-w-none" />
          </div>
        </section>
      </div>

      {/* ================= PRODUCTS (the site's product card) ================= */}
      <section id="products" className={`bg-[#F9FAFB] ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHead eyebrow={c.products.eyebrow} title={c.products.title} text={c.products.text} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.products.items.map(({ name, text, tag, min, photo }) => (
              <button
                key={name}
                type="button"
                onClick={() => selectProduct(name)}
                aria-label={`Enquire about ${c.name} on ${name}`}
                className="group flex cursor-pointer flex-col gap-3 rounded-[28px] bg-white p-3 text-left shadow-sm outline-none transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-yoode-coral focus-visible:ring-offset-4"
              >
                <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-[20px] md:aspect-[4/5]">
                  <div className="absolute inset-0 overflow-hidden rounded-[20px] bg-gray-100">
                    <div className="size-full transition-transform duration-700 ease-out group-hover:scale-105"><Pic photo={photo} /></div>
                    <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <div className="absolute left-2 top-2 flex flex-col gap-1.5 sm:flex-row md:left-3 md:top-3 md:gap-2">
                    <span className="w-max rounded-md bg-[#2D2B2A] px-2 py-0.5 text-[9px] font-semibold text-white md:rounded-lg md:px-2.5 md:py-1 md:text-[11px]">{c.short}</span>
                    <span className="hidden w-max rounded-md bg-white/90 px-2 py-0.5 text-[9px] font-semibold text-yoode-onyx shadow-sm backdrop-blur-sm sm:block md:rounded-lg md:px-2.5 md:py-1 md:text-[11px]">{tag}</span>
                  </div>
                  <div className="absolute inset-x-3 bottom-3 flex items-end justify-end gap-2">
                    <span className="mr-auto flex h-11 flex-col items-center justify-center rounded-xl bg-white/95 px-3 shadow-sm backdrop-blur-md">
                      <span className="text-[9px] font-bold tracking-widest text-gray-400">MIN</span>
                      <span className="mt-0.5 text-[11px] font-bold tracking-wide text-yoode-onyx">{min}</span>
                    </span>
                    <span aria-hidden className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/95 text-gray-600 shadow-sm backdrop-blur-md transition-colors group-hover:bg-yoode-coral group-hover:text-white">
                      <ArrowRight className="size-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                    </span>
                  </div>
                </div>
                <div className="flex items-start justify-between px-2 pb-2 pt-2">
                  <div className="flex flex-1 flex-col gap-1 pr-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{c.kicker}</span>
                    <h3 className="text-[15px] font-bold leading-tight text-yoode-onyx">{name}</h3>
                    <p className="mt-0.5 line-clamp-2 text-xs font-medium leading-relaxed text-gray-500">{text}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end">
                    <span className="text-[12px] font-medium text-gray-400">Price</span>
                    <span className="text-[15px] font-bold text-yoode-onyx">On quote</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <Note>{c.products.note}</Note>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className={SECTION}>
        <div className={CONTAINER}>
          <SectionHead eyebrow={c.why.eyebrow} title={c.why.title} text={c.why.text} />
          <div className="grid gap-6 md:grid-cols-3">
            {c.why.items.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className={`${CARD} grid min-h-[280px] grid-rows-[auto_1fr_auto] gap-6 p-8 transition-colors duration-500 hover:bg-[#F3EBE3]`}>
                <div className="flex justify-between text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  <Icon className="size-6 text-yoode-coral" />
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className={`${H3} self-end text-[clamp(22px,2vw,28px)]`}>{title}</h3>
                <p className="max-w-[32ch] text-sm font-medium leading-relaxed text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BEFORE → AFTER ================= */}
      <section id="result" className={`bg-[#F9FAFB] ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHead eyebrow={c.result.eyebrow} title={c.result.title} text={c.result.text} />
          <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6">
            <div className={`${CARD} relative h-72 overflow-hidden md:h-80`}>
              <Pic photo={c.result.before.photo} />
              <Chip>Before · {c.result.before.label}</Chip>
            </div>
            <div className="mx-auto grid size-12 rotate-90 place-items-center rounded-full bg-yoode-onyx text-white md:rotate-0">
              <ArrowRight className="size-5" />
            </div>
            <div className={`${CARD} relative h-72 overflow-hidden md:h-80`}>
              <Pic photo={c.result.after.photo} />
              <Chip accent>After · {c.result.after.label}</Chip>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section id="video" className={SECTION} aria-labelledby="methodVideoTitle">
        <div className={`${CONTAINER} grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-14`}>
          <div>
            <div className={`${EYEBROW} mb-3`}>{c.video.eyebrow}</div>
            <h2 id="methodVideoTitle" className={H2}>{c.video.title}</h2>
            <p className={`mt-5 mb-6 max-w-[48ch] ${BODY}`}>{c.video.text}</p>
            <ol className="m-0 mb-8 list-none p-0">
              {c.video.steps.map(([title, text], i) => <StepRow key={title} n={i + 1} title={title} text={text} />)}
            </ol>
            <Btn href="#quote" variant="onyx">Enquire about {c.name.toLowerCase().startsWith(c.short.toLowerCase()) ? c.name : c.short}</Btn>
          </div>

          <div className={`${CARD} p-3 md:p-4`}>
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-[18px] bg-yoode-onyx">
              {videoMedia ? (
                videoMedia.type === "youtube" ? (
                  <iframe src={videoMedia.src} title={`Yoode ${c.name} process video`} className="h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                ) : (
                  <video src={videoMedia.src} controls autoPlay playsInline className="h-full w-full object-contain" />
                )
              ) : (
                <>
                  <div className="absolute inset-0 opacity-80"><Pic photo={c.video.poster} decorative /></div>
                  <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-black/30" />
                  <span className="absolute left-4 top-4 z-20 rounded-full bg-yoode-onyx/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                    Video showcase · {c.short} process
                  </span>
                  <button type="button" onClick={handlePlayClick} aria-label={`Play or add ${c.name} video link`}
                    className="group absolute z-30 grid size-16 cursor-pointer place-items-center rounded-full bg-yoode-coral text-white shadow-2xl ring-8 ring-white/15 transition-[transform,background-color] hover:scale-105 hover:bg-[#C13828] md:size-20">
                    <Play className="ml-1 size-7 fill-current md:size-8" />
                  </button>
                  <div className="absolute bottom-4 left-4 z-20 font-display text-sm font-bold text-white md:text-base">{c.video.caption}</div>
                </>
              )}
            </div>

            <div className="flex items-center justify-between gap-4 px-2 pt-4">
              <div>
                <b className="block font-display text-sm font-bold text-yoode-onyx">{c.name} process video</b>
                <p className="mt-0.5 text-xs text-gray-500">Video slot ready for Yoode&apos;s production footage</p>
              </div>
              <button type="button" onClick={() => setIsVideoDrawerOpen(!isVideoDrawerOpen)}
                className="shrink-0 cursor-pointer rounded-full border border-yoode-onyx px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-yoode-onyx transition-colors hover:bg-yoode-onyx hover:text-white">
                {isVideoDrawerOpen ? "Close ✕" : "Add video link"}
              </button>
            </div>

            {isVideoDrawerOpen && (
              <form onSubmit={handleVideoSubmit} className="mt-4 rounded-[18px] bg-white p-4">
                <label htmlFor="methodVideoUrl" className={LABEL}>Paste a YouTube or direct MP4/WebM URL</label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input ref={videoInputRef} id="methodVideoUrl" type="url" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..." required className={`${FIELD} flex-1`} />
                  <button type="submit" className={btnClass("coral", "!px-6 !py-3 shrink-0")}>Load video</button>
                </div>
                <p className="mt-2 text-xs text-gray-500">This is a wireframe preview. You can test your own video link here; the player will load and play it immediately.</p>
                {videoStatus && <p className="mt-1 text-xs font-semibold text-[#C13828]">{videoStatus}</p>}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ================= PLACEMENTS ================= */}
      <section id="placements" className={`bg-[#F9FAFB] ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHead eyebrow={c.placements.eyebrow} title={c.placements.title} text={c.placements.text} />
          <div className="grid gap-6 md:grid-cols-3">
            {c.placements.items.map(({ name, text, photo, area: [l, t, w, h] }) => (
              <div key={name} className="group/p flex flex-col gap-3">
                <div className={`${CARD} relative aspect-[4/5] overflow-hidden`}>
                  <div className="size-full transition-transform duration-700 ease-out group-hover/p:scale-105"><Pic photo={photo} /></div>
                  {/* the decoration zone, outlined on the product */}
                  <span aria-hidden style={{ left: `${l}%`, top: `${t}%`, width: `${w}%`, height: `${h}%` }}
                    className="pointer-events-none absolute rounded-lg border-2 border-dashed border-yoode-coral/90 bg-yoode-coral/5 transition-[scale] duration-500 group-hover/p:scale-105" />
                  <Chip>{name}</Chip>
                </div>
                <div className="px-0.5">
                  <h3 className="font-display text-base font-bold text-yoode-onyx">{name}</h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-gray-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <Note>{c.placements.note}</Note>
        </div>
      </section>

      {/* ================= CTA BAND ================= */}
      <section className="relative overflow-hidden bg-yoode-onyx py-[clamp(60px,7vw,100px)] text-white">
        <div aria-hidden className="pointer-events-none absolute -right-[8%] -top-1/2 h-[140%] w-[45%] rounded-full bg-yoode-coral/15 blur-[120px]" />
        <div className={`${CONTAINER} relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end`}>
          <div className="max-w-2xl">
            <div className={`${EYEBROW} mb-3`}>{c.band.eyebrow}</div>
            <h2 className="font-display text-[clamp(30px,4.4vw,56px)] font-extrabold uppercase leading-[1.02] tracking-tight [&_em]:not-italic [&_em]:text-yoode-coral">{c.band.title}</h2>
            <p className="mt-4 max-w-[52ch] text-sm font-medium leading-relaxed text-white/70 md:text-base">{c.band.text}</p>
          </div>
          <Btn href="#quote" variant="coral" className="shrink-0">{c.band.cta}</Btn>
        </div>
      </section>

      {/* ================= TIPS ================= */}
      <section id="tips" className={SECTION}>
        <div className={`${CONTAINER} grid items-center gap-12 lg:grid-cols-2 lg:gap-14`}>
          <div>
            <div className={`${EYEBROW} mb-3`}>{c.tips.eyebrow}</div>
            <h2 className={H2}>{c.tips.title}</h2>
            <p className={`mt-5 mb-8 max-w-[52ch] ${BODY}`}>{c.tips.text}</p>
            <ul className="m-0 list-none p-0">
              {c.tips.items.map((tip) => (
                <li key={tip} className="flex items-center gap-3.5 border-t border-gray-200 py-3.5 text-sm font-semibold text-yoode-onyx last:border-b">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-yoode-coral text-white"><Check className="size-3.5 stroke-[3]" /></span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${CARD} p-7 md:p-9`}>
            <div className={`${EYEBROW} mb-3 !text-xs`}>{c.tips.aside.eyebrow}</div>
            <h3 className={`${H3} text-[clamp(22px,2.2vw,30px)]`}>{c.tips.aside.title}</h3>
            <p className="mt-3 mb-6 text-sm font-medium leading-relaxed text-gray-500">{c.tips.aside.text}</p>
            <div className="grid grid-cols-2 gap-4">
              {c.tips.aside.pair.map(({ label, photo }) => (
                <figure key={label} className="m-0 overflow-hidden rounded-[18px] bg-white">
                  <div className="aspect-[4/5] overflow-hidden"><Pic photo={photo} /></div>
                  <figcaption className="border-t border-gray-100 py-2.5 text-center text-[11px] font-bold uppercase tracking-wider text-yoode-onyx">{label}</figcaption>
                </figure>
              ))}
            </div>
            <Note className="!mt-4 text-center">{c.tips.aside.note}</Note>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" className={`bg-[#F9FAFB] ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHead eyebrow="From artwork to delivery" title={c.steps.title} text="A straightforward four-step process with the design checked before production." />
          <ol className="m-0 grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {c.steps.items.map(([title, text], i) => (
              <li key={title} className="border-t-2 border-yoode-onyx pt-5">
                <b className="block font-display text-[clamp(36px,4vw,56px)] font-extrabold leading-none tracking-tight text-yoode-coral">{String(i + 1).padStart(2, "0")}</b>
                <h3 className="mt-4 font-display text-lg font-bold text-yoode-onyx">{title}</h3>
                <p className="mt-1.5 text-sm font-medium leading-relaxed text-gray-500">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= COMPARISON ================= */}
      <section id="compare" className={SECTION}>
        <div className={CONTAINER}>
          <SectionHead eyebrow="Choose the right method" title={c.compare.title} text={c.compare.text} />
          <div className="overflow-x-auto rounded-[24px] border border-gray-200 bg-white">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th className="w-1/4 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Feature</th>
                  {c.compare.cols.map((col, i) => (
                    <th key={col} className={`w-1/4 px-5 py-4 font-display text-sm font-bold ${i === 0 ? "bg-yoode-coral/10 text-yoode-coral" : "text-yoode-onyx"}`}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.compare.rows.map(([feature, ...cells]) => (
                  <tr key={feature} className="group/r">
                    <td className="border-t border-gray-100 px-5 py-4 font-semibold text-yoode-onyx group-hover/r:bg-[#F9FAFB]">{feature}</td>
                    {cells.map((cell, i) => (
                      <td key={i} className={`border-t border-gray-100 px-5 py-4 ${i === 0 ? "bg-yoode-coral/5 font-medium text-yoode-onyx" : "text-gray-500 group-hover/r:bg-[#F9FAFB]"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Note>{c.compare.note}</Note>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section id="use-cases" className={`bg-[#F9FAFB] ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHead eyebrow="Made for your purpose" title={c.useCases.title} text={c.useCases.text} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.useCases.items.map(({ icon: Icon, title, text }) => (
              <div key={title} className={`${CARD} bg-white p-7 transition-colors duration-500 hover:bg-[#F3EBE3]`}>
                <Icon className="mb-10 size-6 text-yoode-coral" />
                <h3 className={`${H3} text-xl`}>{title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BULK ================= */}
      <section className={`border-b border-gray-200 ${SECTION}`}>
        <div className={`${CONTAINER} grid justify-items-center gap-5 text-center`}>
          <div className={EYEBROW}>Bulk enquiries welcome</div>
          <h2 className={`${H2} max-w-[18ch]`}>{c.bulk.title}</h2>
          <p className={`max-w-[56ch] ${BODY}`}>{c.bulk.text}</p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Btn href="#quote" variant="coral">Request a bulk quote</Btn>
            <Btn href="#faqs" variant="outline">Read the FAQs</Btn>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faqs" className={`bg-[#F9FAFB] ${SECTION}`}>
        <div className={`${CONTAINER} grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]`}>
          <aside className="lg:sticky lg:top-28">
            <div className={`${EYEBROW} mb-3`}>Your questions, answered</div>
            <h2 className={H2}>Frequently asked <em>questions.</em></h2>
            <p className={`mt-5 max-w-[36ch] ${BODY}`}>{c.faqs.text}</p>
            <div className="mt-6"><Btn href="#quote" variant="onyx">Ask us</Btn></div>
          </aside>
          <div>
            {c.faqs.items.map(([q, a], i) => (
              <details key={q} open={i === 0} className="group/d border-t border-gray-200 last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-display text-base font-bold leading-snug text-yoode-onyx md:text-lg [&::-webkit-details-marker]:hidden">
                  {q}
                  <i className="grid size-9 flex-none place-items-center rounded-full border border-gray-300 text-base font-normal not-italic transition-[transform,background-color] duration-300 group-open/d:rotate-45 group-open/d:border-yoode-onyx group-open/d:bg-yoode-onyx group-open/d:text-white">+</i>
                </summary>
                <div className="max-w-[60ch] pb-6 text-sm font-medium leading-relaxed text-gray-500 md:text-base">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEARN MORE ================= */}
      <section id="learn-more" className={SECTION}>
        <div className={CONTAINER}>
          <SectionHead eyebrow={c.learn.eyebrow} title={c.learn.title} text={c.learn.text} />
          <div className="grid gap-6 md:grid-cols-2">
            {c.learn.articles.map(({ title, body }) => (
              <article key={title} className={`${CARD} p-7 md:p-9`}>
                <h3 className={`${H3} mb-3 text-xl`}>{title}</h3>
                <div className="text-sm font-medium leading-relaxed text-gray-500 [&_a]:font-semibold [&_a]:text-yoode-coral [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-[#C13828]">{body}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section id="quote" className="relative overflow-hidden bg-yoode-onyx text-white">
        <div aria-hidden className="pointer-events-none absolute -bottom-1/4 -left-[10%] h-[70%] w-[50%] rounded-full bg-yoode-coral/15 blur-[140px]" />
        <div className={`${CONTAINER} relative grid gap-10 py-[clamp(70px,9vw,130px)] lg:grid-cols-[.9fr_1.1fr] lg:gap-14`}>
          <div className="flex flex-col">
            <div className={`${EYEBROW} mb-4`}>Request your custom quote</div>
            <h2 className="font-display text-[clamp(36px,5.5vw,84px)] font-extrabold uppercase leading-[0.96] tracking-tight [&_em]:not-italic [&_em]:text-yoode-coral">{c.quote.title}</h2>
            <p className="mt-6 max-w-[44ch] text-sm font-medium leading-relaxed text-white/70 md:text-base">{c.quote.text}</p>
            <div className="mt-8 flex justify-center lg:mt-auto lg:justify-start lg:pt-10">
              <div className="aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-[24px] shadow-2xl ring-1 ring-white/10"><Pic photo={c.quote.photo} /></div>
            </div>
          </div>

          <div className="rounded-[24px] bg-white p-7 text-yoode-onyx sm:p-10">
            <h3 className={`${H3} text-2xl`}>Share your requirements</h3>
            <p className="mt-1 mb-7 text-sm font-medium text-gray-500">A simple form for a {c.name} enquiry. Preview only.</p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullname" className={LABEL}>Full name *</label>
                  <input id="fullname" type="text" required placeholder="Your name or company" value={formData.fullname}
                    onChange={(e) => setFormData({ ...formData, fullname: e.target.value })} className={FIELD} />
                </div>
                <div>
                  <label htmlFor="phone" className={LABEL}>WhatsApp / mobile number *</label>
                  <input id="phone" type="tel" required placeholder="+91 XXXXX XXXXX" value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={FIELD} />
                </div>
                <div>
                  <label htmlFor="quantity" className={LABEL}>Quantity required *</label>
                  <input id="quantity" type="number" min="1" required placeholder="Number of pieces" value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} className={FIELD} />
                </div>
                <div>
                  <label htmlFor="city" className={LABEL}>Delivery city *</label>
                  <input id="city" type="text" required placeholder="City and postal code" value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })} className={FIELD} />
                </div>
                <div>
                  <label htmlFor="product" className={LABEL}>Product *</label>
                  <select id="product" required value={formData.product} onChange={(e) => setFormData({ ...formData, product: e.target.value })} className={FIELD}>
                    <option value="">Select a product</option>
                    {productNames.map((n) => <option key={n} value={n}>{n}</option>)}
                    <option value="Help me choose">Help me choose</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="placement" className={LABEL}>{c.quote.placementLabel}</label>
                  <select id="placement" value={formData.placement} onChange={(e) => setFormData({ ...formData, placement: e.target.value })} className={FIELD}>
                    <option value="Help me choose">Help me choose</option>
                    {c.quote.placementOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="upload" className={LABEL}>Upload artwork (optional)</label>
                <input id="upload" type="file" accept=".png,.jpg,.jpeg,.webp,.pdf,.svg,.ai,.eps"
                  className={`${FIELD} cursor-pointer !py-2 file:mr-3 file:rounded-full file:border-0 file:bg-yoode-onyx file:px-3.5 file:py-1.5 file:text-xs file:font-bold file:uppercase file:tracking-wider file:text-white hover:file:bg-yoode-coral`} />
                <span className="mt-1.5 block text-[11px] text-gray-400">Suggested formats: PNG, JPG, WebP, SVG, AI, EPS or PDF. Upload is not connected in this preview.</span>
              </div>

              <div>
                <label htmlFor="notes" className={LABEL}>Additional requirements</label>
                <textarea id="notes" rows={3} placeholder="Colours, size breakdown, dimensions, deadline or other details" value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className={`${FIELD} resize-y`} />
              </div>

              <button type="submit" className={btnClass("coral", "w-full")}>Preview my {c.short} quote request <Arrow /></button>

              <p className="text-center text-[11px] text-gray-400">The wireframe does not submit, upload or save information. Connect to Yoode&apos;s live enquiry system before launch.</p>

              {formSubmitted && (
                <div role="status" className="rounded-xl bg-yoode-coral/10 p-3 text-center text-xs font-semibold text-[#C13828]">
                  Preview only — your enquiry has NOT been sent. Connect this form to Yoode’s CRM, Shopify form or verified WhatsApp workflow before launch.
                </div>
              )}

              <div className="pt-1 text-center">
                <a href="tel:+918069750293" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-yoode-onyx hover:text-yoode-coral">
                  <Phone className="size-3.5 text-yoode-coral" /> Prefer to talk? +91 8069 750 293
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
