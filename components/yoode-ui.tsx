import React from "react";

/* The Yoode UI language, as set on the Services page: coral uppercase eyebrows, big uppercase
   headings with a coral <em> phrase, warm rounded cards without borders, pill buttons with a sliding arrow. */

export const CONTAINER = "mx-auto w-full max-w-[1400px] px-6 md:px-12";
export const SECTION = "py-[clamp(70px,9vw,130px)]";
export const EYEBROW = "text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-yoode-coral";
export const H2 = "font-display font-extrabold uppercase tracking-tight text-yoode-onyx leading-[1.02] text-[clamp(30px,4.4vw,60px)] [&_em]:not-italic [&_em]:text-yoode-coral";
export const H3 = "font-display font-extrabold uppercase tracking-tight leading-[1.08] text-yoode-onyx [&_em]:not-italic [&_em]:text-yoode-coral";
export const CARD = "rounded-[24px] bg-[#F9F5F1]";
export const BODY = "text-sm md:text-base font-medium leading-relaxed text-gray-500";

const BTN = {
  coral: "bg-yoode-coral text-white hover:bg-[#C13828]",
  onyx: "bg-yoode-onyx text-white hover:bg-yoode-coral",
  outline: "border border-yoode-onyx text-yoode-onyx hover:bg-yoode-onyx hover:text-white",
  outlineLight: "border border-white/40 text-white hover:bg-white hover:text-yoode-onyx",
};
export type BtnVariant = keyof typeof BTN;

export const btnClass = (variant: BtnVariant, extra = "") =>
  `group/b inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider shadow-sm transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-yoode-coral focus-visible:ring-offset-2 ${BTN[variant]} ${extra}`;

export function Arrow() {
  return <span aria-hidden className="inline-block transition-transform duration-300 group-hover/b:translate-x-1">→</span>;
}

export function Btn({ href, variant, children, className = "" }: { href: string; variant: BtnVariant; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={btnClass(variant, className)}>
      {children}
      <Arrow />
    </a>
  );
}

/** Eyebrow + heading on the left, supporting line on the right (stacks on phones). */
export function SectionHead({ eyebrow, title, text, id }: { eyebrow: string; title: React.ReactNode; text: string; id?: string }) {
  return (
    <div className="mb-12 md:mb-16 grid items-end gap-4 md:gap-8 md:grid-cols-[1.2fr_.8fr]">
      <div>
        <div className={`${EYEBROW} mb-3`}>{eyebrow}</div>
        <h2 id={id} className={H2}>{title}</h2>
      </div>
      <p className={`max-w-[44ch] md:justify-self-end ${BODY}`}>{text}</p>
    </div>
  );
}

/** Small print under a block: caveats and wireframe notes. */
export function Note({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`mt-6 text-xs font-medium text-gray-400 ${className}`}>{children}</p>;
}
