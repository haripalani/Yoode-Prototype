import type { LucideIcon } from "lucide-react";
import { Award, SlidersHorizontal, Users, Printer, MapPin, Handshake } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

/**
 * Two consistent card layouts so the artwork lines up across the bento grid:
 * - "stack" (tall cards): text on top, artwork centred below, same size + bottom spacing everywhere.
 * - "side"  (short cards): text on the left, artwork anchored bottom-right at full card height.
 * Images are trimmed copies (public/why/trimmed) so empty margins don't make some look smaller.
 */
type Card = {
  title: string;
  body: string;
  icon: LucideIcon;
  image: string;
  alt: string;
  tint: string;
  layout: "stack" | "side";
  /** side layout only: let the artwork sit flush on the card's bottom edge (e.g. a cropped portrait) */
  flush?: boolean;
};

const columns: Card[][] = [
  [
    {
      title: "Made to Your Specification",
      body: "Choose your fabric, colour, size, print and embroidery — we bring your vision to life.",
      icon: SlidersHorizontal,
      image: "/why/trimmed/specification.webp",
      alt: "Specifications",
      tint: "bg-xmas-blush",
      layout: "side",
    },
    {
      title: "Premium Quality",
      body: "High-grade fabrics, durable prints and professional finishing for a lasting impression.",
      icon: Award,
      image: "/why/trimmed/premium.webp",
      alt: "Premium Quality",
      tint: "bg-xmas-frost",
      layout: "stack",
    },
  ],
  [
    {
      title: "Built for Bulk",
      body: "From small teams to large enterprises, we handle orders of any size.",
      icon: Users,
      image: "/why/trimmed/bulk.webp",
      alt: "Built for Bulk",
      tint: "bg-xmas-parchment",
      layout: "stack",
    },
    {
      title: "Endless Options",
      body: "DTF, DTG, Embroidery, and Coloreel. The right solution for every design.",
      icon: Printer,
      image: "/why/trimmed/endless-options.webp",
      alt: "Endless Options",
      tint: "bg-xmas-blush",
      layout: "side",
    },
  ],
  [
    {
      title: "Pan-India Reach",
      body: "We deliver and support your orders across major cities, with a strong presence in key locations.",
      icon: MapPin,
      image: "/why/trimmed/pan-india.webp",
      alt: "Pan-India Reach",
      tint: "bg-xmas-frost",
      layout: "stack",
    },
    {
      title: "Support",
      body: "From consultation to delivery, our team is with you at every step.",
      icon: Handshake,
      image: "/why/trimmed/support.webp",
      alt: "Dedicated Support",
      tint: "bg-xmas-parchment",
      layout: "side",
      flush: true,
    },
  ],
];

export function WhyChooseYoode() {
  return (
    <section className="py-10 px-6 md:px-12 bg-xmas-snow text-xmas-ink lg:h-[100svh] lg:min-h-[640px] lg:pt-[92px] lg:pb-6 lg:flex lg:flex-col">
      <div className="max-w-7xl mx-auto w-full lg:flex-1 lg:min-h-0 lg:flex lg:flex-col">
        {/* Header */}
        <SectionHeader
          subHeading="Why Us"
          title="Why Businesses Choose Yoode"
          description="From quality fabrics to reliable delivery, we make custom apparel simple, scalable and stress-free for your brand."
          className="mb-10 lg:mb-5 lg:max-w-3xl"
          titleClassName="lg:!text-4xl lg:!mb-2"
          descriptionClassName="text-xmas-ink/60 lg:!text-base"
        />

        {/* 6-Card Bento Grid: each column = one short + one tall card */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-4 lg:flex-1 lg:min-h-0">
          {columns.map((col, c) => (
            <div key={c} className="flex flex-col gap-4 md:gap-6 lg:gap-4 w-full lg:w-1/3 h-full lg:min-h-0">
              {col.map((card) => (
                <WhyCard key={card.title} card={card} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ card }: { card: Card }) {
  const Icon = card.icon;
  const side = card.layout === "side";

  return (
    <div
      className={`${card.tint} ring-1 ring-xmas-gold-deep/10 rounded-[32px] overflow-hidden group relative flex flex-col ${
        side ? "min-h-[260px] lg:min-h-0 lg:flex-[4]" : "min-h-[360px] lg:min-h-0 lg:flex-[6]"
      }`}
    >
      {/* Copy */}
      <div className={`relative z-10 p-6 md:p-8 lg:p-5 xl:p-6 ${side ? "max-w-[58%]" : ""}`}>
        <h3 className="text-xl md:text-2xl lg:text-lg xl:text-xl font-display font-bold mb-3 lg:mb-1.5 flex items-center gap-3 md:gap-4">
          <span className="w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 rounded-full bg-white/80 backdrop-blur text-xmas-red flex shrink-0 items-center justify-center shadow-sm ring-1 ring-xmas-gold-deep/25">
            <Icon className="w-5 h-5 md:w-6 md:h-6" />
          </span>
          {card.title}
        </h3>
        <p className="text-xmas-ink/70 font-medium leading-relaxed text-sm md:text-base lg:text-[13px] xl:text-sm">{card.body}</p>
      </div>

      {/* Artwork */}
      {side ? (
        <div
          className={`pointer-events-none absolute right-0 top-0 z-0 flex w-[44%] items-end justify-end ${
            card.flush ? "bottom-0 pt-4 pr-2" : "bottom-0 p-5 lg:p-4 xl:p-5"
          }`}
        >
          <img
            src={card.image}
            alt={card.alt}
            className="max-h-full max-w-full object-contain object-right-bottom mix-blend-multiply transition-transform duration-700 group-hover:scale-105 origin-bottom-right"
          />
        </div>
      ) : (
        <div className="relative flex-1 min-h-[180px] lg:min-h-0">
          <div className="absolute inset-0 flex items-end justify-center px-8 pb-6 lg:px-6 lg:pb-5">
            <img
              src={card.image}
              alt={card.alt}
              className="max-h-full max-w-[78%] object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105 origin-bottom"
            />
          </div>
        </div>
      )}
    </div>
  );
}
