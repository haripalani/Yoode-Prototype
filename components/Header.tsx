"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, ShoppingBag, X } from "lucide-react";
import { SearchModal } from "./SearchModal";
import { RynoxMenu } from "./RynoxMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const isInnerPage = pathname !== "/" && pathname !== "/category";
  const isDarkHeader = isScrolled || isMenuOpen || isInnerPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 
        TOP HEADER BAR (Rynox Gear Navigation Style)
        - Left: 9-Dot Matrix Menu Trigger
        - Center: Bold Brand Logo
        - Right: Search, Log In, and Cart badge with price
      */}
      <header
        className={`fixed top-[30px] md:top-[32px] left-0 w-full z-[130] transition-all duration-300 ${
          isDarkHeader
            ? "bg-[#0b0c10]/95 backdrop-blur-md shadow-lg h-[58px] md:h-[62px] flex items-center text-white border-b border-white/10"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent h-[58px] md:h-[62px] flex items-center text-white"
        }`}
      >
        <div className="w-full max-w-[1700px] mx-auto px-4 md:px-8 flex items-center justify-between relative h-full">
          
          {/* LEFT: 9-Dot Matrix Launcher (Boxed Button Style with Rynox SVG) */}
          <div className="flex items-center z-10">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-xl border transition-all duration-200 group cursor-pointer focus:outline-none ${
                isMenuOpen
                  ? "bg-[#E53935]/20 border-[#E53935] text-[#E53935] shadow-[0_0_15px_rgba(229,57,53,0.35)]"
                  : "bg-white/[0.08] border-white/20 hover:bg-white/[0.16] hover:border-white/40 text-white shadow-sm"
              }`}
              aria-label="Toggle Mega Navigation Menu"
              title={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="w-5 h-5 flex items-center justify-center overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox={isMenuOpen ? "0 38 36 46" : "0 0 36 36"}
                  data-ab-filters-channel="c3f99a71-3846-44c7-ad93-386087f1eefa"
                  className="w-4.5 h-4.5 transition-all duration-200 text-current"
                >
                  <defs>
                    <style>{`.cls-1{fill:currentColor;}`}</style>
                  </defs>
                  <circle className="cls-1" cx="4.47" cy="40.47" r="2.82" />
                  <circle className="cls-1" cx="31.4" cy="40.47" r="2.82" />
                  <circle className="cls-1" cx="18" cy="54" r="2.82" />
                  <circle className="cls-1" cx="4.47" cy="54" r="2.82" />
                  <circle className="cls-1" cx="31.4" cy="54" r="2.82" />
                  <circle className="cls-1" cx="18" cy="67.53" r="2.82" />
                  <circle className="cls-1" cx="4.47" cy="67.53" r="2.82" />
                  <circle className="cls-1" cx="31.4" cy="67.53" r="2.82" />
                  <circle className="cls-1" cx="18" cy="81.07" r="2.82" />
                  <circle className="cls-1" cx="4.47" cy="4.47" r="2.82" />
                  <circle className="cls-1" cx="31.4" cy="4.47" r="2.82" />
                  <circle className="cls-1" cx="18" cy="4.47" r="2.82" />
                  <circle className="cls-1" cx="4.47" cy="18" r="2.82" />
                  <circle className="cls-1" cx="31.4" cy="18" r="2.82" />
                  <circle className="cls-1" cx="18" cy="18" r="2.82" />
                  <circle className="cls-1" cx="4.47" cy="31.53" r="2.82" />
                  <circle className="cls-1" cx="31.4" cy="31.53" r="2.82" />
                  <circle className="cls-1" cx="18" cy="31.53" r="2.82" />
                </svg>
              </div>
            </button>
          </div>

          {/* CENTER: YOODE BRAND LOGO (True Dead Center) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto z-10">
            <Link href="/" className="flex items-center group">
              <img
                src="/logo-dark.avif"
                alt="Yoode"
                className="h-5 md:h-6 w-auto object-contain brightness-0 invert transition-transform group-hover:scale-105"
              />
            </Link>
          </div>

          {/* RIGHT: Search, Log In, Cart (Rynox style layout) */}
          <div className="flex items-center gap-3 sm:gap-6 text-xs md:text-sm font-semibold z-10">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 hover:text-[#E53935] transition-colors p-1.5 cursor-pointer"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={2.2} />
              <span className="hidden sm:inline font-bold tracking-wide">Search</span>
            </button>

            {/* Log In */}
            <Link
              href="/#account"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#E53935] transition-colors p-1.5"
            >
              <User size={18} strokeWidth={2.2} />
              <span className="font-bold tracking-wide">Log In</span>
            </Link>

            {/* Cart with count badge & price */}
            <Link
              href="/#cart"
              className="flex items-center gap-2 hover:text-[#E53935] transition-colors p-1.5"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag size={19} strokeWidth={2.2} />
                <span className="absolute -top-1.5 -right-2 bg-[#E53935] text-white text-[9px] font-black h-4 w-4 rounded-full flex items-center justify-center shadow-sm border border-white/20">
                  0
                </span>
              </div>
              <span className="hidden md:inline font-bold font-mono text-[13px] tracking-tight">
                ₹ 0
              </span>
            </Link>
          </div>

        </div>
      </header>

      {/* RYNOX STYLE SPLIT MEGA DRAWER */}
      <RynoxMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* SEARCH MODAL */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
