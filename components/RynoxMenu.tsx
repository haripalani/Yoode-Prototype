"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  X, 
  ChevronDown, 
  ChevronRight,
  ChevronLeft,
  UserPlus, 
  Truck, 
  RefreshCcw, 
  HelpCircle,
  Sparkles,
  MapPin,
  ShoppingBag
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// =========================================================================
// SOCIAL ICONS
// =========================================================================

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

// =========================================================================
// SIGNATURE RYNOX-STYLE TECHNICAL GRAPHICS (Enhanced 3D Stage Volumetric CAD)
// Sleek cool-grey metallic CAD contours with inner cutouts, panel articulation,
// subtle directional gradients, and volumetric highlights.
// =========================================================================

export const RynoxGraphics = {
  // --- 1. EMBROIDERED CAP (Structured High-Crown Baseball Cap) ---
  EmbroideredCap: () => (
    <svg viewBox="0 0 160 140" className="w-full h-full object-contain filter drop-shadow-[0_8px_12px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="capGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#aab7c4" />
          <stop offset="100%" stopColor="#8291a0" />
        </linearGradient>
        <linearGradient id="visorGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9aa7b4" />
          <stop offset="100%" stopColor="#6f7d8c" />
        </linearGradient>
      </defs>
      <path d="M 28 86 C 28 32 50 16 80 16 C 110 16 132 32 132 86 Z" fill="url(#capGrad)" />
      <path d="M 20 86 C 22 82 134 82 144 86 C 150 96 130 114 108 114 C 64 114 30 106 20 86 Z" fill="url(#visorGrad)" />
      <circle cx="80" cy="18" r="4" fill="white" />
      <line x1="80" y1="22" x2="80" y2="86" stroke="white" strokeWidth="2.2" />
      <path d="M 78 21 C 56 36 38 60 29 86" stroke="white" strokeWidth="2" fill="none" />
      <path d="M 82 21 C 104 36 122 60 131 86" stroke="white" strokeWidth="2" fill="none" />
      <path d="M 26 90 C 50 96 112 96 136 90" stroke="white" strokeWidth="2" fill="none" />
      <path d="M 38 100 C 66 106 104 106 122 100" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="56" cy="48" r="2.8" fill="white" />
      <circle cx="104" cy="48" r="2.8" fill="white" />
      <path d="M 68 54 L 80 70 L 92 54 M 80 70 L 80 84" stroke="white" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),

  // --- 2. PRINTED CAP ---
  PrintedCap: () => (
    <svg viewBox="0 0 160 140" className="w-full h-full object-contain filter drop-shadow-[0_8px_12px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="printCapGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#aab7c4" />
          <stop offset="100%" stopColor="#8291a0" />
        </linearGradient>
      </defs>
      <path d="M 28 86 C 28 32 50 16 80 16 C 110 16 132 32 132 86 Z" fill="url(#printCapGrad)" />
      <path d="M 20 86 C 22 82 134 82 144 86 C 150 96 130 114 108 114 C 64 114 30 106 20 86 Z" fill="url(#printCapGrad)" />
      <circle cx="80" cy="18" r="4" fill="white" />
      <line x1="80" y1="22" x2="80" y2="48" stroke="white" strokeWidth="2" />
      <path d="M 78 21 C 56 36 38 60 29 86" stroke="white" strokeWidth="2" fill="none" />
      <path d="M 82 21 C 104 36 122 60 131 86" stroke="white" strokeWidth="2" fill="none" />
      <path d="M 30 92 C 58 98 108 98 132 92" stroke="white" strokeWidth="2" fill="none" />
      <rect x="62" y="52" width="36" height="24" rx="4" stroke="white" strokeWidth="2.5" fill="none" />
      <line x1="68" y1="62" x2="92" y2="62" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="72" y1="68" x2="88" y2="68" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),

  // --- 3. JACKET ---
  Jacket: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="jacketGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <path d="M 52 24 C 62 16 98 16 108 24 L 148 54 L 132 88 L 120 78 L 120 154 L 40 154 L 40 78 L 28 88 L 12 54 Z" fill="url(#jacketGrad)" />
      <path d="M 54 24 C 66 18 94 18 106 24 L 104 32 C 92 26 68 26 56 32 Z" fill="white" />
      <line x1="80" y1="32" x2="80" y2="154" stroke="white" strokeWidth="2.5" />
      <path d="M 54 24 L 42 76 M 106 24 L 118 76" stroke="white" strokeWidth="2" fill="none" />
      <path d="M 18 64 L 34 76 M 22 74 L 36 84" stroke="white" strokeWidth="2.2" />
      <path d="M 142 64 L 126 76 M 138 74 L 124 84" stroke="white" strokeWidth="2.2" />
      <line x1="60" y1="62" x2="72" y2="62" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="146" x2="120" y2="146" stroke="white" strokeWidth="2.2" />
    </svg>
  ),

  // --- 4. PANTS ---
  Pants: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="pantsGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <path d="M 44 24 L 116 24 L 126 160 L 98 160 L 80 84 L 62 160 L 34 160 Z" fill="url(#pantsGrad)" />
      <line x1="44" y1="36" x2="116" y2="36" stroke="white" strokeWidth="2.5" />
      <line x1="80" y1="36" x2="80" y2="76" stroke="white" strokeWidth="2" />
      <path d="M 40 92 L 74 88 M 38 102 L 72 98" stroke="white" strokeWidth="2.5" />
      <path d="M 86 88 L 120 92 M 88 98 L 122 102" stroke="white" strokeWidth="2.5" />
      <line x1="36" y1="152" x2="62" y2="152" stroke="white" strokeWidth="2" />
      <line x1="98" y1="152" x2="124" y2="152" stroke="white" strokeWidth="2" />
    </svg>
  ),

  // --- 5. T-SHIRT ---
  TShirt: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="tshirtGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <path d="M 52 24 C 62 34 98 34 108 24 L 146 48 L 128 78 L 118 68 L 118 154 L 42 154 L 42 68 L 32 78 L 14 48 Z" fill="url(#tshirtGrad)" />
      <path d="M 52 24 C 64 36 96 36 108 24" stroke="white" strokeWidth="2.8" fill="none" />
      <path d="M 52 24 L 42 68 M 108 24 L 118 68" stroke="white" strokeWidth="2" fill="none" />
      <line x1="18" y1="56" x2="30" y2="74" stroke="white" strokeWidth="2.2" />
      <line x1="142" y1="56" x2="130" y2="74" stroke="white" strokeWidth="2.2" />
      <line x1="42" y1="146" x2="118" y2="146" stroke="white" strokeWidth="2.2" />
      <circle cx="80" cy="74" r="8" stroke="white" strokeWidth="1.8" fill="none" />
      <line x1="72" y1="74" x2="88" y2="74" stroke="white" strokeWidth="1.8" />
    </svg>
  ),

  // --- 6. POLO SHIRT ---
  PoloShirt: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="poloGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <path d="M 50 26 L 110 26 L 146 50 L 128 80 L 118 70 L 118 154 L 42 154 L 42 70 L 32 80 L 14 50 Z" fill="url(#poloGrad)" />
      <path d="M 50 26 L 68 44 L 80 34 L 92 44 L 110 26" stroke="white" strokeWidth="2.5" fill="none" />
      <line x1="80" y1="34" x2="80" y2="74" stroke="white" strokeWidth="2.5" />
      <circle cx="80" cy="48" r="2.2" fill="white" />
      <circle cx="80" cy="62" r="2.2" fill="white" />
      <line x1="18" y1="58" x2="30" y2="76" stroke="white" strokeWidth="2.2" />
      <line x1="142" y1="58" x2="130" y2="76" stroke="white" strokeWidth="2.2" />
      <line x1="42" y1="146" x2="118" y2="146" stroke="white" strokeWidth="2.2" />
    </svg>
  ),

  // --- 7. OVERSIZED T-SHIRT ---
  OversizedTee: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="overGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <path d="M 44 26 C 58 36 102 36 116 26 L 158 58 L 138 94 L 126 82 L 126 156 L 34 156 L 34 82 L 22 94 L 2 58 Z" fill="url(#overGrad)" />
      <path d="M 44 26 C 60 38 100 38 116 26" stroke="white" strokeWidth="3.2" fill="none" />
      <path d="M 44 26 L 34 82 M 116 26 L 126 82" stroke="white" strokeWidth="2" fill="none" />
      <line x1="6" y1="66" x2="20" y2="90" stroke="white" strokeWidth="2.5" />
      <line x1="154" y1="66" x2="140" y2="90" stroke="white" strokeWidth="2.5" />
      <line x1="34" y1="148" x2="126" y2="148" stroke="white" strokeWidth="2.5" />
    </svg>
  ),

  // --- 8. FULL SLEEVE T-SHIRT ---
  FullSleeveTee: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="fullGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <path d="M 52 24 C 62 34 98 34 108 24 L 148 54 L 136 142 L 122 140 L 118 72 L 118 154 L 42 154 L 42 72 L 38 140 L 24 142 L 12 54 Z" fill="url(#fullGrad)" />
      <path d="M 52 24 C 64 36 96 36 108 24" stroke="white" strokeWidth="2.8" fill="none" />
      <line x1="18" y1="92" x2="34" y2="96" stroke="white" strokeWidth="2" />
      <line x1="142" y1="92" x2="126" y2="96" stroke="white" strokeWidth="2" />
      <line x1="24" y1="134" x2="38" y2="132" stroke="white" strokeWidth="2.5" />
      <line x1="136" y1="134" x2="122" y2="132" stroke="white" strokeWidth="2.5" />
      <line x1="42" y1="146" x2="118" y2="146" stroke="white" strokeWidth="2.2" />
    </svg>
  ),

  // --- 9. HOODIE & SWEATSHIRT ---
  Hoodie: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="hoodieGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <path d="M 48 34 C 54 14 106 14 112 34 L 152 58 L 138 144 L 124 140 L 120 76 L 120 156 L 40 156 L 40 76 L 36 140 L 22 144 L 8 58 Z" fill="url(#hoodieGrad)" />
      <path d="M 52 38 C 66 22 94 22 108 38" stroke="white" strokeWidth="3" fill="none" />
      <line x1="72" y1="42" x2="68" y2="76" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="88" y1="42" x2="92" y2="76" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M 50 114 L 62 96 L 98 96 L 110 114 L 110 144 L 50 144 Z" stroke="white" strokeWidth="2.5" fill="none" />
      <line x1="22" y1="134" x2="36" y2="132" stroke="white" strokeWidth="2.5" />
      <line x1="138" y1="134" x2="124" y2="132" stroke="white" strokeWidth="2.5" />
      <line x1="40" y1="146" x2="120" y2="146" stroke="white" strokeWidth="2.5" />
    </svg>
  ),

  // --- 10. SPORTSWEAR (Matchday Jersey) ---
  Sportswear: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="sportsGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <path d="M 52 24 L 80 38 L 108 24 L 148 48 L 132 80 L 120 70 L 120 154 L 40 154 L 40 70 L 28 80 L 12 48 Z" fill="url(#sportsGrad)" />
      <path d="M 52 24 L 80 44 L 108 24" stroke="white" strokeWidth="2.8" fill="none" />
      <path d="M 40 68 L 80 92 L 120 68" stroke="white" strokeWidth="2.2" strokeDasharray="4 3" fill="none" />
      <path d="M 40 82 L 80 106 L 120 82" stroke="white" strokeWidth="2.2" strokeDasharray="4 3" fill="none" />
      <line x1="48" y1="72" x2="48" y2="148" stroke="white" strokeWidth="2" strokeDasharray="2 2" />
      <line x1="112" y1="72" x2="112" y2="148" stroke="white" strokeWidth="2" strokeDasharray="2 2" />
      <line x1="18" y1="58" x2="30" y2="76" stroke="white" strokeWidth="2" />
      <line x1="142" y1="58" x2="130" y2="76" stroke="white" strokeWidth="2" />
      <line x1="40" y1="146" x2="120" y2="146" stroke="white" strokeWidth="2.2" />
    </svg>
  ),

  // --- 11. ACCESSORIES ---
  Accessories: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="accGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <path d="M 46 48 C 46 28 114 28 114 48 L 122 150 L 38 150 Z" fill="url(#accGrad)" />
      <path d="M 64 28 C 64 16 96 16 96 28" stroke="white" strokeWidth="3" fill="none" />
      <path d="M 48 54 C 48 38 112 38 112 54" stroke="white" strokeWidth="2.2" fill="none" />
      <rect x="52" y="76" width="56" height="58" rx="6" stroke="white" strokeWidth="2.2" fill="none" />
      <line x1="52" y1="92" x2="108" y2="92" stroke="white" strokeWidth="2" />
      <line x1="40" y1="84" x2="52" y2="84" stroke="white" strokeWidth="2.5" />
      <line x1="108" y1="84" x2="120" y2="84" stroke="white" strokeWidth="2.5" />
    </svg>
  ),

  // --- 12. STORE LOCATION ---
  StoreLocation: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="locGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <path d="M 80 20 C 50 20 30 42 30 72 C 30 108 80 160 80 160 C 80 160 130 108 130 72 C 130 42 110 20 80 20 Z" fill="url(#locGrad)" />
      <circle cx="80" cy="70" r="28" fill="white" />
      <path d="M 64 88 L 64 68 C 64 56 96 56 96 68 L 96 88" stroke="#8d9ba8" strokeWidth="3" fill="none" />
      <line x1="80" y1="68" x2="80" y2="88" stroke="#8d9ba8" strokeWidth="2" />
      <line x1="58" y1="88" x2="102" y2="88" stroke="#8d9ba8" strokeWidth="3" />
    </svg>
  ),

  // --- 13. BRAND CREST BADGE ---
  BrandBadge: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="badgeGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <polygon points="80,24 134,52 134,116 80,154 26,116 26,52" fill="url(#badgeGrad)" />
      <polygon points="80,36 122,58 122,110 80,140 38,110 38,58" stroke="white" strokeWidth="2.2" strokeDasharray="4 2" fill="none" />
      <polygon points="80,64 88,80 104,88 88,96 80,112 72,96 56,88 72,80" fill="white" />
    </svg>
  ),

  // --- 14. ATELIER CRAFT (About) ---
  AtelierCraft: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="craftGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <rect x="36" y="44" width="88" height="92" rx="8" fill="url(#craftGrad)" />
      <path d="M 36 68 L 124 68" stroke="white" strokeWidth="2.5" />
      <path d="M 36 96 L 124 96" stroke="white" strokeWidth="2.5" strokeDasharray="4 3" />
      <circle cx="64" cy="116" r="8" stroke="white" strokeWidth="2.2" fill="none" />
      <circle cx="96" cy="116" r="8" stroke="white" strokeWidth="2.2" fill="none" />
      <line x1="68" y1="110" x2="92" y2="82" stroke="white" strokeWidth="2.5" />
      <line x1="92" y1="110" x2="68" y2="82" stroke="white" strokeWidth="2.5" />
    </svg>
  ),

  // --- 15. CASE STUDIES ---
  CaseStudies: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="caseGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <rect x="34" y="32" width="92" height="116" rx="8" fill="url(#caseGrad)" />
      <line x1="48" y1="52" x2="112" y2="52" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="48" y1="68" x2="88" y2="68" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="50" y="112" width="10" height="20" rx="2" fill="white" />
      <rect x="66" y="98" width="10" height="34" rx="2" fill="white" />
      <rect x="82" y="86" width="10" height="46" rx="2" fill="white" />
      <rect x="98" y="74" width="10" height="58" rx="2" fill="white" />
    </svg>
  ),

  // --- 16. BLOG JOURNAL ---
  BlogJournal: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="blogGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <rect x="32" y="30" width="84" height="120" rx="6" fill="url(#blogGrad)" />
      <line x1="46" y1="30" x2="46" y2="150" stroke="white" strokeWidth="2.5" />
      <line x1="56" y1="54" x2="102" y2="54" stroke="white" strokeWidth="2.5" />
      <line x1="56" y1="70" x2="96" y2="70" stroke="white" strokeWidth="2" />
      <line x1="56" y1="86" x2="102" y2="86" stroke="white" strokeWidth="2" />
      <polygon points="116,84 126,94 104,136 94,134" fill="white" />
      <polygon points="94,134 90,146 102,142" fill="#8d9ba8" stroke="white" strokeWidth="1.5" />
    </svg>
  ),

  // --- 17. GALLERY CAMERA ---
  GalleryCamera: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="camGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <rect x="28" y="52" width="104" height="84" rx="10" fill="url(#camGrad)" />
      <path d="M 58 52 L 68 36 L 92 36 L 102 52" stroke="white" strokeWidth="2.8" fill="none" />
      <circle cx="80" cy="94" r="24" stroke="white" strokeWidth="3" fill="none" />
      <circle cx="80" cy="94" r="10" fill="white" />
      <circle cx="114" cy="68" r="4" fill="white" />
    </svg>
  ),

  // --- 18. DRINKWARE ---
  Drinkware: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="drinkGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <path d="M 54 36 L 106 36 L 98 154 L 62 154 Z" fill="url(#drinkGrad)" />
      <rect x="50" y="24" width="60" height="14" rx="3" stroke="white" strokeWidth="2.5" fill="none" />
      <line x1="58" y1="70" x2="102" y2="70" stroke="white" strokeWidth="2.2" />
      <line x1="60" y1="84" x2="100" y2="84" stroke="white" strokeWidth="2.2" />
    </svg>
  ),

  // --- 19. GIFT HAMPER ---
  GiftHamper: () => (
    <svg viewBox="0 0 160 180" className="w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.18)]">
      <defs>
        <linearGradient id="giftGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#cfd7df" />
          <stop offset="50%" stopColor="#a3b0be" />
          <stop offset="100%" stopColor="#7a8896" />
        </linearGradient>
      </defs>
      <rect x="34" y="66" width="92" height="88" rx="5" fill="url(#giftGrad)" />
      <rect x="28" y="52" width="104" height="20" rx="4" fill="url(#giftGrad)" />
      <line x1="28" y1="72" x2="132" y2="72" stroke="white" strokeWidth="2.5" />
      <line x1="80" y1="52" x2="80" y2="154" stroke="white" strokeWidth="3" />
      <path d="M 80 52 C 64 32 46 40 60 52 C 72 52 80 52 80 52" stroke="white" strokeWidth="2.5" fill="none" />
      <path d="M 80 52 C 96 32 114 40 100 52 C 88 52 80 52 80 52" stroke="white" strokeWidth="2.5" fill="none" />
    </svg>
  ),
};

// =========================================================================
// MENU DATA STRUCTURE
// =========================================================================

export interface MenuItem {
  title: string;
  href: string;
  badge?: string;
  price?: string;
  subtitle?: string;
  GraphicComponent?: () => React.JSX.Element;
  imageGrey?: string;
  imageColor?: string;
  description?: string;
}

export interface MenuSubTab {
  id: string;
  label: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  label: string;
  hasChevron?: boolean;
  subcategories: MenuItem[];
  subTabs?: MenuSubTab[];
}

export const YOODE_MENU_DATA: MenuCategory[] = [
  // 1. SHOP (Corporate, Sportswear, Trendz, Streetwear, Accessories)
  {
    id: "shop",
    label: "SHOP",
    hasChevron: true,
    subcategories: [
      { 
        title: "Corporate", 
        href: "/category?type=corporate-apparel", 
        price: "From ₹499",
        badge: "BESTSELLER",
        imageGrey: "/menu/polo-grey.png",
        imageColor: "/menu/polo-color.png",
        GraphicComponent: RynoxGraphics.PoloShirt 
      },
      { 
        title: "Sportswear", 
        href: "/custom-sports-jerseys", 
        price: "From ₹599",
        badge: "PRO FIT",
        imageGrey: "/menu/tshirt-grey.png",
        imageColor: "/menu/tshirt-color.png",
        GraphicComponent: RynoxGraphics.Sportswear 
      },
      { 
        title: "Trendz", 
        href: "/trenz", 
        price: "From ₹699",
        badge: "OVERSIZED",
        imageGrey: "/menu/tshirt-grey.png",
        imageColor: "/menu/tshirt-color.png",
        GraphicComponent: RynoxGraphics.OversizedTee 
      },
      { 
        title: "Streetwear", 
        href: "/hoodies-sweatshirts-jackets", 
        price: "From ₹1,299",
        badge: "NEW SEASON",
        imageGrey: "/menu/hoodie-grey.png",
        imageColor: "/menu/hoodie-color.png",
        GraphicComponent: RynoxGraphics.Hoodie 
      },
      { 
        title: "Accessories", 
        href: "/accessories", 
        price: "From ₹349",
        badge: "PREMIUM",
        imageGrey: "/menu/cap-embroidered-grey.png",
        imageColor: "/menu/cap-embroidered-color.png",
        GraphicComponent: RynoxGraphics.EmbroideredCap 
      },
    ]
  },

  // 2. CLOTHING (Men's, Women's, Kid's with 6 items each)
  {
    id: "clothing",
    label: "CLOTHING",
    hasChevron: true,
    subcategories: [
      { 
        title: "Men's T Shirt", 
        href: "/t-shirts", 
        price: "From ₹399",
        badge: "ESSENTIAL",
        imageGrey: "/menu/tshirt-grey.png",
        imageColor: "/menu/tshirt-color.png",
        GraphicComponent: RynoxGraphics.TShirt 
      },
      { 
        title: "Men's Polo Shirt", 
        href: "/polos", 
        price: "From ₹549",
        badge: "PREMIUM",
        imageGrey: "/menu/polo-grey.png",
        imageColor: "/menu/polo-color.png",
        GraphicComponent: RynoxGraphics.PoloShirt 
      },
      { 
        title: "Men's Oversized T Shirt", 
        href: "/trenz", 
        price: "From ₹699",
        badge: "TRENDING",
        imageGrey: "/menu/tshirt-grey.png",
        imageColor: "/menu/tshirt-color.png",
        GraphicComponent: RynoxGraphics.OversizedTee 
      },
      { 
        title: "Men's Full Sleeve T Shirt", 
        href: "/t-shirts", 
        price: "From ₹499",
        badge: "CLASSIC",
        imageGrey: "/menu/tshirt-grey.png",
        imageColor: "/menu/tshirt-color.png",
        GraphicComponent: RynoxGraphics.FullSleeveTee 
      },
      { 
        title: "Men's Hoodies & Sweatshirts", 
        href: "/hoodies-sweatshirts-jackets", 
        price: "From ₹1,199",
        badge: "WINTER TECH",
        imageGrey: "/menu/hoodie-grey.png",
        imageColor: "/menu/hoodie-color.png",
        GraphicComponent: RynoxGraphics.Hoodie 
      },
      { 
        title: "Men's Jackets", 
        href: "/hoodies-sweatshirts-jackets", 
        price: "From ₹1,899",
        badge: "RACING SPEC",
        imageGrey: "/menu/jacket-grey.png",
        imageColor: "/menu/jacket-color.png",
        GraphicComponent: RynoxGraphics.Jacket 
      },
    ],
    subTabs: [
      {
        id: "mens",
        label: "Men's Clothing",
        items: [
          { 
            title: "Men's T Shirt", 
            href: "/t-shirts", 
            price: "From ₹399",
            badge: "ESSENTIAL",
            imageGrey: "/menu/tshirt-grey.png",
            imageColor: "/menu/tshirt-color.png",
            GraphicComponent: RynoxGraphics.TShirt 
          },
          { 
            title: "Men's Polo Shirt", 
            href: "/polos", 
            price: "From ₹549",
            badge: "PREMIUM",
            imageGrey: "/menu/polo-grey.png",
            imageColor: "/menu/polo-color.png",
            GraphicComponent: RynoxGraphics.PoloShirt 
          },
          { 
            title: "Men's Oversized T Shirt", 
            href: "/trenz", 
            price: "From ₹699",
            badge: "TRENDING",
            imageGrey: "/menu/tshirt-grey.png",
            imageColor: "/menu/tshirt-color.png",
            GraphicComponent: RynoxGraphics.OversizedTee 
          },
          { 
            title: "Men's Full Sleeve T Shirt", 
            href: "/t-shirts", 
            price: "From ₹499",
            badge: "CLASSIC",
            imageGrey: "/menu/tshirt-grey.png",
            imageColor: "/menu/tshirt-color.png",
            GraphicComponent: RynoxGraphics.FullSleeveTee 
          },
          { 
            title: "Men's Hoodies & Sweatshirts", 
            href: "/hoodies-sweatshirts-jackets", 
            price: "From ₹1,199",
            badge: "WINTER TECH",
            imageGrey: "/menu/hoodie-grey.png",
            imageColor: "/menu/hoodie-color.png",
            GraphicComponent: RynoxGraphics.Hoodie 
          },
          { 
            title: "Men's Jackets", 
            href: "/hoodies-sweatshirts-jackets", 
            price: "From ₹1,899",
            badge: "RACING SPEC",
            imageGrey: "/menu/jacket-grey.png",
            imageColor: "/menu/jacket-color.png",
            GraphicComponent: RynoxGraphics.Jacket 
          },
        ]
      },
      {
        id: "womens",
        label: "Women's Clothing",
        items: [
          { 
            title: "Women's T Shirt", 
            href: "/t-shirts", 
            price: "From ₹399",
            badge: "ESSENTIAL",
            imageGrey: "/menu/tshirt-grey.png",
            imageColor: "/menu/tshirt-color.png",
            GraphicComponent: RynoxGraphics.TShirt 
          },
          { 
            title: "Women's Polo Shirt", 
            href: "/polos", 
            price: "From ₹549",
            badge: "PREMIUM",
            imageGrey: "/menu/polo-grey.png",
            imageColor: "/menu/polo-color.png",
            GraphicComponent: RynoxGraphics.PoloShirt 
          },
          { 
            title: "Women's Oversized T Shirt", 
            href: "/trenz", 
            price: "From ₹699",
            badge: "TRENDING",
            imageGrey: "/menu/tshirt-grey.png",
            imageColor: "/menu/tshirt-color.png",
            GraphicComponent: RynoxGraphics.OversizedTee 
          },
          { 
            title: "Women's Full Sleeve T Shirt", 
            href: "/t-shirts", 
            price: "From ₹499",
            badge: "CLASSIC",
            imageGrey: "/menu/tshirt-grey.png",
            imageColor: "/menu/tshirt-color.png",
            GraphicComponent: RynoxGraphics.FullSleeveTee 
          },
          { 
            title: "Women's Hoodies & Sweatshirts", 
            href: "/hoodies-sweatshirts-jackets", 
            price: "From ₹1,199",
            badge: "WINTER TECH",
            imageGrey: "/menu/hoodie-grey.png",
            imageColor: "/menu/hoodie-color.png",
            GraphicComponent: RynoxGraphics.Hoodie 
          },
          { 
            title: "Women's Jackets", 
            href: "/hoodies-sweatshirts-jackets", 
            price: "From ₹1,899",
            badge: "RACING SPEC",
            imageGrey: "/menu/jacket-grey.png",
            imageColor: "/menu/jacket-color.png",
            GraphicComponent: RynoxGraphics.Jacket 
          },
        ]
      },
      {
        id: "kids",
        label: "Kid's Clothing",
        items: [
          { 
            title: "Kid's T Shirt", 
            href: "/t-shirts", 
            price: "From ₹349",
            badge: "ORGANIC",
            imageGrey: "/menu/tshirt-grey.png",
            imageColor: "/menu/tshirt-color.png",
            GraphicComponent: RynoxGraphics.TShirt 
          },
          { 
            title: "Kid's Polo Shirt", 
            href: "/polos", 
            price: "From ₹499",
            badge: "JUNIOR",
            imageGrey: "/menu/polo-grey.png",
            imageColor: "/menu/polo-color.png",
            GraphicComponent: RynoxGraphics.PoloShirt 
          },
          { 
            title: "Kid's Oversized T Shirt", 
            href: "/trenz", 
            price: "From ₹549",
            badge: "PLAY WEAR",
            imageGrey: "/menu/tshirt-grey.png",
            imageColor: "/menu/tshirt-color.png",
            GraphicComponent: RynoxGraphics.OversizedTee 
          },
          { 
            title: "Kid's Full Sleeve T Shirt", 
            href: "/t-shirts", 
            price: "From ₹449",
            badge: "COMFORT",
            imageGrey: "/menu/tshirt-grey.png",
            imageColor: "/menu/tshirt-color.png",
            GraphicComponent: RynoxGraphics.FullSleeveTee 
          },
          { 
            title: "Kids's Hoodies & Sweatshirts", 
            href: "/hoodies-sweatshirts-jackets", 
            price: "From ₹899",
            badge: "WARMTH",
            imageGrey: "/menu/hoodie-grey.png",
            imageColor: "/menu/hoodie-color.png",
            GraphicComponent: RynoxGraphics.Hoodie 
          },
          { 
            title: "Kid's Jackets", 
            href: "/hoodies-sweatshirts-jackets", 
            price: "From ₹1,299",
            badge: "WEATHERPROOF",
            imageGrey: "/menu/jacket-grey.png",
            imageColor: "/menu/jacket-color.png",
            GraphicComponent: RynoxGraphics.Jacket 
          },
        ]
      }
    ]
  },

  // 3. JERSEYS (Shop By Sports: Cricket, Football, Basketball, Badminton, Volleyball, Cycling, Running, Esport)
  {
    id: "jerseys",
    label: "JERSEYS",
    hasChevron: true,
    subcategories: [
      { 
        title: "Cricket Jerseys", 
        href: "/custom-cricket-jerseys", 
        price: "Custom Kit",
        badge: "MATCHDAY",
        imageGrey: "/menu/polo-grey.png",
        imageColor: "/menu/polo-color.png",
        GraphicComponent: RynoxGraphics.Sportswear 
      },
      { 
        title: "Football Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "PRO EDITION",
        imageGrey: "/menu/tshirt-grey.png",
        imageColor: "/menu/tshirt-color.png",
        GraphicComponent: RynoxGraphics.Sportswear 
      },
      { 
        title: "Basketball Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "COURT FIT",
        imageGrey: "/menu/tshirt-grey.png",
        imageColor: "/menu/tshirt-color.png",
        GraphicComponent: RynoxGraphics.Sportswear 
      },
      { 
        title: "Badminton Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "FLEX DRY",
        imageGrey: "/menu/polo-grey.png",
        imageColor: "/menu/polo-color.png",
        GraphicComponent: RynoxGraphics.Sportswear 
      },
      { 
        title: "Volleyball Jersey", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "ACTIVE",
        imageGrey: "/menu/tshirt-grey.png",
        imageColor: "/menu/tshirt-color.png",
        GraphicComponent: RynoxGraphics.Sportswear 
      },
      { 
        title: "Cycling Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "AERO FIT",
        imageGrey: "/menu/jacket-grey.png",
        imageColor: "/menu/jacket-color.png",
        GraphicComponent: RynoxGraphics.Sportswear 
      },
      { 
        title: "Running Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "LIGHTWEIGHT",
        imageGrey: "/menu/tshirt-grey.png",
        imageColor: "/menu/tshirt-color.png",
        GraphicComponent: RynoxGraphics.Sportswear 
      },
      { 
        title: "Esport Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "PRO GAMER",
        imageGrey: "/menu/hoodie-grey.png",
        imageColor: "/menu/hoodie-color.png",
        GraphicComponent: RynoxGraphics.Sportswear 
      },
    ],
    subTabs: [
      {
        id: "shop-by-sports",
        label: "Shop By Sports",
        items: [
          { 
            title: "Cricket Jerseys", 
            href: "/custom-cricket-jerseys", 
            price: "Custom Kit",
            badge: "MATCHDAY",
            imageGrey: "/menu/polo-grey.png",
            imageColor: "/menu/polo-color.png",
            GraphicComponent: RynoxGraphics.Sportswear 
          },
          { 
            title: "Football Jerseys", 
            href: "/custom-sports-jerseys", 
            price: "Custom Kit",
            badge: "PRO EDITION",
            imageGrey: "/menu/tshirt-grey.png",
            imageColor: "/menu/tshirt-color.png",
            GraphicComponent: RynoxGraphics.Sportswear 
          },
          { 
            title: "Basketball Jerseys", 
            href: "/custom-sports-jerseys", 
            price: "Custom Kit",
            badge: "COURT FIT",
            imageGrey: "/menu/tshirt-grey.png",
            imageColor: "/menu/tshirt-color.png",
            GraphicComponent: RynoxGraphics.Sportswear 
          },
          { 
            title: "Badminton Jerseys", 
            href: "/custom-sports-jerseys", 
            price: "Custom Kit",
            badge: "FLEX DRY",
            imageGrey: "/menu/polo-grey.png",
            imageColor: "/menu/polo-color.png",
            GraphicComponent: RynoxGraphics.Sportswear 
          },
          { 
            title: "Volleyball Jersey", 
            href: "/custom-sports-jerseys", 
            price: "Custom Kit",
            badge: "ACTIVE",
            imageGrey: "/menu/tshirt-grey.png",
            imageColor: "/menu/tshirt-color.png",
            GraphicComponent: RynoxGraphics.Sportswear 
          },
          { 
            title: "Cycling Jerseys", 
            href: "/custom-sports-jerseys", 
            price: "Custom Kit",
            badge: "AERO FIT",
            imageGrey: "/menu/jacket-grey.png",
            imageColor: "/menu/jacket-color.png",
            GraphicComponent: RynoxGraphics.Sportswear 
          },
          { 
            title: "Running Jerseys", 
            href: "/custom-sports-jerseys", 
            price: "Custom Kit",
            badge: "LIGHTWEIGHT",
            imageGrey: "/menu/tshirt-grey.png",
            imageColor: "/menu/tshirt-color.png",
            GraphicComponent: RynoxGraphics.Sportswear 
          },
          { 
            title: "Esport Jerseys", 
            href: "/custom-sports-jerseys", 
            price: "Custom Kit",
            badge: "PRO GAMER",
            imageGrey: "/menu/hoodie-grey.png",
            imageColor: "/menu/hoodie-color.png",
            GraphicComponent: RynoxGraphics.Sportswear 
          },
        ]
      }
    ]
  },

  // 4. CORPORATE GIFTING (By Product, By Occasion, By Festival)
  {
    id: "corporate-gifting",
    label: "CORPORATE GIFTING",
    hasChevron: false,
    subcategories: [
      { 
        title: "Corporate Apparel", 
        href: "/category?type=corporate-apparel", 
        price: "Bulk Pricing",
        badge: "OFFICE",
        imageGrey: "/menu/polo-grey.png",
        imageColor: "/menu/polo-color.png",
        GraphicComponent: RynoxGraphics.PoloShirt 
      },
      { 
        title: "Custom Drinkware", 
        href: "/category?type=drinkware", 
        price: "Laser Engraved",
        badge: "ECO TECH",
        GraphicComponent: RynoxGraphics.Drinkware 
      },
      { 
        title: "Bags & Travel", 
        href: "/accessories", 
        price: "Embroidered",
        badge: "TRAVEL READY",
        GraphicComponent: RynoxGraphics.Accessories 
      },
      { 
        title: "Corporate Gift Hampers", 
        href: "/stationery-gifting-drinkware", 
        price: "Curated Set",
        badge: "VIP SUITE",
        GraphicComponent: RynoxGraphics.GiftHamper 
      },
      { 
        title: "Promotional Products", 
        href: "/stationery-gifting-drinkware", 
        price: "Quick Ship",
        badge: "EVENT READY",
        GraphicComponent: RynoxGraphics.BrandBadge 
      },
      { 
        title: "Eco-friendly Gifts", 
        href: "/stationery-gifting-drinkware", 
        price: "Sustainable",
        badge: "GREEN CHOICE",
        GraphicComponent: RynoxGraphics.BrandBadge 
      },
    ],
    subTabs: [
      {
        id: "by-product",
        label: "By Product",
        items: [
          { 
            title: "Corporate Apparel", 
            href: "/category?type=corporate-apparel", 
            price: "Bulk Pricing",
            badge: "OFFICE",
            imageGrey: "/menu/polo-grey.png",
            imageColor: "/menu/polo-color.png",
            GraphicComponent: RynoxGraphics.PoloShirt 
          },
          { 
            title: "Custom Drinkware", 
            href: "/category?type=drinkware", 
            price: "Laser Engraved",
            badge: "ECO TECH",
            GraphicComponent: RynoxGraphics.Drinkware 
          },
          { 
            title: "Bags & Travel", 
            href: "/accessories", 
            price: "Embroidered",
            badge: "TRAVEL READY",
            GraphicComponent: RynoxGraphics.Accessories 
          },
          { 
            title: "Corporate Gift Hampers", 
            href: "/stationery-gifting-drinkware", 
            price: "Curated Set",
            badge: "VIP SUITE",
            GraphicComponent: RynoxGraphics.GiftHamper 
          },
          { 
            title: "Promotional Products", 
            href: "/stationery-gifting-drinkware", 
            price: "Quick Ship",
            badge: "EVENT READY",
            GraphicComponent: RynoxGraphics.BrandBadge 
          },
          { 
            title: "Eco-friendly Gifts", 
            href: "/stationery-gifting-drinkware", 
            price: "Sustainable",
            badge: "GREEN CHOICE",
            GraphicComponent: RynoxGraphics.BrandBadge 
          },
        ]
      },
      {
        id: "by-occasion",
        label: "By Occasion",
        items: [
          { title: "Employee Welcome Kits", href: "/stationery-gifting-drinkware", price: "Custom Box", badge: "ONBOARDING", GraphicComponent: RynoxGraphics.GiftHamper },
          { title: "Employee Appreciation Gifts", href: "/stationery-gifting-drinkware", price: "Custom Crest", badge: "REWARD", GraphicComponent: RynoxGraphics.BrandBadge },
          { title: "Work Anniversary Gifts", href: "/stationery-gifting-drinkware", price: "Milestone", badge: "HONOR", GraphicComponent: RynoxGraphics.BrandBadge },
          { title: "Corporate Event Gifts", href: "/stationery-gifting-drinkware", price: "Engraved", badge: "SUMMIT", GraphicComponent: RynoxGraphics.Drinkware },
        ]
      },
      {
        id: "by-festival",
        label: "By Festival",
        items: [
          { title: "Diwali Corporate Gifts", href: "/stationery-gifting-drinkware", price: "Festive Box", badge: "FESTIVE", GraphicComponent: RynoxGraphics.GiftHamper },
          { title: "Christmas Corporate Gifts", href: "/stationery-gifting-drinkware", price: "Winter Hamper", badge: "HOLIDAY", GraphicComponent: RynoxGraphics.GiftHamper },
          { title: "New Year Corporate Gifts", href: "/stationery-gifting-drinkware", price: "2026 Set", badge: "NEW YEAR", GraphicComponent: RynoxGraphics.GiftHamper },
          { title: "Pongal Corporate Gifts", href: "/stationery-gifting-drinkware", price: "Traditional Box", badge: "HARVEST", GraphicComponent: RynoxGraphics.GiftHamper },
        ]
      }
    ]
  },

  // 5. CAPS (Embroidered Caps, Printed Caps)
  {
    id: "caps",
    label: "CAPS",
    hasChevron: true,
    subcategories: [
      { 
        title: "Embroidered Caps", 
        href: "/accessories", 
        imageGrey: "/menu/cap-embroidered-grey.png",
        imageColor: "/menu/cap-embroidered-color.png",
        price: "From ₹399",
        badge: "HIGH THREAD",
        GraphicComponent: RynoxGraphics.EmbroideredCap 
      },
      { 
        title: "Printed Caps", 
        href: "/accessories", 
        imageGrey: "/menu/cap-printed-grey.png",
        imageColor: "/menu/cap-printed-color.png",
        price: "From ₹349",
        badge: "HD PRINT",
        GraphicComponent: RynoxGraphics.PrintedCap 
      },
    ]
  },

  // 6. MERCH STUDIO (3D Custom Configurator, Custom Sports Jerseys, Teamwear)
  {
    id: "merch-studio",
    label: "MERCH STUDIO",
    hasChevron: true,
    subcategories: [
      { 
        title: "3D Configurator", 
        href: "/design-studio", 
        price: "Interactive",
        badge: "3D LIVE",
        imageGrey: "/menu/tshirt-grey.png",
        imageColor: "/menu/tshirt-color.png",
        GraphicComponent: RynoxGraphics.AtelierCraft 
      },
      { 
        title: "Custom Sports Kits", 
        href: "/custom-sports-jerseys", 
        price: "Team Kits",
        badge: "FULL CUSTOM",
        imageGrey: "/menu/polo-grey.png",
        imageColor: "/menu/polo-color.png",
        GraphicComponent: RynoxGraphics.Sportswear 
      },
      { 
        title: "Custom Headwear", 
        href: "/accessories", 
        price: "Caps & Beanies",
        badge: "STUDIO PICK",
        imageGrey: "/menu/cap-embroidered-grey.png",
        imageColor: "/menu/cap-embroidered-color.png",
        GraphicComponent: RynoxGraphics.EmbroideredCap 
      },
      { 
        title: "Custom Streetwear", 
        href: "/trenz", 
        price: "Street Fit",
        badge: "PREMIUM DROP",
        imageGrey: "/menu/hoodie-grey.png",
        imageColor: "/menu/hoodie-color.png",
        GraphicComponent: RynoxGraphics.Hoodie 
      },
      { 
        title: "Custom Jackets", 
        href: "/hoodies-sweatshirts-jackets", 
        price: "Outerwear",
        badge: "BESPOKE",
        imageGrey: "/menu/jacket-grey.png",
        imageColor: "/menu/jacket-color.png",
        GraphicComponent: RynoxGraphics.Jacket 
      },
      { 
        title: "Bulk Swatches", 
        href: "/category?type=corporate-apparel", 
        price: "Free Swatches",
        badge: "SAMPLES",
        GraphicComponent: RynoxGraphics.CaseStudies 
      },
    ]
  },

  // 7. SERVICES (DTG, DTF, Embroidery, Coloreel, Screen, UV, Engraving)
  {
    id: "services",
    label: "SERVICES",
    hasChevron: true,
    subcategories: [
      { title: "DTG Printing", href: "/services", price: "Direct-to-Garment", badge: "NO SETUP", GraphicComponent: RynoxGraphics.AtelierCraft },
      { title: "DTF Printing", href: "/services", price: "Film Transfers", badge: "DURABLE", GraphicComponent: RynoxGraphics.AtelierCraft },
      { title: "Embroidery Digitizing", href: "/services", price: "Precision Stitch", badge: "3D PUFF", GraphicComponent: RynoxGraphics.AtelierCraft },
      { title: "Coloreel Digitizing", href: "/services", price: "Thread Dyeing", badge: "UNLIMITED", GraphicComponent: RynoxGraphics.AtelierCraft },
      { title: "Screen Printing", href: "/services", price: "Bulk Quantity", badge: "ECONOMICAL", GraphicComponent: RynoxGraphics.AtelierCraft },
      { title: "UV Printing", href: "/services", price: "Hard Surface", badge: "HD CURE", GraphicComponent: RynoxGraphics.AtelierCraft },
      { title: "Engraving", href: "/services", price: "Fiber Laser", badge: "PERMANENT", GraphicComponent: RynoxGraphics.AtelierCraft },
    ]
  },

  // 8. BRANDS (Redbolt, Jack&Jones, Vero Moda, Turtle, Rare Rabbit)
  {
    id: "brands",
    label: "BRANDS",
    hasChevron: true,
    subcategories: [
      { title: "Redbolt", href: "/category?brand=redbolt", price: "Performance Tech", badge: "EXCLUSIVE", GraphicComponent: RynoxGraphics.BrandBadge },
      { title: "Jack&Jones", href: "/category?brand=jackjones", price: "European Denim", badge: "OFFICIAL", GraphicComponent: RynoxGraphics.BrandBadge },
      { title: "Vero Moda", href: "/category?brand=veromoda", price: "Contemporary Chic", badge: "OFFICIAL", GraphicComponent: RynoxGraphics.BrandBadge },
      { title: "Turtle", href: "/category?brand=turtle", price: "Refined Formalwear", badge: "OFFICIAL", GraphicComponent: RynoxGraphics.BrandBadge },
      { title: "Rare Rabbit", href: "/category?brand=rarerabbit", price: "Designer Casuals", badge: "OFFICIAL", GraphicComponent: RynoxGraphics.BrandBadge },
    ]
  },

  // 9. ABOUT (About Us, Case Studies, Blog, Gallery)
  {
    id: "about",
    label: "ABOUT",
    hasChevron: true,
    subcategories: [
      { title: "About Us", href: "/#about", price: "Our Atelier Story", badge: "CRAFT", GraphicComponent: RynoxGraphics.AtelierCraft },
      { title: "Case Studies", href: "/blogs", price: "Client Spotlights", badge: "STORIES", GraphicComponent: RynoxGraphics.CaseStudies },
      { title: "Blog", href: "/blogs", price: "Style & Industry", badge: "JOURNAL", GraphicComponent: RynoxGraphics.BlogJournal },
      { title: "Gallery", href: "/#gallery", price: "Factory & Studio", badge: "VISUAL", GraphicComponent: RynoxGraphics.GalleryCamera },
    ]
  },

  // 10. OUR STORES (Bangalore, Chennai, Marthandam, Trivandrum)
  {
    id: "our-stores",
    label: "OUR STORES",
    hasChevron: true,
    subcategories: [
      { title: "Bangalore", href: "/#stores", price: "Indiranagar 100ft", badge: "FLAGSHIP", GraphicComponent: RynoxGraphics.StoreLocation },
      { title: "Chennai", href: "/#stores", price: "Anna Nagar West", badge: "STUDIO", GraphicComponent: RynoxGraphics.StoreLocation },
      { title: "Marthandam", href: "/#stores", price: "Main Road Center", badge: "HUB", GraphicComponent: RynoxGraphics.StoreLocation },
      { title: "Trivandrum", href: "/#stores", price: "Technopark Express", badge: "CORP LOUNGE", GraphicComponent: RynoxGraphics.StoreLocation },
    ]
  },

  // 11. ACCOUNT
  {
    id: "account",
    label: "ACCOUNT",
    hasChevron: false,
    subcategories: [
      { title: "Sign In / Register", href: "/#account", price: "Instant Portal", badge: "PROFILE", GraphicComponent: RynoxGraphics.AtelierCraft },
      { title: "Track My Order", href: "/#track", price: "Live Dispatch", badge: "TRACKING", GraphicComponent: RynoxGraphics.CaseStudies },
      { title: "Saved Wishlist", href: "/#wishlist", price: "Your Curations", badge: "WISHLIST", GraphicComponent: RynoxGraphics.BrandBadge },
    ]
  },

  // 12. CART
  {
    id: "cart",
    label: "CART",
    hasChevron: false,
    subcategories: [
      { title: "View Bag (0 Items)", href: "/#cart", price: "Ready to Order", badge: "BAG", GraphicComponent: RynoxGraphics.Accessories },
      { title: "Checkout", href: "/#checkout", price: "Secure Express", badge: "PAYMENT", GraphicComponent: RynoxGraphics.GiftHamper },
      { title: "Bulk Inquiry", href: "/#bulk", price: "Custom Quote", badge: "B2B QUOTE", GraphicComponent: RynoxGraphics.CaseStudies },
    ]
  }
];

// =========================================================================
// MERGED FULLSCREEN SPLIT MENU COMPONENT
// Left: Exact Deployed Typography, Categories & Footer
// Right: Rynox-style 3-Column Product Grid with 3D Assets & Dynamic Hover
// =========================================================================

interface RynoxMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RynoxMenu({ isOpen, onClose }: RynoxMenuProps) {
  // Default to "shop" so Shop is pre-selected when opened
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("shop");
  const [activeSubTabId, setActiveSubTabId] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<"categories" | "products">("categories");

  // Close on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSelectedCategoryId("shop");
      setActiveSubTabId(null);
      setMobileView("categories");
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const activeCategory = YOODE_MENU_DATA.find((c) => c.id === selectedCategoryId) || YOODE_MENU_DATA[0];

  // Sync sub-tabs when category changes
  useEffect(() => {
    if (activeCategory?.subTabs && activeCategory.subTabs.length > 0) {
      setActiveSubTabId(activeCategory.subTabs[0].id);
    } else {
      setActiveSubTabId(null);
    }
  }, [selectedCategoryId, activeCategory]);

  if (!isOpen) return null;

  const activeSubTab = activeCategory?.subTabs?.find(tab => tab.id === activeSubTabId);
  const displayItems = activeCategory
    ? (activeSubTab ? activeSubTab.items : activeCategory.subcategories)
    : [];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[140] h-[100dvh] w-full bg-[#F8F5F0] overflow-hidden flex flex-col select-none"
      >
        {/* =========================================================================
            1. TOP HEADER BAR: Centered YOODE Logo + Top-Right Close Button
        ========================================================================= */}
        <div className="w-full h-14 sm:h-16 flex items-center justify-between px-6 sm:px-12 relative z-30 shrink-0 border-b border-[#E4DFD6]/70 bg-[#F8F5F0]">
          {/* Invisible spacer on left for perfect centering */}
          <div className="w-10 h-10" />

          {/* Centered YOODE Brand Title */}
          <div className="text-[#C13828] font-black text-2xl md:text-3xl tracking-wider uppercase">
            <span>YOODE</span>
          </div>

          {/* Right Close Button (X) */}
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-[#C13828] hover:scale-110 transition-transform cursor-pointer focus:outline-none"
            aria-label="Close navigation menu"
          >
            <X size={32} strokeWidth={2} />
          </button>
        </div>

        {/* =========================================================================
            2. MAIN CANVAS: RESPONSIVE SPLIT (Desktop: 50/50, Mobile: Drill-down)
        ========================================================================= */}
        <div className="flex-1 w-full flex flex-col lg:flex-row overflow-hidden relative z-20">
          
          {/* LEFT: CATEGORIES LIST (Desktop: 50% fixed, Mobile: Full View with smooth scroll) */}
          <div 
            className={`w-full lg:w-1/2 bg-[#F8F5F0] px-6 sm:px-10 lg:px-14 xl:px-16 py-4 md:py-3 flex-col justify-start lg:justify-center overflow-y-auto lg:overflow-hidden scrollbar-none [&::-webkit-scrollbar]:hidden ${
              mobileView === "categories" ? "flex" : "hidden lg:flex"
            }`}
          >
            <div className="flex flex-col gap-1 sm:gap-1.5 lg:gap-1 my-auto lg:my-0">
              {YOODE_MENU_DATA.map((cat) => {
                const isSelected = cat.id === selectedCategoryId;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategoryId(cat.id);
                      setMobileView("products");
                    }}
                    onMouseEnter={() => setSelectedCategoryId(cat.id)}
                    className={`group w-full flex items-center justify-between py-2 sm:py-2.5 lg:py-1.5 text-left transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? "text-[#C13828]"
                        : "text-[#9E9E9C] hover:text-[#C13828]"
                    }`}
                  >
                    <span 
                      className={`font-black uppercase tracking-[-0.03em] transition-all duration-150 leading-tight ${
                        isSelected 
                          ? "text-xl sm:text-2xl md:text-2xl lg:text-[1.75rem] xl:text-[2rem] text-[#C13828]"
                          : "text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl text-[#9E9E9C] group-hover:text-[#C13828]"
                      }`}
                    >
                      {cat.label}
                    </span>

                    {/* Chevron: Points right when selected */}
                    {cat.hasChevron && (
                      <ChevronRight 
                        size={isSelected ? 22 : 18} 
                        strokeWidth={isSelected ? 3 : 2}
                        className={`shrink-0 transition-all duration-200 ml-3 ${
                          isSelected 
                            ? "text-[#C13828] translate-x-1" 
                            : "opacity-40 text-current group-hover:opacity-75"
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: HIGH-VISIBILITY 3-COLUMN PRODUCT GRID (Desktop: 50%, Mobile: Dedicated Full View) */}
          <div 
            className={`w-full lg:w-1/2 bg-[#ECE7DE] border-t lg:border-t-0 lg:border-l border-[#D9D3C7] px-4 sm:px-8 lg:px-12 py-3 sm:py-5 lg:py-7 flex-col overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden relative ${
              mobileView === "products" ? "flex flex-1" : "hidden lg:flex"
            }`}
          >
            
            <motion.div 
              key={activeCategory.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col h-full"
            >
              {/* MOBILE TOP BAR (Back to Categories Button + Active Category Header) */}
              <div className="flex lg:hidden items-center justify-between pb-2.5 mb-2.5 border-b border-[#D6CFC4] shrink-0">
                <button
                  onClick={() => setMobileView("categories")}
                  className="flex items-center gap-1.5 text-xs font-black uppercase text-[#C13828] py-1.5 px-3 rounded-full bg-white border border-[#DDD6CA] shadow-2xs cursor-pointer active:scale-95 transition-transform"
                >
                  <ChevronLeft size={16} strokeWidth={2.5} />
                  <span>Categories</span>
                </button>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black uppercase tracking-wider text-[#111827]">
                    {activeCategory.label}
                  </span>
                  <span className="text-[11px] font-bold text-[#6B7280]">
                    ({displayItems.length})
                  </span>
                </div>
              </div>

              {/* DESKTOP CONTEXT HEADER */}
              <div className="hidden lg:flex items-center justify-between pb-3 mb-5 border-b border-[#D6CFC4] shrink-0">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#C13828]">
                    {activeCategory.label}
                  </span>
                  <span className="text-[11px] font-bold text-[#6B7280]">
                    • {displayItems.length} Options
                  </span>
                </div>
                {activeCategory.subTabs && (
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#9CA3AF]">
                    Filter by Group
                  </span>
                )}
              </div>

              {/* High-Contrast Sub-tabs if any (e.g. for Clothing: Men's / Women's / Kid's) */}
              {activeCategory.subTabs && activeCategory.subTabs.length > 0 && (
                <div className="flex items-center gap-2 mb-3 lg:mb-6 pb-2 overflow-x-auto scrollbar-none shrink-0">
                  {activeCategory.subTabs.map((tab) => {
                    const isTabActive = activeSubTabId === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveSubTabId(tab.id)}
                        className={`text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3.5 sm:px-4 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                          isTabActive
                            ? "bg-[#C13828] text-white shadow-sm"
                            : "bg-white text-[#374151] border border-[#DDD6CA] hover:bg-white shadow-2xs"
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* 
                RESPONSIVE STAGE SPOTLIGHT GRID
                - Mobile: Clean, proportioned 2-column grid without congestion
                - Desktop: 3-column grand showcase cards
              */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-4 lg:gap-x-5 gap-y-12 sm:gap-y-16 lg:gap-y-20 pt-10 sm:pt-14 lg:pt-20 pb-10 lg:pb-12 items-stretch justify-items-center">
                {displayItems.map((item, idx) => {
                  const Graphic = item.GraphicComponent;
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={onClose}
                      className="group relative w-full flex flex-col items-center justify-between text-center cursor-pointer bg-white rounded-2xl lg:rounded-[28px] pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-5 px-2 sm:px-3 lg:px-4 border border-[#DDD6CA] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-[#C13828] hover:shadow-[0_16px_36px_rgba(193,56,40,0.12)] hover:-translate-y-1.5 transition-all duration-300"
                    >
                      {/* STAGE SPOTLIGHT GLOW */}
                      <div className="absolute -top-10 sm:-top-14 lg:-top-18 left-1/2 -translate-x-1/2 w-28 sm:w-36 lg:w-48 h-28 sm:h-36 lg:h-48 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.5)_45%,transparent_75%)] blur-lg pointer-events-none group-hover:scale-125 transition-all duration-300 -z-10" />

                      {/* CAD DESIGN STAGE SHOWCASE */}
                      <div className="relative w-full h-24 sm:h-32 lg:h-40 -mt-10 sm:-mt-14 lg:-mt-22 flex flex-col items-center justify-end z-10">
                        <div className="relative w-full h-full flex items-center justify-center filter drop-shadow-[0_8px_12px_rgba(0,0,0,0.12)] lg:drop-shadow-[0_12px_16px_rgba(0,0,0,0.15)] group-hover:scale-105 lg:group-hover:scale-110 transition-all duration-300">
                          {item.imageGrey && item.imageColor ? (
                            <div className="relative w-full h-full flex items-center justify-center p-1">
                              {/* Default Cool Slate-Grey Technical Asset */}
                              <img 
                                src={item.imageGrey} 
                                alt={item.title} 
                                className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0" 
                              />
                              {/* Hover State: Vivid Saturated Colorway */}
                              <img 
                                src={item.imageColor} 
                                alt={item.title} 
                                className="w-full h-full object-contain absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-1" 
                              />
                            </div>
                          ) : Graphic ? (
                            <div className="w-full h-full flex items-center justify-center p-1">
                              <Graphic />
                            </div>
                          ) : null}
                        </div>

                        {/* Grounding Contact Shadow on Pedestal */}
                        <div className="w-16 sm:w-20 lg:w-28 h-1.5 sm:h-2 lg:h-2.5 bg-black/15 rounded-full blur-[3px] lg:blur-[4px] mx-auto mt-1 group-hover:scale-90 group-hover:bg-black/25 transition-all duration-300" />
                      </div>

                      {/* BOLD CENTERED PRODUCT TITLE & BADGE + PRICE/SUBTITLE */}
                      <div className="w-full mt-2 sm:mt-3 flex flex-col items-center justify-center gap-0.5 lg:gap-1">
                        <span className="text-[11px] sm:text-[12px] lg:text-[14px] font-black text-[#111827] tracking-tight group-hover:text-[#C13828] transition-colors leading-tight line-clamp-1">
                          {item.title}
                        </span>

                        <div className="flex items-center justify-center gap-1 lg:gap-1.5 flex-wrap">
                          {item.badge && (
                            <span className="px-1.5 py-0.5 text-[7px] lg:text-[8px] font-black uppercase tracking-wider bg-[#111827] text-white rounded-full group-hover:bg-[#C13828] transition-colors shadow-2xs">
                              {item.badge}
                            </span>
                          )}
                          {item.price ? (
                            <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-bold text-[#6B7280]">
                              {item.price}
                            </span>
                          ) : item.subtitle ? (
                            <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-medium text-[#6B7280]">
                              {item.subtitle}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      {/* FLOATING CIRCULAR BOTTOM ACTION BUTTON */}
                      <div className="absolute -bottom-3.5 lg:-bottom-4 left-1/2 -translate-x-1/2 w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-[#111827] text-white flex items-center justify-center shadow-md group-hover:bg-[#C13828] group-hover:scale-110 transition-all duration-200 z-20">
                        <ShoppingBag size={12} className="lg:w-3.5 lg:h-3.5" strokeWidth={2.5} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>

          </div>

        </div>

        {/* =========================================================================
            3. FOOTER BAR: Exact Deployed Secondary Links + Socials + Legal
        ========================================================================= */}
        <div className={`w-full shrink-0 border-t border-[#D9D3C7] bg-[#F8F5F0] px-4 sm:px-8 lg:px-16 py-3 md:py-4 flex-col lg:flex-row items-center justify-between gap-3 relative z-30 ${
          mobileView === "products" ? "hidden lg:flex" : "flex"
        }`}>
          
          {/* Left Footer: 4 Secondary Links + Copyright */}
          <div className="w-full lg:w-1/2 flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs md:text-[13px] font-bold tracking-wide text-[#C13828]">
              <Link 
                href="/#account" 
                onClick={onClose} 
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              >
                <UserPlus size={15} strokeWidth={2.5} />
                <span className="uppercase">LOGIN/REGISTER</span>
              </Link>
              <Link 
                href="/#track" 
                onClick={onClose} 
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              >
                <Truck size={15} strokeWidth={2.5} />
                <span className="uppercase">TRACK MY ORDER</span>
              </Link>
              <Link 
                href="/#returns" 
                onClick={onClose} 
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              >
                <RefreshCcw size={15} strokeWidth={2.5} />
                <span className="uppercase">RETURNS & EXCHANGES</span>
              </Link>
              <Link 
                href="/#help" 
                onClick={onClose} 
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              >
                <HelpCircle size={15} strokeWidth={2.5} />
                <span className="uppercase">HELP CENTER</span>
              </Link>
            </div>
            <div className="text-[11px] font-medium text-[#C13828]/70">
              <span>© {new Date().getFullYear()} Yoode. All rights reserved.</span>
            </div>
          </div>

          {/* Right Footer: CONNECT + Social Circles + Legal Links */}
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end gap-1.5">
            <div className="flex items-center gap-2 text-[#C13828]">
              <span className="text-xs uppercase tracking-widest font-black opacity-60 mr-2">CONNECT</span>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-7 h-7 rounded-full border border-[#C13828]/30 flex items-center justify-center hover:bg-[#C13828] hover:text-white hover:border-[#C13828] transition-all shadow-xs"
                aria-label="Facebook"
              >
                <FacebookIcon size={13} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-7 h-7 rounded-full border border-[#C13828]/30 flex items-center justify-center hover:bg-[#C13828] hover:text-white hover:border-[#C13828] transition-all shadow-xs"
                aria-label="Twitter"
              >
                <TwitterIcon size={13} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-7 h-7 rounded-full border border-[#C13828]/30 flex items-center justify-center hover:bg-[#C13828] hover:text-white hover:border-[#C13828] transition-all shadow-xs"
                aria-label="Instagram"
              >
                <InstagramIcon size={13} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-7 h-7 rounded-full border border-[#C13828]/30 flex items-center justify-center hover:bg-[#C13828] hover:text-white hover:border-[#C13828] transition-all shadow-xs"
                aria-label="YouTube"
              >
                <YoutubeIcon size={13} />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-medium text-[#C13828]/70">
              <Link href="/privacy" onClick={onClose} className="hover:underline"><span>Privacy Policy</span></Link>
              <Link href="/terms" onClick={onClose} className="hover:underline"><span>Terms of Service</span></Link>
              <Link href="/cookies" onClick={onClose} className="hover:underline"><span>Cookies Settings</span></Link>
            </div>
          </div>

        </div>

      </motion.div>
    </AnimatePresence>
  );
}
