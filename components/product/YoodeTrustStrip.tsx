"use client";

import React from "react";
import { Package, Upload, ShieldCheck, Award, Star } from "lucide-react";

export default function YoodeTrustStrip() {
  const trustItems = [
    {
      icon: Package,
      iconColor: "text-[#2563EB]",
      badgeBg: "bg-[#EEF4FF]",
      title: "No Minimum Order",
      desc: "Order from 1 piece"
    },
    {
      icon: Upload,
      iconColor: "text-[#2563EB]",
      badgeBg: "bg-[#EEF4FF]",
      title: "Free Design Mockup",
      desc: "See your logo before production"
    },
    {
      icon: ShieldCheck,
      iconColor: "text-[#2563EB]",
      badgeBg: "bg-[#EEF4FF]",
      title: "Secure Payments",
      desc: "Safe & encrypted checkout"
    },
    {
      icon: Award,
      iconColor: "text-[#2563EB]",
      badgeBg: "bg-[#EEF4FF]",
      title: "Bulk Discounts",
      desc: "Better pricing for larger orders"
    },
    {
      icon: Star,
      iconColor: "text-[#F59E0B] fill-[#F59E0B]",
      badgeBg: "bg-[#EEF4FF]",
      title: "4.9/5 Customer Rating",
      desc: "Trusted by 10,000+ businesses"
    }
  ];

  return (
    <section 
      aria-label="Trust and Guarantees" 
      className="w-full bg-white border-y border-gray-100 py-8 sm:py-10 select-none shadow-xs"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-4 items-center justify-between">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === trustItems.length - 1;
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center group ${
                  isLast ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <div 
                  className={`w-12 h-12 rounded-full ${item.badgeBg} flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 shadow-xs`}
                >
                  <Icon className={`w-5 h-5 ${item.iconColor}`} strokeWidth={2} />
                </div>
                <h3 className="font-bold text-sm text-[#111827] leading-tight mb-1 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
