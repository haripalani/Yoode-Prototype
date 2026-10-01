"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function CustomJerseysCtaDark() {
  return (
    <section className="w-full bg-[#1A1A1A] text-white py-24 md:py-32 relative overflow-hidden flex justify-center items-center">
      {/* Floating Images (Absolute Positioning) */}
      
      {/* Left side floating images */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute left-[10%] top-[30%] w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-white/10 opacity-80 hover:opacity-100 transition-opacity"
      >
        <Image src="/1.jpeg" alt="Jersey 1" fill className="object-cover" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden md:block absolute left-[25%] bottom-[20%] w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-white/10 opacity-80 hover:opacity-100 transition-opacity"
      >
        <Image src="/2.jpeg" alt="Jersey 2" fill className="object-cover" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="hidden lg:block absolute left-[20%] top-[15%] w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-white/10 opacity-70 hover:opacity-100 transition-opacity"
      >
        <Image src="/3.jpeg" alt="Jersey 3" fill className="object-cover" />
      </motion.div>

      {/* Right side floating images */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="hidden md:block absolute right-[10%] top-[25%] w-[110px] h-[110px] rounded-full overflow-hidden border-2 border-white/10 opacity-80 hover:opacity-100 transition-opacity"
      >
        <Image src="/4.jpeg" alt="Jersey 4" fill className="object-cover" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="hidden md:block absolute right-[25%] bottom-[25%] w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-white/10 opacity-80 hover:opacity-100 transition-opacity"
      >
        <Image src="/mens-polo.jpg" alt="Jersey 5" fill className="object-cover" />
      </motion.div>
      
      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 tracking-tight font-display">
          READY TO KIT OUT YOUR TEAM?
        </h2>
        
        <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto mb-10">
          Share your jersey idea with Yoode on WhatsApp. We'll help shape the design, send your mockup for approval and move to production once you're happy.
        </p>

        <a 
          href="https://wa.me/918069750293" 
          className="inline-flex items-center justify-center gap-2 bg-[#EA580C] text-white px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)]"
        >
          Get a Mockup <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
