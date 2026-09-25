"use client";

import { useState, useEffect } from "react";
import { Search, User, ShoppingBag, Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchModal } from "./SearchModal";

const menuData = [
  {
    label: "Shop",
    href: "#shop",
    image: "/categories/best_sellers.jpg",
    items: [
      { label: "Sportswear", href: "#", image: "/categories/active_wear.jpg" },
      { label: "Trendz", href: "#", image: "/categories/best_sellers.jpg" },
      { label: "Streetwear", href: "#", image: "/categories/oversized_tees.jpg" },
      { label: "Accessories", href: "#", image: "/backpack.jpg" },
    ]
  },
  {
    label: "Clothing",
    href: "#clothing",
    megaMenu: true,
    image: "/categories/apparels.jpg",
    sections: [
      {
        title: "Men's Clothing",
        items: [
          { label: "Men's T Shirt", href: "#", image: "/categories/apparels.jpg" },
          { label: "Men's Polo Shirt", href: "#", image: "/categories/premium_polos.jpg" },
          { label: "Men's Oversized T Shirt", href: "#", image: "/categories/oversized_tees.jpg" },
          { label: "Men's Full Sleeve T Shirt", href: "#", image: "/categories/apparels.jpg" },
          { label: "Men's Hoodies & Sweatshirts", href: "#", image: "/categories/apparels.jpg" },
          { label: "Men's Jackets", href: "#", image: "/categories/active_wear.jpg" }
        ]
      },
      {
        title: "Women's Clothing",
        items: [
          { label: "Women's T Shirt", href: "#", image: "/categories/apparels.jpg" },
          { label: "Women's Polo Shirt", href: "#", image: "/categories/premium_polos.jpg" },
          { label: "Women's Oversized T Shirt", href: "#", image: "/categories/oversized_tees.jpg" },
          { label: "Women's Full Sleeve T Shirt", href: "#", image: "/categories/apparels.jpg" },
          { label: "Women's Hoodies & Sweatshirts", href: "#", image: "/categories/apparels.jpg" },
          { label: "Women's Jackets", href: "#", image: "/categories/active_wear.jpg" }
        ]
      },
      {
        title: "Kid's Clothing",
        items: [
          { label: "Kid's T Shirt", href: "#", image: "/categories/best_sellers.jpg" },
          { label: "Kid's Polo Shirt", href: "#", image: "/categories/premium_polos.jpg" },
          { label: "Kid's Oversized T Shirt", href: "#", image: "/categories/oversized_tees.jpg" },
          { label: "Kid's Full Sleeve T Shirt", href: "#", image: "/categories/apparels.jpg" },
          { label: "Kid's Hoodies & Sweatshirts", href: "#", image: "/categories/apparels.jpg" },
          { label: "Kid's Jackets", href: "#", image: "/categories/active_wear.jpg" }
        ]
      }
    ]
  },
  {
    label: "Custom Jerseys",
    href: "#jerseys",
    image: "/categories/custom_sports.jpg",
    items: [
      { label: "Cricket Jerseys", href: "#", image: "/categories/custom_sports.jpg" },
      { label: "Football Jerseys", href: "#", image: "/categories/custom_sports.jpg" },
      { label: "Basketball Jerseys", href: "#", image: "/categories/custom_sports.jpg" },
      { label: "Badminton Jerseys", href: "#", image: "/categories/custom_sports.jpg" },
      { label: "Volleyball Jersey", href: "#", image: "/categories/custom_sports.jpg" },
      { label: "Cycling Jerseys", href: "#", image: "/categories/custom_sports.jpg" },
      { label: "Running Jerseys", href: "#", image: "/categories/custom_sports.jpg" },
      { label: "Esport Jerseys", href: "#", image: "/categories/custom_sports.jpg" },
    ]
  },
  {
    label: "Corporate Gifting",
    href: "#corporate-gifting",
    image: "/categories/corporate_gifting.jpg"
  },
  {
    label: "Services",
    href: "#services",
    image: "/banner-4.png",
    items: [
      { label: "DTG Printing", href: "#", image: "/banner-4.png" },
      { label: "DTF Printing", href: "#", image: "/banner-4.png" },
      { label: "Embroidery Digitizing", href: "#", image: "/banner-4.png" },
      { label: "Coloreel Digitizing", href: "#", image: "/banner-4.png" },
      { label: "Screen Printing", href: "#", image: "/banner-4.png" },
      { label: "UV Printing", href: "#", image: "/banner-4.png" },
      { label: "Engraving", href: "#", image: "/banner-4.png" },
    ]
  },
  {
    label: "About",
    href: "#about",
    image: "/banner-2.png",
    items: [
      { label: "About Us", href: "#", image: "/banner-2.png" },
      { label: "Case Studies", href: "#", image: "/banner-2.png" },
      { label: "Blog", href: "#", image: "/banner-2.png" },
      { label: "Gallery", href: "#", image: "/banner-2.png" },
    ]
  },
  {
    label: "Our Store",
    href: "#stores",
    image: "/Bangalore_store.webp",
    items: [
      { label: "Bangalore", href: "#", image: "/Bangalore_store.webp" },
      { label: "Chennai", href: "#", image: "/Marthandam_Store.webp" },
      { label: "Marthandam", href: "#", image: "/Marthandam_Store.webp" },
      { label: "Trivandrum", href: "#", image: "/Thiruvananthapuram_Store.webp" },
    ]
  }
];

const secondaryTop = [
  { label: "Login/Register", href: "#" },
  { label: "Track my order", href: "#" },
  { label: "Returns & Exchanges", href: "#" },
  { label: "Help Center", href: "#" },
];

const secondaryBottom = [
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Tiktok", href: "#" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen, isSearchOpen]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(prev => prev === label ? null : label);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? "bg-[#111827]/90 backdrop-blur-md shadow-md py-4 text-white" : "bg-transparent py-5 text-white"
      }`}>
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between relative">
          
          <div className="relative z-50 flex items-center gap-4 lg:gap-6">
            <button 
              className="hover:scale-110 transition-transform"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={26} />
            </button>
            <a href="#" className="flex items-center">
              <img src="/logo-dark.avif" alt="Yoode Logo" className="h-5 lg:h-6 w-auto object-contain brightness-0 invert" />
            </a>
          </div>

          <div className="flex items-center gap-5 relative z-50">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hover:scale-110 transition-transform hidden sm:block"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button className="hover:scale-110 transition-transform hidden sm:block">
              <User size={20} />
            </button>
            <button className="relative hover:scale-110 transition-transform flex items-center">
              <ShoppingBag size={20} />
              <span className="absolute -top-1.5 -right-2 bg-[#E53935] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-sm border border-white/20">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* New Fullscreen Menu with Accordions */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[120] bg-[#F8F5F0] overflow-y-auto overflow-x-hidden flex flex-col"
          >
            {/* Header of Menu */}
            <div className="w-full flex items-center justify-center py-6 px-8 md:px-12 relative shrink-0">
              <div className="text-[#C13828] font-bold text-2xl tracking-wider uppercase">
                YOODE
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="absolute right-8 md:right-12 text-[#C13828] hover:scale-110 transition-transform"
              >
                <X size={36} strokeWidth={1.5} />
              </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row justify-between pt-4 pb-16">
              
              {/* Left Side: Giant Links & Accordions */}
              <div className="flex flex-col relative z-10 w-full lg:w-3/5 pb-10">
                {menuData.map((link) => {
                  const hasSubmenu = !!link.items || !!link.megaMenu;
                  const isOpen = openDropdown === link.label;
                  const isHovered = hoveredLink === link.label;

                  return (
                    <div 
                      key={link.label}
                      className="relative flex flex-col py-1 md:py-2"
                      onMouseEnter={() => setHoveredLink(link.label)}
                    >
                      <div className="flex items-center w-max group relative">
                        <button 
                          onClick={() => {
                            if (hasSubmenu) toggleDropdown(link.label);
                            else setMobileMenuOpen(false);
                          }}
                          className={`flex items-center gap-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase transition-colors duration-300 leading-[1.1] tracking-[-0.03em] ${
                            isHovered || isOpen ? "text-[#C13828]" : "text-[#9E9E9C]"
                          }`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {link.label}
                          {hasSubmenu && (
                            <ChevronDown 
                              size={40} 
                              strokeWidth={3}
                              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            />
                          )}
                        </button>
                        
                        {/* Image reveals next to the link if hovered and NO submenu is open */}
                        <AnimatePresence>
                          {isHovered && !isOpen && link.image && (
                            <motion.div
                              initial={{ opacity: 0, x: -20, rotate: -5 }}
                              animate={{ opacity: 1, x: 20, rotate: 2 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-full top-1/2 -translate-y-1/2 ml-4 md:ml-8 pointer-events-none z-0 hidden lg:block"
                            >
                              <img 
                                src={link.image} 
                                alt={link.label} 
                                className="w-40 xl:w-56 aspect-[4/3] object-cover shadow-md border-[6px] border-[#F8F5F0]"
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Submenu Accordion */}
                      <AnimatePresence>
                        {hasSubmenu && isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden ml-2 mt-4 md:ml-4"
                          >
                            <div className="pb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6">
                              {link.megaMenu && link.sections ? (
                                link.sections.map(section => (
                                  <div key={section.title}>
                                    <h4 className="text-[#C13828] text-sm md:text-base font-bold uppercase tracking-widest mb-4">
                                      {section.title}
                                    </h4>
                                    <ul className="flex flex-col gap-3">
                                      {section.items.map(item => (
                                        <li key={item.label}>
                                          <a 
                                            href={item.href} 
                                            className="text-[#9E9E9C] hover:text-[#C13828] transition-colors text-base font-medium flex items-center"
                                          >
                                            {item.label}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))
                              ) : (
                                <ul className="flex flex-col gap-3">
                                  {link.items?.map(item => (
                                    <li key={item.label}>
                                      <a 
                                        href={item.href} 
                                        className="text-[#9E9E9C] hover:text-[#C13828] transition-colors text-base md:text-lg font-medium flex items-center"
                                      >
                                        {item.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>

              {/* Right Side: Secondary Links */}
              <div className="flex flex-col gap-10 mt-12 lg:mt-4 lg:w-1/3 z-10 lg:pl-10">
                <div className="flex flex-col gap-4 border-b border-[#E4DFD6] pb-10">
                  {secondaryTop.map(link => (
                    <a key={link.label} href={link.href} className="text-[#A46760] font-medium text-lg hover:text-[#C13828] transition-colors w-max">
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-4 pt-2">
                  {secondaryBottom.map(link => (
                    <a key={link.label} href={link.href} className="text-[#A46760] font-medium text-lg hover:text-[#C13828] transition-colors w-max">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer of Menu */}
            <div className="w-full mt-auto flex flex-col-reverse gap-4 sm:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-8 text-[#C13828] text-[13px] font-medium shrink-0">
              <div>&copy; {new Date().getFullYear()} Yoode. All rights reserved.</div>
              <a href="#" className="hover:underline">Cookies Settings</a>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
