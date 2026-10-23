"use client";

import React, { useState, useRef } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  RotateCcw, 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Upload, 
  Check, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  Palette, 
  Sparkles, 
  ShieldCheck, 
  Share2, 
  Download, 
  Plus, 
  Minus, 
  MessageCircle, 
  Eye, 
  Shirt,
  Type,
  Sliders,
  HelpCircle
} from "lucide-react";
import { ColorVariant } from "@/data/rainsProductData";

interface YoodeKitStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialColor?: ColorVariant;
  onAddToCart?: (customData: CustomKitState) => void;
}

export interface CustomKitState {
  style: string;
  colorId: string;
  colorName: string;
  viewAngle: "F" | "B" | "L" | "R"; // Front, Back, Left, Right
  logoPlacement: "left-chest" | "right-chest" | "back" | "sleeve";
  logoTechnique: string;
  logoSize: number; // in percentage
  logoImage: string | null;
  customText: string;
  customNumber: string;
  fontStyle: string;
  quantity: number;
}

export default function YoodeKitStudioModal({
  isOpen,
  onClose,
  initialColor,
  onAddToCart
}: YoodeKitStudioModalProps) {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [viewAngle, setViewAngle] = useState<"F" | "B" | "L" | "R">("F");
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const params = useParams();
  const slug = (params?.slug as string) || "";
  const isWomenPolo = slug === "womens-polo" || slug === "womens-performance-polo";
  const modelImg = isWomenPolo ? "/polo/women-navy-model.jpg" : "/polo/navy-model.jpg";

  // Customization State
  const [customState, setCustomState] = useState<CustomKitState>({
    style: isWomenPolo ? "Women's Performance Polo" : "Performance Zipper Polo",
    colorId: initialColor?.id || "navy",
    colorName: initialColor?.name || "Navy Blue",
    viewAngle: "F",
    logoPlacement: "left-chest",
    logoTechnique: "High-Density Embroidery",
    logoSize: 100,
    logoImage: null,
    customText: "",
    customNumber: "",
    fontStyle: "Modern Minimalist",
    quantity: 10
  });

  const availableColors = [
    { 
      id: "navy", 
      name: "Navy Blue", 
      hex: "#1E293B", 
      imageF: "/polo/navy-front.jpg", 
      imageB: "/polo/navy-back.jpg", 
      imageL: modelImg, 
      imageR: "/polo/navy-collar.jpg" 
    },
    { 
      id: "black", 
      name: "Onyx Black", 
      hex: "#121212", 
      imageF: "/polo/black-front.jpg", 
      imageB: "/polo/navy-back.jpg", 
      imageL: modelImg, 
      imageR: "/polo/navy-collar.jpg" 
    },
    { 
      id: "green", 
      name: "Forest Green", 
      hex: "#2E4A3E", 
      imageF: "/polo/green-front.jpg", 
      imageB: "/polo/navy-back.jpg", 
      imageL: modelImg, 
      imageR: "/polo/navy-collar.jpg" 
    },
    { 
      id: "white", 
      name: "Optic White", 
      hex: "#F8FAFC", 
      imageF: "/polo/white-front.jpg", 
      imageB: "/polo/navy-back.jpg", 
      imageL: modelImg, 
      imageR: "/polo/navy-collar.jpg" 
    }
  ];

  const currentColor = availableColors.find(c => c.id === customState.colorId) || availableColors[0];

  // Calculate live bulk unit price & discount
  const getUnitPrice = (qty: number) => {
    if (qty >= 50) return { price: 336, discount: "30% OFF" };
    if (qty >= 25) return { price: 384, discount: "20% OFF" };
    if (qty >= 10) return { price: 432, discount: "10% OFF" };
    return { price: 480, discount: "Standard" };
  };

  const pricing = getUnitPrice(customState.quantity);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomState(prev => ({ ...prev, logoImage: url }));
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleCompleteOrder = () => {
    setIsAdded(true);
    if (onAddToCart) {
      onAddToCart(customState);
    }
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1800);
  };

  // Image to render based on view angle
  const getDisplayImage = () => {
    switch (viewAngle) {
      case "B": return currentColor.imageB;
      case "L": return currentColor.imageL;
      case "R": return currentColor.imageR;
      case "F":
      default:
        return currentColor.imageF;
    }
  };

  const steps = [
    { num: 1, label: "Polo" },
    { num: 2, label: "Look" },
    { num: 3, label: "Colours" },
    { num: 4, label: "Logos" },
    { num: 5, label: "Names" },
    { num: 6, label: "Specs" }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] w-screen h-screen bg-[#F0EFEA] text-[#111827] flex flex-col overflow-hidden font-sans select-none">
      
      {/* -----------------------------------------------------------------------
          TOP MICRO RIBBON & STUDIO HEADER
      ------------------------------------------------------------------------ */}
      <div className="w-full bg-[#111827] text-white text-[11px] py-1.5 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-2">
        <span>Made in our custom factory</span>
        <span className="opacity-40">•</span>
        <span>Ships in 4–5 days</span>
        <span className="opacity-40">•</span>
        <span className="text-amber-300 font-semibold">Free 3D digital proof before production</span>
      </div>

      <header className="w-full h-14 bg-white/95 backdrop-blur-md border-b border-black/10 px-4 sm:px-6 flex items-center justify-between shrink-0 z-30">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-black text-lg tracking-tighter">
            <span className="tracking-tight text-xl">YOODE</span>
            <span className="text-[#E53935] text-xs uppercase px-2 py-0.5 rounded-full bg-red-50 border border-red-200 font-extrabold tracking-widest">
              Kit Studio
            </span>
          </div>
          <span className="text-xs text-gray-400 hidden sm:inline">|</span>
          <span className="text-xs text-gray-600 font-medium hidden sm:inline">
            3D Bespoke Polo & Apparel Studio
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button 
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-black hover:text-white transition-colors flex items-center justify-center text-gray-700 cursor-pointer shadow-xs"
            aria-label="Close Kit Studio"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>
      </header>

      {/* -----------------------------------------------------------------------
          MAIN STUDIO WORKSPACE (3-COLUMN FLEX)
      ------------------------------------------------------------------------ */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        
        {/* -------------------------------------------------------------------
            LEFT: STEP NAVIGATION & CONFIGURATION PANEL
        -------------------------------------------------------------------- */}
        <div className="w-full md:w-[420px] lg:w-[460px] bg-white border-r border-black/10 flex flex-col shrink-0 z-20 shadow-sm overflow-hidden h-full">
          
          {/* Step Pill Header Tabs (1 - 6) */}
          <div className="flex border-b border-gray-100 bg-gray-50/70 p-2 overflow-x-auto hide-scrollbar gap-1.5">
            {steps.map(s => {
              const isActive = activeStep === s.num;
              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setActiveStep(s.num)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? "bg-black text-white shadow-xs" 
                      : "bg-white text-gray-600 hover:text-black border border-gray-200"
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                    isActive ? "bg-white text-black" : "bg-gray-100 text-gray-700"
                  }`}>
                    {s.num}
                  </span>
                  <span>{s.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 hide-scrollbar space-y-6">
            
            {/* ---------------- STEP 1: STYLE ---------------- */}
            {activeStep === 1 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-extrabold text-base text-gray-900">Choose Polo Silhouette</h3>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Select placket type, collar cut, and sleeve profile</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "Performance Zipper Polo", desc: "Anti-rust YKK quarter-zipper with structured collar", badge: "Bestseller" },
                    { id: "Classic Pique 3-Button Polo", desc: "Timeless ribbed collar with mother-of-pearl buttons", badge: "Classic" },
                    { id: "Active Dry-Fit Polo", desc: "Moisture-wicking breathable micro-pique knit", badge: "Athletic" },
                    { id: "Tipped Collar Polo", desc: "Dual-color contrast tipping on collar & sleeve ribs", badge: "Corporate" }
                  ].map(style => (
                    <div
                      key={style.id}
                      onClick={() => setCustomState(prev => ({ ...prev, style: style.id }))}
                      className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                        customState.style === style.id
                          ? "border-black bg-neutral-50 shadow-xs"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#E53935] block mb-1">
                          {style.badge}
                        </span>
                        <h4 className="font-bold text-xs text-gray-900 leading-snug">{style.id}</h4>
                      </div>
                      <p className="text-[11px] text-gray-500 font-normal leading-tight">{style.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ---------------- STEP 2: LOOK & DETAILS ---------------- */}
            {activeStep === 2 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-extrabold text-base text-gray-900">Hardware &amp; Craftsmanship</h3>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Custom collar, placket, and hem specifications</p>
                </div>

                <div className="space-y-2.5">
                  {[
                    { title: "Placket Zipper", opt: "Anti-Rust YKK Silver Quarter-Zip", desc: "Smooth glide with auto-lock puller" },
                    { title: "Collar Construction", opt: "Reinforced Structured Rib (Lycra Core)", desc: "Guaranteed zero collar curl after washing" },
                    { title: "Fabric Construction", opt: "220 GSM Bio-Washed Combed Cotton", desc: "Soft handfeel, pre-shrunk, colorfast" },
                    { title: "Hem & Side Slits", opt: "Bar-Tacked Side Vent Slits", desc: "Clean athletic drape over trousers or chinos" }
                  ].map((item, i) => (
                    <div key={i} className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide block">{item.title}</span>
                        <strong className="text-xs font-bold text-gray-900">{item.opt}</strong>
                        <p className="text-[11px] text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ---------------- STEP 3: COLOURS ---------------- */}
            {activeStep === 3 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-extrabold text-base text-gray-900">Primary Fabric Colour</h3>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">
                    Selected: <strong className="text-black">{customState.colorName}</strong>
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {availableColors.map(color => {
                    const isSelected = customState.colorId === color.id;
                    return (
                      <button
                        key={color.id}
                        type="button"
                        onClick={() => setCustomState(prev => ({ 
                          ...prev, 
                          colorId: color.id, 
                          colorName: color.name 
                        }))}
                        className={`p-3 rounded-xl border-2 flex items-center gap-2.5 transition-all cursor-pointer ${
                          isSelected 
                            ? "border-black bg-neutral-50 shadow-xs" 
                            : "border-gray-200 hover:border-gray-300 bg-white"
                        }`}
                      >
                        <div 
                          className="w-6 h-6 rounded-full border border-black/10 shrink-0 shadow-xs" 
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-xs font-bold text-gray-900">{color.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ---------------- STEP 4: LOGOS & ARTWORK ---------------- */}
            {activeStep === 4 && (
              <div className="space-y-5">
                <div>
                  <h3 className="font-extrabold text-base text-gray-900">Upload &amp; Position Artwork</h3>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Add vector or high-res company logo</p>
                </div>

                {/* Upload Trigger Box */}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="hidden" 
                />

                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border-2 border-dashed border-gray-300 hover:border-[#E53935] rounded-2xl p-5 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-white transition-all cursor-pointer group"
                >
                  {customState.logoImage ? (
                    <div className="flex flex-col items-center gap-2">
                      <img 
                        src={customState.logoImage} 
                        alt="Uploaded Logo" 
                        className="w-16 h-16 object-contain rounded-md border border-gray-200 bg-white p-1"
                      />
                      <span className="text-xs font-bold text-emerald-700">Logo Uploaded! Click to change</span>
                    </div>
                  ) : (
                    <>
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <Upload size={20} />
                      </div>
                      <span className="text-xs font-bold text-gray-900">Click to upload logo or artwork</span>
                      <span className="text-[11px] text-gray-500 mt-0.5">Supports PNG, SVG, AI, EPS, PDF (up to 25MB)</span>
                    </>
                  )}
                </div>

                {/* Placement Zone Pills */}
                <div>
                  <label className="text-xs font-bold text-gray-900 block mb-2">Print Zone Placement</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "left-chest", label: "Left Chest", size: "3\" x 3\"" },
                      { id: "right-chest", label: "Right Chest", size: "3\" x 3\"" },
                      { id: "back", label: "Center Back", size: "8\" x 10\"" },
                      { id: "sleeve", label: "Sleeve / Shoulder", size: "2\" x 2\"" }
                    ].map(zone => (
                      <button
                        key={zone.id}
                        type="button"
                        onClick={() => {
                          setCustomState(prev => ({ ...prev, logoPlacement: zone.id as any }));
                          if (zone.id === "back") setViewAngle("B");
                          else if (zone.id === "sleeve") setViewAngle("L");
                          else setViewAngle("F");
                        }}
                        className={`p-2.5 rounded-xl text-left border-2 transition-all cursor-pointer ${
                          customState.logoPlacement === zone.id
                            ? "border-[#2563EB] bg-blue-50/50 shadow-xs"
                            : "border-gray-200 hover:border-gray-300 bg-white"
                        }`}
                      >
                        <span className="text-xs font-bold text-gray-900 block leading-tight">{zone.label}</span>
                        <span className="text-[10px] text-gray-500 font-medium">{zone.size}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Print Technique Selection */}
                <div>
                  <label className="text-xs font-bold text-gray-900 block mb-2">Printing Technique</label>
                  <div className="space-y-1.5">
                    {[
                      { title: "High-Density Micro Embroidery", desc: "Sealed on reverse with waterproof heat tape" },
                      { title: "Waterproof Matte DTF Print", desc: "Ultra-vibrant, stretchable, waterproof film" },
                      { title: "Reflective Safety Print", desc: "Reflects headlights at night for high visibility" },
                      { title: "Woven Silicone Crest Patch", desc: "Luxury 3D tactile rubberized badge" }
                    ].map(t => (
                      <button
                        key={t.title}
                        type="button"
                        onClick={() => setCustomState(prev => ({ ...prev, logoTechnique: t.title }))}
                        className={`w-full p-2.5 rounded-xl text-left border transition-all flex items-center justify-between cursor-pointer ${
                          customState.logoTechnique === t.title
                            ? "border-black bg-neutral-50 font-bold"
                            : "border-gray-200 hover:border-gray-300 bg-white"
                        }`}
                      >
                        <div>
                          <span className="text-xs font-bold text-gray-900 block">{t.title}</span>
                          <span className="text-[11px] text-gray-500 font-normal">{t.desc}</span>
                        </div>
                        {customState.logoTechnique === t.title && (
                          <Check size={16} className="text-black shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- STEP 5: NAMES & NUMBERS ---------------- */}
            {activeStep === 5 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-extrabold text-base text-gray-900">Personalized Names &amp; Numbers</h3>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Add staff names, corporate monograms or squad numbers</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Company / Staff Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. ARJUN VERMA or ACME CREW" 
                      value={customState.customText}
                      onChange={(e) => setCustomState(prev => ({ ...prev, customText: e.target.value }))}
                      className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:border-black focus:outline-hidden bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Badge / Squad Number (Optional)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 07" 
                      maxLength={3}
                      value={customState.customNumber}
                      onChange={(e) => setCustomState(prev => ({ ...prev, customNumber: e.target.value }))}
                      className="w-full text-xs p-3 rounded-xl border border-gray-300 focus:border-black focus:outline-hidden bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1.5">Typography Style</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Modern Minimalist", "Athletic Bold", "Clean Sans", "Technical Mono"].map(font => (
                        <button
                          key={font}
                          type="button"
                          onClick={() => setCustomState(prev => ({ ...prev, fontStyle: font }))}
                          className={`p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            customState.fontStyle === font
                              ? "border-black bg-neutral-50 shadow-xs"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          {font}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- STEP 6: SUMMARY & QUANTITY ---------------- */}
            {activeStep === 6 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-extrabold text-base text-gray-900">Custom Order Specifications</h3>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Review your bespoke merchandise configuration</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-gray-200/60">
                    <span className="text-gray-500 font-medium">Style</span>
                    <strong className="text-gray-900">{customState.style}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200/60">
                    <span className="text-gray-500 font-medium">Primary Colour</span>
                    <strong className="text-gray-900">{customState.colorName}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200/60">
                    <span className="text-gray-500 font-medium">Logo Placement</span>
                    <strong className="text-gray-900 uppercase">{customState.logoPlacement}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200/60">
                    <span className="text-gray-500 font-medium">Print Technique</span>
                    <strong className="text-gray-900">{customState.logoTechnique}</strong>
                  </div>
                  {customState.customText && (
                    <div className="flex justify-between py-1 border-b border-gray-200/60">
                      <span className="text-gray-500 font-medium">Custom Name</span>
                      <strong className="text-gray-900">{customState.customText}</strong>
                    </div>
                  )}
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500 font-medium">Craftsmanship Guarantee</span>
                    <strong className="text-emerald-700 font-bold flex items-center gap-1">
                      <ShieldCheck size={14} /> Anti-Curl Collar &amp; Double Stitched
                    </strong>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Step Footer Navigation Bar */}
          <div className="p-4 border-t border-gray-100 bg-white flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500">
              Step {activeStep} of 6
            </span>

            <div className="flex items-center gap-2">
              {activeStep > 1 && (
                <button
                  type="button"
                  onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                  className="px-3 py-2 rounded-xl border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Back
                </button>
              )}

              {activeStep < 6 ? (
                <button
                  type="button"
                  onClick={() => setActiveStep(prev => Math.min(6, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold hover:bg-neutral-800 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Next: {steps[activeStep]?.label}</span>
                  <ChevronRight size={14} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleCompleteOrder}
                  className="px-5 py-2 rounded-xl bg-[#E53935] text-white text-xs font-bold hover:bg-red-600 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Check size={14} />
                  <span>Finalize Kit</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* -------------------------------------------------------------------
            CENTER: INTERACTIVE PREVIEW CANVAS
        -------------------------------------------------------------------- */}
        <div className="flex-1 bg-[#ECEAE4] flex items-center justify-center relative overflow-hidden p-6 sm:p-12">
          
          {/* Main Rendered Garment with Zoom */}
          <div 
            className="relative w-full max-w-[560px] h-[520px] sm:h-[620px] flex items-center justify-center transition-transform duration-300"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img 
              src={getDisplayImage()} 
              alt={`Customized ${customState.colorName} Polo`} 
              className="max-h-full max-w-full object-contain select-none drop-shadow-xl"
            />

            {/* Simulated Live Logo Overlay on the Garment */}
            {customState.logoImage && (
              <div 
                className={`absolute transition-all duration-300 pointer-events-none ${
                  customState.logoPlacement === "left-chest" && viewAngle === "F"
                    ? "top-[28%] left-[58%] w-12 h-12"
                    : customState.logoPlacement === "right-chest" && viewAngle === "F"
                    ? "top-[28%] left-[34%] w-12 h-12"
                    : customState.logoPlacement === "back" && viewAngle === "B"
                    ? "top-[32%] left-[42%] w-24 h-28"
                    : customState.logoPlacement === "sleeve" && (viewAngle === "L" || viewAngle === "R")
                    ? "top-[32%] left-[45%] w-10 h-10"
                    : "hidden"
                }`}
              >
                <img 
                  src={customState.logoImage} 
                  alt="Custom Brand Mark" 
                  className="w-full h-full object-contain drop-shadow-md brightness-95" 
                />
              </div>
            )}

            {/* Simulated Custom Name on Back */}
            {customState.customText && viewAngle === "B" && (
              <div className="absolute top-[24%] inset-x-0 flex items-center justify-center pointer-events-none">
                <span className="font-extrabold text-sm uppercase tracking-widest text-white/90 drop-shadow-md bg-black/30 px-3 py-1 rounded-sm backdrop-blur-xs">
                  {customState.customText}
                </span>
              </div>
            )}
          </div>

          {/* Right Floating View Angle Toolbar (Matching Xipid Layout) */}
          <div className="absolute top-6 right-6 flex flex-col items-center gap-1.5 bg-white/90 backdrop-blur-md rounded-2xl p-1.5 border border-black/10 shadow-lg z-20">
            <button
              type="button"
              onClick={() => {
                setViewAngle("F");
                setZoomLevel(1);
              }}
              title="Reset View"
              className="w-8 h-8 rounded-xl flex items-center justify-center text-gray-700 hover:bg-black/5 transition-colors cursor-pointer"
            >
              <RotateCcw size={15} />
            </button>

            <button
              type="button"
              onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 1.8))}
              title="Zoom In"
              className="w-8 h-8 rounded-xl flex items-center justify-center text-gray-700 hover:bg-black/5 transition-colors cursor-pointer"
            >
              <ZoomIn size={15} />
            </button>

            <button
              type="button"
              onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.8))}
              title="Zoom Out"
              className="w-8 h-8 rounded-xl flex items-center justify-center text-gray-700 hover:bg-black/5 transition-colors cursor-pointer"
            >
              <ZoomOut size={15} />
            </button>

            <div className="w-5 h-px bg-gray-200 my-0.5" />

            {/* Quick Angle Buttons: Front, Back, Left, Right */}
            {(["F", "B", "L", "R"] as const).map(angle => (
              <button
                key={angle}
                type="button"
                onClick={() => setViewAngle(angle)}
                className={`w-8 h-8 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center ${
                  viewAngle === angle 
                    ? "bg-black text-white shadow-xs" 
                    : "text-gray-700 hover:bg-black/5"
                }`}
                title={`View ${angle}`}
              >
                {angle}
              </button>
            ))}
          </div>

          {/* Quality Assurance Card (Bottom Right of Preview Canvas) */}
          <div className="hidden lg:flex absolute bottom-6 right-6 max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-black/10 shadow-lg items-start gap-3 z-10">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck size={18} />
            </div>
            <div className="text-[11px] leading-relaxed text-gray-600">
              <strong className="text-gray-900 block font-bold mb-0.5">A Yoode designer checks every order</strong>
              Before anything prints, our Tirupur team checks sizes, placements, and logo vector resolution, sending a free 3D digital proof for your approval.
            </div>
          </div>

        </div>

      </div>

      {/* -----------------------------------------------------------------------
          BOTTOM ACTION FOOTER (Live Pricing & Add to Cart)
      ------------------------------------------------------------------------ */}
      <footer className="w-full bg-white border-t border-black/10 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 z-30 shrink-0">
        
        {/* Left: Product Thumbnail & Title */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gray-100 border border-gray-200 overflow-hidden shrink-0 flex items-center justify-center">
            <img 
              src={currentColor.imageF} 
              alt="Thumbnail" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-gray-900 leading-tight">
              {customState.style} &ndash; {customState.colorName}
            </h4>
            <span className="text-[11px] text-gray-500 font-medium">
              Zone: <strong className="text-black uppercase">{customState.logoPlacement}</strong>
            </span>
          </div>
        </div>

        {/* Center: Share & Save Tools */}
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={handleShare}
            className="px-3.5 py-2 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Share2 size={13} />
            <span>{isCopied ? "Link Copied!" : "Share Design"}</span>
          </button>
        </div>

        {/* Right: Quantity Stepper & Price / CTA Button */}
        <div className="flex items-center gap-4 sm:gap-6 ml-auto">
          
          {/* Quantity Stepper */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-gray-500 hidden sm:inline">Qty:</span>
            <div className="flex items-center border border-gray-300 rounded-xl bg-gray-50 overflow-hidden h-9">
              <button
                type="button"
                onClick={() => setCustomState(prev => ({ ...prev, quantity: Math.max(1, prev.quantity - 5) }))}
                className="px-2.5 h-full flex items-center justify-center hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
              >
                <Minus size={12} />
              </button>
              <span className="px-3 text-xs font-bold text-gray-900">
                {customState.quantity} pcs
              </span>
              <button
                type="button"
                onClick={() => setCustomState(prev => ({ ...prev, quantity: prev.quantity + 5 }))}
                className="px-2.5 h-full flex items-center justify-center hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
              >
                <Plus size={12} />
              </button>
            </div>
          </div>

          {/* Unit Price & Total */}
          <div className="flex flex-col text-right">
            <div className="flex items-center gap-1.5 justify-end">
              <span className="text-base sm:text-lg font-black text-gray-900">
                ₹{pricing.price}
              </span>
              <span className="text-[11px] text-gray-500 font-medium">/ piece</span>
              {pricing.discount !== "Standard" && (
                <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded-sm">
                  {pricing.discount}
                </span>
              )}
            </div>
            <span className="text-[10px] text-gray-500 font-medium">
              Total: ₹{pricing.price * customState.quantity}
            </span>
          </div>

          {/* WhatsApp Designer Button */}
          <a
            href={`https://wa.me/918069750293?text=Hi%20Yoode%2C%20I%20am%20customizing%20the%20${encodeURIComponent(customState.style)}%20in%20${encodeURIComponent(customState.colorName)}%20(${customState.quantity}%20pcs).%20Please%20assist%20with%20digital%20proof.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-emerald-600/30 bg-emerald-50 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors"
          >
            <MessageCircle size={15} />
            <span>Designer</span>
          </a>

          {/* Main Action Button */}
          <button
            type="button"
            onClick={handleCompleteOrder}
            disabled={isAdded}
            className={`px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center gap-2 cursor-pointer ${
              isAdded 
                ? "bg-emerald-600 text-white" 
                : "bg-[#F59E0B] hover:bg-amber-500 text-black shadow-amber-500/20 active:scale-95"
            }`}
          >
            {isAdded ? (
              <>
                <Check size={16} strokeWidth={2.5} />
                <span>Added to Cart!</span>
              </>
            ) : (
              <span>Add to Cart</span>
            )}
          </button>

        </div>

      </footer>

    </div>
  );
}
