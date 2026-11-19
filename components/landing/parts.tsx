"use client";

import React, { useState } from "react";
import { Star, Phone, Check } from "lucide-react";
import { CONTAINER, SECTION, EYEBROW, H2, H3, BODY, btnClass, Arrow } from "@/components/yoode-ui";

/*
  Pieces shared by the collection pages and the corporate-gifting city pages: photos, FAQ list, testimonials,
  the SEO "read more" block and the enquiry form that hands off to WhatsApp.
*/

/*
  Hero standard (as on the home page): the hero is exactly one screen tall and its content is sized to fit, so the
  curved panel that follows (pulled up 48px / 72px md+) always peeks in at the bottom of the first screen.
  HERO_INNER's top padding clears the announcement bar + header (~80px); its bottom padding covers the pull-up.
*/
export const HERO_SECTION = "relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-yoode-onyx text-white";
export const HERO_INNER = "flex-1 pt-28 pb-24 md:pb-32 [@media(max-height:700px)]:pt-24";
/** very short screens (small phones): intro paragraphs clamp to three lines */
export const HERO_SHORT = "[@media(max-height:700px)]:line-clamp-3";
export const HERO_H1 = "text-[clamp(36px,min(5.4vw,8vh),80px)]";

/** "#quote" links go to whichever enquiry form is on screen (marked data-callback); falls back to the plain anchor. */
export function goToForm(e: React.MouseEvent) {
  const target = [...document.querySelectorAll<HTMLElement>("[data-callback]")].find((el) => el.offsetParent !== null);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth" });
}

export const WHATSAPP_NUMBER = "918069750293";
export const waLink = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const FIELD =
  "w-full rounded-xl border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-sm text-yoode-onyx placeholder:text-gray-400 transition-colors focus:border-yoode-coral focus:bg-white focus:outline-none";
export const LABEL = "mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-gray-500";

export type PicPhoto = { src: string; alt: string; pos?: string };

/** Live Yoode CDN images are asked for at a sensible width; local /public images are used as they are. */
export function sized(src: string, width: number) {
  if (!src.startsWith("https://yoode.com/cdn/")) return src;
  return `${src}${src.includes("?") ? "&" : "?"}width=${width}`;
}

export function Pic({ photo, className = "", width = 900, eager }: { photo: PicPhoto; className?: string; width?: number; eager?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={sized(photo.src, width)}
      alt={photo.alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`size-full object-cover ${className}`}
      style={{ objectPosition: photo.pos ?? "50% 50%" }}
    />
  );
}

export function Stars({ className = "size-3.5" }: { className?: string }) {
  return (
    <span className="flex text-[#F5B700]" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => <Star key={i} className={`${className} fill-current`} />)}
    </span>
  );
}

/** FAQ: sticky heading on the left, open/close rows on the right. */
export function FaqSection({ text, items, id = "faqs" }: { text: string; items: [string, string][]; id?: string }) {
  return (
    <section id={id} className={`bg-[#F9FAFB] ${SECTION}`}>
      <div className={`${CONTAINER} grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]`}>
        <aside className="lg:sticky lg:top-28">
          <div className={`${EYEBROW} mb-3`}>Your questions, answered</div>
          <h2 className={H2}>Frequently asked <em>questions.</em></h2>
          <p className={`mt-5 max-w-[36ch] ${BODY}`}>{text}</p>
          <div className="mt-6">
            <a href="#quote" onClick={goToForm} className={btnClass("onyx")}>Ask us <Arrow /></a>
          </div>
        </aside>
        <div>
          {items.map(([q, a], i) => (
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
  );
}

/** Three customer quotes on warm cards; the middle one is dark. */
export function TestimonialRow({ items, title }: { items: { name: string; role: string; quote: string }[]; title: React.ReactNode }) {
  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <div className={`${EYEBROW} mb-3`}>Reviews</div>
            <h2 className={H2}>{title}</h2>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-[#F9F5F1] px-5 py-3">
            <Stars />
            <span className="text-sm font-bold text-yoode-onyx">4.9</span>
            <span className="text-xs font-medium text-gray-500">on Google · 250+ reviews</span>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ name, role, quote }, i) => {
            const dark = i === 1;
            return (
              <figure key={name} className={`m-0 flex flex-col justify-between gap-10 rounded-[24px] p-8 ${dark ? "bg-yoode-onyx text-white md:-translate-y-4" : "bg-[#F9F5F1]"}`}>
                <div>
                  <span aria-hidden className={`block font-display text-6xl font-extrabold leading-none ${dark ? "text-yoode-coral" : "text-yoode-coral/70"}`}>“</span>
                  <blockquote className={`m-0 mt-2 text-base font-medium leading-relaxed ${dark ? "text-white/85" : "text-yoode-onyx"}`}>{quote}</blockquote>
                </div>
                <figcaption className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className={`grid size-10 place-items-center rounded-full font-display text-sm font-bold ${dark ? "bg-white/10 text-white" : "bg-white text-yoode-onyx"}`}>
                      {name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2)}
                    </span>
                    <div>
                      <b className="block text-sm font-bold">{name}</b>
                      <span className={`block text-xs font-medium ${dark ? "text-white/50" : "text-gray-500"}`}>{role}</span>
                    </div>
                  </div>
                  <Stars className="size-3" />
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** SEO copy kept on the page but folded away: the first block shows, the rest open with "Read more". */
export function SeoBlock({ blocks }: { blocks: { title: string; body: React.ReactNode }[] }) {
  const [open, setOpen] = useState(false);
  const shown = open ? blocks : blocks.slice(0, 1);
  return (
    <section className="border-t border-gray-200 bg-white py-[clamp(50px,6vw,90px)]">
      <div className={`${CONTAINER} max-w-[1000px]`}>
        <div className="relative">
          <div className="grid gap-8">
            {shown.map(({ title, body }) => (
              <article key={title}>
                <h3 className={`${H3} mb-3 text-lg md:text-xl`}>{title}</h3>
                <div className="space-y-3 text-sm font-medium leading-relaxed text-gray-500 [&_a]:font-semibold [&_a]:text-yoode-coral [&_a]:underline [&_a]:underline-offset-2 [&_b]:text-yoode-onyx">{body}</div>
              </article>
            ))}
          </div>
          {!open && blocks.length > 1 && <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-white to-transparent" />}
        </div>
        {blocks.length > 1 && (
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open}
            className="mt-6 cursor-pointer text-xs font-bold uppercase tracking-wider text-yoode-onyx underline underline-offset-4 hover:text-yoode-coral">
            {open ? "Show less" : "Read more"}
          </button>
        )}
      </div>
    </section>
  );
}

export type Field = { id: string; label: string; type?: "text" | "tel" | "email" | "number" | "date"; placeholder: string; required?: boolean; options?: string[]; wide?: boolean };

/**
 * The enquiry form. It does not submit anywhere: "Send on WhatsApp" opens WhatsApp with the answers filled in,
 * as on the live site.
 */
export function EnquiryForm({ title, text, fields, intro, cta, compact }: { title: string; text: string; fields: Field[]; intro: string; cta: string; compact?: boolean }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = fields.filter((f) => values[f.id]).map((f) => `${f.label.replace(" *", "")}: ${values[f.id]}`);
    window.open(waLink(`${intro}\n\n${lines.join("\n")}`), "_blank", "noopener");
    setSent(true);
  };

  return (
    <div className={`rounded-[24px] bg-white text-yoode-onyx ${compact ? "p-6 sm:p-7" : "p-7 sm:p-10"}`}>
      <h3 className={`${H3} text-2xl`}>{title}</h3>
      <p className={`mt-1 text-sm font-medium text-gray-500 ${compact ? "mb-4" : "mb-7"}`}>{text}</p>
      <form onSubmit={submit} className={compact ? "space-y-3" : "space-y-4"}>
        <div className={`grid sm:grid-cols-2 ${compact ? "gap-3" : "gap-4"}`}>
          {fields.map((f) => (
            <div key={f.id} className={f.wide ? "sm:col-span-2" : ""}>
              <label htmlFor={`f-${f.id}`} className={LABEL}>{f.label}</label>
              {f.options ? (
                <select id={`f-${f.id}`} required={f.required} value={values[f.id] ?? ""} onChange={(e) => setValues({ ...values, [f.id]: e.target.value })} className={FIELD}>
                  <option value="">{f.placeholder}</option>
                  {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : f.wide ? (
                <textarea id={`f-${f.id}`} rows={compact ? 2 : 3} required={f.required} placeholder={f.placeholder} value={values[f.id] ?? ""}
                  onChange={(e) => setValues({ ...values, [f.id]: e.target.value })} className={`${FIELD} resize-y`} />
              ) : (
                <input id={`f-${f.id}`} type={f.type ?? "text"} required={f.required} placeholder={f.placeholder} value={values[f.id] ?? ""}
                  onChange={(e) => setValues({ ...values, [f.id]: e.target.value })} className={FIELD} />
              )}
            </div>
          ))}
        </div>
        <button type="submit" className={btnClass("coral", "w-full")}>{cta} <Arrow /></button>
        {sent && (
          <div role="status" className="flex items-center justify-center gap-2 rounded-xl bg-yoode-coral/10 p-3 text-center text-xs font-semibold text-[#C13828]">
            <Check className="size-3.5" /> WhatsApp opened with your details. Tap Send there to reach us.
          </div>
        )}
        {!compact && <p className="text-center text-[11px] text-gray-400">For a faster reply, tap Send when WhatsApp opens. Preview only: nothing is saved here.</p>}
        <div className={`pt-1 text-center ${compact ? "hidden" : ""}`}>
          <a href="tel:+918069750293" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-yoode-onyx hover:text-yoode-coral">
            <Phone className="size-3.5 text-yoode-coral" /> Prefer to talk? +91 8069 750 293
          </a>
        </div>
      </form>
    </div>
  );
}

/** WhatsApp glyph (lucide has none). */
export function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.93.95-3.48-.22-.36A9.4 9.4 0 0 1 2.6 12.04C2.6 6.84 6.84 2.6 12.05 2.6a9.38 9.38 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.2-4.24 9.44-9.45 9.44zm8.04-17.48A11.3 11.3 0 0 0 12.04.7C5.78.7.68 5.78.68 12.04c0 2 .52 3.95 1.52 5.67L.58 23.3l5.73-1.5a11.33 11.33 0 0 0 5.73 1.46c6.26 0 11.36-5.1 11.36-11.36 0-3.03-1.18-5.89-3.32-8.03z" />
    </svg>
  );
}
