'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const sportsData = [
  {
    id: 'cricket',
    name: 'Cricket Jersey',
    icon: 'https://yoode.com/cdn/shop/files/yd-seo-icon-cricket.svg?v=1789122339&width=96',
    image: 'https://yoode.com/cdn/shop/files/cricket.png?v=1789385809&width=1600',
    link: '/custom-cricket-jerseys',
  },
  {
    id: 'football',
    name: 'Football Jersey',
    icon: 'https://yoode.com/cdn/shop/files/yd-seo-icon-football.svg?v=1789122339&width=96',
    image: 'https://yoode.com/cdn/shop/files/Football.webp?v=1789388323&width=1600',
  },
  {
    id: 'basketball',
    name: 'Basketball Jersey',
    icon: 'https://yoode.com/cdn/shop/files/yd-seo-icon-basketball.svg?v=1789122339&width=96',
    image: 'https://yoode.com/cdn/shop/files/BasketBall.webp?v=1789388369&width=1600',
  },
  {
    id: 'badminton',
    name: 'Badminton Jersey',
    icon: 'https://yoode.com/cdn/shop/files/yd-seo-icon-badminton.svg?v=1789122339&width=96',
    image: 'https://yoode.com/cdn/shop/files/Badminton.webp?v=1789446482&width=1600',
  },
  {
    id: 'cycling',
    name: 'Cycling Jersey',
    icon: 'https://yoode.com/cdn/shop/files/yd-seo-icon-cycling.svg?v=1789122339&width=96',
    image: 'https://yoode.com/cdn/shop/files/Cycling.webp?v=1789531339&width=1600',
  },
  {
    id: 'esports',
    name: 'Esports Jersey',
    icon: 'https://yoode.com/cdn/shop/files/yd-seo-icon-esports.svg?v=1789122339&width=96',
    image: 'https://yoode.com/cdn/shop/files/Esports.webp?v=1789531388&width=1600',
  },
  {
    id: 'volleyball',
    name: 'Volleyball Jersey',
    icon: 'https://yoode.com/cdn/shop/files/yd-seo-icon-volleyball.svg?v=1789122339&width=96',
    image: 'https://yoode.com/cdn/shop/files/VolleyBall.webp?v=1789531414&width=1600',
  },
  {
    id: 'running',
    name: 'Running Jersey',
    icon: 'https://yoode.com/cdn/shop/files/yd-seo-icon-running.svg?v=1789122339&width=96',
    image: 'https://yoode.com/cdn/shop/files/Running.webp?v=1789531433&width=1600',
  },
];

export default function ShopBySport() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSport = sportsData[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? sportsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === sportsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-[#EBEBEB] to-[#DFDFDF] w-full py-10 md:py-16 relative overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col items-center">
        <div className="text-center mb-10 px-6 w-full z-10">
          <div className="flex justify-center items-center gap-4 text-yoode-coral uppercase tracking-[0.2em] text-xs font-bold mb-4">
            SPORTS CATEGORIES
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[52px] font-black text-yoode-onyx tracking-tight mb-4">
            SHOP CUSTOM JERSEYS BY SPORT
          </h2>
          <p className="text-yoode-onyx/70 text-lg font-medium w-full mb-8">
            Choose your sport, neck, sleeve and fit, then design your own jersey with unique team colours, logos and player details.
          </p>

        </div>

        <div className="relative w-full max-w-[1400px] flex items-center justify-between min-h-[350px] md:min-h-[500px] px-4 lg:px-12 z-20">
          
          {/* Left Nav Button (Mobile Only) */}
          <button 
            onClick={handlePrev}
            className="lg:hidden absolute left-4 z-30 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:scale-105 shadow-sm transition-transform"
            aria-label="Previous sport"
          >
            <svg className="w-5 h-5 text-yoode-onyx" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Left Arc Icons */}
          <div className="hidden lg:flex flex-col h-[380px] justify-between w-48 z-20 shrink-0">
            {sportsData.slice(0, 4).map((sport, idx) => {
              const isActive = sport.id === activeSport.id;
              const translateX = idx === 1 || idx === 2 ? '-20px' : '0px';
              return (
                <div 
                  key={sport.id} 
                  className="flex items-center gap-4 transition-transform duration-300"
                  style={{ transform: `translateX(${translateX})` }}
                >
                  <button
                    onClick={() => setActiveIndex(idx)}
                    className={`w-16 h-16 shrink-0 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                      isActive ? 'bg-yoode-onyx scale-110 shadow-xl' : 'bg-white/80 backdrop-blur hover:bg-white border border-white/20'
                    }`}
                  >
                    <img 
                      src={sport.icon} 
                      alt={sport.name} 
                      className={`w-8 h-8 ${isActive ? 'brightness-0 invert' : 'brightness-0 opacity-80'}`} 
                    />
                  </button>
                  {isActive && (
                    <span className="font-bold text-sm text-yoode-onyx tracking-wide whitespace-nowrap">{sport.name}</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Center Image */}
          <div className="relative w-full max-w-4xl h-[350px] md:h-[500px] z-10 mx-auto transition-opacity duration-500">
            {/* Studio Floor Shadow */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[60%] h-10 bg-black/20 blur-xl rounded-[100%] z-0 pointer-events-none"></div>
            
            <Image 
              key={activeSport.id}
              src={activeSport.image} 
              alt={activeSport.name}
              fill
              className="object-contain animate-fade-in mix-blend-multiply relative z-10 drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] pb-16"
              priority
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
              <Link 
                href={activeSport.link || "#"} 
                className="inline-block bg-[#EB6F3D] text-white font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-full hover:bg-yoode-onyx transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                Design {activeSport.name}
              </Link>
            </div>
          </div>

          {/* Right Arc Icons */}
          <div className="hidden lg:flex flex-col h-[380px] justify-between w-48 z-20 shrink-0 items-end">
            {sportsData.slice(4, 8).map((sport, idx) => {
              const actualIdx = idx + 4;
              const isActive = sport.id === activeSport.id;
              const translateX = idx === 1 || idx === 2 ? '20px' : '0px';
              return (
                <div 
                  key={sport.id} 
                  className="flex items-center gap-4 flex-row-reverse transition-transform duration-300"
                  style={{ transform: `translateX(${translateX})` }}
                >
                  <button
                    onClick={() => setActiveIndex(actualIdx)}
                    className={`w-16 h-16 shrink-0 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                      isActive ? 'bg-yoode-onyx scale-110 shadow-xl' : 'bg-white/80 backdrop-blur hover:bg-white border border-white/20'
                    }`}
                  >
                    <img 
                      src={sport.icon} 
                      alt={sport.name} 
                      className={`w-8 h-8 ${isActive ? 'brightness-0 invert' : 'brightness-0 opacity-80'}`} 
                    />
                  </button>
                  {isActive && (
                    <span className="font-bold text-sm text-yoode-onyx tracking-wide whitespace-nowrap">{sport.name}</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Nav Button (Mobile Only) */}
          <button 
            onClick={handleNext}
            className="lg:hidden absolute right-4 z-30 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:scale-105 shadow-sm transition-transform"
            aria-label="Next sport"
          >
            <svg className="w-5 h-5 text-yoode-onyx" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>
      </div>
    </section>
  );
}
