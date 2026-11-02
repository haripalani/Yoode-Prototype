"use client";

import React from "react";

// =========================================================================
// SIGNATURE CAD TECHNICAL GRAPHICS SUITE (Precision Vector Tech-Pack CAD)
// Authentic apparel CAD flats and equipment illustrations with precision
// seam contours, double-needle stitch dashes, isometric panel articulation,
// and vibrant colorways referencing the signature snapback CAD style.
// =========================================================================

export const CADGraphics = {
  // =======================================================================
  // 1. CAPS & HEADWEAR (Direct reference to uploaded CAD Snapback)
  // =======================================================================

  // --- EMBROIDERED CAP (Exact reference to user snapback CAD) ---
  EmbroideredCap: () => (
    <svg 
      viewBox="0 0 200 200" 
      className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.22)]"
    >
      <defs>
        {/* Subtle highlights for 3D crown curvature */}
        <linearGradient id="crownShade" x1="0.2" y1="0.1" x2="0.8" y2="0.9">
          <stop offset="0%" stopColor="#2D3748" />
          <stop offset="50%" stopColor="#222B36" />
          <stop offset="100%" stopColor="#181F28" />
        </linearGradient>
        <linearGradient id="visorShade" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#FF4D4D" />
          <stop offset="45%" stopColor="#E63946" />
          <stop offset="100%" stopColor="#B31B27" />
        </linearGradient>
      </defs>

      {/* Under-visor / Inner Sweatband Arc */}
      <path 
        d="M 90 128 C 105 133 138 132 154 116 C 158 123 150 134 136 137 C 112 142 94 135 90 128 Z" 
        fill="#141920" 
      />

      {/* Main Visor / Brim (Isometric 3/4 Flat-Brim Snapback) */}
      <path 
        d="M 48 98 C 48 98 22 132 16 142 C 10 152 14 162 30 166 C 58 173 118 174 154 134 C 152 131 144 122 144 122 C 122 136 78 135 56 122 C 50 118 48 106 48 98 Z" 
        fill="url(#visorShade)" 
      />

      {/* 6 Concentric Curved Stitch Arcs on Brim */}
      <path d="M 23 145 C 38 155 92 164 144 134" stroke="white" strokeWidth="1.2" fill="none" opacity="0.95" />
      <path d="M 28 149 C 44 158 96 167 140 138" stroke="white" strokeWidth="1.2" fill="none" opacity="0.95" />
      <path d="M 33 153 C 48 161 100 169 135 142" stroke="white" strokeWidth="1.2" fill="none" opacity="0.95" />
      <path d="M 38 157 C 54 164 104 171 129 146" stroke="white" strokeWidth="1.2" fill="none" opacity="0.95" />
      <path d="M 44 161 C 60 167 106 172 122 150" stroke="white" strokeWidth="1.2" fill="none" opacity="0.95" />
      <path d="M 52 164 C 68 169 104 172 114 155" stroke="white" strokeWidth="1.2" fill="none" opacity="0.95" />

      {/* Structured Crown (6-Panel High Profile) */}
      <path 
        d="M 48 98 C 50 48 80 24 124 24 C 165 24 186 52 186 102 C 186 114 172 126 148 126 C 112 126 56 122 48 98 Z" 
        fill="url(#crownShade)" 
      />

      {/* Crown Seam Outlines & Double-Needle White Stitching */}
      {/* Center Front Seam (Double Line) */}
      <line x1="123" y1="28" x2="72" y2="122" stroke="white" strokeWidth="1.4" />
      <line x1="125" y1="28" x2="74" y2="122" stroke="white" strokeWidth="1.4" />

      {/* Side Seams */}
      <path d="M 124 28 C 142 50 148 85 142 126" stroke="white" strokeWidth="1.4" fill="none" />
      <path d="M 126 28 C 144 50 150 85 144 126" stroke="white" strokeWidth="1.4" fill="none" />

      {/* Rear Seam */}
      <path d="M 126 28 C 160 52 178 78 184 106" stroke="white" strokeWidth="1.4" fill="none" />
      <path d="M 128 28 C 162 52 180 78 186 106" stroke="white" strokeWidth="1.4" fill="none" />

      {/* Far Left Seam */}
      <path d="M 122 28 C 90 46 64 74 50 98" stroke="white" strokeWidth="1.4" fill="none" />

      {/* Crown Top Button */}
      <ellipse cx="124" cy="27" rx="6" ry="4.5" fill="#222B36" stroke="white" strokeWidth="1.4" />

      {/* Embroidered Eyelets on Crown Panels */}
      {/* Front Left Panel Eyelet */}
      <circle cx="72" cy="54" r="3.2" fill="none" stroke="white" strokeWidth="1.2" />
      <circle cx="72" cy="54" r="1.1" fill="white" />
      {/* Center Front Right Eyelet */}
      <circle cx="112" cy="62" r="3.2" fill="none" stroke="white" strokeWidth="1.2" />
      <circle cx="112" cy="62" r="1.1" fill="white" />
      {/* Side Right Eyelet */}
      <circle cx="158" cy="60" r="3.2" fill="none" stroke="white" strokeWidth="1.2" />
      <circle cx="158" cy="60" r="1.1" fill="white" />

      {/* SIGNATURE 3D WIREFRAME CUBE LOGO (Isometric Front Emblem) */}
      <g transform="translate(64, 80)">
        {/* Isometric Cube Outer Outline */}
        <polygon points="16,0 32,8 32,26 16,34 0,26 0,8" fill="none" stroke="white" strokeWidth="2.2" strokeLinejoin="round" />
        {/* Inner Cube Edges */}
        <line x1="16" y1="0" x2="16" y2="18" stroke="white" strokeWidth="2" />
        <line x1="0" y1="8" x2="16" y2="18" stroke="white" strokeWidth="2" />
        <line x1="32" y1="8" x2="16" y2="18" stroke="white" strokeWidth="2" />
        <line x1="16" y1="18" x2="16" y2="34" stroke="white" strokeWidth="2" />

        {/* Inner Hollow Box Facets for 3D Depth */}
        <polygon points="16,4 27,9.5 16,15 5,9.5" fill="none" stroke="white" strokeWidth="1.2" />
        <polygon points="5,11 15,16 15,29 5,23.5" fill="none" stroke="white" strokeWidth="1.2" />
        <polygon points="27,11 17,16 17,29 27,23.5" fill="none" stroke="white" strokeWidth="1.2" />
      </g>
    </svg>
  ),

  // --- PRINTED CAP (Curved Visor 5-Panel with Vibrant Royal Blue & White) ---
  PrintedCap: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(37,99,235,0.22)]">
      <defs>
        <linearGradient id="capBlueGrad" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
      </defs>
      {/* Crown */}
      <path d="M 38 108 C 42 52 74 26 122 26 C 166 26 182 56 180 110 C 180 120 156 128 126 128 C 86 128 44 122 38 108 Z" fill="url(#capBlueGrad)" />
      {/* Curved Visor */}
      <path d="M 22 116 C 30 112 120 114 162 116 C 168 130 144 156 116 156 C 68 156 30 142 22 116 Z" fill="#1E3A8A" />
      <path d="M 28 122 C 54 136 110 140 148 126" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M 38 132 C 64 144 104 148 136 136" stroke="white" strokeWidth="1.5" fill="none" />
      {/* Seam Stitching */}
      <line x1="122" y1="28" x2="122" y2="60" stroke="white" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="122" cy="27" r="5" fill="white" />
      {/* Front Structured Graphic Badge */}
      <rect x="92" y="64" width="60" height="38" rx="6" fill="#F8FAFC" stroke="white" strokeWidth="2" />
      <polygon points="122,70 136,83 122,96 108,83" fill="#1D4ED8" />
      <text x="122" y="87" fill="white" fontSize="10" fontWeight="900" textAnchor="middle">YD</text>
    </svg>
  ),

  // --- BUCKET HAT (Streetwear sloped brim) ---
  BucketHat: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(20,83,45,0.22)]">
      <defs>
        <linearGradient id="bucketGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#15803D" />
          <stop offset="50%" stopColor="#166534" />
          <stop offset="100%" stopColor="#14532D" />
        </linearGradient>
      </defs>
      {/* Crown Top Oval */}
      <ellipse cx="100" cy="50" rx="46" ry="18" fill="#166534" stroke="white" strokeWidth="1.5" />
      {/* Crown Wall */}
      <path d="M 54 50 L 44 98 C 76 112 124 112 156 98 L 146 50 Z" fill="url(#bucketGrad)" stroke="white" strokeWidth="1.5" />
      {/* Sloped Downward Brim */}
      <path d="M 44 98 C 22 120 18 136 28 144 C 64 164 136 164 172 144 C 182 136 178 120 156 98 Z" fill="#14532D" stroke="white" strokeWidth="1.5" />
      {/* 360-degree Stitch Rings on Brim */}
      <path d="M 34 116 C 68 136 132 136 166 116" stroke="white" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
      <path d="M 30 128 C 66 148 134 148 170 128" stroke="white" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
      {/* Front Embroidered Patch */}
      <rect x="85" y="68" width="30" height="18" rx="3" fill="#F8FAFC" stroke="white" strokeWidth="1" />
      <line x1="92" y1="77" x2="108" y2="77" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),

  // =======================================================================
  // 2. APPAREL & CLOTHING CAD FLATS
  // =======================================================================

  // --- POLO SHIRT (Corporate & Premium Navy/Scarlet) ---
  PoloShirt: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(15,23,42,0.22)]">
      <defs>
        <linearGradient id="poloColorGrad" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="50%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
      </defs>
      {/* Body & Short Sleeves */}
      <path 
        d="M 64 36 L 136 36 L 180 66 L 158 100 L 144 88 L 144 174 L 56 174 L 56 88 L 42 100 L 20 66 Z" 
        fill="url(#poloColorGrad)" 
      />
      {/* Ribbed Contrast Collar (Scarlet / White Tipped) */}
      <path d="M 64 36 L 86 64 L 100 48 L 114 64 L 136 36" stroke="#E63946" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M 66 38 L 86 62 L 100 48 L 114 62 L 134 38" stroke="white" strokeWidth="1.2" fill="none" />
      {/* Placket with Buttons */}
      <rect x="93" y="48" width="14" height="48" rx="2" fill="#E63946" stroke="white" strokeWidth="1.5" />
      <circle cx="100" cy="60" r="2.5" fill="white" />
      <circle cx="100" cy="74" r="2.5" fill="white" />
      <circle cx="100" cy="88" r="2.5" fill="white" />
      {/* Sleeve Seams & Contrast Rib Cuffs */}
      <line x1="26" y1="74" x2="40" y2="96" stroke="#E63946" strokeWidth="3" />
      <line x1="174" y1="74" x2="160" y2="96" stroke="#E63946" strokeWidth="3" />
      <line x1="64" y1="36" x2="56" y2="88" stroke="white" strokeWidth="1.4" strokeDasharray="3 2" />
      <line x1="136" y1="36" x2="144" y2="88" stroke="white" strokeWidth="1.4" strokeDasharray="3 2" />
      {/* Hem Stitch */}
      <line x1="56" y1="166" x2="144" y2="166" stroke="white" strokeWidth="1.5" strokeDasharray="4 2" />
      {/* Chest Hexagon Badge */}
      <polygon points="120,68 127,64 134,68 134,78 127,82 120,78" fill="none" stroke="white" strokeWidth="1.6" />
      <line x1="124" y1="73" x2="130" y2="73" stroke="white" strokeWidth="1.4" />
    </svg>
  ),

  // --- T-SHIRT (Classic Crewneck in Royal Cobalt Blue) ---
  TShirt: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(29,78,216,0.22)]">
      <defs>
        <linearGradient id="teeBlueGrad" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
      </defs>
      <path 
        d="M 66 34 C 78 46 122 46 134 34 L 178 64 L 156 98 L 144 86 L 144 174 L 56 174 L 56 86 L 44 98 L 22 64 Z" 
        fill="url(#teeBlueGrad)" 
      />
      {/* Thick Ribbed Crewneck Collar */}
      <path d="M 66 34 C 80 50 120 50 134 34" stroke="white" strokeWidth="3.5" fill="none" />
      <path d="M 68 37 C 82 52 118 52 132 37" stroke="#1E3A8A" strokeWidth="1.2" fill="none" />
      {/* Raglan / Shoulder Seams */}
      <line x1="66" y1="34" x2="56" y2="86" stroke="white" strokeWidth="1.4" strokeDasharray="3 2" />
      <line x1="134" y1="34" x2="144" y2="86" stroke="white" strokeWidth="1.4" strokeDasharray="3 2" />
      <line x1="28" y1="72" x2="42" y2="94" stroke="white" strokeWidth="2.5" />
      <line x1="172" y1="72" x2="158" y2="94" stroke="white" strokeWidth="2.5" />
      {/* Hem Twin-Needle Stitch */}
      <line x1="56" y1="166" x2="144" y2="166" stroke="white" strokeWidth="1.6" strokeDasharray="4 2" />
      {/* Minimal Tech Crest on Chest */}
      <rect x="116" y="66" width="18" height="12" rx="2" fill="none" stroke="white" strokeWidth="1.5" />
      <line x1="120" y1="72" x2="130" y2="72" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  // --- OVERSIZED T-SHIRT (Drop Shoulder Streetwear in Terracotta / Amber) ---
  OversizedTee: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(194,65,12,0.22)]">
      <defs>
        <linearGradient id="overGrad" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="50%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#9A3412" />
        </linearGradient>
      </defs>
      {/* Wide Boxy Silhouette */}
      <path 
        d="M 54 36 C 72 48 128 48 146 36 L 194 74 L 168 116 L 154 102 L 154 176 L 46 176 L 46 102 L 32 116 L 6 74 Z" 
        fill="url(#overGrad)" 
      />
      {/* Chunky High Rib Collar */}
      <path d="M 54 36 C 74 52 126 52 146 36" stroke="white" strokeWidth="4.2" fill="none" />
      {/* Deep Drop Shoulder Seam */}
      <path d="M 54 36 L 34 94 M 146 36 L 166 94" stroke="white" strokeWidth="1.6" strokeDasharray="4 2" fill="none" />
      {/* Long Wide Sleeve Hem */}
      <line x1="12" y1="84" x2="28" y2="112" stroke="white" strokeWidth="3" />
      <line x1="188" y1="84" x2="172" y2="112" stroke="white" strokeWidth="3" />
      {/* Bottom Hem Stitch */}
      <line x1="46" y1="168" x2="154" y2="168" stroke="white" strokeWidth="2" strokeDasharray="5 2.5" />
      {/* Center Streetwear Wireframe Typography */}
      <rect x="80" y="86" width="40" height="20" rx="3" fill="none" stroke="white" strokeWidth="1.8" />
      <text x="100" y="100" fill="white" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="2">YOODE</text>
    </svg>
  ),

  // --- FULL SLEEVE TEE (Emerald Green Athletic Long-Sleeve) ---
  FullSleeveTee: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(5,150,105,0.22)]">
      <defs>
        <linearGradient id="fullGreenGrad" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#064E3B" />
        </linearGradient>
      </defs>
      {/* Body & Full Tapered Sleeves */}
      <path 
        d="M 66 34 C 78 46 122 46 134 34 L 180 70 L 166 162 L 148 160 L 144 90 L 144 174 L 56 174 L 56 90 L 52 160 L 34 162 L 20 70 Z" 
        fill="url(#fullGreenGrad)" 
      />
      {/* Crewneck Collar */}
      <path d="M 66 34 C 80 50 120 50 134 34" stroke="white" strokeWidth="3.5" fill="none" />
      {/* Sleeve Seams & Ribbed Wrist Cuffs */}
      <line x1="66" y1="34" x2="56" y2="90" stroke="white" strokeWidth="1.4" strokeDasharray="3 2" />
      <line x1="134" y1="34" x2="144" y2="90" stroke="white" strokeWidth="1.4" strokeDasharray="3 2" />
      <line x1="34" y1="154" x2="52" y2="152" stroke="white" strokeWidth="3" />
      <line x1="166" y1="154" x2="148" y2="152" stroke="white" strokeWidth="3" />
      {/* Hem Stitch */}
      <line x1="56" y1="166" x2="144" y2="166" stroke="white" strokeWidth="1.6" strokeDasharray="4 2" />
      {/* Arm Stripe / Panel */}
      <line x1="28" y1="80" x2="40" y2="136" stroke="white" strokeWidth="1.5" strokeDasharray="4 2" />
      <line x1="172" y1="80" x2="160" y2="136" stroke="white" strokeWidth="1.5" strokeDasharray="4 2" />
    </svg>
  ),

  // --- HOODIE (Streetwear Structured Pullover in Charcoal Slate) ---
  Hoodie: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(30,41,59,0.22)]">
      <defs>
        <linearGradient id="hoodieColorGrad" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="50%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
      </defs>
      {/* Hood, Body & Sleeves */}
      <path 
        d="M 60 48 C 66 22 134 22 140 48 L 186 78 L 170 166 L 152 162 L 146 94 L 146 178 L 54 178 L 54 94 L 48 162 L 30 166 L 14 78 Z" 
        fill="url(#hoodieColorGrad)" 
      />
      {/* Crossover Structured Hood Opening */}
      <path d="M 66 52 C 84 32 116 32 134 52" stroke="white" strokeWidth="3.5" fill="none" />
      {/* Hanging Drawstrings with Metal Aglets */}
      <line x1="90" y1="56" x2="86" y2="94" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="86" cy="95" r="2.2" fill="#E63946" />
      <line x1="110" y1="56" x2="114" y2="94" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="114" cy="95" r="2.2" fill="#E63946" />
      {/* Kangaroo Pouch Pocket with Reinforced Double Stitch */}
      <path d="M 66 128 L 80 108 L 120 108 L 134 128 L 134 164 L 66 164 Z" fill="none" stroke="white" strokeWidth="2.4" />
      <line x1="68" y1="130" x2="79" y2="112" stroke="white" strokeWidth="1.2" strokeDasharray="3 1.5" />
      <line x1="132" y1="130" x2="121" y2="112" stroke="white" strokeWidth="1.2" strokeDasharray="3 1.5" />
      {/* Ribbed Hem & Cuffs */}
      <line x1="54" y1="168" x2="146" y2="168" stroke="white" strokeWidth="2.5" />
      <line x1="30" y1="156" x2="48" y2="154" stroke="white" strokeWidth="3" />
      <line x1="170" y1="156" x2="152" y2="154" stroke="white" strokeWidth="3" />
    </svg>
  ),

  // --- JACKET (Technical Windbreaker / Racing Spec Bomber) ---
  Jacket: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(220,38,38,0.22)]">
      <defs>
        <linearGradient id="jacketColorGrad" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="50%" stopColor="#B91C1C" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </linearGradient>
      </defs>
      {/* Body & Sleeves */}
      <path 
        d="M 66 30 C 78 20 122 20 134 30 L 182 66 L 164 104 L 150 92 L 150 176 L 50 176 L 50 92 L 36 104 L 18 66 Z" 
        fill="url(#jacketColorGrad)" 
      />
      {/* High Stand Tech Collar */}
      <path d="M 68 30 C 82 22 118 22 132 30 L 130 40 C 116 32 84 32 70 40 Z" fill="#0F172A" stroke="white" strokeWidth="1.2" />
      {/* Center Metal Zipper Track */}
      <line x1="100" y1="40" x2="100" y2="176" stroke="white" strokeWidth="3" />
      <rect x="97" y="60" width="6" height="10" rx="1.5" fill="#E2E8F0" stroke="#0F172A" strokeWidth="0.8" />
      {/* Zip Chest Pockets & Seams */}
      <line x1="68" y1="74" x2="88" y2="74" stroke="white" strokeWidth="2" />
      <line x1="66" y1="30" x2="50" y2="92" stroke="white" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="134" y1="30" x2="150" y2="92" stroke="white" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="26" y1="78" x2="42" y2="98" stroke="white" strokeWidth="2.5" />
      <line x1="174" y1="78" x2="158" y2="98" stroke="white" strokeWidth="2.5" />
      {/* Heavy Ribbed Hem */}
      <line x1="50" y1="168" x2="150" y2="168" stroke="white" strokeWidth="2.5" />
    </svg>
  ),

  // --- PANTS / JOGGERS (Articulated Cargo Pants CAD) ---
  Pants: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(15,23,42,0.22)]">
      <defs>
        <linearGradient id="pantsGrad" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="50%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      {/* Waistband & Articulated Legs */}
      <path 
        d="M 54 28 L 146 28 L 158 178 L 126 178 L 100 88 L 74 178 L 42 178 Z" 
        fill="url(#pantsGrad)" 
      />
      {/* Elastic Waistband with Drawcords */}
      <line x1="54" y1="42" x2="146" y2="42" stroke="white" strokeWidth="2.8" />
      <line x1="100" y1="42" x2="100" y2="82" stroke="white" strokeWidth="1.8" />
      <circle cx="95" cy="48" r="1.5" fill="white" />
      <circle cx="105" cy="48" r="1.5" fill="white" />
      <line x1="95" y1="48" x2="92" y2="64" stroke="white" strokeWidth="1.5" />
      <line x1="105" y1="48" x2="108" y2="64" stroke="white" strokeWidth="1.5" />
      {/* Side Cargo Pockets with Flap */}
      <rect x="46" y="96" width="30" height="34" rx="3" fill="#1E293B" stroke="white" strokeWidth="1.6" />
      <line x1="46" y1="104" x2="76" y2="104" stroke="white" strokeWidth="1.8" />
      <rect x="124" y="96" width="30" height="34" rx="3" fill="#1E293B" stroke="white" strokeWidth="1.6" />
      <line x1="124" y1="104" x2="154" y2="104" stroke="white" strokeWidth="1.8" />
      {/* Ankle Cuffs */}
      <line x1="44" y1="170" x2="72" y2="170" stroke="white" strokeWidth="2.5" />
      <line x1="128" y1="170" x2="156" y2="170" stroke="white" strokeWidth="2.5" />
    </svg>
  ),

  // =======================================================================
  // 3. SPORTS JERSEYS (Shop By Sports)
  // =======================================================================

  // --- CRICKET JERSEY (India Blue & Bright Orange Slash) ---
  CricketJersey: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(2,132,199,0.22)]">
      <defs>
        <linearGradient id="cricketGrad" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="50%" stopColor="#0369A1" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>
      </defs>
      <path 
        d="M 64 36 L 136 36 L 180 66 L 158 100 L 144 88 L 144 174 L 56 174 L 56 88 L 42 100 L 20 66 Z" 
        fill="url(#cricketGrad)" 
      />
      {/* Vibrant Saffron Orange Shoulders & Raglan Cut */}
      <polygon points="64,36 100,48 136,36 120,62 80,62" fill="#F97316" />
      <path d="M 64 36 L 86 64 L 100 48 L 114 64 L 136 36" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
      <rect x="94" y="48" width="12" height="38" rx="2" fill="#0369A1" stroke="white" strokeWidth="1.5" />
      <circle cx="100" cy="58" r="2" fill="white" />
      <circle cx="100" cy="72" r="2" fill="white" />
      {/* Tri-Color Slash Lines across chest */}
      <line x1="56" y1="100" x2="144" y2="130" stroke="#F97316" strokeWidth="4" />
      <line x1="56" y1="108" x2="144" y2="138" stroke="white" strokeWidth="2.5" />
      <line x1="56" y1="114" x2="144" y2="144" stroke="#16A34A" strokeWidth="4" />
      {/* Chest Crest */}
      <circle cx="78" cy="76" r="6" fill="#FBBF24" stroke="white" strokeWidth="1.2" />
    </svg>
  ),

  // --- FOOTBALL JERSEY (Crimson Red & Black Vertical Striations) ---
  FootballJersey: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(220,38,38,0.22)]">
      <defs>
        <linearGradient id="footballGrad" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="50%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
      </defs>
      <path 
        d="M 66 34 L 134 34 L 178 64 L 156 98 L 144 86 L 144 174 L 56 174 L 56 86 L 44 98 L 22 64 Z" 
        fill="url(#footballGrad)" 
      />
      {/* Black Vertical Club Stripes */}
      <rect x="74" y="56" width="12" height="118" fill="#18181B" />
      <rect x="94" y="56" width="12" height="118" fill="#18181B" />
      <rect x="114" y="56" width="12" height="118" fill="#18181B" />
      {/* V-Neck Sharp Collar */}
      <polygon points="66,34 100,56 134,34 100,44" fill="#18181B" stroke="white" strokeWidth="1.5" />
      {/* Sleeve Trim */}
      <line x1="28" y1="72" x2="42" y2="94" stroke="#18181B" strokeWidth="4" />
      <line x1="172" y1="72" x2="158" y2="94" stroke="#18181B" strokeWidth="4" />
      {/* Center Gold Sponsor Chest Block */}
      <rect x="70" y="102" width="60" height="18" rx="2" fill="#18181B" stroke="#FBBF24" strokeWidth="1.5" />
      <text x="100" y="115" fill="#FBBF24" fontSize="9" fontWeight="900" textAnchor="middle">FLY YOODE</text>
    </svg>
  ),

  // --- BASKETBALL JERSEY (Sleeveless Tank in Gold & Purple) ---
  BasketballJersey: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(234,179,8,0.22)]">
      <defs>
        <linearGradient id="bballGrad" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#FACC15" />
          <stop offset="50%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#CA8A04" />
        </linearGradient>
      </defs>
      {/* Sleeveless Cut Body */}
      <path 
        d="M 64 36 C 76 50 124 50 136 36 L 152 48 C 136 78 136 102 144 116 L 144 174 L 56 174 L 56 116 C 64 102 64 78 48 48 Z" 
        fill="url(#bballGrad)" 
      />
      {/* Purple Ribbed Neck & Armholes */}
      <path d="M 64 36 C 78 52 122 52 136 36" stroke="#6B21A8" strokeWidth="4" fill="none" />
      <path d="M 48 48 C 64 78 64 102 56 116" stroke="#6B21A8" strokeWidth="4" fill="none" />
      <path d="M 152 48 C 136 78 136 102 144 116" stroke="#6B21A8" strokeWidth="4" fill="none" />
      {/* Side Color Panel */}
      <path d="M 56 116 L 56 174 L 66 174 L 66 116 Z" fill="#6B21A8" />
      <path d="M 144 116 L 144 174 L 134 174 L 134 116 Z" fill="#6B21A8" />
      {/* Front Jersey Number '24' */}
      <text x="100" y="122" fill="#6B21A8" stroke="white" strokeWidth="1" fontSize="36" fontWeight="900" textAnchor="middle">24</text>
    </svg>
  ),

  // --- CYCLING JERSEY (Full-Zip Aero Fit with Stand Collar) ---
  CyclingJersey: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(13,148,136,0.22)]">
      <defs>
        <linearGradient id="cycleGrad" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#14B8A6" />
          <stop offset="50%" stopColor="#0D9488" />
          <stop offset="100%" stopColor="#115E59" />
        </linearGradient>
      </defs>
      <path 
        d="M 72 32 C 84 26 116 26 128 32 L 176 60 L 156 94 L 142 84 L 142 174 L 58 174 L 58 84 L 44 94 L 24 60 Z" 
        fill="url(#cycleGrad)" 
      />
      {/* High Aerodynamic Stand Collar */}
      <path d="M 72 32 C 84 26 116 26 128 32 L 126 40 C 114 34 86 34 74 40 Z" fill="#0F172A" stroke="white" strokeWidth="1" />
      {/* Full Front Zipper with Cam-Lock Puller */}
      <line x1="100" y1="40" x2="100" y2="174" stroke="white" strokeWidth="2.5" />
      <circle cx="100" cy="56" r="2.5" fill="#E2E8F0" />
      {/* Triple Rear Cargo Pockets Stitch Outline */}
      <rect x="66" y="134" width="68" height="34" rx="2" fill="none" stroke="white" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="88" y1="134" x2="88" y2="168" stroke="white" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="112" y1="134" x2="112" y2="168" stroke="white" strokeWidth="2" strokeDasharray="3 2" />
    </svg>
  ),

  // --- BADMINTON JERSEY (Electric Indigo & Neon Lime Speed Wing Design) ---
  BadmintonJersey: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(79,70,229,0.25)]">
      <defs>
        <linearGradient id="badmintonGrad" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="50%" stopColor="#4338CA" />
          <stop offset="100%" stopColor="#312E81" />
        </linearGradient>
      </defs>
      <path 
        d="M 68 34 L 132 34 L 176 64 L 154 96 L 142 86 L 142 174 L 58 174 L 58 86 L 46 96 L 24 64 Z" 
        fill="url(#badmintonGrad)" 
      />
      {/* Neon Lime Sharp Aero Asymmetric Wing */}
      <polygon points="68,34 100,52 132,34 114,64 68,54" fill="#84CC16" />
      <path d="M 58 100 L 142 74 L 142 90 L 58 116 Z" fill="#84CC16" opacity="0.9" />
      <path d="M 58 122 L 142 96 L 142 102 L 58 128 Z" fill="white" opacity="0.8" />
      {/* V-Neck Rib Collar */}
      <polygon points="68,34 100,58 132,34" fill="none" stroke="white" strokeWidth="2.5" />
      {/* Shuttlecock Speed Silhouette Crest */}
      <circle cx="78" cy="74" r="3.5" fill="#FACC15" />
      <path d="M 78 77 L 72 90 L 84 90 Z" fill="none" stroke="#FACC15" strokeWidth="1.2" />
    </svg>
  ),

  // --- VOLLEYBALL JERSEY (Dynamic Atlantic Navy & Coral Spike Arc) ---
  VolleyballJersey: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(244,63,94,0.22)]">
      <defs>
        <linearGradient id="volleyballGrad" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="50%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
      </defs>
      <path 
        d="M 68 36 L 132 36 L 172 62 L 152 92 L 142 82 L 142 174 L 58 174 L 58 82 L 48 92 L 28 62 Z" 
        fill="url(#volleyballGrad)" 
      />
      {/* Dynamic Coral High-Jump Arc Panels */}
      <path d="M 58 82 C 90 92 110 130 142 144 L 142 174 L 126 174 C 98 152 82 122 58 114 Z" fill="#F43F5E" />
      <path d="M 58 82 C 90 92 110 130 142 144" stroke="white" strokeWidth="2" fill="none" />
      {/* Cap Sleeve Trim */}
      <line x1="28" y1="62" x2="48" y2="92" stroke="#F43F5E" strokeWidth="4" />
      <line x1="172" y1="62" x2="152" y2="92" stroke="#F43F5E" strokeWidth="4" />
      {/* Front Jersey Number '7' */}
      <text x="100" y="112" fill="white" fontSize="32" fontWeight="900" textAnchor="middle">7</text>
    </svg>
  ),

  // --- RUNNING JERSEY (Ultra-Lightweight Singlet with Breathable Micro-Mesh) ---
  RunningJersey: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(16,185,129,0.22)]">
      <defs>
        <linearGradient id="runGrad" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      {/* Deep Athletic Singlet Racer Cut */}
      <path 
        d="M 68 36 C 78 48 122 48 132 36 L 146 46 C 132 72 132 94 140 106 L 140 174 L 60 174 L 60 106 C 68 94 68 72 54 46 Z" 
        fill="url(#runGrad)" 
      />
      {/* Scooped Neck & Armhole Elastic Binding */}
      <path d="M 68 36 C 78 50 122 50 132 36" stroke="#0F172A" strokeWidth="3" fill="none" />
      <path d="M 54 46 C 68 72 68 94 60 106" stroke="#0F172A" strokeWidth="3" fill="none" />
      <path d="M 146 46 C 132 72 132 94 140 106" stroke="#0F172A" strokeWidth="3" fill="none" />
      {/* Reflective Chest Bar & Speed Chevron */}
      <rect x="76" y="82" width="48" height="6" rx="3" fill="white" />
      <line x1="84" y1="96" x2="100" y2="108" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="116" y1="96" x2="100" y2="108" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),

  // --- ESPORTS JERSEY (Cyberpunk Neon Cyan & Magenta Geometry) ---
  EsportsJersey: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(6,182,212,0.25)]">
      <defs>
        <linearGradient id="esportGrad" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#1E1B4B" />
          <stop offset="50%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
      </defs>
      <path 
        d="M 66 34 L 134 34 L 178 64 L 156 98 L 144 86 L 144 174 L 56 174 L 56 86 L 44 98 L 22 64 Z" 
        fill="url(#esportGrad)" 
      />
      {/* Neon Cyber Polygon Panels */}
      <polygon points="66,34 90,66 100,56" fill="#06B6D4" opacity="0.8" />
      <polygon points="134,34 110,66 100,56" fill="#D946EF" opacity="0.8" />
      <polygon points="56,86 86,120 56,134" fill="#06B6D4" opacity="0.85" />
      <polygon points="144,86 114,120 144,134" fill="#D946EF" opacity="0.85" />
      {/* Center Circuit Emblem */}
      <polygon points="100,80 114,94 100,108 86,94" stroke="#06B6D4" strokeWidth="2.5" fill="#0F172A" />
      <circle cx="100" cy="94" r="3" fill="#D946EF" />
      <line x1="100" y1="108" x2="100" y2="128" stroke="#06B6D4" strokeWidth="2" strokeDasharray="3 2" />
    </svg>
  ),

  // =======================================================================
  // 4. SERVICES CAD SUITE (Precision Machinery & Factory Systems)
  // =======================================================================

  // --- DTG PRINTING (Digital Printhead scanning over Platen) ---
  DTGPrinting: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(59,130,246,0.22)]">
      <defs>
        <linearGradient id="dtgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      {/* Apparel Bed / Platen */}
      <rect x="44" y="60" width="112" height="110" rx="8" fill="url(#dtgGrad)" stroke="white" strokeWidth="2" />
      {/* Garment / T-Shirt on Bed */}
      <path d="M 64 80 L 136 80 L 146 100 L 138 106 L 138 156 L 62 156 L 62 106 L 54 100 Z" fill="#3B82F6" stroke="white" strokeWidth="1.5" />
      {/* Linear Precision Rail Track */}
      <line x1="28" y1="52" x2="172" y2="52" stroke="white" strokeWidth="4" strokeLinecap="round" />
      {/* Scanning Digital Print Carriage */}
      <rect x="76" y="36" width="48" height="32" rx="4" fill="#E63946" stroke="white" strokeWidth="2" />
      <circle cx="88" cy="52" r="3" fill="#00FFFF" />
      <circle cx="96" cy="52" r="3" fill="#FF00FF" />
      <circle cx="104" cy="52" r="3" fill="#FFFF00" />
      <circle cx="112" cy="52" r="3" fill="#000000" />
      {/* CMYK Micro-Jet Spray Cones */}
      <polygon points="90,68 86,84 94,84" fill="#06B6D4" opacity="0.8" />
      <polygon points="100,68 96,84 104,84" fill="#EC4899" opacity="0.8" />
      <polygon points="110,68 106,84 114,84" fill="#FACC15" opacity="0.8" />
      {/* High-Resolution Printed Art on Garment */}
      <circle cx="100" cy="120" r="14" fill="#F8FAFC" stroke="white" strokeWidth="1.5" />
      <polygon points="100,110 108,126 92,126" fill="#E63946" />
    </svg>
  ),

  // --- DTF PRINTING (Direct To Film Transfer Roll & Heat Plate) ---
  DTFPrinting: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(234,88,12,0.22)]">
      <defs>
        <linearGradient id="filmGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>
      {/* Base Heated Platen */}
      <rect x="34" y="130" width="132" height="38" rx="6" fill="#1E293B" stroke="white" strokeWidth="2" />
      {/* Textile Substrate */}
      <rect x="42" y="122" width="116" height="12" rx="2" fill="#E63946" stroke="white" strokeWidth="1" />
      {/* Clear PET Film Sheet Peeling Angle */}
      <path d="M 44 122 L 140 122 L 160 74 L 64 74 Z" fill="url(#filmGrad)" opacity="0.85" stroke="white" strokeWidth="2" />
      {/* Multicolor Ink Transfer Graphic on Film */}
      <polygon points="102,86 122,106 82,106" fill="#3B82F6" stroke="white" strokeWidth="1.2" />
      <circle cx="102" cy="100" r="5" fill="#FACC15" />
      {/* Upper Dual Heated Roller Clamps */}
      <rect x="48" y="44" width="104" height="18" rx="9" fill="#EA580C" stroke="white" strokeWidth="2" />
      <circle cx="58" cy="53" r="4" fill="white" />
      <circle cx="142" cy="53" r="4" fill="white" />
      {/* Thermal Heat Wave Indicators */}
      <path d="M 60 30 Q 64 22 68 30 T 76 30" stroke="#EA580C" strokeWidth="2" fill="none" />
      <path d="M 96 30 Q 100 22 104 30 T 112 30" stroke="#EA580C" strokeWidth="2" fill="none" />
      <path d="M 132 30 Q 136 22 140 30 T 148 30" stroke="#EA580C" strokeWidth="2" fill="none" />
    </svg>
  ),

  // --- EMBROIDERY DIGITIZING (Multi-Needle Industrial Head & Hoop) ---
  EmbroideryDigitizing: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(168,85,247,0.22)]">
      <defs>
        <linearGradient id="embGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7E22CE" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
      </defs>
      {/* Industrial Machine Head Casting */}
      <path d="M 64 28 L 136 28 L 136 78 L 118 78 L 118 106 L 82 106 L 82 78 L 64 78 Z" fill="url(#embGrad)" stroke="white" strokeWidth="2" />
      {/* Spool Cones at Top */}
      <polygon points="74,14 84,14 82,28 76,28" fill="#FACC15" stroke="white" strokeWidth="1" />
      <polygon points="95,14 105,14 103,28 97,28" fill="#EC4899" stroke="white" strokeWidth="1" />
      <polygon points="116,14 126,14 124,28 118,28" fill="#06B6D4" stroke="white" strokeWidth="1" />
      {/* Needle Bar & Presser Foot */}
      <line x1="100" y1="106" x2="100" y2="132" stroke="white" strokeWidth="3" />
      <path d="M 94 130 L 106 130 M 100 132 L 100 142" stroke="white" strokeWidth="2" />
      {/* Circular Embroidery Hoop Ring */}
      <ellipse cx="100" cy="154" rx="56" ry="24" fill="#1E293B" stroke="#FBBF24" strokeWidth="4" />
      {/* Dense Satin Stitch Crest inside Hoop */}
      <polygon points="100,140 114,152 100,164 86,152" fill="#EC4899" stroke="white" strokeWidth="1.5" />
      <line x1="90" y1="146" x2="110" y2="158" stroke="white" strokeWidth="1" strokeDasharray="2 1" />
      <line x1="90" y1="158" x2="110" y2="146" stroke="white" strokeWidth="1" strokeDasharray="2 1" />
    </svg>
  ),

  // --- COLOREEL DIGITIZING (On-Demand Thread Dyeing Unit) ---
  ColoreelDigitizing: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(236,72,153,0.22)]">
      {/* Base Unit Enclosure */}
      <rect x="52" y="32" width="96" height="88" rx="8" fill="#0F172A" stroke="white" strokeWidth="2" />
      {/* Continuous Thread Spool at Top */}
      <ellipse cx="100" cy="24" rx="28" ry="10" fill="#F8FAFC" stroke="white" strokeWidth="1.5" />
      {/* Multi-Spectrum Continuous Dye Cartridges */}
      <rect x="64" y="46" width="14" height="42" rx="3" fill="#06B6D4" stroke="white" strokeWidth="1.2" />
      <rect x="82" y="46" width="14" height="42" rx="3" fill="#EC4899" stroke="white" strokeWidth="1.2" />
      <rect x="100" y="46" width="14" height="42" rx="3" fill="#FACC15" stroke="white" strokeWidth="1.2" />
      <rect x="118" y="46" width="14" height="42" rx="3" fill="#22C55E" stroke="white" strokeWidth="1.2" />
      {/* Dyed Continuous Thread descending with smooth color transition */}
      <line x1="100" y1="120" x2="100" y2="140" stroke="#06B6D4" strokeWidth="2.5" />
      <line x1="100" y1="140" x2="100" y2="160" stroke="#EC4899" strokeWidth="2.5" />
      <line x1="100" y1="160" x2="100" y2="180" stroke="#FACC15" strokeWidth="2.5" />
      {/* Needle Piercing Fabric */}
      <polygon points="98,172 102,172 100,182" fill="white" />
    </svg>
  ),

  // --- SCREEN PRINTING (Mesh Stencil Frame & Rubber Squeegee) ---
  ScreenPrinting: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(245,158,11,0.22)]">
      <defs>
        <linearGradient id="meshGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
      </defs>
      {/* Precision Aluminum Screen Printing Frame */}
      <rect x="36" y="38" width="128" height="124" rx="4" fill="none" stroke="#64748B" strokeWidth="10" />
      {/* Yellow High-Tension Silkscreen Mesh */}
      <rect x="42" y="44" width="116" height="112" fill="url(#meshGrad)" opacity="0.9" />
      {/* Stencil Cutout Graphic */}
      <polygon points="100,74 126,116 74,116" fill="#1E293B" stroke="white" strokeWidth="1" />
      {/* Wooden / Aluminum Squeegee Handle angled across mesh */}
      <rect x="46" y="86" width="108" height="22" rx="4" fill="#B45309" stroke="white" strokeWidth="2" />
      {/* Flexible Rubber Blade Squeegee */}
      <rect x="48" y="108" width="104" height="8" rx="2" fill="#EF4444" />
      {/* Spreading Ink Pool */}
      <path d="M 52 116 Q 100 128 148 116" stroke="#EF4444" strokeWidth="4" fill="none" />
    </svg>
  ),

  // --- UV PRINTING (Industrial Flatbed with UV LED Curing Bar) ---
  UVPrinting: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(99,102,241,0.25)]">
      <defs>
        <linearGradient id="uvBeam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#4338CA" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* Vacuum Bed */}
      <rect x="34" y="90" width="132" height="74" rx="6" fill="#0F172A" stroke="white" strokeWidth="2" />
      {/* Grid Alignment Marks */}
      <line x1="34" y1="126" x2="166" y2="126" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="100" y1="90" x2="100" y2="164" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
      {/* Rigid Product on Bed (e.g. Phone Case / Metal Card) */}
      <rect x="76" y="102" width="48" height="52" rx="6" fill="#3B82F6" stroke="white" strokeWidth="1.5" />
      {/* UV LED Printhead Carriage */}
      <rect x="54" y="44" width="92" height="28" rx="4" fill="#4338CA" stroke="white" strokeWidth="2" />
      {/* UV LED Light Emitters */}
      <circle cx="68" cy="58" r="4" fill="#A5B4FC" />
      <circle cx="84" cy="58" r="4" fill="#A5B4FC" />
      <circle cx="100" cy="58" r="4" fill="#A5B4FC" />
      <circle cx="116" cy="58" r="4" fill="#A5B4FC" />
      <circle cx="132" cy="58" r="4" fill="#A5B4FC" />
      {/* Radiating High-Energy UV Curing Beam */}
      <polygon points="58,72 142,72 160,116 40,116" fill="url(#uvBeam)" />
    </svg>
  ),

  // --- LASER ENGRAVING (High-Precision Fiber Laser Head) ---
  LaserEngraving: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(239,68,68,0.25)]">
      {/* Laser Galvo Scanner Module */}
      <polygon points="76,30 124,30 114,64 86,64" fill="#1E293B" stroke="white" strokeWidth="2" />
      {/* Focus Lens */}
      <ellipse cx="100" cy="64" rx="14" ry="4" fill="#FACC15" stroke="white" strokeWidth="1" />
      {/* High Intensity Concentrated Laser Beam */}
      <line x1="100" y1="68" x2="100" y2="132" stroke="#EF4444" strokeWidth="3" />
      <line x1="100" y1="68" x2="100" y2="132" stroke="white" strokeWidth="1" />
      {/* Focal Spark & Vaporization Burst */}
      <polygon points="100,126 103,131 108,132 103,133 100,138 97,133 92,132 97,131" fill="#FACC15" stroke="#EF4444" strokeWidth="0.8" />
      {/* Stainless Steel Tumbler / Flask being engraved */}
      <path d="M 68 132 L 132 132 L 126 182 L 74 182 Z" fill="#475569" stroke="white" strokeWidth="2" />
      {/* Laser Etched Vector Logo on Metal */}
      <polygon points="100,144 112,156 100,168 88,156" fill="none" stroke="white" strokeWidth="2" />
      <line x1="94" y1="156" x2="106" y2="156" stroke="white" strokeWidth="1.5" />
    </svg>
  ),

  // =======================================================================
  // 5. CORPORATE GIFTING & ACCESSORIES
  // =======================================================================

  // --- DRINKWARE (Matte Thermal Tumbler with Laser Logo) ---
  Drinkware: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(15,23,42,0.22)]">
      <defs>
        <linearGradient id="tumblerGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="50%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      {/* Insulated Lid with Sipper */}
      <rect x="68" y="28" width="64" height="18" rx="4" fill="#0F172A" stroke="white" strokeWidth="2" />
      <rect x="88" y="22" width="24" height="8" rx="2" fill="#E63946" stroke="white" strokeWidth="1" />
      {/* Tumbler Body */}
      <path d="M 72 46 L 128 46 L 118 174 L 82 174 Z" fill="url(#tumblerGrad)" stroke="white" strokeWidth="2" />
      {/* Silicone Ergonomic Grip Band */}
      <rect x="73.5" y="76" width="53" height="34" fill="#0F172A" stroke="white" strokeWidth="1.5" />
      <line x1="74" y1="88" x2="126" y2="88" stroke="white" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="74" y1="98" x2="126" y2="98" stroke="white" strokeWidth="1" strokeDasharray="3 2" />
      {/* Laser Etched Crest */}
      <polygon points="100,126 109,134 100,142 91,134" stroke="white" strokeWidth="1.8" fill="none" />
    </svg>
  ),

  // --- ACCESSORIES / BACKPACK (Executive Ballistic Nylon Laptop Bag) ---
  Accessories: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(30,41,59,0.22)]">
      <defs>
        <linearGradient id="packGrad" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="50%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
      </defs>
      {/* Top Grab Handle */}
      <path d="M 80 34 C 80 20 120 20 120 34" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Main Dome Backpack Body */}
      <path d="M 58 56 C 58 36 142 36 142 56 L 152 168 L 48 168 Z" fill="url(#packGrad)" stroke="white" strokeWidth="2.2" />
      {/* Front Large Organizer Pocket */}
      <rect x="62" y="96" width="76" height="66" rx="8" fill="#1E293B" stroke="white" strokeWidth="2" />
      <line x1="62" y1="112" x2="138" y2="112" stroke="white" strokeWidth="2" />
      {/* Dual Heavy-Duty Zippers */}
      <circle cx="82" cy="112" r="2.5" fill="#E63946" />
      <circle cx="118" cy="112" r="2.5" fill="#E63946" />
      {/* Mesh Side Bottle Pockets */}
      <path d="M 48 122 L 58 122 L 58 162 L 48 158 Z" fill="#0F172A" stroke="white" strokeWidth="1.2" />
      <path d="M 152 122 L 142 122 L 142 162 L 152 158 Z" fill="#0F172A" stroke="white" strokeWidth="1.2" />
    </svg>
  ),

  // --- GIFT HAMPER (Luxury Rigid Gift Box with Satin Ribbon) ---
  GiftHamper: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(193,56,40,0.22)]">
      <defs>
        <linearGradient id="giftBoxGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C13828" />
          <stop offset="50%" stopColor="#991B1B" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </linearGradient>
      </defs>
      {/* Box Base */}
      <rect x="42" y="84" width="116" height="88" rx="6" fill="url(#giftBoxGrad)" stroke="white" strokeWidth="2.2" />
      {/* Box Lid (Slightly wider) */}
      <rect x="36" y="68" width="128" height="22" rx="4" fill="#991B1B" stroke="white" strokeWidth="2.2" />
      {/* Gold Satin Ribbon Cross */}
      <line x1="100" y1="68" x2="100" y2="172" stroke="#FBBF24" strokeWidth="5" />
      <line x1="36" y1="79" x2="164" y2="79" stroke="#FBBF24" strokeWidth="4" />
      {/* Ribbon Bow Knot at Top */}
      <path d="M 100 68 C 82 46 64 54 82 68 C 92 68 100 68 100 68" stroke="#FBBF24" strokeWidth="3.5" fill="none" />
      <path d="M 100 68 C 118 46 136 54 118 68 C 108 68 100 68 100 68" stroke="#FBBF24" strokeWidth="3.5" fill="none" />
      <circle cx="100" cy="68" r="4.5" fill="#F59E0B" />
    </svg>
  ),

  // --- PROMO PRODUCTS (Lanyard + Pen + Metal Card Case) ---
  PromoProducts: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(37,99,235,0.22)]">
      {/* Branded Metal Business Card Case */}
      <rect x="46" y="86" width="76" height="74" rx="6" fill="#1E293B" stroke="white" strokeWidth="2" />
      <line x1="46" y1="104" x2="122" y2="104" stroke="white" strokeWidth="1.5" />
      <circle cx="84" cy="130" r="10" stroke="#FBBF24" strokeWidth="1.5" fill="none" />
      {/* Luxury Metal Rollerball Pen angled beside case */}
      <g transform="rotate(28, 140, 110)">
        <rect x="136" y="46" width="10" height="96" rx="4" fill="#E63946" stroke="white" strokeWidth="1.8" />
        <polygon points="136,142 146,142 141,156" fill="#E2E8F0" stroke="white" strokeWidth="1" />
        <line x1="141" y1="56" x2="141" y2="78" stroke="white" strokeWidth="2.5" />
      </g>
    </svg>
  ),

  // --- ECO GIFTS (Bamboo Mug & Recycled Notebook) ---
  EcoGifts: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(22,101,52,0.22)]">
      {/* Kraft Wirebound Eco Notebook */}
      <rect x="44" y="60" width="76" height="98" rx="6" fill="#D97706" stroke="white" strokeWidth="2" />
      {/* Wire Rings */}
      <circle cx="48" cy="74" r="3" fill="#1E293B" stroke="white" strokeWidth="1" />
      <circle cx="48" cy="94" r="3" fill="#1E293B" stroke="white" strokeWidth="1" />
      <circle cx="48" cy="114" r="3" fill="#1E293B" stroke="white" strokeWidth="1" />
      <circle cx="48" cy="134" r="3" fill="#1E293B" stroke="white" strokeWidth="1" />
      {/* Leaf / Eco Emblem */}
      <path d="M 82 100 C 74 88 88 78 94 92 C 94 102 82 108 82 100 Z" fill="#15803D" stroke="white" strokeWidth="1.2" />
      {/* Bamboo Coffee Cup beside notebook */}
      <path d="M 126 84 L 158 84 L 152 154 L 132 154 Z" fill="#15803D" stroke="white" strokeWidth="2" />
      <rect x="124" y="74" width="36" height="12" rx="3" fill="#14532D" stroke="white" strokeWidth="1.5" />
    </svg>
  ),

  // =======================================================================
  // 6. MERCH STUDIO & TOOLS
  // =======================================================================

  // --- 3D CONFIGURATOR (Isometric Wireframe Mannequin / Orbit Gizmo) ---
  Configurator3D: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(147,51,234,0.25)]">
      {/* 360-Degree Orbit Axis Rings */}
      <ellipse cx="100" cy="100" rx="76" ry="32" fill="none" stroke="#C084FC" strokeWidth="2" strokeDasharray="5 3" />
      <ellipse cx="100" cy="100" rx="32" ry="76" fill="none" stroke="#60A5FA" strokeWidth="2" strokeDasharray="5 3" />
      {/* 3D Coordinate Nodes */}
      <circle cx="176" cy="100" r="5" fill="#C084FC" stroke="white" strokeWidth="1.5" />
      <circle cx="100" cy="24" r="5" fill="#60A5FA" stroke="white" strokeWidth="1.5" />
      {/* Wireframe Fashion Torso in Center */}
      <path d="M 80 64 L 120 64 L 136 86 L 124 136 L 76 136 L 64 86 Z" fill="#1E1B4B" stroke="white" strokeWidth="2" />
      <line x1="100" y1="64" x2="100" y2="136" stroke="white" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="76" y1="100" x2="124" y2="100" stroke="white" strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  ),

  // --- COLOR SWATCHES (Pantone Textile Deck) ---
  ColorSwatches: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(15,23,42,0.22)]">
      {/* Fanned Out Swatch Chips */}
      <g transform="rotate(-30, 100, 160)">
        <rect x="86" y="40" width="28" height="110" rx="4" fill="#EF4444" stroke="white" strokeWidth="1.8" />
        <rect x="88" y="120" width="24" height="26" fill="white" />
      </g>
      <g transform="rotate(-10, 100, 160)">
        <rect x="86" y="36" width="28" height="110" rx="4" fill="#3B82F6" stroke="white" strokeWidth="1.8" />
        <rect x="88" y="116" width="24" height="26" fill="white" />
      </g>
      <g transform="rotate(10, 100, 160)">
        <rect x="86" y="36" width="28" height="110" rx="4" fill="#10B981" stroke="white" strokeWidth="1.8" />
        <rect x="88" y="116" width="24" height="26" fill="white" />
      </g>
      <g transform="rotate(30, 100, 160)">
        <rect x="86" y="40" width="28" height="110" rx="4" fill="#F59E0B" stroke="white" strokeWidth="1.8" />
        <rect x="88" y="120" width="24" height="26" fill="white" />
      </g>
      {/* Pivot Grommet Eyelet */}
      <circle cx="100" cy="154" r="6" fill="#1E293B" stroke="white" strokeWidth="2" />
    </svg>
  ),

  // =======================================================================
  // 7. BRANDS (Crest & Shield CAD Badges)
  // =======================================================================

  // --- BRAND: REDBOLT (Athletic Lightning Crest) ---
  BrandRedbolt: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(220,38,38,0.25)]">
      <polygon points="100,24 164,54 164,126 100,174 36,126 36,54" fill="#991B1B" stroke="white" strokeWidth="2.5" />
      <polygon points="100,36 152,60 152,120 100,160 48,120 48,60" fill="#DC2626" stroke="white" strokeWidth="1.2" strokeDasharray="4 2" />
      {/* Bold Lightning Bolt */}
      <polygon points="106,48 76,104 98,104 92,148 126,88 104,88" fill="#FACC15" stroke="white" strokeWidth="1.5" />
    </svg>
  ),

  // --- BRAND: JACK & JONES (European Denim Rivet Patch) ---
  BrandJackJones: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(30,58,138,0.25)]">
      <rect x="42" y="56" width="116" height="88" rx="8" fill="#1E3A8A" stroke="white" strokeWidth="2.5" />
      <rect x="48" y="62" width="104" height="76" rx="6" fill="none" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="4 2" />
      {/* Corner Copper Rivets */}
      <circle cx="56" cy="70" r="3.5" fill="#B45309" stroke="white" strokeWidth="1" />
      <circle cx="144" cy="70" r="3.5" fill="#B45309" stroke="white" strokeWidth="1" />
      <circle cx="56" cy="130" r="3.5" fill="#B45309" stroke="white" strokeWidth="1" />
      <circle cx="144" cy="130" r="3.5" fill="#B45309" stroke="white" strokeWidth="1" />
      <text x="100" y="96" fill="white" fontSize="13" fontWeight="900" textAnchor="middle" letterSpacing="2">JACK&JONES</text>
      <text x="100" y="112" fill="#FBBF24" fontSize="8" fontWeight="700" textAnchor="middle" letterSpacing="1">DENIM ATELIER</text>
    </svg>
  ),

  // --- BRAND: VERO MODA (Haute Couture Monogram) ---
  BrandVeroModa: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(244,63,94,0.25)]">
      <circle cx="100" cy="100" r="64" fill="#0F172A" stroke="white" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="56" fill="none" stroke="#FB7185" strokeWidth="1.5" strokeDasharray="4 2" />
      <text x="100" y="96" fill="white" fontSize="13" fontWeight="900" textAnchor="middle" letterSpacing="2">VERO MODA</text>
      <text x="100" y="114" fill="#FB7185" fontSize="8" fontWeight="700" textAnchor="middle" letterSpacing="1">COPENHAGEN</text>
    </svg>
  ),

  // --- BRAND: TURTLE (Formalwear Shield) ---
  BrandTurtle: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(5,150,105,0.25)]">
      <polygon points="100,28 160,56 160,116 100,168 40,116 40,56" fill="#065F46" stroke="white" strokeWidth="2.5" />
      <circle cx="100" cy="94" r="28" fill="#047857" stroke="white" strokeWidth="1.5" />
      <polygon points="100,74 116,86 116,106 100,118 84,106 84,86" fill="none" stroke="white" strokeWidth="1.8" />
      <text x="100" y="142" fill="white" fontSize="10" fontWeight="900" textAnchor="middle" letterSpacing="2">TURTLE</text>
    </svg>
  ),

  // --- BRAND: RARE RABBIT (Origami Geometric Rabbit Silhouette) ---
  BrandRareRabbit: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(15,23,42,0.25)]">
      <rect x="42" y="42" width="116" height="116" rx="10" fill="#18181B" stroke="white" strokeWidth="2.5" />
      {/* Geometric Rabbit Head Vector */}
      <polygon points="100,64 122,106 100,126 78,106" fill="none" stroke="#F43F5E" strokeWidth="2.5" />
      <polygon points="88,64 74,32 94,54" fill="#F43F5E" stroke="white" strokeWidth="1" />
      <polygon points="112,64 126,32 106,54" fill="#F43F5E" stroke="white" strokeWidth="1" />
      <text x="100" y="144" fill="white" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="2">RARE RABBIT</text>
    </svg>
  ),

  // =======================================================================
  // 8. OUR STORES (Architectural Glass Facades)
  // =======================================================================

  // --- STORE: BANGALORE (Flagship Indiranagar 100ft) ---
  StoreBangalore: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(193,56,40,0.22)]">
      {/* Modern Building Facade */}
      <rect x="34" y="38" width="132" height="136" rx="6" fill="#1E293B" stroke="white" strokeWidth="2" />
      {/* Store Signage Canopy */}
      <rect x="28" y="50" width="144" height="24" rx="4" fill="#C13828" stroke="white" strokeWidth="1.8" />
      <text x="100" y="66" fill="white" fontSize="10" fontWeight="900" textAnchor="middle" letterSpacing="2">YOODE BANGALORE</text>
      {/* Double Height Glass Showroom Windows */}
      <rect x="44" y="84" width="48" height="88" fill="#38BDF8" opacity="0.3" stroke="white" strokeWidth="1.5" />
      <rect x="108" y="84" width="48" height="88" fill="#38BDF8" opacity="0.3" stroke="white" strokeWidth="1.5" />
      {/* Glass Entrance Double Doors */}
      <line x1="100" y1="84" x2="100" y2="174" stroke="white" strokeWidth="2" />
      <line x1="94" y1="126" x2="94" y2="140" stroke="white" strokeWidth="2" />
      <line x1="106" y1="126" x2="106" y2="140" stroke="white" strokeWidth="2" />
    </svg>
  ),

  // --- STORE: CHENNAI (Anna Nagar Studio) ---
  StoreChennai: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(37,99,235,0.22)]">
      <rect x="36" y="44" width="128" height="130" rx="6" fill="#0F172A" stroke="white" strokeWidth="2" />
      <rect x="30" y="54" width="140" height="22" rx="3" fill="#1D4ED8" stroke="white" strokeWidth="1.8" />
      <text x="100" y="69" fill="white" fontSize="10" fontWeight="900" textAnchor="middle" letterSpacing="2">YOODE CHENNAI</text>
      <rect x="46" y="86" width="108" height="86" fill="#60A5FA" opacity="0.25" stroke="white" strokeWidth="1.5" />
      <line x1="100" y1="86" x2="100" y2="174" stroke="white" strokeWidth="2" />
    </svg>
  ),

  // --- STORE: MARTHANDAM (Main Road Hub) ---
  StoreMarthandam: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(5,150,105,0.22)]">
      <rect x="36" y="44" width="128" height="130" rx="6" fill="#064E3B" stroke="white" strokeWidth="2" />
      <rect x="30" y="54" width="140" height="22" rx="3" fill="#059669" stroke="white" strokeWidth="1.8" />
      <text x="100" y="69" fill="white" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="1">YOODE MARTHANDAM</text>
      <rect x="46" y="86" width="108" height="86" fill="#34D399" opacity="0.25" stroke="white" strokeWidth="1.5" />
      <line x1="100" y1="86" x2="100" y2="174" stroke="white" strokeWidth="2" />
    </svg>
  ),

  // --- STORE: TRIVANDRUM (Technopark Express Lounge) ---
  StoreTrivandrum: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(217,119,6,0.22)]">
      <rect x="36" y="44" width="128" height="130" rx="6" fill="#1E293B" stroke="white" strokeWidth="2" />
      <rect x="30" y="54" width="140" height="22" rx="3" fill="#D97706" stroke="white" strokeWidth="1.8" />
      <text x="100" y="69" fill="white" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="1">YOODE TRIVANDRUM</text>
      <rect x="46" y="86" width="108" height="86" fill="#FBBF24" opacity="0.25" stroke="white" strokeWidth="1.5" />
      <line x1="100" y1="86" x2="100" y2="174" stroke="white" strokeWidth="2" />
    </svg>
  ),

  // =======================================================================
  // 9. ABOUT & EDITORIAL
  // =======================================================================

  // --- ATELIER CRAFT (Tailoring Shears & Tape Measure) ---
  AtelierCraft: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(193,56,40,0.22)]">
      {/* Heavy-Duty Tailor's Shears */}
      <g transform="rotate(-25, 100, 100)">
        <ellipse cx="64" cy="148" rx="14" ry="10" fill="none" stroke="white" strokeWidth="3" />
        <ellipse cx="94" cy="154" rx="18" ry="12" fill="none" stroke="white" strokeWidth="3" />
        <line x1="68" y1="140" x2="136" y2="52" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <line x1="90" y1="144" x2="148" y2="64" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <circle cx="106" cy="104" r="4.5" fill="#FBBF24" stroke="white" strokeWidth="1" />
      </g>
      {/* Yellow Flexible Tape Measure curled around */}
      <path d="M 38 120 C 50 170 150 170 162 120" stroke="#FACC15" strokeWidth="8" fill="none" />
      <line x1="58" y1="146" x2="58" y2="154" stroke="#1E293B" strokeWidth="1.5" />
      <line x1="78" y1="156" x2="78" y2="164" stroke="#1E293B" strokeWidth="1.5" />
      <line x1="100" y1="160" x2="100" y2="168" stroke="#1E293B" strokeWidth="1.5" />
      <line x1="122" y1="156" x2="122" y2="164" stroke="#1E293B" strokeWidth="1.5" />
      <line x1="142" y1="146" x2="142" y2="154" stroke="#1E293B" strokeWidth="1.5" />
    </svg>
  ),

  // --- CASE STUDIES (Blueprint Dossier Folder) ---
  CaseStudies: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(37,99,235,0.22)]">
      {/* Folder Document Base */}
      <rect x="42" y="38" width="116" height="130" rx="8" fill="#1E3A8A" stroke="white" strokeWidth="2.5" />
      {/* Folder Top Tab */}
      <path d="M 42 46 L 76 46 L 86 58 L 158 58" stroke="white" strokeWidth="2" fill="none" />
      {/* Performance Bar Chart Graphics */}
      <rect x="62" y="126" width="12" height="24" rx="2" fill="white" />
      <rect x="82" y="106" width="12" height="44" rx="2" fill="white" />
      <rect x="102" y="90" width="12" height="60" rx="2" fill="#FACC15" />
      <rect x="122" y="74" width="12" height="76" rx="2" fill="white" />
      {/* Checkmark Quality Stamp */}
      <circle cx="132" cy="74" r="14" fill="#16A34A" stroke="white" strokeWidth="2" />
      <polyline points="126,74 130,78 138,70" fill="none" stroke="white" strokeWidth="2.5" />
    </svg>
  ),

  // --- BLOG JOURNAL (Editorial Hardcover Notebook & Pen) ---
  BlogJournal: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(15,23,42,0.22)]">
      <rect x="42" y="34" width="104" height="136" rx="6" fill="#1E293B" stroke="white" strokeWidth="2.5" />
      {/* Spine Binding */}
      <line x1="58" y1="34" x2="58" y2="170" stroke="white" strokeWidth="2.5" />
      {/* Red Ribbon Bookmark */}
      <path d="M 110 34 L 110 100 L 118 92 L 126 100 L 126 34" fill="#E63946" />
      {/* Lined Editorial Text */}
      <line x1="72" y1="62" x2="132" y2="62" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="72" y1="80" x2="124" y2="80" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="72" y1="98" x2="132" y2="98" stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* Fountain Pen angled over page */}
      <polygon points="144,98 156,110 134,148 122,146" fill="white" />
      <polygon points="122,146 118,158 130,154" fill="#FBBF24" stroke="white" strokeWidth="1" />
    </svg>
  ),

  // --- GALLERY CAMERA (Studio DSLR Mirrorless Camera) ---
  GalleryCamera: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(15,23,42,0.22)]">
      {/* Camera Body */}
      <rect x="36" y="58" width="128" height="96" rx="12" fill="#0F172A" stroke="white" strokeWidth="2.5" />
      {/* Pentaprism Viewfinder Hump */}
      <polygon points="74,58 84,40 116,40 126,58" fill="#1E293B" stroke="white" strokeWidth="2" />
      {/* Multi-Coated Camera Lens Assembly */}
      <circle cx="100" cy="106" r="34" fill="#1E293B" stroke="white" strokeWidth="3" />
      <circle cx="100" cy="106" r="24" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
      <circle cx="100" cy="106" r="12" fill="#0284C7" />
      <circle cx="104" cy="102" r="3" fill="white" />
      {/* Mode Dial & Shutter Button */}
      <rect x="134" y="48" width="16" height="10" rx="2" fill="#E63946" stroke="white" strokeWidth="1.2" />
    </svg>
  ),

  // =======================================================================
  // 10. ACCOUNT & CART ACTIONS
  // =======================================================================

  // --- ACCOUNT BADGE (Security ID Card with Lanyard Clasp) ---
  AccountBadge: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(37,99,235,0.22)]">
      {/* Lanyard Clip */}
      <path d="M 88 18 L 112 18 L 106 38 L 94 38 Z" fill="#64748B" stroke="white" strokeWidth="1.5" />
      {/* ID Card Body */}
      <rect x="46" y="38" width="108" height="142" rx="8" fill="#1E293B" stroke="white" strokeWidth="2.5" />
      {/* Lanyard Slot */}
      <rect x="85" y="46" width="30" height="6" rx="3" fill="#0F172A" stroke="white" strokeWidth="1" />
      {/* User Silhouette Avatar */}
      <circle cx="100" cy="84" r="18" fill="#E63946" stroke="white" strokeWidth="2" />
      <path d="M 78 122 C 78 108 122 108 122 122 Z" fill="#E63946" stroke="white" strokeWidth="1.5" />
      {/* Info Lines */}
      <line x1="68" y1="136" x2="132" y2="136" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="76" y1="150" x2="124" y2="150" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // --- DISPATCH TRUCK (Express Delivery Logistics) ---
  DispatchTruck: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(22,101,52,0.22)]">
      {/* Cargo Box */}
      <rect x="30" y="58" width="88" height="80" rx="4" fill="#15803D" stroke="white" strokeWidth="2.5" />
      {/* Driver Cab */}
      <path d="M 118 78 L 152 78 L 166 106 L 166 138 L 118 138 Z" fill="#166534" stroke="white" strokeWidth="2.5" />
      {/* Windshield */}
      <polygon points="122,84 148,84 158,104 122,104" fill="#38BDF8" opacity="0.6" stroke="white" strokeWidth="1.5" />
      {/* Heavy-Duty Wheels */}
      <circle cx="60" cy="144" r="16" fill="#0F172A" stroke="white" strokeWidth="3" />
      <circle cx="60" cy="144" r="6" fill="#94A3B8" />
      <circle cx="144" cy="144" r="16" fill="#0F172A" stroke="white" strokeWidth="3" />
      <circle cx="144" cy="144" r="6" fill="#94A3B8" />
      {/* Motion Speed Lines */}
      <line x1="14" y1="78" x2="24" y2="78" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="8" y1="98" x2="24" y2="98" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),

  // --- WISHLIST HEART (Faceted Geometric Diamond Heart) ---
  WishlistHeart: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(244,63,94,0.25)]">
      {/* Faceted Heart Polygons */}
      <polygon points="100,166 42,94 62,50 100,72 138,50 158,94" fill="#E11D48" stroke="white" strokeWidth="2.5" />
      {/* Internal Facet Reflections */}
      <polygon points="100,166 100,72 62,50 42,94" fill="#BE123C" stroke="white" strokeWidth="1.2" />
      <polygon points="100,72 138,50 120,86 100,166" fill="#F43F5E" stroke="white" strokeWidth="1.2" />
      <polygon points="100,72 62,50 80,86 100,166" fill="#FB7185" stroke="white" strokeWidth="1.2" />
      <circle cx="138" cy="54" r="3" fill="white" />
    </svg>
  ),

  // --- SHOPPING BAG CAD (Structured Luxury Paper Tote) ---
  ShoppingBagCAD: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(193,56,40,0.22)]">
      {/* Rope Handles */}
      <path d="M 76 68 C 76 34 124 34 124 68" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Bag Silhouette */}
      <polygon points="50,68 150,68 160,168 40,168" fill="#C13828" stroke="white" strokeWidth="2.5" />
      {/* Side Gusset Fold Line */}
      <line x1="50" y1="68" x2="62" y2="168" stroke="white" strokeWidth="1.5" strokeDasharray="4 2" />
      <line x1="150" y1="68" x2="138" y2="168" stroke="white" strokeWidth="1.5" strokeDasharray="4 2" />
      {/* Center Foil Stamp Badge */}
      <circle cx="100" cy="116" r="16" fill="#FBBF24" stroke="white" strokeWidth="1.5" />
      <text x="100" y="122" fill="#991B1B" fontSize="14" fontWeight="900" textAnchor="middle">Y</text>
    </svg>
  ),

  // --- CHECKOUT TERMINAL (Smart POS Reader) ---
  CheckoutTerminal: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(15,23,42,0.22)]">
      {/* Terminal Enclosure */}
      <rect x="54" y="32" width="92" height="142" rx="10" fill="#0F172A" stroke="white" strokeWidth="2.5" />
      {/* Digital Screen */}
      <rect x="66" y="46" width="68" height="48" rx="4" fill="#0284C7" stroke="white" strokeWidth="1.5" />
      {/* Contactless Waves */}
      <path d="M 94 62 C 98 62 102 66 102 70" stroke="white" strokeWidth="2" fill="none" />
      <path d="M 90 58 C 98 58 106 66 106 74" stroke="white" strokeWidth="2" fill="none" />
      {/* Keypad Buttons */}
      <circle cx="78" cy="110" r="4" fill="white" />
      <circle cx="100" cy="110" r="4" fill="white" />
      <circle cx="122" cy="110" r="4" fill="white" />
      <circle cx="78" cy="126" r="4" fill="white" />
      <circle cx="100" cy="126" r="4" fill="white" />
      <circle cx="122" cy="126" r="4" fill="white" />
      {/* Bottom Card Insertion Slot */}
      <line x1="68" y1="154" x2="132" y2="154" stroke="#22C55E" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),

  // --- BULK INQUIRY / PALLET (Industrial Cargo Crate) ---
  BulkPallet: () => (
    <svg viewBox="0 0 200 200" className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(217,119,6,0.22)]">
      {/* Heavy Wooden Pallet Base */}
      <rect x="30" y="152" width="140" height="12" rx="2" fill="#92400E" stroke="white" strokeWidth="2" />
      <rect x="36" y="164" width="20" height="12" fill="#78350F" stroke="white" strokeWidth="1.5" />
      <rect x="90" y="164" width="20" height="12" fill="#78350F" stroke="white" strokeWidth="1.5" />
      <rect x="144" y="164" width="20" height="12" fill="#78350F" stroke="white" strokeWidth="1.5" />
      {/* Stacked Bulk Shipping Cartons */}
      <rect x="42" y="98" width="56" height="54" rx="4" fill="#D97706" stroke="white" strokeWidth="2" />
      <rect x="102" y="98" width="56" height="54" rx="4" fill="#D97706" stroke="white" strokeWidth="2" />
      <rect x="72" y="44" width="56" height="54" rx="4" fill="#B45309" stroke="white" strokeWidth="2" />
      {/* Sealing Tape & Fragile Glass Icon */}
      <line x1="72" y1="71" x2="128" y2="71" stroke="#FDE68A" strokeWidth="4" />
      <line x1="42" y1="125" x2="98" y2="125" stroke="#FDE68A" strokeWidth="4" />
      <line x1="102" y1="125" x2="158" y2="125" stroke="#FDE68A" strokeWidth="4" />
    </svg>
  ),
};
