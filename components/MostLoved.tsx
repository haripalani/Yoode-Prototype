"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { ArrowRight } from "lucide-react";

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
    image: "/mens-polo.jpg",
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
    image: "/polo-jersey.jpg",
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
    image: "/process/step1.jpg",
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
    image: "/gift-box.jpg",
  },
  {
    id: 5,
    name: "Classic Hoodie",
    brand: "YOODE",
    price: "₹ 1,199",
    originalPrice: "₹ 1,499",
    discount: "- 20%",
    variant: "Charcoal",
    rating: "4.8",
    image: "/mens-polo.jpg",
    specs: { labels: ["S", "M", "L", "XL", "XXL"], value: "SIZES" }
  },
];

export function MostLoved() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#FAF9F7] text-yoode-onyx relative">
      {/* 
        Section is exactly one viewport tall.
        Left panel: static, vertically centred — no sticky/overlap issues.
        Right panel: horizontally scrollable card row.
      */}
      <div className="flex flex-col xl:flex-row xl:h-screen">

        {/* ── LEFT: Text Panel ── */}
        <div className="w-full xl:w-[38%] shrink-0 flex items-center px-8 md:px-16 py-20 xl:py-0 z-20 xl:border-r border-gray-100">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[2px] bg-yoode-onyx/20" />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-gray-500">Hall of Fame</span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-[86px] font-black tracking-tighter leading-[0.9] mb-8">
              Most<br/>Loved.
            </h2>

            <p className="text-gray-500 text-[15px] md:text-base leading-relaxed max-w-md mb-10">
              The iconic pieces that define our standard. Customised exactly the way you need. These are the products our customers come back for again and again.
            </p>

            <button className="group flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.2em] text-yoode-onyx hover:text-gray-600 transition-colors">
              Shop The Collection
              <div className="w-12 h-12 rounded-full border border-yoode-onyx/10 flex items-center justify-center group-hover:border-yoode-onyx/30 group-hover:bg-yoode-onyx group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* ── RIGHT: Horizontally Scrollable Cards ── */}
        <div className="w-full xl:w-[62%] flex items-center relative overflow-x-hidden">
          {/* Right-edge fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAF9F7] to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pl-8 xl:pl-12 pr-20 pb-12 pt-8 w-full"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="snap-start shrink-0 relative group"
                style={{ width: "clamp(240px, 28vw, 320px)" }}
              >
                {/* Rank Badge */}
                <div className="absolute -top-4 -left-3 w-10 h-10 bg-yoode-onyx text-white rounded-full flex items-center justify-center font-bold text-xs z-20 shadow-lg shadow-yoode-onyx/20 border-4 border-[#FAF9F7] group-hover:scale-110 transition-transform duration-500">
                  #{index + 1}
                </div>

                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <ProductCard product={product} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


