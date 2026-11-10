"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  X, 
  ChevronRight,
  ChevronLeft,
  UserPlus, 
  Truck, 
  RefreshCcw, 
  HelpCircle,
  Layers,
  Sparkles,
  ShoppingBag
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CADGraphics } from "./CADGraphics";

export const YoodeGraphics = CADGraphics;

// =========================================================================
// SOCIAL ICONS
// =========================================================================

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

// =========================================================================
// MENU DATA STRUCTURE
// =========================================================================

export interface MenuItem {
  title: string;
  href: string;
  badge?: string;
  price?: string;
  subtitle?: string;
  GraphicComponent?: () => React.JSX.Element;
  imageGrey?: string;
  imageColor?: string;
  description?: string;
}

export interface MenuSubTab {
  id: string;
  label: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  label: string;
  hasChevron?: boolean;
  subcategories: MenuItem[];
  subTabs?: MenuSubTab[];
}

export const YOODE_MENU_DATA: MenuCategory[] = [
  // 1. SHOP (Corporate, Sportswear, Trendz, Streetwear, Accessories)
  {
    id: "shop",
    label: "SHOP",
    hasChevron: true,
    subcategories: [
      { 
        title: "Corporate", 
        href: "/category?type=corporate-apparel", 
        price: "From ₹499",
        badge: "BESTSELLER",
        imageGrey: "/menu/polo-grey.webp",
        imageColor: "/menu/polo-color.webp",
        GraphicComponent: CADGraphics.PoloShirt 
      },
      { 
        title: "Sportswear", 
        href: "/custom-sports-jerseys", 
        price: "From ₹599",
        badge: "PRO FIT",
        imageGrey: "/menu/cricket-jersey-grey.webp",
        imageColor: "/menu/cricket-jersey-color.webp",
        GraphicComponent: CADGraphics.CricketJersey 
      },
      { 
        title: "Trendz", 
        href: "/trenz", 
        price: "From ₹699",
        badge: "OVERSIZED",
        imageGrey: "/menu/oversized-tee-grey.webp",
        imageColor: "/menu/oversized-tee-color.webp",
        GraphicComponent: CADGraphics.OversizedTee 
      },
      { 
        title: "Streetwear", 
        href: "/hoodies-sweatshirts-jackets", 
        price: "From ₹1,299",
        badge: "NEW SEASON",
        imageGrey: "/menu/hoodie-grey.webp",
        imageColor: "/menu/hoodie-color.webp",
        GraphicComponent: CADGraphics.Hoodie 
      },
      { 
        title: "Accessories", 
        href: "/accessories", 
        price: "From ₹349",
        badge: "PREMIUM",
        imageGrey: "/menu/cap-embroidered-grey.webp",
        imageColor: "/menu/cap-embroidered-color.webp",
        GraphicComponent: CADGraphics.EmbroideredCap 
      },
    ]
  },

  // 2. CLOTHING (Men's, Women's, Kid's)
  {
    id: "clothing",
    label: "CLOTHING",
    hasChevron: true,
    subcategories: [
      { 
        title: "Men's T Shirt", 
        href: "/t-shirts", 
        price: "From ₹399",
        badge: "ESSENTIAL",
        imageGrey: "/menu/tshirt-grey.webp",
        imageColor: "/menu/tshirt-color.webp",
        GraphicComponent: CADGraphics.TShirt 
      },
      { 
        title: "Men's Polo Shirt", 
        href: "/polos", 
        price: "From ₹549",
        badge: "PREMIUM",
        imageGrey: "/menu/polo-grey.webp",
        imageColor: "/menu/polo-color.webp",
        GraphicComponent: CADGraphics.PoloShirt 
      },
      { 
        title: "Men's Oversized T Shirt", 
        href: "/trenz", 
        price: "From ₹699",
        badge: "TRENDING",
        imageGrey: "/menu/oversized-tee-grey.webp",
        imageColor: "/menu/oversized-tee-color.webp",
        GraphicComponent: CADGraphics.OversizedTee 
      },
      { 
        title: "Men's Full Sleeve T Shirt", 
        href: "/t-shirts", 
        price: "From ₹499",
        badge: "CLASSIC",
        imageGrey: "/menu/fullsleeve-tee-grey.webp",
        imageColor: "/menu/fullsleeve-tee-color.webp",
        GraphicComponent: CADGraphics.FullSleeveTee 
      },
      { 
        title: "Men's Hoodies & Sweatshirts", 
        href: "/hoodies-sweatshirts-jackets", 
        price: "From ₹1,199",
        badge: "WINTER TECH",
        imageGrey: "/menu/hoodie-grey.webp",
        imageColor: "/menu/hoodie-color.webp",
        GraphicComponent: CADGraphics.Hoodie 
      },
      { 
        title: "Men's Jackets", 
        href: "/hoodies-sweatshirts-jackets", 
        price: "From ₹1,899",
        badge: "RACING SPEC",
        imageGrey: "/menu/jacket-grey.webp",
        imageColor: "/menu/jacket-color.webp",
        GraphicComponent: CADGraphics.Jacket 
      },
    ],
    subTabs: [
      {
        id: "mens",
        label: "Men's Clothing",
        items: [
          { title: "Men's T Shirt", href: "/t-shirts", price: "From ₹399", badge: "ESSENTIAL", imageGrey: "/menu/tshirt-grey.webp", imageColor: "/menu/tshirt-color.webp", GraphicComponent: CADGraphics.TShirt },
          { title: "Men's Polo Shirt", href: "/polos", price: "From ₹549", badge: "PREMIUM", imageGrey: "/menu/polo-grey.webp", imageColor: "/menu/polo-color.webp", GraphicComponent: CADGraphics.PoloShirt },
          { title: "Men's Oversized T Shirt", href: "/trenz", price: "From ₹699", badge: "TRENDING", imageGrey: "/menu/oversized-tee-grey.webp", imageColor: "/menu/oversized-tee-color.webp", GraphicComponent: CADGraphics.OversizedTee },
          { title: "Men's Full Sleeve T Shirt", href: "/t-shirts", price: "From ₹499", badge: "CLASSIC", imageGrey: "/menu/fullsleeve-tee-grey.webp", imageColor: "/menu/fullsleeve-tee-color.webp", GraphicComponent: CADGraphics.FullSleeveTee },
          { title: "Men's Hoodies & Sweatshirts", href: "/hoodies-sweatshirts-jackets", price: "From ₹1,199", badge: "WINTER TECH", imageGrey: "/menu/hoodie-grey.webp", imageColor: "/menu/hoodie-color.webp", GraphicComponent: CADGraphics.Hoodie },
          { title: "Men's Jackets", href: "/hoodies-sweatshirts-jackets", price: "From ₹1,899", badge: "RACING SPEC", imageGrey: "/menu/jacket-grey.webp", imageColor: "/menu/jacket-color.webp", GraphicComponent: CADGraphics.Jacket },
        ]
      },
      {
        id: "womens",
        label: "Women's Clothing",
        items: [
          { title: "Women's T Shirt", href: "/t-shirts", price: "From ₹399", badge: "ESSENTIAL", imageGrey: "/menu/tshirt-grey.webp", imageColor: "/menu/tshirt-color.webp", GraphicComponent: CADGraphics.TShirt },
          { title: "Women's Polo Shirt", href: "/polos", price: "From ₹549", badge: "PREMIUM", imageGrey: "/menu/polo-grey.webp", imageColor: "/menu/polo-color.webp", GraphicComponent: CADGraphics.PoloShirt },
          { title: "Women's Oversized T Shirt", href: "/trenz", price: "From ₹699", badge: "TRENDING", imageGrey: "/menu/oversized-tee-grey.webp", imageColor: "/menu/oversized-tee-color.webp", GraphicComponent: CADGraphics.OversizedTee },
          { title: "Women's Full Sleeve T Shirt", href: "/t-shirts", price: "From ₹499", badge: "CLASSIC", imageGrey: "/menu/fullsleeve-tee-grey.webp", imageColor: "/menu/fullsleeve-tee-color.webp", GraphicComponent: CADGraphics.FullSleeveTee },
          { title: "Women's Hoodies & Sweatshirts", href: "/hoodies-sweatshirts-jackets", price: "From ₹1,199", badge: "WINTER TECH", imageGrey: "/menu/hoodie-grey.webp", imageColor: "/menu/hoodie-color.webp", GraphicComponent: CADGraphics.Hoodie },
          { title: "Women's Jackets", href: "/hoodies-sweatshirts-jackets", price: "From ₹1,899", badge: "RACING SPEC", imageGrey: "/menu/jacket-grey.webp", imageColor: "/menu/jacket-color.webp", GraphicComponent: CADGraphics.Jacket },
        ]
      },
      {
        id: "kids",
        label: "Kid's Clothing",
        items: [
          { title: "Kid's T Shirt", href: "/t-shirts", price: "From ₹349", badge: "ORGANIC", imageGrey: "/menu/tshirt-grey.webp", imageColor: "/menu/tshirt-color.webp", GraphicComponent: CADGraphics.TShirt },
          { title: "Kid's Polo Shirt", href: "/polos", price: "From ₹499", badge: "JUNIOR", imageGrey: "/menu/polo-grey.webp", imageColor: "/menu/polo-color.webp", GraphicComponent: CADGraphics.PoloShirt },
          { title: "Kid's Oversized T Shirt", href: "/trenz", price: "From ₹549", badge: "PLAY WEAR", imageGrey: "/menu/oversized-tee-grey.webp", imageColor: "/menu/oversized-tee-color.webp", GraphicComponent: CADGraphics.OversizedTee },
          { title: "Kid's Full Sleeve T Shirt", href: "/t-shirts", price: "From ₹449", badge: "COMFORT", imageGrey: "/menu/fullsleeve-tee-grey.webp", imageColor: "/menu/fullsleeve-tee-color.webp", GraphicComponent: CADGraphics.FullSleeveTee },
          { title: "Kids's Hoodies & Sweatshirts", href: "/hoodies-sweatshirts-jackets", price: "From ₹899", badge: "WARMTH", imageGrey: "/menu/hoodie-grey.webp", imageColor: "/menu/hoodie-color.webp", GraphicComponent: CADGraphics.Hoodie },
          { title: "Kid's Jackets", href: "/hoodies-sweatshirts-jackets", price: "From ₹1,299", badge: "WEATHERPROOF", imageGrey: "/menu/jacket-grey.webp", imageColor: "/menu/jacket-color.webp", GraphicComponent: CADGraphics.Jacket },
        ]
      }
    ]
  },

  // 3. JERSEYS (Shop By Sports)
  {
    id: "jerseys",
    label: "JERSEYS",
    hasChevron: true,
    subcategories: [
      { 
        title: "Cricket Jerseys", 
        href: "/custom-cricket-jerseys", 
        price: "Custom Kit",
        badge: "MATCHDAY",
        imageGrey: "/menu/cricket-jersey-grey.webp",
        imageColor: "/menu/cricket-jersey-color.webp",
        GraphicComponent: CADGraphics.CricketJersey 
      },
      { 
        title: "Football Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "PRO EDITION",
        imageGrey: "/menu/football-jersey-grey.webp",
        imageColor: "/menu/football-jersey-color.webp",
        GraphicComponent: CADGraphics.FootballJersey 
      },
      { 
        title: "Basketball Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "COURT FIT",
        imageGrey: "/menu/basketball-jersey-grey.webp",
        imageColor: "/menu/basketball-jersey-color.webp",
        GraphicComponent: CADGraphics.BasketballJersey 
      },
      { 
        title: "Badminton Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "FLEX DRY",
        imageGrey: "/menu/badminton-jersey-grey.webp",
        imageColor: "/menu/badminton-jersey-color.webp",
        GraphicComponent: CADGraphics.BadmintonJersey 
      },
      { 
        title: "Volleyball Jersey", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "ACTIVE",
        imageGrey: "/menu/volleyball-jersey-grey.webp",
        imageColor: "/menu/volleyball-jersey-color.webp",
        GraphicComponent: CADGraphics.VolleyballJersey 
      },
      { 
        title: "Cycling Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "AERO FIT",
        imageGrey: "/menu/cycling-jersey-grey.webp",
        imageColor: "/menu/cycling-jersey-color.webp",
        GraphicComponent: CADGraphics.CyclingJersey 
      },
      { 
        title: "Running Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "LIGHTWEIGHT",
        imageGrey: "/menu/running-jersey-grey.webp",
        imageColor: "/menu/running-jersey-color.webp",
        GraphicComponent: CADGraphics.RunningJersey 
      },
      { 
        title: "Esport Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "PRO GAMER",
        imageGrey: "/menu/esports-jersey-grey.webp",
        imageColor: "/menu/esports-jersey-color.webp",
        GraphicComponent: CADGraphics.EsportsJersey 
      },
    ],
    subTabs: [
      {
        id: "shop-by-sports",
        label: "Shop By Sports",
        items: [
          { title: "Cricket Jerseys", href: "/custom-cricket-jerseys", price: "Custom Kit", badge: "MATCHDAY", imageGrey: "/menu/cricket-jersey-grey.webp", imageColor: "/menu/cricket-jersey-color.webp", GraphicComponent: CADGraphics.CricketJersey },
          { title: "Football Jerseys", href: "/custom-sports-jerseys", price: "Custom Kit", badge: "PRO EDITION", imageGrey: "/menu/football-jersey-grey.webp", imageColor: "/menu/football-jersey-color.webp", GraphicComponent: CADGraphics.FootballJersey },
          { title: "Basketball Jerseys", href: "/custom-sports-jerseys", price: "Custom Kit", badge: "COURT FIT", imageGrey: "/menu/basketball-jersey-grey.webp", imageColor: "/menu/basketball-jersey-color.webp", GraphicComponent: CADGraphics.BasketballJersey },
          { title: "Badminton Jerseys", href: "/custom-sports-jerseys", price: "Custom Kit", badge: "FLEX DRY", imageGrey: "/menu/badminton-jersey-grey.webp", imageColor: "/menu/badminton-jersey-color.webp", GraphicComponent: CADGraphics.BadmintonJersey },
          { title: "Volleyball Jersey", href: "/custom-sports-jerseys", price: "Custom Kit", badge: "ACTIVE", imageGrey: "/menu/volleyball-jersey-grey.webp", imageColor: "/menu/volleyball-jersey-color.webp", GraphicComponent: CADGraphics.VolleyballJersey },
          { title: "Cycling Jerseys", href: "/custom-sports-jerseys", price: "Custom Kit", badge: "AERO FIT", imageGrey: "/menu/cycling-jersey-grey.webp", imageColor: "/menu/cycling-jersey-color.webp", GraphicComponent: CADGraphics.CyclingJersey },
          { title: "Running Jerseys", href: "/custom-sports-jerseys", price: "Custom Kit", badge: "LIGHTWEIGHT", imageGrey: "/menu/running-jersey-grey.webp", imageColor: "/menu/running-jersey-color.webp", GraphicComponent: CADGraphics.RunningJersey },
          { title: "Esport Jerseys", href: "/custom-sports-jerseys", price: "Custom Kit", badge: "PRO GAMER", imageGrey: "/menu/esports-jersey-grey.webp", imageColor: "/menu/esports-jersey-color.webp", GraphicComponent: CADGraphics.EsportsJersey },
        ]
      }
    ]
  },

  // 4. CORPORATE GIFTING
  {
    id: "corporate-gifting",
    label: "CORPORATE GIFTING",
    hasChevron: false,
    subcategories: [
      { 
        title: "Corporate Apparel", 
        href: "/category?type=corporate-apparel", 
        price: "Bulk Pricing",
        badge: "OFFICE",
        imageGrey: "/menu/polo-grey.webp",
        imageColor: "/menu/polo-color.webp",
        GraphicComponent: CADGraphics.PoloShirt 
      },
      { 
        title: "Custom Drinkware", 
        href: "/category?type=drinkware", 
        price: "Laser Engraved",
        badge: "ECO TECH",
        imageGrey: "/menu/drinkware-grey.webp",
        imageColor: "/menu/drinkware-color.webp",
        GraphicComponent: CADGraphics.Drinkware 
      },
      { 
        title: "Bags & Travel", 
        href: "/accessories", 
        price: "Embroidered",
        badge: "TRAVEL READY",
        imageGrey: "/menu/backpack-grey.webp",
        imageColor: "/menu/backpack-color.webp",
        GraphicComponent: CADGraphics.Accessories 
      },
      { 
        title: "Corporate Gift Hampers", 
        href: "/stationery-gifting-drinkware", 
        price: "Curated Set",
        badge: "VIP SUITE",
        imageGrey: "/menu/gift-hamper-grey.webp",
        imageColor: "/menu/gift-hamper-color.webp",
        GraphicComponent: CADGraphics.GiftHamper 
      },
      { 
        title: "Promotional Products", 
        href: "/stationery-gifting-drinkware", 
        price: "Quick Ship",
        badge: "EVENT READY",
        imageGrey: "/menu/promo-products-grey.webp",
        imageColor: "/menu/promo-products-color.webp",
        GraphicComponent: CADGraphics.PromoProducts 
      },
      { 
        title: "Eco-friendly Gifts", 
        href: "/stationery-gifting-drinkware", 
        price: "Sustainable",
        badge: "GREEN CHOICE",
        imageGrey: "/menu/eco-gifts-grey.webp",
        imageColor: "/menu/eco-gifts-color.webp",
        GraphicComponent: CADGraphics.EcoGifts 
      },
    ],
    subTabs: [
      {
        id: "by-product",
        label: "By Product",
        items: [
          { title: "Corporate Apparel", href: "/category?type=corporate-apparel", price: "Bulk Pricing", badge: "OFFICE", imageGrey: "/menu/polo-grey.webp", imageColor: "/menu/polo-color.webp", GraphicComponent: CADGraphics.PoloShirt },
          { title: "Custom Drinkware", href: "/category?type=drinkware", price: "Laser Engraved", badge: "ECO TECH", imageGrey: "/menu/drinkware-grey.webp", imageColor: "/menu/drinkware-color.webp", GraphicComponent: CADGraphics.Drinkware },
          { title: "Bags & Travel", href: "/accessories", price: "Embroidered", badge: "TRAVEL READY", imageGrey: "/menu/backpack-grey.webp", imageColor: "/menu/backpack-color.webp", GraphicComponent: CADGraphics.Accessories },
          { title: "Corporate Gift Hampers", href: "/stationery-gifting-drinkware", price: "Curated Set", badge: "VIP SUITE", imageGrey: "/menu/gift-hamper-grey.webp", imageColor: "/menu/gift-hamper-color.webp", GraphicComponent: CADGraphics.GiftHamper },
          { title: "Promotional Products", href: "/stationery-gifting-drinkware", price: "Quick Ship", badge: "EVENT READY", imageGrey: "/menu/promo-products-grey.webp", imageColor: "/menu/promo-products-color.webp", GraphicComponent: CADGraphics.PromoProducts },
          { title: "Eco-friendly Gifts", href: "/stationery-gifting-drinkware", price: "Sustainable", badge: "GREEN CHOICE", imageGrey: "/menu/eco-gifts-grey.webp", imageColor: "/menu/eco-gifts-color.webp", GraphicComponent: CADGraphics.EcoGifts },
        ]
      },
      {
        id: "by-occasion",
        label: "By Occasion",
        items: [
          { title: "Employee Welcome Kits", href: "/stationery-gifting-drinkware", price: "Custom Box", badge: "ONBOARDING", imageGrey: "/menu/gift-hamper-grey.webp", imageColor: "/menu/gift-hamper-color.webp", GraphicComponent: CADGraphics.GiftHamper },
          { title: "Employee Appreciation Gifts", href: "/stationery-gifting-drinkware", price: "Custom Crest", badge: "REWARD", imageGrey: "/menu/promo-products-grey.webp", imageColor: "/menu/promo-products-color.webp", GraphicComponent: CADGraphics.PromoProducts },
          { title: "Work Anniversary Gifts", href: "/stationery-gifting-drinkware", price: "Milestone", badge: "HONOR", imageGrey: "/menu/drinkware-grey.webp", imageColor: "/menu/drinkware-color.webp", GraphicComponent: CADGraphics.Drinkware },
          { title: "Corporate Event Gifts", href: "/stationery-gifting-drinkware", price: "Engraved", badge: "SUMMIT", imageGrey: "/menu/promo-products-grey.webp", imageColor: "/menu/promo-products-color.webp", GraphicComponent: CADGraphics.PromoProducts },
        ]
      },
      {
        id: "by-festival",
        label: "By Festival",
        items: [
          { title: "Diwali Corporate Gifts", href: "/stationery-gifting-drinkware", price: "Festive Box", badge: "FESTIVE", imageGrey: "/menu/gift-hamper-grey.webp", imageColor: "/menu/gift-hamper-color.webp", GraphicComponent: CADGraphics.GiftHamper },
          { title: "Christmas Corporate Gifts", href: "/stationery-gifting-drinkware", price: "Winter Hamper", badge: "HOLIDAY", imageGrey: "/menu/gift-hamper-grey.webp", imageColor: "/menu/gift-hamper-color.webp", GraphicComponent: CADGraphics.GiftHamper },
          { title: "New Year Corporate Gifts", href: "/stationery-gifting-drinkware", price: "2026 Set", badge: "NEW YEAR", imageGrey: "/menu/gift-hamper-grey.webp", imageColor: "/menu/gift-hamper-color.webp", GraphicComponent: CADGraphics.GiftHamper },
          { title: "Pongal Corporate Gifts", href: "/stationery-gifting-drinkware", price: "Traditional Box", badge: "HARVEST", imageGrey: "/menu/gift-hamper-grey.webp", imageColor: "/menu/gift-hamper-color.webp", GraphicComponent: CADGraphics.GiftHamper },
        ]
      }
    ]
  },

  // 5. CAPS (Embroidered Caps, Printed Caps, Bucket Hats)
  {
    id: "caps",
    label: "CAPS",
    hasChevron: true,
    subcategories: [
      { 
        title: "Embroidered Caps", 
        href: "/accessories", 
        price: "From ₹399",
        badge: "HIGH THREAD",
        imageGrey: "/menu/cap-embroidered-grey.webp",
        imageColor: "/menu/cap-embroidered-color.webp",
        GraphicComponent: CADGraphics.EmbroideredCap 
      },
      { 
        title: "Printed Caps", 
        href: "/accessories", 
        price: "From ₹349",
        badge: "HD PRINT",
        imageGrey: "/menu/cap-printed-grey.webp",
        imageColor: "/menu/cap-printed-color.webp",
        GraphicComponent: CADGraphics.PrintedCap 
      },
      { 
        title: "Bucket Hats", 
        href: "/accessories", 
        price: "From ₹449",
        badge: "STREETWEAR",
        imageGrey: "/menu/bucket-hat-grey.webp",
        imageColor: "/menu/bucket-hat-color.webp",
        GraphicComponent: CADGraphics.BucketHat 
      },
    ]
  },

  // 6. MERCH STUDIO
  {
    id: "merch-studio",
    label: "MERCH STUDIO",
    hasChevron: true,
    subcategories: [
      { 
        title: "3D Configurator", 
        href: "/design-studio", 
        price: "Interactive",
        badge: "3D LIVE",
        imageGrey: "/menu/configurator-3d-grey.webp",
        imageColor: "/menu/configurator-3d-color.webp",
        GraphicComponent: CADGraphics.Configurator3D 
      },
      { 
        title: "Custom Sports Kits", 
        href: "/custom-sports-jerseys", 
        price: "Team Kits",
        badge: "FULL CUSTOM",
        imageGrey: "/menu/cricket-jersey-grey.webp",
        imageColor: "/menu/cricket-jersey-color.webp",
        GraphicComponent: CADGraphics.CricketJersey 
      },
      { 
        title: "Custom Headwear", 
        href: "/accessories", 
        price: "Caps & Beanies",
        badge: "STUDIO PICK",
        imageGrey: "/menu/cap-embroidered-grey.webp",
        imageColor: "/menu/cap-embroidered-color.webp",
        GraphicComponent: CADGraphics.EmbroideredCap 
      },
      { 
        title: "Custom Streetwear", 
        href: "/trenz", 
        price: "Street Fit",
        badge: "PREMIUM DROP",
        imageGrey: "/menu/hoodie-grey.webp",
        imageColor: "/menu/hoodie-color.webp",
        GraphicComponent: CADGraphics.Hoodie 
      },
      { 
        title: "Custom Jackets", 
        href: "/hoodies-sweatshirts-jackets", 
        price: "Outerwear",
        badge: "BESPOKE",
        imageGrey: "/menu/jacket-grey.webp",
        imageColor: "/menu/jacket-color.webp",
        GraphicComponent: CADGraphics.Jacket 
      },
      { 
        title: "Bulk Swatches", 
        href: "/category?type=corporate-apparel", 
        price: "Free Swatches",
        badge: "SAMPLES",
        imageGrey: "/menu/pants-grey.webp",
        imageColor: "/menu/pants-color.webp",
        GraphicComponent: CADGraphics.ColorSwatches 
      },
    ]
  },

  // 7. SERVICES (DTG, DTF, Embroidery, Coloreel, Screen, UV, Engraving)
  {
    id: "services",
    label: "SERVICES",
    hasChevron: true,
    subcategories: [
      { title: "DTG Printing", href: "/dtg-printing", price: "Direct-to-Garment", badge: "NO SETUP", imageGrey: "/menu/service-dtg-grey.webp", imageColor: "/menu/service-dtg-color.webp", GraphicComponent: CADGraphics.DTGPrinting },
      { title: "DTF Printing", href: "/services", price: "Film Transfers", badge: "DURABLE", imageGrey: "/menu/service-dtf-grey.webp", imageColor: "/menu/service-dtf-color.webp", GraphicComponent: CADGraphics.DTFPrinting },
      { title: "Embroidery Digitizing", href: "/services", price: "Precision Stitch", badge: "3D PUFF", imageGrey: "/menu/service-embroidery-grey.webp", imageColor: "/menu/service-embroidery-color.webp", GraphicComponent: CADGraphics.EmbroideryDigitizing },
      { title: "Coloreel Digitizing", href: "/services", price: "Thread Dyeing", badge: "UNLIMITED", imageGrey: "/menu/service-coloreel-grey.webp", imageColor: "/menu/service-coloreel-color.webp", GraphicComponent: CADGraphics.ColoreelDigitizing },
      { title: "Screen Printing", href: "/services", price: "Bulk Quantity", badge: "ECONOMICAL", imageGrey: "/menu/service-screen-printing-grey.webp", imageColor: "/menu/service-screen-printing-color.webp", GraphicComponent: CADGraphics.ScreenPrinting },
      { title: "UV Printing", href: "/services", price: "Hard Surface", badge: "HD CURE", imageGrey: "/menu/service-uv-printing-grey.webp", imageColor: "/menu/service-uv-printing-color.webp", GraphicComponent: CADGraphics.UVPrinting },
      { title: "Laser Engraving", href: "/services", price: "Fiber Laser", badge: "PERMANENT", imageGrey: "/menu/service-engraving-grey.webp", imageColor: "/menu/service-engraving-color.webp", GraphicComponent: CADGraphics.LaserEngraving },
    ]
  },

  // 8. BRANDS
  {
    id: "brands",
    label: "BRANDS",
    hasChevron: true,
    subcategories: [
      { title: "Redbolt", href: "/category?brand=redbolt", price: "Performance Tech", badge: "EXCLUSIVE", GraphicComponent: CADGraphics.BrandRedbolt },
      { title: "Jack&Jones", href: "/category?brand=jackjones", price: "European Denim", badge: "OFFICIAL", GraphicComponent: CADGraphics.BrandJackJones },
      { title: "Vero Moda", href: "/category?brand=veromoda", price: "Contemporary Chic", badge: "OFFICIAL", GraphicComponent: CADGraphics.BrandVeroModa },
      { title: "Turtle", href: "/category?brand=turtle", price: "Refined Formalwear", badge: "OFFICIAL", GraphicComponent: CADGraphics.BrandTurtle },
      { title: "Rare Rabbit", href: "/category?brand=rarerabbit", price: "Designer Casuals", badge: "OFFICIAL", GraphicComponent: CADGraphics.BrandRareRabbit },
    ]
  },

  // 9. ABOUT
  {
    id: "about",
    label: "ABOUT",
    hasChevron: true,
    subcategories: [
      { title: "About Us", href: "/#about", price: "Our Atelier Story", badge: "CRAFT", imageColor: "/yoode-mascot.jpg", GraphicComponent: CADGraphics.AtelierCraft },
      { title: "Case Studies", href: "/blogs", price: "Client Spotlights", badge: "STORIES", imageColor: "/images/step3_review.jpg", GraphicComponent: CADGraphics.CaseStudies },
      { title: "Blog", href: "/blogs", price: "Style & Industry", badge: "JOURNAL", imageColor: "/categories/best_sellers.webp", GraphicComponent: CADGraphics.BlogJournal },
      { title: "Gallery", href: "/#gallery", price: "Factory & Studio", badge: "VISUAL", imageColor: "/images/cta_jersey_rack.jpg", GraphicComponent: CADGraphics.GalleryCamera },
    ]
  },

  // 10. OUR STORES
  {
    id: "our-stores",
    label: "OUR STORES",
    hasChevron: true,
    subcategories: [
      { title: "Bangalore", href: "/#stores", price: "Indiranagar 100ft", badge: "FLAGSHIP", imageColor: "/Bangalore_store.webp", GraphicComponent: CADGraphics.StoreBangalore },
      { title: "Chennai", href: "/#stores", price: "Anna Nagar West", badge: "STUDIO", imageColor: "/Bangalore_store.webp", GraphicComponent: CADGraphics.StoreChennai },
      { title: "Marthandam", href: "/#stores", price: "Main Road Center", badge: "HUB", imageColor: "/Marthandam_Store.webp", GraphicComponent: CADGraphics.StoreMarthandam },
      { title: "Trivandrum", href: "/#stores", price: "Technopark Express", badge: "CORP LOUNGE", imageColor: "/Thiruvananthapuram_Store.webp", GraphicComponent: CADGraphics.StoreTrivandrum },
    ]
  },

  // 11. ACCOUNT
  {
    id: "account",
    label: "ACCOUNT",
    hasChevron: false,
    subcategories: [
      { title: "Sign In / Register", href: "/#account", price: "Instant Portal", badge: "PROFILE", GraphicComponent: CADGraphics.AccountBadge },
      { title: "Track My Order", href: "/#track", price: "Live Dispatch", badge: "TRACKING", GraphicComponent: CADGraphics.DispatchTruck },
      { title: "Saved Wishlist", href: "/#wishlist", price: "Your Curations", badge: "WISHLIST", GraphicComponent: CADGraphics.WishlistHeart },
    ]
  },

  // 12. CART
  {
    id: "cart",
    label: "CART",
    hasChevron: false,
    subcategories: [
      { title: "View Bag (0 Items)", href: "/#cart", price: "Ready to Order", badge: "BAG", GraphicComponent: CADGraphics.ShoppingBagCAD },
      { title: "Checkout", href: "/#checkout", price: "Secure Express", badge: "PAYMENT", GraphicComponent: CADGraphics.CheckoutTerminal },
      { title: "Bulk Inquiry", href: "/#bulk", price: "Custom Quote", badge: "B2B QUOTE", GraphicComponent: CADGraphics.BulkPallet },
    ]
  }
];

// =========================================================================
// 3/4 SCREEN SPLIT MENU COMPONENT
// Left: Exact Deployed Typography, Categories & Footer
// Right: Frosted Glassmorphism Product Grid with Precision CAD Graphics
// =========================================================================

type MenuVariant = "classic" | "glass";

interface YoodeMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function YoodeMenu({ isOpen, onClose }: YoodeMenuProps) {
  // Default to "shop" so Shop is pre-selected when opened
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("shop");
  const [activeSubTabId, setActiveSubTabId] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<"categories" | "products">("categories");
  const [menuVariant, setMenuVariant] = useState<MenuVariant>("glass");

  // Read saved preference from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("yoode_menu_variant") as MenuVariant | null;
      if (saved === "classic" || saved === "glass") {
        setMenuVariant(saved);
      }
    }
  }, []);

  const toggleVariant = (v: MenuVariant) => {
    setMenuVariant(v);
    if (typeof window !== "undefined") {
      localStorage.setItem("yoode_menu_variant", v);
    }
  };

  // Close on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSelectedCategoryId("shop");
      setActiveSubTabId(null);
      setMobileView("categories");
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const activeCategory = YOODE_MENU_DATA.find((c) => c.id === selectedCategoryId) || YOODE_MENU_DATA[0];

  // Sync sub-tabs when category changes
  useEffect(() => {
    if (activeCategory?.subTabs && activeCategory.subTabs.length > 0) {
      setActiveSubTabId(activeCategory.subTabs[0].id);
    } else {
      setActiveSubTabId(null);
    }
  }, [selectedCategoryId, activeCategory]);

  const activeSubTab = activeCategory?.subTabs?.find(tab => tab.id === activeSubTabId);
  const displayItems = activeCategory
    ? (activeSubTab ? activeSubTab.items : activeCategory.subcategories)
    : [];

  const isGlass = menuVariant === "glass";

  // Shared class sets so the two variants stay readable.
  // Glass = smoky liquid glass (see .liquid-glass* in globals.css); Classic = unchanged studio look.
  const chip = isGlass
    ? "liquid-glass liquid-glass-hover text-white"
    : "bg-white hover:bg-white border border-[#DDD6CA] shadow-2xs";
  const socialChip = isGlass
    ? "liquid-glass text-white hover:bg-[#C13828]"
    : "bg-white hover:bg-[#C13828] hover:text-white border border-[#DDD6CA] shadow-2xs text-[#C13828]";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP: Soft dimmed overlay on remaining 1/4 of screen & page */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className={`fixed inset-0 z-[140] cursor-pointer transition-colors duration-300 ${
              isGlass ? "bg-black/30" : "bg-black/35 backdrop-blur-xs"
            }`}
            aria-label="Close navigation overlay"
          />

          {/* 3/4 SCREEN DRAWER: EITHER CLASSIC STUDIO OR LIQUID GLASS */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className={`fixed left-0 top-0 bottom-0 z-[141] h-[100dvh] w-[88vw] sm:w-[78vw] lg:w-[75vw] overflow-hidden flex flex-col select-none transition-all duration-300 ${
              isGlass
                ? "liquid-glass-panel text-white"
                : "bg-[#F8F5F0] border-r border-[#E4DFD6] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            }`}
          >
            {/* Soft diagonal sheen across the glass sheet */}
            {isGlass && (
              <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_38%,rgba(255,255,255,0)_70%,rgba(255,255,255,0.05)_100%)]" />
            )}

            {/* =========================================================================
                1. TOP HEADER BAR: Glass header + Centered YOODE Logo + Variant Toggle + Close Button
            ========================================================================= */}
            <div className={`w-full h-14 sm:h-16 flex items-center justify-between px-3.5 sm:px-6 lg:px-8 relative z-30 shrink-0 transition-all duration-300 ${
              isGlass
                ? "border-b border-white/10"
                : "border-b border-[#E4DFD6] bg-[#F8F5F0]"
            }`}>

              {/* THEME VARIANT TOGGLE (Classic Studio vs Liquid Glass) — a glass dock like the reference */}
              <div className={`flex items-center p-1 rounded-full transition-all duration-300 ${
                isGlass
                  ? "liquid-glass"
                  : "bg-black/[0.06] border border-[#DDD6CA] shadow-inner backdrop-blur-xl"
              }`}>
                <button
                  type="button"
                  onClick={() => toggleVariant("classic")}
                  className={`relative flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    !isGlass
                      ? "bg-[#111827] text-white shadow-md"
                      : "text-white/70 hover:text-white"
                  }`}
                  title="Switch to Classic Studio layout"
                >
                  <Layers size={13} strokeWidth={2.4} />
                  <span>Classic</span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleVariant("glass")}
                  className={`relative flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isGlass
                      ? "liquid-glass-inset text-white"
                      : "text-[#111827] hover:text-[#C13828] hover:bg-white/40"
                  }`}
                  title="Switch to Liquid Glass layout"
                >
                  <Sparkles size={13} strokeWidth={2.4} className={isGlass ? "text-xmas-gold" : ""} />
                  <span>Glass</span>
                </button>
              </div>

              {/* Centered YOODE Brand Title */}
              <div className={`font-black text-2xl md:text-3xl tracking-wider uppercase ${
                isGlass ? "text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]" : "text-[#C13828] drop-shadow-[0_2px_8px_rgba(193,56,40,0.2)]"
              }`}>
                <span>YOODE</span>
              </div>

              {/* Right Close Button */}
              <button
                onClick={onClose}
                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-all cursor-pointer focus:outline-none hover:scale-105 ${
                  isGlass
                    ? "liquid-glass liquid-glass-hover text-white"
                    : "bg-white hover:bg-white border border-[#DDD6CA] shadow-2xs text-[#C13828]"
                }`}
                aria-label="Close navigation menu"
              >
                <X size={20} strokeWidth={2.4} />
              </button>
            </div>

            {/* =========================================================================
                2. MAIN CANVAS: SPLIT VIEW (Desktop: 38/62, Mobile: Drill-down)
            ========================================================================= */}
            <div className="flex-1 w-full flex flex-col lg:flex-row overflow-hidden relative z-20">

              {/* LEFT: CATEGORIES LIST */}
              <div
                className={`w-full lg:w-[42%] xl:w-[38%] px-4 sm:px-6 lg:px-8 py-4 flex-col justify-start lg:justify-center overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden transition-all duration-300 ${
                  isGlass
                    ? "border-r border-white/10"
                    : "bg-[#F3EFE8] border-r border-[#DDD6CA]"
                } ${
                  mobileView === "categories" ? "flex" : "hidden lg:flex"
                }`}
              >
                <div className="flex flex-col gap-1 sm:gap-1.5 my-auto lg:my-0">
                  {YOODE_MENU_DATA.map((cat) => {
                    const isSelected = cat.id === selectedCategoryId;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategoryId(cat.id);
                          setMobileView("products");
                        }}
                        onMouseEnter={() => setSelectedCategoryId(cat.id)}
                        className={`group w-full flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? isGlass
                              ? "liquid-glass text-white"
                              : "bg-white text-[#C13828] shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-[#DDD6CA] rounded-xl"
                            : isGlass
                              ? "text-white/70 hover:text-white hover:bg-white/[0.06] border border-transparent"
                              : "text-[#111827] hover:text-[#C13828] hover:bg-white/60 border border-transparent rounded-xl"
                        }`}
                      >
                        <span
                          className={`font-black uppercase tracking-[-0.02em] transition-all duration-150 leading-tight ${
                            isSelected
                              ? `text-base sm:text-lg md:text-xl lg:text-[1.35rem] xl:text-[1.5rem] ${isGlass ? "text-white" : "text-[#C13828]"}`
                              : `text-sm sm:text-base md:text-lg lg:text-xl ${isGlass ? "text-white/70 group-hover:text-white" : "text-[#111827] group-hover:text-[#C13828]"}`
                          }`}
                        >
                          {cat.label}
                        </span>

                        {/* Chevron: Points right when selected */}
                        {cat.hasChevron && (
                          <ChevronRight
                            size={isSelected ? 18 : 16}
                            strokeWidth={isSelected ? 3 : 2}
                            className={`shrink-0 transition-all duration-200 ml-2 ${
                              isSelected
                                ? `${isGlass ? "text-xmas-gold" : "text-[#C13828]"} translate-x-1`
                                : isGlass
                                  ? "opacity-40 text-white group-hover:opacity-100"
                                  : "opacity-40 text-[#111827] group-hover:opacity-100 group-hover:text-[#C13828]"
                            }`}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT: PRODUCT GRID (Desktop: 62%, Mobile: Dedicated Full View) */}
              <div
                className={`w-full lg:w-[58%] xl:w-[62%] px-4 sm:px-6 lg:px-8 py-3 sm:py-5 flex-col overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden relative transition-all duration-300 ${
                  isGlass ? "" : "bg-[#ECE7DE]"
                } ${
                  mobileView === "products" ? "flex flex-1" : "hidden lg:flex"
                }`}
              >

                <motion.div
                  key={`${activeCategory.id}-${menuVariant}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex flex-col h-full"
                >
                  {/* MOBILE TOP BAR (Back to Categories Button + Active Category Header) */}
                  <div className={`flex lg:hidden items-center justify-between pb-2.5 mb-2.5 border-b shrink-0 ${isGlass ? "border-white/10" : "border-black/[0.06]"}`}>
                    <button
                      onClick={() => setMobileView("categories")}
                      className={`flex items-center gap-1.5 text-xs font-black uppercase py-1.5 px-3 rounded-full cursor-pointer active:scale-95 transition-transform ${
                        isGlass ? "liquid-glass text-white" : "bg-white border border-[#DDD6CA] shadow-2xs text-[#C13828]"
                      }`}
                    >
                      <ChevronLeft size={16} strokeWidth={2.5} />
                      <span>Categories</span>
                    </button>
                    <div className="flex items-center gap-1.5">
                      <span className={`text-xs font-black uppercase tracking-wider ${isGlass ? "text-white" : "text-[#111827]"}`}>
                        {activeCategory.label}
                      </span>
                      <span className={`text-[11px] font-bold ${isGlass ? "text-white/55" : "text-[#6B7280]"}`}>
                        ({displayItems.length})
                      </span>
                    </div>
                  </div>

                  {/* DESKTOP CONTEXT HEADER */}
                  <div className={`hidden lg:flex items-center justify-between pb-3 mb-4 border-b shrink-0 ${isGlass ? "border-white/10" : "border-black/[0.06]"}`}>
                    <div className="flex items-center gap-2.5">
                      <span className={`text-xs sm:text-sm font-black uppercase tracking-widest ${isGlass ? "text-white" : "text-[#C13828]"}`}>
                        {activeCategory.label}
                      </span>
                      <span className={`text-[10px] sm:text-[11px] font-black px-2.5 py-0.5 rounded-full ${
                        isGlass ? "liquid-glass text-white/85" : "bg-white border border-[#DDD6CA] shadow-2xs text-[#111827]"
                      }`}>
                        {displayItems.length} Options
                      </span>
                    </div>
                    {activeCategory.subTabs && (
                      <span className={`text-[10px] font-black uppercase tracking-wider ${isGlass ? "text-white/55" : "text-[#4B5563]"}`}>
                        Filter by Group
                      </span>
                    )}
                  </div>

                  {/* Sub-tabs (glass: one dock with a pressed-in active tab) */}
                  {activeCategory.subTabs && activeCategory.subTabs.length > 0 && (
                    <div className={`flex items-center gap-1.5 mb-3 lg:mb-5 overflow-x-auto scrollbar-none shrink-0 ${
                      isGlass ? "liquid-glass self-start rounded-full p-1" : "gap-2 pb-2"
                    }`}>
                      {activeCategory.subTabs.map((tab) => {
                        const isTabActive = activeSubTabId === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveSubTabId(tab.id)}
                            className={`relative text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3.5 sm:px-4 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                              isGlass
                                ? isTabActive
                                  ? "liquid-glass-inset text-white"
                                  : "text-white/65 hover:text-white"
                                : isTabActive
                                  ? "bg-[#C13828] text-white shadow-sm border border-[#C13828]"
                                  : "bg-white text-[#111827] border border-[#DDD6CA] hover:bg-white shadow-2xs"
                            }`}
                          >
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* PRODUCT / SERVICE GRID */}
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 pt-2 pb-8 items-stretch justify-items-center">
                    {displayItems.map((item, idx) => {
                      const Graphic = item.GraphicComponent;

                      return (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={onClose}
                          className={`group relative w-full flex flex-col items-center p-3 sm:p-4 transition-all duration-300 cursor-pointer overflow-hidden ${
                            isGlass
                              ? "liquid-glass liquid-glass-hover rounded-[22px] sm:rounded-[28px] hover:-translate-y-1"
                              : "rounded-2xl sm:rounded-3xl bg-white hover:bg-white border border-[#DDD6CA] shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(193,56,40,0.12)] hover:border-[#C13828] hover:-translate-y-1"
                          }`}
                        >
                          {/* PRODUCT IMAGE STAGE (glass: a soft light well so products read on the smoky glass) */}
                          <div className={`w-full h-36 sm:h-44 flex items-center justify-center p-2 rounded-xl sm:rounded-2xl transition-all relative overflow-hidden ${
                            isGlass
                              ? "bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,255,255,0.22),rgba(255,255,255,0.06)_70%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-12px_24px_rgba(0,0,0,0.12)]"
                              : "bg-[#FAF7F2] border border-black/[0.04]"
                          }`}>
                            {item.imageColor ? (
                              <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-2">
                                <img loading="lazy" decoding="async"
                                  src={item.imageColor}
                                  alt={item.title}
                                  className="w-full h-full object-contain filter drop-shadow-[0_10px_18px_rgba(0,0,0,0.14)] group-hover:scale-105 group-hover:drop-shadow-[0_14px_24px_rgba(0,0,0,0.20)] transition-all duration-300"
                                />
                              </div>
                            ) : item.imageGrey ? (
                              <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-2">
                                <img loading="lazy" decoding="async"
                                  src={item.imageGrey}
                                  alt={item.title}
                                  className="w-full h-full object-contain filter drop-shadow-[0_8px_14px_rgba(0,0,0,0.10)] group-hover:scale-105 transition-all duration-300"
                                />
                              </div>
                            ) : Graphic ? (
                              <div className="w-full h-full flex items-center justify-center p-1 sm:p-2 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_8px_14px_rgba(0,0,0,0.10)]">
                                <Graphic />
                              </div>
                            ) : null}
                          </div>

                          {/* TITLE, BADGE, PRICE / SUBTITLE */}
                          <div className="w-full mt-3 sm:mt-3.5 flex flex-col items-center justify-center gap-1.5 text-center">
                            <span className={`text-xs sm:text-sm font-black tracking-tight transition-colors leading-tight line-clamp-1 ${
                              isGlass ? "text-white" : "text-[#0F172A] group-hover:text-[#C13828]"
                            }`}>
                              {item.title}
                            </span>

                            <div className="flex items-center justify-center gap-1 sm:gap-1.5 flex-wrap">
                              {item.badge && (
                                <span className={`px-2 py-0.5 text-[8px] sm:text-[9px] font-black uppercase tracking-wider rounded-full transition-colors ${
                                  isGlass
                                    ? "liquid-glass-inset text-white/90"
                                    : "bg-[#0F172A] text-white group-hover:bg-[#C13828] shadow-2xs"
                                }`}>
                                  {item.badge}
                                </span>
                              )}
                              {item.price ? (
                                <span className={`text-[10px] sm:text-xs font-black ${isGlass ? "text-xmas-gold" : "text-[#C13828]"}`}>
                                  {item.price}
                                </span>
                              ) : item.subtitle ? (
                                <span className={`text-[10px] sm:text-xs font-bold ${isGlass ? "text-white/60" : "text-[#4B5563]"}`}>
                                  {item.subtitle}
                                </span>
                              ) : null}
                            </div>
                          </div>

                          {/* ACTION ICON PILL */}
                          <div className={`mt-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                            isGlass
                              ? "liquid-glass text-white group-hover:bg-[#C13828]"
                              : "bg-[#111827] text-white group-hover:bg-[#C13828] shadow-sm"
                          }`}>
                            <ShoppingBag size={13} strokeWidth={2.4} />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>

              </div>

            </div>

            {/* =========================================================================
                3. FOOTER BAR: Secondary Links + Socials + Legal
            ========================================================================= */}
            <div className={`w-full shrink-0 px-4 sm:px-6 lg:px-8 py-3 flex-col lg:flex-row items-center justify-between gap-2.5 relative z-30 transition-all duration-300 ${
              isGlass
                ? "border-t border-white/10"
                : "border-t border-[#E4DFD6] bg-[#F8F5F0]"
            } ${
              mobileView === "products" ? "hidden lg:flex" : "flex"
            }`}>

              {/* Left Footer: Secondary Links + Copyright */}
              <div className="w-full lg:w-1/2 flex flex-col gap-1.5">
                <div className={`flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1.5 text-[10px] sm:text-xs font-bold tracking-wide ${isGlass ? "text-white" : "text-[#C13828]"}`}>
                  {[
                    { href: "/#account", icon: UserPlus, label: "LOGIN/REGISTER" },
                    { href: "/#track", icon: Truck, label: "TRACK ORDER" },
                    { href: "/#returns", icon: RefreshCcw, label: "RETURNS" },
                    { href: "/#help", icon: HelpCircle, label: "HELP" },
                  ].map(({ href, icon: Icon, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={onClose}
                      className={`flex items-center gap-1.5 px-2.5 py-1 transition-all ${isGlass ? "rounded-full" : "rounded-lg"} ${chip}`}
                    >
                      <Icon size={13} strokeWidth={2.5} />
                      <span className="uppercase">{label}</span>
                    </Link>
                  ))}
                </div>
                <div className={`text-[10px] sm:text-[11px] font-bold ${isGlass ? "text-white/55" : "text-[#1F2937]"}`}>
                  © 2026 Yoode. All rights reserved.
                </div>
              </div>

              {/* Right Footer: Connect Socials + Legal Terms */}
              <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end gap-1.5">
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] sm:text-[11px] font-black uppercase tracking-wider ${isGlass ? "text-white/70" : "text-[#C13828]"}`}>
                    CONNECT
                  </span>
                  <div className="flex items-center gap-1.5">
                    {[
                      { href: "https://facebook.com", Icon: FacebookIcon },
                      { href: "https://twitter.com", Icon: TwitterIcon },
                      { href: "https://instagram.com", Icon: InstagramIcon },
                      { href: "https://youtube.com", Icon: YoutubeIcon },
                    ].map(({ href, Icon }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-7 h-7 flex items-center justify-center rounded-full hover:scale-110 transition-transform ${socialChip}`}
                      >
                        <Icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className={`flex items-center gap-3 text-[10px] sm:text-[11px] font-bold ${isGlass ? "text-white/55" : "text-[#374151]"}`}>
                  <Link href="/#privacy" onClick={onClose} className={`transition-colors ${isGlass ? "hover:text-white" : "hover:text-[#C13828]"}`}>Privacy Policy</Link>
                  <span>•</span>
                  <Link href="/#terms" onClick={onClose} className={`transition-colors ${isGlass ? "hover:text-white" : "hover:text-[#C13828]"}`}>Terms of Service</Link>
                  <span>•</span>
                  <Link href="/#cookies" onClick={onClose} className={`transition-colors ${isGlass ? "hover:text-white" : "hover:text-[#C13828]"}`}>Cookies Settings</Link>
                </div>
              </div>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
