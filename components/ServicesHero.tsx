"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2, ChevronDown, Star } from "lucide-react";

type Method = { label: string; id: string };

export function ServicesHero({ methods }: { methods: Method[] }) {
  return (
    <section 
      aria-label="Our Services Overview" 
      className="relative h-[calc(100vh-80px)] min-h-[600px] w-full flex flex-col justify-center bg-yoode-onyx text-white overflow-hidden select-none"
    >
      {/* Background glow and gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute right-[-10%] bottom-[-10%] w-[55vw] h-[55vw] bg-yoode-coral/15 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.06)_0%,_transparent_70%)]" />
      </div>

      {/* Mid-Background: Giant Outline Text */}
      <div className="absolute z-10 w-full top-[42%] md:top-[44%] md:left-[15%] -translate-y-1/2 flex justify-center md:justify-end md:pr-0 pointer-events-none overflow-hidden select-none">
        <h1 
          className="text-[26vw] lg:text-[28vw] font-display font-black leading-none tracking-tighter text-transparent select-none opacity-25 md:opacity-35"
          style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.06)" }}
        >
          <span>SERVICES</span>
        </h1>
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-20 w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 h-full flex items-center pt-8 md:pt-12 pb-12 md:pb-16">
        
        {/* Left Content (Text, Badges, Metrics & Buttons) */}
        <div className="w-full md:w-[54%] lg:w-[50%] xl:w-[48%] flex flex-col items-start justify-center z-30 py-2">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-xs font-semibold text-white/95 shadow-md mb-3 md:mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yoode-coral opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yoode-coral"></span>
            </span>
            Seven Custom Printing &amp; Embroidery Methods
          </div>
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.7rem] leading-[1.06] font-display font-black text-white mb-3.5 md:mb-4 tracking-tight drop-shadow-xl">
            Seven Ways to Put Your Mark on <span className="text-yoode-coral">Anything.</span>
          </h1>
          
          {/* Paragraph */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed max-w-[480px] mb-4 md:mb-5 drop-shadow-sm font-medium">
            Water-based inks, precision satin thread, instant UV curing and laser etching. From a single custom sample to 10,000+ volume orders — explore the crafts behind India&apos;s finest custom apparel, merchandise and gifting.
          </p>

          {/* The seven methods, strung on a running stitch: each one jumps to its section below */}
          <nav aria-label="Jump to a method" className="mb-5 md:mb-6 max-w-[560px]">
            <ul className="m-0 flex list-none flex-wrap items-center gap-y-2.5 p-0">
              {methods.map((m, i) => (
                <li key={m.id} className="flex items-center">
                  {i > 0 && <span aria-hidden className="mx-2.5 w-4 border-t-2 border-dashed border-white/25 md:w-5" />}
                  <a
                    href={`#${m.id}`}
                    className="group flex items-center gap-2 rounded-sm text-[13px] font-semibold text-white/75 outline-none transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-yoode-coral focus-visible:ring-offset-4 focus-visible:ring-offset-yoode-onyx md:text-sm"
                  >
                    <span aria-hidden className="size-1.5 rounded-full bg-white/40 transition-[transform,background-color] duration-300 group-hover:scale-150 group-hover:bg-yoode-coral group-focus-visible:bg-yoode-coral" />
                    {m.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Trust Reviews Badge */}
          <div className="flex items-center gap-3 mb-4 md:mb-5">
            <div className="flex -space-x-2.5">
              <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-8 h-8 rounded-full border-2 border-[#1A1A1A]" />
              <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-8 h-8 rounded-full border-2 border-[#1A1A1A]" />
              <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-8 h-8 rounded-full border-2 border-[#1A1A1A]" />
              <div className="w-8 h-8 rounded-full border-2 border-[#1A1A1A] bg-[#2A2A2A] flex items-center justify-center text-[10px] font-bold text-white">
                +10k
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <span className="text-white font-bold ml-1 text-xs">4.9</span>
                <span className="text-white/60 text-[11px] ml-1">· 500+ Brand Reviews</span>
              </div>
              <span className="text-[11px] text-white/70 font-medium">Trusted by 10,000+ teams and companies across India</span>
            </div>
          </div>

          {/* Features Inline Checkmarks */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold text-white/80 mb-5 md:mb-6">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yoode-coral shrink-0" /> No minimum order (1 piece)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yoode-coral shrink-0" /> Free 24h digital mockup
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yoode-coral shrink-0" /> Pay after design approval
            </span>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <a 
              href="#look-closer" 
              className="group flex items-center gap-2 bg-yoode-coral text-white px-6 py-3 md:px-7 md:py-3.5 rounded-full font-bold text-xs md:text-sm hover:scale-105 transition-all shadow-lg shadow-yoode-coral/25 cursor-pointer"
            >
              <span>Explore Services</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
            <a 
              href="#quote" 
              className="flex items-center gap-2 bg-white/5 border border-white/20 text-white px-6 py-3 md:px-7 md:py-3.5 rounded-full font-bold text-xs md:text-sm hover:bg-white/10 transition-all backdrop-blur-md cursor-pointer"
            >
              <span>Get a Bulk Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Content: Lifestyle Models Standing Proud */}
        <div className="absolute right-[-2%] sm:right-0 md:right-[2%] lg:right-[3%] xl:right-[4%] bottom-0 z-20 w-[90%] sm:w-[72%] md:w-[54%] lg:w-[48%] xl:w-[46%] h-[74%] sm:h-[80%] md:h-[86%] lg:h-[90%] xl:h-[92%] pointer-events-none flex justify-end items-end">
          <img 
            src="/banner-1.png" 
            alt="Custom Apparel & Merchandise Models - Yoode" 
            className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] scale-115 sm:scale-120 md:scale-125 lg:scale-130 xl:scale-132 origin-bottom" 
          />
        </div>
      </div>
    </section>
  );
}
