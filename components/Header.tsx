"use client";

import { useState, useEffect } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Corporate", href: "#corporate" },
    { label: "Sportswear", href: "#sportswear" },
    { label: "Trendz", href: "#trendz" },
    { label: "Streetwear", href: "#streetwear" },
    { label: "Experience Centers", href: "#studios" },
    { label: "About Us", href: "#about" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? "bg-[#111827]/90 backdrop-blur-md shadow-md py-4" : "bg-transparent py-5"
      }`}>
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Mark */}
        <a href="#" className="font-display font-black text-2xl tracking-tight text-white relative z-50">
          YOODE
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-white hover:text-white/70 transition-colors drop-shadow-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5 relative z-50">
          <button className="text-white hover:scale-110 transition-transform hidden sm:block">
            <Search size={20} />
          </button>
          <button className="text-white hover:scale-110 transition-transform hidden sm:block">
            <User size={20} />
          </button>
          <button className="relative text-white hover:scale-110 transition-transform flex items-center">
            <ShoppingBag size={20} />
            <span className="absolute -top-1.5 -right-2 bg-yoode-onyx text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-sm border border-white/20">
              0
            </span>
          </button>
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-yoode-onyx text-white flex flex-col pt-24 px-8 pb-12 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-2xl font-display font-bold">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto flex gap-6 pt-12 border-t border-white/10 text-white/70">
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                <Search size={20} /> Search
              </button>
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                <User size={20} /> Account
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
