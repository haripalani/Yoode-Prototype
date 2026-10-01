"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight, Shirt, Layers, PenTool } from "lucide-react";

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
    <section className="py-20 md:py-32 bg-[#F9FAFB] font-sans">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* SEO Header / Info Bento Box */}
        <div className="mb-24">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-[#E53935] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3">Overview</span>
            <h2 className="text-3xl md:text-5xl font-black text-yoode-onyx leading-tight font-display tracking-tight">
              CUSTOM SPORTS JERSEYS IN INDIA
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden flex flex-col">
              <div className="absolute -right-8 -top-8 text-gray-50 opacity-50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                <Shirt className="w-56 h-56 stroke-[0.5]" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 relative z-10 shadow-sm">
                <Shirt className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-yoode-onyx mb-4 text-[22px] leading-[1.2] relative z-10 group-hover:text-blue-600 transition-colors">
                Looking for Custom Sports Jerseys for Your Team?
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed font-medium relative z-10">
                Every team deserves a jersey that reflects its identity. From cricket teams and college squads to football clubs and corporate leagues, Yoode creates custom sports jerseys around your colours, logo and playing style. For teams looking for a custom jersey in Bangalore, you can design your jersey with player names, numbers, sponsor logos and complete team branding.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden flex flex-col">
              <div className="absolute -right-8 -top-8 text-gray-50 opacity-50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                <Layers className="w-56 h-56 stroke-[0.5]" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 relative z-10 shadow-sm">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-yoode-onyx mb-4 text-[22px] leading-[1.2] relative z-10 group-hover:text-emerald-600 transition-colors">
                How to Choose the Right Fabric for Your Sports Jersey?
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed font-medium relative z-10">
                Choose from fabric options suited to different sports, weather conditions and activity levels. Create your own jersey with colours, patterns and graphics using sublimation printing, which becomes part of the fabric and helps the design stay sharp through regular wear and washing.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden flex flex-col">
              <div className="absolute -right-8 -top-8 text-gray-50 opacity-50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                <PenTool className="w-56 h-56 stroke-[0.5]" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-yoode-coral/10 text-yoode-coral flex items-center justify-center mb-8 relative z-10 shadow-sm">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-yoode-onyx mb-4 text-[22px] leading-[1.2] relative z-10 group-hover:text-yoode-coral transition-colors">
                How to Design Your Own Jersey with Yoode?
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed font-medium relative z-10">
                From weekend teams and college tournaments to running groups and corporate leagues, Yoode makes ordering simple. For custom jersey printing in Bangalore, our team helps you refine the design, review your mock-up, request changes and approve the final artwork before production. As your custom jersey maker, Yoode supports you at every stage.
              </p>
            </div>
          </div>
        </div>

        {/* Header: Giant FAQ + subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-10 gap-4">
          <h2 className="text-[80px] sm:text-[100px] md:text-[140px] font-black leading-none tracking-tighter text-yoode-onyx select-none font-display">
            FAQ
          </h2>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 md:mb-6 md:text-right">
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
                <button
                  className="w-full py-6 md:py-7 flex items-center gap-5 md:gap-8 text-left group focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-400 group-hover:text-yoode-onyx transition-colors duration-300">
                    <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}>
                      <Plus className="w-5 h-5" strokeWidth={2.5} />
                    </motion.div>
                  </span>
                  <span className="flex-1 text-base md:text-lg font-semibold text-yoode-onyx leading-snug group-hover:text-black transition-colors duration-300 font-display tracking-wide">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-yoode-coral text-white" : "bg-white text-yoode-coral border border-yoode-coral/20 group-hover:bg-yoode-coral group-hover:text-white"}`}>
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                  </span>
                </button>
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
                      <p className="pl-[52px] md:pl-[72px] pr-16 pb-7 text-[14px] md:text-[15px] text-gray-500 leading-relaxed font-medium">
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
