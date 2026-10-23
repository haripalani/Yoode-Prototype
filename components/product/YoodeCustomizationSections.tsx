"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Package, 
  Upload, 
  ShieldCheck, 
  Award, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Shield, 
  Truck, 
  Ruler, 
  Check, 
  Building, 
  Users, 
  Briefcase, 
  RotateCcw, 
  Headphones, 
  Plus, 
  Minus, 
  X, 
  Droplets, 
  Wind, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function YoodeCustomizationSections() {
  const params = useParams();
  const slug = (params?.slug as string) || "";
  const isWomenPolo = slug === "womens-polo" || slug === "womens-performance-polo";

  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState<boolean>(false);
  const [bulkQuantity, setBulkQuantity] = useState<number>(50);
  const [bulkSubmitted, setBulkSubmitted] = useState<boolean>(false);

  const faqs: FAQItem[] = [
    {
      question: "Can I order just one customized polo t-shirt?",
      answer: "Yes, we have no minimum order quantity. You can order just 1 customized piece with your logo or artwork."
    },
    {
      question: "What logo file formats can I upload?",
      answer: "We accept vector formats like AI, EPS, SVG, and high-resolution PDF or PNG (minimum 300 DPI) for razor-sharp reproduction."
    },
    {
      question: "Will I receive a mockup before production?",
      answer: "Yes, our team creates a complimentary digital proof for your approval before printing or stitching begins. Production only starts once you confirm."
    },
    {
      question: "Can you embroider my company logo on the polo fabric?",
      answer: "Yes! For our 220 GSM pique cotton polos, we use high-density Japanese embroidery, crisp DTF prints, or custom metallic silicon branding that won't fade or crack even after 50+ industrial washes."
    },
    {
      question: "Can I mix different sizes and colors in the same order?",
      answer: "Absolutely! You can mix any combination of sizes (XS to XL) and colorways towards our volume bulk discounts."
    },
    {
      question: "How long does customization take?",
      answer: "Plain orders dispatch in 2–4 working days. Custom branded orders dispatch in 5–7 working days from digital mockup approval. Express rush delivery is also available."
    }
  ];

  return (
    <section className="w-full bg-white text-[#111827] font-sans border-t border-gray-100 py-16 lg:py-24 select-none">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* =========================================================================
            WHY YOU'LL LOVE THIS PERFORMANCE POLO (5 Circle Icon Pillars)
        ========================================================================= */}
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-black text-gray-900 mb-10 tracking-tight text-center md:text-left">
            Why You&apos;ll Love This Performance Polo
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 border-b border-gray-100 pb-16">
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center mb-5 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <Sparkles className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="font-semibold text-sm text-gray-900 whitespace-pre-line leading-snug">
                220 GSM Pique{"\n"}Bio-Washed Cotton
              </div>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center mb-5 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="font-semibold text-sm text-gray-900 whitespace-pre-line leading-snug">
                YKK Silver Zipper{"\n"}Anti-Rust Placket
              </div>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center mb-5 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <Ruler className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="font-semibold text-sm text-gray-900 whitespace-pre-line leading-snug">
                Anti-Curl Collar{"\n"}Reinforced Lycra Core
              </div>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center mb-5 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <CheckCircle2 className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="font-semibold text-sm text-gray-900 whitespace-pre-line leading-snug">
                Colorfast Grade 4.5+{"\n"}50+ Industrial Washes
              </div>
            </div>

            <div className="flex flex-col items-center text-center group col-span-2 md:col-span-1">
              <div className="w-20 h-20 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center mb-5 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <Building className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="font-semibold text-sm text-gray-900 whitespace-pre-line leading-snug">
                Perfect for{"\n"}Work, Tech &amp; Teams
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            4. PRODUCT SPECIFICATIONS, SIZE GUIDE & FABRIC CLOSE-UP (3 Columns)
        ========================================================================= */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Product Specifications (md:col-span-5) */}
          <div className="md:col-span-5">
            <h3 className="text-xl font-black text-gray-900 mb-6">Product Specifications</h3>
            <div className="flex flex-col text-sm border-t border-gray-100">
              <div className="grid grid-cols-3 border-b border-gray-100 py-3.5">
                <span className="text-gray-500 font-semibold">Fabric</span>
                <span className="col-span-2 text-gray-900 font-medium">100% Combed Compact Cotton Double Pique</span>
              </div>
              <div className="grid grid-cols-3 border-b border-gray-100 py-3.5">
                <span className="text-gray-500 font-semibold">Weight</span>
                <span className="col-span-2 text-gray-900 font-medium">220 GSM (Heavy-Duty Bio-Washed Pique)</span>
              </div>
              <div className="grid grid-cols-3 border-b border-gray-100 py-3.5">
                <span className="text-gray-500 font-semibold">Fit</span>
                <span className="col-span-2 text-gray-900 font-medium">Modern Athletic Tailored Fit with Side Slits</span>
              </div>
              <div className="grid grid-cols-3 border-b border-gray-100 py-3.5">
                <span className="text-gray-500 font-semibold">Feel</span>
                <span className="col-span-2 text-gray-900 font-medium">Ultra-Soft, Substantial &amp; Pre-Shrunk Finish</span>
              </div>
              <div className="grid grid-cols-3 border-b border-gray-100 py-3.5">
                <span className="text-gray-500 font-semibold">Placket</span>
                <span className="col-span-2 text-gray-900 font-medium">Anti-Rust YKK Silver Metal Quarter-Zipper</span>
              </div>
              <div className="grid grid-cols-3 border-b border-gray-100 py-3.5">
                <span className="text-gray-500 font-semibold">Collar</span>
                <span className="col-span-2 text-gray-900 font-medium">Reinforced Structured Rib (Anti-Curling Lycra Core)</span>
              </div>
              <div className="grid grid-cols-3 border-b border-gray-100 py-3.5">
                <span className="text-gray-500 font-semibold">Seams</span>
                <span className="col-span-2 text-gray-900 font-medium">Double-Needle Chain Stitching at Hem &amp; Sleeves</span>
              </div>
              <div className="grid grid-cols-3 border-b border-gray-100 py-3.5">
                <span className="text-gray-500 font-semibold">Colorfastness</span>
                <span className="col-span-2 text-gray-900 font-medium">Grade 4.5+ (50+ Industrial Washes Zero Fade)</span>
              </div>
              <div className="grid grid-cols-3 border-b border-gray-100 py-3.5">
                <span className="text-gray-500 font-semibold">Suitable For</span>
                <span className="col-span-2 text-gray-900 font-medium">Corporate Teams, Tech Startups, Events, Everyday Streetwear</span>
              </div>
            </div>
          </div>

          {/* Column 2: Size Guide (md:col-span-4) */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-black text-gray-900 mb-6">Size Guide</h3>
            <div className="flex flex-col">
              <div className="w-full bg-gray-50 border border-gray-200 rounded-xl mb-4 overflow-hidden shadow-xs">
                <table className="w-full text-center text-xs">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200 text-gray-600">
                      <th className="py-2.5 font-bold">Size</th>
                      <th className="py-2.5 font-bold">Chest (in)</th>
                      <th className="py-2.5 font-bold">Length (in)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800 font-medium">
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-bold bg-white/50">38 (S)</td>
                      <td className="py-2">38&quot;</td>
                      <td className="py-2">26.8&quot;</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-bold bg-white/50">40 (M)</td>
                      <td className="py-2">40&quot;</td>
                      <td className="py-2">27.5&quot;</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-bold bg-white/50">42 (L)</td>
                      <td className="py-2">42&quot;</td>
                      <td className="py-2">28.3&quot;</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 font-bold bg-white/50">44 (XL)</td>
                      <td className="py-2">44&quot;</td>
                      <td className="py-2">29.1&quot;</td>
                    </tr>
                    <tr className="border-b border-gray-100 last:border-0">
                      <td className="py-2 font-bold bg-white/50">46 (2XL)</td>
                      <td className="py-2">46&quot;</td>
                      <td className="py-2">29.9&quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a 
                href="#product-details" 
                className="text-[#2563EB] font-bold text-sm hover:underline flex items-center gap-1 group w-max"
              >
                View Detailed Size Guide 
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 3: Fabric Close-up (md:col-span-3) */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-black text-gray-900 mb-6">Fabric Close-up</h3>
            <div className="rounded-xl overflow-hidden border border-gray-200 mb-5 aspect-square bg-gray-100 shadow-xs relative group">
              <img 
                src="/polo/navy-collar.jpg" 
                alt="220 GSM Pique Cotton Fabric & YKK Zipper" 
                className="w-full h-full object-cover scale-105 group-hover:scale-115 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] uppercase tracking-wider font-bold text-gray-500">
              <div className="flex flex-col items-center gap-1.5">
                <Sparkles className="w-5 h-5 text-gray-700" />
                <span>220 GSM Pique</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-gray-700" />
                <span>YKK Zipper</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-gray-700" />
                <span>Anti-Curl</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            REAL CLIENT BRANDING SHOWCASE
        ========================================================================= */}
        <div className="mt-20 md:mt-28 border-t border-gray-100 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-black text-gray-900 tracking-tight">
                See It Customized
              </h3>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Real client production examples of embroidery, silicone seals, and matte DTF on 220 GSM pique.
              </p>
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden md:inline">
              Verified Production Quality
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { 
                src: "/polo/navy-front.jpg", 
                title: "Left Chest Micro Embroidery",
                desc: "Crisp vector reproduction with zero thread puckering" 
              },
              { 
                src: isWomenPolo ? "/polo/women-navy-model.jpg" : "/polo/navy-model.jpg", 
                title: "Athletic Tailored Drape",
                desc: "Structured fit designed for team and office wear" 
              },
              { 
                src: "/polo/navy-collar.jpg", 
                title: "YKK Silver Quarter-Zip",
                desc: "Reinforced collar rib with zero wash curling" 
              },
              { 
                src: "/polo/navy-back.jpg", 
                title: "Center Back Full-Bleed Print",
                desc: "High-impact matte finish with 50+ wash longevity" 
              }
            ].map((img, i) => (
              <div 
                key={i} 
                className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden group cursor-pointer shadow-xs flex flex-col"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full text-[9px] font-bold text-black border border-black/5 uppercase tracking-wider">
                    Client Sample 0{i + 1}
                  </div>
                </div>
                <div className="p-3.5 flex flex-col gap-1">
                  <h4 className="font-bold text-xs text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {img.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 font-normal leading-tight">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            6. PERFECT FOR (Team & Corporate Badges)
        ========================================================================= */}
        <div className="mt-24 md:mt-32">
          <h3 className="text-2xl font-display font-black text-gray-900 mb-8 text-center md:text-left">
            Perfect For
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {[
              { icon: Building, label: "Corporate Uniforms" },
              { icon: Users, label: "Event Teams" },
              { icon: Briefcase, label: "Retail Staff" },
              { icon: Star, label: "Hospitality Teams" },
              { icon: Award, label: "Promotional Events" },
              { icon: CheckCircle2, label: "Sports & Outdoor" },
              { icon: ShieldCheck, label: "Conferences & Exhibitions" }
            ].map((badge, idx) => (
              <div 
                key={idx}
                className="flex flex-col items-center bg-gray-50 hover:bg-white px-6 py-5 rounded-xl w-36 md:w-44 text-center border border-gray-200 hover:border-gray-300 shadow-xs hover:shadow-md transition-all cursor-default"
              >
                <badge.icon className="w-7 h-7 text-[#111827] mb-3" strokeWidth={1.5} />
                <span className="text-xs md:text-sm font-bold leading-tight text-gray-900">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            7. ORDERING FOR A TEAM? (Bulk Order Banner)
        ========================================================================= */}
        <div className="mt-24 bg-[#111827] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          
          <div className="relative z-10 w-full md:w-auto text-center md:text-left">
            <h3 className="text-3xl font-display font-black mb-3">Ordering for a Team?</h3>
            <p className="text-gray-300 font-medium mb-8 md:mb-0 text-lg">
              Get special pricing for 25+ pieces.
            </p>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full md:w-auto">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-6 gap-y-4 text-sm font-bold text-gray-200">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#E53935]" strokeWidth={3} /> Volume Discounts
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#E53935]" strokeWidth={3} /> Mix Sizes &amp; Colours
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#E53935]" strokeWidth={3} /> On-Time Delivery
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#E53935]" strokeWidth={3} /> Dedicated Support
              </span>
            </div>

            <button 
              type="button"
              onClick={() => setIsBulkModalOpen(true)}
              className="w-full md:w-auto bg-[#E53935] text-white font-bold py-4 px-8 rounded-lg hover:bg-red-600 transition-colors whitespace-nowrap shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
            >
              Get Bulk Pricing 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            8. DELIVERY & SUPPORT (Left) + FREQUENTLY ASKED QUESTIONS (Right)
        ========================================================================= */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-gray-100 pt-16">
          
          {/* Left: Delivery & Support Cards (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-display font-black text-gray-900 mb-8">
              Delivery &amp; Support
            </h3>
            <div className="flex flex-col gap-6">
              
              <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <Truck className="w-7 h-7 text-gray-700 shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Standard Delivery</h4>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">
                    5-7 working days dispatch for custom orders. Plain orders dispatch in 2-4 days.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <RotateCcw className="w-7 h-7 text-gray-700 shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Easy Returns</h4>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">
                    Hassle-free replacement for any manufacturing defects or print issues.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <Headphones className="w-7 h-7 text-gray-700 shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">24/7 Support</h4>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">
                    Our team is here to help with your design or order queries anytime.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Frequently Asked Questions Accordion (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="flex items-end justify-between mb-6">
              <h3 className="text-2xl font-display font-black text-gray-900">
                Frequently Asked Questions
              </h3>
              <a href="#faq" className="text-[#2563EB] font-bold text-sm hover:underline hidden md:block">
                View All FAQs &rarr;
              </a>
            </div>

            <div className="w-full h-px bg-gray-200 mb-2" />

            <div className="flex flex-col">
              {faqs.map((faq, index) => {
                const isOpen = activeFaqIndex === index;
                return (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      type="button"
                      onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                      className="w-full py-5 flex items-center gap-4 md:gap-6 text-left group focus:outline-hidden cursor-pointer"
                    >
                      <span className="shrink-0 w-6 h-6 flex items-center justify-center text-gray-400 group-hover:text-gray-900 transition-colors duration-300">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                      <span className="flex-1 text-sm md:text-base font-bold text-gray-900 leading-snug group-hover:text-black transition-colors duration-300">
                        {faq.question}
                      </span>
                      <span 
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen 
                            ? "bg-[#E53935] text-white" 
                            : "bg-white text-[#E53935] border border-[#E53935]/20 group-hover:bg-[#E53935] group-hover:text-white"
                        }`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="pl-[40px] md:pl-[48px] pr-10 pb-6 text-sm text-gray-600 leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <a href="#faq" className="text-[#2563EB] font-bold text-sm hover:underline block md:hidden mt-6 text-center">
              View All FAQs &rarr;
            </a>
          </div>

        </div>

      </div>

      {/* =========================================================================
          INTERACTIVE BULK PRICING MODAL
      ========================================================================= */}
      <AnimatePresence>
        {isBulkModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBulkModalOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-black/10 overflow-hidden"
            >
              <button 
                type="button"
                onClick={() => setIsBulkModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {bulkSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Request Sent!</h3>
                  <p className="text-sm text-gray-600 mb-6 font-medium">
                    Our corporate merchandise specialist will contact you with a customized bulk invoice and digital proof within 2 business hours.
                  </p>
                  <button 
                    type="button"
                    onClick={() => {
                      setIsBulkModalOpen(false);
                      setBulkSubmitted(false);
                    }}
                    className="px-6 py-2.5 bg-black text-white text-xs font-bold rounded-xl hover:bg-neutral-800 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E53935]">
                    Team &amp; Corporate Wholesale
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-1 mb-2">
                    Request Bulk Pricing Quote
                  </h3>
                  <p className="text-xs text-gray-500 mb-6 font-medium">
                    Order 25+ units to unlock wholesale slab rates (up to 40% discount) with custom brand placements.
                  </p>

                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      setBulkSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold mb-1">
                        <span>Quantity Needed</span>
                        <span className="text-[#E53935]">{bulkQuantity} Units</span>
                      </div>
                      <input 
                        type="range" 
                        min="25" 
                        max="500" 
                        step="5"
                        value={bulkQuantity} 
                        onChange={(e) => setBulkQuantity(Number(e.target.value))}
                        className="w-full accent-[#E53935] cursor-pointer"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 block mb-1">Your Name</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Arjun Verma"
                          className="w-full text-xs p-2.5 rounded-lg border border-gray-300 focus:border-[#E53935] focus:outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 block mb-1">Work Email</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="arjun@company.com"
                          className="w-full text-xs p-2.5 rounded-lg border border-gray-300 focus:border-[#E53935] focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 block mb-1">Company / Brand</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Acme Studio"
                          className="w-full text-xs p-2.5 rounded-lg border border-gray-300 focus:border-[#E53935] focus:outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-gray-700 block mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="+91 98765 43210"
                          className="w-full text-xs p-2.5 rounded-lg border border-gray-300 focus:border-[#E53935] focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-gray-700 block mb-1">Customization Requirements</label>
                      <textarea 
                        rows={2} 
                        placeholder="e.g. Left chest embroidery and center back reflective logo. Need delivery in Bangalore by 15th."
                        className="w-full text-xs p-2.5 rounded-lg border border-gray-300 focus:border-[#E53935] focus:outline-hidden resize-none"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-[#111827] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-black transition-all shadow-md mt-2 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Inquiry for {bulkQuantity} Units</span>
                      <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
