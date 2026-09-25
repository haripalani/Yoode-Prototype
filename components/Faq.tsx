"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "Do you offer bulk discounts?",
    answer:
      "Yes! We specialize in bulk orders for businesses, teams, and events. Our tiered pricing means the more you order, the more you save. Contact our support team for a custom quote on large volume orders.",
  },
  {
    question: "What is your typical turnaround time?",
    answer:
      "Our standard production time is 5-7 business days after design approval. We also offer expedited processing (2-3 days) for tight deadlines. Shipping times vary based on your location.",
  },
  {
    question: "Can I mix and match apparel sizes and colors?",
    answer:
      "Absolutely. You can mix sizes, colors, and even different apparel types (like t-shirts and hoodies) in a single order, as long as the printed design remains exactly the same across all items.",
  },
  {
    question: "Which printing method is best for my design?",
    answer:
      "It depends on your design and fabric. Screen printing is best for large batches with 1-3 colors. DTG is perfect for highly detailed, full-color designs on cotton. Embroidery is ideal for corporate polos, hats, and heavy jackets. Our team will automatically recommend the best method for your specific order.",
  },
  {
    question: "Do you have a minimum order quantity (MOQ)?",
    answer:
      "For DTG (Direct-to-Garment) and DTF printing, there is no minimum order—you can print just 1 item! For Screen Printing and Embroidery, we typically require a minimum of 24 pieces to ensure cost-effectiveness.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our dedicated support team via email, live chat on our website, or by calling our toll-free number during business hours.",
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
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
  );
}
