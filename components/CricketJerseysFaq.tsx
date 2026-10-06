"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight, Shirt, Layers, PenTool } from "lucide-react";

const faqs = [
  {
    question: "1. Can I design my own cricket jersey online with Yoode?",
    answer: "Yes. You can share your team colours, logo, player names, numbers, sponsor details, and design ideas online. The Yoode team will prepare the jersey design for your review before production."
  },
  {
    question: "2. Can I add my name and number to a cricket jersey?",
    answer: "Yes. You can personalise individual jerseys with player names and numbers, making it easy to create coordinated jerseys for complete cricket teams, clubs, academies, and tournament squads."
  },
  {
    question: "3. Can Yoode create a personalized cricket jersey for every player?",
    answer: "Yes. Each player can have their own name, number, size, and other approved details while maintaining one consistent cricket jersey design across the entire team."
  },
  {
    question: "4. What can I customise in a cricket team jersey design?",
    answer: "You can customise team colours, logos, sponsor branding, player names, numbers, patterns, sleeve details, and other design elements based on your team requirements."
  },
  {
    question: "5. Can I create an Indian-style cricket jersey with my own name?",
    answer: "Yes. If you are searching for an Indian cricket jersey with my name, you can create a personalised cricket-inspired design using your preferred colours, player name, number, and team branding."
  },
  {
    question: "6. Does Yoode provide full sublimation printing for cricket jerseys?",
    answer: "Yes. Full sublimation printing can be used for team colours, patterns, logos, sponsor branding, names, and numbers, creating a smooth finish across the jersey fabric."
  },
  {
    question: "7. How do I order custom cricket jerseys online from Yoode?",
    answer: "Contact Yoode with your team requirements, quantity, sizes, colours, logos, and player details. The design is prepared for approval, finalised, and then moved into production after confirmation."
  }
];

export function CricketJerseysFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-[#FAF9F6] font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: SEO Text */}
        <div className="flex flex-col">
          <div className="mb-10">
            <span className="text-[#E53935] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Custom Cricket Jerseys
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-yoode-onyx leading-[1.1] font-display tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col">
              <h3 className="font-display font-bold text-yoode-onyx mb-3 text-[20px] leading-snug">
                Looking for Custom Cricket Jerseys for Your Team?
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                Every cricket team deserves a jersey that reflects its true spirit. Whether you represent a club, an academy, or a corporate squad, Yoode crafts premium custom cricket jerseys featuring your team colours, sponsor logos, and player details for a professional on-field look.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-display font-bold text-yoode-onyx mb-3 text-[20px] leading-snug">
                Why Choose Sublimation for Cricket Kits?
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                Sublimation printing integrates the design directly into the fabric. This means your team logo, vibrant colours, and custom patterns remain sharp, breathable, and fade-resistant—perfect for long days on the pitch under the sun.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-display font-bold text-yoode-onyx mb-3 text-[20px] leading-snug">
                How to Personalise Your Cricket Jersey?
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                Yoode makes it easy to bring your vision to life. Share your ideas, pick your colours, and we'll handle the rest. Add individual player names and numbers to every kit, review your final mockup, and get match-ready with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className="flex flex-col pt-2 lg:pt-14">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`mb-4 rounded-2xl transition-all duration-300 border ${
                  isOpen ? "bg-white border-yoode-coral/20 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" : "bg-white/60 border-gray-100 hover:bg-white hover:shadow-sm"
                }`}
              >
                <button
                  className="w-full px-6 py-6 flex items-center justify-between gap-4 text-left group focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`text-[15px] md:text-base font-bold font-display tracking-wide leading-snug transition-colors duration-300 ${isOpen ? "text-yoode-coral" : "text-yoode-onyx group-hover:text-yoode-coral"}`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-yoode-coral text-white rotate-45" : "bg-gray-100 text-gray-500 group-hover:bg-yoode-coral/10 group-hover:text-yoode-coral"}`}>
                    <Plus className="w-4 h-4" strokeWidth={3} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 pt-1 text-[14px] md:text-[15px] text-gray-500 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
