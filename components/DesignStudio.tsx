"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  ShoppingBag, 
  Undo2, 
  Redo2, 
  Check, 
  Upload,
  ShieldCheck,
  ChevronDown
} from "lucide-react";

export type StudioStep = "silhouette" | "material" | "colors" | "logo" | "text";
export type StudioProductType = "polo" | "jersey";

export interface SilhouetteOption {
  id: string;
  name: string;
  shortLabel: string;
  badge: string;
  iconLetter: string;
}

export interface MaterialOption {
  id: string;
  name: string;
  shortLabel: string;
  specs: string;
  color: string;
  priceDelta: number;
  texturePattern: string;
}

export interface ColorOption {
  id: string;
  name: string;
  shortLabel: string;
  hex: string;
  frontImage: string;
  backImage: string;
  modelImage: string;
}

export interface LogoTechniqueOption {
  id: string;
  name: string;
  shortLabel: string;
  badge: string;
  priceDelta: number;
}

export interface TextOption {
  id: string;
  name: string;
  shortLabel: string;
  fontFamily: string;
  sample: string;
}

// ---------------------------------------------------------------------------
// AUTHENTIC YOODE DATA DEFINITIONS
// ---------------------------------------------------------------------------

const POLO_SILHOUETTES: SilhouetteOption[] = [
  { id: "zipper", name: "Zipper Polo", shortLabel: "Zipper Polo", badge: "Bestseller", iconLetter: "Z" },
  { id: "classic", name: "Classic Pique", shortLabel: "Classic Pique", badge: "Classic", iconLetter: "C" },
  { id: "dryfit", name: "Active Dry-Fit", shortLabel: "Active Dry-Fit", badge: "Athletic", iconLetter: "D" },
  { id: "tipped", name: "Tipped Rib", shortLabel: "Tipped Rib", badge: "Corporate", iconLetter: "T" },
];

const JERSEY_SILHOUETTES: SilhouetteOption[] = [
  { id: "cricket", name: "Cricket Kit", shortLabel: "Cricket Kit", badge: "Pro Match", iconLetter: "CR" },
  { id: "football", name: "Football Kit", shortLabel: "Football Kit", badge: "Match Day", iconLetter: "FB" },
  { id: "esports", name: "Esports Jersey", shortLabel: "Esports", badge: "Pro Gaming", iconLetter: "ES" },
  { id: "badminton", name: "Court Jersey", shortLabel: "Court Jersey", badge: "Featherlight", iconLetter: "BM" },
];

const MATERIALS: MaterialOption[] = [
  { 
    id: "cotton-220", 
    name: "220 GSM Pique Cotton", 
    shortLabel: "Pique Cotton", 
    specs: "Bio-Washed Combed Cotton", 
    color: "#ECE8DD", 
    priceDelta: 0,
    texturePattern: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5) 0%, transparent 80%), repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 2px, transparent 2px, transparent 5px)"
  },
  { 
    id: "micropoly-180", 
    name: "180 GSM Micro-Poly", 
    shortLabel: "Micro-Poly", 
    specs: "Rapid Moisture-Wicking", 
    color: "#3B4E63", 
    priceDelta: 20,
    texturePattern: "repeating-linear-gradient(0deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 3px)"
  },
  { 
    id: "honeycomb-mesh", 
    name: "Honeycomb Air Mesh", 
    shortLabel: "Air Mesh", 
    specs: "Ventilated Athletic Micro-Knit", 
    color: "#4A5F54", 
    priceDelta: 40,
    texturePattern: "radial-gradient(circle, rgba(0,0,0,0.25) 20%, transparent 20%) 0 0/6px 6px"
  },
  { 
    id: "fleece-320", 
    name: "320 GSM Brushed Fleece", 
    shortLabel: "Brushed Fleece", 
    specs: "Winter Structured Terry", 
    color: "#8B8178", 
    priceDelta: 120,
    texturePattern: "radial-gradient(circle, rgba(255,255,255,0.3) 10%, transparent 20%) 0 0/4px 4px"
  },
];

const POLO_COLORS: ColorOption[] = [
  { 
    id: "navy", 
    name: "Navy Blue", 
    shortLabel: "Navy Blue",
    hex: "#1E293B", 
    frontImage: "/polo/clean-navy-front.png",
    backImage: "/polo/clean-navy-back.png",
    modelImage: "/polo/clean-navy-model.png"
  },
  { 
    id: "black", 
    name: "Onyx Black", 
    shortLabel: "Onyx Black",
    hex: "#121212", 
    frontImage: "/polo/clean-black-front.png",
    backImage: "/polo/clean-navy-back.png",
    modelImage: "/polo/clean-navy-model.png"
  },
  { 
    id: "green", 
    name: "Forest Green", 
    shortLabel: "Forest Green",
    hex: "#2E4A3E", 
    frontImage: "/polo/clean-green-front.png",
    backImage: "/polo/clean-navy-back.png",
    modelImage: "/polo/clean-navy-model.png"
  },
  { 
    id: "white", 
    name: "Pure White", 
    shortLabel: "Pure White",
    hex: "#FFFFFF", 
    frontImage: "/polo/clean-white-front.png",
    backImage: "/polo/clean-navy-back.png",
    modelImage: "/polo/clean-navy-model.png"
  },
  { 
    id: "royal", 
    name: "Royal Blue", 
    shortLabel: "Royal Blue",
    hex: "#1E40AF", 
    frontImage: "/polo/clean-navy-front.png",
    backImage: "/polo/clean-navy-back.png",
    modelImage: "/polo/clean-navy-model.png"
  },
];

const JERSEY_COLORS: ColorOption[] = [
  { 
    id: "navy-gold", 
    name: "Navy & Gold", 
    shortLabel: "Navy / Gold",
    hex: "#1E2A38", 
    frontImage: "/polo/clean-navy-front.png",
    backImage: "/polo/clean-navy-back.png",
    modelImage: "/polo/clean-navy-model.png"
  },
  { 
    id: "black-red", 
    name: "Onyx & Crimson", 
    shortLabel: "Onyx / Crimson",
    hex: "#171717", 
    frontImage: "/polo/clean-black-front.png",
    backImage: "/polo/clean-navy-back.png",
    modelImage: "/polo/clean-navy-model.png"
  },
  { 
    id: "forest-gold", 
    name: "Emerald Kit", 
    shortLabel: "Emerald / Gold",
    hex: "#064E3B", 
    frontImage: "/polo/clean-green-front.png",
    backImage: "/polo/clean-navy-back.png",
    modelImage: "/polo/clean-navy-model.png"
  },
  { 
    id: "arctic-white", 
    name: "Arctic White", 
    shortLabel: "Arctic White",
    hex: "#F8FAFC", 
    frontImage: "/polo/clean-white-front.png",
    backImage: "/polo/clean-navy-back.png",
    modelImage: "/polo/clean-navy-model.png"
  },
  { 
    id: "cobalt", 
    name: "Cobalt Lightning", 
    shortLabel: "Cobalt Blue",
    hex: "#2563EB", 
    frontImage: "/polo/clean-navy-front.png",
    backImage: "/polo/clean-navy-back.png",
    modelImage: "/polo/clean-navy-model.png"
  },
];

const LOGO_TECHNIQUES: LogoTechniqueOption[] = [
  { id: "embroidery", name: "High-Density Japanese Embroidery", shortLabel: "Embroidery", badge: "Premium Atelier", priceDelta: 50 },
  { id: "crest", name: "Silicone High-Density 3D Crest", shortLabel: "3D Crest", badge: "Pro Grade", priceDelta: 70 },
  { id: "dtf", name: "Ultra-Vibrant DTF Chest Print", shortLabel: "DTF Print", badge: "Full Spectrum", priceDelta: 35 },
  { id: "sleeve-patch", name: "Woven Sleeve Patch", shortLabel: "Sleeve Patch", badge: "Official Detail", priceDelta: 40 },
  { id: "upload", name: "Upload Custom Vector Artwork", shortLabel: "Upload Artwork", badge: "Instant Mockup", priceDelta: 50 },
];

const TEXT_FONTS: TextOption[] = [
  { id: "modern", name: "Modern Sans Tracked", shortLabel: "Modern", fontFamily: "var(--font-sora), sans-serif", sample: "Aa" },
  { id: "athletic", name: "Championship Athletic Block", shortLabel: "Athletic", fontFamily: "Impact, sans-serif", sample: "07" },
  { id: "bodoni", name: "Editorial Bodoni Serif", shortLabel: "Bodoni", fontFamily: "Georgia, serif", sample: "Vd" },
  { id: "mono", name: "Technical Monospace", shortLabel: "Mono", fontFamily: "Courier New, monospace", sample: "//" },
];

export function DesignStudio() {
  const [productType, setProductType] = useState<StudioProductType>("polo");
  const [activeStep, setActiveStep] = useState<StudioStep>("material");
  const [selectedSilhouette, setSelectedSilhouette] = useState<string>("zipper");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("cotton-220");
  const [selectedColor, setSelectedColor] = useState<string>("navy");
  const [selectedTechnique, setSelectedTechnique] = useState<string>("embroidery");
  const [selectedFont, setSelectedFont] = useState<string>("athletic");
  const [customName, setCustomName] = useState<string>("ARJUN");
  const [customNumber, setCustomNumber] = useState<string>("07");
  const [logoZone, setLogoZone] = useState<"left-chest" | "right-chest" | "back" | "sleeve">("left-chest");
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const [activeAngle, setActiveAngle] = useState<number>(0);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isAddedToBag, setIsAddedToBag] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const colors = productType === "polo" ? POLO_COLORS : JERSEY_COLORS;
  const silhouettes = productType === "polo" ? POLO_SILHOUETTES : JERSEY_SILHOUETTES;

  const currentColor = colors.find((c) => c.id === selectedColor) || colors[0];
  const currentMaterial = MATERIALS.find((m) => m.id === selectedMaterial) || MATERIALS[0];
  const currentTechnique = LOGO_TECHNIQUES.find((t) => t.id === selectedTechnique) || LOGO_TECHNIQUES[0];
  const currentFont = TEXT_FONTS.find((t) => t.id === selectedFont) || TEXT_FONTS[0];

  // Base price in Indian Rupees
  const baseUnitPrice = productType === "polo" ? 480 : 490;
  const unitAddons = currentMaterial.priceDelta + (activeStep === "logo" ? currentTechnique.priceDelta : 0);
  const totalPrice = baseUnitPrice + unitAddons;

  // Multi-angle imagery (3 Views matching reference)
  const angleImages = [
    { id: "front", label: "Front View", src: currentColor.frontImage },
    { id: "back", label: "Back View", src: currentColor.backImage },
    { id: "model", label: "Side Profile", src: currentColor.modelImage },
  ];

  const handleAngleRotate = (direction: "left" | "right") => {
    setActiveAngle((prev) => {
      if (direction === "left") return prev === 0 ? 2 : prev - 1;
      return prev === 2 ? 0 : prev + 1;
    });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedLogo(url);
      setSelectedTechnique("upload");
    }
  };

  return (
    <div className="h-screen max-h-screen w-full bg-[#F6F5F2] text-[#111111] flex flex-col font-sans select-none overflow-hidden">
      
      {/* -------------------------------------------------------------
          TOP BAR / NAVIGATION (Luxury Atelier Header, 56px height)
      -------------------------------------------------------------- */}
      <header className="w-full h-14 shrink-0 px-4 md:px-12 flex items-center justify-between border-b border-black/[0.06] bg-[#F6F5F2]/90 backdrop-blur-sm z-30">
        
        {/* Left: Crossed Scissors Logo + Nav links */}
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Yoode Home">
            <svg className="w-7 h-7 text-black transition-transform group-hover:scale-105" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" fill="none" />
              <circle cx="12" cy="28" r="5" fill="none" />
              <path d="M16 14.5 L32 30" />
              <path d="M16 25.5 L32 10" />
              <circle cx="23.5" cy="20" r="1.5" fill="currentColor" />
            </svg>
          </Link>

          <nav className="flex items-center gap-6 text-[11px] md:text-[12px] font-bold tracking-[0.16em] uppercase text-black/75">
            <span className="text-black border-b-2 border-black pb-0.5 cursor-pointer">Custom</span>
            <Link href="/products/polo-tshirt" className="hover:text-black transition-colors hidden sm:inline">Lookbook</Link>
            <Link href="/services" className="hover:text-black transition-colors hidden sm:inline">About Us</Link>
          </nav>
        </div>

        {/* Center: Product Category Switcher */}
        <div className="flex items-center bg-black/[0.04] p-1 rounded-full text-xs font-bold border border-black/[0.06]">
          <button
            type="button"
            onClick={() => {
              setProductType("polo");
              setSelectedSilhouette("zipper");
              setSelectedColor("navy");
              setActiveAngle(0);
            }}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer text-[11px] md:text-xs ${
              productType === "polo" 
                ? "bg-black text-white shadow-xs font-extrabold" 
                : "text-gray-600 hover:text-black"
            }`}
          >
            Polo
          </button>
          <button
            type="button"
            onClick={() => {
              setProductType("jersey");
              setSelectedSilhouette("cricket");
              setSelectedColor("navy-gold");
              setActiveAngle(0);
            }}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer text-[11px] md:text-xs ${
              productType === "jersey" 
                ? "bg-black text-white shadow-xs font-extrabold" 
                : "text-gray-600 hover:text-black"
            }`}
          >
            Jersey
          </button>
        </div>

        {/* Right: Currency Flag, Favorites, Bag */}
        <div className="flex items-center gap-4 md:gap-6 text-[12px] font-bold tracking-[0.14em] uppercase text-black/80">
          <div className="hidden sm:flex items-center gap-1.5 cursor-pointer hover:text-black">
            <span className="text-sm">🇮🇳</span>
            <span className="text-[11px] font-extrabold">INR</span>
            <ChevronDown size={13} className="text-gray-400" />
          </div>

          <button 
            type="button"
            onClick={() => setIsSaved(!isSaved)}
            className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer"
          >
            <Heart size={15} className={isSaved ? "fill-red-500 text-red-500" : "text-black"} />
            <span className="hidden md:inline">Favorites</span>
          </button>

          <button
            type="button"
            onClick={() => setIsAddedToBag(true)}
            className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer"
          >
            <ShoppingBag size={15} />
            <span className="hidden md:inline">Bag</span>
            <span className="text-[10px] bg-black text-white rounded-full w-4 h-4 flex items-center justify-center font-bold">
              {isAddedToBag ? "1" : "0"}
            </span>
          </button>
        </div>
      </header>

      {/* -------------------------------------------------------------
          STEP HEADLINE (Exact uppercase tracked headline from reference)
      -------------------------------------------------------------- */}
      <div className="w-full h-8 shrink-0 flex items-center justify-center pt-2">
        <h1 className="font-sans text-xs md:text-[14px] font-black tracking-[0.22em] uppercase text-black text-center">
          {activeStep === "silhouette" && "Choose Your Silhouette"}
          {activeStep === "material" && "Choose Your Material"}
          {activeStep === "colors" && "Choose Your Color"}
          {activeStep === "logo" && "Choose Your Logo Technique"}
          {activeStep === "text" && "Personalize Your Name & Number"}
        </h1>
      </div>

      {/* -------------------------------------------------------------
          MOBILE STEP NAV BAR (Visible only on < md screens)
      -------------------------------------------------------------- */}
      <div className="md:hidden w-full px-3 py-1.5 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0 border-b border-black/[0.04]">
        {[
          { id: "silhouette" as StudioStep, label: "Silhouette" },
          { id: "material" as StudioStep, label: "Material" },
          { id: "colors" as StudioStep, label: "Colors" },
          { id: "logo" as StudioStep, label: "Logo" },
          { id: "text" as StudioStep, label: "Text" },
        ].map((step) => {
          const isActive = activeStep === step.id;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStep(step.id)}
              className={`whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                isActive 
                  ? "bg-black text-white shadow-xs" 
                  : "bg-white/80 text-black/60 border border-black/10"
              }`}
            >
              <span className="text-[10px]">✻</span>
              <span>{step.label}</span>
            </button>
          );
        })}
      </div>

      {/* -------------------------------------------------------------
          MIDDLE WORKSPACE: DESKTOP DUAL ARCS & CENTER PRODUCT DISPLAY
      -------------------------------------------------------------- */}
      <div className="flex-1 min-h-0 w-full max-w-[1440px] mx-auto px-2 md:px-8 flex items-center justify-between relative overflow-hidden">
        
        {/* =========================================================
            DESKTOP LEFT ARCH TRACK: STEP NODES WITH STAR ICONS
        ========================================================== */}
        <div className="relative w-52 md:w-60 h-[380px] hidden md:block shrink-0 z-20">
          
          {/* SVG Arc Track Line (Curving gently inward toward product) */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 220 380" 
            fill="none"
          >
            <path 
              d="M 185 15 Q 105 190 185 365" 
              stroke="rgba(0,0,0,0.22)" 
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>

          {/* 5 Step Nodes on Left Arc: exact bezier coordinates */}
          {[
            { id: "silhouette" as StudioStep, label: "Silhouette", price: null, x: 174.4, y: 40 },
            { id: "material" as StudioStep, label: "Material", price: null, x: 152.4, y: 115 },
            { id: "colors" as StudioStep, label: "Colors", price: null, x: 145.0, y: 190 },
            { id: "logo" as StudioStep, label: "Logo", price: "+ ₹50", x: 152.4, y: 265 },
            { id: "text" as StudioStep, label: "Text", price: "Free", x: 174.4, y: 340 },
          ].map((step) => {
            const isActive = activeStep === step.id;
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className="absolute group cursor-pointer"
                style={{ 
                  left: `${step.x}px`, 
                  top: `${step.y}px`, 
                  transform: "translate(-50%, -50%)" 
                }}
              >
                {/* Step Label (Cleanly to the left of node, right-aligned) */}
                <div 
                  className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-end pr-2 text-right whitespace-nowrap cursor-pointer select-none"
                >
                  <span className={`text-[12px] font-bold tracking-wide transition-colors ${
                    isActive ? "text-black font-extrabold" : "text-black/60 group-hover:text-black"
                  }`}>
                    {step.label}
                  </span>
                  {step.price && (
                    <span className="text-[10px] text-black/45 font-medium">
                      {step.price}
                    </span>
                  )}
                </div>

                {/* Step Circle Node on the Arc Line (Charcoal circle with white star ✻) */}
                <div className={`w-[26px] h-[26px] rounded-full flex items-center justify-center transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive 
                    ? "bg-[#161616] text-white shadow-md scale-110 ring-2 ring-black/15" 
                    : "bg-[#2D2D2D] text-white/90 group-hover:bg-black group-hover:scale-105"
                }`}>
                  <span className="text-[11px] leading-none select-none font-serif">✻</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            CENTER PRODUCT VIEWPORT: GARMENT DISPLAY, 3 ANGLES & BUY
        ========================================================== */}
        <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-2 h-full max-h-[100%]">
          
          {/* Main Product Visual (Floats directly on warm atelier canvas) */}
          <div className="relative w-[280px] sm:w-[320px] md:w-[360px] h-[34vh] max-h-[290px] flex items-center justify-center">
            
            {/* Soft Shadow underneath garment base */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[60%] h-5 bg-black/[0.12] blur-lg rounded-[100%] pointer-events-none z-0" />

            {/* Product Image with transparent cutout */}
            <div className="relative w-full h-full flex items-center justify-center z-10 transition-transform duration-500">
              <Image
                src={angleImages[activeAngle]?.src || currentColor.frontImage}
                alt={`${currentColor.name} ${productType === "polo" ? "Performance Polo" : "Custom Jersey"}`}
                fill
                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-all duration-500"
                priority
              />

              {/* Live Custom Text & Number Overlay */}
              {activeAngle === 0 && customName && (
                <div 
                  className="absolute top-[36%] left-[64%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 text-white font-black tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-xs sm:text-sm px-2 py-0.5 border border-white/20 rounded-xs bg-black/40 backdrop-blur-xs"
                  style={{ fontFamily: currentFont.fontFamily }}
                >
                  {customName}
                </div>
              )}

              {activeAngle === 1 && customNumber && (
                <div 
                  className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 text-white font-black tracking-widest drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)] text-3xl sm:text-4xl"
                  style={{ fontFamily: currentFont.fontFamily }}
                >
                  {customNumber}
                </div>
              )}

              {/* Live Uploaded Logo Overlay */}
              {activeAngle === 0 && uploadedLogo && logoZone === "left-chest" && (
                <div className="absolute top-[36%] left-[64%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-25 w-8 h-8 sm:w-10 sm:h-10">
                  <img 
                    src={uploadedLogo} 
                    alt="Uploaded Logo" 
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>
              )}
            </div>

            {/* Curved Rotation Arrows hugging garment base */}
            <button 
              type="button"
              onClick={() => handleAngleRotate("left")}
              className="absolute -bottom-2 left-2 md:left-6 p-1.5 text-black/50 hover:text-black transition-colors cursor-pointer group z-20"
              aria-label="Rotate left"
              title="Previous view"
            >
              <svg className="w-7 h-7 transition-transform group-hover:-translate-x-1" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M 28 8 A 20 20 0 0 0 6 24" strokeLinecap="round"/>
                <polyline points="4,18 6,24 12,24" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button 
              type="button"
              onClick={() => handleAngleRotate("right")}
              className="absolute -bottom-2 right-2 md:right-6 p-1.5 text-black/50 hover:text-black transition-colors cursor-pointer group z-20"
              aria-label="Rotate right"
              title="Next view"
            >
              <svg className="w-7 h-7 transition-transform group-hover:scale-105" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M 4 8 A 20 20 0 0 1 26 24" strokeLinecap="round"/>
                <polyline points="28,18 26,24 20,24" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* 3 Angle View Thumbnails (Front, Back, Side Profile) */}
          <div className="flex items-center gap-3 mt-1 shrink-0 z-20">
            {angleImages.map((angle, idx) => (
              <button
                key={angle.id}
                type="button"
                onClick={() => setActiveAngle(idx)}
                className={`w-11 h-10 rounded-md p-0.5 transition-all flex items-center justify-center cursor-pointer ${
                  activeAngle === idx 
                    ? "ring-1 ring-black bg-white shadow-xs scale-105" 
                    : "opacity-60 bg-white/40 hover:opacity-100 hover:scale-105 border border-black/10"
                }`}
                aria-label={angle.label}
                title={angle.label}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={angle.src}
                    alt={angle.label}
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Undo / Redo Controls */}
          <div className="flex items-center gap-5 mt-1 text-[10px] md:text-[11px] font-bold tracking-wider text-black/60 uppercase shrink-0">
            <button 
              type="button"
              onClick={() => {
                setSelectedSilhouette("zipper");
                setSelectedMaterial("cotton-220");
                setSelectedColor("navy");
                setSelectedTechnique("embroidery");
                setCustomName("ARJUN");
                setCustomNumber("07");
              }}
              className="flex items-center gap-1 hover:text-black cursor-pointer transition-colors"
            >
              <Undo2 size={12} />
              <span>Undo</span>
            </button>
            
            <button 
              type="button"
              onClick={() => {
                setSelectedColor("black");
                setSelectedTechnique("crest");
              }}
              className="flex items-center gap-1 hover:text-black cursor-pointer transition-colors"
            >
              <Redo2 size={12} />
              <span>Redo</span>
            </button>
          </div>

          {/* Price & Solid Black BUY Button */}
          <div className="flex items-center gap-4 mt-2 shrink-0 z-20">
            <span className="text-lg md:text-xl font-black tracking-tight text-black">
              {totalPrice.toLocaleString("en-IN")},00 ₹
            </span>

            <button
              type="button"
              onClick={() => {
                setIsAddedToBag(true);
              }}
              className="bg-black hover:bg-neutral-800 text-white font-black text-xs md:text-[13px] px-7 py-2 tracking-[0.18em] uppercase rounded-xs transition-all active:scale-95 cursor-pointer shadow-sm flex items-center gap-2"
            >
              {isAddedToBag ? (
                <>
                  <Check size={14} />
                  <span>ADDED</span>
                </>
              ) : (
                <span>BUY</span>
              )}
            </button>
          </div>

        </div>

        {/* =========================================================
            DESKTOP RIGHT ARCH TRACK: SWATCHES SITTING DIRECTLY ON CURVE
        ========================================================== */}
        <div className="relative w-52 md:w-60 h-[380px] hidden md:block shrink-0 z-20">
          
          {/* SVG Arc Track Line (Curving gently inward toward product) */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 220 380" 
            fill="none"
          >
            <path 
              d="M 35 15 Q 115 190 35 365" 
              stroke="rgba(0,0,0,0.22)" 
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>

          {/* ----------------- SUB-VIEW 1: SILHOUETTE (4 items) ----------------- */}
          {activeStep === "silhouette" && (
            <>
              {[
                { sil: silhouettes[0], x: 51.2, y: 55 },
                { sil: silhouettes[1], x: 72.4, y: 145 },
                { sil: silhouettes[2], x: 72.4, y: 235 },
                { sil: silhouettes[3], x: 51.2, y: 325 },
              ].map(({ sil, x, y }) => {
                if (!sil) return null;
                const isActive = selectedSilhouette === sil.id;

                return (
                  <div
                    key={sil.id}
                    onClick={() => setSelectedSilhouette(sil.id)}
                    className="absolute group cursor-pointer"
                    style={{ 
                      left: `${x}px`, 
                      top: `${y}px`, 
                      transform: "translate(-50%, -50%)" 
                    }}
                  >
                    {/* Swatch Circle */}
                    <div className={`rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "w-[76px] h-[76px] bg-black text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] font-bold text-sm ring-2 ring-black/15" 
                        : "w-7 h-7 bg-white border border-black/30 text-black/70 group-hover:scale-110 text-[10px] font-bold"
                    }`}>
                      <span>{sil.iconLetter}</span>
                    </div>

                    {/* Label sitting cleanly to the right of circle */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pl-2 cursor-pointer select-none"
                      style={{ left: isActive ? "46px" : "22px" }}
                    >
                      <span className={`text-[12px] font-bold tracking-wide transition-colors ${
                        isActive ? "text-black text-[13px] font-extrabold" : "text-black/60 group-hover:text-black"
                      }`}>
                        {sil.shortLabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </>
          )}

          {/* ----------------- SUB-VIEW 2: MATERIAL / FABRIC (4 items) ----------------- */}
          {activeStep === "material" && (
            <>
              {[
                { mat: MATERIALS[0], x: 51.2, y: 55 },
                { mat: MATERIALS[1], x: 72.4, y: 145 },
                { mat: MATERIALS[2], x: 72.4, y: 235 },
                { mat: MATERIALS[3], x: 51.2, y: 325 },
              ].map(({ mat, x, y }) => {
                if (!mat) return null;
                const isActive = selectedMaterial === mat.id;

                return (
                  <div
                    key={mat.id}
                    onClick={() => setSelectedMaterial(mat.id)}
                    className="absolute group cursor-pointer"
                    style={{ 
                      left: `${x}px`, 
                      top: `${y}px`, 
                      transform: "translate(-50%, -50%)" 
                    }}
                  >
                    {/* Swatch (Enlarged to 76px when active with tactile texture) */}
                    {isActive ? (
                      <div className="relative w-[76px] h-[76px] rounded-full border-2 border-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] flex items-center justify-center shrink-0 overflow-hidden ring-1 ring-black/10 cursor-pointer">
                        <div 
                          className="w-full h-full"
                          style={{ 
                            backgroundColor: mat.color,
                            backgroundImage: mat.texturePattern
                          }}
                        />
                      </div>
                    ) : (
                      <div 
                        className="w-7 h-7 rounded-full shadow-xs border border-white transition-transform group-hover:scale-110 shrink-0 cursor-pointer"
                        style={{ backgroundColor: mat.color }}
                      />
                    )}

                    {/* Label to the right */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pl-2 cursor-pointer select-none"
                      style={{ left: isActive ? "46px" : "22px" }}
                    >
                      <span className={`text-[12px] font-bold tracking-wide transition-colors ${
                        isActive ? "text-black text-[13px] font-extrabold" : "text-black/60 group-hover:text-black"
                      }`}>
                        {mat.shortLabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </>
          )}

          {/* ----------------- SUB-VIEW 3: COLORS (5 items) ----------------- */}
          {activeStep === "colors" && (
            <>
              {[
                { col: colors[0], x: 45.6, y: 40 },
                { col: colors[1], x: 67.7, y: 115 },
                { col: colors[2], x: 75.0, y: 190 },
                { col: colors[3], x: 67.7, y: 265 },
                { col: colors[4], x: 45.6, y: 340 },
              ].map(({ col, x, y }) => {
                if (!col) return null;
                const isActive = selectedColor === col.id;

                return (
                  <div
                    key={col.id}
                    onClick={() => setSelectedColor(col.id)}
                    className="absolute group cursor-pointer"
                    style={{ 
                      left: `${x}px`, 
                      top: `${y}px`, 
                      transform: "translate(-50%, -50%)" 
                    }}
                  >
                    {isActive ? (
                      <div 
                        className="relative w-[76px] h-[76px] rounded-full border-2 border-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] flex items-center justify-center shrink-0 ring-1 ring-black/15 cursor-pointer"
                        style={{ backgroundColor: col.hex }}
                      >
                        <div className="w-3.5 h-3.5 rounded-full bg-white/90 shadow-xs" />
                      </div>
                    ) : (
                      <div 
                        className="w-7 h-7 rounded-full shadow-xs border border-white transition-transform group-hover:scale-110 shrink-0 cursor-pointer"
                        style={{ backgroundColor: col.hex }}
                      />
                    )}

                    <div 
                      className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pl-2 cursor-pointer select-none"
                      style={{ left: isActive ? "46px" : "22px" }}
                    >
                      <span className={`text-[12px] font-bold tracking-wide transition-colors ${
                        isActive ? "text-black text-[13px] font-extrabold" : "text-black/60 group-hover:text-black"
                      }`}>
                        {col.shortLabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </>
          )}

          {/* ----------------- SUB-VIEW 4: LOGO TECHNIQUE (5 items) ----------------- */}
          {activeStep === "logo" && (
            <>
              {[
                { tech: LOGO_TECHNIQUES[0], x: 45.6, y: 40 },
                { tech: LOGO_TECHNIQUES[1], x: 67.7, y: 115 },
                { tech: LOGO_TECHNIQUES[2], x: 75.0, y: 190 },
                { tech: LOGO_TECHNIQUES[3], x: 67.7, y: 265 },
                { tech: LOGO_TECHNIQUES[4], x: 45.6, y: 340 },
              ].map(({ tech, x, y }) => {
                if (!tech) return null;
                const isActive = selectedTechnique === tech.id;

                return (
                  <div
                    key={tech.id}
                    onClick={() => {
                      if (tech.id === "upload") {
                        fileInputRef.current?.click();
                      } else {
                        setSelectedTechnique(tech.id);
                      }
                    }}
                    className="absolute group cursor-pointer"
                    style={{ 
                      left: `${x}px`, 
                      top: `${y}px`, 
                      transform: "translate(-50%, -50%)" 
                    }}
                  >
                    <div className={`rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "w-[76px] h-[76px] bg-black text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] text-xs font-bold" 
                        : "w-7 h-7 bg-white border border-black/20 text-black/60 group-hover:scale-110"
                    }`}>
                      {tech.id === "upload" ? <Upload size={isActive ? 20 : 13} /> : <span className={isActive ? "text-lg" : "text-xs"}>★</span>}
                    </div>

                    <div 
                      className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pl-2 cursor-pointer select-none"
                      style={{ left: isActive ? "46px" : "22px" }}
                    >
                      <span className={`text-[12px] font-bold tracking-wide transition-colors ${
                        isActive ? "text-black text-[13px] font-extrabold" : "text-black/60 group-hover:text-black"
                      }`}>
                        {tech.shortLabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </>
          )}

          {/* ----------------- SUB-VIEW 5: TEXT / MONOGRAM (4 items) ----------------- */}
          {activeStep === "text" && (
            <>
              {[
                { font: TEXT_FONTS[0], x: 51.2, y: 55 },
                { font: TEXT_FONTS[1], x: 72.4, y: 145 },
                { font: TEXT_FONTS[2], x: 72.4, y: 235 },
                { font: TEXT_FONTS[3], x: 51.2, y: 325 },
              ].map(({ font, x, y }) => {
                if (!font) return null;
                const isActive = selectedFont === font.id;

                return (
                  <div
                    key={font.id}
                    onClick={() => setSelectedFont(font.id)}
                    className="absolute group cursor-pointer"
                    style={{ 
                      left: `${x}px`, 
                      top: `${y}px`, 
                      transform: "translate(-50%, -50%)" 
                    }}
                  >
                    <div className={`rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "w-[76px] h-[76px] bg-[#161616] text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] font-bold text-base" 
                        : "w-7 h-7 bg-white border border-black/20 text-black/70 group-hover:scale-110 text-xs"
                    }`}>
                      <span style={{ fontFamily: font.fontFamily }}>{font.sample}</span>
                    </div>

                    <div 
                      className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pl-2 cursor-pointer select-none"
                      style={{ left: isActive ? "46px" : "22px" }}
                    >
                      <span className={`text-[12px] font-bold tracking-wide transition-colors ${
                        isActive ? "text-black text-[13px] font-extrabold" : "text-black/60 group-hover:text-black"
                      }`}>
                        {font.shortLabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </>
          )}

        </div>

      </div>

      {/* -------------------------------------------------------------
          MOBILE OPTIONS DRAWER (Visible only on < md screens)
      -------------------------------------------------------------- */}
      <div className="md:hidden w-full px-3 py-2 bg-white/70 border-t border-black/[0.06] shrink-0">
        
        {/* Mobile Silhouette Options */}
        {activeStep === "silhouette" && (
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            {silhouettes.map(sil => (
              <button
                key={sil.id}
                type="button"
                onClick={() => setSelectedSilhouette(sil.id)}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-all shrink-0 ${
                  selectedSilhouette === sil.id 
                    ? "bg-black text-white" 
                    : "bg-white border border-black/10 text-black/70"
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center text-[10px]">
                  {sil.iconLetter}
                </span>
                <span>{sil.shortLabel}</span>
              </button>
            ))}
          </div>
        )}

        {/* Mobile Material Options */}
        {activeStep === "material" && (
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-0.5">
            {MATERIALS.map(mat => (
              <button
                key={mat.id}
                type="button"
                onClick={() => setSelectedMaterial(mat.id)}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-all shrink-0 ${
                  selectedMaterial === mat.id 
                    ? "bg-black text-white" 
                    : "bg-white border border-black/10 text-black/70"
                }`}
              >
                <div 
                  className="w-5 h-5 rounded-full border border-black/20" 
                  style={{ backgroundColor: mat.color }} 
                />
                <span>{mat.shortLabel}</span>
              </button>
            ))}
          </div>
        )}

        {/* Mobile Color Options */}
        {activeStep === "colors" && (
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-0.5">
            {colors.map(col => (
              <button
                key={col.id}
                type="button"
                onClick={() => setSelectedColor(col.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold shrink-0 transition-all ${
                  selectedColor === col.id 
                    ? "bg-black text-white border-black" 
                    : "bg-white text-black/70 border-black/10"
                }`}
              >
                <div 
                  className="w-4 h-4 rounded-full border border-white shadow-xs" 
                  style={{ backgroundColor: col.hex }} 
                />
                <span>{col.shortLabel}</span>
              </button>
            ))}
          </div>
        )}

        {/* Mobile Logo Options */}
        {activeStep === "logo" && (
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            {LOGO_TECHNIQUES.map(tech => (
              <button
                key={tech.id}
                type="button"
                onClick={() => {
                  if (tech.id === "upload") fileInputRef.current?.click();
                  else setSelectedTechnique(tech.id);
                }}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-bold transition-all shrink-0 ${
                  selectedTechnique === tech.id 
                    ? "bg-black text-white" 
                    : "bg-white border border-black/10 text-black/70"
                }`}
              >
                {tech.id === "upload" ? <Upload size={13} /> : <span>★</span>}
                <span>{tech.shortLabel}</span>
              </button>
            ))}
          </div>
        )}

        {/* Mobile Text Options */}
        {activeStep === "text" && (
          <div className="flex flex-col gap-1.5 py-0.5">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              {TEXT_FONTS.map(font => (
                <button
                  key={font.id}
                  type="button"
                  onClick={() => setSelectedFont(font.id)}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all shrink-0 ${
                    selectedFont === font.id 
                      ? "bg-black text-white" 
                      : "bg-white border border-black/10 text-black/70"
                  }`}
                  style={{ fontFamily: font.fontFamily }}
                >
                  {font.shortLabel}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-gray-500 font-bold">NAME:</span>
                <input 
                  type="text" 
                  maxLength={12} 
                  value={customName} 
                  onChange={(e) => setCustomName(e.target.value.toUpperCase())}
                  placeholder="NAME"
                  className="w-24 text-center font-bold text-black bg-white px-1.5 py-0.5 rounded-sm border border-gray-300 focus:outline-none uppercase text-xs"
                />
              </div>

              <div className="flex items-center gap-1">
                <span className="text-[10px] text-gray-500 font-bold">NO:</span>
                <input 
                  type="text" 
                  maxLength={3} 
                  value={customNumber} 
                  onChange={(e) => setCustomNumber(e.target.value)}
                  placeholder="07"
                  className="w-12 text-center font-bold text-black bg-white px-1.5 py-0.5 rounded-sm border border-gray-300 focus:outline-none text-xs"
                />
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Hidden File Input for Artwork Upload */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleLogoUpload} 
        accept="image/*" 
        className="hidden" 
      />

      {/* -------------------------------------------------------------
          BOTTOM UTILITY BAR (Save for Later, Quick Zone/Inputs & Guarantee)
      -------------------------------------------------------------- */}
      <div className="w-full h-10 shrink-0 px-4 md:px-12 flex items-center justify-between border-t border-black/[0.06] text-xs font-bold tracking-wider text-black/60 uppercase">
        
        {/* Left: Save for Later */}
        <button 
          type="button"
          onClick={() => setIsSaved(!isSaved)}
          className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer"
        >
          <Heart size={14} className={isSaved ? "fill-red-500 text-red-500" : ""} />
          <span>Save for later</span>
        </button>
        
        {/* Center: Desktop Quick interactive inputs for Logo Zone & Custom Text */}
        <div className="hidden sm:flex items-center">
          {activeStep === "logo" && (
            <div className="flex items-center gap-2 bg-black/[0.04] px-3 py-1 rounded-full border border-black/[0.06]">
              <span className="text-[10px] text-gray-500 font-extrabold">ZONE:</span>
              {(["left-chest", "right-chest", "back", "sleeve"] as const).map(zone => (
                <button
                  key={zone}
                  type="button"
                  onClick={() => {
                    setLogoZone(zone);
                    if (zone === "back") setActiveAngle(1);
                    else setActiveAngle(0);
                  }}
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-all cursor-pointer ${
                    logoZone === zone ? "bg-black text-white" : "text-gray-600 hover:text-black"
                  }`}
                >
                  {zone.replace("-", " ")}
                </button>
              ))}
            </div>
          )}

          {activeStep === "text" && (
            <div className="flex items-center gap-3 bg-black/[0.04] px-3.5 py-0.5 rounded-full border border-black/[0.06]">
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-gray-500 font-bold">NAME:</span>
                <input 
                  type="text" 
                  maxLength={12} 
                  value={customName} 
                  onChange={(e) => setCustomName(e.target.value.toUpperCase())}
                  placeholder="NAME"
                  className="w-20 text-center font-bold text-black bg-white px-1.5 py-0.5 rounded-xs border border-gray-300 focus:outline-none uppercase text-xs"
                />
              </div>

              <div className="flex items-center gap-1">
                <span className="text-[10px] text-gray-500 font-bold">NO:</span>
                <input 
                  type="text" 
                  maxLength={3} 
                  value={customNumber} 
                  onChange={(e) => setCustomNumber(e.target.value)}
                  placeholder="07"
                  className="w-12 text-center font-bold text-black bg-white px-1.5 py-0.5 rounded-xs border border-gray-300 focus:outline-none text-xs"
                />
              </div>
            </div>
          )}

          {activeStep !== "logo" && activeStep !== "text" && (
            <span className="text-[11px] text-gray-500 normal-case font-medium">
              Precision tailored in Tirupur, India · 100% Guaranteed colorfast
            </span>
          )}
        </div>

        {/* Right: Guarantee Note */}
        <div className="flex items-center gap-2 text-[11px] text-gray-400 normal-case font-normal">
          <ShieldCheck size={14} className="text-emerald-600" />
          <span className="hidden sm:inline">Guaranteed colorfast · Made in India</span>
          <span className="sm:hidden">Made in India</span>
        </div>

      </div>

    </div>
  );
}

export default DesignStudio;
