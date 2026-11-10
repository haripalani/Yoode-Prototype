"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const products = [
  {
    id: 1,
    name: "Mars Polo",
    brand: "YOODE",
    price: "₹ 780",
    originalPrice: "₹ 1,560",
    discount: "- 50%",
    variant: "Navy",
    rating: "4.9",
    image: "/mens-polo.webp",
    specs: { labels: ["S", "M", "L", "XL"], value: "SIZES" }
  },
  {
    id: 2,
    name: "Corporate Polo",
    brand: "YOODE",
    price: "₹ 850",
    originalPrice: "₹ 1,000",
    discount: "- 15%",
    variant: "Burgundy",
    rating: "4.8",
    image: "/polo-jersey.webp",
    specs: { labels: ["S", "M", "L", "XL"], value: "SIZES" }
  },
  {
    id: 3,
    name: "Pro Team Jerseys",
    brand: "YOODE",
    price: "₹ 700",
    originalPrice: "₹ 875",
    discount: "- 20%",
    variant: "Athletic Fit",
    rating: "4.9",
    image: "/process/step1.webp",
    specs: { labels: ["S", "M", "L", "XL"], value: "SIZES" }
  },
  {
    id: 4,
    name: "Corporate Gift Boxes",
    brand: "YOODE",
    price: "₹ 2,499",
    originalPrice: "₹ 2,800",
    discount: "- 11%",
    variant: "Executive",
    rating: "4.7",
    image: "/gift-box.webp",
  },

];

export function MostLoved() {
  return (
    <section className="py-12 md:py-16 bg-xmas-pine text-xmas-snow overflow-hidden relative" id="most-loved">
      <div aria-hidden="true" className="absolute inset-0 xmas-snow-dots opacity-30 pointer-events-none" />
      <div aria-hidden="true" className="absolute -top-32 right-0 w-[500px] h-[400px] bg-xmas-red/25 blur-3xl rounded-full pointer-events-none" />
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* ── Header Layout ── */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-8">
          
          {/* Title & Description */}
          <SectionHeader
            subHeading="Hall of Fame"
            title="Most Loved."
            description="The iconic pieces that define our standard. Customised exactly the way you need. These are the products our customers come back for again and again."
            align="left"
            className="mb-0 max-w-3xl lg:mb-0"
            subHeadingClassName="!text-xmas-gold"
            titleClassName="!text-xmas-snow"
            descriptionClassName="text-xmas-snow/75"
          />

          {/* Call to Action */}
          <div className="max-w-md lg:pb-2">
            <button className="group flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.2em] text-xmas-snow hover:text-xmas-gold transition-colors">
              Shop The Collection
              <div className="w-12 h-12 rounded-full border border-xmas-gold/40 flex items-center justify-center group-hover:border-xmas-gold group-hover:bg-xmas-gold group-hover:text-xmas-ink transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
          
        </div>
      </div>

      {/* ── BOTTOM: Horizontally Scrollable Cards ── */}
      <div className="w-full relative">
        {/* Right-edge fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-xmas-pine to-transparent z-10 pointer-events-none hidden md:block" />

        <div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 md:justify-center pb-12 pt-8 w-full max-w-[1600px] mx-auto cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="shrink-0 relative group snap-start"
              style={{ width: "clamp(220px, 22vw, 280px)" }}
            >
              {/* Rank Badge */}
              <div className="absolute -top-4 -left-4 w-11 h-11 bg-xmas-red text-white rounded-full flex items-center justify-center font-bold text-sm z-20 shadow-lg shadow-black/30 border-[3px] border-xmas-gold group-hover:scale-110 transition-transform duration-500">
                #{index + 1}
              </div>

              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


