import React from 'react';
import Image from 'next/image';

export function CustomJerseysCtaLight() {
  return (
    <section className="bg-[#Fdf8f3] w-full mt-12 mb-0 overflow-hidden relative flex items-center justify-center min-h-[400px]">
      <div className="max-w-[1400px] w-full px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative h-full">
        
        {/* Left Image (Jersey Rack) */}
        <div className="hidden md:flex w-[30%] max-w-[320px] relative shrink-0 justify-center items-center py-12">
          <div className="aspect-[4/3] w-full rounded-[24px] overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
            <Image 
              src="/images/cta_jersey_rack.jpg" 
              alt="Custom Jersey Design" 
              fill 
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center w-full md:w-[40%] z-10 py-16 md:py-24">
          <h2 className="text-[28px] md:text-[36px] font-black uppercase text-yoode-onyx mb-5 leading-[1.1] tracking-tight">
            READY TO CREATE YOUR CUSTOM TEAM JERSEY?
          </h2>
          <p className="text-gray-500 text-[14px] md:text-[15px] font-medium mb-8 max-w-[400px] mx-auto leading-relaxed">
            Bring your team colours, logo and player details together in a jersey designed around your squad.
          </p>
          <a 
            href="https://wa.me/918069750293" 
            className="inline-flex bg-[#EA580C] text-white px-8 py-4 rounded-full font-bold text-[14px] hover:scale-105 transition-all shadow-md hover:shadow-xl hover:shadow-orange-500/20"
          >
            Need Help? Call +91 8069 750 293
          </a>
        </div>

        {/* Right Image (Model) */}
        <div className="hidden md:block w-[30%] relative h-[400px] md:h-[500px] shrink-0 self-end">
           <Image 
              src="/images/cta_jersey_model.jpg" 
              alt="Custom Team Kit Model" 
              fill 
              className="object-cover object-top mix-blend-multiply contrast-105"
            />
        </div>
      </div>
    </section>
  );
}
