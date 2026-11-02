"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ChevronRight, Grid, List, SlidersHorizontal, Check, ChevronDown, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const generateProducts = () => {
  const categories = [
    'custom-sports-jerseys',
    'polos',
    't-shirts',
    'hoodies-sweatshirts-jackets',
    'accessories',
    'stationery-gifting-drinkware',
    'trenz'
  ];

  const brands = ['Yoode Custom', 'RedBolt', 'Jack&Jones', 'Vero Moda'];
  const colors = ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue'];
  const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL', '22', '24'];

  return categories.flatMap((cat, catIndex) => {
    return Array.from({ length: 30 }).map((_, i) => {
      const id = catIndex * 100 + i + 1;
      const price = (i * 153) % 2000 + 500;
      const discount = (i * 7) % 50 + 10;
      const originalPrice = Math.floor(price / (1 - discount / 100));
      
      let name = "Product";
      let image = "/mens-polo.jpg";
      if (cat === 'custom-sports-jerseys') { name = `Pro Sports Jersey ${i+1}`; image = "/categories/custom_sports.jpg"; }
      else if (cat === 'polos') { name = `Premium Cotton Polo ${i+1}`; image = "/mens-polo.jpg"; }
      else if (cat === 't-shirts') { name = `Classic Graphic T-Shirt ${i+1}`; image = "/womens-tshirt.jpg"; }
      else if (cat === 'hoodies-sweatshirts-jackets') { name = `Winter Denim Jacket ${i+1}`; image = "/denim-jacket.jpg"; }
      else if (cat === 'accessories') {
        const accTypes = [
          { n: "Travel Explorer Backpack", img: "/backpack.jpg" },
          { n: "Premium Leather Watch", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80" },
          { n: "Sports Duffle Bag", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80" },
          { n: "Classic Baseball Cap", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop&q=80" },
          { n: "Laptop Sleeve", img: "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=600&auto=format&fit=crop&q=80" }
        ];
        const acc = accTypes[i % accTypes.length];
        name = `${acc.n} ${i+1}`; 
        image = acc.img;
      }
      else if (cat === 'stationery-gifting-drinkware') { name = `Executive Gift Set ${i+1}`; image = "/gift-box.jpg"; }
      else if (cat === 'trenz') { name = `Trenz Oversized Collection ${i+1}`; image = "/categories/trenz_oversized_festive.jpg"; }

      return {
        id,
        name,
        brand: brands[i % brands.length],
        price: `₹ ${price}`,
        originalPrice: `₹ ${originalPrice}`,
        discount: `- ${discount}%`,
        variant: colors[i % colors.length],
        rating: (4 + (i % 10) / 10).toFixed(1),
        image,
        category: cat,
        specs: {
          labels: sizes.slice(i % 3, (i % 3) + 4),
          value: "SIZES"
        }
      };
    });
  });
};

const products = generateProducts();

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
  const router = useRouter();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [sortBy, setSortBy] = useState("Default sorting");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["APPAREL"]);
  const [expandedFilters, setExpandedFilters] = useState<string[]>(["PRODUCT TYPE", "GENDER", "PRICE", "SIZE", "COLOR FAMILY", "BRAND", "CUSTOMISATION"]);
  const [showCategoriesSection, setShowCategoriesSection] = useState(true);
  const [showShopBySection, setShowShopBySection] = useState(true);
  
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedCustomisations, setSelectedCustomisations] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Dynamic Category Filters
  const params = useParams();
  const categorySlug = typeof params?.category === 'string' ? params.category : '';
  const [selectedSpecificFilters, setSelectedSpecificFilters] = useState<Record<string, string[]>>({});

  const toggleSpecificFilter = (filterTitle: string, option: string) => {
    setSelectedSpecificFilters(prev => {
      const current = prev[filterTitle] || [];
      return {
        ...prev,
        [filterTitle]: current.includes(option) ? current.filter(o => o !== option) : [...current, option]
      };
    });
  };

  const categoryFilterSpec: Record<string, {title: string, options: string[]}[]> = {
    'custom-sports-jerseys': [
      { title: "SPORT", options: ['Cricket (12)', 'Football (10)', 'Basketball (5)'] },
      { title: "FABRIC", options: ['Dot Knit (15)', 'Micro Polyester (12)', 'Spandex Blend (8)'] },
      { title: "GSM", options: ['140 GSM (12)', '160 GSM (15)', '180 GSM (8)'] },
      { title: "NECK", options: ['V-Neck (10)', 'Round Neck (15)', 'Collar (5)'] },
      { title: "SLEEVE", options: ['Half Sleeve (15)', 'Full Sleeve (10)', 'Sleeveless (5)'] },
      { title: "PRINT METHOD", options: ['Sublimation (25)', 'Screen Print (5)'] },
      { title: "PERSONALISATION", options: ['Name & Number (20)', 'Logo Only (10)'] },
    ],
    'polos': [
      { title: "FABRIC", options: ['Pique Cotton (20)', 'Matty (15)', 'Dry-fit (10)'] },
      { title: "GSM BAND", options: ['200 GSM (15)', '220 GSM (20)', '240 GSM (10)'] },
      { title: "PLACKET", options: ['2 Button (25)', '3 Button (15)', 'Zip (5)'] },
      { title: "SLEEVE", options: ['Half Sleeve (30)', 'Full Sleeve (15)'] },
      { title: "FIT", options: ['Regular (25)', 'Slim Fit (20)'] },
      { title: "BRANDING SUITABILITY", options: ['Embroidery (30)', 'Print (15)'] },
    ],
    't-shirts': [
      { title: "FABRIC", options: ['100% Cotton (25)', 'Cotton Blend (15)', 'Polyester (10)'] },
      { title: "GSM BAND", options: ['160 GSM (15)', '180 GSM (20)', '200 GSM (10)'] },
      { title: "NECK", options: ['Round Neck (30)', 'V-Neck (15)'] },
      { title: "SLEEVE", options: ['Half Sleeve (30)', 'Full Sleeve (15)'] },
      { title: "FIT", options: ['Regular (25)', 'Slim Fit (15)', 'Oversized (10)'] },
      { title: "USE CASE", options: ['Casual (25)', 'Activewear (15)', 'Corporate (10)'] },
    ],
    'hoodies-sweatshirts-jackets': [
      { title: "STYLE", options: ['Pullover (15)', 'Zip-up (15)'] },
      { title: "FABRIC", options: ['Fleece (20)', 'French Terry (10)', 'Cotton (5)'] },
      { title: "GSM BAND", options: ['280 GSM (10)', '300 GSM (15)', '320 GSM (5)'] },
      { title: "FIT", options: ['Regular (20)', 'Oversized (10)'] },
      { title: "SEASON", options: ['Winter (25)', 'All Season (5)'] },
    ],
    'accessories': [
      { title: "TYPE", options: ['Backpack (15)', 'Duffle Bag (10)', 'Laptop Sleeve (5)', 'Cap (15)', 'Watch (8)'] },
      { title: "CAPACITY (LITRES)", options: ['10-20L (10)', '20-30L (15)', '30L+ (5)'] },
      { title: "LAPTOP FIT", options: ['Up to 14" (10)', 'Up to 15.6" (15)'] },
      { title: "MATERIAL", options: ['Polyester (15)', 'Nylon (10)', 'Canvas (5)', 'Leather (8)'] },
    ],
    'stationery-gifting-drinkware': [
      { title: "PRODUCT TYPE", options: ['Notebooks (15)', 'Pens (10)', 'Mugs (10)', 'Bottles (5)'] },
      { title: "MATERIAL", options: ['Paper (15)', 'Metal (10)', 'Plastic (10)'] },
      { title: "CAPACITY (DRINKWARE)", options: ['300ml (10)', '500ml (10)', '750ml (5)'] },
      { title: "INSULATED", options: ['Yes (10)', 'No (15)'] },
      { title: "BRANDING METHOD", options: ['UV Print (10)', 'Laser Engraving (10)', 'Screen Print (5)'] },
    ],
    'trenz': [
      { title: "GENDER", options: ['Men (15)', 'Women (15)', 'Kids (10)', 'Unisex (10)'] },
      { title: "PRODUCT TYPE", options: ['Oversized T-Shirts (20)', 'Classic T-Shirts (15)', 'Shirts (10)'] },
      { title: "FIT", options: ['Oversized (20)', 'Relaxed (15)', 'Regular (10)'] },
      { title: "THEME/STYLE", options: ['Festive (15)', 'Streetwear (15)', 'Casual (10)'] },
    ]
  };

  const currentCategoryFilters = categorySlug ? categoryFilterSpec[categorySlug] || [] : [];

  const bannerConfig: Record<string, { title: string, image: string }> = {
    'custom-sports-jerseys': { title: "Custom Jerseys", image: "/categories/custom_sports.jpg" },
    'polos': { title: "Premium Polos", image: "/categories/premium_polos.jpg" },
    't-shirts': { title: "Custom T-Shirts", image: "/categories/custom_tshirts.jpg" },
    'hoodies-sweatshirts-jackets': { title: "Hoodies & Jackets", image: "/categories/hoodies_sweatshirts.jpg" },
    'accessories': { title: "Accessories", image: "/categories/accessories_group.jpg" },
    'stationery-gifting-drinkware': { title: "Corporate Gifting", image: "/categories/corporate_gifting.jpg" },
    'trenz': { title: "Trenz Collection", image: "/categories/trenz_oversized_festive.jpg" }
  };
  
  const currentBanner = categorySlug ? (bannerConfig[categorySlug] || { title: "The Shop", image: "/process/step1.jpg" }) : { title: "The Shop", image: "/process/step1.jpg" };


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
      if (categorySlug && product.category !== categorySlug) return false;
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
            <img src={currentBanner.image} alt={currentBanner.title} className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 hover:scale-100 transition-transform duration-1000" />
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
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-display font-black tracking-tight drop-shadow-2xl text-white leading-none">{currentBanner.title}</h1>
          </div>
        </div>

        {/* Overlapping Content Section (Matches Hero Style) */}
        <div className="relative z-40 bg-white w-full rounded-t-[40px] md:rounded-t-[60px] -mt-12 md:-mt-16 pt-10 md:pt-16 pb-16 md:pb-24 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8">

            {/* Top Bar: Breadcrumb & Toolbar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-4 border-b border-gray-100 pb-8">
              
              {/* Breadcrumb & Back Button */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => router.back()} 
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shrink-0 cursor-pointer group"
                >
                  <ArrowLeft className="w-4 h-4 text-gray-600 transition-transform group-hover:-translate-x-0.5" />
                </button>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <a href="/" className="hover:text-black transition-colors cursor-pointer">Home</a>
                  <span>/</span>
                  <span className="text-black">{currentBanner.title}</span>
                </div>
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
                {/* Category Specific Filters */}
                {currentCategoryFilters.length > 0 && currentCategoryFilters.map(filter => (
                  <div key={filter.title} className="mb-8 border-b border-gray-100 pb-4">
                    <button 
                      onClick={() => toggleFilterSection(filter.title)}
                      className="w-full flex items-center justify-between text-[11px] font-bold text-yoode-onyx uppercase tracking-wider mb-4"
                    >
                      {filter.title}
                      <span className="text-gray-400 transition-transform duration-300">
                        {expandedFilters.includes(filter.title) ? "-" : "+"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {expandedFilters.includes(filter.title) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 pb-2">
                            {filter.options.map(option => {
                              const optionName = option.split(' (')[0];
                              const count = option.split('(')[1];
                              const isSelected = (selectedSpecificFilters[filter.title] || []).includes(optionName);
                              return (
                                <label key={option} className="flex items-center group cursor-pointer" onClick={(e) => { e.preventDefault(); toggleSpecificFilter(filter.title, optionName); }}>
                                  <div className={`w-3.5 h-3.5 mr-3 rounded-sm border flex items-center justify-center transition-colors ${isSelected ? 'bg-yoode-onyx border-yoode-onyx text-white' : 'border-gray-300 group-hover:border-yoode-onyx'}`}>
                                    {isSelected && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
                                  </div>
                                  <div className="flex-1 flex items-center justify-between">
                                    <span className={`text-[13px] transition-colors ${isSelected ? 'text-yoode-onyx font-semibold' : 'text-gray-500 group-hover:text-yoode-onyx'}`}>{optionName}</span>
                                    <span className={`text-[11px] transition-colors ${isSelected ? 'text-yoode-onyx font-semibold' : 'text-gray-400 group-hover:text-yoode-onyx'}`}>({count.replace(')', '')})</span>
                                  </div>
                                </label>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}



                {/* Price Filter (Range) */}
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
                            <div className="flex-1 bg-gray-50 rounded-lg px-3 py-2 text-[13px] font-medium text-center">₹ 0</div>
                            <span className="text-gray-400">-</span>
                            <div className="flex-1 bg-gray-50 rounded-lg px-3 py-2 text-[13px] font-medium text-center">₹ 8999</div>
                          </div>
                          <label className="flex items-center gap-2 mt-4 cursor-pointer group">
                            <div className="w-3.5 h-3.5 rounded-sm border border-gray-300 group-hover:border-yoode-onyx flex items-center justify-center transition-colors"></div>
                            <span className="text-[12px] text-gray-500 group-hover:text-yoode-onyx transition-colors">Show per piece at 50+ qty</span>
                          </label>
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
              


            </aside>

            {/* Main Content */}
            <div className="flex-1">
              


              {/* Product Grid */}
              <div className={`grid gap-4 md:gap-6 ${isSidebarVisible ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
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
