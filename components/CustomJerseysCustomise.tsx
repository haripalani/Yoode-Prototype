import React from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/SectionHeader';

export function CustomJerseysCustomise({ 
  title = "CUSTOM SPORTS JERSEYS - CUSTOMISATION DETAILS",
  subHeading = "Customisation",
  heading = "What You Can Customise"
}: {
  title?: string;
  subHeading?: string;
  heading?: string;
} = {}) {
  const features = [
    { id: 'logo', img: 'yd-seo-print-team-logo.png', title: 'TEAM LOGO', desc: 'Personalise with your team\'s logo. High-definition sublimation ensures vibrant colours that never fade.' },
    { id: 'sponsor', img: 'yd-seo-print-sponsor-logos.png', title: 'SPONSOR LOGOS', desc: 'Add sponsor branding perfectly scaled for maximum visibility on the front body.' },
    { id: 'colours', img: 'yd-seo-print-team-colours.png', title: 'TEAM COLOURS', desc: 'Choose custom colours for the main body, sleeves, and trim to perfectly match your identity.' },
    { id: 'name', img: 'yd-seo-print-player-name.png', title: 'PLAYER NAME', desc: 'Add individual player names on the upper back in custom fonts.' },
    { id: 'number', img: 'yd-seo-print-player-number.png', title: 'PLAYER NUMBER', desc: 'Add player numbers on the center back in custom fonts and colours.' },
    { id: 'pattern', img: 'yd-seo-print-patterns.png', title: 'PATTERNS & PRINTS', desc: 'Select from various all-over sublimation patterns and full-body prints.' }
  ];

  return (
    <section className="py-16 md:py-24 w-full flex flex-col items-center bg-[#F3F4F6]">
      
      <div className="max-w-[1600px] w-full px-6 md:px-12">
        <SectionHeader
          subHeading={subHeading}
          title={heading}
          description="Every jersey is a blank canvas. Add your team colours, sponsor logos, and player details."
          align="center"
          className="mb-10 md:mb-16 !max-w-4xl"
        />
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-10">
        
        {/* Left Column: Features 1-3 */}
        <div className="w-full lg:w-[30%] flex flex-col gap-6 justify-center">
          {features.slice(0, 3).map((f, i) => (
            <div key={i} className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-4 hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative w-full sm:w-24 lg:w-full xl:w-24 h-40 sm:h-24 lg:h-40 xl:h-24 bg-gray-50 rounded-[16px] border border-gray-100 overflow-hidden shrink-0">
                <Image src={`https://yoode.com/cdn/shop/files/${f.img}?v=1789123391&width=400`} alt={f.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="text-[13px] font-black uppercase mb-1.5 text-yoode-onyx">{f.title}</h4>
                <p className="text-[12px] leading-relaxed text-gray-500 font-medium">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Column: Jerseys (No background, just models) */}
        <div className="w-full lg:w-[40%] flex flex-col relative items-center justify-center min-h-[400px]">
          
          <div className="flex-1 flex items-end justify-center gap-2 sm:gap-6 w-full relative z-10 min-h-0">
            <div className="w-1/2 flex flex-col items-center h-full">
              <div className="relative w-full h-full min-h-[200px] md:min-h-[250px]">
                <Image src="https://yoode.com/cdn/shop/files/yd-seo-print-kit-front.png?v=1789123364&width=500" alt="Front View" fill className="object-contain object-bottom drop-shadow-2xl scale-105 lg:scale-110 origin-bottom translate-y-4 lg:translate-y-8" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-yoode-onyx bg-gray-200/80 px-3 py-1.5 rounded-full shrink-0 relative z-20">FRONT</span>
            </div>
            <div className="w-1/2 flex flex-col items-center h-full">
              <div className="relative w-full h-full min-h-[200px] md:min-h-[250px]">
                <Image src="https://yoode.com/cdn/shop/files/yd-seo-print-kit-back.png?v=1789123364&width=500" alt="Back View" fill className="object-contain object-bottom drop-shadow-2xl scale-105 lg:scale-110 origin-bottom translate-y-4 lg:translate-y-8" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-yoode-onyx bg-gray-200/80 px-3 py-1.5 rounded-full shrink-0 relative z-20">BACK</span>
            </div>
          </div>
        </div>

        {/* Right Column: Features 4-6 */}
        <div className="w-full lg:w-[30%] flex flex-col gap-6 justify-center">
          {features.slice(3, 6).map((f, i) => (
            <div key={i} className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-4 hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative w-full sm:w-24 lg:w-full xl:w-24 h-40 sm:h-24 lg:h-40 xl:h-24 bg-gray-50 rounded-[16px] border border-gray-100 overflow-hidden shrink-0">
                <Image src={`https://yoode.com/cdn/shop/files/${f.img}?v=1789123391&width=400`} alt={f.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="text-[13px] font-black uppercase mb-1.5 text-yoode-onyx">{f.title}</h4>
                <p className="text-[12px] leading-relaxed text-gray-500 font-medium">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
