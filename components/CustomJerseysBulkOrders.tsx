import React from 'react';
import { ArrowUpRight, Download, Users } from 'lucide-react';
import Image from 'next/image';

export function CustomJerseysBulkOrders() {
  const leftFeatures = [
    {
      title: "BULK PRODUCTION CAPACITY",
      desc: "With capacity for 1,000+ units a day, Yoode can handle large tournaments, leagues and high-volume team requirements."
    },
    {
      title: "BULK PRICING",
      desc: "Get better per-piece pricing on larger quantities, with team pricing available for orders of 11 pieces or more."
    },
    {
      title: "TEAM VARIANTS",
      desc: "Create coordinated home and away kits, goalkeeper or captain variants, plus jerseys for staff and supporters."
    }
  ];

  const rightFeatures = [
    {
      title: "MIXED SIZE ORDERS",
      desc: "Choose sizes from 22 to 52, covering junior and adult players within the same team order."
    },
    {
      title: "PLAYER-WISE PERSONALISATION",
      desc: "Add individual player names and numbers across your order while keeping the overall team design consistent."
    },
    {
      title: "APPROVE BEFORE PRODUCTION",
      desc: "Review and approve your final team design before the complete order moves into production."
    }
  ];

  return (
    <section className="py-20 md:py-24 w-full bg-[#1E1E1E] font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#E53935] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3 block">
            Bulk
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white font-display mb-4 uppercase tracking-tight">
            BULK & TEAM ORDERS
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto font-medium">
            Personalized sports jerseys for teams, schools, colleges, tournaments and leagues across worldwide.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
          
          {/* Left Column (Cards) */}
          <div className="w-full lg:w-[28%] flex flex-col gap-4 lg:gap-6">
            {leftFeatures.map((feat, idx) => (
              <div key={idx} className="flex-1 border border-white/10 bg-white/[0.02] rounded-2xl p-6 md:p-8 flex flex-col justify-center gap-3 hover:bg-white/[0.04] transition-colors">
                <h3 className="text-white font-bold text-[13px] md:text-sm uppercase tracking-wide">{feat.title}</h3>
                <p className="text-white/50 text-[12px] md:text-[13px] leading-relaxed font-medium">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Center Column (Image Display & Buttons) */}
          <div className="w-full lg:w-[44%] flex flex-col gap-6 order-first lg:order-none justify-between">
            
            {/* Image Container */}
            <div className="bg-[#E5E5E5] rounded-[32px] overflow-hidden relative aspect-[4/3] md:aspect-[16/10] shadow-2xl w-full flex-shrink-0">
              <Image 
                src="https://yoode.com/cdn/shop/files/yd-seo-bulk-team-kit.png?v=1789124615&width=1200" 
                alt="Bulk and Team Orders" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Bottom CTA Buttons - Moved into center column */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-2">
              <a href="https://wa.me/918069750293" className="flex items-center justify-center gap-2 bg-[#EA580C] text-white px-8 py-4 rounded-full font-bold text-[13px] md:text-sm hover:scale-105 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] w-full sm:w-auto">
                Request Bulk Pricing <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="https://wa.me/918069750293" className="flex items-center justify-center gap-2 border border-white/20 bg-transparent text-white px-8 py-4 rounded-full font-bold text-[13px] md:text-sm hover:bg-white/10 transition-colors w-full sm:w-auto">
                Connect on WhatsApp <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column (Cards) */}
          <div className="w-full lg:w-[28%] flex flex-col gap-4 lg:gap-6">
            {rightFeatures.map((feat, idx) => (
              <div key={idx} className="flex-1 border border-white/10 bg-white/[0.02] rounded-2xl p-6 md:p-8 flex flex-col justify-center gap-3 hover:bg-white/[0.04] transition-colors">
                <h3 className="text-white font-bold text-[13px] md:text-sm uppercase tracking-wide">{feat.title}</h3>
                <p className="text-white/50 text-[12px] md:text-[13px] leading-relaxed font-medium">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
