"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

export function TrustedBy() {
  const logos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", alt: "Meta" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", alt: "Infosys" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg", alt: "Slack" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", alt: "Samsung" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", alt: "Netflix" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", alt: "IBM" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg", alt: "Cisco" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", alt: "Nike" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg", alt: "Coca-Cola" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg", alt: "Adidas" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg", alt: "Zara" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg", alt: "eBay" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/98/UST_%28company%29_Logo.svg", alt: "UST" },
    { src: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://hrblock.com&size=128", alt: "H&R Block" },
    { src: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://zafin.com&size=128", alt: "Zafin" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg", alt: "McDonalds" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/1/12/Binance_logo.svg", alt: "Binance" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg", alt: "Slack" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", alt: "IBM" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
  ];

  const row1 = logos.slice(0, 13);
  const row2 = logos.slice(13);

  return (
    <div className="w-full bg-[#FAF9F6] relative z-40 pt-16 pb-16 md:pt-20 md:pb-24 overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.03)] rounded-t-[40px] md:rounded-t-[60px] -mt-12 md:-mt-16">
      <SectionHeader
        subHeading="Trusted By"
        title="Global leaders in logistics, manufacturing, and retail"
        className="mb-10 md:mb-16"
      />

      <div className="relative flex flex-col gap-10 md:gap-14 overflow-hidden">
        {/* Fading edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Right to Left) */}
        <div className="flex w-full overflow-hidden group">
          <motion.div 
            className="flex whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-12 md:gap-20 pr-12 md:pr-20"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 60, repeat: Infinity }}
          >
            {row1.map((logo, idx) => (
              <img 
                key={`r1-a-${idx}`}
                src={logo.src} 
                alt={logo.alt} 
                className="h-6 md:h-8 w-auto object-contain grayscale brightness-0 opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" 
              />
            ))}
          </motion.div>
          <motion.div 
            className="flex whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-12 md:gap-20 pr-12 md:pr-20"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 60, repeat: Infinity }}
          >
            {row1.map((logo, idx) => (
              <img 
                key={`r1-b-${idx}`}
                src={logo.src} 
                alt={logo.alt} 
                className="h-6 md:h-8 w-auto object-contain grayscale brightness-0 opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" 
              />
            ))}
          </motion.div>
        </div>

        {/* Row 2 (Left to Right) */}
        <div className="flex w-full overflow-hidden group">
          <motion.div 
            className="flex whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-12 md:gap-20 pr-12 md:pr-20"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ ease: "linear", duration: 70, repeat: Infinity }}
          >
            {row2.map((logo, idx) => (
              <img 
                key={`r2-a-${idx}`}
                src={logo.src} 
                alt={logo.alt} 
                className="h-6 md:h-8 w-auto object-contain grayscale brightness-0 opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" 
              />
            ))}
          </motion.div>
          <motion.div 
            className="flex whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-12 md:gap-20 pr-12 md:pr-20"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ ease: "linear", duration: 70, repeat: Infinity }}
          >
            {row2.map((logo, idx) => (
              <img 
                key={`r2-b-${idx}`}
                src={logo.src} 
                alt={logo.alt} 
                className="h-6 md:h-8 w-auto object-contain grayscale brightness-0 opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0" 
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
