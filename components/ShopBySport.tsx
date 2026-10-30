'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SportItem {
  id: string;
  name: string;
  icon?: string;
  image: string;
  link?: string;
}

const sportsData: SportItem[] = [
  // LEFT ARC (6 items)
  {
    id: 'cricket',
    name: 'Cricket',
    icon: '/icons/sports/cricket.svg',
    image: '/cricket-preview.png',
    link: '/custom-cricket-jerseys',
  },
  {
    id: 'basketball',
    name: 'Basketball',
    icon: '/icons/sports/basketball.svg',
    image: 'https://yoode.com/cdn/shop/files/BasketBall.webp?v=1789388369&width=1600',
    link: '/custom-sports-jerseys',
  },
  {
    id: 'volleyball',
    name: 'Volleyball',
    icon: '/icons/sports/volleyball.svg',
    image: 'https://yoode.com/cdn/shop/files/VolleyBall.webp?v=1789531414&width=1600',
    link: '/custom-sports-jerseys',
  },
  {
    id: 'baseball',
    name: 'Baseball',
    icon: '/icons/sports/baseball.svg',
    image: 'https://yoode.com/cdn/shop/files/Baseball.webp?v=1789388323&width=1600',
    link: '/custom-sports-jerseys',
  },
  {
    id: 'football',
    name: 'Football',
    icon: '/icons/sports/football.svg',
    image: 'https://yoode.com/cdn/shop/files/Football.webp?v=1789388323&width=1600',
    link: '/custom-sports-jerseys',
  },
  {
    id: 'badminton',
    name: 'Badminton',
    icon: '/icons/sports/badminton.svg',
    image: 'https://yoode.com/cdn/shop/files/Badminton.webp?v=1789446482&width=1600',
    link: '/custom-sports-jerseys',
  },

  // RIGHT ARC (6 items)
  {
    id: 'esports',
    name: 'Esports',
    icon: '/icons/sports/esports.svg',
    image: 'https://yoode.com/cdn/shop/files/Esports.webp?v=1789531388&width=1600',
    link: '/custom-sports-jerseys',
  },
  {
    id: 'running',
    name: 'Running',
    icon: '/icons/sports/running.svg',
    image: 'https://yoode.com/cdn/shop/files/Running.webp?v=1789531433&width=1600',
    link: '/custom-sports-jerseys',
  },
  {
    id: 'cycling',
    name: 'Cycling',
    icon: '/icons/sports/cycling.svg',
    image: 'https://yoode.com/cdn/shop/files/Cycling.webp?v=1789531339&width=1600',
    link: '/custom-sports-jerseys',
  },
  {
    id: 'golf',
    name: 'Golf',
    icon: '', // Rendered as clean blank white circle button as in reference
    image: 'https://yoode.com/cdn/shop/files/Golf.webp?v=1789388323&width=1600',
    link: '/custom-sports-jerseys',
  },
  {
    id: 'kabbadi',
    name: 'Kabbadi',
    icon: '', // Rendered as clean blank white circle button as in reference
    image: 'https://yoode.com/cdn/shop/files/Kabbadi.webp?v=1789388323&width=1600',
    link: '/custom-sports-jerseys',
  },
  {
    id: 'pickleball',
    name: 'Pickle ball',
    icon: '', // Rendered as clean blank white circle button as in reference
    image: 'https://yoode.com/cdn/shop/files/Pickleball.webp?v=1789388323&width=1600',
    link: '/custom-sports-jerseys',
  },
];

export default function ShopBySport() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const activeSport = sportsData[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? sportsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === sportsData.length - 1 ? 0 : prev + 1));
  };

  // Inward arc curvature: indices 0 & 5 curve furthest inward towards the center model,
  // indices 1 & 4 curve moderately inward, indices 2 & 3 are outermost.
  const getTranslateX = (idx: number, isRight: boolean) => {
    const inward = (idx === 0 || idx === 5) ? 36 : (idx === 1 || idx === 4) ? 18 : 0;
    return isRight ? `-${inward}px` : `${inward}px`;
  };

  return (
    <section className="bg-[radial-gradient(ellipse_at_center,_#FFFFFF_0%,_#F8F8F7_55%,_#EFEFEF_100%)] w-full py-10 md:py-16 relative overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 px-6 w-full z-10">
          <div className="flex justify-center items-center gap-4 text-yoode-coral uppercase tracking-[0.2em] text-xs font-bold mb-3">
            SPORTS CATEGORIES
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[52px] font-black text-yoode-onyx tracking-tight mb-4">
            SHOP CUSTOM JERSEYS BY SPORT
          </h2>
          <p className="text-yoode-onyx/70 text-base md:text-lg font-medium max-w-2xl mx-auto">
            Choose your sport, neck, sleeve and fit, then design your own jersey with unique team colours, logos and player details.
          </p>
        </div>

        {/* Studio Window Showcase */}
        <div className="relative w-full max-w-[1450px] flex items-center justify-between min-h-[460px] md:min-h-[540px] px-4 lg:px-8 z-20">
          
          {/* Left Nav Button (Mobile Only) */}
          <button 
            onClick={handlePrev}
            className="lg:hidden absolute left-3 z-40 w-11 h-11 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:scale-105 shadow-md border border-black/[0.04] transition-all cursor-pointer"
            aria-label="Previous sport"
          >
            <svg className="w-5 h-5 text-yoode-onyx" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Left Arc Icons (6 sports) */}
          <div className="hidden lg:flex flex-col h-[520px] justify-between w-56 z-20 shrink-0 py-3">
            {sportsData.slice(0, 6).map((sport, idx) => {
              const isActive = sport.id === activeSport.id;
              const translateX = getTranslateX(idx, false);
              return (
                <div 
                  key={sport.id} 
                  className="flex items-center transition-all duration-300 relative"
                  style={{ transform: `translateX(${translateX})` }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-[#141E28] scale-110 shadow-[0_8px_24px_rgba(20,30,40,0.3)] z-10' 
                        : 'bg-white shadow-[0_4px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.12)] hover:scale-105 border border-black/[0.04]'
                    }`}
                    aria-label={`Select ${sport.name}`}
                    title={sport.name}
                  >
                    {sport.icon ? (
                      <img 
                        src={sport.icon} 
                        alt="" 
                        className={`w-7 h-7 transition-all ${isActive ? 'brightness-0 invert' : 'brightness-0 opacity-80'}`} 
                      />
                    ) : (
                      <span className={`w-3 h-3 rounded-full transition-all ${isActive ? 'bg-white' : 'bg-transparent'}`} />
                    )}
                  </button>
                  {isActive && (
                    <span className="ml-3.5 font-bold text-sm md:text-[15px] text-[#141E28] tracking-wide whitespace-nowrap select-none animate-fade-in">
                      {sport.name}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Center 3D Model / Jersey Stage */}
          <div className="relative w-full max-w-4xl h-[460px] md:h-[540px] z-10 mx-auto transition-opacity duration-500 flex items-center justify-center px-4">
            
            {/* Diffused Floor Shadow under the models */}
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[55%] max-w-[440px] h-8 bg-black/[0.14] blur-xl rounded-[100%] z-0 pointer-events-none"></div>
            
            {imageError[activeSport.id] ? (
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-white/60 shadow-xl pb-16 mt-6 max-w-md w-full">
                <div className="w-16 h-16 mb-4 rounded-full bg-yoode-onyx/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-yoode-onyx/50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-yoode-onyx mb-1.5">{activeSport.name} Jersey</h3>
                <p className="text-yoode-onyx/60 text-sm font-medium">Design photoshoot in progress. Tap below to customize your team kit.</p>
              </div>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center pb-14 z-10">
                <Image 
                  key={activeSport.id}
                  src={activeSport.image} 
                  alt={`${activeSport.name} Custom Jersey - Front, Back and Profile View`}
                  fill
                  className="object-contain animate-fade-in relative z-10 drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)] pb-12"
                  priority={activeSport.id === 'cricket'}
                  onError={() => setImageError(prev => ({ ...prev, [activeSport.id]: true }))}
                />
              </div>
            )}

            {/* Bottom Floating Pill CTA Button */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30">
              <Link 
                href={activeSport.link || `/custom-${activeSport.id}-jerseys`} 
                className="inline-flex items-center justify-center bg-[#EA580C] hover:bg-[#D94E06] text-white font-bold uppercase tracking-wider text-xs md:text-sm px-10 md:px-12 py-3.5 md:py-4 rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(234,88,12,0.38)] hover:shadow-[0_14px_30px_rgba(234,88,12,0.48)] transform hover:-translate-y-0.5 whitespace-nowrap active:scale-95"
              >
                DESIGN {activeSport.name.toUpperCase()} JERSEY
              </Link>
            </div>
          </div>

          {/* Right Arc Icons (6 sports) */}
          <div className="hidden lg:flex flex-col h-[520px] justify-between w-56 z-20 shrink-0 items-end py-3">
            {sportsData.slice(6, 12).map((sport, idx) => {
              const actualIdx = idx + 6;
              const isActive = sport.id === activeSport.id;
              const translateX = getTranslateX(idx, true);
              return (
                <div 
                  key={sport.id} 
                  className="flex items-center flex-row-reverse transition-all duration-300 relative"
                  style={{ transform: `translateX(${translateX})` }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(actualIdx)}
                    className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-[#141E28] scale-110 shadow-[0_8px_24px_rgba(20,30,40,0.3)] z-10' 
                        : 'bg-white shadow-[0_4px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.12)] hover:scale-105 border border-black/[0.04]'
                    }`}
                    aria-label={`Select ${sport.name}`}
                    title={sport.name}
                  >
                    {sport.icon ? (
                      <img 
                        src={sport.icon} 
                        alt="" 
                        className={`w-7 h-7 transition-all ${isActive ? 'brightness-0 invert' : 'brightness-0 opacity-80'}`} 
                      />
                    ) : (
                      <span className={`w-3 h-3 rounded-full transition-all ${isActive ? 'bg-white' : 'bg-transparent'}`} />
                    )}
                  </button>
                  {isActive && (
                    <span className="mr-3.5 font-bold text-sm md:text-[15px] text-[#141E28] tracking-wide whitespace-nowrap select-none animate-fade-in">
                      {sport.name}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Nav Button (Mobile Only) */}
          <button 
            onClick={handleNext}
            className="lg:hidden absolute right-3 z-40 w-11 h-11 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:scale-105 shadow-md border border-black/[0.04] transition-all cursor-pointer"
            aria-label="Next sport"
          >
            <svg className="w-5 h-5 text-yoode-onyx" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>

        {/* Mobile / Tablet Horizontal Sport Selector */}
        <div className="flex lg:hidden overflow-x-auto w-full px-6 pt-6 pb-2 gap-3 hide-scrollbar justify-start md:justify-center z-20">
          {sportsData.map((sport, idx) => {
            const isActive = sport.id === activeSport.id;
            return (
              <button
                key={sport.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#141E28] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:text-black border border-gray-200'
                }`}
              >
                {sport.icon ? (
                  <img
                    src={sport.icon}
                    alt=""
                    className={`w-4 h-4 ${isActive ? 'brightness-0 invert' : 'brightness-0 opacity-70'}`}
                  />
                ) : (
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-gray-300'}`} />
                )}
                <span>{sport.name}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
