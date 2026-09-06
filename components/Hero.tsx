"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

const slides = [
  {
    id: "corporate",
    bgColor: "#E53935",
    text: "YOODE",
    image: "/banner-1.png",
    title: "Corporate Merch",
    subtitle: "Onboarding kits & teamwear",
    videoText: "Watch Corporate Tour",
    metric: "10,000+",
    metricText: "TEAMS & BRANDS EQUIPPED",
    headline: "Customised Apparel & Merchandise for Modern Brands. Kit out your team in minutes with precision embroidery and sustainable fabrics.",
    cta: "EXPLORE CORPORATE →",
    ctaColor: "bg-yoode-onyx text-white",
  },
  {
    id: "trendz",
    bgColor: "#111827",
    text: "TRENDZ",
    image: "/banner-2.png",
    title: "Streetwear & Trendz",
    subtitle: "Heavyweight hoodies & tees",
    videoText: "Lookbook Drop 04",
    metric: "240+ GSM",
    metricText: "COMBED ORGANIC COTTON",
    headline: "Wear the Spirit of Streetwear. Bold cuts, uncompromised fabric weights, and personalized print finishes.",
    cta: "SHOP TRENDZ →",
    ctaColor: "bg-yoode-coral text-white",
  },
  {
    id: "studio",
    bgColor: "#2E4A3E",
    text: "COLLECTIONS",
    image: "/banner-3.png",
    title: "Designer Collections",
    subtitle: "Floral & Graphic Printed Tees",
    videoText: "Explore Collection",
    metric: "OVERSIZED",
    metricText: "PREMIUM PRINTS",
    headline: "Make a statement with our designer collections featuring oversized fits, floral prints, and unique graphic designs.",
    cta: "VIEW COLLECTIONS →",
    ctaColor: "bg-white text-yoode-forest",
  },
  {
    id: "shirts",
    bgColor: "#8B5A2B",
    text: "SHIRTS",
    image: "/banner-4.png",
    title: "Premium Shirts",
    subtitle: "Casual & Formal Shirts",
    videoText: "Explore Shirts",
    metric: "TAILORED",
    metricText: "PERFECT FIT",
    headline: "Elevate your style with our premium range of casual and formal shirts, tailored for a perfect fit and all-day comfort.",
    cta: "SHOP SHIRTS →",
    ctaColor: "bg-yoode-onyx text-white",
  }
];

export function Hero() {
  const [active, setActive] = useState(0);

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <motion.div 
      className="relative min-h-screen w-full overflow-hidden text-yoode-offwhite flex flex-col"
      animate={{ backgroundColor: slide.bgColor }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] pointer-events-none" />

      {/* Main Hero Content */}
      <main className="relative flex-1 w-full flex items-center justify-center pt-20">
        
        {/* Mid-Background: Outline Text */}
        <div className="absolute z-10 w-full top-[50%] -translate-y-1/2 flex justify-center pointer-events-none overflow-hidden select-none">
          <h1 
            className="text-[28vw] font-display font-black leading-none tracking-tighter text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)" }}
          >
            YOODE
          </h1>
        </div>

        {/* Central Subject */}
        <div className="absolute z-20 w-full md:w-[85%] lg:w-[75%] xl:w-[78%] 2xl:w-[82%] h-[78%] md:h-[100%] xl:h-[105%] 2xl:h-[108%] bottom-0 pointer-events-none flex justify-center items-end">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute bottom-0 w-full h-full flex items-end justify-center"
            >
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-top md:object-contain md:object-bottom" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Highlights Wrapper - aligns precisely with Header's max-w-[1600px] and px-6 md:px-12 */}
        <div className="absolute inset-0 w-full max-w-[1600px] mx-auto pointer-events-none z-30">
          {/* Left Floating Highlight */}
          <div className="absolute left-6 md:left-12 top-[15%] md:top-[28%] flex flex-col gap-4 md:gap-6 w-56 pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + "-left"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4 md:gap-6"
            >
              <button className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 py-2.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-white/20 transition-colors w-max shadow-lg">
                <div className="bg-white text-black rounded-full p-1 shadow-sm">
                  <Play size={12} fill="currentColor" />
                </div>
                {slide.videoText}
              </button>
              
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-display font-bold tracking-tight">{slide.metric}</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/80 mt-1 md:mt-2 flex items-center gap-2 leading-relaxed">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse shrink-0" />
                  {slide.metricText}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
          </div>

          {/* Right Floating Highlight */}
          <div className="absolute right-6 md:left-auto md:right-12 top-[15%] md:top-[28%] flex flex-col gap-4 md:gap-6 w-auto md:w-80 items-end md:items-center text-right md:text-center pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + "-right"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4 md:gap-6 items-start md:items-center"
            >
              <p className="hidden md:block text-sm md:text-base leading-relaxed text-white/95 font-medium drop-shadow-md">
                {slide.headline}
              </p>
              
              <button className={`hidden md:flex group items-center gap-2 py-3 px-6 md:py-3.5 md:px-7 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider hover:scale-105 transition-transform shadow-xl ${slide.ctaColor}`}>
                {slide.cta}
              </button>
            </motion.div>
          </AnimatePresence>
          </div>
        </div>

      </main>

      {/* Bottom Category Dock */}
      <div className="absolute bottom-20 md:bottom-32 z-40 w-full px-6 md:px-12 flex justify-center">
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-4 lg:gap-6 w-full max-w-[1600px] pb-4 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {slides.map((s, idx) => (
            <div 
              key={s.id} 
              onClick={() => setActive(idx)}
              className="group relative bg-white text-yoode-onyx rounded-2xl p-3 flex items-center gap-3 cursor-pointer shadow-xl hover:-translate-y-1 transition-transform overflow-hidden h-[130px] md:h-[120px] shrink-0 w-[85vw] sm:w-[300px] lg:w-auto snap-center"
            >
              {/* Progress Line */}
              {active === idx && (
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute bottom-0 left-0 h-1 bg-black/20"
                />
              )}
              
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0 relative">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                {active !== idx && <div className="absolute inset-0 bg-white/40" />}
              </div>
              <div className="flex-1 overflow-hidden">
                <h3 className="font-display font-bold text-xs lg:text-sm leading-tight truncate">
                  {s.title}
                </h3>
                <p className="text-[10px] lg:text-xs text-yoode-onyx/60 mt-1 font-medium line-clamp-2">{s.subtitle}</p>
              </div>
              <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${active === idx ? 'bg-yoode-onyx text-white border-yoode-onyx' : 'border-yoode-onyx/20 text-yoode-onyx group-hover:bg-yoode-onyx group-hover:text-white'}`}>
                <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
