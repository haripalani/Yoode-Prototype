"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { Package, Clock, Image as ImageIcon, ShieldCheck } from "lucide-react";

const steps = [
  {
    image: "/process/step1.jpg",
    title: "Choose Product",
    description: "Select from our wide range of premium t-shirts, jerseys, polos, hoodies and more.",
    color: "bg-[#2563EB]", // Blue
  },
  {
    image: "/process/step2.jpg",
    title: "Share Design",
    description: "Upload your artwork, logo or share your requirements with our expert design team.",
    color: "bg-[#9D174D]", // Pinkish-Purple (matches screenshot vibe)
  },
  {
    image: "/process/step3.jpg",
    title: "Review Mockup",
    description: "Get a highly detailed digital preview of your design before we start production.",
    color: "bg-[#059669]", // Emerald
  },
  {
    image: "/process/step4.jpg",
    title: "Approve & Order",
    description: "Confirm the design, finalize your order and we'll immediately get to work.",
    color: "bg-[#7C3AED]", // Violet
  },
  {
    image: "/process/step5.jpg",
    title: "Production & Delivery",
    description: "Your apparel is carefully produced, rigorously quality checked and delivered.",
    color: "bg-[#1E293B]", // Slate
  },
];

const usps = [
  {
    icon: <Package className="w-4 h-4 text-[#2A4B9B]" />,
    title: "No Minimum Order",
    description: "Order what you need, no quantity limits."
  },
  {
    icon: <Clock className="w-4 h-4 text-[#2A4B9B]" />,
    title: "Free 24-Hour Mockup",
    description: "Get your design preview within 24 hours."
  },
  {
    icon: <ImageIcon className="w-4 h-4 text-[#2A4B9B]" />,
    title: "Own Trigger Gallery",
    description: "Choose from our design templates or create your own."
  },
  {
    icon: <ShieldCheck className="w-4 h-4 text-[#2A4B9B]" />,
    title: "Pay After Approval",
    description: "Your satisfaction comes first."
  }
];

export function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end end"]
  });

  return (
    <section 
      ref={targetRef} 
      className="relative bg-[#F8F5F0] font-sans w-full overflow-x-clip"
    >
      <div className="max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row items-start relative pb-32">
        
        {/* Left Column (Sticky Title, Mascot, Progress Line) */}
        <div className="w-full lg:w-[40%] lg:sticky lg:top-32 flex flex-col justify-start pt-12 px-8 md:px-16 z-20 shrink-0">
          <SectionHeader
            align="left"
            subHeading="How Yoode Works"
            title="From Idea to Delivery"
            description="Getting your custom apparel is simple. Follow these easy steps and we'll handle the rest from design to delivery."
            className="mb-8"
            descriptionClassName="text-gray-500 max-w-[400px]"
          />
          
          {/* Elegant Progress Indicator */}
          <div className="w-full max-w-[240px] mb-12">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Scroll Progress</span>
            </div>
            <div className="w-full h-[2px] bg-gray-200 rounded-full relative overflow-hidden">
              <motion.div 
                className="absolute left-0 top-0 bottom-0 bg-yoode-onyx origin-left rounded-full"
                style={{ scaleX: scrollYProgress, width: "100%" }}
              />
            </div>
          </div>

          {/* Elite USP Grid */}
          <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-6">
            {usps.map((usp, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                key={i} 
                className="group flex items-start gap-5 cursor-default"
              >
                {/* Icon Container with Micro-interactions */}
                <div className="relative w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/60 group-hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] group-hover:scale-[1.15] transition-all duration-700 ease-[0.16,1,0.3,1] overflow-hidden">
                   {/* Shine effect sweep */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                   
                   {/* Icon */}
                   <div className="text-gray-400 group-hover:text-yoode-onyx transition-colors duration-500 relative z-10">
                     {usp.icon}
                   </div>
                </div>
                
                {/* Typography */}
                <div className="flex-1 pt-0.5">
                  <h4 className="font-bold text-yoode-onyx text-[14px] mb-1.5 leading-tight tracking-tight group-hover:text-black transition-colors duration-300">
                    {usp.title}
                  </h4>
                  <p className="text-[13px] text-gray-500/90 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {usp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Right Column (Vertical Staggered List) */}
        <div className="w-full lg:w-[60%] flex flex-col gap-16 lg:gap-20 pt-12 lg:pt-16 px-4 md:px-12">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`w-full relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
                
                {/* Number Watermark (Background) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ amount: 0.4 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute top-0 md:-top-12 ${isEven ? 'md:right-0 md:text-right' : 'md:left-0 md:text-left'} text-[120px] md:text-[200px] font-bold text-gray-100/60 z-0 pointer-events-none select-none tracking-tighter leading-none`}
                >
                  0{index + 1}
                </motion.div>

                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -60 : 60, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ amount: 0.4 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full md:w-[55%] aspect-[4/3] sm:aspect-[16/10] relative rounded-[2rem] overflow-hidden shrink-0 bg-gray-200 shadow-xl group z-10"
                >
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                  />
                  <div className="absolute inset-0 bg-yoode-onyx/0 group-hover:bg-yoode-onyx/5 transition-colors duration-700" />
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.4 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="w-full md:w-[45%] flex flex-col justify-center text-left z-10 relative mt-4 md:mt-0"
                >
                  <div className="flex items-center gap-4 mb-4">
                     <span className="w-8 h-[2px] bg-yoode-onyx/20" />
                     <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-500">Step 0{index + 1}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-yoode-onyx mb-5 leading-[1.1] tracking-tight">
                    {step.title}.
                  </h3>
                  
                  <p className="text-[14px] md:text-base text-gray-500 leading-relaxed max-w-[320px]">
                    {step.description}
                  </p>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
