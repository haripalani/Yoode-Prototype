"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  Ruler, 
  X, 
  Check, 
  MapPin, 
  Search, 
  Sparkles,
  Maximize2,
  Plus,
  Shirt,
  Truck,
  Tag,
  CheckCircle2,
  ArrowRight,
  UploadCloud,
  Upload,
  Clock,
  Send,
  Phone,
  Copy,
  Minus
} from "lucide-react";
import { RAINS_JACKET_DATA, ColorVariant } from "@/data/rainsProductData";
import YoodeKitStudioModal from "./YoodeKitStudioModal";

export interface RainsProductHeroProps {
  selectedColor?: ColorVariant;
  onColorChange?: (color: ColorVariant) => void;
}

export default function RainsProductHero({
  selectedColor: controlledColor,
  onColorChange: controlledOnColorChange
}: RainsProductHeroProps = {}) {
  const [internalColor, setInternalColor] = useState<ColorVariant>(RAINS_JACKET_DATA.colors[0]);
  const selectedColor = controlledColor || internalColor;
  const [selectedSize, setSelectedSize] = useState<string>("XS");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Dynamic slug resolver for Breadcrumbs and Titles
  const params = useParams();
  const slug = (params?.slug as string) || "performance-zipper-polo";

  const getBreadcrumbTitle = () => {
    if (slug === "womens-polo") return "Women's Polo";
    if (slug === "womens-performance-polo") return "Women's Performance Polo";
    if (slug === "polo-tshirt") return "Performance Polo";
    if (slug === "performance-zipper-polo") return "Performance Zipper Polo";
    return RAINS_JACKET_DATA.title;
  };

  const getProductTitle = () => {
    if (slug === "womens-polo") return "Women's Performance Polo";
    if (slug === "womens-performance-polo") return "Women's Performance Polo";
    return RAINS_JACKET_DATA.title;
  };
  const [isColorDropdownOpen, setIsColorDropdownOpen] = useState<boolean>(false);
  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState<boolean>(false);
  const colorDropdownRef = useRef<HTMLDivElement>(null);
  const sizeDropdownRef = useRef<HTMLDivElement>(null);

  // Interactive Modals / Drawers
  const [isKitStudioOpen, setIsKitStudioOpen] = useState<boolean>(false);
  const [isHoveringTrack, setIsHoveringTrack] = useState<boolean>(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);
  const [isStoreDrawerOpen, setIsStoreDrawerOpen] = useState<boolean>(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [sizeUnit, setSizeUnit] = useState<"cm" | "in">("cm");
  const [storeSearchQuery, setStoreSearchQuery] = useState<string>("");
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  // Quantity counter state
  const [quantity, setQuantity] = useState<number>(1);

  // Coupon & Promo state & Side Overlay Drawer
  const [couponInput, setCouponInput] = useState<string>("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponStatus, setCouponStatus] = useState<"default" | "applied" | "invalid">("default");
  const [isCouponsDrawerOpen, setIsCouponsDrawerOpen] = useState<boolean>(false);
  const [copiedCouponCode, setCopiedCouponCode] = useState<string | null>(null);

  // Available Coupons List for Side Overlay
  const availableCoupons = [
    {
      code: "JERSEY15",
      discount: "15% OFF",
      title: "15+ Jerseys Team Wholesale Pack",
      category: "Auto-Applies at 15+",
      description: "Get 15% automatic wholesale discount when ordering 15 or more jerseys for your squad or company.",
      minItems: 15,
      highlight: true
    },
    {
      code: "YOODE10",
      discount: "10% OFF",
      title: "First Order Welcome Offer",
      category: "New Customers",
      description: "Flat 10% instant discount on your first custom apparel order. Includes free digital proof mockup.",
      minOrder: 480
    },
    {
      code: "BULK25",
      discount: "20% OFF",
      title: "Corporate Squad Tier (25+ Polos)",
      category: "Corporate Tier",
      description: "Save 20% on corporate merchandise orders of 25+ polos. Includes complimentary logo digitization.",
      minItems: 25
    },
    {
      code: "FREESHIP",
      discount: "FREE DELIVERY",
      title: "Pan-India Express Delivery",
      category: "All India",
      description: "100% free door-to-door express delivery with transit insurance across all 19,000+ Indian pin codes.",
      minOrder: 999
    }
  ];

  // Auto-apply JERSEY15 when quantity reaches 15 or more
  useEffect(() => {
    if (quantity >= 15 && appliedCoupon !== "JERSEY15") {
      setAppliedCoupon("JERSEY15");
      setCouponStatus("applied");
    } else if (quantity < 15 && appliedCoupon === "JERSEY15") {
      setAppliedCoupon(null);
      setCouponStatus("default");
    }
  }, [quantity, appliedCoupon]);

  // Mockup, Bulk Quote & Rush Order Modals
  const [isMockupModalOpen, setIsMockupModalOpen] = useState<boolean>(false);
  const [mockupSubmitted, setMockupSubmitted] = useState<boolean>(false);
  const [mockupName, setMockupName] = useState<string>("");
  const [mockupPhone, setMockupPhone] = useState<string>("");
  const [mockupOrg, setMockupOrg] = useState<string>("");
  const [mockupNotes, setMockupNotes] = useState<string>("");

  const [isBulkModalOpen, setIsBulkModalOpen] = useState<boolean>(false);
  const [bulkQty, setBulkQty] = useState<number>(25);
  const [bulkSubmitted, setBulkSubmitted] = useState<boolean>(false);

  const handleApplyCoupon = (overrideCode?: string) => {
    const raw = (overrideCode || couponInput).trim().toUpperCase();
    if (!raw) return;
    if (raw.includes("15") || raw === "JERSEY15" || raw === "TEAM15" || raw === "YOODE15") {
      setAppliedCoupon("JERSEY15");
      setCouponInput("JERSEY15");
      setCouponStatus("applied");
      if (quantity < 15) {
        setQuantity(15);
      }
    } else if (raw === "YOODE10" || raw.includes("10")) {
      setAppliedCoupon("YOODE10");
      setCouponInput("YOODE10");
      setCouponStatus("applied");
    } else if (raw === "BULK25" || raw.includes("25")) {
      setAppliedCoupon("BULK25");
      setCouponInput("BULK25");
      setCouponStatus("applied");
      if (quantity < 25) {
        setQuantity(25);
      }
    } else if (raw === "FREESHIP") {
      setAppliedCoupon("FREESHIP");
      setCouponInput("FREESHIP");
      setCouponStatus("applied");
    } else {
      setCouponStatus("invalid");
    }
  };

  // Close dropdowns on outside click & handle ESC key for all modals
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (colorDropdownRef.current && !colorDropdownRef.current.contains(e.target as Node)) {
        setIsColorDropdownOpen(false);
      }
      if (sizeDropdownRef.current && !sizeDropdownRef.current.contains(e.target as Node)) {
        setIsSizeDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
        setIsSizeGuideOpen(false);
        setIsStoreDrawerOpen(false);
        setIsKitStudioOpen(false);
        setIsMockupModalOpen(false);
        setIsBulkModalOpen(false);
        setIsCouponsDrawerOpen(false);
        setIsColorDropdownOpen(false);
        setIsSizeDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Countdown timer for shipping urgency
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 8,
    minutes: 38,
    seconds: 42
  });

  // Sticky Bar visibility
  const [showStickyBar, setShowStickyBar] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Custom Zoom Cursor state
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Live timer tick
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 11, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sticky bottom/top bar on scroll past hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        // When hero bottom approaches viewport top
        if (rect.bottom < 300) {
          setShowStickyBar(true);
        } else {
          setShowStickyBar(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);
  const isResettingScroll = useRef(false);

  // Triplicate images for infinite continuous looping
  const infiniteImages = [
    ...selectedColor.images,
    ...selectedColor.images,
    ...selectedColor.images
  ];

  // Set initial scroll position to middle set on mount or color change
  useEffect(() => {
    const initScroll = () => {
      if (trackRef.current) {
        const singleSetWidth = trackRef.current.scrollWidth / 3;
        if (singleSetWidth > 0) {
          trackRef.current.scrollLeft = singleSetWidth;
        }
      }
    };
    initScroll();
    const timer = setTimeout(initScroll, 60);
    return () => clearTimeout(timer);
  }, [selectedColor]);

  // Continuous smooth infinite auto-scroll (does NOT stop when hovering over product card)
  useEffect(() => {
    let animationFrameId: number;
    const scrollSpeed = 0.8; // Pixels per frame

    const step = () => {
      if (!isDraggingRef.current && trackRef.current) {
        const { scrollLeft, scrollWidth } = trackRef.current;
        const singleSetWidth = scrollWidth / 3;
        if (singleSetWidth > 0 && scrollLeft >= singleSetWidth * 2) {
          trackRef.current.scrollLeft -= singleSetWidth;
        } else {
          trackRef.current.scrollLeft += scrollSpeed;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // When color changes, reset image index and ensure size availability
  const handleColorChange = (color: ColorVariant) => {
    if (controlledOnColorChange) {
      controlledOnColorChange(color);
    } else {
      setInternalColor(color);
    }
    setCurrentImageIndex(0);
    const currSizeObj = color.sizes.find(s => s.size === selectedSize);
    if (!currSizeObj || !currSizeObj.available) {
      const firstAvail = color.sizes.find(s => s.available);
      if (firstAvail) setSelectedSize(firstAvail.size);
    }
  };

  const currentSizeObj = selectedColor.sizes.find(s => s.size === selectedSize);
  const isCurrentSizeAvailable = currentSizeObj ? currentSizeObj.available : true;

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedColor.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedColor.images.length) % selectedColor.images.length);
  };

  // Horizontal infinite track controls
  const handleScrollNext = () => {
    if (trackRef.current) {
      const slide = trackRef.current.querySelector('[data-gallery-slide="0"]') as HTMLElement;
      const slideWidth = slide ? slide.offsetWidth : 480;
      trackRef.current.scrollBy({ left: slideWidth, behavior: "smooth" });
    }
  };

  const handleScrollPrev = () => {
    if (trackRef.current) {
      const slide = trackRef.current.querySelector('[data-gallery-slide="0"]') as HTMLElement;
      const slideWidth = slide ? slide.offsetWidth : 480;
      trackRef.current.scrollBy({ left: -slideWidth, behavior: "smooth" });
    }
  };

  const handleTrackScroll = () => {
    if (!trackRef.current || isResettingScroll.current) return;
    const { scrollLeft, scrollWidth } = trackRef.current;
    const singleSetWidth = scrollWidth / 3;
    if (singleSetWidth <= 0) return;

    // Infinite wrapping:
    // If scrolled into the 3rd set, seamlessly jump back by singleSetWidth
    if (scrollLeft >= singleSetWidth * 2) {
      isResettingScroll.current = true;
      trackRef.current.style.scrollBehavior = "auto";
      trackRef.current.scrollLeft -= singleSetWidth;
      setTimeout(() => { 
        if (trackRef.current) trackRef.current.style.scrollBehavior = "";
        isResettingScroll.current = false; 
      }, 40);
      return;
    }
    // If scrolled into the 1st set, seamlessly jump forward by singleSetWidth
    if (scrollLeft <= singleSetWidth * 0.15) {
      isResettingScroll.current = true;
      trackRef.current.style.scrollBehavior = "auto";
      trackRef.current.scrollLeft += singleSetWidth;
      setTimeout(() => { 
        if (trackRef.current) trackRef.current.style.scrollBehavior = "";
        isResettingScroll.current = false; 
      }, 40);
      return;
    }

    const slide = trackRef.current.querySelector('[data-gallery-slide="0"]') as HTMLElement;
    const slideWidth = slide ? slide.offsetWidth : singleSetWidth / selectedColor.images.length;
    if (slideWidth > 0) {
      const relativeOffset = scrollLeft - singleSetWidth;
      const rawIdx = Math.round(relativeOffset / slideWidth);
      const activeIdx = ((rawIdx % selectedColor.images.length) + selectedColor.images.length) % selectedColor.images.length;
      setCurrentImageIndex(activeIdx);
    }
  };

  const scrollToSlide = (idx: number) => {
    if (trackRef.current) {
      const slide = trackRef.current.querySelector('[data-gallery-slide="0"]') as HTMLElement;
      const slideWidth = slide ? slide.offsetWidth : 480;
      const singleSetWidth = slideWidth * selectedColor.images.length;
      trackRef.current.scrollTo({ left: singleSetWidth + idx * slideWidth, behavior: "smooth" });
    }
  };

  // Drag to scroll handlers for desktop
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX;
    scrollLeftRef.current = trackRef.current.scrollLeft;
  };

  const handleMouseMoveTrack = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMouseMove(e);
    if (!isDraggingRef.current || !trackRef.current) return;
    const x = e.pageX;
    const walk = (x - startXRef.current);
    if (Math.abs(walk) > 6) {
      hasMovedRef.current = true;
    }
    trackRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseLeaveTrack = () => {
    isDraggingRef.current = false;
    setIsHoveringImage(false);
    setIsHoveringTrack(false);
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2500);
  };

  // Track cursor position inside gallery
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (galleryRef.current) {
      const rect = galleryRef.current.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const filteredStores = RAINS_JACKET_DATA.stores.filter(store => 
    store.city.toLowerCase().includes(storeSearchQuery.toLowerCase()) ||
    store.address.toLowerCase().includes(storeSearchQuery.toLowerCase())
  );

  return (
    <div ref={heroRef} className="relative w-full bg-[#f4f4f4] text-black font-sans selection:bg-black selection:text-white">
      {/* =========================================================================
          HERO MAIN VIEWPORT CONTAINER (100vh on desktop with header offset)
      ========================================================================= */}
      <div className="relative w-full lg:h-[calc(100vh-88px)] flex flex-col lg:block overflow-hidden">
        
        {/* -----------------------------------------------------------------------
            LEFT & CENTER: INFINITE HORIZONTALLY TILED PRODUCT IMAGE GALLERY
        ------------------------------------------------------------------------ */}
        <div 
          ref={galleryRef}
          className="relative w-full h-[55vh] sm:h-[65vh] lg:h-full bg-[#EAEAEA] overflow-hidden"
        >
          {/* Custom Studio Cursor Badge for Desktop */}
          {isHoveringImage && (
            <motion.div 
              className="hidden lg:flex pointer-events-none absolute z-40 w-16 h-16 -ml-8 -mt-8 rounded-full bg-black/95 text-white backdrop-blur-md border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.35)] flex-col items-center justify-center gap-0.5"
              style={{ left: cursorPos.x, top: cursorPos.y }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.15 }}
            >
              <div className="relative flex items-center justify-center">
                <Shirt size={17} className="text-white" strokeWidth={2.2} />
                <span className="absolute -top-1 -right-1.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <span className="text-[9px] font-black tracking-widest uppercase text-white/90">STUDIO</span>
            </motion.div>
          )}

          {/* Infinite Horizontal Tiled Track */}
          <div
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMoveTrack}
            onMouseUp={handleMouseUp}
            onMouseEnter={() => {
              setIsHoveringImage(true);
              setIsHoveringTrack(true);
            }}
            onMouseLeave={handleMouseLeaveTrack}
            onScroll={handleTrackScroll}
            className="w-full h-full flex flex-row items-stretch overflow-x-auto overflow-y-hidden hide-scrollbar select-none cursor-grab active:cursor-grabbing gap-0 bg-[#EAEAEA]"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {infiniteImages.map((imgUrl, idx) => {
              const originalIndex = idx % selectedColor.images.length;
              return (
                <div
                  key={`${selectedColor.id}-slide-${idx}`}
                  data-gallery-slide={idx}
                  onClick={() => {
                    if (hasMovedRef.current) return;
                    setIsKitStudioOpen(true);
                  }}
                  className="h-full flex-shrink-0 relative p-0 m-0 cursor-pointer overflow-hidden select-none"
                  style={{
                    height: "100%"
                  }}
                >
                  <img
                    src={imgUrl}
                    alt={`Yoode Performance Polo in ${selectedColor.name} - View ${originalIndex + 1}`}
                    className="h-full w-auto max-h-full max-w-none object-cover object-center select-none pointer-events-none block"
                    loading="eager"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>

          {/* Mobile / Tablet Kit Studio Floating Quick Trigger */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsKitStudioOpen(true);
            }}
            className="lg:hidden absolute top-4 left-4 z-40 px-3.5 py-1.5 rounded-full bg-black/90 text-white backdrop-blur-md shadow-lg border border-white/20 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer active:scale-95 transition-all"
          >
            <Shirt size={13} className="text-white" />
            <span>Kit Studio</span>
          </button>

          {/* Bottom Left AI Usage Pill & Kit Studio / Expand Button */}
          <div className="absolute bottom-4 left-4 z-40 flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsKitStudioOpen(true);
              }}
              className="hidden lg:flex px-3.5 py-1.5 rounded-full bg-black/90 hover:bg-black text-white backdrop-blur-md text-xs font-bold uppercase tracking-wider border border-white/20 shadow-md transition-all items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
            >
              <Shirt size={13} className="text-white" />
              <span>Kit Studio</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsAiModalOpen(true);
              }}
              className="px-3 py-1.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-md text-xs font-semibold text-black tracking-wide border border-black/5 shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles size={13} className="text-black" />
              <span>AI usage</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(true);
              }}
              className="p-1.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-md text-black border border-black/5 shadow-sm transition-all cursor-pointer"
              title="Fullscreen Zoom"
            >
              <Maximize2 size={14} />
            </button>
          </div>

          {/* Carousel Indicator Bar (Centered in the middle of the page) */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10 shadow-lg">
            {selectedColor.images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToSlide(idx);
                }}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentImageIndex 
                    ? "w-6 h-1.5 bg-white shadow-sm" 
                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            RIGHT: FLOATING GLASSMORPHISM PURCHASE PANEL (Vertically Centered in 100vh)
        ------------------------------------------------------------------------ */}
        <div className="w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-6 xl:right-10 lg:w-[370px] xl:w-[400px] z-30 pointer-events-auto p-4 sm:p-6 lg:p-0">
          <div className="w-full bg-[#f6f6f6]/94 backdrop-blur-2xl border border-black/8 rounded-2xl p-4 sm:p-5 xl:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] flex flex-col gap-3 xl:gap-3.5 overflow-y-auto max-h-[calc(100vh-110px)] hide-scrollbar">
            
            {/* Breadcrumb (Mobile/Desktop) */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/category" className="hover:text-black transition-colors">Clothing</Link>
              <span className="text-gray-300">/</span>
              <Link href="/category" className="hover:text-black transition-colors">Polos</Link>
              <span className="text-gray-300">/</span>
              <span className="text-black font-semibold">{getBreadcrumbTitle()}</span>
            </nav>

            {/* Title Row (Full width, bold, prominent) */}
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black">
              {getProductTitle()}
            </h1>

            {/* Tagline */}
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              {RAINS_JACKET_DATA.shortDescription}
            </p>

            {/* Rating Stars & Price Row (Parallel to Ratings with Rupees Sign ₹) */}
            <div className="flex items-center justify-between gap-3">
              {/* Left: Star rating & count */}
              <div className="flex items-center gap-2 text-xs font-semibold text-black">
                <div className="flex items-center text-black">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={14} 
                      fill="currentColor" 
                      stroke="none" 
                      className={star === 5 ? "opacity-80" : ""} 
                    />
                  ))}
                </div>
                <span>{RAINS_JACKET_DATA.rating}</span>
                <span className="text-gray-400 font-normal">({RAINS_JACKET_DATA.ratingCount})</span>
              </div>

              {/* Right: Price Parallel to Ratings with Rupees Sign ₹ */}
              <div className="text-xl sm:text-2xl font-black tracking-tight text-black whitespace-nowrap">
                ₹{selectedColor.price || 480}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-black/10 my-0.5" />

            {/* Color & Size Dropdowns in the Same Row with Unified Height (h-11) */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {/* Color Dropdown */}
              <div ref={colorDropdownRef} className="relative flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs h-5">
                  <label className="font-semibold text-black">Color</label>
                  <span className="text-[10px] text-gray-500 font-medium">
                    {RAINS_JACKET_DATA.colors.length} options
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsColorDropdownOpen((prev) => !prev);
                    setIsSizeDropdownOpen(false);
                  }}
                  className="w-full h-11 bg-white border border-black/15 hover:border-black rounded-xl px-3 text-xs font-semibold text-black flex items-center justify-between transition-colors shadow-sm focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-5 h-5 rounded-md overflow-hidden bg-gray-100 border border-black/10 shrink-0">
                      <img
                        src={selectedColor.swatchImage}
                        alt={selectedColor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-bold truncate text-xs">{selectedColor.name}</span>
                  </div>
                  <ChevronDown 
                    size={14} 
                    className={`text-gray-500 shrink-0 transition-transform duration-200 ${isColorDropdownOpen ? "rotate-180" : ""}`} 
                  />
                </button>

                <AnimatePresence>
                  {isColorDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 w-[220px] sm:w-[240px] mt-1.5 z-50 bg-white/98 backdrop-blur-xl border border-black/10 rounded-xl shadow-xl max-h-60 overflow-y-auto py-1 divide-y divide-black/5 hide-scrollbar"
                    >
                      {RAINS_JACKET_DATA.colors.map((color) => {
                        const isSelected = selectedColor.id === color.id;
                        return (
                          <button
                            key={color.id}
                            type="button"
                            onClick={() => {
                              handleColorChange(color);
                              setIsColorDropdownOpen(false);
                            }}
                            className={`w-full px-3 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                              isSelected ? "bg-black/5 font-bold" : "hover:bg-neutral-50 font-medium"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-md overflow-hidden bg-gray-100 border border-black/10 shrink-0">
                                <img
                                  src={color.swatchImage}
                                  alt={color.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <span className="text-black font-semibold">{color.name}</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <span className="text-gray-500 text-[10px]">{color.priceFormatted}</span>
                              {isSelected && <Check size={13} className="text-black" strokeWidth={2.5} />}
                            </div>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Size Dropdown */}
              <div ref={sizeDropdownRef} className="relative flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs h-5">
                  <label className="font-semibold text-black">Size</label>
                  <button
                    type="button"
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="font-medium text-black underline underline-offset-4 hover:opacity-70 transition-opacity flex items-center gap-1 cursor-pointer text-[10px] sm:text-[11px]"
                  >
                    <Ruler size={11} />
                    <span>Guide</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsSizeDropdownOpen((prev) => !prev);
                    setIsColorDropdownOpen(false);
                  }}
                  className="w-full h-11 bg-white border border-black/15 hover:border-black rounded-xl px-3 text-xs font-semibold text-black flex items-center justify-between transition-colors shadow-sm focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="text-gray-500 font-normal text-xs">Size:</span>
                    <span className="font-bold text-xs truncate">{selectedSize}</span>
                    {!isCurrentSizeAvailable && (
                      <span className="text-[9px] text-red-600 font-semibold bg-red-50 px-1 py-0.5 rounded">
                        Out
                      </span>
                    )}
                  </div>
                  <ChevronDown 
                    size={14} 
                    className={`text-gray-500 shrink-0 transition-transform duration-200 ${isSizeDropdownOpen ? "rotate-180" : ""}`} 
                  />
                </button>

                <AnimatePresence>
                  {isSizeDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 w-[190px] sm:w-[210px] mt-1.5 z-50 bg-white/98 backdrop-blur-xl border border-black/10 rounded-xl shadow-xl max-h-56 overflow-y-auto py-1 divide-y divide-black/5 hide-scrollbar"
                    >
                      {selectedColor.sizes.map((s) => {
                        const isSelected = selectedSize === s.size;
                        const isAvail = s.available;

                        return (
                          <button
                            key={s.size}
                            type="button"
                            onClick={() => {
                              setSelectedSize(s.size);
                              setIsSizeDropdownOpen(false);
                            }}
                            className={`w-full px-3 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                              isSelected ? "bg-black/5 font-bold" : "hover:bg-neutral-50 font-medium"
                            }`}
                          >
                            <div className="flex items-center gap-1.5">
                              <span className={isAvail ? "text-black" : "text-gray-400 line-through"}>
                                {s.size}
                              </span>
                              {!isAvail && (
                                <span className="text-[9px] text-gray-500 font-normal italic">
                                  (Out)
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-1.5">
                              {isAvail ? (
                                <span className="text-emerald-700 font-semibold text-[10px]">In Stock</span>
                              ) : (
                                <span className="text-gray-400 text-[10px]">Sold out</span>
                              )}
                              {isSelected && <Check size={13} className="text-black" strokeWidth={2.5} />}
                            </div>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Row: Quick Actions (Free Mockup & Bulk Quote) - Refined & unobtrusive */}
            <div className="grid grid-cols-2 gap-2 pt-0.5">
              <button
                type="button"
                onClick={() => setIsMockupModalOpen(true)}
                className="h-9 px-3 bg-white hover:bg-neutral-50 text-neutral-800 font-bold text-[11px] rounded-lg border border-black/15 hover:border-black transition-all flex items-center justify-center text-center cursor-pointer active:scale-[0.99] shadow-2xs"
              >
                Free Design Mockup
              </button>

              <button
                type="button"
                onClick={() => setIsBulkModalOpen(true)}
                className="h-9 px-3 bg-blue-50/70 hover:bg-blue-100/80 text-blue-700 font-bold text-[11px] rounded-lg border border-blue-200/80 transition-all flex items-center justify-center text-center cursor-pointer active:scale-[0.99] shadow-2xs"
              >
                Bulk Quote (25+ units)
              </button>
            </div>

            {/* Row: Offers & Coupons Hyperlink Bar (Strictly Single-line, No Wrapping) */}
            <button
              type="button"
              onClick={() => setIsCouponsDrawerOpen(true)}
              className="w-full flex items-center justify-between px-3 py-2 bg-neutral-50 hover:bg-neutral-100/90 border border-black/10 hover:border-black/25 rounded-xl transition-all cursor-pointer group text-left shadow-2xs"
            >
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-6 h-6 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                  <Tag size={12} strokeWidth={2.5} />
                </div>
                <span className="text-xs font-bold text-black whitespace-nowrap">Coupons &amp; Offers</span>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                {appliedCoupon ? (
                  <span className="text-[11px] font-black text-emerald-800 bg-emerald-100/90 border border-emerald-300 px-2 py-0.5 rounded-full flex items-center gap-1 whitespace-nowrap">
                    <Check size={11} strokeWidth={3} />
                    {appliedCoupon} APPLIED
                  </span>
                ) : (
                  <span className="text-[11px] font-extrabold text-blue-700 bg-blue-100/90 border border-blue-200/80 px-2 py-0.5 rounded-full whitespace-nowrap group-hover:bg-blue-200/80 transition-colors">
                    4 available &rarr;
                  </span>
                )}
              </div>
            </button>

            {/* Custom Kit Studio 3D Customizer Trigger */}
            <button
              type="button"
              onClick={() => setIsKitStudioOpen(true)}
              className="w-full h-11 px-5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-200 border-2 border-black/15 hover:border-black bg-white hover:bg-black hover:text-white text-black shadow-xs flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.99]"
            >
              <Shirt size={15} className="text-black group-hover:text-white transition-colors" />
              <span>Customize in 3D Kit Studio</span>
              <span className="text-[9px] bg-emerald-500 text-white font-extrabold px-1.5 py-0.5 rounded-full ml-1">Live</span>
            </button>

            {/* Bottom Primary Action Row: Compact Quantity Stepper + Add to Cart with Live Price */}
            {(() => {
              const unitPrice = selectedColor.price || 480;
              const subtotal = unitPrice * quantity;
              let discountRate = 0;
              if (quantity >= 25 && appliedCoupon === "BULK25") {
                discountRate = 0.20;
              } else if (quantity >= 15 || (appliedCoupon === "JERSEY15" && quantity >= 15)) {
                discountRate = 0.15;
              } else if (appliedCoupon === "YOODE10") {
                discountRate = 0.10;
              }
              const finalPrice = Math.round(subtotal * (1 - discountRate));

              return (
                <div className="flex flex-col gap-1.5 pt-0.5">
                  <div className="flex items-center gap-2.5">
                    {/* Compact Quantity Stepper */}
                    <div className="flex items-center bg-white border-2 border-black/15 hover:border-black/30 rounded-xl h-12 px-1 shrink-0 shadow-xs transition-colors">
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        disabled={quantity <= 1}
                        aria-label="Decrease quantity"
                        className="w-7 h-7 rounded-lg hover:bg-neutral-100 flex items-center justify-center font-bold text-base text-black disabled:opacity-20 disabled:cursor-not-allowed transition-colors cursor-pointer active:scale-95"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) => {
                          const val = parseInt(e.target.value, 10);
                          setQuantity(isNaN(val) || val < 1 ? 1 : val);
                        }}
                        className="w-7 text-center font-black text-sm text-black border-none focus:outline-none p-0 bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => q + 1)}
                        aria-label="Increase quantity"
                        className="w-7 h-7 rounded-lg hover:bg-neutral-100 flex items-center justify-center font-bold text-base text-black transition-colors cursor-pointer active:scale-95"
                      >
                        +
                      </button>
                    </div>

                    {/* Add to Cart Button (Single Line - No Wrapping) */}
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      disabled={!isCurrentSizeAvailable}
                      className={`flex-1 h-12 px-3 rounded-xl font-bold tracking-wider uppercase transition-all duration-200 shadow-md flex items-center justify-center cursor-pointer whitespace-nowrap ${
                        isAddedToCart
                          ? "bg-emerald-600 text-white hover:bg-emerald-700"
                          : isCurrentSizeAvailable
                          ? "bg-black hover:bg-neutral-800 text-white hover:shadow-lg active:scale-[0.99]"
                          : "bg-gray-300 text-gray-600 cursor-not-allowed"
                      }`}
                    >
                      {isAddedToCart ? (
                        <div className="flex items-center gap-1.5 text-xs">
                          <Check size={16} strokeWidth={2.5} />
                          <span>Added ({quantity})</span>
                        </div>
                      ) : isCurrentSizeAvailable ? (
                        <div className="flex items-center justify-center gap-1.5 text-xs leading-none">
                          {discountRate > 0 && (
                            <span className="text-white/50 line-through text-[11px] font-normal">
                              ₹{subtotal.toLocaleString("en-IN")}
                            </span>
                          )}
                          <span className="font-extrabold text-xs">
                            ₹{finalPrice.toLocaleString("en-IN")}
                          </span>
                          <span className="opacity-40 text-xs">&bull;</span>
                          <span className="text-xs">Add to Cart</span>
                        </div>
                      ) : (
                        <span className="text-xs">Out of Stock</span>
                      )}
                    </button>
                  </div>

                  {/* Gentle Wholesale Tier Note */}
                  {quantity < 15 ? (
                    <div className="flex items-center justify-between text-[11px] text-gray-500 px-1 font-medium">
                      <span>Add {15 - quantity} more for automatic 15% wholesale discount</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(15)}
                        className="text-blue-600 font-bold hover:underline cursor-pointer"
                      >
                        Set 15
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-lg">
                      <Check size={11} strokeWidth={3} className="text-emerald-700 shrink-0" />
                      <span>15% Wholesale Tier Active (Saving ₹{Math.round(subtotal * 0.15).toLocaleString("en-IN")})</span>
                    </div>
                  )}
                </div>
              );
            })()}

              {/* Real-time Shipping Urgency Timer */}
              <div className="text-center text-[11px] sm:text-xs text-gray-600 font-medium">
                Order within{" "}
                <span className="font-bold text-black">
                  {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </span>{" "}
                and we'll ship your order today.
              </div>

              {/* Store Availability Trigger */}
              <button
                type="button"
                onClick={() => setIsStoreDrawerOpen(true)}
                className="self-center flex items-center gap-2 text-[11px] sm:text-xs font-bold text-black uppercase tracking-wider underline underline-offset-4 hover:opacity-75 transition-opacity pt-0.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Also available in-store</span>
              </button>

          </div>
        </div>

      </div>

      {/* =========================================================================
          STICKY SCROLL BOTTOM / TOP BAR (When scrolled past hero)
      ========================================================================= */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-black/10 py-3.5 px-6 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
              {/* Left: Navigation links */}
              <div className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-wider uppercase text-gray-600">
                <a href="#product-details" className="hover:text-black transition-colors">Description</a>
                <a href="#recommendations" className="hover:text-black transition-colors">Recommendations</a>
              </div>

              {/* Center / Right: Product preview + Add to Cart */}
              <div className="flex items-center justify-between w-full md:w-auto gap-4 ml-auto">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-11 rounded-md overflow-hidden bg-gray-100 border border-black/10 shrink-0">
                    <img
                      src={selectedColor.swatchImage}
                      alt={selectedColor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-black leading-tight">
                      {getProductTitle()} &ndash; {selectedColor.name} / {selectedSize}
                    </span>
                    <span className="text-xs font-medium text-gray-600">
                      {selectedColor.priceFormatted}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={!isCurrentSizeAvailable}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 whitespace-nowrap shadow-sm ${
                    isAddedToCart
                      ? "bg-emerald-600 text-white"
                      : isCurrentSizeAvailable
                      ? "bg-black hover:bg-neutral-800 text-white"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  {isAddedToCart ? "Added!" : "Add to Cart"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          SIZE GUIDE DRAWER
      ========================================================================= */}
      <AnimatePresence>
        {isSizeGuideOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSizeGuideOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Slide-out Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative w-full max-w-lg h-full bg-white text-black shadow-2xl flex flex-col z-10 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-black/10 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold tracking-tight">Size Guide</h2>
                  <p className="text-xs text-gray-500 font-medium">Performance Athletic Fit</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6 hide-scrollbar">
                {/* Fit Advice */}
                <div className="bg-neutral-50 border border-black/5 rounded-xl p-4 text-xs leading-relaxed text-gray-700">
                  <div className="font-bold text-black mb-1">Fit & Silhouette</div>
                  Designed with an athletic tailored drape in 220 GSM combed compact cotton. True to standard Indian and EU sizing. If you prefer an oversized streetwear look, choose one size larger.
                  <div className="mt-2 text-gray-500 italic">
                    Model is 177 cm / 5'10" and is wearing size S (38).
                  </div>
                </div>

                {/* Unit Switcher */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">Unit of measurement</span>
                  <div className="flex items-center bg-gray-100 p-0.5 rounded-full border border-gray-200">
                    <button
                      type="button"
                      onClick={() => setSizeUnit("cm")}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                        sizeUnit === "cm" ? "bg-black text-white shadow-sm" : "text-gray-600 hover:text-black"
                      }`}
                    >
                      CM
                    </button>
                    <button
                      type="button"
                      onClick={() => setSizeUnit("in")}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                        sizeUnit === "in" ? "bg-black text-white shadow-sm" : "text-gray-600 hover:text-black"
                      }`}
                    >
                      INCHES
                    </button>
                  </div>
                </div>

                {/* Size Table */}
                <div className="border border-black/10 rounded-xl overflow-hidden shadow-sm">
                  <table className="w-full text-xs text-center border-collapse">
                    <thead>
                      <tr className="bg-neutral-100 border-b border-black/10 text-gray-700">
                        <th className="py-3 px-2 font-bold text-left pl-4">Size</th>
                        <th className="py-3 px-2 font-bold">Chest</th>
                        <th className="py-3 px-2 font-bold">Hip</th>
                        <th className="py-3 px-2 font-bold">Length</th>
                        <th className="py-3 px-2 font-bold pr-4">Sleeve</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5">
                      {RAINS_JACKET_DATA.sizeGuide.map((row) => (
                        <tr 
                          key={row.size}
                          onClick={() => setSelectedSize(row.size)}
                          className={`cursor-pointer transition-colors ${
                            selectedSize === row.size ? "bg-black/5 font-bold" : "hover:bg-gray-50"
                          }`}
                        >
                          <td className="py-3 px-2 text-left pl-4 font-bold flex items-center gap-1.5">
                            {selectedSize === row.size && <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />}
                            {row.size}
                          </td>
                          <td className="py-3 px-2">{sizeUnit === "cm" ? `${row.chestCm} cm` : `${row.chestIn}"`}</td>
                          <td className="py-3 px-2">{sizeUnit === "cm" ? `${row.hipCm} cm` : `${row.hipIn}"`}</td>
                          <td className="py-3 px-2">{sizeUnit === "cm" ? `${row.lengthCm} cm` : `${row.lengthIn}"`}</td>
                          <td className="py-3 px-2 pr-4">{sizeUnit === "cm" ? `${row.sleeveCm} cm` : `${row.sleeveIn}"`}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Measuring Tips */}
                <div className="border-t border-black/10 pt-4 flex flex-col gap-2 text-xs text-gray-600">
                  <span className="font-bold text-black">How to measure:</span>
                  <ul className="list-disc pl-4 space-y-1.5 leading-relaxed">
                    <li><strong>Chest:</strong> Measure across the fullest part of the chest, under the armpits.</li>
                    <li><strong>Length:</strong> Measured from highest point of the shoulder down to the hemline.</li>
                    <li><strong>Sleeve:</strong> Measured from the center back of the neck across the shoulder down to the cuff.</li>
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-black/10 bg-neutral-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-700">
                  Selected: <strong className="text-black font-extrabold">{selectedSize}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(false)}
                  className="px-6 py-2.5 bg-black hover:bg-neutral-800 text-white rounded-full text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  Confirm Size
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          STORE AVAILABILITY DRAWER
      ========================================================================= */}
      <AnimatePresence>
        {isStoreDrawerOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsStoreDrawerOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Slide-out Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative w-full max-w-lg h-full bg-white text-black shadow-2xl flex flex-col z-10 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-black/10 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold tracking-tight">In-Store Stock</h2>
                  <p className="text-xs text-gray-500 font-medium">Performance Polo &ndash; {selectedColor.name} ({selectedSize})</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsStoreDrawerOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-4 hide-scrollbar">
                {/* Search input */}
                <div className="relative">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search city, zip code or store..."
                    value={storeSearchQuery}
                    onChange={(e) => setStoreSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-full border border-black/15 text-xs text-black placeholder:text-gray-400 focus:outline-none focus:border-black"
                  />
                </div>

                {/* Store list */}
                <div className="flex flex-col gap-3 mt-2">
                  {filteredStores.map((store, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-black/8 hover:border-black/20 bg-neutral-50/70 hover:bg-white transition-all flex items-start justify-between gap-4"
                    >
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-black shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold text-sm text-black">{store.city}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{store.address}</div>
                          <div className="text-[11px] text-gray-400 mt-1">{store.distance}</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end shrink-0">
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                          store.status === "In Stock"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-amber-100 text-amber-800"
                        }`}>
                          {store.status}
                        </span>
                        <button className="text-[11px] text-black underline underline-offset-2 mt-2 hover:opacity-70 font-semibold">
                          Reserve & Pick Up
                        </button>
                      </div>
                    </div>
                  ))}

                  {filteredStores.length === 0 && (
                    <div className="text-center py-10 text-xs text-gray-500">
                      No store found matching "{storeSearchQuery}".
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-black/10 bg-neutral-50 flex items-center justify-between">
                <span className="text-xs text-gray-600 font-medium">Free 2-hour click & collect in stores</span>
                <button
                  type="button"
                  onClick={() => setIsStoreDrawerOpen(false)}
                  className="px-6 py-2.5 bg-black hover:bg-neutral-800 text-white rounded-full text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          AI USAGE MODAL
      ========================================================================= */}
      <AnimatePresence>
        {isAiModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAiModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl z-10 text-black border border-black/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-black" />
                  <h3 className="font-bold text-base">AI Imagery Usage</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAiModalOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100 text-gray-500"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                In line with our commitment to transparency, some editorial campaign imagery utilizes artificial intelligence enhancements to showcase product drape and wet-weather performance environments.
              </p>
              <p className="text-xs text-gray-600 leading-relaxed mb-6">
                All physical garment details, welded seam structures, hardware finishes, and colors remain authentic to the manufactured product.
              </p>
              <button
                type="button"
                onClick={() => setIsAiModalOpen(false)}
                className="w-full py-3 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors"
              >
                Understood
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          FREE DESIGN MOCKUP MODAL
      ========================================================================= */}
      <AnimatePresence>
        {isMockupModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMockupModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-black/10 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setIsMockupModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2.5 text-yoode-coral font-bold text-xs uppercase tracking-wider mb-2">
                <Sparkles size={16} />
                <span>Complimentary Service</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">
                Get Free Design Mockup
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                Upload your logo or describe your branding requirements. Our professional design studio will render a 3D digital proof within 2 business hours.
              </p>

              {mockupSubmitted ? (
                <div className="mt-6 p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                    <Check size={24} strokeWidth={3} />
                  </div>
                  <h4 className="font-bold text-black text-base">Mockup Request Received!</h4>
                  <p className="text-xs text-gray-600 mt-1 max-w-xs">
                    Our creative team will WhatsApp you the high-resolution 3D proof at {mockupPhone || "your contact number"}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setMockupSubmitted(false);
                      setIsMockupModalOpen(false);
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setMockupSubmitted(true);
                  }}
                  className="mt-6 flex flex-col gap-4 text-xs"
                >
                  <div>
                    <label className="block font-bold text-black mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={mockupName}
                      onChange={(e) => setMockupName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full h-10 px-3 border border-black/15 rounded-lg focus:border-black focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-black mb-1">WhatsApp / Phone</label>
                      <input
                        type="tel"
                        required
                        value={mockupPhone}
                        onChange={(e) => setMockupPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full h-10 px-3 border border-black/15 rounded-lg focus:border-black focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-black mb-1">Company / Organization</label>
                      <input
                        type="text"
                        value={mockupOrg}
                        onChange={(e) => setMockupOrg(e.target.value)}
                        placeholder="e.g. Razorpay, IIT Madras"
                        className="w-full h-10 px-3 border border-black/15 rounded-lg focus:border-black focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-black mb-1">Branding & Logo Notes</label>
                    <textarea
                      rows={3}
                      value={mockupNotes}
                      onChange={(e) => setMockupNotes(e.target.value)}
                      placeholder="e.g. Left chest embroidery, white logo on navy background, need 40 polos"
                      className="w-full p-3 border border-black/15 rounded-lg focus:border-black focus:outline-none"
                    />
                  </div>

                  <div className="p-3 bg-gray-50 border border-dashed border-gray-300 rounded-xl flex items-center justify-center gap-2 text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors">
                    <Upload size={16} />
                    <span className="font-semibold">Attach Logo File (AI, SVG, PNG, PDF)</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-11 mt-2 bg-black hover:bg-neutral-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Mockup Request
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          BULK QUOTE MODAL (25+ PIECES)
      ========================================================================= */}
      <AnimatePresence>
        {isBulkModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBulkModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-black/10 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setIsBulkModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2.5 text-blue-700 font-bold text-xs uppercase tracking-wider mb-2">
                <Tag size={16} />
                <span>Tiered Wholesale Pricing</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">
                Bulk Order Quote (25+ Units)
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                Unlock instant factory tier discounts with complimentary custom embroidery, free sampling, and priority dispatch.
              </p>

              {bulkSubmitted ? (
                <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-xl text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                    <Check size={24} strokeWidth={3} />
                  </div>
                  <h4 className="font-bold text-black text-base">Bulk Quote Initiated!</h4>
                  <p className="text-xs text-gray-600 mt-1 max-w-xs">
                    Our corporate specialist will connect within 15 minutes with formal quotation & GST invoice.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setBulkSubmitted(false);
                      setIsBulkModalOpen(false);
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="mt-5 flex flex-col gap-4 text-xs">
                  {/* Quantity selector slider */}
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-black">Estimated Quantity:</span>
                      <span className="text-sm font-extrabold text-[#1D4ED8] bg-blue-100 px-2.5 py-0.5 rounded-full">
                        {bulkQty} pieces
                      </span>
                    </div>
                    <input
                      type="range"
                      min={25}
                      max={500}
                      step={5}
                      value={bulkQty}
                      onChange={(e) => setBulkQty(Number(e.target.value))}
                      className="w-full accent-[#1D4ED8] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                      <span>25 pcs (10% off)</span>
                      <span>100 pcs (25% off)</span>
                      <span>500+ pcs (Factory Direct)</span>
                    </div>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setBulkSubmitted(true);
                    }}
                    className="flex flex-col gap-3"
                  >
                    <div>
                      <label className="block font-bold text-black mb-1">Contact Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sharma"
                        className="w-full h-10 px-3 border border-black/15 rounded-lg focus:border-black focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-black mb-1">Email</label>
                        <input
                          type="email"
                          required
                          placeholder="priya@company.com"
                          className="w-full h-10 px-3 border border-black/15 rounded-lg focus:border-black focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-black mb-1">Phone</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full h-10 px-3 border border-black/15 rounded-lg focus:border-black focus:outline-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full h-11 mt-2 bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Receive Instant Bulk Proposal
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          FULLSCREEN LIGHTBOX ZOOM MODAL
      ========================================================================= */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center select-none cursor-zoom-out"
          >
            {/* Dedicated Prominent Close Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
              aria-label="Close Lightbox"
              className="fixed top-6 right-6 z-[320] w-12 h-12 rounded-full bg-white text-black hover:bg-neutral-200 flex items-center justify-center shadow-2xl transition-all cursor-pointer group active:scale-95"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-200" />
            </button>

            {/* Top Bar Controls */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="absolute top-5 left-6 right-20 flex items-center justify-between z-20 text-white cursor-default"
            >
              <div className="text-xs font-semibold tracking-wider uppercase text-white/90">
                {RAINS_JACKET_DATA.title} &ndash; {selectedColor.name} ({currentImageIndex + 1}/{selectedColor.images.length})
              </div>
            </div>

            {/* Main Lightbox Image */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-[85vh] flex items-center justify-center px-4 cursor-default"
            >
              <img
                src={selectedColor.images[currentImageIndex]}
                alt={`Zoom View ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />

              {/* Prev / Next in Lightbox */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Bottom Thumbnail Strip */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-6 flex items-center gap-2 z-20 cursor-default"
            >
              {selectedColor.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`w-12 h-16 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                    idx === currentImageIndex ? "border-white scale-105" : "border-white/20 opacity-50 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
 
      {/* =========================================================================
          COUPONS & OFFERS SIDE OVERLAY DRAWER
      ========================================================================= */}
      <AnimatePresence>
        {isCouponsDrawerOpen && (
          <div className="fixed inset-0 z-[300] flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCouponsDrawerOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer"
            />

            {/* Slide-out Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative w-full max-w-md h-full bg-white text-black shadow-2xl flex flex-col z-10 overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-black/10 flex items-center justify-between bg-neutral-50/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center">
                    <Tag size={18} />
                  </div>
                  <div>
                    <h2 className="text-lg font-black tracking-tight text-black">Available Coupons</h2>
                    <p className="text-xs text-gray-500 font-medium">Select or copy a code to save on your order</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCouponsDrawerOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
                  aria-label="Close Coupons Drawer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Coupons List */}
              <div className="p-5 sm:p-6 overflow-y-auto flex-1 flex flex-col gap-4 hide-scrollbar">
                {/* Manual Promo Code Input */}
                <div className="bg-neutral-50 p-3 rounded-2xl border border-black/10 flex flex-col gap-2">
                  <span className="text-xs font-bold text-black">Have a promo code?</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleApplyCoupon();
                        }
                      }}
                      placeholder="e.g. YOODE10, JERSEY15"
                      className="flex-1 h-9 px-3 bg-white border border-black/15 focus:border-black rounded-xl text-xs font-bold uppercase tracking-wider text-black placeholder:text-gray-400 placeholder:normal-case placeholder:font-normal focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => handleApplyCoupon()}
                      className="h-9 px-3.5 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs font-bold transition-colors cursor-pointer shrink-0"
                    >
                      Apply
                    </button>
                  </div>
                  {couponStatus === "applied" && appliedCoupon && (
                    <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                      <Check size={11} strokeWidth={3} /> Code {appliedCoupon} applied successfully!
                    </span>
                  )}
                  {couponStatus === "invalid" && (
                    <span className="text-[11px] font-bold text-red-600">
                      Invalid coupon code. Try YOODE10 or JERSEY15.
                    </span>
                  )}
                </div>

                {availableCoupons.map((coupon) => {
                  const isCurrentApplied = appliedCoupon === coupon.code;
                  return (
                    <div
                      key={coupon.code}
                      className={`p-4 rounded-2xl border-2 transition-all relative ${
                        isCurrentApplied 
                          ? "border-emerald-600 bg-emerald-50/40 shadow-xs" 
                          : "border-black/10 hover:border-black/25 bg-white shadow-xs"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 inline-block mb-1">
                            {coupon.category}
                          </span>
                          <h4 className="font-extrabold text-sm text-black">{coupon.title}</h4>
                        </div>
                        <span className="text-sm font-black text-black bg-neutral-100 px-2.5 py-1 rounded-xl shrink-0">
                          {coupon.discount}
                        </span>
                      </div>

                      <p className="text-xs text-gray-600 leading-relaxed mb-3">
                        {coupon.description}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-black/5">
                        <div className="flex items-center gap-1.5">
                          <code className="bg-neutral-100 border border-dashed border-black/20 text-black font-mono font-bold text-xs px-2.5 py-1 rounded-lg">
                            {coupon.code}
                          </code>
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(coupon.code);
                              setCopiedCouponCode(coupon.code);
                              setTimeout(() => setCopiedCouponCode(null), 2000);
                            }}
                            className="text-gray-500 hover:text-black p-1 hover:bg-neutral-100 rounded text-[11px] font-semibold transition-colors flex items-center gap-0.5 cursor-pointer"
                            aria-label={`Copy code ${coupon.code}`}
                          >
                            {copiedCouponCode === coupon.code ? (
                              <span className="text-emerald-600 font-bold text-[10px]">Copied!</span>
                            ) : (
                              <Copy size={13} />
                            )}
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            handleApplyCoupon(coupon.code);
                            setIsCouponsDrawerOpen(false);
                          }}
                          className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                            isCurrentApplied
                              ? "bg-emerald-600 text-white"
                              : "bg-black hover:bg-neutral-800 text-white"
                          }`}
                        >
                          {isCurrentApplied ? "Applied ✓" : "Apply Code"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-5 border-t border-black/10 bg-neutral-50 flex items-center justify-between text-xs text-gray-600">
                <span>Need quotation for 100+ units?</span>
                <button
                  type="button"
                  onClick={() => {
                    setIsCouponsDrawerOpen(false);
                    setIsBulkModalOpen(true);
                  }}
                  className="font-bold text-black underline underline-offset-2 hover:opacity-75 cursor-pointer"
                >
                  Get Bulk Quote &rarr;
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          100VH FIXED YOODE KIT STUDIO CUSTOMIZER MODAL
      ========================================================================= */}
      <YoodeKitStudioModal
        isOpen={isKitStudioOpen}
        onClose={() => setIsKitStudioOpen(false)}
        initialColor={selectedColor}
        onAddToCart={() => {
          setIsKitStudioOpen(false);
          handleAddToCart();
        }}
      />
    </div>
  );
}
