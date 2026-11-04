"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, ShoppingBag, X } from "lucide-react";
import { SearchModal } from "./SearchModal";
import { YoodeMenu } from "./YoodeMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const isAlwaysSolid = pathname?.startsWith("/products") || pathname?.startsWith("/dtg-printing");
  const isDarkHeader = isScrolled || isMenuOpen || isAlwaysSolid;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 
        TOP HEADER BAR
        - Left: 9-Dot Matrix Menu Trigger
        - Center: Bold Brand Logo
        - Right: Search, Log In, and Cart badge with price
      */}
      <header
        className={`fixed top-[30px] md:top-[32px] left-0 w-full z-[130] transition-all duration-300 ${
          isDarkHeader
            ? "bg-[#0b0c10]/95 backdrop-blur-md shadow-lg h-[44px] md:h-[48px] flex items-center text-white border-b border-white/10"
            : "bg-transparent h-[44px] md:h-[48px] flex items-center text-white border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-[1700px] mx-auto px-4 md:px-8 flex items-center justify-between relative h-full">
          
          {/* LEFT: 9-Dot Matrix Launcher */}
          <div className="flex items-center z-10">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`w-8 h-8 md:w-8.5 md:h-8.5 flex items-center justify-center rounded-lg border transition-all duration-200 group cursor-pointer focus:outline-none ${
                isMenuOpen
                  ? "bg-[#E53935]/20 border-[#E53935] text-[#E53935] shadow-[0_0_15px_rgba(229,57,53,0.35)]"
                  : "bg-white/[0.08] border-white/20 hover:bg-white/[0.16] hover:border-white/40 text-white shadow-sm"
              }`}
              aria-label="Toggle Mega Navigation Menu"
              title={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="w-4 h-4 flex items-center justify-center overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox={isMenuOpen ? "0 38 36 46" : "0 0 36 36"}
                  data-ab-filters-channel="c3f99a71-3846-44c7-ad93-386087f1eefa"
                  className="w-3.5 h-3.5 transition-all duration-200 text-current"
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
                className="h-3.5 md:h-4 w-auto object-contain brightness-0 invert transition-transform group-hover:scale-105"
              />
            </Link>
          </div>

          {/* RIGHT: Search, Log In, Cart */}
          <div className="flex items-center gap-2.5 sm:gap-5 text-xs font-semibold z-10">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1 hover:text-[#E53935] transition-colors p-1 cursor-pointer"
              aria-label="Search"
            >
              <Search size={15} strokeWidth={2.2} />
              <span className="hidden sm:inline font-bold tracking-wide">Search</span>
            </button>

            {/* Log In */}
            <Link
              href="/#account"
              className="hidden sm:flex items-center gap-1 hover:text-[#E53935] transition-colors p-1"
            >
              <User size={15} strokeWidth={2.2} />
              <span className="font-bold tracking-wide">Log In</span>
            </Link>

            {/* Cart with count badge & price */}
            <Link
              href="/#cart"
              className="flex items-center gap-1.5 hover:text-[#E53935] transition-colors p-1"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag size={16} strokeWidth={2.2} />
                <span className="absolute -top-1.5 -right-1.5 bg-[#E53935] text-white text-[8px] font-black h-3.5 w-3.5 rounded-full flex items-center justify-center shadow-xs border border-white/20">
                  0
                </span>
              </div>
              <span className="hidden md:inline font-bold font-mono text-xs tracking-tight">
                ₹ 0
              </span>
            </Link>
          </div>

        </div>
      </header>

      {/* YOODE MEGA DRAWER */}
      <YoodeMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* SEARCH MODAL */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
