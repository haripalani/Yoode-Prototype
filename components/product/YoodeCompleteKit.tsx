"use client";

import React, { useState } from "react";
import { Check, ShoppingBag, Sparkles, ShieldCheck, Truck, Plus, PackageCheck } from "lucide-react";
import { ColorVariant } from "@/data/rainsProductData";

interface KitItem {
  id: string;
  name: string;
  shortName: string;
  category: string;
  image: string;
  price: number;
  originalPrice: number;
  badge: string;
  sizes?: string[];
  description: string;
}

const KIT_COMPANION_ITEMS: KitItem[] = [
  {
    id: "pro-stretch-joggers",
    name: "Pro-Fit Active Stretch Joggers",
    shortName: "Joggers",
    category: "Bottomwear",
    image: "/joggers.jpg",
    price: 590,
    originalPrice: 1180,
    badge: "MATCHING FABRIC",
    sizes: ["S (30)", "M (32)", "L (34)", "XL (36)"],
    description: "4-way stretch French terry with zip pockets."
  },
  {
    id: "custom-3d-puff-cap",
    name: "3D Puff Structured Team Cap",
    shortName: "3D Cap",
    category: "Headwear",
    image: "/cap.jpg",
    price: 290,
    originalPrice: 500,
    badge: "3D EMBROIDERY",
    sizes: ["Snapback"],
    description: "6-panel athletic twill cap with 3D crest."
  },
  {
    id: "squad-duffel-35l",
    name: "Squad 35L Water-Repellent Duffel",
    shortName: "Kit Duffel",
    category: "Gear & Bags",
    image: "/duffle-bag.jpg",
    price: 690,
    originalPrice: 1380,
    badge: "900D CORDURA",
    sizes: ["Standard 35L"],
    description: "Heavy-duty polyester with shoe compartment."
  },
  {
    id: "executive-tech-sleeve",
    name: "Executive Neoprene Tech Sleeve",
    shortName: "Tech Sleeve",
    category: "Accessories",
    image: "/laptop-sleeve.jpg",
    price: 350,
    originalPrice: 700,
    badge: "SHOCK-PROOF",
    sizes: ["14 Inch", "15.6 Inch"],
    description: "Plush velvet-lined interior with YKK zip."
  }
];

export interface YoodeCompleteKitProps {
  selectedColor?: ColorVariant;
}

export default function YoodeCompleteKit({ selectedColor }: YoodeCompleteKitProps) {
  // Current primary polo item (always part of the kit)
  const poloPrice = selectedColor?.price || 480;
  const poloOriginalPrice = 960;

  // Selected state for companion items: Joggers and Cap pre-selected
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([
    "pro-stretch-joggers",
    "custom-3d-puff-cap"
  ]);

  // Selected sizes for items that have sizes
  const [itemSizes, setItemSizes] = useState<Record<string, string>>({
    "pro-stretch-joggers": "M (32)",
    "custom-3d-puff-cap": "Snapback",
    "squad-duffel-35l": "Standard 35L",
    "executive-tech-sleeve": "14 Inch"
  });

  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  // Toggle companion item in/out of kit
  const toggleItem = (id: string) => {
    setSelectedItemIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Calculations
  const selectedCompanionItems = KIT_COMPANION_ITEMS.filter((item) =>
    selectedItemIds.includes(item.id)
  );

  const totalItemsCount = 1 + selectedCompanionItems.length; // 1 polo + selected companions

  const originalTotal =
    poloOriginalPrice +
    selectedCompanionItems.reduce((acc, curr) => acc + curr.originalPrice, 0);

  const itemSubtotal =
    poloPrice +
    selectedCompanionItems.reduce((acc, curr) => acc + curr.price, 0);

  // Extra 10% bundle savings if 2 or more items in the kit
  const bundleDiscountRate = totalItemsCount >= 2 ? 0.10 : 0;
  const bundleSavings = Math.round(itemSubtotal * bundleDiscountRate);
  const finalKitPrice = itemSubtotal - bundleSavings;

  const handleAddKitToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 3200);
  };

  return (
    <section 
      id="complete-your-kit" 
      className="w-full bg-[#FAF9F6] text-black border-t border-black/10 py-6 sm:py-7 select-none scroll-mt-24 transition-colors"
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:pl-[98px] lg:pr-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full whitespace-nowrap flex items-center gap-1.5 shadow-2xs">
              <Sparkles size={12} className="text-emerald-600" />
              BUNDLE &bull; EXTRA 10% OFF
            </span>
            <h2 className="text-lg sm:text-xl font-black tracking-tight text-black whitespace-nowrap">
              Complete Your Kit
            </h2>
            <span className="text-gray-300 hidden md:inline">|</span>
            <p className="text-xs text-gray-500 hidden md:inline truncate font-medium">
              Synchronized fabrics, colorways, and custom embroidery engineered together in Tirupur.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-xs text-gray-600 font-medium shrink-0">
            <span className="flex items-center gap-1 text-emerald-700 font-bold bg-white px-2.5 py-1 rounded-full border border-black/5 shadow-2xs">
              <ShieldCheck size={14} /> Free Digitization
            </span>
            <span className="flex items-center gap-1 text-blue-700 font-bold bg-white px-2.5 py-1 rounded-full border border-black/5 shadow-2xs">
              <Truck size={14} /> Free Express Delivery
            </span>
          </div>
        </div>

        {/* 5 Spacious Product Cards in a Single Panoramic Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 items-stretch mb-4">
          
          {/* Card 1: Anchor Performance Polo (Always Included Base Piece) */}
          <div className="bg-white rounded-2xl p-3 border-2 border-black shadow-sm flex flex-col justify-between relative group transition-all">
            {/* Header Badge & Anchor Status */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-black uppercase tracking-wider text-white bg-black px-2.5 py-0.5 rounded-full whitespace-nowrap">
                Anchor Item
              </span>
              <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                <Check size={12} strokeWidth={3} />
              </span>
            </div>

            {/* Product Image Frame */}
            <div className="w-full h-32 sm:h-36 bg-[#E8E8E8] rounded-xl overflow-hidden mb-2 relative flex items-center justify-center border border-black/5">
              <img
                src={selectedColor?.images[0] || "/polo/navy-front.jpg"}
                alt="Performance Polo"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Details */}
            <div>
              <h4 className="font-extrabold text-xs text-black truncate leading-tight">
                Performance Zipper Polo
              </h4>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-[11px] text-gray-400 line-through">₹{poloOriginalPrice}</span>
                <span className="font-black text-sm text-black">₹{poloPrice}</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">50% Off</span>
              </div>
            </div>

            {/* Selection Status Row */}
            <div className="pt-2 mt-2 border-t border-black/5 flex items-center justify-between text-xs">
              <span className="text-gray-500 font-semibold truncate max-w-[90px]">
                {selectedColor?.name || "Navy Blue"}
              </span>
              <span className="text-emerald-700 font-extrabold flex items-center gap-1 text-[11px] whitespace-nowrap">
                <Check size={12} strokeWidth={3} /> Included
              </span>
            </div>
          </div>

          {/* Cards 2 to 5: Companion Kit Items */}
          {KIT_COMPANION_ITEMS.map((item) => {
            const isSelected = selectedItemIds.includes(item.id);
            const currentSize = itemSizes[item.id] || (item.sizes && item.sizes[0]);

            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`bg-white rounded-2xl p-3 border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between relative group ${
                  isSelected
                    ? "border-black shadow-sm ring-1 ring-black/5 bg-white"
                    : "border-black/10 hover:border-black/30 shadow-2xs opacity-80 hover:opacity-100 bg-white/70"
                }`}
              >
                {/* Header Badge & Interactive Checkmark */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap transition-colors ${
                    isSelected 
                      ? "text-blue-800 bg-blue-50 border border-blue-200/80" 
                      : "text-gray-500 bg-gray-100"
                  }`}>
                    {item.badge}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleItem(item.id);
                    }}
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                      isSelected
                        ? "bg-black text-white shadow-xs"
                        : "border-2 border-gray-300 text-transparent hover:border-black hover:text-gray-400"
                    }`}
                    aria-label={`Toggle ${item.name} in kit`}
                  >
                    {isSelected ? (
                      <Check size={12} strokeWidth={3} />
                    ) : (
                      <Plus size={11} strokeWidth={2.5} className="text-gray-400" />
                    )}
                  </button>
                </div>

                {/* Product Image Frame */}
                <div className="w-full h-32 sm:h-36 bg-[#F4F4F4] rounded-xl overflow-hidden mb-2 relative flex items-center justify-center p-2 border border-black/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain mix-blend-multiply drop-shadow-xs group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Details */}
                <div>
                  <h4 className="font-extrabold text-xs text-black truncate leading-tight">
                    {item.name}
                  </h4>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-[11px] text-gray-400 line-through">₹{item.originalPrice}</span>
                    <span className="font-black text-sm text-black">₹{item.price}</span>
                  </div>
                </div>

                {/* Size Dropdown / Tag & Selection Status */}
                <div 
                  className="pt-2 mt-2 border-t border-black/5 flex items-center justify-between gap-1.5 text-xs"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.sizes && item.sizes.length > 1 ? (
                    <select
                      value={currentSize}
                      onChange={(e) =>
                        setItemSizes((prev) => ({
                          ...prev,
                          [item.id]: e.target.value
                        }))
                      }
                      className="h-6 bg-neutral-100 hover:bg-neutral-200/90 border border-black/10 rounded-md px-1.5 text-[10px] font-bold text-black focus:outline-none cursor-pointer max-w-[95px] truncate transition-colors"
                    >
                      {item.sizes.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span className="text-[10px] font-bold text-gray-600 bg-neutral-100 px-2 py-0.5 rounded-md truncate max-w-[95px]">
                      {item.sizes ? item.sizes[0] : "One Size"}
                    </span>
                  )}

                  <span className={`text-[11px] font-extrabold whitespace-nowrap transition-colors flex items-center gap-0.5 ${
                    isSelected ? "text-emerald-700" : "text-gray-400 group-hover:text-black"
                  }`}>
                    {isSelected ? (
                      <>
                        <Check size={11} strokeWidth={3} /> In Kit
                      </>
                    ) : (
                      "+ Add"
                    )}
                  </span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Sleek Horizontal Bottom Bundle Summary & Action Dock */}
        <div className="w-full bg-[#111111] text-white rounded-2xl p-3.5 sm:p-4.5 border border-black/80 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Left: Included Items Counter & Quick Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-neutral-400 whitespace-nowrap flex items-center gap-1.5">
              <PackageCheck size={15} className="text-emerald-400" />
              Kit Pack ({totalItemsCount} Pieces):
            </span>

            <div className="flex flex-wrap items-center gap-1.5">
              {/* Always Polo */}
              <span className="text-[11px] font-bold text-white bg-neutral-800 border border-neutral-700 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Check size={10} className="text-emerald-400" strokeWidth={3} />
                Polo
              </span>

              {/* Selected companions */}
              {selectedCompanionItems.map((item) => (
                <span 
                  key={item.id}
                  className="text-[11px] font-bold text-white bg-neutral-800 border border-neutral-700 px-2.5 py-0.5 rounded-full flex items-center gap-1"
                >
                  <Check size={10} className="text-emerald-400" strokeWidth={3} />
                  {item.shortName}
                </span>
              ))}

              {/* Add more reminder */}
              {selectedCompanionItems.length < KIT_COMPANION_ITEMS.length && (
                <span className="text-[10px] font-medium text-neutral-400 italic ml-1">
                  +{KIT_COMPANION_ITEMS.length - selectedCompanionItems.length} more available
                </span>
              )}
            </div>
          </div>

          {/* Right: Pricing, Savings & Add to Cart Button */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 justify-between md:justify-end shrink-0">
            {/* Price & Savings Pill */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-start sm:items-end">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-neutral-400 line-through">
                    ₹{itemSubtotal.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    ₹{finalKitPrice.toLocaleString("en-IN")}
                  </span>
                </div>
                
                {bundleSavings > 0 ? (
                  <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Sparkles size={10} />
                    Extra 10% Saved (₹{bundleSavings})
                  </span>
                ) : (
                  <span className="text-[10px] text-neutral-400">
                    Add 1 more item for extra 10% off
                  </span>
                )}
              </div>
            </div>

            {/* Action CTA Button */}
            <button
              type="button"
              onClick={handleAddKitToCart}
              className={`py-3 px-5 sm:px-6 rounded-xl font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95 whitespace-nowrap shadow-md ${
                isAddedToCart
                  ? "bg-emerald-500 text-white"
                  : "bg-white text-black hover:bg-neutral-100"
              }`}
            >
              {isAddedToCart ? (
                <>
                  <Check size={16} strokeWidth={3} />
                  <span>Added {totalItemsCount} Kit Pieces to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={15} />
                  <span>Add Entire Kit to Cart ({totalItemsCount})</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
