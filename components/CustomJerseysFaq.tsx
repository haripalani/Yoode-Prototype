"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "What is the minimum order quantity for custom jerseys?",
    answer: "There is no high minimum order. You can order a single jersey, a complete team set or a larger bulk quantity based on your requirement."
  },
  {
    question: "How much does a custom sports jersey cost?",
    answer: "Pricing depends on the jersey style, fabric, sleeve type, print coverage and quantity. Yoode custom jerseys start from ₹490, with team pricing available for larger orders."
  },
  {
    question: "Can you design my jersey if I don’t have artwork?",
    answer: "Yes. Share your logo, team colours, a reference image or even a rough idea. Our design team can prepare a mockup for you to review before production."
  },
  {
    question: "What can I customise on my team jersey?",
    answer: "You can customise team colours, logos, player names, numbers, sponsor logos, patterns and other design elements to create a jersey that represents your team."
  },
  {
    question: "Can every jersey have a different player name and number?",
    answer: "Yes. Individual player names and numbers can be added across the team order. Simply provide the final player list when confirming your customisation."
  },
  {
    question: "How long does it take to receive custom jerseys?",
    answer: "Turnaround depends on the design, quantity and production requirements. Production is scheduled after you review and approve the final jersey mockup."
  },
  {
    question: "Do you deliver custom jerseys anywhere?",
    answer: "Yes. Yoode delivers custom jersey orders across worldwide. Customers can also choose to collect their order from a Yoode Experience Centre where available."
  }
];

export function CustomJerseysFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="py-20 md:py-32 bg-[#FAF9F6] font-sans">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-16 lg:gap-24">
          
          {/* Top Section: Custom Jersey Details */}
        <div className="flex flex-col">
          <div className="mb-10 md:text-center">
            <span className="text-[#E53935] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Custom Sports Jerseys
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-yoode-onyx leading-[1.1] font-display tracking-tight">
              ABOUT CUSTOM JERSEYS
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col">
              <h3 className="font-display font-bold text-yoode-onyx mb-3 text-[20px] leading-snug">
                Looking for Custom Sports Jerseys for Your Team?
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                Every team deserves a jersey that reflects its identity. From cricket teams and college squads to football clubs and corporate leagues, Yoode creates custom sports jerseys around your colours, logo and playing style. For teams looking for a custom jersey in Bangalore, you can design your jersey with player names, numbers, sponsor logos and complete team branding.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-display font-bold text-yoode-onyx mb-3 text-[20px] leading-snug">
                How to Choose the Right Fabric for Your Sports Jersey?
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                Choose from fabric options suited to different sports, weather conditions and activity levels. Create your own jersey with colours, patterns and graphics using sublimation printing, which becomes part of the fabric and helps the design stay sharp through regular wear and washing.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-display font-bold text-yoode-onyx mb-3 text-[20px] leading-snug">
                How to Design Your Own Jersey with Yoode?
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                From weekend teams and college tournaments to running groups and corporate leagues, Yoode makes ordering simple. For custom jersey printing in Bangalore, our team helps you refine the design, review your mock-up, request changes and approve the final artwork before production. As your custom jersey maker, Yoode supports you at every stage.
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
