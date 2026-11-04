"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Droplets,
  Palette,
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Play,
  Check,
  ChevronDown,
  Phone,
  Tag,
  Calendar,
  Shirt,
  Info,
} from "lucide-react";
import {
  HeroTShirtMockup,
  DtgMachineIllustration,
  CustomTShirtMockup,
  OversizedTShirtMockup,
  HoodieMockup,
  SweatshirtMockup,
  ArtworkBefore,
  ArtworkAfter,
  VideoPosterGraphic,
  FrontPrintMockup,
  BackPrintMockup,
  SmallChestPrintMockup,
  LightGarmentMockup,
  DarkGarmentMockup,
  QuoteYellowTShirtMockup,
} from "./DtgGraphics";

export function DtgClient() {
  // Form state
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    quantity: "",
    city: "",
    garment: "",
    placement: "Help me choose",
    notes: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Video player state
  const [videoUrl, setVideoUrl] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [isVideoDrawerOpen, setIsVideoDrawerOpen] = useState(false);
  const [videoMedia, setVideoMedia] = useState<{ type: "youtube" | "video"; src: string } | null>(null);
  const [videoStatus, setVideoStatus] = useState("");
  const videoInputRef = useRef<HTMLInputElement>(null);

  // FAQ accordion state
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleSelectGarment = (garmentName: string) => {
    setFormData((prev) => ({ ...prev, garment: garmentName }));
    const quoteElement = document.getElementById("quote");
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Video helper
  const parseVideoUrl = (raw: string) => {
    try {
      const url = new URL(raw);
      if (url.protocol !== "https:" && url.protocol !== "http:") return null;
      const host = url.hostname.toLowerCase();
      let id = "";
      if (host === "youtu.be") {
        id = url.pathname.split("/")[1];
      } else if (
        ["youtube.com", "www.youtube.com", "m.youtube.com", "www.youtube-nocookie.com", "youtube-nocookie.com"].includes(
          host
        )
      ) {
        if (url.pathname === "/watch") {
          id = url.searchParams.get("v") || "";
        } else if (/^\/(embed|shorts|live)\//.test(url.pathname)) {
          id = url.pathname.split("/")[2];
        }
      }
      if (id && /^[A-Za-z0-9_-]{11}$/.test(id)) {
        return {
          type: "youtube" as const,
          src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`,
        };
      }
      if (/\.(mp4|webm)(?:$)/i.test(url.pathname)) {
        return { type: "video" as const, src: url.href };
      }
      return null;
    } catch {
      return null;
    }
  };

  const handleVideoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const media = parseVideoUrl(inputUrl.trim());
    if (!media) {
      setVideoStatus("Please enter a valid YouTube or direct .mp4/.webm link.");
      return;
    }
    setVideoMedia(media);
    setVideoUrl(inputUrl.trim());
    setVideoStatus("Video loaded into player.");
    setIsVideoDrawerOpen(false);
  };

  const handlePlayClick = () => {
    if (!videoMedia) {
      setIsVideoDrawerOpen(true);
      setTimeout(() => videoInputRef.current?.focus(), 150);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(
      "Preview only — your enquiry has NOT been sent. Connect this form to Yoode’s CRM, Shopify form or verified WhatsApp workflow before launch."
    );
    setFormSubmitted(true);
  };

  const faqsList = [
    {
      q: "What is DTG printing and how does it work?",
      a: "DTG printing uses a digital printer to apply water-based ink directly onto compatible garments. The design is prepared, printed and cured to help set the ink.",
    },
    {
      q: "Which fabrics are suitable for DTG printing?",
      a: "Cotton and cotton-rich fabrics generally give the best results. Yoode can review the garment material and confirm whether DTG is suitable.",
    },
    {
      q: "Can DTG printing be done on black or dark T-shirts?",
      a: "Yes, dark garments may be printed using suitable pretreatment and a white ink base. The final result depends on the fabric and artwork.",
    },
    {
      q: "Can I order just one DTG-printed T-shirt?",
      a: "Yoode supports custom-apparel enquiries without a minimum order. Share your chosen garment and design to confirm available DTG options and pricing.",
    },
    {
      q: "What design files should I send for DTG printing?",
      a: "A clear high-resolution PNG is a useful starting point. SVG or PDF artwork may also be reviewed; final specifications depend on print size.",
    },
    {
      q: "Can DTG print photographs, gradients and multiple colours?",
      a: "Yes. Detailed, multicolour artwork is one of DTG’s strengths, although print colours may differ slightly from screen previews.",
    },
    {
      q: "How much does DTG T-shirt printing cost?",
      a: "Pricing depends on the garment, print dimensions, artwork, quantity and delivery location. Share your brief with Yoode for an order-specific quote.",
    },
    {
      q: "How long does DTG printing and delivery take?",
      a: "The timeline depends on garment availability, artwork approval, quantity and destination. Yoode will confirm the estimated schedule before production.",
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-yoode-text font-sans antialiased">
      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-br from-[#114bc4] via-[#1352e9] to-[#0848bd] text-white py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Subtle background ambient blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Hero Content */}
          <div className="flex flex-col items-start max-w-[680px]">
            <span className="inline-block px-4 py-1.5 bg-white text-[#1352e9] text-xs font-bold uppercase tracking-wider rounded-full shadow-sm mb-6">
              DIRECT-TO-GARMENT PRINTING
            </span>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.8rem] leading-[1.08] tracking-tight text-white mb-6">
              DTG Printing for Custom T-Shirts &amp; Apparel
            </h1>

            <p className="text-blue-100/90 text-base md:text-lg leading-relaxed mb-8 max-w-[580px]">
              Bring photos, colourful graphics and detailed artwork onto cotton-rich garments. Share your design and quantity with Yoode to explore DTG printing and get a personalised quote.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-yoode-onyx text-white text-sm font-semibold hover:bg-black hover:-translate-y-0.5 active:scale-95 transition-all shadow-lg shadow-black/20"
              >
                Get a DTG Printing Quote ↗
              </a>
              <a
                href="#quick-enquiry"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-yoode-onyx text-sm font-semibold hover:bg-slate-100 hover:-translate-y-0.5 active:scale-95 transition-all shadow-md"
              >
                Discuss Your Design ↗
              </a>
            </div>

            <a
              href="#dtg-video"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-xs md:text-sm font-bold underline underline-offset-4 mb-6 transition-colors"
            >
              ▶ &nbsp; Watch the DTG Printing Video ↓
            </a>

            <div className="flex items-center gap-2 text-blue-200/90 text-xs font-medium tracking-wide">
              <span>✦</span>
              <span>Design preview before production &nbsp;·&nbsp; Nationwide delivery</span>
            </div>
          </div>

          {/* Right Hero Graphic */}
          <div className="flex justify-center items-center lg:justify-end">
            <div className="relative w-full max-w-[480px] rounded-3xl bg-gradient-to-tr from-[#dbe7fd] via-[#eef6ff] to-[#f4f8ff] p-8 shadow-2xl shadow-blue-950/25 border border-white/40 flex items-center justify-center overflow-hidden min-h-[380px] md:min-h-[440px]">
              {/* Floating Top Badge */}
              <div className="absolute top-5 right-5 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-blue-100 text-center">
                <span className="block text-[11px] font-extrabold text-[#1352e9] leading-snug tracking-wider">
                  FULL-COLOUR ARTWORK
                </span>
                <span className="block text-[10px] font-bold text-slate-700 leading-snug tracking-wider">
                  SOFT-TOUCH FINISH
                </span>
              </div>

              {/* T-Shirt illustration */}
              <div className="relative z-10 w-full flex justify-center -rotate-2 hover:rotate-0 transition-transform duration-500">
                <HeroTShirtMockup className="w-[85%] max-w-[360px] h-auto drop-shadow-xl" />
              </div>

              {/* Bottom Right Label */}
              <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-extrabold tracking-wider text-slate-700 border border-slate-200 shadow-sm">
                DTG • DIRECT TO GARMENT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST PILLARS BAR */}
      <div className="w-full bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4">
          <div className="flex items-center justify-center gap-3 py-6 px-4 border-r border-b md:border-b-0 border-slate-200 text-xs md:text-sm font-bold text-slate-800">
            <div className="w-9 h-9 rounded-full bg-blue-50 text-[#1352e9] flex items-center justify-center shrink-0">
              <Droplets className="w-4 h-4" />
            </div>
            <span>Direct Ink Printing</span>
          </div>
          <div className="flex items-center justify-center gap-3 py-6 px-4 md:border-r border-b md:border-b-0 border-slate-200 text-xs md:text-sm font-bold text-slate-800">
            <div className="w-9 h-9 rounded-full bg-blue-50 text-[#1352e9] flex items-center justify-center shrink-0">
              <Palette className="w-4 h-4" />
            </div>
            <span>Detailed Colour Artwork</span>
          </div>
          <div className="flex items-center justify-center gap-3 py-6 px-4 border-r border-slate-200 text-xs md:text-sm font-bold text-slate-800">
            <div className="w-9 h-9 rounded-full bg-blue-50 text-[#1352e9] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span>Preview &amp; Approval</span>
          </div>
          <div className="flex items-center justify-center gap-3 py-6 px-4 text-xs md:text-sm font-bold text-slate-800">
            <div className="w-9 h-9 rounded-full bg-blue-50 text-[#1352e9] flex items-center justify-center shrink-0">
              <Truck className="w-4 h-4" />
            </div>
            <span>Delivery Across India</span>
          </div>
        </div>
      </div>

      {/* 4. WHAT IS DTG PRINTING? */}
      <section id="dtg-explained" className="w-full py-20 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1352e9] block mb-3">
              WHAT IS DTG PRINTING?
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
              Digital Printing, Directly on Your Garment
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              DTG (direct-to-garment) printing applies water-based inks straight onto fabric. It works particularly well for detailed designs on suitable cotton garments, without requiring separate screens for each colour.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 pb-4 border-b border-slate-200">
                <span className="font-display font-black text-2xl text-[#1352e9]">01</span>
                <div>
                  <strong className="block text-slate-900 font-bold text-base">Check the garment and artwork</strong>
                  <p className="text-slate-600 text-xs md:text-sm mt-0.5">Review fabric type, print size, colours and required placement.</p>
                </div>
              </div>

              <div className="flex gap-4 pb-4 border-b border-slate-200">
                <span className="font-display font-black text-2xl text-[#1352e9]">02</span>
                <div>
                  <strong className="block text-slate-900 font-bold text-base">Prepare and print</strong>
                  <p className="text-slate-600 text-xs md:text-sm mt-0.5">Pretreat when needed, print directly onto the fabric and cure the ink.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="font-display font-black text-2xl text-[#1352e9]">03</span>
                <div>
                  <strong className="block text-slate-900 font-bold text-base">Inspect the result</strong>
                  <p className="text-slate-600 text-xs md:text-sm mt-0.5">Check the completed print against the agreed order details.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Machine Illustration */}
          <div className="rounded-3xl bg-gradient-to-br from-[#dfe6f3] to-[#f7f9fb] p-6 md:p-8 shadow-sm border border-slate-200/80 flex items-center justify-center">
            <DtgMachineIllustration className="w-full h-auto max-w-[540px] drop-shadow-md" />
          </div>
        </div>
      </section>

      {/* 5. EXPLORE DTG PRINTING BY APPAREL TYPE */}
      <section id="garments" className="w-full bg-[#f1f5f9]/70 py-20 px-6 md:px-12 lg:px-20 border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1352e9] block mb-2">
              CHOOSE YOUR BASE GARMENT
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Explore DTG Printing by Apparel Type
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3">
              Choose a garment that suits your purpose. Fabric suitability, available colours and print dimensions are confirmed before production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Custom T-Shirts */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-56 bg-[#eff2f7] overflow-hidden flex items-center justify-center p-4">
                <CustomTShirtMockup className="w-full h-full max-h-[200px] object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">Custom T-Shirts</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed min-h-[48px]">
                    Everyday cotton tees for detailed graphics, photos and personal designs.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectGarment("Custom T-Shirts")}
                  className="mt-4 text-[#1352e9] text-xs font-bold inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer text-left"
                >
                  Enquire about this style <span>↗</span>
                </button>
              </div>
            </div>

            {/* Oversized T-Shirts */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-56 bg-[#eff2f7] overflow-hidden flex items-center justify-center p-4">
                <OversizedTShirtMockup className="w-full h-full max-h-[200px] object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">Oversized T-Shirts</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed min-h-[48px]">
                    Relaxed silhouettes with space for bold, full-colour artwork.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectGarment("Oversized T-Shirts")}
                  className="mt-4 text-[#1352e9] text-xs font-bold inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer text-left"
                >
                  Enquire about this style <span>↗</span>
                </button>
              </div>
            </div>

            {/* Hoodies */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-56 bg-[#eff2f7] overflow-hidden flex items-center justify-center p-4">
                <HoodieMockup className="w-full h-full max-h-[200px] object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">Hoodies</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed min-h-[48px]">
                    Add your design to a compatible hoodie for a layered, casual look.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectGarment("Hoodies")}
                  className="mt-4 text-[#1352e9] text-xs font-bold inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer text-left"
                >
                  Enquire about this style <span>↗</span>
                </button>
              </div>
            </div>

            {/* Sweatshirts */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-56 bg-[#eff2f7] overflow-hidden flex items-center justify-center p-4">
                <SweatshirtMockup className="w-full h-full max-h-[200px] object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">Sweatshirts</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed min-h-[48px]">
                    Explore cotton-rich sweatshirt options for artwork and merchandise.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectGarment("Sweatshirts")}
                  className="mt-4 text-[#1352e9] text-xs font-bold inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer text-left"
                >
                  Enquire about this style <span>↗</span>
                </button>
              </div>
            </div>
          </div>

          <p className="text-slate-400 text-xs mt-6 text-center">
            Note: These are illustrative garment mockups, not photographs of confirmed Yoode DTG SKUs. Verify compatible garments before publishing.
          </p>
        </div>
      </section>

      {/* 6. DESIGN DETAILS MATTER */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1352e9] block mb-2">
            DESIGN DETAILS MATTER
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Why Choose DTG Printing?
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3">
            Choose DTG when colour-rich artwork and a softer printed feel matter more than a heavy, raised graphic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1352e9] flex items-center justify-center mb-5">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Made for Colourful Artwork</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Useful for photos, gradients and designs with multiple colour transitions.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1352e9] flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Fine Graphic Detail</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Supports illustrations, lettering and complex artwork when files are prepared correctly.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1352e9] flex items-center justify-center mb-5">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Soft Printed Feel</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Ink interacts with the fabric rather than sitting as a thick transfer layer.
            </p>
          </div>
        </div>
      </section>

      {/* 7. SEE THE POSSIBILITIES: FROM ARTWORK TO PRINT */}
      <section id="artwork-result" className="w-full bg-[#f1f5f9]/70 py-20 px-6 md:px-12 lg:px-20 border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1352e9] block mb-2">
              SEE THE POSSIBILITIES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              From Digital Artwork to DTG Print
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3">
              See how a graphic can appear when applied to a garment. Final colour and detail depend on fabric, file quality and print settings.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center">
              {/* Before Card */}
              <div className="relative rounded-2xl bg-[#edf2f9] overflow-hidden h-64 md:h-72 flex items-center justify-center border border-slate-200">
                <ArtworkBefore className="w-full h-full object-contain p-4" />
                <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-slate-700 shadow-sm border border-slate-100">
                  BEFORE · ARTWORK
                </span>
              </div>

              {/* Arrow Disc */}
              <div className="flex justify-center items-center my-2 md:my-0">
                <div className="w-10 h-10 rounded-full bg-[#1352e9] text-white flex items-center justify-center font-bold shadow-md">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* After Card */}
              <div className="relative rounded-2xl bg-[#dfe8f8] overflow-hidden h-64 md:h-72 flex items-center justify-center border border-slate-200">
                <ArtworkAfter className="w-full h-full object-contain p-4" />
                <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#1352e9] shadow-sm border border-slate-100">
                  AFTER · ON GARMENT
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs text-center mt-5">
              Illustrative transformation for the wireframe; replace with approved Yoode production examples before launch.
            </p>
          </div>
        </div>
      </section>

      {/* 8. VIDEO SECTION */}
      <section id="dtg-video" className="w-full py-20 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto" aria-labelledby="dtgVideoTitle">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-14 items-center">
          {/* Left Copy */}
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1352e9] block mb-2">
              WATCH THE PRINTING PROCESS
            </span>
            <h2 id="dtgVideoTitle" className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
              See DTG Printing in Action
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              See how a design goes from a digital file to a printed T-shirt. A short video can show the garment preparation, direct ink printing and finishing stages.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3.5 items-start">
                <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1352e9] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  01
                </span>
                <div>
                  <strong className="block text-slate-900 text-sm font-bold">Garment preparation</strong>
                  <span className="text-slate-600 text-xs block">See how the fabric is prepared before printing.</span>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1352e9] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  02
                </span>
                <div>
                  <strong className="block text-slate-900 text-sm font-bold">Direct-to-garment printing</strong>
                  <span className="text-slate-600 text-xs block">Watch the design printed directly onto the garment.</span>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <span className="w-7 h-7 rounded-lg bg-blue-100 text-[#1352e9] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  03
                </span>
                <div>
                  <strong className="block text-slate-900 text-sm font-bold">Final print &amp; finishing</strong>
                  <span className="text-slate-600 text-xs block">Understand the curing and finished-print stages.</span>
                </div>
              </div>
            </div>

            <a
              href="#quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yoode-onyx text-white text-xs md:text-sm font-semibold hover:bg-black hover:-translate-y-0.5 active:scale-95 transition-all shadow-md"
            >
              Enquire About DTG Printing ↗
            </a>
          </div>

          {/* Right Video Player */}
          <div className="bg-white rounded-3xl border border-slate-200 p-3 md:p-4 shadow-xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center">
              {videoMedia ? (
                videoMedia.type === "youtube" ? (
                  <iframe
                    src={videoMedia.src}
                    title="Yoode DTG printing process video"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={videoMedia.src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                )
              ) : (
                <>
                  <VideoPosterGraphic className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 z-20 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full border border-white/20">
                    VIDEO SHOWCASE · DTG PROCESS
                  </span>

                  <button
                    type="button"
                    onClick={handlePlayClick}
                    className="absolute z-30 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1352e9] hover:bg-[#0c3fae] text-white flex items-center justify-center border-4 border-white/30 shadow-2xl hover:scale-105 transition-all cursor-pointer group"
                    aria-label="Play or add DTG video link"
                  >
                    <Play className="w-7 h-7 md:w-8 md:h-8 fill-current ml-1 group-hover:scale-110 transition-transform" />
                  </button>

                  <div className="absolute bottom-4 left-4 z-20 text-white font-bold text-sm md:text-base drop-shadow-md">
                    From artwork to finished print
                  </div>
                </>
              )}
            </div>

            {/* Video Controls & Slot Status */}
            <div className="flex items-center justify-between gap-4 pt-4 px-2">
              <div>
                <strong className="block text-slate-900 text-xs md:text-sm font-bold">DTG printing process video</strong>
                <p className="text-slate-500 text-[11px] mt-0.5">Video slot ready for Yoode&apos;s production footage</p>
              </div>

              <button
                type="button"
                onClick={() => setIsVideoDrawerOpen(!isVideoDrawerOpen)}
                className="px-3.5 py-1.5 rounded-full border border-slate-300 text-[#1352e9] text-xs font-bold hover:bg-blue-50 transition-colors shrink-0 cursor-pointer"
              >
                {isVideoDrawerOpen ? "Close ✕" : "Add Video Link ↗"}
              </button>
            </div>

            {/* Config Drawer */}
            {isVideoDrawerOpen && (
              <form onSubmit={handleVideoSubmit} className="mt-4 p-4 rounded-xl bg-blue-50/60 border border-blue-200">
                <label htmlFor="dtgVideoUrl" className="block text-xs font-bold text-slate-800 mb-2">
                  Paste a YouTube or direct MP4/WebM URL
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    ref={videoInputRef}
                    id="dtgVideoUrl"
                    type="url"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    required
                    className="flex-1 bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#1352e9]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1352e9] hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors shrink-0 cursor-pointer"
                  >
                    Load Video
                  </button>
                </div>
                <p className="text-[11px] text-slate-500 mt-2">
                  This is a wireframe preview. You can test your own video link here; the player will load and play it immediately.
                </p>
                {videoStatus && <p className="text-xs text-amber-700 font-medium mt-1">{videoStatus}</p>}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. WHERE SHOULD YOUR ARTWORK GO? (PLACEMENTS) */}
      <section id="placements" className="w-full bg-[#f1f5f9]/70 py-20 px-6 md:px-12 lg:px-20 border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1352e9] block mb-2">
              WHERE SHOULD YOUR ARTWORK GO?
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Choose Your DTG Print Placement
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3">
              Print placement affects how visible your artwork is and how much space it needs. Share your idea and Yoode will check the available print area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Front Print */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-60 relative overflow-hidden bg-[#eef1f6] flex items-center justify-center p-4">
                <FrontPrintMockup className="w-full h-full object-contain" />
                <span className="absolute bottom-3 left-4 bg-white/95 px-3 py-1 rounded-full text-[10px] font-extrabold text-slate-800 shadow-sm border border-slate-200">
                  FRONT PRINT
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-slate-900 mb-1">Front Print</h3>
                <p className="text-slate-600 text-xs md:text-sm">A prominent choice for illustrations, portraits and statement artwork.</p>
              </div>
            </div>

            {/* Back Print */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-60 relative overflow-hidden bg-[#eef1f6] flex items-center justify-center p-4">
                <BackPrintMockup className="w-full h-full object-contain" />
                <span className="absolute bottom-3 left-4 bg-white/95 px-3 py-1 rounded-full text-[10px] font-extrabold text-slate-800 shadow-sm border border-slate-200">
                  BACK PRINT
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-slate-900 mb-1">Back Print</h3>
                <p className="text-slate-600 text-xs md:text-sm">Useful for large graphics, event artwork and apparel collections.</p>
              </div>
            </div>

            {/* Small Chest Print */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-60 relative overflow-hidden bg-[#eef1f6] flex items-center justify-center p-4">
                <SmallChestPrintMockup className="w-full h-full object-contain" />
                <span className="absolute bottom-3 left-4 bg-white/95 px-3 py-1 rounded-full text-[10px] font-extrabold text-slate-800 shadow-sm border border-slate-200">
                  SMALL CHEST PRINT
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-slate-900 mb-1">Small Chest Print</h3>
                <p className="text-slate-600 text-xs md:text-sm">A restrained position for initials, compact logos and subtle details.</p>
              </div>
            </div>
          </div>

          <p className="text-slate-400 text-xs text-center mt-6">
            Available print areas depend on garment style, size and equipment. Confirm placement before quoting.
          </p>
        </div>
      </section>

      {/* 10. CTA BANNER: HAVE ARTWORK READY? */}
      <section id="quick-enquiry" className="w-full bg-[#fbf879] py-12 md:py-14 px-6 md:px-12 lg:px-20 text-slate-900">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-white text-[#1352e9] text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-sm mb-3">
              YOUR IDEA. YOUR T-SHIRT.
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
              Have Artwork Ready for Printing?
            </h2>
            <p className="text-slate-800 text-xs md:text-sm mt-2">
              Turn your design into wearable merchandise. Tell Yoode what you want to print and receive guidance on the right DTG options.
            </p>
          </div>

          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-yoode-onyx text-white text-xs md:text-sm font-semibold hover:bg-black hover:-translate-y-0.5 active:scale-95 transition-all shadow-md shrink-0"
          >
            Get a DTG Quote ↗
          </a>
        </div>
      </section>

      {/* 11. ARTWORK TIPS & LIGHT VS DARK */}
      <section id="artwork-tips" className="w-full py-20 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* Left Checklist */}
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1352e9] block mb-2">
              BEFORE YOU SEND YOUR FILE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
              What Works Best for DTG Printing?
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              Good print results start with compatible fabric and a clean design file. Check these essentials before requesting a quote.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs text-xs md:text-sm font-semibold text-slate-800">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1352e9] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>High-resolution artwork at the intended print dimensions</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs text-xs md:text-sm font-semibold text-slate-800">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1352e9] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Cotton or cotton-rich garment, subject to suitability</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs text-xs md:text-sm font-semibold text-slate-800">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1352e9] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Clear background / transparent PNG where appropriate</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs text-xs md:text-sm font-semibold text-slate-800">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1352e9] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Confirmed print size, position and garment colour</span>
              </div>
            </div>
          </div>

          {/* Right Light vs Dark Card */}
          <div className="bg-white p-7 md:p-8 rounded-3xl border border-slate-200 shadow-md">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1352e9] block mb-2">
              LIGHT VS DARK GARMENTS
            </span>
            <h3 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight mb-3">
              Does T-Shirt Colour Affect the Print?
            </h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
              Yes. Light fabric and dark fabric can need different preparation. Dark garments commonly require pretreatment and a white underbase for colourful designs.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-[#eef1f6]">
                <div className="p-3">
                  <LightGarmentMockup className="w-full h-auto max-h-[160px] object-contain" />
                </div>
                <div className="text-center text-xs font-bold text-slate-800 py-2 border-t border-slate-200 bg-white">
                  Light garment
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden bg-[#eef1f6]">
                <div className="p-3">
                  <DarkGarmentMockup className="w-full h-auto max-h-[160px] object-contain" />
                </div>
                <div className="text-center text-xs font-bold text-slate-800 py-2 border-t border-slate-200 bg-white">
                  Dark garment
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs text-center mt-4">
              Colour accuracy can vary between the digital preview and the finished fabric.
            </p>
          </div>
        </div>
      </section>

      {/* 12. HOW TO ORDER PROCESS */}
      <section id="process" className="w-full bg-[#f1f5f9]/70 py-20 px-6 md:px-12 lg:px-20 border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1352e9] block mb-2">
              FROM ARTWORK TO DELIVERY
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              How to Order DTG Printing with Yoode
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3">
              A straightforward four-step process with the design checked before production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t-3 border-slate-900 pt-5">
              <span className="font-display font-black text-4xl text-[#1352e9] block mb-2">01</span>
              <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">Choose Your Garment</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Share the apparel type, colour, size breakdown and required quantity.
              </p>
            </div>

            <div className="border-t-3 border-slate-900 pt-5">
              <span className="font-display font-black text-4xl text-[#1352e9] block mb-2">02</span>
              <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">Send Your Artwork</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Upload your logo or design with your preferred print dimensions and placement.
              </p>
            </div>

            <div className="border-t-3 border-slate-900 pt-5">
              <span className="font-display font-black text-4xl text-[#1352e9] block mb-2">03</span>
              <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">Review &amp; Approve</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Check the design preview, garment details and quote before approving.
              </p>
            </div>

            <div className="border-t-3 border-slate-900 pt-5">
              <span className="font-display font-black text-4xl text-[#1352e9] block mb-2">04</span>
              <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">Printing &amp; Delivery</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Yoode prepares the approved order and arranges delivery as agreed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. COMPARISON TABLE: DTG VS DTF VS SCREEN */}
      <section id="method" className="w-full py-20 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1352e9] block mb-2">
            CHOOSE THE RIGHT METHOD
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            DTG vs DTF vs Screen Printing
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3">
            Not every design needs the same printing process. Here is a practical starting point for choosing among common methods.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-4 md:p-5 bg-slate-50 text-slate-900 font-bold text-sm md:text-base w-1/4">
                  Feature
                </th>
                <th className="p-4 md:p-5 bg-blue-50 text-[#1352e9] font-extrabold text-sm md:text-base w-1/4">
                  DTG Printing
                </th>
                <th className="p-4 md:p-5 bg-slate-50 text-slate-900 font-bold text-sm md:text-base w-1/4">
                  DTF Printing
                </th>
                <th className="p-4 md:p-5 bg-slate-50 text-slate-900 font-bold text-sm md:text-base w-1/4">
                  Screen Printing
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs md:text-sm">
              <tr>
                <td className="p-4 md:p-5 font-bold text-slate-900">How it works</td>
                <td className="p-4 md:p-5 bg-blue-50/50 text-slate-800">Ink printed directly on the garment</td>
                <td className="p-4 md:p-5 text-slate-600">Design transferred from printed film</td>
                <td className="p-4 md:p-5 text-slate-600">Ink pushed through a prepared screen</td>
              </tr>
              <tr>
                <td className="p-4 md:p-5 font-bold text-slate-900">Artwork fit</td>
                <td className="p-4 md:p-5 bg-blue-50/50 text-slate-800">Photos, gradients, detailed multicolour graphics</td>
                <td className="p-4 md:p-5 text-slate-600">Logos and detailed designs across many fabrics</td>
                <td className="p-4 md:p-5 text-slate-600">Solid-colour designs, repeat production</td>
              </tr>
              <tr>
                <td className="p-4 md:p-5 font-bold text-slate-900">Fabric suitability</td>
                <td className="p-4 md:p-5 bg-blue-50/50 text-slate-800">Usually best on cotton-rich items</td>
                <td className="p-4 md:p-5 text-slate-600">Works with a broader range of fabrics</td>
                <td className="p-4 md:p-5 text-slate-600">Depends on ink and garment combination</td>
              </tr>
              <tr>
                <td className="p-4 md:p-5 font-bold text-slate-900">Typical order fit</td>
                <td className="p-4 md:p-5 bg-blue-50/50 text-slate-800">Single designs and smaller runs</td>
                <td className="p-4 md:p-5 text-slate-600">Flexible quantities and placement needs</td>
                <td className="p-4 md:p-5 text-slate-600">Often efficient at higher quantities</td>
              </tr>
              <tr>
                <td className="p-4 md:p-5 font-bold text-slate-900">Surface feel</td>
                <td className="p-4 md:p-5 bg-blue-50/50 text-slate-800">Often softer on suitable fabrics</td>
                <td className="p-4 md:p-5 text-slate-600">More noticeable transfer layer</td>
                <td className="p-4 md:p-5 text-slate-600">Varies with ink and coverage</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-400 text-xs text-center mt-5">
          This is a general guide, not a fixed performance or pricing guarantee. The best method depends on the exact order.
        </p>
      </section>

      {/* 14. USE CASES: WHERE DTG WORKS BEST */}
      <section id="use-cases" className="w-full bg-[#f1f5f9]/70 py-20 px-6 md:px-12 lg:px-20 border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1352e9] block mb-2">
              MADE FOR YOUR PURPOSE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Where DTG-Printed Apparel Works Best
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3">
              From personal designs to branded collections, DTG is useful when artwork detail matters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1352e9] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">Creative Merchandise</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Illustrated apparel and limited-edition designs with colourful visuals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1352e9] flex items-center justify-center mb-4">
                <Tag className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">Clothing Brands</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                New design launches and sampling before expanding a collection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1352e9] flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">Events &amp; Groups</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Distinctive T-shirts for gatherings, launches and team occasions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1352e9] flex items-center justify-center mb-4">
                <Shirt className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">Personal Designs</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Photos, artwork and meaningful graphics on everyday garments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15. CTA BANNER: BULK ENQUIRIES */}
      <section className="w-full bg-[#fbf879] py-12 md:py-14 px-6 md:px-12 lg:px-20 text-slate-900">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-white text-[#1352e9] text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-sm mb-3">
              BULK ENQUIRIES WELCOME
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
              Need DTG Printing in Bulk?
            </h2>
            <p className="text-slate-800 text-xs md:text-sm mt-2">
              Planning merchandise or team apparel? Share your garment, artwork and quantity to receive an order-specific quotation from Yoode.
            </p>
          </div>

          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-yoode-onyx text-white text-xs md:text-sm font-semibold hover:bg-black hover:-translate-y-0.5 active:scale-95 transition-all shadow-md shrink-0"
          >
            Request a Bulk Quote ↗
          </a>
        </div>
      </section>

      {/* 16. FAQS */}
      <section id="faqs" className="w-full py-20 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.35fr_0.65fr] gap-12 lg:gap-16">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1352e9] block mb-2">
              YOUR QUESTIONS, ANSWERED
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Practical answers about DTG fabrics, design files, print colours, pricing and delivery.
            </p>
          </div>

          <div className="divide-y divide-slate-200">
            {faqsList.map((faq, idx) => {
              const isOpen = openFaqs.includes(idx);
              return (
                <div key={idx} className="py-4.5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex justify-between items-center gap-4 text-slate-900 font-bold text-sm md:text-base hover:text-[#1352e9] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-xl font-bold text-[#1352e9] shrink-0 leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-3 max-w-[660px]">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 17. SEO ARTICLES / LEARN MORE */}
      <section id="learn-more" className="w-full bg-[#f1f5f9]/70 py-20 px-6 md:px-12 lg:px-20 border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1352e9] block mb-2">
              DTG PRINTING BY YOODE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Direct-to-Garment Printing for Custom Apparel
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3">
              Helpful information before choosing DTG printing for your next apparel order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                DTG Printing for Detailed T-Shirt Designs
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                DTG printing is a popular option when a T-shirt design includes photographs, gradients, illustrations or several colours. Rather than preparing separate screens, direct-to-garment technology applies ink onto a suitable fabric surface. This can be useful for creative merchandise, everyday clothing and artwork-led collections. At Yoode, begin with the kind of result you want, the garment colour and the number of pieces you need. The team can review your design, recommend a suitable print area and help you understand what to expect from the finished fabric.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                Choosing Cotton Fabrics for DTG T-Shirt Printing
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Fabric choice can make a noticeable difference to the look and feel of a printed design. Cotton and cotton-rich garments usually work well for DTG T-shirt printing, while fabric texture, colour and construction may affect the result. A light T-shirt may need different preparation from a dark one. For hoodies, oversized T-shirts and sweatshirts, confirm the exact material before choosing the technique. Share your preferred garment with Yoode and ask for an artwork and fabric review before your order is approved.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                Preparing Artwork for Direct-to-Garment Printing
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Send a clear image that matches your intended print dimensions. A high-resolution PNG with a suitable background is often useful, but the best file format depends on the artwork and production workflow. If your design contains tiny lettering, thin lines or transparency, ask for it to be checked before printing. Position also matters: a centre-front graphic needs different dimensions from a smaller chest print. Reviewing a mockup helps confirm the layout and allows you to check details before your custom T-shirt moves into production.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                Order Custom Printed T-Shirts Across India
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Whether you need DTG printing for a single design or a coordinated garment order, it helps to prepare a short brief covering artwork, product style, colour, sizes, quantities and delivery location. Yoode offers custom-apparel support and{" "}
                <Link href="/collections/custom-t-shirt-printing" className="text-[#1352e9] font-semibold underline underline-offset-2 hover:text-blue-700">
                  custom T-shirt printing
                </Link>{" "}
                options, with delivery across India. You can also explore{" "}
                <Link href="/pages/print-on-demand" className="text-[#1352e9] font-semibold underline underline-offset-2 hover:text-blue-700">
                  print-on-demand services
                </Link>{" "}
                if you are considering smaller batches or testing a new concept. Request a tailored quote and confirm the agreed schedule before production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 18. FINAL SECTION: QUOTE & INTERACTIVE ENQUIRY FORM */}
      <section id="quote" className="w-full bg-[#fbf879] grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] overflow-hidden">
        {/* Left Copy & T-Shirt */}
        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
          <div>
            <span className="inline-block px-3.5 py-1 bg-white text-[#1352e9] text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-sm mb-4">
              REQUEST YOUR CUSTOM QUOTE
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              Get a Quote for DTG Printing
            </h2>
            <p className="text-slate-800 text-sm md:text-base mt-3 max-w-md">
              Tell Yoode what you want to print, where it should go and how many pieces you need. We&apos;ll help you review the options.
            </p>
          </div>

          <div className="my-8 flex justify-center">
            <QuoteYellowTShirtMockup className="w-full max-w-[320px] drop-shadow-lg" />
          </div>
        </div>

        {/* Right Form Card */}
        <div className="bg-white p-8 sm:p-12 lg:p-14 lg:rounded-l-3xl shadow-xl flex flex-col justify-center">
          <h3 className="font-display font-extrabold text-2xl text-slate-900">
            Share your printing requirements
          </h3>
          <p className="text-slate-500 text-xs md:text-sm mt-1 mb-6">
            A simple form for a DTG printing enquiry. Preview only.
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullname" className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  id="fullname"
                  type="text"
                  required
                  placeholder="Your name or company"
                  value={formData.fullname}
                  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#1352e9]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                  WhatsApp / Mobile Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#1352e9]"
                />
              </div>

              <div>
                <label htmlFor="quantity" className="block text-xs font-bold text-slate-700 mb-1">
                  Quantity Required *
                </label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  required
                  placeholder="Number of garments"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#1352e9]"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-xs font-bold text-slate-700 mb-1">
                  Delivery City *
                </label>
                <input
                  id="city"
                  type="text"
                  required
                  placeholder="City and postal code"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#1352e9]"
                />
              </div>

              <div>
                <label htmlFor="garment" className="block text-xs font-bold text-slate-700 mb-1">
                  Garment Type *
                </label>
                <select
                  id="garment"
                  required
                  value={formData.garment}
                  onChange={(e) => setFormData({ ...formData, garment: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#1352e9]"
                >
                  <option value="">Select a garment</option>
                  <option value="Custom T-Shirts">Custom T-Shirts</option>
                  <option value="Oversized T-Shirts">Oversized T-Shirts</option>
                  <option value="Hoodies">Hoodies</option>
                  <option value="Sweatshirts">Sweatshirts</option>
                  <option value="Help me choose">Help me choose</option>
                </select>
              </div>

              <div>
                <label htmlFor="placement" className="block text-xs font-bold text-slate-700 mb-1">
                  Print Placement
                </label>
                <select
                  id="placement"
                  value={formData.placement}
                  onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#1352e9]"
                >
                  <option value="Help me choose">Help me choose</option>
                  <option value="Front">Front</option>
                  <option value="Back">Back</option>
                  <option value="Left chest">Left chest</option>
                  <option value="Multiple placements">Multiple placements</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="upload" className="block text-xs font-bold text-slate-700 mb-1">
                Upload Artwork (Optional)
              </label>
              <input
                id="upload"
                type="file"
                accept=".png,.jpg,.jpeg,.webp,.pdf,.svg"
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#1352e9] file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-[#1352e9] hover:file:bg-blue-100 cursor-pointer"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                Suggested formats: PNG, JPG, WebP, SVG or PDF. Upload is not connected in this preview.
              </span>
            </div>

            <div>
              <label htmlFor="notes" className="block text-xs font-bold text-slate-700 mb-1">
                Additional Requirements
              </label>
              <textarea
                id="notes"
                rows={3}
                placeholder="Garment colours, size breakdown, print dimensions, deadline or other details"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#1352e9] resize-y"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-yoode-onyx hover:bg-black text-white text-xs md:text-sm font-bold rounded-full transition-all shadow-md hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              Preview My DTG Quote Request ↗
            </button>

            <div className="text-[11px] text-slate-400 text-center">
              The wireframe does not submit, upload or save information. Connect to Yoode&apos;s live enquiry system before launch.
            </div>

            {formSubmitted && (
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-[#1352e9] font-medium text-center">
                {statusMessage}
              </div>
            )}

            <div className="pt-2 text-center">
              <a
                href="tel:+918069750293"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1352e9] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" /> Prefer to speak with us? Call +91 8069 750 293 ↗
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
