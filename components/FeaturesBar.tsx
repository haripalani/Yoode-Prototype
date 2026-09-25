"use client";

import { motion } from "framer-motion";
import { Box, PaintBucket, Printer, MapPin, Building2 } from "lucide-react";

export function FeaturesBar() {
  const features = [
    <span key="1" className="flex items-center gap-2">
      <Box className="w-4 h-4 text-[#E53935]" />
      <strong>No minimum order</strong> <span className="opacity-70 mx-1">•</span> Choose your preferred look
    </span>,
    <span key="2" className="flex items-center gap-2">
      <PaintBucket className="w-4 h-4 text-[#E53935]" />
      <strong>50+ colours</strong> <span className="opacity-70 mx-1">•</span> Bring your ideas to life
    </span>,
    <span key="3" className="flex items-center gap-2">
      <Printer className="w-4 h-4 text-[#E53935]" />
      <strong>Custom Printing</strong> <span className="opacity-70 mx-1">•</span> DTF · DTG · Embroidery
    </span>,
    <span key="4" className="flex items-center gap-2">
      <MapPin className="w-4 h-4 text-[#E53935]" />
      <strong>Pan India service</strong> <span className="opacity-70 mx-1">•</span> Order & support across India
    </span>,
    <span key="5" className="flex items-center gap-2">
      <Building2 className="w-4 h-4 text-[#E53935]" />
      <strong>Bulk & Business</strong> <span className="opacity-70 mx-1">•</span> Built for teams and businesses
    </span>,
  ];

  // Repeat features to ensure the marquee covers ultra-wide screens seamlessly
  const marqueeItems = [...features, ...features, ...features];

  return (
    <div className="w-full bg-black text-white h-[30px] md:h-[32px] flex items-center overflow-hidden fixed top-0 left-0 z-[110]">
      <div className="flex w-full overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-8 md:gap-16 pr-8 md:pr-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 70, repeat: Infinity }}
        >
          {marqueeItems.map((item, idx) => (
            <div key={`m1-${idx}`} className="text-[11px] md:text-xs tracking-wide flex items-center">
              {item}
            </div>
          ))}
        </motion.div>
        <motion.div 
          className="flex whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-8 md:gap-16 pr-8 md:pr-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 70, repeat: Infinity }}
        >
          {marqueeItems.map((item, idx) => (
            <div key={`m2-${idx}`} className="text-[11px] md:text-xs tracking-wide flex items-center">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
