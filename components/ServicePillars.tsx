"use client";

import { useState } from "react";
import { ArrowUpRight, Wrench } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    title: "DTG Printing",
    image: "/services/dtg.jpg",
    objectPosition: "object-center",
  },
  {
    title: "DTF Printing",
    image: "/services/dtf.jpg",
    objectPosition: "object-center",
  },
  {
    title: "Embroidery",
    image: "/services/embroidery.jpg",
    objectPosition: "object-[50%_90%]", // Focus on the stitched logo at the bottom
  },
  {
    title: "Coloreel",
    image: "/services/coloreel.jpg",
    objectPosition: "object-center",
  },
  {
    title: "Screen Printing",
    image: "/services/screen_printing.jpg",
    objectPosition: "object-center",
  },
  {
    title: "UV Printing",
    image: "/services/uv_printing.jpg",
    objectPosition: "object-[50%_70%]",
  },
  {
    title: "Engraving",
    image: "/services/engraving.jpg",
    objectPosition: "object-center",
  },
];

export function ServicePillars() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 md:py-16 px-6 md:px-12 bg-[#F6F5F2] overflow-hidden relative" id="services">
      {/* Soft gradient background similar to image 1 */}
      <div className="absolute top-0 left-1/4 w-full h-[500px] bg-gradient-to-b from-[#E7D6C9]/40 to-transparent -rotate-12 blur-3xl pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Header Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-8">
          <SectionHeader
            subHeading="Our Services"
            title="Yoode's Promise: Printing at its Best. Period."
            description="Every print, every order over the past 18 years, Yoode has poured heart and soul into each one, with unwavering pride in delivering exceptional quality that brings your brand's vision to life."
            align="left"
            className="mb-0 max-w-3xl lg:mb-0"
          />

          <div className="max-w-md lg:pb-2">
            <a href="#all-services" className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-[#E5CDC0] hover:bg-[#d8c1b4] transition-colors font-semibold text-yoode-onyx shadow-sm group">
              Continue exploring
              <span className="w-10 h-10 rounded-full bg-yoode-onyx text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </div>
        </div>

        {/* Horizontal Accordion Layout */}
        <div className="flex flex-col lg:flex-row gap-3 w-full h-[600px] lg:h-[400px]">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-3xl overflow-hidden group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isActive 
                    ? "flex-[6] lg:flex-[5] shadow-2xl" 
                    : "flex-1 shadow-sm hover:flex-[1.2]"
                }`}
              >
                {/* Background Image */}
                <img 
                  src={service.image} 
                  alt={service.title}
                  className={`absolute inset-0 w-full h-full object-cover ${service.objectPosition || "object-center"} transition-all duration-1000 ${
                    isActive 
                      ? "scale-105 opacity-100" 
                      : "scale-100 opacity-60 grayscale-[50%] group-hover:grayscale-0 group-hover:opacity-100"
                  }`}
                />
                
                {/* Overlays for contrast */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-40"}`} />
                <div className={`absolute inset-0 bg-black/50 transition-opacity duration-700 ${isActive ? "opacity-0" : "opacity-100 group-hover:opacity-50"}`} />
                
                {/* Active Card Content */}
                <div className={`absolute inset-0 p-6 flex flex-col justify-end transition-all duration-500 delay-100 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white bg-black/20 group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                  <h3 className="text-white text-3xl md:text-4xl font-display font-black mb-1 drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>

                {/* Collapsed Card Content (Vertical Text) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isActive ? "opacity-0 invisible delay-0" : "opacity-100 visible delay-200"}`}>
                  <h3 className="text-white font-display font-bold text-lg md:text-xl tracking-[0.15em] uppercase lg:-rotate-90 whitespace-nowrap drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
