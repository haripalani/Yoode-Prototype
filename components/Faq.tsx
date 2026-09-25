"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <SectionHeader
            subHeading="FAQS"
            title="Frequently asked question"
            description="here's everything you need to know to get started, manage your account, and troubleshoot the most frequent issues."
            align="left"
            className="flex-1"
            titleClassName="tracking-tight"
          />
          <button className="bg-[#E53935] text-white px-8 py-3.5 rounded-full font-bold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 whitespace-nowrap mb-2">
            View all
          </button>
        </div>

        {/* FAQs Grid - Split into independent columns so they don't stretch each other's rows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4 md:gap-6">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => {
              const actualIndex = index;
              const isOpen = openIndex === actualIndex;
              return (
                <div
                  key={actualIndex}
                  className="bg-[#F8F9FA] rounded-[20px] overflow-hidden transition-all duration-300"
                >
                  <button
                    className="w-full px-6 py-6 md:px-8 md:py-7 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : actualIndex)}
                  >
                    <span className="font-bold text-base md:text-lg text-yoode-onyx pr-6 leading-snug">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 text-yoode-onyx">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-500 leading-relaxed text-sm md:text-base -mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 md:gap-6">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => {
              const actualIndex = index + Math.ceil(faqs.length / 2);
              const isOpen = openIndex === actualIndex;
              return (
                <div
                  key={actualIndex}
                  className="bg-[#F8F9FA] rounded-[20px] overflow-hidden transition-all duration-300"
                >
                  <button
                    className="w-full px-6 py-6 md:px-8 md:py-7 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : actualIndex)}
                  >
                    <span className="font-bold text-base md:text-lg text-yoode-onyx pr-6 leading-snug">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 text-yoode-onyx">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-500 leading-relaxed text-sm md:text-base -mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
