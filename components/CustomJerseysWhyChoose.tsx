import React from 'react';
import Image from 'next/image';
import { PenTool, Columns, Printer, Layers, Box, Truck } from 'lucide-react';

export function CustomJerseysWhyChoose() {
  const features = [
    {
      icon: <PenTool className="w-5 h-5 text-gray-700" />,
      title: "PERSONALISED FOR EVERY PLAYER",
      desc: "Keep your team design consistent while giving every player their own name and number across the complete jersey order."
    },
    {
      icon: <Columns className="w-5 h-5 text-gray-700" />,
      title: "HOME, AWAY & TEAM VARIANTS",
      desc: "Create coordinated home and away jerseys, along with captain, goalkeeper, staff or supporter variations based on your team requirements."
    },
    {
      icon: <Printer className="w-5 h-5 text-gray-700" />,
      title: "ONE ORDER, MULTIPLE SIZES",
      desc: "Order junior and adult sizes together, with sizes ranging from 22 to 52 for different players within the same team."
    },
    {
      icon: <Layers className="w-5 h-5 text-gray-700" />,
      title: "ALL-OVER PRINT DESIGN FREEDOM",
      desc: "Go beyond basic logo placement with gradients, patterns and full-sublimation graphics that can extend across the entire jersey."
    },
    {
      icon: <Box className="w-5 h-5 text-gray-700" />,
      title: "REVISE BEFORE PRODUCTION",
      desc: "Review your jersey mockup and request changes to colours, player details and placements before the final design moves into production."
    },
    {
      icon: <Truck className="w-5 h-5 text-gray-700" />,
      title: "DELIVERED ACROSS WORLDWIDE",
      desc: "Nationwide delivery makes it easy to receive your custom jerseys wherever your team is."
    }
  ];

  return (
    <section className="pt-20 md:pt-24 pb-12 w-full flex flex-col items-center bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        
        <div className="flex flex-col items-center text-center w-full mx-auto mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-4 text-[#E53935] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Yoode Quality
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black uppercase text-yoode-onyx mb-4 tracking-tight">
            WHY TEAMS CHOOSE YOODE FOR CUSTOM JERSEYS
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
            Experience the perfect blend of premium fabrics, unlimited design freedom, and reliable production for your custom sports apparel.
          </p>
        </div>
        
        {/* Main Grid: 4 columns on large screens */}
        <div className="flex flex-col xl:flex-row gap-6 items-stretch">
          
          {/* Left Side: 3x2 Grid of Feature Cards */}
          <div className="w-full xl:w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-[#F9F5F1] rounded-[24px] p-6 lg:p-8 flex flex-col">
                <div className="w-12 h-12 bg-white rounded-[14px] border border-gray-100 flex items-center justify-center mb-6 shadow-sm">
                  {feat.icon}
                </div>
                <h3 className="text-[13px] md:text-[14px] font-black uppercase text-yoode-onyx mb-3 tracking-wide leading-snug">
                  {feat.title}
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: Tall CTA Card */}
          <div className="w-full xl:w-[25%] bg-[#1A1A1A] rounded-[24px] p-3 flex flex-col group">
            <div className="relative w-full h-[250px] xl:h-[55%] rounded-[18px] bg-gray-200 shrink-0 overflow-hidden">
              <Image 
                src="https://yoode.com/cdn/shop/files/yd-seo-why-design-team.png?v=1789122952&width=800" 
                alt="Build your team kit" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="px-5 pt-6 pb-5 flex flex-col flex-1 relative">
              <h3 className="text-white font-bold text-[15px] uppercase tracking-wide mb-3 leading-tight">
                READY TO BUILD YOUR TEAM KIT?
              </h3>
              <p className="text-white/50 text-[12px] leading-relaxed font-medium">
                Planning jerseys for your team, school, club or organisation? Work with Yoode as your jersey maker and get your complete team order started with ease.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
