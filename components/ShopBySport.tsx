'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const sportsData = [
  {
    id: 'cricket',
    name: 'Cricket Jersey',
    icon: 'https://yoode.com/cdn/shop/files/yd-seo-icon-cricket.svg?v=1789122339&width=96',
    image: 'https://yoode.com/cdn/shop/files/cricket.png?v=1789385809&width=1600',
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
    <section className="py-10 px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden flex flex-col items-center justify-center relative">
      <div className="bg-[#EBEBEB] w-full rounded-[40px] py-16 md:py-24 relative overflow-hidden flex flex-col items-center">
        <div className="text-center mb-12 px-6 max-w-3xl z-10">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-yoode-onyx tracking-tight mb-4">
            SHOP CUSTOM JERSEYS BY SPORT
          </h2>
          <p className="text-yoode-onyx/70 text-lg font-medium">
            Choose your sport, neck, sleeve and fit, then design your own jersey with
            unique team colours, logos and player details.
          </p>
        </div>

        <div className="relative w-full max-w-[1400px] flex items-center justify-center min-h-[500px] md:min-h-[600px] px-4 md:px-20">
          
          {/* Left Nav Button */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 md:left-24 z-20 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:scale-105 shadow-sm transition-transform"
            aria-label="Previous sport"
          >
            <svg className="w-5 h-5 text-yoode-onyx" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Left Arc Icons (indices 0-3) */}
          <div className="hidden lg:flex flex-col absolute left-[5%] xl:left-[10%] h-[400px] justify-between z-20">
            {sportsData.slice(0, 4).map((sport, idx) => {
              const isActive = sport.id === activeSport.id;
              // Arc offset calculations
              const translateX = idx === 0 || idx === 3 ? '0px' : '-40px';
              return (
                <div 
                  key={sport.id} 
                  className="flex items-center gap-4 transition-transform duration-300"
                  style={{ transform: `translateX(${translateX})` }}
                >
                  {isActive && (
                    <span className="font-bold text-sm text-yoode-onyx tracking-wide">{sport.name}</span>
                  )}
                  <button
                    onClick={() => setActiveIndex(idx)}
                    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                      isActive ? 'bg-yoode-onyx scale-110' : 'bg-white/80 backdrop-blur hover:bg-white border border-white/20'
                    }`}
                  >
                    <img 
                      src={sport.icon} 
                      alt={sport.name} 
                      className={`w-8 h-8 ${isActive ? 'brightness-0 invert' : ''}`} 
                    />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Center Image */}
          <div className="relative w-full max-w-4xl h-[50vh] md:h-[60vh] min-h-[400px] md:min-h-[500px] z-10 transition-opacity duration-500">
            <Image 
              key={activeSport.id}
              src={activeSport.image} 
              alt={activeSport.name}
              fill
              className="object-contain animate-fade-in mix-blend-multiply"
              priority
            />
          </div>

          {/* Right Arc Icons (indices 4-7) */}
          <div className="hidden lg:flex flex-col absolute right-[5%] xl:right-[10%] h-[400px] justify-between z-20">
            {sportsData.slice(4, 8).map((sport, idx) => {
              const actualIdx = idx + 4;
              const isActive = sport.id === activeSport.id;
              // Arc offset calculations
              const translateX = idx === 0 || idx === 3 ? '0px' : '40px';
              return (
                <div 
                  key={sport.id} 
                  className="flex items-center gap-4 flex-row-reverse transition-transform duration-300"
                  style={{ transform: `translateX(${translateX})` }}
                >
                  {isActive && (
                    <span className="font-bold text-sm text-yoode-onyx tracking-wide">{sport.name}</span>
                  )}
                  <button
                    onClick={() => setActiveIndex(actualIdx)}
                    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                      isActive ? 'bg-yoode-onyx scale-110' : 'bg-white/80 backdrop-blur hover:bg-white border border-white/20'
                    }`}
                  >
                    <img 
                      src={sport.icon} 
                      alt={sport.name} 
                      className={`w-8 h-8 ${isActive ? 'brightness-0 invert' : ''}`} 
                    />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right Nav Button */}
          <button 
            onClick={handleNext}
            className="absolute right-4 md:right-24 z-20 w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:scale-105 shadow-sm transition-transform"
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
