"use client";

import React, { useState } from "react";
import IndiaMap from "@svg-maps/india";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation, HardHat, MapPin } from "lucide-react";
import Image from "next/image";

type ExperienceCenter = {
  id: string;
  city: string;
  state: string;
  address: string;
  phone?: string;
  image?: string;
  coords: { x: number; y: number };
  isComingSoon?: boolean;
};

// Based on actual Yoode locations
const allCenters: ExperienceCenter[] = [
  {
    id: "blr",
    city: "Bangalore",
    state: "Karnataka",
    address: "Ground Floor, #68 Transpade Tower, Jyoti Nivas College Rd, Koramangala 5th Block, Bengaluru, Karnataka 560095",
    image: "/Bangalore_store.webp",
    coords: { x: 190, y: 520 }, // approximate coordinates on SVG
  },
  {
    id: "tvm",
    city: "Trivandrum",
    state: "Kerala",
    address: "Ground Floor, CloudQ Towers, Service Rd, near Technopark Campus Phase 1, Kazhakkoottam, Kerala 695582",
    image: "/Thiruvananthapuram_Store.webp",
    coords: { x: 175, y: 650 },
  },
  {
    id: "che",
    city: "Chennai",
    state: "Tamil Nadu",
    address: "Coming Soon",
    coords: { x: 260, y: 580 },
    isComingSoon: true,
  },
  {
    id: "mar",
    city: "Marthandam",
    state: "Tamil Nadu",
    address: "1st Floor, Adhesh Tower, Eraviputhoorkadai, Marthandam, Tamil Nadu 629155",
    image: "/Marthandam_Store.webp",
    coords: { x: 195, y: 670 },
  },
];

const leftCenters = allCenters.slice(0, 2);
const rightCenters = allCenters.slice(2, 4);

export function ExperienceCenters() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const CenterCard = ({ center, isBottom }: { center: ExperienceCenter, isBottom: boolean }) => {
    const isActive = activeId === center.id;

    return (
      <div className={`relative w-full ${isActive ? 'z-[100]' : 'z-20'}`}>
        {/* Invisible Placeholder to maintain layout space */}
        <div className="p-5 md:p-6 opacity-0 pointer-events-none invisible">
          <div className="flex items-start justify-between mb-2">
            <div className="p-2"><MapPin size={20} /></div>
          </div>
          <h3 className="text-xl font-bold mt-2">{center.city}</h3>
          <p className="text-sm font-medium mb-3">{center.state}</p>
          {!center.isComingSoon && <p className="text-xs leading-relaxed mb-4">{center.address}</p>}
        </div>

        {/* Actual Interactive Card */}
        <div
          onMouseEnter={() => setActiveId(center.id)}
          onMouseLeave={() => setActiveId(null)}
          className={`absolute ${isBottom ? 'bottom-0' : 'top-0'} left-0 w-full p-4 md:p-5 rounded-2xl border transition-all duration-300 cursor-pointer bg-white flex flex-col
            ${isActive ? 'border-blue-500 shadow-2xl z-[100] scale-[1.05]' : 'border-gray-200 hover:border-blue-300 hover:shadow-lg z-20'}`}
        >
          {isBottom && (
            <AnimatePresence>
              {isActive && center.image && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: 200, marginBottom: 16 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  className="w-full rounded-xl overflow-hidden origin-bottom"
                >
                  <Image
                    src={center.image}
                    alt={`${center.city} Experience Center`}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )}

          <div className="flex flex-col relative z-10">
            <div className="flex items-start justify-between mb-2">
              <div className="bg-blue-50 text-blue-600 p-2 rounded-xl">
                {center.isComingSoon ? <HardHat size={20} /> : <MapPin size={20} />}
              </div>
              {center.isComingSoon ? (
                <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  Coming Soon
                </span>
              ) : (
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  Open Now
                </span>
              )}
            </div>

            <h3 className={`text-xl font-bold mt-2 ${isActive ? 'text-blue-600' : 'text-yoode-onyx'}`}>
              {center.city}
            </h3>
            <p className="text-gray-500 text-sm font-medium mb-3">{center.state}</p>

            {!center.isComingSoon && (
              <p className="text-xs text-gray-600 leading-relaxed mb-1 flex-grow">
                {center.address}
              </p>
            )}
          </div>

          {!isBottom && (
            <AnimatePresence>
              {isActive && center.image && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 200, marginTop: 16 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="w-full rounded-xl overflow-hidden origin-top"
                >
                  <Image
                    src={center.image}
                    alt={`${center.city} Experience Center`}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-20 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8 flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-yoode-onyx leading-tight">
            We work for you. We care about quality. We're all over India.
          </h2>
          <p className="text-gray-500 mt-4 md:mt-6 text-base md:text-lg leading-relaxed">
            See it. Touch it. Make it yours. Visit our physical design labs for reliable solutions, ongoing support, and real results.
          </p>
        </div>

        {/* Layout: Map in center, Cards floating on left/right */}
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-4 items-center justify-between relative">

          {/* Left Cards */}
          <div className="w-full lg:w-[30%] flex flex-col gap-6 relative z-20">
            {leftCenters.map((center, idx) => <CenterCard key={center.id} center={center} isBottom={idx === 1} />)}
          </div>

          {/* Map Container (Center) */}
          <div className="relative w-full max-w-md lg:w-[38%] aspect-[612/696] flex-shrink-0 my-6 lg:my-0 z-10">
            {/* SVG Map */}
            <svg
              viewBox={IndiaMap.viewBox}
              className="w-full h-full drop-shadow-2xl"
            >
              <defs>
                <pattern id="dotPattern3" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#CBD5E1" className="opacity-60" />
                </pattern>
                <mask id="indiaMask3">
                  {IndiaMap.locations.map((location: any) => (
                    <path key={location.id} d={location.path} fill="white" />
                  ))}
                </mask>
              </defs>

              <rect
                x="0" y="0"
                width="100%" height="100%"
                fill="url(#dotPattern3)"
                mask="url(#indiaMask3)"
              />

              {/* Stroke */}
              {IndiaMap.locations.map((location: any) => (
                <path key={`stroke-${location.id}`} d={location.path} fill="none" stroke="#64748B" strokeWidth="0.8" className="opacity-50" />
              ))}
              {/* Connecting Lines for ALL Items */}
              {allCenters.map((center, index) => {
                const isHovered = activeId === center.id;
                const isLeft = leftCenters.some(c => c.id === center.id);

                const startX = center.coords.x;
                const startY = center.coords.y;
                const endX = isLeft ? 0 : 612;
                // Approximate vertical position of the card (top vs bottom)
                const endY = (index % 2 === 0) ? 150 : 550;

                // Control points for a smooth S-curve
                const cp1X = startX + (isLeft ? -100 : 100);
                const cp1Y = startY;
                const cp2X = endX + (isLeft ? 100 : -100);
                const cp2Y = endY;

                const pathData = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;

                return (
                  <path
                    key={`line-${center.id}`}
                    d={pathData}
                    fill="none"
                    stroke={isHovered ? "#3B82F6" : "#94A3B8"}
                    strokeWidth={isHovered ? "2.5" : "1.5"}
                    strokeDasharray="4 4"
                    className={`transition-all duration-300 ${isHovered ? "animate-pulse" : "opacity-80"}`}
                  />
                );
              })}
            </svg>

            {/* Markers layered on top of SVG */}
            <div className="absolute inset-0 pointer-events-none">
              {allCenters.map((center) => {
                const top = `${(center.coords.y / 696) * 100}%`;
                const left = `${(center.coords.x / 612) * 100}%`;
                const isActive = activeId === center.id;

                return (
                  <div key={center.id} className="absolute" style={{ top, left }}>
                    <div
                      className={`relative -ml-4 -mt-4 w-8 h-8 flex items-center justify-center cursor-pointer pointer-events-auto transition-all duration-300 ${isActive ? 'scale-125 z-50' : 'hover:scale-110 z-10'}`}
                      onMouseEnter={() => setActiveId(center.id)}
                      onMouseLeave={() => setActiveId(null)}
                    >
                      {isActive && <span className="absolute inset-0 rounded-full bg-blue-500 opacity-40 animate-ping" />}

                      {center.isComingSoon ? (
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 border-white z-10 transition-colors ${isActive ? 'bg-amber-500' : 'bg-amber-400'}`}>
                          <HardHat size={12} className="text-white" />
                        </div>
                      ) : (
                        <span className={`absolute w-4 h-4 rounded-full shadow-lg border-2 border-white z-10 transition-colors ${isActive ? 'bg-blue-600' : 'bg-gray-800'}`} />
                      )}

                      {/* Tooltip on marker hover (shows on small screens mostly or as extra indicator) */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-yoode-onyx text-white text-xs font-bold px-3 py-1.5 rounded whitespace-nowrap shadow-xl"
                          >
                            {center.city}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-yoode-onyx transform rotate-45 -mt-1" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Cards */}
          <div className="w-full lg:w-[30%] flex flex-col gap-6 relative z-20">
            {rightCenters.map((center, idx) => <CenterCard key={center.id} center={center} isBottom={idx === 1} />)}
          </div>

        </div>
      </div>
    </section>
  );
}
