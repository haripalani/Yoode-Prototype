"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ChevronRight, Grid, List, SlidersHorizontal, Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const products = [
  {
    id: 1,
    name: "Men's Cotton Polo",
    brand: "Yoode",
    price: "₹ 780",
    originalPrice: "₹ 1,560",
    discount: "- 50%",
    variant: "Blue",
    rating: "4.9",
    image: "/mens-polo.jpg",
    specs: {
      labels: ["S", "M", "L", "XL"],
      value: "SIZES"
    }
  },
  {
    id: 2,
    name: "Polo Half Sleeve Jersey",
    brand: "Nike",
    price: "₹ 700",
    originalPrice: "₹ 875",
    discount: "- 20%",
    variant: "Red",
    rating: "4.8",
    image: "/polo-jersey.jpg",
    specs: {
      labels: ["M", "L", "XL"],
      value: "SIZES"
    }
  },
  {
    id: 3,
    name: "Space Backpack",
    brand: "Puma",
    price: "₹ 4,999",
    originalPrice: "₹ 9,999",
    discount: "- 50%",
    variant: "Black",
    rating: "5.0",
    image: "/backpack.jpg",
    specs: {
      labels: ["One Size"],
      value: "SIZE"
    }
  },
  {
    id: 4,
    name: "Custom Gift Boxes",
    brand: "Adidas",
    price: "₹ 2,499",
    originalPrice: "₹ 2,800",
    discount: "- 11%",
    variant: "White",
    rating: "4.7",
    image: "/gift-box.jpg",
  },
  {
    id: 5,
    name: "Oversized T-Shirt",
    brand: "Under Armour",
    price: "₹ 650",
    originalPrice: "₹ 999",
    discount: "- 35%",
    variant: "Green",
    rating: "4.6",
    image: "/womens-tshirt.jpg",
    specs: {
      labels: ["S", "M", "L"],
      value: "SIZES"
    }
  },
  {
    id: 6,
    name: "Classic Denim Jacket",
    brand: "Yoode",
    price: "₹ 1,899",
    originalPrice: "₹ 2,999",
    discount: "- 36%",
    variant: "Blue",
    rating: "4.8",
    image: "/denim-jacket.jpg",
    specs: {
      labels: ["S", "M", "L", "XL"],
      value: "SIZES"
    }
  }
];

function CustomSortDropdown({ value, onChange }: { value: string, onChange: (val: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const options = [
    "Default sorting",
    "Sort by popularity",
    "Sort by average rating",
    "Sort by latest",
    "Sort by price: low to high",
    "Sort by price: high to low"
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-[200px] bg-gray-50 border-none rounded-lg text-[12px] font-semibold text-yoode-onyx px-4 py-2.5 outline-none cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <span className="truncate">{value}</span>
        <ChevronDown className={`w-4 h-4 text-yoode-onyx transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-[200px] bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] z-50 overflow-hidden"
          >
            {options.map(option => (
              <button
                key={option}
                onClick={() => { onChange(option); setIsOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-[12px] transition-colors ${value === option ? 'bg-gray-50 font-bold text-yoode-onyx' : 'font-medium text-gray-500 hover:bg-gray-50 hover:text-yoode-onyx'}`}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CategoryPage() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("Default sorting");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["APPAREL"]);
  const [expandedFilters, setExpandedFilters] = useState<string[]>(["MANUFACTURER", "PRICE", "COLOR OPTIONS", "SIZE OPTIONS"]);
  const [showCategoriesSection, setShowCategoriesSection] = useState(true);
  const [showShopBySection, setShowShopBySection] = useState(true);
  
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleFilter = (setFn: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setFn(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  const toggleFilterSection = (section: string) => {
    setExpandedFilters(prev => 
      prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
    );
  };

  const sortedProducts = useMemo(() => {
    let result = products.filter(product => {
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
      if (selectedColors.length > 0 && !selectedColors.includes(product.variant)) return false;
      if (selectedSizes.length > 0) {
        if (!product.specs) return false;
        const hasSize = selectedSizes.some(size => product.specs!.labels.includes(size));
        if (!hasSize) return false;
      }
      return true;
    });

    if (sortBy === "Sort by price: low to high") {
      result.sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, '')));
    } else if (sortBy === "Sort by price: high to low") {
      result.sort((a, b) => parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, '')));
    } else if (sortBy === "Sort by average rating") {
      result.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    }
    return result;
  }, [sortBy, selectedBrands, selectedColors, selectedSizes]);

  return (
    <div className="relative min-h-screen w-full selection:bg-yoode-onyx selection:text-white flex flex-col font-sans bg-white">
      <Header />
      
      <main className="flex-grow bg-white">
        
        {/* Full Screen Banner */}
        <div className="relative w-full overflow-hidden bg-[#111827] text-white min-h-[400px] md:min-h-[500px] flex items-center justify-center flex-col pt-24 pb-16 md:pb-24">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img src="/process/step1.jpg" alt="Shop Banner" className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 hover:scale-100 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-[#111827]/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] pointer-events-none" />
          </div>
          
          {/* Mid-Background: Outline Text (Like Hero) */}
          <div className="absolute z-10 w-full flex justify-center pointer-events-none overflow-hidden select-none opacity-40">
            <h1 
              className="text-[28vw] font-display font-black leading-none tracking-tighter text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.4)" }}
            >
              YOODE
            </h1>
          </div>

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center">
            <span className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-white/80 mb-6">
              <span className="w-8 h-[1px] bg-white/40"></span>
              Discover The Collection
              <span className="w-8 h-[1px] bg-white/40"></span>
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-display font-black tracking-tight drop-shadow-2xl text-white leading-none">The Shop</h1>
          </div>
        </div>

        {/* Overlapping Content Section (Matches Hero Style) */}
        <div className="relative z-40 bg-white w-full rounded-t-[40px] md:rounded-t-[60px] -mt-12 md:-mt-16 pt-10 md:pt-16 pb-16 md:pb-24 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8">

            {/* Top Bar: Breadcrumb & Toolbar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4 border-b border-gray-100 pb-4">
              
              {/* Breadcrumb */}
              <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wider flex items-center gap-2">
                <a href="/" className="hover:text-yoode-onyx transition-colors">Home</a>
                <ChevronRight className="w-3 h-3" />
                <span className="text-yoode-onyx font-bold">Apparel</span>
              </div>

              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsSidebarVisible(!isSidebarVisible)}
                    className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider transition-colors px-4 py-2.5 rounded-lg ${!isSidebarVisible ? 'bg-yoode-onyx text-white hover:bg-yoode-onyx/90' : 'bg-gray-50 text-yoode-onyx hover:text-gray-600'}`}
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
                  </button>
                  <div className="flex items-center bg-gray-50 rounded-lg p-1">
                    <button 
                      onClick={() => setViewMode("grid")}
                      className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-yoode-onyx' : 'text-gray-400 hover:text-yoode-onyx'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setViewMode("list")}
                      className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-yoode-onyx' : 'text-gray-400 hover:text-yoode-onyx'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                  <CustomSortDropdown value={sortBy} onChange={setSortBy} />
                </div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest hidden xl:block ml-4">
                  SHOWING {(currentPage - 1) * 6 + 1}-{Math.min(currentPage * 6, 30)} OF 30 RESULTS
                </div>
              </div>
            </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Sidebar */}
            <aside className={`w-full lg:w-[280px] shrink-0 transition-all duration-300 ${isSidebarVisible ? 'block' : 'hidden'}`}>
              
              <div className="mb-10">
                <button 
                  onClick={() => setShowCategoriesSection(!showCategoriesSection)}
                  className="w-full text-[13px] font-bold text-yoode-onyx uppercase tracking-widest mb-2 flex items-center justify-between border-b border-gray-100 pb-4 cursor-pointer"
                >
                  CATEGORIES
                  <span className="text-gray-400 transition-transform duration-300 text-lg">
                    {showCategoriesSection ? "-" : "+"}
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {showCategoriesSection && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-4 mt-4">
                  <div className="group">
                    <button 
                      onClick={() => toggleCategory("APPAREL")}
                      className={`w-full flex items-center justify-between text-sm transition-colors ${expandedCategories.includes("APPAREL") ? "font-semibold text-yoode-onyx" : "font-medium text-gray-500 hover:text-yoode-onyx"}`}
                    >
                      APPAREL
                      <span className="text-gray-400 transition-transform duration-300">
                        {expandedCategories.includes("APPAREL") ? "-" : "+"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {expandedCategories.includes("APPAREL") && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 mt-3 pb-2 space-y-3 flex flex-col">
                            <a href="#" className="text-[13px] text-gray-500 hover:text-yoode-onyx transition-colors">T-Shirts</a>
                            <a href="#" className="text-[13px] text-gray-500 hover:text-yoode-onyx transition-colors">Polo Shirts</a>
                            <a href="#" className="text-[13px] text-gray-500 hover:text-yoode-onyx transition-colors">Jackets</a>
                            <a href="#" className="text-[13px] text-gray-500 hover:text-yoode-onyx transition-colors">Hoodies</a>
                            <a href="#" className="text-[13px] text-gray-500 hover:text-yoode-onyx transition-colors">Activewear</a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div className="group border-t border-gray-100 pt-4">
                    <button 
                      onClick={() => toggleCategory("ACCESSORIES")}
                      className={`w-full flex items-center justify-between text-sm transition-colors ${expandedCategories.includes("ACCESSORIES") ? "font-semibold text-yoode-onyx" : "font-medium text-gray-500 hover:text-yoode-onyx"}`}
                    >
                      ACCESSORIES
                      <span className="text-gray-400 transition-transform duration-300">
                        {expandedCategories.includes("ACCESSORIES") ? "-" : "+"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {expandedCategories.includes("ACCESSORIES") && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 mt-3 pb-2 space-y-3 flex flex-col">
                            <a href="#" className="text-[13px] text-gray-500 hover:text-yoode-onyx transition-colors">Caps & Hats</a>
                            <a href="#" className="text-[13px] text-gray-500 hover:text-yoode-onyx transition-colors">Socks</a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="group border-t border-gray-100 pt-4">
                    <button 
                      onClick={() => toggleCategory("BAGS & BACKPACKS")}
                      className={`w-full flex items-center justify-between text-sm transition-colors ${expandedCategories.includes("BAGS & BACKPACKS") ? "font-semibold text-yoode-onyx" : "font-medium text-gray-500 hover:text-yoode-onyx"}`}
                    >
                      BAGS & BACKPACKS
                      <span className="text-gray-400 transition-transform duration-300">
                        {expandedCategories.includes("BAGS & BACKPACKS") ? "-" : "+"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {expandedCategories.includes("BAGS & BACKPACKS") && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 mt-3 pb-2 space-y-3 flex flex-col">
                            <a href="#" className="text-[13px] text-gray-500 hover:text-yoode-onyx transition-colors">Laptop Bags</a>
                            <a href="#" className="text-[13px] text-gray-500 hover:text-yoode-onyx transition-colors">Travel Bags</a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="group border-t border-gray-100 pt-4">
                    <button 
                      onClick={() => toggleCategory("GIFT BOXES")}
                      className={`w-full flex items-center justify-between text-sm transition-colors ${expandedCategories.includes("GIFT BOXES") ? "font-semibold text-yoode-onyx" : "font-medium text-gray-500 hover:text-yoode-onyx"}`}
                    >
                      GIFT BOXES
                      <span className="text-gray-400 transition-transform duration-300">
                        {expandedCategories.includes("GIFT BOXES") ? "-" : "+"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {expandedCategories.includes("GIFT BOXES") && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 mt-3 pb-2 space-y-3 flex flex-col">
                            <a href="#" className="text-[13px] text-gray-500 hover:text-yoode-onyx transition-colors">Corporate Gifting</a>
                            <a href="#" className="text-[13px] text-gray-500 hover:text-yoode-onyx transition-colors">Event Boxes</a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mb-10">
                <button 
                  onClick={() => setShowShopBySection(!showShopBySection)}
                  className="w-full text-[13px] font-bold text-yoode-onyx uppercase tracking-widest mb-2 flex items-center justify-between border-b border-gray-100 pb-4 cursor-pointer"
                >
                  SHOP BY
                  <span className="text-gray-400 transition-transform duration-300 text-lg">
                    {showShopBySection ? "-" : "+"}
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {showShopBySection && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4">
                        <div className="mb-8 border-b border-gray-100 pb-4">
                  <button 
                    onClick={() => toggleFilterSection("MANUFACTURER")}
                    className="w-full flex items-center justify-between text-[11px] font-bold text-yoode-onyx uppercase tracking-wider mb-4"
                  >
                    MANUFACTURER
                    <span className="text-gray-400 transition-transform duration-300">
                      {expandedFilters.includes("MANUFACTURER") ? "-" : "+"}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {expandedFilters.includes("MANUFACTURER") && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 pb-2">
                          {['Yoode (15)', 'Nike (09)', 'Puma (12)', 'Adidas (16)', 'Under Armour (05)'].map(brand => {
                            const brandName = brand.split(' (')[0];
                            const count = brand.split('(')[1];
                            const isSelected = selectedBrands.includes(brandName);
                            return (
                              <label key={brand} className="flex items-center group cursor-pointer" onClick={(e) => { e.preventDefault(); toggleFilter(setSelectedBrands, brandName); }}>
                                <div className={`w-3.5 h-3.5 mr-3 rounded-sm border flex items-center justify-center transition-colors ${isSelected ? 'bg-yoode-onyx border-yoode-onyx text-white' : 'border-gray-300 group-hover:border-yoode-onyx'}`}>
                                  {isSelected && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
                                </div>
                                <div className="flex-1 flex items-center justify-between">
                                  <span className={`text-[13px] transition-colors ${isSelected ? 'text-yoode-onyx font-semibold' : 'text-gray-500 group-hover:text-yoode-onyx'}`}>{brandName}</span>
                                  <span className={`text-[11px] transition-colors ${isSelected ? 'text-yoode-onyx font-semibold' : 'text-gray-400 group-hover:text-yoode-onyx'}`}>({count}</span>
                                </div>
                              </label>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mb-8 border-b border-gray-100 pb-4">
                  <button 
                    onClick={() => toggleFilterSection("PRICE")}
                    className="w-full flex items-center justify-between text-[11px] font-bold text-yoode-onyx uppercase tracking-wider mb-4"
                  >
                    PRICE
                    <span className="text-gray-400 transition-transform duration-300">
                      {expandedFilters.includes("PRICE") ? "-" : "+"}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {expandedFilters.includes("PRICE") && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2">
                          <div className="h-1 bg-gray-200 rounded-full mb-4 relative mt-2">
                            <div className="absolute left-[20%] right-[30%] h-full bg-yoode-onyx rounded-full"></div>
                            <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-3 h-3 bg-yoode-onyx rounded-full border-2 border-white shadow-sm"></div>
                            <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-3 h-3 bg-yoode-onyx rounded-full border-2 border-white shadow-sm"></div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-50 rounded-lg px-3 py-2 text-[13px] font-medium text-center">$50</div>
                            <span className="text-gray-400">-</span>
                            <div className="flex-1 bg-gray-50 rounded-lg px-3 py-2 text-[13px] font-medium text-center">$450</div>
                            <button className="bg-yoode-onyx text-white text-[11px] font-bold px-4 py-2.5 rounded-lg ml-2 hover:bg-black transition-colors">Search</button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="mb-8 border-b border-gray-100 pb-4">
                  <button 
                    onClick={() => toggleFilterSection("COLOR OPTIONS")}
                    className="w-full flex items-center justify-between text-[11px] font-bold text-yoode-onyx uppercase tracking-wider mb-4"
                  >
                    COLOR OPTIONS
                    <span className="text-gray-400 transition-transform duration-300">
                      {expandedFilters.includes("COLOR OPTIONS") ? "-" : "+"}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {expandedFilters.includes("COLOR OPTIONS") && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 pb-2">
                          {['Black (15)', 'White (09)', 'Blue (12)', 'Red (16)', 'Green (05)'].map(color => {
                            const colorName = color.split(' (')[0];
                            const count = color.split('(')[1];
                            const isSelected = selectedColors.includes(colorName);
                            return (
                              <label key={color} className="flex items-center group cursor-pointer" onClick={(e) => { e.preventDefault(); toggleFilter(setSelectedColors, colorName); }}>
                                <div className={`w-3.5 h-3.5 mr-3 rounded-sm border flex items-center justify-center transition-colors ${isSelected ? 'bg-yoode-onyx border-yoode-onyx text-white' : 'border-gray-300 group-hover:border-yoode-onyx'}`}>
                                  {isSelected && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
                                </div>
                                <div className="flex-1 flex items-center justify-between">
                                  <span className={`text-[13px] transition-colors ${isSelected ? 'text-yoode-onyx font-semibold' : 'text-gray-500 group-hover:text-yoode-onyx'}`}>{colorName}</span>
                                  <span className={`text-[11px] transition-colors ${isSelected ? 'text-yoode-onyx font-semibold' : 'text-gray-400 group-hover:text-yoode-onyx'}`}>({count}</span>
                                </div>
                              </label>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="mb-8">
                  <button 
                    onClick={() => toggleFilterSection("SIZE OPTIONS")}
                    className="w-full flex items-center justify-between text-[11px] font-bold text-yoode-onyx uppercase tracking-wider mb-4"
                  >
                    SIZE OPTIONS
                    <span className="text-gray-400 transition-transform duration-300">
                      {expandedFilters.includes("SIZE OPTIONS") ? "-" : "+"}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {expandedFilters.includes("SIZE OPTIONS") && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 pb-2">
                          {['L (15)', 'M (09)', 'S (12)', 'XL (16)'].map(size => {
                            const sizeName = size.split(' (')[0];
                            const count = size.split('(')[1];
                            const isSelected = selectedSizes.includes(sizeName);
                            return (
                              <label key={size} className="flex items-center group cursor-pointer border-t border-gray-50 pt-3 first:border-0 first:pt-0" onClick={(e) => { e.preventDefault(); toggleFilter(setSelectedSizes, sizeName); }}>
                                <div className={`w-3.5 h-3.5 mr-3 rounded-sm border flex items-center justify-center transition-colors ${isSelected ? 'bg-yoode-onyx border-yoode-onyx text-white' : 'border-gray-300 group-hover:border-yoode-onyx'}`}>
                                  {isSelected && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
                                </div>
                                <div className="flex-1 flex items-center justify-between">
                                  <span className={`text-[13px] transition-colors ${isSelected ? 'text-yoode-onyx font-semibold' : 'text-gray-500 group-hover:text-yoode-onyx'}`}>{sizeName}</span>
                                  <span className={`text-[11px] transition-colors ${isSelected ? 'text-yoode-onyx font-semibold' : 'text-gray-400 group-hover:text-yoode-onyx'}`}>({count}</span>
                                </div>
                              </label>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div>
                <h3 className="text-[13px] font-bold text-yoode-onyx uppercase tracking-widest mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
                  COMPARE
                  <div className="w-4 h-[1px] bg-yoode-onyx"></div>
                </h3>
                <p className="text-[13px] text-gray-500">You have no items to compare.</p>
              </div>

            </aside>

            {/* Main Content */}
            <div className="flex-1">
              


              {/* Product Grid */}
              <div className={`grid gap-4 md:gap-6 ${viewMode === 'list' ? 'grid-cols-1' : (isSidebarVisible ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4')}`}>
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map(page => (
                    <button 
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${currentPage === page ? 'bg-yoode-onyx text-white' : 'hover:bg-gray-50 text-gray-500'}`}
                    >
                      {page.toString().padStart(2, '0')}
                    </button>
                  ))}
                  <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
                  <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, 3))}
                    className="w-10 h-10 rounded-lg hover:bg-gray-50 text-yoode-onyx flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest hidden sm:block">
                  SHOWING {(currentPage - 1) * 6 + 1}-{Math.min(currentPage * 6, 30)} OF 30 RESULTS
                </div>
              </div>

            </div>
          </div>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
