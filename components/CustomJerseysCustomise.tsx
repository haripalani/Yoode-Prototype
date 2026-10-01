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
          className="mb-10 md:mb-16"
        />
      </div>

      {/* Tech Pack Container - Grid Layout */}
      <div className="w-full max-w-[1400px] bg-white border-2 border-black font-sans text-black 2xl:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative flex flex-col mx-auto mb-10">
        
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Column: Title, Overview, and Models (Sticky) */}
          <div className="w-full lg:w-[40%] p-4 md:p-6 lg:p-8 flex flex-col lg:sticky lg:top-24 h-fit">
            <h2 className="text-xl md:text-2xl font-black uppercase mb-4 tracking-tight">{title}</h2>

            {/* Models side by side */}
            <div className="flex-1 flex items-end justify-center gap-2 sm:gap-6 mt-2 min-h-[450px] md:min-h-[550px]">
              <div className="w-1/2 flex flex-col items-center">
                <div className="relative w-full h-[400px] md:h-[550px]">
                  <Image src="https://yoode.com/cdn/shop/files/yd-seo-print-kit-front.png?v=1789123364&width=500" alt="Front View" fill className="object-contain object-bottom drop-shadow-xl" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest mt-4">FRONT</span>
              </div>
              <div className="w-1/2 flex flex-col items-center">
                <div className="relative w-full h-[400px] md:h-[550px]">
                  <Image src="https://yoode.com/cdn/shop/files/yd-seo-print-kit-back.png?v=1789123364&width=500" alt="Back View" fill className="object-contain object-bottom drop-shadow-xl" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest mt-4">BACK</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: All Features Grid */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 border-t-2 lg:border-t-0 lg:border-l-2 border-black bg-black gap-[2px]">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-4 lg:p-5 flex flex-col">
                <h4 className="text-xs font-black uppercase mb-3">{i + 1}. {f.title}</h4>
                <div className="relative w-full h-[160px] md:h-[200px] bg-gray-50 mb-3 border border-black/10 overflow-hidden shrink-0">
                  <Image src={`https://yoode.com/cdn/shop/files/${f.img}?v=1789123391&width=400`} alt={f.title} fill className="object-cover" />
                </div>
                <p className="text-[10px] leading-relaxed text-black/80 font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
