"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  Heart, 
  ShoppingBag, 
  Undo2, 
  Redo2, 
  Check, 
  Upload,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Layers,
  Palette,
  Sparkles,
  Type,
  Sliders,
  SlidersHorizontal,
  Wrench,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Shirt
} from "lucide-react";

export type StudioStep = "style" | "look" | "fabric" | "colors" | "logo" | "player";

export interface SportItem {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  basePrice: number;
  icon?: string;
  iconLetter?: string;
  image: string;
  backImage?: string;
  sideImage?: string;
  styles: Array<{
    id: string;
    name: string;
    shortLabel: string;
    badge: string;
    desc: string;
    priceDelta: number;
  }>;
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

export interface ColorSchemeOption {
  id: string;
  name: string;
  shortLabel: string;
  primaryHex: string;
  secondaryHex: string;
  description: string;
}

export interface LogoTechniqueOption {
  id: string;
  name: string;
  shortLabel: string;
  badge: string;
  priceDelta: number;
  desc: string;
}

export interface TextFontOption {
  id: string;
  name: string;
  shortLabel: string;
  fontFamily: string;
  sample: string;
}

// ---------------------------------------------------------------------------
// LAYER & CRAFTSMANSHIP SPECS
// ---------------------------------------------------------------------------

const LAYER_SPECS = [
  { title: "Placket & Closure", opt: "Anti-Rust YKK Silver Quarter-Zip", desc: "Smooth glide with auto-lock puller & inner shield" },
  { title: "Collar Construction", opt: "Reinforced Structured Rib (Lycra Core)", desc: "Guaranteed zero collar curl after 100+ washes" },
  { title: "Fabric Construction", opt: "220 GSM Bio-Washed Combed Cotton", desc: "Soft handfeel, pre-shrunk, colorfast knit" },
  { title: "Hem & Side Slits", opt: "Bar-Tacked Side Vent Slits", desc: "Clean athletic drape over trousers or track pants" },
];

// ---------------------------------------------------------------------------
// AUTHENTIC YOODE SPORTS DATA DEFINITIONS (13 Comprehensive Sports & Apparel)
// ---------------------------------------------------------------------------

const SPORTS_DATA: SportItem[] = [
  {
    id: "basketball",
    name: "Basketball",
    tagline: "Court High-Motion Reversible Kit",
    badge: "Athletic Cut",
    basePrice: 540,
    icon: "/icons/sports/basketball.svg",
    image: "https://yoode.com/cdn/shop/files/BasketBall.webp?v=1789388369&width=1600",
    styles: [
      { id: "bb-tank", name: "Wide Shoulder Match Tank", shortLabel: "Pro Tank", badge: "Standard", desc: "Reinforced deep armholes for unrestricted shooting", priceDelta: 0 },
      { id: "bb-reversible", name: "Reversible Game Day Jersey", shortLabel: "Reversible", badge: "Dual-Side", desc: "Two kits in one with contrast inside color", priceDelta: 90 },
      { id: "bb-shooter", name: "Short-Sleeve Warmup Shirt", shortLabel: "Shooter Shirt", badge: "Pre-Game", desc: "Loose drape pre-game shooting shirt", priceDelta: 30 },
      { id: "bb-mesh", name: "Pro Mesh Court Jersey", shortLabel: "Pro Mesh", badge: "Tournament", desc: "Honeycomb moisture-release ventilation panels", priceDelta: 40 },
    ],
  },
  {
    id: "cricket",
    name: "Cricket",
    tagline: "Pro Match & Tournament Sublimation",
    badge: "Bestseller",
    basePrice: 490,
    icon: "/icons/sports/cricket.svg",
    image: "/cricket-preview.png",
    backImage: "https://yoode.com/cdn/shop/files/yd-seo-print-kit-back.png?v=1789123364&width=1000",
    sideImage: "https://yoode.com/cdn/shop/files/yd-seo-banner-custom-jersey-team.png?v=1789121863&width=1000",
    styles: [
      { id: "half-sleeve", name: "Half Sleeve Match Jersey", shortLabel: "Half Sleeve", badge: "Match Day", desc: "Breathable side mesh & rib collar", priceDelta: 0 },
      { id: "full-sleeve", name: "Full Sleeve Pro Kit", shortLabel: "Full Sleeve", badge: "Sun Protection", desc: "Full arm UV shield & elastic cuffs", priceDelta: 60 },
      { id: "raglan-collar", name: "Raglan Polo Collar", shortLabel: "Polo Collar", badge: "Club Classic", desc: "Two-button tipped placket", priceDelta: 40 },
      { id: "training-vest", name: "Sleeveless Training Vest", shortLabel: "Training Vest", badge: "Practice", desc: "Lightweight nets warm-up cut", priceDelta: 0 },
    ],
  },
  {
    id: "football",
    name: "Football",
    tagline: "Official Matchday Striker Kit",
    badge: "Pro Grade",
    basePrice: 490,
    icon: "/icons/sports/football.svg",
    image: "https://yoode.com/cdn/shop/files/Football.webp?v=1789388323&width=1600",
    styles: [
      { id: "fb-short", name: "Short Sleeve Striker Jersey", shortLabel: "Match Kit", badge: "Official Cut", desc: "Ergonomic shoulder seams & ventilated back", priceDelta: 0 },
      { id: "fb-vneck", name: "V-Neck Pro Sublimation", shortLabel: "V-Neck Pro", badge: "Lightweight", desc: "Featherlight competition collar", priceDelta: 20 },
      { id: "fb-long", name: "Long Sleeve Keeper / Striker", shortLabel: "Long Sleeve", badge: "Pro Match", desc: "Ribbed cuffs for tight forearm grip", priceDelta: 60 },
      { id: "fb-mesh", name: "Ventilated Air-Mesh Tee", shortLabel: "Air Mesh", badge: "Warm Weather", desc: "Micro-perforated side panels", priceDelta: 30 },
    ],
  },
  {
    id: "volleyball",
    name: "Volleyball",
    tagline: "Featherlight Spike & Block Jersey",
    badge: "High Stretch",
    basePrice: 490,
    icon: "/icons/sports/volleyball.svg",
    image: "https://yoode.com/cdn/shop/files/VolleyBall.webp?v=1789531414&width=1600",
    styles: [
      { id: "vb-sleeveless", name: "Sleeveless Spike Jersey", shortLabel: "Sleeveless", badge: "Match Day", desc: "Maximum arm reach with flexible armhole tape", priceDelta: 0 },
      { id: "vb-capsleeve", name: "Cap Sleeve Pro Top", shortLabel: "Cap Sleeve", badge: "Tournament", desc: "Fitted shoulders with aerodynamic cut", priceDelta: 25 },
      { id: "vb-libero", name: "Contrast Libero Kit", shortLabel: "Libero Special", badge: "Specialist", desc: "High-contrast colorway for court visibility", priceDelta: 40 },
    ],
  },
  {
    id: "badminton",
    name: "Badminton",
    tagline: "Rapid-Dry Court Motion Tee",
    badge: "Ultra Light",
    basePrice: 490,
    icon: "/icons/sports/badminton.svg",
    image: "https://yoode.com/cdn/shop/files/Badminton.webp?v=1789446482&width=1600",
    styles: [
      { id: "bm-crew", name: "Featherlight Crew Neck", shortLabel: "Crew Neck", badge: "Speed Cut", desc: "Sub-120g construction for fast smashes", priceDelta: 0 },
      { id: "bm-polo", name: "Rapid-Dry Zipper Polo", shortLabel: "Zip Polo", badge: "Pro Tour", desc: "Concealed micro-zipper and anti-chafing seams", priceDelta: 50 },
      { id: "bm-raglan", name: "Ergonomic Raglan Court Tee", shortLabel: "Raglan Court", badge: "Training", desc: "Split-hem design for rapid lateral steps", priceDelta: 30 },
    ],
  },
  {
    id: "esports",
    name: "Esports",
    tagline: "Pro Gaming Tournament Apparel",
    badge: "Championship",
    basePrice: 520,
    icon: "/icons/sports/esports.svg",
    image: "https://yoode.com/cdn/shop/files/Esports.webp?v=1789531388&width=1600",
    styles: [
      { id: "es-classic", name: "Raglan Gamer Match Tee", shortLabel: "Match Tee", badge: "Bestseller", desc: "Full sublimation front, back and sleeve branding", priceDelta: 0 },
      { id: "es-hooded", name: "Pro Tournament Hooded Jersey", shortLabel: "Hooded Jersey", badge: "Stage Pro", desc: "Integrated lightweight jersey hood for arena lights", priceDelta: 80 },
      { id: "es-zip", name: "Quarter-Zip Performance Top", shortLabel: "Quarter-Zip", badge: "Official LAN", desc: "Stand collar with concealed nylon zip", priceDelta: 60 },
    ],
  },
  {
    id: "running",
    name: "Running",
    tagline: "Marathon & Athletic Breathable Singlet",
    badge: "Zero Chafe",
    basePrice: 490,
    icon: "/icons/sports/running.svg",
    image: "https://yoode.com/cdn/shop/files/Running.webp?v=1789531433&width=1600",
    styles: [
      { id: "rn-singlet", name: "Marathon Racerback Singlet", shortLabel: "Racer Singlet", badge: "Endurance", desc: "Bonded flatlock seams prevent friction on 42km runs", priceDelta: 0 },
      { id: "rn-tee", name: "Ultralight Running Tee", shortLabel: "Ultralight Tee", badge: "All Weather", desc: "Reflective silver micro-dots for night running", priceDelta: 20 },
      { id: "rn-full", name: "Half-Zip Thermal Long Sleeve", shortLabel: "Thermal Long", badge: "Early Morning", desc: "Thumbholes and ventilation chest zip", priceDelta: 70 },
    ],
  },
  {
    id: "cycling",
    name: "Cycling",
    tagline: "Aerodynamic Sublimated Cycling Jersey",
    badge: "Aero Fit",
    basePrice: 590,
    icon: "/icons/sports/cycling.svg",
    image: "https://yoode.com/cdn/shop/files/Cycling.webp?v=1789531339&width=1600",
    styles: [
      { id: "cy-fullzip", name: "Full Zip Aero Jersey", shortLabel: "Full Zip Aero", badge: "Road Race", desc: "YKK camlock zip, silicone hem gripper, 3 rear pockets", priceDelta: 0 },
      { id: "cy-halfzip", name: "Club Fit Half-Zip Jersey", shortLabel: "Club Fit", badge: "Gran Fondo", desc: "Relaxed torso cut with breathable underarm mesh", priceDelta: -30 },
      { id: "cy-long", name: "Windbreaker Long Sleeve", shortLabel: "Wind Long Sleeve", badge: "Cold Morning", desc: "Water-resistant front chest membrane", priceDelta: 90 },
    ],
  },
  {
    id: "baseball",
    name: "Baseball",
    tagline: "Heritage Full Button Placket Jersey",
    badge: "Authentic",
    basePrice: 520,
    icon: "/icons/sports/baseball.svg",
    image: "https://yoode.com/cdn/shop/files/Baseball.webp?v=1789388323&width=1600",
    styles: [
      { id: "bb-fullbutton", name: "Full Button Authentic Jersey", shortLabel: "Full Button", badge: "Heritage", desc: "6-button placket with double-stitched contrast piping", priceDelta: 0 },
      { id: "bb-twobutton", name: "Two-Button Henley Jersey", shortLabel: "Henley Cut", badge: "Modern Fit", desc: "Casual henley collar with raglan arm cut", priceDelta: -20 },
      { id: "bb-crew", name: "Sublimated Baseball Tee", shortLabel: "Sublimated Tee", badge: "Training", desc: "Lightweight pullover batting practice tee", priceDelta: -40 },
    ],
  },
  {
    id: "polo",
    name: "Polo Shirt",
    tagline: "Luxury Atelier Bespoke Polo",
    badge: "Signature",
    basePrice: 480,
    iconLetter: "P",
    image: "/polo/clean-navy-front.png",
    backImage: "/polo/clean-navy-back.png",
    sideImage: "/polo/clean-navy-model.png",
    styles: [
      { id: "polo-zipper", name: "Concealed Zipper Polo", shortLabel: "Zipper Polo", badge: "Bestseller", desc: "Modern minimal metallic zipper and tailored collar", priceDelta: 0 },
      { id: "polo-classic", name: "Classic 3-Button Pique", shortLabel: "Classic Pique", badge: "Heritage", desc: "Traditional mother-of-pearl buttons with rib knit collar", priceDelta: 0 },
      { id: "polo-dryfit", name: "Active Dry-Fit Sports Polo", shortLabel: "Dry-Fit Polo", badge: "Athletic", desc: "Lightweight moisture wicking with contrast tipping", priceDelta: 20 },
      { id: "polo-tipped", name: "Executive Tipped Rib Polo", shortLabel: "Tipped Rib", badge: "Corporate", desc: "Double contrast tipping on collar and cuffs", priceDelta: 30 },
    ],
  },
  {
    id: "golf",
    name: "Golf",
    tagline: "PGA Tour Grade Technical Polo",
    badge: "Tour Grade",
    basePrice: 550,
    iconLetter: "GF",
    image: "https://yoode.com/cdn/shop/files/Golf.webp?v=1789388323&width=1600",
    styles: [
      { id: "gf-tour", name: "Tour Performance 4-Way Stretch", shortLabel: "Tour 4-Way", badge: "Tour Match", desc: "Silky 4-way stretch fabric with UV 50+ rating", priceDelta: 0 },
      { id: "gf-mock", name: "Sun-Protection Mock Neck", shortLabel: "Mock Neck", badge: "Modern Tour", desc: "Low-profile mock collar favored by pro players", priceDelta: 40 },
    ],
  },
  {
    id: "kabbadi",
    name: "Kabaddi",
    tagline: "Heavy-Duty Pro Raider Sleeveless Kit",
    badge: "Heavy Duty",
    basePrice: 490,
    iconLetter: "KB",
    image: "https://yoode.com/cdn/shop/files/Kabbadi.webp?v=1789388323&width=1600",
    styles: [
      { id: "kb-raider", name: "Pro Raider Sleeveless Vest", shortLabel: "Raider Vest", badge: "Match Pro", desc: "Tear-resistant double reinforced neck and arm bindings", priceDelta: 0 },
      { id: "kb-tight", name: "Skin-Fit Compression Top", shortLabel: "Compression", badge: "Anti-Tackle", desc: "Friction-minimizing aerodynamic fit", priceDelta: 30 },
    ],
  },
  {
    id: "pickleball",
    name: "Pickleball",
    tagline: "Lightweight Agility Court Top",
    badge: "Fast Dry",
    basePrice: 490,
    iconLetter: "PB",
    image: "https://yoode.com/cdn/shop/files/Pickleball.webp?v=1789388323&width=1600",
    styles: [
      { id: "pb-tee", name: "Agility Court Performance Tee", shortLabel: "Court Tee", badge: "Quick Dry", desc: "Featherlight cooling fabric with relaxed side drape", priceDelta: 0 },
      { id: "pb-polo", name: "Active Placket Court Polo", shortLabel: "Active Polo", badge: "Club Play", desc: "Breathable collar with lightweight buttons", priceDelta: 30 },
    ],
  },
];

const MATERIALS: MaterialOption[] = [
  { 
    id: "micropoly-180", 
    name: "180 GSM Micro-Poly", 
    shortLabel: "Micro-Poly", 
    specs: "Rapid Moisture-Wicking · Quick Dry", 
    color: "#3B4E63", 
    priceDelta: 0,
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
    id: "cotton-220", 
    name: "220 GSM Pique Cotton", 
    shortLabel: "Pique Cotton", 
    specs: "Bio-Washed Combed Cotton · Structured", 
    color: "#ECE8DD", 
    priceDelta: 30,
    texturePattern: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5) 0%, transparent 80%), repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 2px, transparent 2px, transparent 5px)"
  },
  { 
    id: "interlock-poly", 
    name: "Interlock Dry-Fit UV", 
    shortLabel: "Interlock UV", 
    specs: "Anti-Bacterial UV 50+ Shield", 
    color: "#1E2A38", 
    priceDelta: 50,
    texturePattern: "repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 4px)"
  },
  { 
    id: "fleece-320", 
    name: "320 GSM Brushed Fleece", 
    shortLabel: "Brushed Fleece", 
    specs: "Winter Structured Warmth Terry", 
    color: "#8B8178", 
    priceDelta: 120,
    texturePattern: "radial-gradient(circle, rgba(255,255,255,0.3) 10%, transparent 20%) 0 0/4px 4px"
  },
];

const COLOR_SCHEMES: ColorSchemeOption[] = [
  { 
    id: "navy-gold", 
    name: "Navy & Solar Gold", 
    shortLabel: "Navy / Gold",
    primaryHex: "#1E293B", 
    secondaryHex: "#F59E0B",
    description: "Championship royal navy body with metallic solar gold accents"
  },
  { 
    id: "black-crimson", 
    name: "Onyx Black & Crimson", 
    shortLabel: "Onyx / Red",
    primaryHex: "#121212", 
    secondaryHex: "#DC2626",
    description: "Deep stealth black with racing crimson red trims and details"
  },
  { 
    id: "royal-white", 
    name: "Royal Blue & Pure White", 
    shortLabel: "Royal / White",
    primaryHex: "#1E40AF", 
    secondaryHex: "#FFFFFF",
    description: "Classic stadium blue with high-contrast alpine white panels"
  },
  { 
    id: "emerald-gold", 
    name: "Emerald Green & Gold", 
    shortLabel: "Emerald / Gold",
    primaryHex: "#064E3B", 
    secondaryHex: "#FBBF24",
    description: "Rich botanical deep green paired with vibrant golden stripes"
  },
  { 
    id: "arctic-cyan", 
    name: "Arctic White & Electric Cyan", 
    shortLabel: "White / Cyan",
    primaryHex: "#F8FAFC", 
    secondaryHex: "#06B6D4",
    description: "Clean crisp white kit with luminous electric cyan highlights"
  },
  { 
    id: "ruby-charcoal", 
    name: "Ruby Crimson & Charcoal", 
    shortLabel: "Ruby / Grey",
    primaryHex: "#B91C1C", 
    secondaryHex: "#374151",
    description: "Aggressive striker ruby with matte gunmetal charcoal trims"
  },
];

const LOGO_TECHNIQUES: LogoTechniqueOption[] = [
  { 
    id: "embroidery", 
    name: "High-Density Japanese Embroidery", 
    shortLabel: "HD Embroidery", 
    badge: "Premium Atelier", 
    priceDelta: 50,
    desc: "10,000+ stitch count raised Japanese Tajima thread embroidery"
  },
  { 
    id: "crest", 
    name: "Silicone High-Density 3D Crest", 
    shortLabel: "3D Silicone Crest", 
    badge: "Official Team", 
    priceDelta: 70,
    desc: "Tactile molded silicone badge favored by international clubs"
  },
  { 
    id: "dtf", 
    name: "Ultra-Vibrant DTF Chest Print", 
    shortLabel: "Vibrant DTF", 
    badge: "Full Spectrum", 
    priceDelta: 35,
    desc: "High-definition gradient printing, wash-proof for 100+ cycles"
  },
  { 
    id: "sleeve-patch", 
    name: "Woven Sleeve Patch", 
    shortLabel: "Sleeve Patch", 
    badge: "Official Detail", 
    priceDelta: 40,
    desc: "Sublimated woven border patch placed on left or right sleeve"
  },
  { 
    id: "upload", 
    name: "Upload Custom Vector Artwork", 
    shortLabel: "Upload Artwork", 
    badge: "Instant Mockup", 
    priceDelta: 50,
    desc: "Upload your club logo or vector artwork for instant live rendering"
  },
];

const TEXT_FONTS: TextFontOption[] = [
  { id: "athletic", name: "Championship Athletic Block", shortLabel: "Athletic Block", fontFamily: "Impact, sans-serif", sample: "07" },
  { id: "modern", name: "Modern Sans Tracked", shortLabel: "Modern Sans", fontFamily: "var(--font-sora), sans-serif", sample: "Aa" },
  { id: "bodoni", name: "Editorial Bodoni Serif", shortLabel: "Bodoni Luxury", fontFamily: "Georgia, serif", sample: "Vd" },
  { id: "mono", name: "Technical Monospace", shortLabel: "Cyber Monospace", fontFamily: "Courier New, monospace", sample: "//" },
];

export function DesignStudio() {
  const searchParams = useSearchParams();
  const initialSportParam = searchParams.get("sport");

  // Primary Selection (Sport / Product Type)
  const [selectedSportId, setSelectedSportId] = useState<string>(() => {
    if (initialSportParam && SPORTS_DATA.some(s => s.id === initialSportParam)) {
      return initialSportParam;
    }
    return "basketball";
  });

  // Active step in right options panel
  const [activeStep, setActiveStep] = useState<StudioStep>("style");

  // Customization State
  const [selectedStyleId, setSelectedStyleId] = useState<string>("bb-tank");
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>("micropoly-180");
  const [selectedColorId, setSelectedColorId] = useState<string>("navy-gold");
  const [selectedTechniqueId, setSelectedTechniqueId] = useState<string>("embroidery");
  const [selectedFontId, setSelectedFontId] = useState<string>("athletic");
  const [customName, setCustomName] = useState<string>("ARJUN");
  const [customNumber, setCustomNumber] = useState<string>("12");
  const [logoZone, setLogoZone] = useState<"left-chest" | "right-chest" | "back" | "sleeve">("left-chest");
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);
  const [activeAngle, setActiveAngle] = useState<number>(0);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isAddedToBag, setIsAddedToBag] = useState<boolean>(false);
  const [arcScrollIndex, setArcScrollIndex] = useState<number>(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync sport if URL param changes
  useEffect(() => {
    if (initialSportParam && SPORTS_DATA.some(s => s.id === initialSportParam)) {
      setSelectedSportId(initialSportParam);
    }
  }, [initialSportParam]);

  // Current active data entities
  const currentSport = useMemo(() => {
    return SPORTS_DATA.find(s => s.id === selectedSportId) || SPORTS_DATA[0];
  }, [selectedSportId]);

  // Ensure selected style exists for current sport
  useEffect(() => {
    if (!currentSport.styles.some(st => st.id === selectedStyleId)) {
      setSelectedStyleId(currentSport.styles[0]?.id || "default");
    }
  }, [currentSport, selectedStyleId]);

  const currentStyle = useMemo(() => {
    return currentSport.styles.find(s => s.id === selectedStyleId) || currentSport.styles[0];
  }, [currentSport, selectedStyleId]);

  const currentMaterial = useMemo(() => {
    return MATERIALS.find(m => m.id === selectedMaterialId) || MATERIALS[0];
  }, [selectedMaterialId]);

  const currentColor = useMemo(() => {
    return COLOR_SCHEMES.find(c => c.id === selectedColorId) || COLOR_SCHEMES[0];
  }, [selectedColorId]);

  const currentTechnique = useMemo(() => {
    return LOGO_TECHNIQUES.find(t => t.id === selectedTechniqueId) || LOGO_TECHNIQUES[0];
  }, [selectedTechniqueId]);

  const currentFont = useMemo(() => {
    return TEXT_FONTS.find(f => f.id === selectedFontId) || TEXT_FONTS[0];
  }, [selectedFontId]);

  // Pricing Calculation
  const basePrice = currentSport.basePrice;
  const styleDelta = currentStyle?.priceDelta || 0;
  const materialDelta = currentMaterial.priceDelta;
  const logoDelta = selectedTechniqueId === "upload" ? 50 : currentTechnique.priceDelta;
  const totalPrice = basePrice + styleDelta + materialDelta + logoDelta;

  // Multi-angle imagery for the active sport
  const angleImages = useMemo(() => {
    if (currentSport.id === "polo") {
      let frontSrc = "/polo/clean-navy-front.png";
      const c = selectedColorId.toLowerCase();
      if (c.includes("black")) {
        frontSrc = "/polo/clean-black-front.png";
      } else if (c.includes("emerald") || c.includes("green")) {
        frontSrc = "/polo/clean-green-front.png";
      } else if (c.includes("arctic") || c.includes("white")) {
        frontSrc = "/polo/clean-white-front.png";
      }

      return [
        { id: "front", label: "Front View", src: frontSrc },
        { id: "back", label: "Back View", src: "/polo/clean-navy-back.png" },
        { id: "side", label: "Profile View", src: "/polo/clean-navy-model.png" },
      ];
    }
    return [
      { id: "front", label: "Front View", src: currentSport.image },
      { id: "back", label: "Back View", src: currentSport.backImage || currentSport.image },
      { id: "side", label: "Profile View", src: currentSport.sideImage || currentSport.image },
    ];
  }, [currentSport, selectedColorId]);

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
      setSelectedTechniqueId("upload");
    }
  };

  // 7-Node Concentric Circular Arc Geometry (Curving around the Center Garment as in the reference)
  // Circle Center: (480, 250), Radius R=330. Apex at (150, 250). Equal 72.8px spacing between every node!
  const ARC_COORDINATES = [
    { x: 220.0, y: 46.8 },   // Node 0
    { x: 181.7, y: 108.8 },  // Node 1
    { x: 158.0, y: 177.6 },  // Node 2
    { x: 150.0, y: 250.0 },  // Node 3 (APEX - ALWAYS THE ACTIVE SPORT)
    { x: 158.0, y: 322.4 },  // Node 4
    { x: 181.7, y: 391.2 },  // Node 5
    { x: 220.0, y: 453.2 },  // Node 6
  ];

  const currentSportIndex = useMemo(() => {
    const idx = SPORTS_DATA.findIndex(s => s.id === selectedSportId);
    return idx >= 0 ? idx : 0;
  }, [selectedSportId]);

  const visibleSports = useMemo(() => {
    const list: Array<{ sport: SportItem; realIdx: number; arcPos: number }> = [];
    const len = SPORTS_DATA.length;
    for (let offset = -3; offset <= 3; offset++) {
      const idx = (currentSportIndex + offset + len * 10) % len;
      list.push({ 
        sport: SPORTS_DATA[idx], 
        realIdx: idx,
        arcPos: offset + 3 // 0 to 6 (offset 0 is apex arcPos 3)
      });
    }
    return list;
  }, [currentSportIndex]);

  const handleScrollUp = () => {
    const len = SPORTS_DATA.length;
    const newIdx = (currentSportIndex - 1 + len) % len;
    setSelectedSportId(SPORTS_DATA[newIdx].id);
    setActiveAngle(0);
  };

  const handleScrollDown = () => {
    const len = SPORTS_DATA.length;
    const newIdx = (currentSportIndex + 1) % len;
    setSelectedSportId(SPORTS_DATA[newIdx].id);
    setActiveAngle(0);
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
            <span className="text-black border-b-2 border-black pb-0.5 cursor-pointer">Design Studio</span>
            <Link href="/custom-sports-jerseys" className="hover:text-black transition-colors hidden sm:inline">Sports Showcase</Link>
            <Link href="/services" className="hover:text-black transition-colors hidden sm:inline">Atelier Services</Link>
          </nav>
        </div>

        {/* Center: Selected Sport Indicator Badge */}
        <div className="flex items-center gap-2 bg-black/[0.04] px-4 py-1.5 rounded-full border border-black/[0.06]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-black uppercase tracking-wider text-black">
            {currentSport.name} Kit Studio
          </span>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest hidden sm:inline">
            · {currentSport.badge}
          </span>
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
          STEP SUB-HEADLINE
      -------------------------------------------------------------- */}
      <div className="w-full h-8 shrink-0 flex items-center justify-between px-6 md:px-12 pt-1 border-b border-black/[0.03]">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-black/50">
          <span>1. Choose Sport</span>
          <ChevronRight size={12} />
          <span className="text-black font-extrabold">2. Customize {currentSport.name} Details</span>
          <ChevronRight size={12} />
          <span>3. Order & Mockup</span>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-[11px] font-bold text-gray-500 tracking-wider">
          <span>100% Sublimation Guaranteed</span>
          <span>·</span>
          <span>No Minimum Order</span>
        </div>
      </div>

      {/* -------------------------------------------------------------
          MIDDLE WORKSPACE:
          - LEFT SIDE: CURVED FULL SELECTIONS (SPORTS)
          - CENTER: PRODUCT DISPLAY & LIVE MOCKUP
          - RIGHT SIDE: VERTICALLY STACKED OPTIONS
      -------------------------------------------------------------- */}
      <div className="flex-1 min-h-0 w-full max-w-[1520px] mx-auto px-2 md:px-8 flex items-center justify-between relative overflow-hidden py-1">
        
        {/* =========================================================
            LEFT COLUMN: FULL SELECTIONS CURVED ON THE ARC
        ========================================================== */}
        <div className="relative w-80 h-[480px] hidden md:flex flex-col items-center justify-center shrink-0 z-20 select-none">
          
          {/* Header over the curved arc */}
          <div className="absolute top-1 left-4 flex items-center gap-1.5 z-30 select-none">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              SELECT SPORT
            </span>
            <span className="text-[9px] bg-black/5 px-2 py-0.5 rounded-full font-bold text-gray-600">
              {SPORTS_DATA.length} Kits
            </span>
          </div>

          {/* Up Navigation Arrow for rotating through sports along the curve */}
          <button
            type="button"
            onClick={handleScrollUp}
            className="absolute top-2 left-[220px] -translate-x-1/2 z-30 w-7 h-7 rounded-full bg-white/95 shadow-sm border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer group active:scale-95"
            aria-label="Previous sport"
            title="Previous sport"
          >
            <ChevronUp size={14} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* SVG Arc Track Line (Concentric Circular Arc matching Reference) */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 320 480" 
            fill="none"
          >
            <path 
              d="M 242.6 20.8 A 330 330 0 0 0 242.6 479.2" 
              stroke="rgba(0,0,0,0.18)" 
              strokeWidth="1.5"
            />
          </svg>

          {/* Curved Circular Nodes along Arc */}
          <div className="relative w-full h-full">
            {visibleSports.map(({ sport, arcPos }) => {
              const isActive = arcPos === 3;
              const coord = ARC_COORDINATES[arcPos];

              return (
                <div
                  key={sport.id}
                  onClick={() => {
                    setSelectedSportId(sport.id);
                    setActiveAngle(0);
                  }}
                  className="absolute cursor-pointer will-change-transform group"
                  style={{ 
                    left: 0,
                    top: 0,
                    transform: `translate3d(${coord.x}px, ${coord.y}px, 0) translate(-50%, -50%)`,
                    transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease"
                  }}
                >
                  {/* Sport Label to the left of node with ZERO overlap (16px gap) */}
                  <div 
                    className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 flex items-center pr-1 select-none pointer-events-none whitespace-nowrap transition-all duration-300 ${
                      isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  >
                    <span className={`text-[12px] font-extrabold tracking-wide px-3.5 py-1 rounded-full shadow-md border transition-all ${
                      isActive 
                        ? "bg-[#111111] text-white border-black" 
                        : "bg-white/95 text-black/90 border-black/10 shadow-xs"
                    }`}>
                      {sport.name}
                    </span>
                  </div>

                  {/* Circular Node sitting precisely on the SVG curve line */}
                  <button
                    type="button"
                    className={`rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "w-13 h-13 bg-[#121212] text-white shadow-[0_12px_28px_rgba(0,0,0,0.35)] scale-110 ring-4 ring-black/10 z-20" 
                        : "w-9 h-9 bg-white text-black/75 shadow-xs border border-black/15 group-hover:scale-110 group-hover:shadow-md group-hover:border-black/30"
                    }`}
                    aria-label={`Select ${sport.name}`}
                    title={sport.name}
                  >
                    {sport.icon ? (
                      <img 
                        src={sport.icon} 
                        alt="" 
                        className={`transition-all duration-300 ${
                          isActive 
                            ? "w-6 h-6 brightness-0 invert" 
                            : "w-4 h-4 brightness-0 opacity-70 group-hover:opacity-100"
                        }`} 
                      />
                    ) : sport.id === "polo" ? (
                      <Shirt size={isActive ? 22 : 16} className={isActive ? "text-white" : "text-black/80"} />
                    ) : (
                      <span className={`font-black text-xs ${isActive ? "text-white" : "text-black/80"}`}>
                        {sport.iconLetter || sport.name.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Down Navigation Arrow for rotating through sports along the curve */}
          <button
            type="button"
            onClick={handleScrollDown}
            className="absolute bottom-2 left-[220px] -translate-x-1/2 z-30 w-7 h-7 rounded-full bg-white/95 shadow-sm border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer group active:scale-95"
            aria-label="Next sport"
            title="Next sport"
          >
            <ChevronDown size={14} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* =========================================================
            CENTER COLUMN: PRODUCT VIEWPORT & GARMENT DISPLAY
        ========================================================== */}
        <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-2 h-full max-h-[100%] min-w-0">
          
          {/* Main Garment Canvas */}
          <div className="relative w-[340px] sm:w-[420px] md:w-[480px] lg:w-[540px] h-[48vh] sm:h-[52vh] max-h-[440px] md:max-h-[480px] flex items-center justify-center">
            
            {/* Diffused Floor Shadow */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-black/[0.10] blur-xl rounded-[100%] pointer-events-none z-0" />

            {/* Product Garment Image with Cutout */}
            <div className="relative w-full h-full flex items-center justify-center z-10">
              <Image
                key={`${selectedSportId}-${activeAngle}-${selectedColorId}`}
                src={angleImages[activeAngle]?.src || currentSport.image}
                alt={`${currentSport.name} Custom Jersey`}
                fill
                className="object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)] transition-all duration-300 animate-fade-in"
                priority
              />

              {/* Dynamic Live Custom Player Name Overlay on Back View */}
              {activeAngle === 1 && (
                <>
                  {customName && (
                    <div 
                      className="absolute top-[28%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 text-white font-black tracking-widest drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)] text-sm sm:text-base uppercase"
                      style={{ fontFamily: currentFont.fontFamily }}
                    >
                      {customName}
                    </div>
                  )}

                  {customNumber && (
                    <div 
                      className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 text-white font-black tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.95)] text-4xl sm:text-5xl"
                      style={{ fontFamily: currentFont.fontFamily }}
                    >
                      {customNumber}
                    </div>
                  )}
                </>
              )}

              {/* Live Uploaded Logo Overlay */}
              {activeAngle === 0 && uploadedLogo && (
                <div 
                  className={`absolute pointer-events-none z-25 w-10 h-10 sm:w-12 sm:h-12 transition-all ${
                    logoZone === "left-chest" 
                      ? "top-[32%] left-[64%] -translate-x-1/2 -translate-y-1/2" 
                      : logoZone === "right-chest"
                      ? "top-[32%] left-[36%] -translate-x-1/2 -translate-y-1/2"
                      : "top-[42%] left-[50%] -translate-x-1/2 -translate-y-1/2"
                  }`}
                >
                  <img 
                    src={uploadedLogo} 
                    alt="Uploaded Logo" 
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>
              )}
            </div>

            {/* Curved Rotation Controls */}
            <button 
              type="button"
              onClick={() => handleAngleRotate("left")}
              className="absolute -bottom-2 left-2 md:left-4 p-2 text-black/50 hover:text-black transition-colors cursor-pointer group z-20"
              aria-label="Rotate left"
              title="Previous view angle"
            >
              <svg className="w-7 h-7 transition-transform group-hover:-translate-x-1" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M 28 8 A 20 20 0 0 0 6 24" strokeLinecap="round"/>
                <polyline points="4,18 6,24 12,24" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button 
              type="button"
              onClick={() => handleAngleRotate("right")}
              className="absolute -bottom-2 right-2 md:right-4 p-2 text-black/50 hover:text-black transition-colors cursor-pointer group z-20"
              aria-label="Rotate right"
              title="Next view angle"
            >
              <svg className="w-7 h-7 transition-transform group-hover:scale-105" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M 4 8 A 20 20 0 0 1 26 24" strokeLinecap="round"/>
                <polyline points="28,18 26,24 20,24" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* 3 Angle View Thumbnails */}
          <div className="flex items-center gap-3 mt-3 shrink-0 z-20">
            {angleImages.map((angle, idx) => (
              <button
                key={angle.id}
                type="button"
                onClick={() => setActiveAngle(idx)}
                className={`w-12 h-11 rounded-lg p-1 transition-all flex items-center justify-center cursor-pointer ${
                  activeAngle === idx 
                    ? "ring-2 ring-black bg-white shadow-sm scale-105" 
                    : "opacity-70 bg-white/60 hover:opacity-100 hover:scale-105 border border-black/10"
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
          <div className="flex items-center gap-5 mt-1.5 text-[10px] md:text-[11px] font-bold tracking-wider text-black/60 uppercase shrink-0">
            <button 
              type="button"
              onClick={() => {
                setSelectedStyleId(currentSport.styles[0]?.id || "default");
                setSelectedMaterialId("micropoly-180");
                setSelectedColorId("navy-gold");
                setSelectedTechniqueId("embroidery");
                setCustomName("ARJUN");
                setCustomNumber("07");
              }}
              className="flex items-center gap-1 hover:text-black cursor-pointer transition-colors"
            >
              <Undo2 size={12} />
              <span>Reset</span>
            </button>
            
            <button 
              type="button"
              onClick={() => {
                setSelectedColorId("black-crimson");
                setSelectedTechniqueId("crest");
              }}
              className="flex items-center gap-1 hover:text-black cursor-pointer transition-colors"
            >
              <Redo2 size={12} />
              <span>Pro Preset</span>
            </button>
          </div>

          {/* Pricing & Solid BUY Action */}
          <div className="flex items-center gap-4 mt-2 shrink-0 z-20">
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                Starting At
              </span>
              <span className="text-lg md:text-xl font-black tracking-tight text-black">
                ₹{totalPrice.toLocaleString("en-IN")},00
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsAddedToBag(true);
              }}
              className="bg-black hover:bg-neutral-800 text-white font-black text-xs md:text-[13px] px-8 py-2.5 tracking-[0.18em] uppercase rounded-xs transition-all active:scale-95 cursor-pointer shadow-sm flex items-center gap-2"
            >
              {isAddedToBag ? (
                <>
                  <Check size={14} />
                  <span>IN BAG</span>
                </>
              ) : (
                <span>BUY {currentSport.name.toUpperCase()}</span>
              )}
            </button>
          </div>

        </div>

        {/* =========================================================
            RIGHT COLUMN: OPTIONS (VERTICALLY STACKED)
        ========================================================== */}
        <div className="w-72 md:w-80 lg:w-[330px] xl:w-[360px] h-[430px] md:h-[470px] hidden md:flex flex-col bg-white/90 backdrop-blur-md rounded-2xl border border-black/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.06)] p-3.5 z-20 shrink-0">
          
          {/* Top Step Pills (Style, Look, Fabric, Colors, Logo, Player) */}
          <div className="flex items-center justify-between gap-1 p-1 bg-black/[0.04] rounded-xl border border-black/[0.05] mb-3 shrink-0">
            {[
              { id: "style" as StudioStep, label: "Style", icon: <SlidersHorizontal size={11} /> },
              { id: "look" as StudioStep, label: "Look", icon: <Wrench size={11} /> },
              { id: "fabric" as StudioStep, label: "Fabric", icon: <Layers size={11} /> },
              { id: "colors" as StudioStep, label: "Colors", icon: <Palette size={11} /> },
              { id: "logo" as StudioStep, label: "Logo", icon: <Sparkles size={11} /> },
              { id: "player" as StudioStep, label: "Player", icon: <Type size={11} /> },
            ].map(step => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className={`flex-1 py-1.5 px-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider flex items-center justify-center gap-1 transition-all cursor-pointer ${
                    isActive 
                      ? "bg-black text-white shadow-xs" 
                      : "text-gray-600 hover:text-black hover:bg-white/60"
                  }`}
                >
                  {step.icon}
                  <span>{step.label}</span>
                </button>
              );
            })}
          </div>

          {/* Step Section Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/[0.06] shrink-0">
            <div>
              <h2 className="text-[12px] font-black uppercase tracking-wider text-black">
                {activeStep === "style" && `1. ${currentSport.name} Style & Cut`}
                {activeStep === "look" && "2. Hardware & Craftsmanship"}
                {activeStep === "fabric" && "3. Performance Fabric"}
                {activeStep === "colors" && "4. Team Colorway"}
                {activeStep === "logo" && "5. Branding Technique"}
                {activeStep === "player" && "6. Player Personalization"}
              </h2>
              <p className="text-[10px] text-gray-500 font-medium">
                {activeStep === "style" && "Select collar, sleeve & motion fit"}
                {activeStep === "look" && "Placket zipper, rib collar & hem specifications"}
                {activeStep === "fabric" && "Tested for sweat resistance & zero friction"}
                {activeStep === "colors" && "Vibrant fade-proof sublimation colors"}
                {activeStep === "logo" && "High-density Japanese thread & 3D silicone"}
                {activeStep === "player" && "Names & numbers sublimated included"}
              </p>
            </div>
            
            <span className="text-[10px] font-extrabold text-[#E53935] bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
              {activeStep === "style" && `${currentSport.styles.length} Options`}
              {activeStep === "look" && "4 Layers"}
              {activeStep === "fabric" && `${MATERIALS.length} Fabrics`}
              {activeStep === "colors" && `${COLOR_SCHEMES.length} Themes`}
              {activeStep === "logo" && `${LOGO_TECHNIQUES.length} Methods`}
              {activeStep === "player" && "Free Print"}
            </span>
          </div>

          {/* Vertically Stacked Options Container */}
          <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-2 min-h-0 hide-scrollbar">
            
            {/* ---------------- 1. VERTICALLY STACKED STYLES ---------------- */}
            {activeStep === "style" && (
              <div className="flex flex-col gap-2">
                {currentSport.styles.map(st => {
                  const isSelected = selectedStyleId === st.id;
                  return (
                    <div
                      key={st.id}
                      onClick={() => setSelectedStyleId(st.id)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected 
                          ? "bg-black/[0.03] border-black ring-1 ring-black shadow-xs" 
                          : "bg-white border-black/[0.08] hover:border-black/30 hover:shadow-xs"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-black ${
                          isSelected ? "bg-black text-white" : "bg-black/5 text-black"
                        }`}>
                          {st.shortLabel.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-black truncate">{st.name}</span>
                            <span className="text-[9px] bg-black/5 text-gray-600 px-1.5 py-0.2 rounded-xs font-semibold shrink-0">
                              {st.badge}
                            </span>
                          </div>
                          <span className="text-[10px] text-gray-500 leading-tight truncate">{st.desc}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-black text-black">
                          {st.priceDelta === 0 ? "Included" : `+ ₹${st.priceDelta}`}
                        </span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? "bg-black border-black text-white" : "border-gray-300"
                        }`}>
                          {isSelected && <Check size={10} />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* ---------------- 2. LOOK & LAYER OPTIONS (Hardware & Craftsmanship) ---------------- */}
            {activeStep === "look" && (
              <div className="flex flex-col gap-2">
                {LAYER_SPECS.map((item, i) => (
                  <div key={i} className="p-2.5 bg-gray-50 rounded-xl border border-gray-200/80 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block">{item.title}</span>
                      <strong className="text-xs font-bold text-gray-900 block truncate">{item.opt}</strong>
                      <p className="text-[10px] text-gray-500 mt-0.5 leading-tight truncate">{item.desc}</p>
                    </div>
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  </div>
                ))}
              </div>
            )}

            {/* ---------------- 3. VERTICALLY STACKED FABRICS ---------------- */}
            {activeStep === "fabric" && (
              <div className="flex flex-col gap-2">
                {MATERIALS.map(mat => {
                  const isSelected = selectedMaterialId === mat.id;
                  return (
                    <div
                      key={mat.id}
                      onClick={() => setSelectedMaterialId(mat.id)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected 
                          ? "bg-black/[0.03] border-black ring-1 ring-black shadow-xs" 
                          : "bg-white border-black/[0.08] hover:border-black/30 hover:shadow-xs"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* Tactile swatch */}
                        <div 
                          className="w-8 h-8 rounded-lg shrink-0 border border-black/10 shadow-xs relative overflow-hidden"
                          style={{ 
                            backgroundColor: mat.color,
                            backgroundImage: mat.texturePattern 
                          }}
                        />
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-bold text-black truncate">{mat.name}</span>
                          <span className="text-[10px] text-gray-500 leading-tight truncate">{mat.specs}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-black text-black">
                          {mat.priceDelta === 0 ? "Standard" : `+ ₹${mat.priceDelta}`}
                        </span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? "bg-black border-black text-white" : "border-gray-300"
                        }`}>
                          {isSelected && <Check size={10} />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* ---------------- 3. VERTICALLY STACKED COLORS ---------------- */}
            {activeStep === "colors" && (
              <div className="flex flex-col gap-2">
                {COLOR_SCHEMES.map(scheme => {
                  const isSelected = selectedColorId === scheme.id;
                  return (
                    <div
                      key={scheme.id}
                      onClick={() => setSelectedColorId(scheme.id)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected 
                          ? "bg-black/[0.03] border-black ring-1 ring-black shadow-xs" 
                          : "bg-white border-black/[0.08] hover:border-black/30 hover:shadow-xs"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* Dual Hex Color Indicator */}
                        <div className="flex items-center -space-x-2 shrink-0">
                          <div 
                            className="w-6 h-6 rounded-full border border-white shadow-xs z-10" 
                            style={{ backgroundColor: scheme.primaryHex }} 
                          />
                          <div 
                            className="w-6 h-6 rounded-full border border-white shadow-xs z-0" 
                            style={{ backgroundColor: scheme.secondaryHex }} 
                          />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-bold text-black truncate">{scheme.name}</span>
                          <span className="text-[10px] text-gray-500 leading-tight truncate">{scheme.description}</span>
                        </div>
                      </div>

                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? "bg-black border-black text-white" : "border-gray-300"
                      }`}>
                        {isSelected && <Check size={10} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* ---------------- 4. VERTICALLY STACKED LOGO TECHNIQUES ---------------- */}
            {activeStep === "logo" && (
              <div className="flex flex-col gap-2">
                {/* Zone Placement Buttons */}
                <div className="flex items-center justify-between p-1.5 bg-black/[0.03] rounded-lg border border-black/[0.04]">
                  <span className="text-[10px] font-black uppercase text-gray-500">Placement:</span>
                  <div className="flex items-center gap-1">
                    {(["left-chest", "right-chest", "back", "sleeve"] as const).map(zone => (
                      <button
                        key={zone}
                        type="button"
                        onClick={() => {
                          setLogoZone(zone);
                          if (zone === "back") setActiveAngle(1);
                          else setActiveAngle(0);
                        }}
                        className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase transition-all cursor-pointer ${
                          logoZone === zone 
                            ? "bg-black text-white" 
                            : "bg-white text-gray-600 hover:text-black border border-black/10"
                        }`}
                      >
                        {zone.replace("-", " ")}
                      </button>
                    ))}
                  </div>
                </div>

                {LOGO_TECHNIQUES.map(tech => {
                  const isSelected = selectedTechniqueId === tech.id;
                  return (
                    <div
                      key={tech.id}
                      onClick={() => {
                        if (tech.id === "upload") {
                          fileInputRef.current?.click();
                        } else {
                          setSelectedTechniqueId(tech.id);
                        }
                      }}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected 
                          ? "bg-black/[0.03] border-black ring-1 ring-black shadow-xs" 
                          : "bg-white border-black/[0.08] hover:border-black/30 hover:shadow-xs"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? "bg-black text-white" : "bg-black/5 text-black"
                        }`}>
                          {tech.id === "upload" ? <Upload size={14} /> : <span className="text-xs">★</span>}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-black truncate">{tech.name}</span>
                            <span className="text-[9px] bg-black/5 text-gray-600 px-1.5 py-0.2 rounded-xs font-semibold shrink-0">
                              {tech.badge}
                            </span>
                          </div>
                          <span className="text-[10px] text-gray-500 leading-tight truncate">{tech.desc}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-black text-black">
                          {tech.priceDelta === 0 ? "Included" : `+ ₹${tech.priceDelta}`}
                        </span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? "bg-black border-black text-white" : "border-gray-300"
                        }`}>
                          {isSelected && <Check size={10} />}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {uploadedLogo && (
                  <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between text-xs text-emerald-800">
                    <span className="font-bold flex items-center gap-1.5">
                      <Check size={12} /> Custom Artwork Loaded
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        fileInputRef.current?.click();
                      }}
                      className="text-[10px] underline font-bold"
                    >
                      Change
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ---------------- 5. VERTICALLY STACKED PLAYER PERSONALIZATION ---------------- */}
            {activeStep === "player" && (
              <div className="flex flex-col gap-3">
                <div className="p-3 bg-white rounded-xl border border-black/[0.08] flex flex-col gap-2.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                    Roster Details (Included Free)
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-1 flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-gray-600">PLAYER NAME</label>
                      <input 
                        type="text" 
                        maxLength={12} 
                        value={customName} 
                        onChange={(e) => setCustomName(e.target.value.toUpperCase())}
                        placeholder="NAME"
                        className="w-full text-left font-black text-black bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-200 focus:outline-none focus:border-black uppercase text-xs"
                      />
                    </div>

                    <div className="w-20 flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-gray-600">NUMBER</label>
                      <input 
                        type="text" 
                        maxLength={3} 
                        value={customNumber} 
                        onChange={(e) => setCustomNumber(e.target.value)}
                        placeholder="07"
                        className="w-full text-center font-black text-black bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-200 focus:outline-none focus:border-black text-xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                    Typography Font Style
                  </span>
                  
                  {TEXT_FONTS.map(font => {
                    const isSelected = selectedFontId === font.id;
                    return (
                      <div
                        key={font.id}
                        onClick={() => setSelectedFontId(font.id)}
                        className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected 
                            ? "bg-black text-white border-black" 
                            : "bg-white border-black/[0.08] hover:border-black/30"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-8 h-8 rounded-lg bg-black/10 flex items-center justify-center font-black text-sm" style={{ fontFamily: font.fontFamily }}>
                            {font.sample}
                          </span>
                          <span className="text-xs font-bold">{font.name}</span>
                        </div>

                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? "bg-white text-black border-white" : "border-gray-300"
                        }`}>
                          {isSelected && <Check size={10} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Card Summary & Fast CTA */}
          <div className="pt-2.5 mt-2 border-t border-black/[0.06] flex items-center justify-between shrink-0">
            <div className="flex flex-col min-w-0 pr-2">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest truncate">
                Configuration
              </span>
              <span className="text-[11px] font-black text-black truncate">
                {currentSport.name} · {currentStyle?.shortLabel} · {currentMaterial.shortLabel}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsAddedToBag(true)}
              className="bg-yoode-onyx hover:bg-black text-white px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shrink-0 cursor-pointer shadow-xs active:scale-95 transition-all"
            >
              <span>Add Kit</span>
              <ArrowUpRight size={13} />
            </button>
          </div>

        </div>

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
          MOBILE DRAWER (Visible only on < md screens)
      -------------------------------------------------------------- */}
      <div className="md:hidden w-full px-3 py-2 bg-white/95 border-t border-black/[0.06] shrink-0 flex flex-col gap-2">
        {/* Mobile Horizontal Sport Selection */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          {SPORTS_DATA.map(sport => {
            const isActive = sport.id === selectedSportId;
            return (
              <button
                key={sport.id}
                type="button"
                onClick={() => setSelectedSportId(sport.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shrink-0 transition-all ${
                  isActive ? "bg-black text-white shadow-xs" : "bg-white text-black/75 border border-black/10"
                }`}
              >
                <span>{sport.name}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Step Pills */}
        <div className="flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
          {(["style", "fabric", "colors", "logo", "player"] as StudioStep[]).map(st => (
            <button
              key={st}
              type="button"
              onClick={() => setActiveStep(st)}
              className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase transition-all shrink-0 ${
                activeStep === st ? "bg-black text-white" : "bg-black/5 text-black/60"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* -------------------------------------------------------------
          BOTTOM UTILITY BAR
      -------------------------------------------------------------- */}
      <footer className="w-full h-10 shrink-0 px-4 md:px-12 flex items-center justify-between border-t border-black/[0.06] text-xs font-bold tracking-wider text-black/60 uppercase">
        
        {/* Left: Save for Later */}
        <button 
          type="button"
          onClick={() => setIsSaved(!isSaved)}
          className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer"
        >
          <Heart size={14} className={isSaved ? "fill-red-500 text-red-500" : ""} />
          <span>Save configuration</span>
        </button>
        
        {/* Center: Guarantee & Provenance Note */}
        <div className="hidden sm:flex items-center gap-2 text-[11px] text-gray-500 normal-case font-medium">
          <span>Factory direct from Tirupur, India</span>
          <span>·</span>
          <span>Free design mockup sent within 24 hours</span>
        </div>

        {/* Right: Guarantee Note */}
        <div className="flex items-center gap-2 text-[11px] text-gray-400 normal-case font-normal">
          <ShieldCheck size={14} className="text-emerald-600" />
          <span className="hidden sm:inline">100% Guaranteed colorfast & zero shrinkage</span>
          <span className="sm:hidden">Made in India</span>
        </div>

      </footer>

    </div>
  );
}

export default DesignStudio;