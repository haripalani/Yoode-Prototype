"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    image: "/process/step1.jpg",
    title: "Choose Product",
    description: "Select from our wide range of t-shirts, jerseys, polos, hoodies and more.",
  },
  {
    image: "/process/step2.jpg",
    title: "Share Design",
    description: "Upload your artwork, logo or share your requirements with us.",
  },
  {
    image: "/process/step3.jpg",
    title: "Review Mockup",
    description: "Get a digital preview of your design before production.",
  },
  {
    image: "/process/step4.jpg",
    title: "Approve & Order",
    description: "Confirm the design, place your order and we'll get to work.",
  },
  {
    image: "/process/step5.jpg",
    title: "Production & Delivery",
    description: "Your apparel is carefully produced, quality checked and delivered.",
  },
];

const TopLoopArrow = () => (
  <svg className="absolute -right-6 lg:-right-8 xl:-right-12 top-24 w-12 lg:w-16 xl:w-24 h-24 text-[#FDE3B8] hidden lg:block z-0" viewBox="0 0 100 100" fill="none">
    <path d="M 0,50 C 20,20 60,10 70,40 C 75,55 55,60 50,45 C 45,30 70,20 90,40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M 75,35 L 90,40 L 85,50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const BottomLoopArrow = () => (
  <svg className="absolute -right-6 lg:-right-8 xl:-right-12 bottom-24 w-12 lg:w-16 xl:w-24 h-24 text-[#FDE3B8] hidden lg:block z-0" viewBox="0 0 100 100" fill="none">
    <path d="M 0,50 C 20,80 60,90 70,60 C 75,45 55,40 50,55 C 45,70 70,80 90,60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M 75,65 L 90,60 L 85,50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export function Process() {
  return (
    <section className="py-24 bg-white text-gray-900 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader
          subHeading="How Yoode Works"
          title="From Idea to Delivery"
          description="Getting your custom apparel is simple. Follow these easy steps and we'll handle the rest — from design to delivery."
          className="mb-16 lg:mb-24"
        />

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-2 xl:gap-6 relative">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative z-10 w-full max-w-sm mx-auto lg:w-1/5 shrink-0 flex flex-col ${
                  !isEven ? 'lg:mt-20' : ''
                }`}
              >
                <div className="group bg-white rounded-[2.5rem] p-6 lg:p-4 xl:p-6 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 h-full relative z-10">
                  <div className="w-32 h-32 md:w-36 md:h-36 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full overflow-hidden mb-6 relative border-[6px] border-gray-50 group-hover:border-[#FFE066]/50 transition-colors duration-500 shadow-sm">
                    <Image src={step.image} alt={step.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <div className="bg-[#FFE066] group-hover:bg-[#FFD166] group-hover:-translate-y-1 transition-all duration-300 px-4 py-2 rounded-full font-bold text-gray-900 mb-4 whitespace-nowrap text-xs md:text-sm shadow-sm inline-block">
                    {index + 1}. {step.title}
                  </div>
                  
                  <p className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300 text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  isEven ? <TopLoopArrow /> : <BottomLoopArrow />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
