"use client";

import { useState, useEffect } from "react";
import { Search, User, ShoppingBag, Menu, X, ChevronRight, ChevronDown, UserPlus, Truck, RefreshCcw, HelpCircle } from "lucide-react";

const Facebook = ({ size = 24, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Twitter = ({ size = 24, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const Instagram = ({ size = 24, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const Youtube = ({ size = 24, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SearchModal } from "./SearchModal";
const menuData = [
  {
    label: "Shop",
    href: "#shop",
    image: "/categories/best_sellers.jpg",
    description: "Explore our latest collections and best-selling apparel.",
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
    description: "Premium clothing for Men, Women, and Kids. Discover tailored fits and high-quality fabrics.",
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
    description: "Design your team's spirit. High-performance custom jerseys for every sport.",
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
    image: "/categories/corporate_gifting.jpg",
    description: "Meaningful corporate gifts and custom teamwear that leaves a lasting impression."
  },
  {
    label: "Services",
    href: "#services",
    image: "/banner-4.png",
    description: "From DTG printing to intricate embroidery, explore our state-of-the-art customization services.",
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
    description: "Learn about our journey, values, and commitment to sustainable fashion.",
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
    description: "Visit us in person. Experience our fabrics, try on fits, and meet the team.",
    items: [
      { label: "Bangalore", href: "#", image: "/Bangalore_store.webp" },
      { label: "Chennai", href: "#", image: "/Marthandam_Store.webp" },
      { label: "Marthandam", href: "#", image: "/Marthandam_Store.webp" },
      { label: "Trivandrum", href: "#", image: "/Thiruvananthapuram_Store.webp" },
    ]
  }
];

const secondaryTop = [
  { label: "Login/Register", href: "#", icon: UserPlus },
  { label: "Track my order", href: "#", icon: Truck },
  { label: "Returns & Exchanges", href: "#", icon: RefreshCcw },
  { label: "Help Center", href: "#", icon: HelpCircle },
];

const secondaryBottom = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Youtube", href: "#", icon: Youtube },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const isInnerPage = pathname !== "/" && pathname !== "/category";
  const isDarkHeader = isScrolled || isInnerPage;

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
      <header className={`fixed top-[30px] md:top-[32px] left-0 w-full z-[100] transition-all duration-300 ${
        isDarkHeader ? "bg-[#111827]/90 backdrop-blur-md shadow-md py-4 text-white" : "bg-transparent py-5 text-white"
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
                <span>0</span>
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
            className="fixed inset-0 z-[120] bg-[#F8F5F0] h-[100dvh] overflow-hidden flex flex-col"
          >
            {/* Immersive Parallax Background for Right Side */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 z-0 overflow-hidden pointer-events-none bg-[#E4DFD6]">
              <AnimatePresence mode="wait">
                {(hoveredLink || openDropdown) ? (
                  <motion.div
                    key={hoveredLink || openDropdown}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {(() => {
                      const activeItem = menuData.find(m => m.label === (hoveredLink || openDropdown));
                      if (!activeItem || !activeItem.image) return null;
                      return (
                        <>
                          <motion.img 
                            src={activeItem.image} 
                            alt={activeItem.label} 
                            initial={{ scale: 1.15, y: 20 }}
                            animate={{ scale: 1.05, y: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="w-full h-full object-cover" 
                          />
                          {/* Top and Bottom Gradients to blend with header/footer */}
                          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5F0] via-transparent to-[#F8F5F0]" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-center p-12 lg:p-24 mix-blend-multiply" />
                          <div className="absolute inset-0 flex flex-col justify-center p-12 lg:p-24 z-10">
                            <motion.h3 
                              initial={{ opacity: 0, x: -30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3, duration: 0.6 }}
                              className="text-6xl xl:text-8xl font-black text-white uppercase tracking-tighter mb-4 leading-none drop-shadow-2xl"
                            >
                              {activeItem.label}
                            </motion.h3>
                            <motion.p 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4, duration: 0.6 }}
                              className="text-white/90 text-xl xl:text-2xl font-semibold leading-relaxed max-w-lg drop-shadow-xl"
                            >
                              {/* @ts-ignore */}
                              {activeItem.description}
                            </motion.p>
                          </div>
                        </>
                      );
                    })()}
                  </motion.div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <p className="text-[#A46760] font-bold text-3xl uppercase tracking-[0.2em]"><span>Select an option</span></p>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Header of Menu */}
            <div className="w-full flex items-center justify-center py-6 px-8 md:px-12 relative z-20 shrink-0">
              <div className="text-[#C13828] font-bold text-2xl tracking-wider uppercase">
                <span>YOODE</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="absolute right-8 md:right-12 text-[#C13828] hover:scale-110 transition-transform"
              >
                <X size={36} strokeWidth={1.5} />
              </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row pt-2 pb-6 overflow-hidden">
              
              {/* Left Side: Links & Accordions */}
              <div 
                className="flex flex-col relative z-10 w-full lg:w-1/2 pb-10"
                onMouseLeave={() => setHoveredLink(null)}
              >
                {menuData.map((link) => {
                  const hasSubmenu = !!link.items || !!link.megaMenu;
                  const isOpen = openDropdown === link.label;
                  const isHovered = hoveredLink === link.label;
                  
                  const isAnySelected = hoveredLink !== null || openDropdown !== null;
                  const isActive = isHovered || isOpen;

                  return (
                    <div 
                      key={link.label}
                      className="relative flex flex-col py-1 md:py-2"
                      onMouseEnter={() => setHoveredLink(link.label)}
                    >
                      <div className="flex items-center w-max group relative min-h-[clamp(2.5rem,6vh,5.5rem)]">
                        <button 
                          onClick={() => {
                            if (hasSubmenu) toggleDropdown(link.label);
                            else setMobileMenuOpen(false);
                          }}
                          className={`flex items-center gap-4 font-black uppercase transition-all duration-500 leading-[1.1] tracking-[-0.03em] ${
                            isActive 
                              ? "text-[#C13828] text-[clamp(2rem,5vh,4.5rem)]" 
                              : isAnySelected 
                                ? "text-[#9E9E9C]/50 text-[clamp(1.5rem,3.5vh,3rem)]"
                                : "text-[#9E9E9C] text-[clamp(2rem,5vh,4.5rem)]"
                          }`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <span>{link.label}</span>
                          {hasSubmenu && (
                            <ChevronDown 
                              size={isActive ? 40 : 32} 
                              strokeWidth={3}
                              className={`transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            />
                          )}
                        </button>
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
                                      <span>{section.title}</span>
                                    </h4>
                                    <ul className="flex flex-col gap-3">
                                      {section.items.map(item => (
                                        <li key={item.label}>
                                          <a 
                                            href={item.href} 
                                            className="text-[#9E9E9C] hover:text-[#C13828] transition-colors text-base font-medium flex items-center"
                                          >
                                            <span>{item.label}</span>
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
                                        <span>{item.label}</span>
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
              


            </div>

            {/* Footer of Menu */}
            <div className="w-full mt-auto flex flex-col px-6 md:px-12 lg:px-20 py-8 text-[#C13828] shrink-0 border-t border-[#E4DFD6]/60 relative z-20">
              
              {/* Top Row: Links and Socials */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-6 border-b border-[#E4DFD6]/40">
                
                {/* Secondary Links */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-xs md:text-sm font-bold tracking-wide">
                  {secondaryTop.map((link, idx) => (
                    <a key={idx} href={link.href} className="flex items-center gap-2 hover:text-[#A46760] transition-all duration-300">
                      {link.icon && <link.icon size={18} strokeWidth={2.5} />}
                      <span className="uppercase">{link.label}</span>
                    </a>
                  ))}
                </div>

                {/* Social Links (Icons only) */}
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-widest font-black opacity-50 mr-2 hidden sm:block"><span>Connect</span></span>
                  {secondaryBottom.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.href} 
                      className="w-10 h-10 rounded-full border-2 border-[#C13828]/20 flex items-center justify-center hover:bg-[#C13828] hover:text-[#F8F5F0] hover:border-[#C13828] transition-all duration-300 shadow-sm"
                      aria-label={link.label}
                      title={link.label}
                    >
                      {link.icon && <link.icon size={18} strokeWidth={2} />}
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Legal */}
              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6 text-[12px] md:text-[13px] font-semibold opacity-70">
                <div><span>&copy; {new Date().getFullYear()} Yoode. All rights reserved.</span></div>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                  <a href="#" className="hover:text-[#A46760] transition-colors"><span>Privacy Policy</span></a>
                  <a href="#" className="hover:text-[#A46760] transition-colors"><span>Terms of Service</span></a>
                  <a href="#" className="hover:text-[#A46760] transition-colors"><span>Cookies Settings</span></a>
                </div>
              </div>

            </div>
            
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
