"use client";

import { Star } from "lucide-react";
import { motion, useAnimate, AnimationPlaybackControls } from "framer-motion";
import { useEffect, useRef } from "react";

type Theme = "purple" | "white" | "lime" | "dark" | "beige";

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  theme: Theme;
  rotation: string;
  initials: string;
  rating: number;
}

const getFillPercentage = (starIndex: number, rating: number) => {
  if (rating >= starIndex) return 100;
  if (rating < starIndex - 1) return 0;
  return (rating % 1) * 100;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maya Collins",
    quote: "The print quality on our custom team hoodies was absolutely phenomenal. Every detail was sharp and the fabric is premium.",
    theme: "purple",
    rotation: "-rotate-6",
    initials: "MC",
    rating: 5.0
  },
  {
    id: 2,
    name: "Rahul Verma",
    quote: "Ordered 500 personalized welcome kits for our new hires. They were delivered ahead of schedule and the packaging was stunning.",
    theme: "white",
    rotation: "-rotate-2",
    initials: "RV",
    rating: 4.2
  },
  {
    id: 3,
    name: "Priya Patel",
    quote: "Finding good quality corporate gifts is hard, but Yoode made it effortless. The custom engraving on the bottles was perfect.",
    theme: "lime",
    rotation: "rotate-3",
    initials: "PP",
    rating: 3.8
  },
  {
    id: 4,
    name: "Ethan Brooks",
    quote: "I ordered custom embroidered polos for our sales team. The stitching is flawless and they look incredibly professional.",
    theme: "dark",
    rotation: "rotate-6",
    initials: "EB",
    rating: 4.5
  },
  {
    id: 5,
    name: "Sofia Martinez",
    quote: "From selecting the products to the final delivery, the process was seamless. The personalized notebooks were a huge hit!",
    theme: "beige",
    rotation: "-rotate-3",
    initials: "SM",
    rating: 4.7
  },
  {
    id: 6,
    name: "Rohan Kapoor",
    quote: "The bulk order process was so easy. The custom backpacks we got for our annual offsite look fantastic and are super durable.",
    theme: "white",
    rotation: "rotate-2",
    initials: "RK",
    rating: 3.9
  },
  {
    id: 7,
    name: "Olivia Bennett",
    quote: "I loved how easy it was to customize my design. The colors on the final printed t-shirts popped exactly like they did on screen.",
    theme: "purple",
    rotation: "-rotate-3",
    initials: "OB",
    rating: 4.8
  },
  {
    id: 8,
    name: "Vikram Reddy",
    quote: "We needed last-minute personalized awards for our team. Yoode delivered on time without compromising a single detail.",
    theme: "dark",
    rotation: "-rotate-6",
    initials: "VR",
    rating: 5.0
  },
  {
    id: 9,
    name: "Kavya Nair",
    quote: "The premium feel of the corporate gift boxes blew our clients away. Definitely our go-to partner for all company merch now.",
    theme: "lime",
    rotation: "rotate-6",
    initials: "KN",
    rating: 4.4
  },
  {
    id: 10,
    name: "James Anderson",
    quote: "The sizing on the custom jerseys was spot-on, and the fabric is incredibly breathable. Will definitely be ordering again for our next event.",
    theme: "beige",
    rotation: "rotate-3",
    initials: "JA",
    rating: 4.6
  }
];

const themeStyles = {
  purple: {
    bg: "bg-[#7A60EC]",
    text: "text-white",
    subtext: "text-white/70",
    starFill: "fill-yellow-400 text-yellow-400",
    starEmpty: "fill-transparent text-yellow-400/50",
    badge: "bg-white/10 text-white/90",
    avatar: "bg-[#1C1C1E] text-white"
  },
  white: {
    bg: "bg-white",
    text: "text-[#1C1C1E]",
    subtext: "text-[#1C1C1E]/60",
    starFill: "fill-[#F59E0B] text-[#F59E0B]", // amber-500
    starEmpty: "fill-transparent text-[#F59E0B]/30",
    badge: "bg-[#1C1C1E]/5 text-[#1C1C1E]/70",
    avatar: "bg-[#1C1C1E] text-white"
  },
  lime: {
    bg: "bg-[#C0EA4F]",
    text: "text-[#1C1C1E]",
    subtext: "text-[#1C1C1E]/60",
    starFill: "fill-[#1C1C1E] text-[#1C1C1E]", // Black on lime for visibility
    starEmpty: "fill-transparent text-[#1C1C1E]/30",
    badge: "bg-[#1C1C1E]/5 text-[#1C1C1E]/70",
    avatar: "bg-[#1C1C1E] text-white"
  },
  dark: {
    bg: "bg-[#1C1C1E]",
    text: "text-white",
    subtext: "text-white/60",
    starFill: "fill-yellow-400 text-yellow-400",
    starEmpty: "fill-transparent text-yellow-400/50",
    badge: "bg-white/10 text-white/70",
    avatar: "bg-white text-[#1C1C1E]"
  },
  beige: {
    bg: "bg-[#F0E3D1]",
    text: "text-[#1C1C1E]",
    subtext: "text-[#1C1C1E]/60",
    starFill: "fill-[#D97706] text-[#D97706]", // amber-600
    starEmpty: "fill-transparent text-[#D97706]/30",
    badge: "bg-[#1C1C1E]/5 text-[#1C1C1E]/70",
    avatar: "bg-[#1C1C1E] text-white"
  }
};

export function Testimonials() {
  const [scope, animate] = useAnimate();
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    controlsRef.current = animate(
      scope.current,
      { x: ["0%", "-50%"] },
      { duration: 60, ease: "linear", repeat: Infinity }
    );
    return () => {
      controlsRef.current?.stop();
    };
  }, [animate, scope]);

  return (
    <section className="w-full bg-[#f9f8f6] py-24 md:py-32 overflow-hidden flex flex-col items-center">
      
      {/* Header Area */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-20 flex flex-col items-center z-10">
        <div className="inline-flex items-center gap-2 bg-[#E6E4F6] px-4 py-2 rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-[#655CA7]"></div>
          <span className="text-sm font-semibold tracking-wide text-[#655CA7] uppercase">Customer Stories</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-[#1C1C1E] tracking-tight leading-[1.1] mb-6 max-w-2xl">
          Loved by people who care about quality.
        </h2>
        
        <p className="text-lg md:text-xl text-[#1C1C1E]/60 max-w-xl font-medium">
          Real experiences from teams who turned ambitious ideas into products people enjoy using.
        </p>
      </div>

      {/* Marquee Area */}
      <div 
        className="w-full relative mt-4"
        onMouseEnter={() => controlsRef.current?.pause()}
        onMouseLeave={() => controlsRef.current?.play()}
      >
        <div 
          ref={scope}
          className="flex w-max gap-6 md:gap-10 px-3 md:px-5 pb-12 pt-6"
        >
          {[...testimonials, ...testimonials].map((t, idx) => {
            const style = themeStyles[t.theme];
            return (
              <div 
                key={`testimonial-${idx}`}
                className={`${style.bg} w-[320px] md:w-[380px] shrink-0 rounded-[32px] p-8 md:p-10 shadow-xl shadow-black/5 flex flex-col justify-between ${t.rotation} transition-transform duration-500 hover:scale-105 relative overflow-hidden group`}
              >
                {/* Subtle glass highlight in top right */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-white/30 transition-all duration-700 pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div key={star} className="relative w-5 h-5">
                            <Star className={`w-5 h-5 absolute top-0 left-0 ${style.starEmpty}`} />
                            <div 
                              className="absolute top-0 left-0 h-5 overflow-hidden"
                              style={{ width: `${getFillPercentage(star, t.rating)}%` }}
                            >
                              <Star className={`w-5 h-5 ${style.starFill}`} />
                            </div>
                          </div>
                        ))}
                      </div>
                      <span className={`${style.text} font-bold text-sm mt-0.5`}>{t.rating.toFixed(1)}</span>
                    </div>
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${style.badge}`}>
                      <span>Verified</span>
                    </div>
                  </div>
                  
                  <p className={`${style.text} text-xl md:text-2xl font-medium italic leading-snug mb-10 relative z-10`}>
                    "{t.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 relative z-10 mt-auto pt-4">
                  <div className={`${style.avatar} w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className={`${style.text} font-bold text-base`}>{t.name}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
