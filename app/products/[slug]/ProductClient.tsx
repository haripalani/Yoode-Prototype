"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import RainsProductHero from "@/components/product/RainsProductHero";
import YoodeTrustStrip from "@/components/product/YoodeTrustStrip";
import RainsProductDetails from "@/components/product/RainsProductDetails";
import YoodeCompleteKit from "@/components/product/YoodeCompleteKit";
import YoodeCustomerReviews from "@/components/product/YoodeCustomerReviews";
import RainsRelatedProducts from "@/components/product/RainsRelatedProducts";
import { Footer } from "@/components/Footer";
import { RAINS_JACKET_DATA, ColorVariant } from "@/data/rainsProductData";

export default function ProductDetailPage() {
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(RAINS_JACKET_DATA.colors[0]);

  return (
    <div className="relative min-h-screen w-full bg-[#f4f4f4] text-black font-sans overflow-x-hidden pt-[86px] md:pt-[88px] pb-0">
      {/* Global Header */}
      <Header />

      {/* Hero Section: 100vh Infinite Horizontally Tiled Carousel & Floating Glassmorphism Purchase Card */}
      <RainsProductHero 
        selectedColor={selectedColor} 
        onColorChange={setSelectedColor} 
      />

      {/* Trust & Guarantee Strip: No Minimum Order, Free Mockup, Secure Payments, Bulk Discounts, 4.9/5 Rating */}
      <YoodeTrustStrip />

      {/* Unified Tabbed Product Details: Everything About This Polo */}
      <RainsProductDetails 
        selectedColor={selectedColor} 
      />

      {/* Complete Your Kit Bundle Section: Interactive Companion Essentials with Extra 10% Bundle Discount */}
      <YoodeCompleteKit 
        selectedColor={selectedColor} 
      />

      {/* Standalone Customer Reviews & Side Overlay Drawer */}
      <YoodeCustomerReviews />

      {/* Recommendations Section: "You may also like" Product Carousel */}
      <RainsRelatedProducts />

      {/* Yoode Official Brand Footer */}
      <Footer />
    </div>
  );
}
