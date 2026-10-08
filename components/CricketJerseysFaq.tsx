"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

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
    <>
      <section className="py-20 md:py-32 bg-[#FAF9F6] font-sans">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-16 lg:gap-24">
          
          {/* Top Section: Cricket Jersey Details */}
        <div className="flex flex-col">
          <div className="mb-10 md:text-center">
            <span className="text-[#E53935] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Custom Cricket Jersey Maker in India
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-yoode-onyx leading-[1.1] font-display tracking-tight">
              ABOUT CRICKET JERSEYS
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col">
              <h3 className="font-display font-bold text-yoode-onyx mb-3 text-[20px] leading-snug">
                Looking for Custom Cricket Jerseys for Your Team?
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium mb-3">
                Every cricket team needs a jersey that reflects its colours, identity, and players. Whether you are ordering for a club, academy, school, college, corporate tournament, or local league, Yoode helps you create jerseys around your exact team requirements.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium mb-3">
                You can personalise every jersey with player names, numbers, sponsor logos, club branding, team colours, and custom patterns. If you are looking for a personalized cricket jersey or want an Indian cricket jersey with my name, Yoode makes the process simple from design approval to production.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                For teams comparing custom sports jerseys, our cricket-specific options give you greater control over appearance, fit, fabric, and overall team branding.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-display font-bold text-yoode-onyx mb-3 text-[20px] leading-snug">
                How to Choose the Right Fabric for Your Cricket Jersey?
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium mb-3">
                Cricket jerseys need to stay comfortable through long matches, practice sessions, and tournament days. The right fabric should support movement, manage heat, and feel lightweight during play.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium mb-3">
                Yoode offers performance-focused fabric options suited to different playing conditions. You can also design cricket shirt styles using team colours, gradients, patterns, sponsor branding, and player details with full sublimation printing.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                Sublimation allows the artwork to become part of the fabric rather than sitting as a separate layer on top, helping the jersey maintain a smooth and comfortable finish through regular use.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-display font-bold text-yoode-onyx mb-3 text-[20px] leading-snug">
                How to Create the Right Cricket Uniform Design?
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium mb-3">
                A strong cricket uniform design should bring together your team colours, logo, sponsor branding, player details, and overall visual identity in one coordinated look. The aim is to create a jersey that looks professional while remaining practical for match play.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                With Yoode, you can explore different colour combinations, sleeve styles, patterns, logo placements, and full-body graphics before finalising the design. Whether you prefer a clean club look, a bold tournament style, or a customized Indian cricket jersey inspired by modern cricket aesthetics, the final design can be tailored around your team.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-display font-bold text-yoode-onyx mb-3 text-[20px] leading-snug">
                How to Design Your Cricket Jersey with Yoode?
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium mb-3">
                Creating your cricket team jersey design starts with your team identity. Share your logo, preferred colours, player details, sponsor artwork, and any design reference you already have.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium mb-3">
                The Yoode team helps organise these elements into a complete jersey layout. You can review the design, check placements, request necessary changes, and approve the final artwork before production begins.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                If you are looking for a cricket jersey maker that can support the complete process, Yoode makes it easy to discuss your requirements online and move from an initial concept to a production-ready jersey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Bottom Section: FAQ Accordion */}
      <section className="py-20 md:py-28 bg-[#F9FAFB] font-sans">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          {/* Header: Giant FAQ + subtitle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-10 gap-4">
            <h2
              className="text-[100px] sm:text-[130px] md:text-[160px] font-black leading-none tracking-tighter text-yoode-onyx select-none"
            >
              FAQ
            </h2>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 md:mb-8 md:text-right">
              Answers to your questions
            </p>
          </div>

          {/* Top Divider */}
          <div className="w-full h-px bg-gray-200" />

          {/* Accordion List */}
          <div className="flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-gray-200">
                  {/* Row */}
                  <button
                    className="w-full py-6 md:py-7 flex items-center gap-5 md:gap-8 text-left group focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {/* Plus Icon — rotates to × when open */}
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-400 group-hover:text-yoode-onyx transition-colors duration-300">
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Plus className="w-5 h-5" strokeWidth={2.5} />
                      </motion.div>
                    </span>

                    {/* Question */}
                    <span className="flex-1 text-base md:text-lg font-semibold text-yoode-onyx leading-snug group-hover:text-black transition-colors duration-300">
                      {faq.question}
                    </span>

                    {/* Arrow circle */}
                    <span
                      className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#E53935] text-white"
                          : "bg-white text-[#E53935] border border-[#E53935]/20 group-hover:bg-[#E53935] group-hover:text-white"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pl-[52px] md:pl-[72px] pr-16 pb-7 text-[14px] md:text-[15px] text-gray-500 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 flex items-center gap-4">
            <span className="text-sm text-gray-400">Still have questions?</span>
            <a
              href="mailto:hello@yoode.in"
              className="text-sm font-bold text-[#E53935] underline underline-offset-4 hover:opacity-70 transition-opacity duration-200"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
