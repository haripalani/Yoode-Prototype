"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard, Product } from "@/components/ProductCard";

const RELATED_PRODUCTS: Product[] = [
  {
    id: "classic-pique-polo",
    name: "Classic 3-Button Pique Polo",
    brand: "YOODE",
    price: "₹ 440",
    originalPrice: "₹ 880",
    discount: "- 50%",
    variant: "Navy",
    rating: "4.9",
    image: "/mens-polo.jpg",
    specs: { labels: ["S", "M", "L", "XL", "2XL"], value: "SIZES" }
  },
  {
    id: "sublimation-team-polo",
    name: "Sublimation Team Polo Jersey",
    brand: "YOODE",
    price: "₹ 490",
    originalPrice: "₹ 980",
    discount: "- 50%",
    variant: "Burgundy",
    rating: "4.8",
    image: "/polo-jersey.jpg",
    specs: { labels: ["XS", "S", "M", "L", "XL"], value: "SIZES" }
  },
  {
    id: "supima-cotton-tee",
    name: "Supima Cotton Heavyweight Tee",
    brand: "YOODE",
    price: "₹ 340",
    originalPrice: "₹ 680",
    discount: "- 50%",
    variant: "Forest Green",
    rating: "4.9",
    image: "/womens-tshirt.jpg",
    specs: { labels: ["S", "M", "L", "XL"], value: "SIZES" }
  },
  {
    id: "onyx-performance-zipper",
    name: "Onyx Performance Zipper Polo",
    brand: "YOODE",
    price: "₹ 480",
    originalPrice: "₹ 960",
    discount: "- 50%",
    variant: "Onyx Black",
    rating: "4.9",
    image: "/polo/black-front.jpg",
    specs: { labels: ["XS", "S", "M", "L", "XL"], value: "SIZES" }
  },
  {
    id: "forest-performance-polo",
    name: "Forest Green Performance Polo",
    brand: "YOODE",
    price: "₹ 480",
    originalPrice: "₹ 960",
    discount: "- 50%",
    variant: "Forest Green",
    rating: "4.9",
    image: "/polo/green-front.jpg",
    specs: { labels: ["S", "M", "L", "XL"], value: "SIZES" }
  },
  {
    id: "editorial-denim-jacket",
    name: "Editorial Heavy Denim Jacket",
    brand: "YOODE",
    price: "₹ 780",
    originalPrice: "₹ 1,560",
    discount: "- 50%",
    variant: "Indigo Washed",
    rating: "4.7",
    image: "/denim-jacket.jpg",
    specs: { labels: ["M", "L", "XL"], value: "SIZES" }
  }
];

export default function RainsRelatedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section id="recommendations" className="w-full bg-[#f4f4f4] text-black border-t border-black/10 py-12 lg:py-20 select-none">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:pl-[98px] lg:pr-12">
        
        {/* Header with Title and Nav Arrows */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div>
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-500 mb-1 block">
              RECOMMENDED ESSENTIALS
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-black">
              You may also like
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Scroll related products left"
              className="w-10 h-10 rounded-full border border-black/15 bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Scroll related products right"
              className="w-10 h-10 rounded-full border border-black/15 bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track using Yoode's signature ProductCard */}
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto hide-scrollbar pb-6 snap-x snap-mandatory pt-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {RELATED_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="flex-shrink-0 w-[270px] sm:w-[310px] md:w-[330px] snap-start"
            >
              <ProductCard product={prod} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
