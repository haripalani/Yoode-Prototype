import React from 'react';
import { PenTool, Box, CheckCircle, Globe } from 'lucide-react';

export function CustomJerseysValuePillarsDark() {
  const pillars = [
    { title: 'IN-HOUSE JERSEY PRODUCTION', desc: 'Made at our Tirupur unit for better control over quality and consistency.', icon: <PenTool className="w-5 h-5" /> },
    { title: 'NO MINIMUM ORDER', desc: 'Order one jersey or customise jerseys for your entire team.', icon: <Box className="w-5 h-5" /> },
    { title: 'DESIGN MOCKUP', desc: 'Review and refine your jersey design before production begins.', icon: <CheckCircle className="w-5 h-5" /> },
    { title: 'DELIVERY ACROSS WORLDWIDE', desc: 'Get your completed custom jerseys delivered anywhere across worldwide.', icon: <Globe className="w-5 h-5" /> }
  ];

  return (
    <section className="bg-white rounded-t-[40px] md:rounded-t-[60px] w-full py-20 md:py-24 px-6 md:px-12 flex justify-center relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.3]"></div>
      
      <div className="max-w-[1400px] w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden flex flex-col">
              
              {/* Giant Background Number */}
              <div className="absolute -right-4 -bottom-8 text-[140px] font-display font-black text-gray-50/80 select-none z-0 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500">
                {idx + 1}
              </div>

              {/* Icon & Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-orange-50 text-[#EA580C] flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                
                <h3 className="font-black text-[14px] md:text-[15px] text-yoode-onyx mb-3 tracking-widest uppercase leading-tight">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed font-medium mt-auto">
                  {pillar.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
