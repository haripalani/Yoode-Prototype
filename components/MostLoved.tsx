"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Heart, ShoppingBag, Star, ChevronDown, Search } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Men's Cotton Polo",
    brand: "YOODE",
    price: "₹ 780",
    originalPrice: "₹ 1,560",
    discount: "- 50%",
    variant: "Navy",
    rating: "4.9",
    image: "/mens-polo.jpg",
    specs: {
      labels: ["S", "M", "L", "XL"],
      value: "SIZES"
    }
  },
  {
    id: 2,
    name: "Polo Half Sleeve Jersey",
    brand: "YOODE",
    price: "₹ 700",
    originalPrice: "₹ 875",
    discount: "- 20%",
    variant: "Burgundy",
    rating: "4.8",
    image: "/polo-jersey.jpg",
    specs: {
      labels: ["S", "M", "L", "XL"],
      value: "SIZES"
    }
  },
  {
    id: 3,
    name: "RedBolt Space Backpack",
    brand: "YOODE",
    price: "₹ 4,999",
    originalPrice: "₹ 9,999",
    discount: "- 50%",
    variant: "Matte Black",
    rating: "5.0",
    image: "/backpack.jpg",
    // No specs for backpack
  },
  {
    id: 4,
    name: "Custom Curated Gift Boxes",
    brand: "YOODE",
    price: "₹ 2,499",
    originalPrice: "₹ 2,800",
    discount: "- 11%",
    variant: "Executive",
    rating: "4.7",
    image: "/gift-box.jpg",
    // No specs for gift boxes
  },
];

function SizeDropdown({ labels, value }: { labels: string[], value: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filtered = labels.filter(l => l.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative mr-auto" ref={dropdownRef}>
      <button
        onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}
        className="bg-white/95 backdrop-blur-md rounded-xl h-11 px-3 shadow-sm flex flex-col items-center justify-center cursor-pointer hover:bg-white transition-colors"
      >
        <div className="text-[9px] text-gray-400 font-bold tracking-widest flex gap-1.5 items-center">
          {labels.slice(0, 3).map((label, idx) => (
            <span key={idx}>{label}</span>
          ))}
          {labels.length > 3 && <span>+</span>}
          <ChevronDown className="w-3 h-3 ml-0.5" />
        </div>
        <div className="text-[11px] font-bold mt-0.5 tracking-wide">{value}</div>
      </button>

      {isOpen && (
        <div className="absolute bottom-[110%] left-0 w-32 bg-white rounded-xl shadow-lg border border-gray-100 p-2 z-50 flex flex-col gap-2">
          <div className="relative">
            <Search className="w-3 h-3 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full text-xs pl-7 pr-2 py-1.5 bg-gray-50 rounded-lg outline-none focus:ring-1 focus:ring-gray-200"
            />
          </div>
          <div className="flex flex-col max-h-32 overflow-y-auto">
            {filtered.length > 0 ? filtered.map(size => (
              <button key={size} className="text-left text-xs font-semibold text-gray-700 hover:bg-gray-50 px-2 py-1.5 rounded-md transition-colors">
                {size}
              </button>
            )) : (
              <span className="text-xs text-gray-400 text-center py-2">No sizes</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function MostLoved() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#E9E4DC] text-yoode-onyx">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight">Our Most Loved Products</h2>
          <p className="text-yoode-onyx/70 mt-4 text-lg max-w-2xl mx-auto">
            The products customers come back for customised exactly the way you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-[28px] p-3 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3 cursor-pointer group">

              {/* Image Container */}
              <div className="relative aspect-[4/5] rounded-[20px] group">
                {/* Clipped Background & Image Layer */}
                <div className="absolute inset-0 bg-gray-100 rounded-[20px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Top Badges (Unclipped) */}
                <div className="absolute top-2 left-2 md:top-3 md:left-3 flex flex-col sm:flex-row gap-1.5 md:gap-2">
                  <div className="bg-[#2D2B2A] text-white text-[9px] md:text-[11px] font-semibold px-2 md:px-2.5 py-0.5 md:py-1 rounded-md md:rounded-lg w-max">
                    {product.discount}
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm text-yoode-onyx text-[9px] md:text-[11px] font-semibold px-2 md:px-2.5 py-0.5 md:py-1 rounded-md md:rounded-lg shadow-sm w-max hidden sm:block">
                    {product.variant}
                  </div>
                </div>

                {/* Bottom Floating Panels (Unclipped) */}
                <div className="absolute bottom-3 inset-x-3 flex items-end justify-end gap-2">

                  {/* Left Specs Panel (Searchable Dropdown) */}
                  {product.specs && (
                    <SizeDropdown labels={product.specs.labels} value={product.specs.value} />
                  )}

                  {/* Rating Panel */}
                  <div className="bg-white/95 backdrop-blur-md rounded-xl h-11 px-3 shadow-sm flex flex-col items-center justify-center shrink-0">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mb-0.5" />
                    <span className="text-[11px] font-bold leading-none">{product.rating}</span>
                  </div>

                  {/* Action Buttons */}
                  <button className="bg-white/95 hover:bg-white backdrop-blur-md rounded-xl h-11 w-11 flex items-center justify-center shadow-sm transition-colors shrink-0">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                  <button className="bg-white/95 hover:bg-white backdrop-blur-md rounded-xl h-11 w-11 flex items-center justify-center shadow-sm transition-colors shrink-0">
                    <ShoppingBag className="w-4 h-4 text-gray-600 hover:text-yoode-onyx transition-colors" />
                  </button>

                </div>
              </div>

              {/* Text Area */}
              <div className="flex justify-between items-start px-2 pt-2 pb-2">
                <div className="flex flex-col gap-1 flex-1 pr-3">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{product.brand}</span>
                  <h3 className="font-bold text-[15px] leading-tight text-yoode-onyx">{product.name}</h3>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <span className="text-[12px] font-medium text-gray-400 line-through decoration-gray-300">{product.originalPrice}</span>
                  <span className="text-[17px] font-bold text-yoode-onyx">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
