"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Check, 
  ChevronDown, 
  ShieldCheck, 
  Truck, 
  RefreshCcw, 
  Sparkles,
  Droplets,
  Wind,
  Layers,
  ThumbsUp,
  MessageSquarePlus,
  Plus,
  Minus,
  Ruler,
  HelpCircle,
  Shirt,
  Scissors
} from "lucide-react";
import { ColorVariant, RAINS_JACKET_DATA } from "@/data/rainsProductData";

interface RainsProductDetailsProps {
  selectedColor?: ColorVariant;
  onAddToCart?: () => void;
}

export default function RainsProductDetails({ selectedColor, onAddToCart }: RainsProductDetailsProps) {
  // Active Tab state
  const [activeTab, setActiveTab] = useState<string>("product-details");

  // Logo placement state
  const [selectedPlacement, setSelectedPlacement] = useState<string>("left-chest");

  // Size unit state
  const [sizeUnit, setSizeUnit] = useState<"cm" | "in">("cm");

  const tabs = [
    { id: "product-details", label: "Product details" },
    { id: "size-fit", label: "Size & Fit" },
    { id: "material-care", label: "Material & Care" },
    { id: "specifications", label: "Specifications" },
    { id: "logo-placement", label: "Logo Placement" }
  ];

  const placements: { [key: string]: { title: string; size: string; bestFor: string; method: string } } = {
    "left-chest": {
      title: "Left Chest Placement",
      size: '3" x 3" (7.5 x 7.5 cm)',
      bestFor: "Corporate insignias, primary company logos, club crests.",
      method: "High-density micro embroidery or waterproof matte DTF print."
    },
    "right-chest": {
      title: "Right Chest Placement",
      size: '3" x 3" (7.5 x 7.5 cm)',
      bestFor: "Secondary sponsor marks, event editions, department monograms.",
      method: "Waterproof DTF heat transfer or precision silicone seal."
    },
    "back": {
      title: "Center Back Placement",
      size: '8" x 10" (20 x 25 cm)',
      bestFor: "Prominent company lettering, bold event graphics, full-bleed team logos.",
      method: "Waterproof reflective safety print or high-impact matte DTF."
    },
    "sleeve": {
      title: "Sleeve / Shoulder Placement",
      size: '2" x 2" (5 x 5 cm)',
      bestFor: "Subtle brand emblems, flag insignias, department badges.",
      method: "Woven silicone patch or precision waterproof film."
    }
  };

  const currentPlacement = placements[selectedPlacement];

  const sizeChart = [
    { size: "38 (S)", chestCm: "96 - 100", chestIn: "38 - 39", lengthCm: "69", lengthIn: "27.2", shoulderCm: "43", shoulderIn: "16.9" },
    { size: "40 (M)", chestCm: "101 - 105", chestIn: "40 - 41", lengthCm: "71", lengthIn: "28.0", shoulderCm: "45", shoulderIn: "17.7" },
    { size: "42 (L)", chestCm: "106 - 110", chestIn: "42 - 43", lengthCm: "73", lengthIn: "28.7", shoulderCm: "47", shoulderIn: "18.5" },
    { size: "44 (XL)", chestCm: "111 - 116", chestIn: "44 - 45", lengthCm: "75", lengthIn: "29.5", shoulderCm: "49", shoulderIn: "19.3" },
    { size: "46 (2XL)", chestCm: "117 - 122", chestIn: "46 - 48", lengthCm: "77", lengthIn: "30.3", shoulderCm: "51", shoulderIn: "20.1" },
    { size: "48 (3XL)", chestCm: "123 - 128", chestIn: "48 - 50", lengthCm: "79", lengthIn: "31.1", shoulderCm: "53", shoulderIn: "20.9" }
  ];

  return (
    <section id="product-details" className="w-full bg-[#f4f4f4] text-black py-12 lg:py-20 select-none">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:pl-[98px] lg:pr-12">
        
        {/* =========================================================================
            HEADER: SUBTITLE EYEBROW + BIG DISPLAY TITLE
        ========================================================================= */}
        <div className="mb-6 sm:mb-8">
          <div className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-gray-500 mb-2">
            Details, Fit and Care
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black">
            Everything About This Polo
          </h2>
        </div>

        {/* =========================================================================
            PILL TABS NAVIGATION ROW
        ========================================================================= */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 mb-6 sm:mb-8 hide-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                  isActive
                    ? "bg-[#111111] text-[#FFE500] sm:text-white shadow-sm ring-1 ring-black"
                    : "bg-[#EAE6DF] hover:bg-[#DDD8CF] text-[#222222]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            UNIFIED CONTENT CARD
        ========================================================================= */}
        <div className="bg-white rounded-3xl border border-black/10 p-6 sm:p-10 shadow-sm min-h-[420px]">
          <AnimatePresence mode="wait">
            
            {/* ---------------------------------------------------------------------
                TAB 1: PRODUCT DETAILS
            ---------------------------------------------------------------------- */}
            {activeTab === "product-details" && (
              <motion.div
                key="product-details"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4">
                  <p>
                    This custom performance polo is cut with a structured non-curling collar, anti-rust silver quarter-zip closure, and tailored short sleeves. Fully engineered with 220 GSM combed compact pique cotton so your company embroidery, sponsor branding, and team names are reproduced with razor sharpness and never fade or peel.
                  </p>
                  <p>
                    Ideal for corporate uniforms, startup teams, golf clubs, corporate events, and executive client meetings. Order from 1 single piece to a full squad online from anywhere in India, or visit one of our stores in Bengaluru, Chennai, Trivandrum, or Marthandam.
                  </p>
                  <p className="font-semibold text-black">
                    Men&apos;s & women&apos;s performance polo with silver YKK zipper, customized with your team&apos;s design, names, and numbers.
                  </p>
                </div>

                {/* Key Highlights Bullet Points */}
                <div className="pt-2">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-800">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                      <span><strong>Full-dye & micro embroidery:</strong> never peels or fades through 50+ industrial washes</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                      <span><strong>Made in our own Tirupur factory:</strong> 100% in-house knitting, dye & stitching control</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                      <span><strong>Free branding proof:</strong> digital 3D proof & logo digitization included</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                      <span><strong>Moisture-wicking, quick-dry fabric:</strong> 220 GSM all-day climate comfort</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                      <span><strong>Anti-rust YKK silver zipper:</strong> reinforced collar core that never rolls</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                      <span><strong>No minimum order:</strong> order from 1 to 10,000+ pieces with fast dispatch</span>
                    </li>
                  </ul>
                </div>

                {/* Embedded 4-Step Customization Journey */}
                <div className="pt-6 border-t border-black/5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-sm sm:text-base font-black text-black">
                        Customize in 4 Simple Steps
                      </h4>
                      <p className="text-[11px] text-gray-500 font-medium">
                        Order plain or customized with company embroidery
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full uppercase">
                      Zero MOQ
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-1.5">1</div>
                      <span className="font-bold text-xs text-black">Select Polo</span>
                      <span className="text-[10px] text-gray-500 mt-0.5">Pick color & size</span>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-1.5">2</div>
                      <span className="font-bold text-xs text-black">Add Branding</span>
                      <span className="text-[10px] text-gray-500 mt-0.5">Upload logo/art</span>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-1.5">3</div>
                      <span className="font-bold text-xs text-black">Choose Method</span>
                      <span className="text-[10px] text-gray-500 mt-0.5">Embroidery or DTF</span>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-1.5">4</div>
                      <span className="font-bold text-xs text-black">Fast Dispatch</span>
                      <span className="text-[10px] text-gray-500 mt-0.5">Approval & delivery</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ---------------------------------------------------------------------
                TAB 2: SIZE & FIT
            ---------------------------------------------------------------------- */}
            {activeTab === "size-fit" && (
              <motion.div
                key="size-fit"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-black">Garment Sizing Chart</h3>
                    <p className="text-xs text-gray-500 font-medium">Standard corporate & athletic fit</p>
                  </div>

                  {/* Unit Toggle */}
                  <div className="inline-flex items-center bg-gray-100 rounded-lg p-1 self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={() => setSizeUnit("cm")}
                      className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                        sizeUnit === "cm" ? "bg-white text-black shadow-xs" : "text-gray-500 hover:text-black"
                      }`}
                    >
                      CM
                    </button>
                    <button
                      type="button"
                      onClick={() => setSizeUnit("in")}
                      className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                        sizeUnit === "in" ? "bg-white text-black shadow-xs" : "text-gray-500 hover:text-black"
                      }`}
                    >
                      INCHES
                    </button>
                  </div>
                </div>

                {/* Size Table */}
                <div className="overflow-x-auto border border-black/10 rounded-2xl">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-gray-50 border-b border-black/10 text-gray-600 font-bold">
                      <tr>
                        <th className="py-3 px-4">Size</th>
                        <th className="py-3 px-4">Chest ({sizeUnit})</th>
                        <th className="py-3 px-4">Length ({sizeUnit})</th>
                        <th className="py-3 px-4">Shoulder ({sizeUnit})</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5">
                      {sizeChart.map((row) => (
                        <tr key={row.size} className="hover:bg-gray-50/70 transition-colors">
                          <td className="py-3 px-4 font-bold text-black">{row.size}</td>
                          <td className="py-3 px-4 text-gray-700">{sizeUnit === "cm" ? row.chestCm : row.chestIn}</td>
                          <td className="py-3 px-4 text-gray-700">{sizeUnit === "cm" ? row.lengthCm : row.lengthIn}</td>
                          <td className="py-3 px-4 text-gray-700">{sizeUnit === "cm" ? row.shoulderCm : row.shoulderIn}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-1">
                  <div className="font-bold text-black">Fit Recommendation:</div>
                  <p>
                    Fits true to Indian & International corporate sizing. If you prefer a relaxed streetwear drape or intend to layer over an undershirt, we recommend ordering one size up.
                  </p>
                </div>
              </motion.div>
            )}

            {/* ---------------------------------------------------------------------
                TAB 3: MATERIAL & CARE
            ---------------------------------------------------------------------- */}
            {activeTab === "material-care" && (
              <motion.div
                key="material-care"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-black text-black mb-1">Fabric & Craftsmanship</h3>
                  <p className="text-xs text-gray-500 font-medium">Built for durability, softness, and high-frequency washing</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-gray-50 border border-black/5 space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mb-2">
                      <Sparkles size={16} />
                    </div>
                    <h5 className="font-bold text-xs sm:text-sm text-black">220 GSM Bio-Washed Pique</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      100% combed compact cotton, pre-shrunk and silicone bio-washed for lasting ultra-soft texture.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 border border-black/5 space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mb-2">
                      <ShieldCheck size={16} />
                    </div>
                    <h5 className="font-bold text-xs sm:text-sm text-black">YKK Anti-Rust Silver Quarter-Zip</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Smooth-gliding metal zip placket tested for 10,000+ open-close cycles with zero snagging.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 border border-black/5 space-y-1.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mb-2">
                      <Layers size={16} />
                    </div>
                    <h5 className="font-bold text-xs sm:text-sm text-black">Anti-Curl Collar Core</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Structured flat-knit ribbed collar reinforced with an elastane core that stays crisp wash after wash.
                    </p>
                  </div>
                </div>

                {/* Wash and Care instructions */}
                <div className="p-5 rounded-2xl bg-gray-50 border border-black/10">
                  <h4 className="font-bold text-xs sm:text-sm text-black mb-3">Washing & Care Instructions</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-700">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" />
                      <span>Machine wash cold (30&deg;C) on gentle cycle</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" />
                      <span>Wash inside out with similar colors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" />
                      <span>Do not iron directly on embroidery or DTF prints</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" />
                      <span>Tumble dry low or line dry in shade</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* ---------------------------------------------------------------------
                TAB 4: SPECIFICATIONS
            ---------------------------------------------------------------------- */}
            {activeTab === "specifications" && (
              <motion.div
                key="specifications"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-black text-black mb-1">Technical Specifications</h3>
                  <p className="text-xs text-gray-500 font-medium">Garment construction and manufacturing parameters</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-gray-50 border border-black/5 flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Fabric Weight</span>
                    <span className="font-bold text-black">220 GSM (Heavyweight Pique)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gray-50 border border-black/5 flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Yarn Composition</span>
                    <span className="font-bold text-black">100% Combed Compact Cotton</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gray-50 border border-black/5 flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Placket Type</span>
                    <span className="font-bold text-black">YKK Silver Metal Quarter-Zip</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gray-50 border border-black/5 flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Stitching</span>
                    <span className="font-bold text-black">Double-Needle Chainstitch</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gray-50 border border-black/5 flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Side Vents</span>
                    <span className="font-bold text-black">Bar-Tacked Reinforced Slits</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gray-50 border border-black/5 flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Country of Origin</span>
                    <span className="font-bold text-black">Tirupur, Tamil Nadu, India</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gray-50 border border-black/5 flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Certification</span>
                    <span className="font-bold text-black">OEKO-TEX Standard 100 Safe</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-gray-50 border border-black/5 flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Minimum Order Quantity</span>
                    <span className="font-bold text-black">1 Piece (Zero MOQ)</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ---------------------------------------------------------------------
                TAB 5: LOGO PLACEMENT GUIDE
            ---------------------------------------------------------------------- */}
            {activeTab === "logo-placement" && (
              <motion.div
                key="logo-placement"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-black tracking-tight">
                      Logo Placement Guide
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      Standard garment branding zones & dimensions
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">
                    Click any zone
                  </span>
                </div>

                {/* Wireframe buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {/* Left Chest */}
                  <button
                    type="button"
                    onClick={() => setSelectedPlacement("left-chest")}
                    className={`p-3 rounded-xl border-2 flex flex-col items-center text-center transition-all cursor-pointer ${
                      selectedPlacement === "left-chest"
                        ? "border-blue-600 bg-blue-50/50 shadow-xs ring-1 ring-blue-600"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <div className="h-16 w-14 border-2 border-gray-300 rounded-t-lg border-b-0 relative bg-white mb-2">
                      <div className="absolute top-3 left-8 w-4 h-4 border-2 border-dashed border-blue-600 bg-blue-100 text-[7px] font-bold flex items-center justify-center text-blue-700">
                        Logo
                      </div>
                    </div>
                    <span className="text-xs font-bold text-black">Left Chest</span>
                    <span className="text-[10px] text-gray-500">3&quot; x 3&quot;</span>
                  </button>

                  {/* Right Chest */}
                  <button
                    type="button"
                    onClick={() => setSelectedPlacement("right-chest")}
                    className={`p-3 rounded-xl border-2 flex flex-col items-center text-center transition-all cursor-pointer ${
                      selectedPlacement === "right-chest"
                        ? "border-blue-600 bg-blue-50/50 shadow-xs ring-1 ring-blue-600"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <div className="h-16 w-14 border-2 border-gray-300 rounded-t-lg border-b-0 relative bg-white mb-2">
                      <div className="absolute top-3 left-2 w-4 h-4 border-2 border-dashed border-blue-600 bg-blue-100 text-[7px] font-bold flex items-center justify-center text-blue-700">
                        Logo
                      </div>
                    </div>
                    <span className="text-xs font-bold text-black">Right Chest</span>
                    <span className="text-[10px] text-gray-500">3&quot; x 3&quot;</span>
                  </button>

                  {/* Back */}
                  <button
                    type="button"
                    onClick={() => setSelectedPlacement("back")}
                    className={`p-3 rounded-xl border-2 flex flex-col items-center text-center transition-all cursor-pointer ${
                      selectedPlacement === "back"
                        ? "border-blue-600 bg-blue-50/50 shadow-xs ring-1 ring-blue-600"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <div className="h-16 w-14 border-2 border-gray-300 rounded-t-lg border-b-0 relative bg-white mb-2">
                      <div className="absolute top-4 left-3 w-8 h-8 border-2 border-dashed border-blue-600 bg-blue-100 text-[8px] font-bold flex items-center justify-center text-blue-700">
                        Logo
                      </div>
                    </div>
                    <span className="text-xs font-bold text-black">Center Back</span>
                    <span className="text-[10px] text-gray-500">8&quot; x 10&quot;</span>
                  </button>

                  {/* Sleeve */}
                  <button
                    type="button"
                    onClick={() => setSelectedPlacement("sleeve")}
                    className={`p-3 rounded-xl border-2 flex flex-col items-center text-center transition-all cursor-pointer ${
                      selectedPlacement === "sleeve"
                        ? "border-blue-600 bg-blue-50/50 shadow-xs ring-1 ring-blue-600"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <div className="h-14 w-8 border-2 border-gray-300 rounded-lg relative bg-white mb-2 mt-2">
                      <div className="absolute top-2 left-1.5 w-4 h-4 border-2 border-dashed border-blue-600 bg-blue-100 text-[7px] font-bold flex items-center justify-center text-blue-700">
                        Logo
                      </div>
                    </div>
                    <span className="text-xs font-bold text-black">Sleeve</span>
                    <span className="text-[10px] text-gray-500">2&quot; x 2&quot;</span>
                  </button>
                </div>

                {/* Dynamic details for selected placement */}
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-xs flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-black text-sm">{currentPlacement.title}</span>
                    <span className="text-blue-700 font-extrabold bg-blue-100 px-2 py-0.5 rounded text-[11px]">
                      {currentPlacement.size}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs">
                    <span className="font-semibold text-black">Best for: </span>
                    {currentPlacement.bestFor}
                  </p>
                  <p className="text-gray-600 text-xs">
                    <span className="font-semibold text-black">Recommended method: </span>
                    {currentPlacement.method}
                  </p>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
