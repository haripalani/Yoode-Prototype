"use client";

import React, { useState, useRef, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  X, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Upload, 
  Check, 
  CheckCircle2, 
  ChevronRight, 
  ChevronUp, 
  ChevronDown, 
  Layers, 
  Palette, 
  Sparkles, 
  ShieldCheck, 
  Share2, 
  Plus, 
  Minus, 
  Shirt, 
  Type, 
  Sliders, 
  Undo2, 
  Redo2, 
  Heart, 
  ShoppingBag, 
  ArrowUpRight,
  SlidersHorizontal,
  Wrench
} from "lucide-react";
import { ColorVariant } from "@/data/rainsProductData";

interface YoodeKitStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialColor?: ColorVariant;
  onAddToCart?: (customData: CustomKitState) => void;
}

export type StudioTab = "style" | "look" | "fabric" | "colors" | "logo" | "player";

export interface CustomKitState {
  sport: string;
  style: string;
  colorId: string;
  colorName: string;
  viewAngle: "F" | "B" | "L" | "R";
  logoPlacement: "left-chest" | "right-chest" | "back" | "sleeve";
  logoTechnique: string;
  logoSize: number;
  logoImage: string | null;
  customText: string;
  customNumber: string;
  fontStyle: string;
  quantity: number;
}

export interface SportStudioItem {
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
  silhouettes: Array<{
    id: string;
    code: string;
    name: string;
    badge: string;
    desc: string;
    priceDelta: number;
  }>;
}

// ---------------------------------------------------------------------------
// 13 SPORTS DATA DEFINITIONS (Basketball as Default Showcase)
// ---------------------------------------------------------------------------

const SPORTS_DATA: SportStudioItem[] = [
  {
    id: "basketball",
    name: "Basketball",
    tagline: "Court High-Motion Reversible Kit",
    badge: "Athletic Cut",
    basePrice: 540,
    icon: "/icons/sports/basketball.svg",
    image: "https://yoode.com/cdn/shop/files/BasketBall.webp?v=1789388369&width=1600",
    silhouettes: [
      { id: "Wide Shoulder Match Tank", code: "PR", name: "Wide Shoulder Match Tank", badge: "Standard", desc: "Reinforced deep armholes for unrestricted shooting", priceDelta: 0 },
      { id: "Reversible Game Day Jersey", code: "RE", name: "Reversible Game Day Jersey", badge: "Dual-Side", desc: "Two kits in one with contrast inside color", priceDelta: 90 },
      { id: "Short-Sleeve Warmup Shirt", code: "SH", name: "Short-Sleeve Warmup Shirt", badge: "Pre-Game", desc: "Loose drape pre-game shooting shirt with rib collar", priceDelta: 30 },
      { id: "Pro Mesh Court Jersey", code: "MS", name: "Pro Mesh Court Jersey", badge: "Tournament", desc: "Honeycomb moisture-release ventilation panels", priceDelta: 40 },
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
    silhouettes: [
      { id: "Performance Zipper Polo", code: "ZP", name: "Performance Zipper Polo", badge: "Bestseller", desc: "Anti-rust YKK quarter-zipper with structured collar", priceDelta: 0 },
      { id: "Classic Pique 3-Button Polo", code: "CL", name: "Classic Pique 3-Button Polo", badge: "Classic", desc: "Timeless ribbed collar with mother-of-pearl buttons", priceDelta: 0 },
      { id: "Active Dry-Fit Polo", code: "DF", name: "Active Dry-Fit Polo", badge: "Athletic", desc: "Moisture-wicking breathable micro-pique knit", priceDelta: 20 },
      { id: "Tipped Collar Polo", code: "TP", name: "Tipped Collar Polo", badge: "Corporate", desc: "Dual-color contrast tipping on collar & sleeve ribs", priceDelta: 30 },
    ],
  },
  {
    id: "cricket",
    name: "Cricket",
    tagline: "Full Sublimation Pro Match Kit",
    badge: "Bestseller",
    basePrice: 490,
    icon: "/icons/sports/cricket.svg",
    image: "/cricket-preview.png",
    backImage: "https://yoode.com/cdn/shop/files/yd-seo-print-kit-back.png?v=1789123364&width=1000",
    sideImage: "https://yoode.com/cdn/shop/files/yd-seo-banner-custom-jersey-team.png?v=1789121863&width=1000",
    silhouettes: [
      { id: "Half Sleeve Match Jersey", code: "HS", name: "Half Sleeve Match Jersey", badge: "Match Day", desc: "Breathable side mesh with structured polo collar", priceDelta: 0 },
      { id: "Full Sleeve Pro Kit", code: "FS", name: "Full Sleeve Pro Kit", badge: "Sun Protection", desc: "UV 50+ full-arm protection with elastic cuffs", priceDelta: 60 },
      { id: "Raglan Polo Collar", code: "RG", name: "Raglan Polo Collar", badge: "Club Classic", desc: "Two-button tipped placket with raglan sleeves", priceDelta: 40 },
      { id: "Training Sleeveless Vest", code: "TR", name: "Training Sleeveless Vest", badge: "Practice", desc: "Lightweight nets warm-up cut with wide armholes", priceDelta: 0 },
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
    silhouettes: [
      { id: "Short Sleeve Striker Jersey", code: "SS", name: "Short Sleeve Striker Jersey", badge: "Official Cut", desc: "Ergonomic shoulder seams & ventilated back", priceDelta: 0 },
      { id: "V-Neck Pro Sublimation", code: "VN", name: "V-Neck Pro Sublimation", badge: "Lightweight", desc: "Featherlight competition collar for high intensity", priceDelta: 20 },
      { id: "Long Sleeve Keeper / Striker", code: "LS", name: "Long Sleeve Keeper / Striker", badge: "Pro Match", desc: "Ribbed cuffs for tight forearm grip and slide comfort", priceDelta: 60 },
      { id: "Ventilated Air-Mesh Tee", code: "AM", name: "Ventilated Air-Mesh Tee", badge: "Warm Weather", desc: "Micro-perforated side panels for optimal heat release", priceDelta: 30 },
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
    silhouettes: [
      { id: "Sleeveless Spike Jersey", code: "SL", name: "Sleeveless Spike Jersey", badge: "Match Day", desc: "Maximum arm reach with flexible armhole tape", priceDelta: 0 },
      { id: "Cap Sleeve Pro Top", code: "CS", name: "Cap Sleeve Pro Top", badge: "Tournament", desc: "Fitted shoulders with aerodynamic cut", priceDelta: 25 },
      { id: "Active Dry-Fit Spike Tee", code: "DF", name: "Active Dry-Fit Spike Tee", badge: "Athletic", desc: "Moisture-wicking breathable micro-pique knit", priceDelta: 20 },
      { id: "Contrast Libero Kit", code: "LB", name: "Contrast Libero Kit", badge: "Specialist", desc: "High-contrast colorway for court visibility", priceDelta: 40 },
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
    silhouettes: [
      { id: "Full Button Authentic Jersey", code: "FB", name: "Full Button Authentic Jersey", badge: "Heritage", desc: "6-button placket with double-stitched contrast piping", priceDelta: 0 },
      { id: "Two-Button Henley Jersey", code: "HN", name: "Two-Button Henley Jersey", badge: "Classic", desc: "Casual henley collar with raglan arm cut", priceDelta: -20 },
      { id: "Sublimated Baseball Tee", code: "BT", name: "Sublimated Baseball Tee", badge: "Training", desc: "Lightweight pullover batting practice tee", priceDelta: -40 },
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
    silhouettes: [
      { id: "Featherlight Crew Neck", code: "CR", name: "Featherlight Crew Neck", badge: "Speed Cut", desc: "Sub-120g construction for fast smashes", priceDelta: 0 },
      { id: "Rapid-Dry Zipper Polo", code: "ZP", name: "Rapid-Dry Zipper Polo", badge: "Pro Tour", desc: "Concealed micro-zipper and anti-chafing seams", priceDelta: 50 },
      { id: "Ergonomic Raglan Court Tee", code: "RG", name: "Ergonomic Raglan Court Tee", badge: "Training", desc: "Split-hem design for rapid lateral steps", priceDelta: 30 },
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
    silhouettes: [
      { id: "Raglan Gamer Match Tee", code: "GM", name: "Raglan Gamer Match Tee", badge: "Bestseller", desc: "Full sublimation front, back and sleeve branding", priceDelta: 0 },
      { id: "Pro Tournament Hooded Jersey", code: "HD", name: "Pro Tournament Hooded Jersey", badge: "Stage Pro", desc: "Integrated lightweight jersey hood for arena lights", priceDelta: 80 },
      { id: "Quarter-Zip Performance Top", code: "QZ", name: "Quarter-Zip Performance Top", badge: "Official LAN", desc: "Stand collar with concealed nylon zip", priceDelta: 60 },
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
    silhouettes: [
      { id: "Marathon Racerback Singlet", code: "RS", name: "Marathon Racerback Singlet", badge: "Endurance", desc: "Bonded flatlock seams prevent friction on 42km runs", priceDelta: 0 },
      { id: "Ultralight Running Tee", code: "UT", name: "Ultralight Running Tee", badge: "All Weather", desc: "Reflective silver micro-dots for night running", priceDelta: 20 },
      { id: "Half-Zip Thermal Long Sleeve", code: "HZ", name: "Half-Zip Thermal Long Sleeve", badge: "Early Morning", desc: "Thumbholes and ventilation chest zip", priceDelta: 70 },
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
    silhouettes: [
      { id: "Full Zip Aero Jersey", code: "FZ", name: "Full Zip Aero Jersey", badge: "Road Race", desc: "YKK camlock zip, silicone hem gripper, 3 rear pockets", priceDelta: 0 },
      { id: "Club Fit Half-Zip Jersey", code: "CF", name: "Club Fit Half-Zip Jersey", badge: "Gran Fondo", desc: "Relaxed torso cut with breathable underarm mesh", priceDelta: -30 },
      { id: "Windbreaker Long Sleeve", code: "WB", name: "Windbreaker Long Sleeve", badge: "Cold Morning", desc: "Water-resistant front chest membrane", priceDelta: 90 },
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
    silhouettes: [
      { id: "Tour Performance 4-Way Stretch", code: "TR", name: "Tour Performance 4-Way Stretch", badge: "Tour Match", desc: "Silky 4-way stretch fabric with UV 50+ rating", priceDelta: 0 },
      { id: "Sun-Protection Mock Neck", code: "MN", name: "Sun-Protection Mock Neck", badge: "Modern Tour", desc: "Low-profile mock collar favored by pro players", priceDelta: 40 },
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
    silhouettes: [
      { id: "Pro Raider Sleeveless Vest", code: "RV", name: "Pro Raider Sleeveless Vest", badge: "Match Pro", desc: "Tear-resistant double reinforced neck and arm bindings", priceDelta: 0 },
      { id: "Skin-Fit Compression Top", code: "CP", name: "Skin-Fit Compression Top", badge: "Anti-Tackle", desc: "Friction-minimizing aerodynamic fit", priceDelta: 30 },
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
    silhouettes: [
      { id: "Agility Court Performance Tee", code: "AC", name: "Agility Court Performance Tee", badge: "Quick Dry", desc: "Featherlight cooling fabric with relaxed side drape", priceDelta: 0 },
      { id: "Active Placket Court Polo", code: "AP", name: "Active Placket Court Polo", badge: "Club Play", desc: "Breathable collar with lightweight buttons", priceDelta: 30 },
    ],
  },
];

// ---------------------------------------------------------------------------
// LAYER & CRAFTSMANSHIP OPTIONS (Preserving all hardware & layer specs)
// ---------------------------------------------------------------------------

const LAYER_SPECS = [
  { title: "Placket & Closure", opt: "Anti-Rust YKK Silver Quarter-Zip", desc: "Smooth glide with auto-lock puller & inner shield" },
  { title: "Collar Construction", opt: "Reinforced Structured Rib (Lycra Core)", desc: "Guaranteed zero collar curl after 100+ washes" },
  { title: "Fabric Construction", opt: "220 GSM Bio-Washed Combed Cotton", desc: "Soft handfeel, pre-shrunk, colorfast knit" },
  { title: "Hem & Side Slits", opt: "Bar-Tacked Side Vent Slits", desc: "Clean athletic drape over trousers or track pants" },
];

const FABRICS = [
  { id: "micropoly-180", code: "MP", name: "180 GSM Micro-Poly", specs: "Rapid Moisture-Wicking · Quick Dry", color: "#3B4E63", priceDelta: 0 },
  { id: "honeycomb-mesh", code: "HM", name: "Honeycomb Air Mesh", specs: "Ventilated Athletic Micro-Knit", color: "#4A5F54", priceDelta: 40 },
  { id: "cotton-220", code: "CT", name: "220 GSM Pique Cotton", specs: "Bio-Washed Combed Cotton · Structured", color: "#ECE8DD", priceDelta: 30 },
  { id: "interlock-poly", code: "IL", name: "Interlock Dry-Fit UV", specs: "Anti-Bacterial UV 50+ Shield", color: "#1E2A38", priceDelta: 50 },
  { id: "fleece-320", code: "FL", name: "320 GSM Brushed Fleece", specs: "Winter Warmth Structured Terry", color: "#8B8178", priceDelta: 120 },
];

const COLOR_PALETTES = [
  { id: "navy-gold", name: "Navy & Solar Gold", hex1: "#1E293B", hex2: "#F59E0B", desc: "Royal navy body with gold trims" },
  { id: "black-crimson", name: "Onyx Black & Crimson", hex1: "#121212", hex2: "#DC2626", desc: "Deep stealth black with red accents" },
  { id: "royal-white", name: "Royal Blue & Pure White", hex1: "#1E40AF", hex2: "#FFFFFF", desc: "Stadium blue with crisp white panels" },
  { id: "emerald-gold", name: "Emerald Green & Gold", hex1: "#064E3B", hex2: "#FBBF24", desc: "Deep forest green with bright gold" },
  { id: "arctic-cyan", name: "Arctic White & Electric Cyan", hex1: "#F8FAFC", hex2: "#06B6D4", desc: "Clean white kit with cyan highlights" },
  { id: "ruby-charcoal", name: "Ruby Crimson & Charcoal", hex1: "#B91C1C", hex2: "#374151", desc: "Striker ruby with matte charcoal trims" },
];

const LOGO_TECHNIQUES = [
  { id: "embroidery", code: "EM", title: "High-Density Japanese Micro Embroidery", desc: "Sealed on reverse with waterproof heat tape", priceDelta: 50 },
  { id: "dtf", code: "DT", title: "Waterproof Matte DTF Print", desc: "Ultra-vibrant, stretchable, waterproof film", priceDelta: 35 },
  { id: "reflective", code: "RF", title: "Reflective Safety Print", desc: "Reflects headlights at night for high visibility", priceDelta: 40 },
  { id: "crest", code: "CR", title: "Woven Silicone 3D Crest Patch", desc: "Luxury 3D tactile rubberized molded badge", priceDelta: 70 },
  { id: "upload", code: "UP", title: "Upload Custom Vector Artwork", desc: "Instant mockup rendering with vector precision", priceDelta: 50 },
];

const FONTS = [
  { id: "Athletic Bold", name: "Championship Athletic Bold", family: "Impact, sans-serif", sample: "12" },
  { id: "Modern Minimalist", name: "Modern Minimalist Tracked", family: "var(--font-sora), sans-serif", sample: "Aa" },
  { id: "Editorial Bodoni", name: "Editorial Bodoni Luxury", family: "Georgia, serif", sample: "Vd" },
  { id: "Technical Mono", name: "Technical Monospace", family: "Courier New, monospace", sample: "//" },
];

export default function YoodeKitStudioModal({
  isOpen,
  onClose,
  initialColor,
  onAddToCart
}: YoodeKitStudioModalProps) {
  const params = useParams();
  const slug = (params?.slug as string) || "";
  const isPoloPage = slug.includes("polo");

  // Default to Basketball (as shown in user's favorite screenshot) or polo
  const [selectedSportId, setSelectedSportId] = useState<string>(isPoloPage ? "polo" : "basketball");
  const [activeTab, setActiveTab] = useState<StudioTab>("style");
  const [activeAngle, setActiveAngle] = useState<number>(0);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [arcScrollIndex, setArcScrollIndex] = useState<number>(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentSport = useMemo(() => {
    return SPORTS_DATA.find(s => s.id === selectedSportId) || SPORTS_DATA[0];
  }, [selectedSportId]);

  // Customization State
  const [customState, setCustomState] = useState<CustomKitState>({
    sport: currentSport.name,
    style: currentSport.silhouettes[0]?.name || "Wide Shoulder Match Tank",
    colorId: initialColor?.id || "navy-gold",
    colorName: initialColor?.name || "Navy & Solar Gold",
    viewAngle: "F",
    logoPlacement: "left-chest",
    logoTechnique: "High-Density Japanese Micro Embroidery",
    logoSize: 100,
    logoImage: null,
    customText: "ARJUN",
    customNumber: "12",
    fontStyle: "Athletic Bold",
    quantity: 10
  });

  // Sync style when sport changes
  useEffect(() => {
    setCustomState(prev => ({
      ...prev,
      sport: currentSport.name,
      style: currentSport.silhouettes[0]?.name || prev.style
    }));
  }, [currentSport]);

  const [selectedFabricId, setSelectedFabricId] = useState<string>("micropoly-180");
  const currentFabric = useMemo(() => {
    return FABRICS.find(f => f.id === selectedFabricId) || FABRICS[0];
  }, [selectedFabricId]);

  const currentSilhouette = useMemo(() => {
    return currentSport.silhouettes.find(s => s.name === customState.style) || currentSport.silhouettes[0];
  }, [currentSport, customState.style]);

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
    const list: Array<{ sport: SportStudioItem; realIdx: number; arcPos: number }> = [];
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

  // Pricing Calculation
  const basePrice = currentSport.basePrice;
  const styleDelta = currentSilhouette?.priceDelta || 0;
  const fabricDelta = currentFabric.priceDelta;
  const unitPrice = basePrice + styleDelta + fabricDelta;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomState(prev => ({ ...prev, logoImage: url, logoTechnique: "Upload Custom Vector Artwork" }));
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

  // 3-angle imagery
  const angleImages = useMemo(() => {
    if (currentSport.id === "polo") {
      let frontSrc = "/polo/clean-navy-front.png";
      const c = customState.colorId.toLowerCase();
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
        { id: "model", label: "Side Profile", src: "/polo/clean-navy-model.png" },
      ];
    }
    return [
      { id: "front", label: "Match Showcase", src: currentSport.image },
      { id: "back", label: "Kit Details", src: currentSport.backImage || currentSport.image },
      { id: "model", label: "On Field", src: currentSport.sideImage || currentSport.image },
    ];
  }, [currentSport, customState.colorId]);

  const handleAngleRotate = (direction: "left" | "right") => {
    setActiveAngle((prev) => {
      if (direction === "left") return prev === 0 ? 2 : prev - 1;
      return prev === 2 ? 0 : prev + 1;
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] w-screen h-screen bg-[#F6F5F2] text-[#111111] flex flex-col overflow-hidden font-sans select-none">
      
      {/* -------------------------------------------------------------
          TOP BAR / NAVIGATION (Exact Luxury Atelier Header from screenshot)
      -------------------------------------------------------------- */}
      <header className="w-full h-14 shrink-0 px-4 md:px-12 flex items-center justify-between border-b border-black/[0.06] bg-[#F6F5F2]/95 backdrop-blur-sm z-30">
        
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
            <span className="text-black border-b-2 border-black pb-0.5 cursor-pointer">DESIGN STUDIO</span>
            <Link href="/custom-sports-jerseys" className="hover:text-black transition-colors hidden sm:inline">SPORTS SHOWCASE</Link>
            <Link href="/services" className="hover:text-black transition-colors hidden sm:inline">ATELIER SERVICES</Link>
          </nav>
        </div>

        {/* Center: Selected Sport Indicator Badge (Exact from screenshot) */}
        <div className="flex items-center gap-2 bg-black/[0.04] px-4 py-1.5 rounded-full border border-black/[0.06]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-black uppercase tracking-wider text-black">
            {currentSport.name} Kit Studio
          </span>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest hidden sm:inline">
            · {currentSport.badge}
          </span>
        </div>

        {/* Right: Currency Flag, Favorites, Bag, Close Modal */}
        <div className="flex items-center gap-4 md:gap-6 text-[12px] font-bold tracking-[0.14em] uppercase text-black/80">
          <div className="hidden sm:flex items-center gap-1.5 cursor-pointer hover:text-black">
            <span className="text-sm">🇮🇳</span>
            <span className="text-[11px] font-extrabold">INR</span>
            <ChevronDown size={13} className="text-gray-400" />
          </div>

          <button 
            type="button"
            className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer"
          >
            <Heart size={15} className="text-black" />
            <span className="hidden md:inline">Favorites</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer"
          >
            <ShoppingBag size={15} />
            <span className="hidden md:inline">Bag</span>
            <span className="text-[10px] bg-black text-white rounded-full w-4 h-4 flex items-center justify-center font-bold">
              {isAdded ? "1" : "0"}
            </span>
          </button>

          <button 
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/5 hover:bg-black hover:text-white transition-colors flex items-center justify-center text-gray-800 cursor-pointer ml-1"
            title="Close Studio"
          >
            <X size={16} strokeWidth={2.5} />
          </button>
        </div>
      </header>

      {/* -------------------------------------------------------------
          STEP SUB-HEADLINE (Exact from screenshot)
      -------------------------------------------------------------- */}
      <div className="w-full h-8 shrink-0 flex items-center justify-between px-6 md:px-12 pt-1 border-b border-black/[0.03]">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-black/50">
          <span>1. CHOOSE SPORT</span>
          <ChevronRight size={12} />
          <span className="text-black font-extrabold">2. CUSTOMIZE {currentSport.name.toUpperCase()} DETAILS</span>
          <ChevronRight size={12} />
          <span>3. ORDER &amp; MOCKUP</span>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-[11px] font-bold text-gray-500 tracking-wider">
          <span>100% Sublimation Guaranteed</span>
          <span>·</span>
          <span>No Minimum Order</span>
        </div>
      </div>

      {/* -------------------------------------------------------------
          MAIN 3-COLUMN WORKSPACE (Exact from user's loved screenshot):
          - LEFT: CURVED SELECTIONS ON PARABOLIC ARC
          - CENTER: 3D GARMENT STAGE
          - RIGHT: VERTICALLY STACKED OPTIONS & LAYER CONTROLS
      -------------------------------------------------------------- */}
      <div className="flex-1 min-h-0 w-full max-w-[1520px] mx-auto px-2 md:px-8 flex items-center justify-between relative overflow-hidden py-1">
        
        {/* =========================================================
            COLUMN 1: CURVED ARC OF SPORTS SELECTIONS
        ========================================================== */}
        <div className="relative w-80 h-[480px] hidden md:flex flex-col items-center justify-center shrink-0 z-20 select-none">
          
          {/* Header over the arc */}
          <div className="absolute top-1 left-4 flex items-center gap-1.5 z-30 select-none">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              SELECT SPORT
            </span>
            <span className="text-[9px] bg-black/5 px-2 py-0.5 rounded-full font-bold text-gray-600">
              {SPORTS_DATA.length} Kits
            </span>
          </div>

          {/* Up Navigation Arrow */}
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
                  {/* Sport Label popping out to left with ZERO overlap (16px gap) */}
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

                  {/* Circular Node sitting precisely on curve */}
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

          {/* Down Navigation Arrow */}
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
            COLUMN 2: CENTER GARMENT VIEWPORT & CONTROLS
        ========================================================== */}
        <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-2 h-full max-h-[100%] min-w-0">
          
          {/* Main Garment Canvas */}
          <div className="relative w-[340px] sm:w-[420px] md:w-[480px] lg:w-[540px] h-[48vh] sm:h-[52vh] max-h-[440px] md:max-h-[480px] flex items-center justify-center">
            
            {/* Diffused Floor Shadow */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-black/[0.10] blur-xl rounded-[100%] pointer-events-none z-0" />

            {/* Product Garment Image */}
            <div className="relative w-full h-full flex items-center justify-center z-10">
              <Image
                key={`${selectedSportId}-${activeAngle}-${customState.colorId}`}
                src={angleImages[activeAngle]?.src || currentSport.image}
                alt={`${currentSport.name} Custom Jersey`}
                fill
                className="object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)] transition-all duration-300 animate-fade-in"
                priority
              />

              {/* Dynamic Live Custom Player Name & Number Overlay on Back View */}
              {activeAngle === 1 && (
                <>
                  {customState.customText && (
                    <div 
                      className="absolute top-[28%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 text-white font-black tracking-widest drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)] text-sm sm:text-base uppercase"
                      style={{ fontFamily: customState.fontStyle === "Athletic Bold" ? "Impact, sans-serif" : "inherit" }}
                    >
                      {customState.customText}
                    </div>
                  )}

                  {customState.customNumber && (
                    <div 
                      className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 text-white font-black tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.95)] text-4xl sm:text-5xl"
                      style={{ fontFamily: customState.fontStyle === "Athletic Bold" ? "Impact, sans-serif" : "inherit" }}
                    >
                      {customState.customNumber}
                    </div>
                  )}
                </>
              )}

              {/* Live Uploaded Logo Overlay */}
              {activeAngle === 0 && customState.logoImage && (
                <div 
                  className={`absolute pointer-events-none z-25 w-10 h-10 sm:w-12 sm:h-12 transition-all ${
                    customState.logoPlacement === "left-chest" 
                      ? "top-[32%] left-[64%] -translate-x-1/2 -translate-y-1/2" 
                      : customState.logoPlacement === "right-chest"
                      ? "top-[32%] left-[36%] -translate-x-1/2 -translate-y-1/2"
                      : "top-[42%] left-[50%] -translate-x-1/2 -translate-y-1/2"
                  }`}
                >
                  <img 
                    src={customState.logoImage} 
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

          {/* 3 Angle View Thumbnails (Exact boxed layout from screenshot) */}
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

          {/* Reset / Pro Preset Controls (Exact from screenshot) */}
          <div className="flex items-center gap-5 mt-1.5 text-[10px] md:text-[11px] font-bold tracking-wider text-black/60 uppercase shrink-0">
            <button 
              type="button"
              onClick={() => {
                setCustomState({
                  sport: currentSport.name,
                  style: currentSport.silhouettes[0]?.name || "Wide Shoulder Match Tank",
                  colorId: "navy-gold",
                  colorName: "Navy & Solar Gold",
                  viewAngle: "F",
                  logoPlacement: "left-chest",
                  logoTechnique: "High-Density Japanese Micro Embroidery",
                  logoSize: 100,
                  logoImage: null,
                  customText: "ARJUN",
                  customNumber: "12",
                  fontStyle: "Athletic Bold",
                  quantity: 10
                });
              }}
              className="flex items-center gap-1 hover:text-black cursor-pointer transition-colors"
            >
              <Undo2 size={12} />
              <span>Reset</span>
            </button>
            
            <button 
              type="button"
              onClick={() => {
                setCustomState(prev => ({
                  ...prev,
                  colorId: "black-crimson",
                  colorName: "Onyx Black & Crimson",
                  logoTechnique: "Woven Silicone 3D Crest Patch"
                }));
              }}
              className="flex items-center gap-1 hover:text-black cursor-pointer transition-colors"
            >
              <Redo2 size={12} />
              <span>Pro Preset</span>
            </button>
          </div>

          {/* Pricing & Solid BUY Action (Exact from screenshot) */}
          <div className="flex items-center gap-4 mt-2 shrink-0 z-20">
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                STARTING AT
              </span>
              <span className="text-lg md:text-xl font-black tracking-tight text-black">
                ₹{unitPrice.toLocaleString("en-IN")},00
              </span>
            </div>

            <button
              type="button"
              onClick={handleCompleteOrder}
              className="bg-black hover:bg-neutral-800 text-white font-black text-xs md:text-[13px] px-8 py-2.5 tracking-[0.18em] uppercase rounded-xs transition-all active:scale-95 cursor-pointer shadow-sm flex items-center gap-2"
            >
              {isAdded ? (
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
            COLUMN 3: LUXURY FLOATING OPTIONS CARD (Exact from screenshot)
        ========================================================== */}
        <div className="w-72 md:w-80 lg:w-[340px] xl:w-[370px] h-[440px] md:h-[480px] hidden md:flex flex-col bg-white/95 backdrop-blur-md rounded-2xl border border-black/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.06)] p-3.5 z-20 shrink-0">
          
          {/* Step Pill Header Tabs (STYLE, LOOK, FABRIC, COLORS, LOGO, PLAYER) */}
          <div className="flex items-center justify-between gap-1 p-1 bg-black/[0.04] rounded-xl border border-black/[0.05] mb-3 shrink-0">
            {[
              { id: "style" as StudioTab, label: "STYLE", icon: <SlidersHorizontal size={11} /> },
              { id: "look" as StudioTab, label: "LOOK", icon: <Wrench size={11} /> },
              { id: "fabric" as StudioTab, label: "FABRIC", icon: <Layers size={11} /> },
              { id: "colors" as StudioTab, label: "COLORS", icon: <Palette size={11} /> },
              { id: "logo" as StudioTab, label: "LOGO", icon: <Sparkles size={11} /> },
              { id: "player" as StudioTab, label: "PLAYER", icon: <Type size={11} /> },
            ].map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-1.5 px-0.5 rounded-lg text-[9px] font-black tracking-wider flex items-center justify-center gap-1 transition-all cursor-pointer ${
                    isActive 
                      ? "bg-black text-white shadow-xs" 
                      : "text-gray-600 hover:text-black hover:bg-white/60"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Step Section Title & Badge */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/[0.06] shrink-0">
            <div>
              <h2 className="text-[12px] font-black uppercase tracking-wider text-black">
                {activeTab === "style" && `1. ${currentSport.name.toUpperCase()} STYLE & CUT`}
                {activeTab === "look" && "2. HARDWARE & CRAFTSMANSHIP"}
                {activeTab === "fabric" && "3. PERFORMANCE FABRIC"}
                {activeTab === "colors" && "4. TEAM COLORWAY"}
                {activeTab === "logo" && "5. BRANDING & ARTWORK"}
                {activeTab === "player" && "6. PLAYER PERSONALIZATION"}
              </h2>
              <p className="text-[10px] text-gray-500 font-medium">
                {activeTab === "style" && "Select collar, sleeve & motion fit"}
                {activeTab === "look" && "Placket zipper, rib collar & hem specifications"}
                {activeTab === "fabric" && "Breathable technical knits tailored in Tirupur"}
                {activeTab === "colors" && "Vibrant fade-proof sublimation colors"}
                {activeTab === "logo" && "High-density Japanese thread & 3D silicone"}
                {activeTab === "player" && "Names & numbers sublimated included"}
              </p>
            </div>
            
            <span className="text-[10px] font-extrabold text-[#E53935] bg-red-50 px-2 py-0.5 rounded-full border border-red-100 shrink-0">
              {activeTab === "style" && `${currentSport.silhouettes.length} Options`}
              {activeTab === "look" && "4 Layers"}
              {activeTab === "fabric" && `${FABRICS.length} Fabrics`}
              {activeTab === "colors" && `${COLOR_PALETTES.length} Palettes`}
              {activeTab === "logo" && `${LOGO_TECHNIQUES.length} Methods`}
              {activeTab === "player" && "Free Print"}
            </span>
          </div>

          {/* Vertically Stacked Options Container */}
          <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-2 min-h-0 hide-scrollbar">
            
            {/* ---------------- 1. STYLE & SILHOUETTE (Exact cards from screenshot) ---------------- */}
            {activeTab === "style" && (
              <div className="flex flex-col gap-2">
                {currentSport.silhouettes.map(sil => {
                  const isSelected = customState.style === sil.name;
                  return (
                    <div
                      key={sil.id}
                      onClick={() => setCustomState(prev => ({ ...prev, style: sil.name }))}
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
                          {sil.code}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-black truncate">{sil.name}</span>
                            <span className="text-[9px] bg-black/5 text-gray-600 px-1.5 py-0.2 rounded-xs font-semibold shrink-0">
                              {sil.badge}
                            </span>
                          </div>
                          <span className="text-[10px] text-gray-500 leading-tight truncate">{sil.desc}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-black text-black">
                          {sil.priceDelta === 0 ? "Included" : `+ ₹${sil.priceDelta}`}
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
            {activeTab === "look" && (
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

            {/* ---------------- 3. PERFORMANCE FABRIC (Vertically Stacked) ---------------- */}
            {activeTab === "fabric" && (
              <div className="flex flex-col gap-2">
                {FABRICS.map(fabric => {
                  const isSelected = selectedFabricId === fabric.id;
                  return (
                    <div
                      key={fabric.id}
                      onClick={() => setSelectedFabricId(fabric.id)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected 
                          ? "bg-black/[0.03] border-black ring-1 ring-black shadow-xs" 
                          : "bg-white border-black/[0.08] hover:border-black/30 hover:shadow-xs"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div 
                          className="w-7 h-7 rounded-lg border border-black/10 shrink-0 shadow-xs" 
                          style={{ backgroundColor: fabric.color }}
                        />
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-bold text-black truncate">{fabric.name}</span>
                          <span className="text-[10px] text-gray-500 leading-tight truncate">{fabric.specs}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-black text-black">
                          {fabric.priceDelta === 0 ? "Standard" : `+ ₹${fabric.priceDelta}`}
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

            {/* ---------------- 4. TEAM COLORWAYS (Vertically Stacked) ---------------- */}
            {activeTab === "colors" && (
              <div className="flex flex-col gap-2">
                {COLOR_PALETTES.map(color => {
                  const isSelected = customState.colorId === color.id;
                  return (
                    <div
                      key={color.id}
                      onClick={() => setCustomState(prev => ({ 
                        ...prev, 
                        colorId: color.id, 
                        colorName: color.name 
                      }))}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected 
                          ? "bg-black/[0.03] border-black ring-1 ring-black shadow-xs" 
                          : "bg-white border-black/[0.08] hover:border-black/30 hover:shadow-xs"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="flex items-center -space-x-2 shrink-0">
                          <div 
                            className="w-6 h-6 rounded-full border border-white shadow-xs z-10" 
                            style={{ backgroundColor: color.hex1 }} 
                          />
                          <div 
                            className="w-6 h-6 rounded-full border border-white shadow-xs z-0" 
                            style={{ backgroundColor: color.hex2 }} 
                          />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-bold text-black truncate">{color.name}</span>
                          <span className="text-[10px] text-gray-500 leading-tight truncate">{color.desc}</span>
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

            {/* ---------------- 5. LOGO & ARTWORK (Upload & Techniques) ---------------- */}
            {activeTab === "logo" && (
              <div className="flex flex-col gap-2">
                {/* Placement Zone Selection */}
                <div className="flex items-center justify-between p-1.5 bg-black/[0.03] rounded-lg border border-black/[0.04]">
                  <span className="text-[10px] font-black uppercase text-gray-500">Zone:</span>
                  <div className="flex items-center gap-1">
                    {(["left-chest", "right-chest", "back", "sleeve"] as const).map(zone => (
                      <button
                        key={zone}
                        type="button"
                        onClick={() => setCustomState(prev => ({ ...prev, logoPlacement: zone }))}
                        className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase transition-all cursor-pointer ${
                          customState.logoPlacement === zone 
                            ? "bg-black text-white" 
                            : "bg-white text-gray-600 hover:text-black border border-black/10"
                        }`}
                      >
                        {zone.replace("-", " ")}
                      </button>
                    ))}
                  </div>
                </div>

                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="hidden" 
                />

                {/* Upload Box */}
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="p-3 border-2 border-dashed border-gray-300 hover:border-black rounded-xl text-center bg-gray-50/70 hover:bg-white transition-all cursor-pointer flex flex-col items-center justify-center gap-1"
                >
                  {customState.logoImage ? (
                    <div className="flex items-center gap-2">
                      <img src={customState.logoImage} alt="Logo" className="w-8 h-8 object-contain rounded-xs border border-gray-200" />
                      <span className="text-xs font-bold text-emerald-700">Logo Loaded! Tap to change</span>
                    </div>
                  ) : (
                    <>
                      <Upload size={14} className="text-blue-600" />
                      <span className="text-xs font-bold text-gray-800">Upload Vector / High-Res Logo</span>
                      <span className="text-[9px] text-gray-400">PNG, SVG, AI, EPS up to 25MB</span>
                    </>
                  )}
                </div>

                {/* Techniques */}
                {LOGO_TECHNIQUES.map(tech => {
                  const isSelected = customState.logoTechnique === tech.title;
                  return (
                    <div
                      key={tech.id}
                      onClick={() => setCustomState(prev => ({ ...prev, logoTechnique: tech.title }))}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected 
                          ? "bg-black/[0.03] border-black ring-1 ring-black shadow-xs" 
                          : "bg-white border-black/[0.08] hover:border-black/30 hover:shadow-xs"
                      }`}
                    >
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-black block truncate">{tech.title}</span>
                        <span className="text-[10px] text-gray-500 leading-tight truncate block">{tech.desc}</span>
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
              </div>
            )}

            {/* ---------------- 6. PLAYER PERSONALIZATION ---------------- */}
            {activeTab === "player" && (
              <div className="flex flex-col gap-3">
                <div className="p-3 bg-white rounded-xl border border-black/[0.08] flex flex-col gap-2.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                    Roster Names &amp; Numbers (Free)
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-1 flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-gray-600">PLAYER NAME</label>
                      <input 
                        type="text" 
                        maxLength={12} 
                        value={customState.customText} 
                        onChange={(e) => setCustomState(prev => ({ ...prev, customText: e.target.value.toUpperCase() }))}
                        placeholder="NAME"
                        className="w-full text-left font-black text-black bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-200 focus:outline-none focus:border-black uppercase text-xs"
                      />
                    </div>

                    <div className="w-20 flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-gray-600">NUMBER</label>
                      <input 
                        type="text" 
                        maxLength={3} 
                        value={customState.customNumber} 
                        onChange={(e) => setCustomState(prev => ({ ...prev, customNumber: e.target.value }))}
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
                  
                  {FONTS.map(font => {
                    const isSelected = customState.fontStyle === font.id;
                    return (
                      <div
                        key={font.id}
                        onClick={() => setCustomState(prev => ({ ...prev, fontStyle: font.id }))}
                        className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected 
                            ? "bg-black text-white border-black" 
                            : "bg-white border-black/[0.08] hover:border-black/30"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-7 h-7 rounded-lg bg-black/10 flex items-center justify-center font-black text-xs" style={{ fontFamily: font.family }}>
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

          {/* Bottom Card Summary & ADD KIT Button (Exact from user's loved screenshot) */}
          <div className="pt-2.5 mt-2 border-t border-black/[0.06] flex items-center justify-between shrink-0">
            <div className="flex flex-col min-w-0 pr-2">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest truncate">
                CONFIGURATION
              </span>
              <span className="text-[11px] font-black text-black truncate">
                {currentSport.name} · {currentSilhouette?.badge || currentSilhouette?.name} · {currentFabric.name}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCompleteOrder}
              className="bg-yoode-onyx hover:bg-black text-white px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shrink-0 cursor-pointer shadow-xs active:scale-95 transition-all"
            >
              <span>ADD KIT</span>
              <ArrowUpRight size={13} />
            </button>
          </div>

        </div>

      </div>

      {/* -------------------------------------------------------------
          BOTTOM UTILITY BAR (Exact from user's loved screenshot)
      -------------------------------------------------------------- */}
      <footer className="w-full h-10 shrink-0 px-4 md:px-12 flex items-center justify-between border-t border-black/[0.06] text-xs font-bold tracking-wider text-black/60 uppercase">
        
        {/* Left: Save configuration */}
        <button 
          type="button"
          onClick={handleShare}
          className="flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer"
        >
          <Heart size={14} className="text-black" />
          <span>Save configuration</span>
        </button>
        
        {/* Center: Provenance Note */}
        <div className="hidden sm:flex items-center gap-2 text-[11px] text-gray-500 normal-case font-medium">
          <span>Factory direct from Tirupur, India</span>
          <span>·</span>
          <span>Free design mockup sent within 24 hours</span>
        </div>

        {/* Right: Guarantee Note */}
        <div className="flex items-center gap-2 text-[11px] text-gray-400 normal-case font-normal">
          <ShieldCheck size={14} className="text-emerald-600" />
          <span className="hidden sm:inline">100% Guaranteed colorfast &amp; zero shrinkage</span>
          <span className="sm:hidden">Made in India</span>
        </div>

      </footer>

    </div>
  );
}
