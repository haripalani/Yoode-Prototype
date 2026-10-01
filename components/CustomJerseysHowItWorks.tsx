"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    image: "/images/step1_contact.jpg",
    title: "Contact Yoode team",
    description: "Get in touch with our support team through WhatsApp or give us a call to discuss your team’s jersey requirements.",
  },
  {
    image: "/images/step2_ideas.jpg",
    title: "Share Your Logo & Ideas",
    description: "Share your team logo, colours, preferred style, and any specific design requests like player names or sponsor logos.",
  },
  {
    image: "/images/step3_review.jpg",
    title: "Review Your Custom Design",
    description: "Receive a mockup showing exactly how your jersey will look. Request changes if needed until the design matches your vision.",
  },
  {
    image: "/images/step4_order.jpg",
    title: "Approve & Place Order",
    description: "Once you're happy with the design, confirm the order, share your final sizes and player list, and we’ll begin production.",
  }
];

export function CustomJerseysHowItWorks() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={targetRef} className="relative bg-white font-sans w-full overflow-x-clip py-10 md:py-16 rounded-t-[40px] md:rounded-t-[60px] -mt-10 z-20">
      <div className="max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row items-start relative pb-20">
        
        {/* Left Column (Sticky Title) */}
        <div className="w-full lg:w-[40%] lg:sticky lg:top-32 flex flex-col justify-start pt-12 px-6 md:px-12 z-20 shrink-0">
          <SectionHeader
            align="left"
            subHeading="Process"
            title="How to Create Your Own Jersey"
            description="Customising a jersey for your team should be straightforward. Yoode handles the details, ensuring you get exactly what you need without the hassle."
            className="mb-8"
            descriptionClassName="text-gray-500 max-w-[400px]"
          />
          
          {/* Progress Indicator */}
          <div className="hidden lg:block w-full max-w-[240px] mb-12">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Scroll Progress</span>
            </div>
            <div className="w-full h-[2px] bg-gray-100 rounded-full relative overflow-hidden">
              <motion.div 
                className="absolute left-0 top-0 bottom-0 bg-yoode-onyx origin-left rounded-full"
                style={{ scaleX: scrollYProgress, width: "100%" }}
              />
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="mt-8 hidden lg:block">
             <a href="https://wa.me/918069750293" className="inline-flex items-center gap-2 bg-yoode-coral text-white px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-yoode-coral/20">
               Design Your Jersey
             </a>
          </div>
        </div>

        {/* Right Column (Vertical Staggered List) */}
        <div className="w-full lg:w-[60%] flex flex-col gap-12 lg:gap-24 pt-12 lg:pt-16 px-6 md:px-12">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`w-full relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
                
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ amount: 0.4 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full md:w-[50%] aspect-square relative rounded-[32px] overflow-hidden shrink-0 bg-[#F3F4F6] shadow-sm z-10 group"
                >
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.4 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="w-full md:w-[50%] flex flex-col justify-center text-left z-10 relative mt-4 md:mt-0 p-6 md:p-0 rounded-3xl"
                >
                  {/* Large Number */}
                  <div className="text-[100px] md:text-[130px] font-black font-display text-gray-100 z-0 pointer-events-none select-none tracking-tighter leading-none mb-2">
                    0{index + 1}
                  </div>

                  <div className="flex items-center gap-4 mb-4 relative z-10">
                     <span className="w-8 h-[2px] bg-yoode-onyx/20" />
                     <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-500">Step 0{index + 1}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-yoode-onyx mb-4 leading-[1.1] tracking-tight">
                    {step.title}.
                  </h3>
                  
                  <p className="text-[14px] md:text-base text-gray-500 font-medium leading-relaxed max-w-[320px]">
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
