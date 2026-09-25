"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Show the modal after a short delay (always show for testing)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity cursor-pointer"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-[20px] md:rounded-[24px] overflow-hidden shadow-2xl flex flex-col md:flex-row w-full max-w-4xl max-h-[90vh] md:h-[500px] overflow-y-auto md:overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center bg-white rounded-full text-gray-500 hover:text-gray-900 border border-gray-200 shadow-sm transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Side (Image & Offer) */}
        <div className="relative w-full md:w-[45%] h-64 md:h-full shrink-0 bg-[#111] overflow-hidden">
          {/* Background Image */}
          <Image 
            src="/tshirts-promo.jpg" 
            alt="Promo Offer" 
            fill 
            className="object-cover opacity-60 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10 z-10 pointer-events-none">
            <div className="mt-4 md:mt-8">
              <h2 className="text-white font-black text-6xl md:text-[80px] leading-[0.85] uppercase tracking-tighter">
                Want
              </h2>
              <h2 className="text-[#FFD600] font-black text-6xl md:text-[80px] leading-[0.85] uppercase tracking-tighter mt-1">
                20%<br/>Off
              </h2>
            </div>
            
            <p className="text-white/90 font-sans text-lg md:text-xl font-medium max-w-[200px] leading-snug">
              Sign up to unlock your exclusive code
            </p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-[55%] bg-white p-6 md:p-12 flex flex-col justify-center relative shrink-0">
          <div className="max-w-sm w-full mx-auto space-y-5 md:space-y-8 mt-2 md:mt-0">
            
            {/* Input Group */}
            <div className="flex gap-3">
              <div className="w-20 shrink-0">
                <input 
                  type="text" 
                  value="+91"
                  readOnly
                  className="w-full px-3 py-3 md:py-4 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium text-center focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <input 
                  type="tel" 
                  placeholder="Enter Mobile Number"
                  className="w-full px-4 py-3 md:py-4 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                <input type="checkbox" className="peer sr-only cursor-pointer" defaultChecked />
                <div className="w-5 h-5 rounded-[4px] border-2 border-[#6B7280] peer-checked:bg-[#6B7280] peer-checked:border-[#6B7280] transition-colors" />
                <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[#4B5563] text-sm md:text-base font-medium group-hover:text-gray-900 transition-colors">
                Notify me for any updates & offers
              </span>
            </label>

            {/* Submit Button */}
            <button className="w-full py-3.5 md:py-4 bg-[#6B7280] hover:bg-[#4B5563] text-white font-semibold text-lg rounded-lg shadow-sm hover:shadow transition-all active:scale-[0.98] cursor-pointer">
              Submit
            </button>

            {/* Terms */}
            <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed pt-1 md:pt-2">
              By logging in, you're agreeing to our <a href="#" className="underline font-medium hover:text-gray-900 cursor-pointer">Privacy Policy</a> <a href="#" className="underline font-medium hover:text-gray-900 cursor-pointer">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
