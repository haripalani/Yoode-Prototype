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
        imageGrey: "/menu/polo-grey.png",
        imageColor: "/menu/polo-color.png",
        GraphicComponent: CADGraphics.PoloShirt 
      },
      { 
        title: "Sportswear", 
        href: "/custom-sports-jerseys", 
        price: "From ₹599",
        badge: "PRO FIT",
        imageGrey: "/menu/cricket-jersey-grey.png",
        imageColor: "/menu/cricket-jersey-color.png",
        GraphicComponent: CADGraphics.CricketJersey 
      },
      { 
        title: "Trendz", 
        href: "/trenz", 
        price: "From ₹699",
        badge: "OVERSIZED",
        imageGrey: "/menu/oversized-tee-grey.png",
        imageColor: "/menu/oversized-tee-color.png",
        GraphicComponent: CADGraphics.OversizedTee 
      },
      { 
        title: "Streetwear", 
        href: "/hoodies-sweatshirts-jackets", 
        price: "From ₹1,299",
        badge: "NEW SEASON",
        imageGrey: "/menu/hoodie-grey.png",
        imageColor: "/menu/hoodie-color.png",
        GraphicComponent: CADGraphics.Hoodie 
      },
      { 
        title: "Accessories", 
        href: "/accessories", 
        price: "From ₹349",
        badge: "PREMIUM",
        imageGrey: "/menu/cap-embroidered-grey.png",
        imageColor: "/menu/cap-embroidered-color.png",
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
        imageGrey: "/menu/tshirt-grey.png",
        imageColor: "/menu/tshirt-color.png",
        GraphicComponent: CADGraphics.TShirt 
      },
      { 
        title: "Men's Polo Shirt", 
        href: "/polos", 
        price: "From ₹549",
        badge: "PREMIUM",
        imageGrey: "/menu/polo-grey.png",
        imageColor: "/menu/polo-color.png",
        GraphicComponent: CADGraphics.PoloShirt 
      },
      { 
        title: "Men's Oversized T Shirt", 
        href: "/trenz", 
        price: "From ₹699",
        badge: "TRENDING",
        imageGrey: "/menu/oversized-tee-grey.png",
        imageColor: "/menu/oversized-tee-color.png",
        GraphicComponent: CADGraphics.OversizedTee 
      },
      { 
        title: "Men's Full Sleeve T Shirt", 
        href: "/t-shirts", 
        price: "From ₹499",
        badge: "CLASSIC",
        imageGrey: "/menu/fullsleeve-tee-grey.png",
        imageColor: "/menu/fullsleeve-tee-color.png",
        GraphicComponent: CADGraphics.FullSleeveTee 
      },
      { 
        title: "Men's Hoodies & Sweatshirts", 
        href: "/hoodies-sweatshirts-jackets", 
        price: "From ₹1,199",
        badge: "WINTER TECH",
        imageGrey: "/menu/hoodie-grey.png",
        imageColor: "/menu/hoodie-color.png",
        GraphicComponent: CADGraphics.Hoodie 
      },
      { 
        title: "Men's Jackets", 
        href: "/hoodies-sweatshirts-jackets", 
        price: "From ₹1,899",
        badge: "RACING SPEC",
        imageGrey: "/menu/jacket-grey.png",
        imageColor: "/menu/jacket-color.png",
        GraphicComponent: CADGraphics.Jacket 
      },
    ],
    subTabs: [
      {
        id: "mens",
        label: "Men's Clothing",
        items: [
          { title: "Men's T Shirt", href: "/t-shirts", price: "From ₹399", badge: "ESSENTIAL", imageGrey: "/menu/tshirt-grey.png", imageColor: "/menu/tshirt-color.png", GraphicComponent: CADGraphics.TShirt },
          { title: "Men's Polo Shirt", href: "/polos", price: "From ₹549", badge: "PREMIUM", imageGrey: "/menu/polo-grey.png", imageColor: "/menu/polo-color.png", GraphicComponent: CADGraphics.PoloShirt },
          { title: "Men's Oversized T Shirt", href: "/trenz", price: "From ₹699", badge: "TRENDING", imageGrey: "/menu/oversized-tee-grey.png", imageColor: "/menu/oversized-tee-color.png", GraphicComponent: CADGraphics.OversizedTee },
          { title: "Men's Full Sleeve T Shirt", href: "/t-shirts", price: "From ₹499", badge: "CLASSIC", imageGrey: "/menu/fullsleeve-tee-grey.png", imageColor: "/menu/fullsleeve-tee-color.png", GraphicComponent: CADGraphics.FullSleeveTee },
          { title: "Men's Hoodies & Sweatshirts", href: "/hoodies-sweatshirts-jackets", price: "From ₹1,199", badge: "WINTER TECH", imageGrey: "/menu/hoodie-grey.png", imageColor: "/menu/hoodie-color.png", GraphicComponent: CADGraphics.Hoodie },
          { title: "Men's Jackets", href: "/hoodies-sweatshirts-jackets", price: "From ₹1,899", badge: "RACING SPEC", imageGrey: "/menu/jacket-grey.png", imageColor: "/menu/jacket-color.png", GraphicComponent: CADGraphics.Jacket },
        ]
      },
      {
        id: "womens",
        label: "Women's Clothing",
        items: [
          { title: "Women's T Shirt", href: "/t-shirts", price: "From ₹399", badge: "ESSENTIAL", imageGrey: "/menu/tshirt-grey.png", imageColor: "/menu/tshirt-color.png", GraphicComponent: CADGraphics.TShirt },
          { title: "Women's Polo Shirt", href: "/polos", price: "From ₹549", badge: "PREMIUM", imageGrey: "/menu/polo-grey.png", imageColor: "/menu/polo-color.png", GraphicComponent: CADGraphics.PoloShirt },
          { title: "Women's Oversized T Shirt", href: "/trenz", price: "From ₹699", badge: "TRENDING", imageGrey: "/menu/oversized-tee-grey.png", imageColor: "/menu/oversized-tee-color.png", GraphicComponent: CADGraphics.OversizedTee },
          { title: "Women's Full Sleeve T Shirt", href: "/t-shirts", price: "From ₹499", badge: "CLASSIC", imageGrey: "/menu/fullsleeve-tee-grey.png", imageColor: "/menu/fullsleeve-tee-color.png", GraphicComponent: CADGraphics.FullSleeveTee },
          { title: "Women's Hoodies & Sweatshirts", href: "/hoodies-sweatshirts-jackets", price: "From ₹1,199", badge: "WINTER TECH", imageGrey: "/menu/hoodie-grey.png", imageColor: "/menu/hoodie-color.png", GraphicComponent: CADGraphics.Hoodie },
          { title: "Women's Jackets", href: "/hoodies-sweatshirts-jackets", price: "From ₹1,899", badge: "RACING SPEC", imageGrey: "/menu/jacket-grey.png", imageColor: "/menu/jacket-color.png", GraphicComponent: CADGraphics.Jacket },
        ]
      },
      {
        id: "kids",
        label: "Kid's Clothing",
        items: [
          { title: "Kid's T Shirt", href: "/t-shirts", price: "From ₹349", badge: "ORGANIC", imageGrey: "/menu/tshirt-grey.png", imageColor: "/menu/tshirt-color.png", GraphicComponent: CADGraphics.TShirt },
          { title: "Kid's Polo Shirt", href: "/polos", price: "From ₹499", badge: "JUNIOR", imageGrey: "/menu/polo-grey.png", imageColor: "/menu/polo-color.png", GraphicComponent: CADGraphics.PoloShirt },
          { title: "Kid's Oversized T Shirt", href: "/trenz", price: "From ₹549", badge: "PLAY WEAR", imageGrey: "/menu/oversized-tee-grey.png", imageColor: "/menu/oversized-tee-color.png", GraphicComponent: CADGraphics.OversizedTee },
          { title: "Kid's Full Sleeve T Shirt", href: "/t-shirts", price: "From ₹449", badge: "COMFORT", imageGrey: "/menu/fullsleeve-tee-grey.png", imageColor: "/menu/fullsleeve-tee-color.png", GraphicComponent: CADGraphics.FullSleeveTee },
          { title: "Kids's Hoodies & Sweatshirts", href: "/hoodies-sweatshirts-jackets", price: "From ₹899", badge: "WARMTH", imageGrey: "/menu/hoodie-grey.png", imageColor: "/menu/hoodie-color.png", GraphicComponent: CADGraphics.Hoodie },
          { title: "Kid's Jackets", href: "/hoodies-sweatshirts-jackets", price: "From ₹1,299", badge: "WEATHERPROOF", imageGrey: "/menu/jacket-grey.png", imageColor: "/menu/jacket-color.png", GraphicComponent: CADGraphics.Jacket },
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
        imageGrey: "/menu/cricket-jersey-grey.png",
        imageColor: "/menu/cricket-jersey-color.png",
        GraphicComponent: CADGraphics.CricketJersey 
      },
      { 
        title: "Football Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "PRO EDITION",
        imageGrey: "/menu/football-jersey-grey.png",
        imageColor: "/menu/football-jersey-color.png",
        GraphicComponent: CADGraphics.FootballJersey 
      },
      { 
        title: "Basketball Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "COURT FIT",
        imageGrey: "/menu/basketball-jersey-grey.png",
        imageColor: "/menu/basketball-jersey-color.png",
        GraphicComponent: CADGraphics.BasketballJersey 
      },
      { 
        title: "Badminton Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "FLEX DRY",
        imageGrey: "/menu/badminton-jersey-grey.png",
        imageColor: "/menu/badminton-jersey-color.png",
        GraphicComponent: CADGraphics.BadmintonJersey 
      },
      { 
        title: "Volleyball Jersey", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "ACTIVE",
        imageGrey: "/menu/volleyball-jersey-grey.png",
        imageColor: "/menu/volleyball-jersey-color.png",
        GraphicComponent: CADGraphics.VolleyballJersey 
      },
      { 
        title: "Cycling Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "AERO FIT",
        imageGrey: "/menu/cycling-jersey-grey.png",
        imageColor: "/menu/cycling-jersey-color.png",
        GraphicComponent: CADGraphics.CyclingJersey 
      },
      { 
        title: "Running Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "LIGHTWEIGHT",
        imageGrey: "/menu/running-jersey-grey.png",
        imageColor: "/menu/running-jersey-color.png",
        GraphicComponent: CADGraphics.RunningJersey 
      },
      { 
        title: "Esport Jerseys", 
        href: "/custom-sports-jerseys", 
        price: "Custom Kit",
        badge: "PRO GAMER",
        imageGrey: "/menu/esports-jersey-grey.png",
        imageColor: "/menu/esports-jersey-color.png",
        GraphicComponent: CADGraphics.EsportsJersey 
      },
    ],
    subTabs: [
      {
        id: "shop-by-sports",
        label: "Shop By Sports",
        items: [
          { title: "Cricket Jerseys", href: "/custom-cricket-jerseys", price: "Custom Kit", badge: "MATCHDAY", imageGrey: "/menu/cricket-jersey-grey.png", imageColor: "/menu/cricket-jersey-color.png", GraphicComponent: CADGraphics.CricketJersey },
          { title: "Football Jerseys", href: "/custom-sports-jerseys", price: "Custom Kit", badge: "PRO EDITION", imageGrey: "/menu/football-jersey-grey.png", imageColor: "/menu/football-jersey-color.png", GraphicComponent: CADGraphics.FootballJersey },
          { title: "Basketball Jerseys", href: "/custom-sports-jerseys", price: "Custom Kit", badge: "COURT FIT", imageGrey: "/menu/basketball-jersey-grey.png", imageColor: "/menu/basketball-jersey-color.png", GraphicComponent: CADGraphics.BasketballJersey },
          { title: "Badminton Jerseys", href: "/custom-sports-jerseys", price: "Custom Kit", badge: "FLEX DRY", imageGrey: "/menu/badminton-jersey-grey.png", imageColor: "/menu/badminton-jersey-color.png", GraphicComponent: CADGraphics.BadmintonJersey },
          { title: "Volleyball Jersey", href: "/custom-sports-jerseys", price: "Custom Kit", badge: "ACTIVE", imageGrey: "/menu/volleyball-jersey-grey.png", imageColor: "/menu/volleyball-jersey-color.png", GraphicComponent: CADGraphics.VolleyballJersey },
          { title: "Cycling Jerseys", href: "/custom-sports-jerseys", price: "Custom Kit", badge: "AERO FIT", imageGrey: "/menu/cycling-jersey-grey.png", imageColor: "/menu/cycling-jersey-color.png", GraphicComponent: CADGraphics.CyclingJersey },
          { title: "Running Jerseys", href: "/custom-sports-jerseys", price: "Custom Kit", badge: "LIGHTWEIGHT", imageGrey: "/menu/running-jersey-grey.png", imageColor: "/menu/running-jersey-color.png", GraphicComponent: CADGraphics.RunningJersey },
          { title: "Esport Jerseys", href: "/custom-sports-jerseys", price: "Custom Kit", badge: "PRO GAMER", imageGrey: "/menu/esports-jersey-grey.png", imageColor: "/menu/esports-jersey-color.png", GraphicComponent: CADGraphics.EsportsJersey },
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
        imageGrey: "/menu/polo-grey.png",
        imageColor: "/menu/polo-color.png",
        GraphicComponent: CADGraphics.PoloShirt 
      },
      { 
        title: "Custom Drinkware", 
        href: "/category?type=drinkware", 
        price: "Laser Engraved",
        badge: "ECO TECH",
        imageGrey: "/menu/drinkware-grey.png",
        imageColor: "/menu/drinkware-color.png",
        GraphicComponent: CADGraphics.Drinkware 
      },
      { 
        title: "Bags & Travel", 
        href: "/accessories", 
        price: "Embroidered",
        badge: "TRAVEL READY",
        imageGrey: "/menu/backpack-grey.png",
        imageColor: "/menu/backpack-color.png",
        GraphicComponent: CADGraphics.Accessories 
      },
      { 
        title: "Corporate Gift Hampers", 
        href: "/stationery-gifting-drinkware", 
        price: "Curated Set",
        badge: "VIP SUITE",
        imageGrey: "/menu/gift-hamper-grey.png",
        imageColor: "/menu/gift-hamper-color.png",
        GraphicComponent: CADGraphics.GiftHamper 
      },
      { 
        title: "Promotional Products", 
        href: "/stationery-gifting-drinkware", 
        price: "Quick Ship",
        badge: "EVENT READY",
        imageGrey: "/menu/promo-products-grey.png",
        imageColor: "/menu/promo-products-color.png",
        GraphicComponent: CADGraphics.PromoProducts 
      },
      { 
        title: "Eco-friendly Gifts", 
        href: "/stationery-gifting-drinkware", 
        price: "Sustainable",
        badge: "GREEN CHOICE",
        imageGrey: "/menu/eco-gifts-grey.png",
        imageColor: "/menu/eco-gifts-color.png",
        GraphicComponent: CADGraphics.EcoGifts 
      },
    ],
    subTabs: [
      {
        id: "by-product",
        label: "By Product",
        items: [
          { title: "Corporate Apparel", href: "/category?type=corporate-apparel", price: "Bulk Pricing", badge: "OFFICE", imageGrey: "/menu/polo-grey.png", imageColor: "/menu/polo-color.png", GraphicComponent: CADGraphics.PoloShirt },
          { title: "Custom Drinkware", href: "/category?type=drinkware", price: "Laser Engraved", badge: "ECO TECH", imageGrey: "/menu/drinkware-grey.png", imageColor: "/menu/drinkware-color.png", GraphicComponent: CADGraphics.Drinkware },
          { title: "Bags & Travel", href: "/accessories", price: "Embroidered", badge: "TRAVEL READY", imageGrey: "/menu/backpack-grey.png", imageColor: "/menu/backpack-color.png", GraphicComponent: CADGraphics.Accessories },
          { title: "Corporate Gift Hampers", href: "/stationery-gifting-drinkware", price: "Curated Set", badge: "VIP SUITE", imageGrey: "/menu/gift-hamper-grey.png", imageColor: "/menu/gift-hamper-color.png", GraphicComponent: CADGraphics.GiftHamper },
          { title: "Promotional Products", href: "/stationery-gifting-drinkware", price: "Quick Ship", badge: "EVENT READY", imageGrey: "/menu/promo-products-grey.png", imageColor: "/menu/promo-products-color.png", GraphicComponent: CADGraphics.PromoProducts },
          { title: "Eco-friendly Gifts", href: "/stationery-gifting-drinkware", price: "Sustainable", badge: "GREEN CHOICE", imageGrey: "/menu/eco-gifts-grey.png", imageColor: "/menu/eco-gifts-color.png", GraphicComponent: CADGraphics.EcoGifts },
        ]
      },
      {
        id: "by-occasion",
        label: "By Occasion",
        items: [
          { title: "Employee Welcome Kits", href: "/stationery-gifting-drinkware", price: "Custom Box", badge: "ONBOARDING", imageGrey: "/menu/gift-hamper-grey.png", imageColor: "/menu/gift-hamper-color.png", GraphicComponent: CADGraphics.GiftHamper },
          { title: "Employee Appreciation Gifts", href: "/stationery-gifting-drinkware", price: "Custom Crest", badge: "REWARD", imageGrey: "/menu/promo-products-grey.png", imageColor: "/menu/promo-products-color.png", GraphicComponent: CADGraphics.PromoProducts },
          { title: "Work Anniversary Gifts", href: "/stationery-gifting-drinkware", price: "Milestone", badge: "HONOR", imageGrey: "/menu/drinkware-grey.png", imageColor: "/menu/drinkware-color.png", GraphicComponent: CADGraphics.Drinkware },
          { title: "Corporate Event Gifts", href: "/stationery-gifting-drinkware", price: "Engraved", badge: "SUMMIT", imageGrey: "/menu/promo-products-grey.png", imageColor: "/menu/promo-products-color.png", GraphicComponent: CADGraphics.PromoProducts },
        ]
      },
      {
        id: "by-festival",
        label: "By Festival",
        items: [
          { title: "Diwali Corporate Gifts", href: "/stationery-gifting-drinkware", price: "Festive Box", badge: "FESTIVE", imageGrey: "/menu/gift-hamper-grey.png", imageColor: "/menu/gift-hamper-color.png", GraphicComponent: CADGraphics.GiftHamper },
          { title: "Christmas Corporate Gifts", href: "/stationery-gifting-drinkware", price: "Winter Hamper", badge: "HOLIDAY", imageGrey: "/menu/gift-hamper-grey.png", imageColor: "/menu/gift-hamper-color.png", GraphicComponent: CADGraphics.GiftHamper },
          { title: "New Year Corporate Gifts", href: "/stationery-gifting-drinkware", price: "2026 Set", badge: "NEW YEAR", imageGrey: "/menu/gift-hamper-grey.png", imageColor: "/menu/gift-hamper-color.png", GraphicComponent: CADGraphics.GiftHamper },
          { title: "Pongal Corporate Gifts", href: "/stationery-gifting-drinkware", price: "Traditional Box", badge: "HARVEST", imageGrey: "/menu/gift-hamper-grey.png", imageColor: "/menu/gift-hamper-color.png", GraphicComponent: CADGraphics.GiftHamper },
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
        imageGrey: "/menu/cap-embroidered-grey.png",
        imageColor: "/menu/cap-embroidered-color.png",
        GraphicComponent: CADGraphics.EmbroideredCap 
      },
      { 
        title: "Printed Caps", 
        href: "/accessories", 
        price: "From ₹349",
        badge: "HD PRINT",
        imageGrey: "/menu/cap-printed-grey.png",
        imageColor: "/menu/cap-printed-color.png",
        GraphicComponent: CADGraphics.PrintedCap 
      },
      { 
        title: "Bucket Hats", 
        href: "/accessories", 
        price: "From ₹449",
        badge: "STREETWEAR",
        imageGrey: "/menu/bucket-hat-grey.png",
        imageColor: "/menu/bucket-hat-color.png",
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
        imageGrey: "/menu/configurator-3d-grey.png",
        imageColor: "/menu/configurator-3d-color.png",
        GraphicComponent: CADGraphics.Configurator3D 
      },
      { 
        title: "Custom Sports Kits", 
        href: "/custom-sports-jerseys", 
        price: "Team Kits",
        badge: "FULL CUSTOM",
        imageGrey: "/menu/cricket-jersey-grey.png",
        imageColor: "/menu/cricket-jersey-color.png",
        GraphicComponent: CADGraphics.CricketJersey 
      },
      { 
        title: "Custom Headwear", 
        href: "/accessories", 
        price: "Caps & Beanies",
        badge: "STUDIO PICK",
        imageGrey: "/menu/cap-embroidered-grey.png",
        imageColor: "/menu/cap-embroidered-color.png",
        GraphicComponent: CADGraphics.EmbroideredCap 
      },
      { 
        title: "Custom Streetwear", 
        href: "/trenz", 
        price: "Street Fit",
        badge: "PREMIUM DROP",
        imageGrey: "/menu/hoodie-grey.png",
        imageColor: "/menu/hoodie-color.png",
        GraphicComponent: CADGraphics.Hoodie 
      },
      { 
        title: "Custom Jackets", 
        href: "/hoodies-sweatshirts-jackets", 
        price: "Outerwear",
        badge: "BESPOKE",
        imageGrey: "/menu/jacket-grey.png",
        imageColor: "/menu/jacket-color.png",
        GraphicComponent: CADGraphics.Jacket 
      },
      { 
        title: "Bulk Swatches", 
        href: "/category?type=corporate-apparel", 
        price: "Free Swatches",
        badge: "SAMPLES",
        imageGrey: "/menu/pants-grey.png",
        imageColor: "/menu/pants-color.png",
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
      { title: "DTG Printing", href: "/dtg-printing", price: "Direct-to-Garment", badge: "NO SETUP", imageGrey: "/menu/service-dtg-grey.png", imageColor: "/menu/service-dtg-color.png", GraphicComponent: CADGraphics.DTGPrinting },
      { title: "DTF Printing", href: "/services", price: "Film Transfers", badge: "DURABLE", imageGrey: "/menu/service-dtf-grey.png", imageColor: "/menu/service-dtf-color.png", GraphicComponent: CADGraphics.DTFPrinting },
      { title: "Embroidery Digitizing", href: "/services", price: "Precision Stitch", badge: "3D PUFF", imageGrey: "/menu/service-embroidery-grey.png", imageColor: "/menu/service-embroidery-color.png", GraphicComponent: CADGraphics.EmbroideryDigitizing },
      { title: "Coloreel Digitizing", href: "/services", price: "Thread Dyeing", badge: "UNLIMITED", imageGrey: "/menu/service-coloreel-grey.png", imageColor: "/menu/service-coloreel-color.png", GraphicComponent: CADGraphics.ColoreelDigitizing },
      { title: "Screen Printing", href: "/services", price: "Bulk Quantity", badge: "ECONOMICAL", imageGrey: "/menu/service-screen-printing-grey.png", imageColor: "/menu/service-screen-printing-color.png", GraphicComponent: CADGraphics.ScreenPrinting },
      { title: "UV Printing", href: "/services", price: "Hard Surface", badge: "HD CURE", imageGrey: "/menu/service-uv-printing-grey.png", imageColor: "/menu/service-uv-printing-color.png", GraphicComponent: CADGraphics.UVPrinting },
      { title: "Laser Engraving", href: "/services", price: "Fiber Laser", badge: "PERMANENT", imageGrey: "/menu/service-engraving-grey.png", imageColor: "/menu/service-engraving-color.png", GraphicComponent: CADGraphics.LaserEngraving },
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
      { title: "Blog", href: "/blogs", price: "Style & Industry", badge: "JOURNAL", imageColor: "/categories/best_sellers.jpg", GraphicComponent: CADGraphics.BlogJournal },
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
              isGlass ? "bg-black/25 backdrop-blur-xs" : "bg-black/35 backdrop-blur-xs"
            }`}
            aria-label="Close navigation overlay"
          />

          {/* 3/4 SCREEN DRAWER: EITHER CLASSIC STUDIO OR PURE LIQUID GLASSMORPHISM */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className={`fixed left-0 top-0 bottom-0 z-[141] h-[100dvh] w-[88vw] sm:w-[78vw] lg:w-[75vw] overflow-hidden flex flex-col select-none transition-all duration-300 ${
              isGlass
                ? "bg-white/20 sm:bg-white/25 backdrop-blur-3xl backdrop-saturate-150 border-r border-white/60 shadow-[0_25px_80px_rgba(0,0,0,0.22),inset_0_1px_2px_rgba(255,255,255,0.9)]"
                : "bg-[#F8F5F0] border-r border-[#E4DFD6] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            }`}
          >
            {/* PRISMATIC AMBIENT LIGHT BLOBS (FOR AUTHENTIC LUMINOUS GLASSMORPHISM) */}
            {isGlass && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                {/* Luminous Crimson Refraction Orb */}
                <div 
                  className="absolute -top-24 -left-24 w-[34rem] h-[34rem] rounded-full bg-gradient-to-br from-[#EA3829]/28 via-[#FF6B6B]/16 to-transparent blur-[90px] animate-pulse" 
                  style={{ animationDuration: '8s' }} 
                />
                {/* Radiant Sapphire / Electric Cyan Refraction Orb */}
                <div 
                  className="absolute top-1/3 -right-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tl from-[#2563EB]/22 via-[#60A5FA]/14 to-transparent blur-[100px]" 
                />
                {/* Warm Amber / Gold Refraction Orb */}
                <div 
                  className="absolute -bottom-24 left-1/4 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-[#F59E0B]/20 via-[#FBBF24]/12 to-transparent blur-[90px]" 
                />
              </div>
            )}

            {/* Specular Top Glare Line for optical crystal edge */}
            {isGlass && (
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none z-40" />
            )}

            {/* =========================================================================
                1. TOP HEADER BAR: Frosted Glass Header + Centered YOODE Logo + Variant Toggle + Close Button
            ========================================================================= */}
            <div className={`w-full h-14 sm:h-16 flex items-center justify-between px-3.5 sm:px-6 lg:px-8 relative z-30 shrink-0 transition-all duration-300 ${
              isGlass
                ? "border-b border-white/50 bg-white/25 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                : "border-b border-[#E4DFD6] bg-[#F8F5F0]"
            }`}>
              
              {/* THEME VARIANT TOGGLE SWITCH (Classic Studio vs Liquid Glassmorphism) */}
              <div className={`flex items-center p-1 rounded-full backdrop-blur-xl transition-all duration-300 ${
                isGlass
                  ? "bg-black/[0.08] border border-white/70 shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)]"
                  : "bg-black/[0.06] border border-[#DDD6CA] shadow-inner"
              }`}>
                <button
                  type="button"
                  onClick={() => toggleVariant("classic")}
                  className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    !isGlass
                      ? "bg-[#111827] text-white shadow-md"
                      : "text-[#111827] hover:text-[#C13828] hover:bg-white/40"
                  }`}
                  title="Switch to Classic Studio layout"
                >
                  <Layers size={13} strokeWidth={2.4} />
                  <span>Classic</span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleVariant("glass")}
                  className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isGlass
                      ? "bg-gradient-to-r from-[#EA3829] to-[#C13828] text-white shadow-[0_3px_12px_rgba(234,56,41,0.4)] ring-2 ring-white/70"
                      : "text-[#111827] hover:text-[#C13828] hover:bg-white/40"
                  }`}
                  title="Switch to Liquid Glass layout"
                >
                  <Sparkles size={13} strokeWidth={2.4} className={isGlass ? "text-yellow-200 animate-pulse" : ""} />
                  <span>Glass</span>
                </button>
              </div>

              {/* Centered YOODE Brand Title */}
              <div className="text-[#C13828] font-black text-2xl md:text-3xl tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(193,56,40,0.2)]">
                <span>YOODE</span>
              </div>

              {/* Right Close Button */}
              <button 
                onClick={onClose}
                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-[#C13828] transition-all cursor-pointer focus:outline-none hover:scale-105 ${
                  isGlass
                    ? "bg-white/80 hover:bg-white border border-white shadow-sm"
                    : "bg-white hover:bg-white border border-[#DDD6CA] shadow-2xs"
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
              
              {/* LEFT: CATEGORIES LIST (100% VISIBLE, HIGH CONTRAST) */}
              <div 
                className={`w-full lg:w-[42%] xl:w-[38%] px-4 sm:px-6 lg:px-8 py-4 flex-col justify-start lg:justify-center overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden transition-all duration-300 ${
                  isGlass 
                    ? "bg-white/15 backdrop-blur-2xl border-r border-white/40" 
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
                        className={`group w-full flex items-center justify-between px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? isGlass
                              ? "bg-white/75 text-[#C13828] shadow-[0_8px_24px_rgba(193,56,40,0.16),inset_0_1.5px_2px_rgba(255,255,255,1)] border border-white"
                              : "bg-white text-[#C13828] shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-[#DDD6CA]"
                            : isGlass
                              ? "text-[#111827] hover:text-[#C13828] hover:bg-white/30 border border-transparent"
                              : "text-[#111827] hover:text-[#C13828] hover:bg-white/60 border border-transparent"
                        }`}
                      >
                        <span 
                          className={`font-black uppercase tracking-[-0.02em] transition-all duration-150 leading-tight ${
                            isSelected 
                              ? "text-base sm:text-lg md:text-xl lg:text-[1.35rem] xl:text-[1.5rem] text-[#C13828]"
                              : "text-sm sm:text-base md:text-lg lg:text-xl text-[#111827] group-hover:text-[#C13828]"
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
                                ? "text-[#C13828] translate-x-1" 
                                : "opacity-40 text-[#111827] group-hover:opacity-100 group-hover:text-[#C13828]"
                            }`}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT: FROSTED GLASS PRODUCT GRID (Desktop: 62%, Mobile: Dedicated Full View) */}
              <div 
                className={`w-full lg:w-[58%] xl:w-[62%] px-4 sm:px-6 lg:px-8 py-3 sm:py-5 flex-col overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden relative transition-all duration-300 ${
                  isGlass ? "bg-white/[0.12] backdrop-blur-xl" : "bg-[#ECE7DE]"
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
                  <div className="flex lg:hidden items-center justify-between pb-2.5 mb-2.5 border-b border-black/[0.06] shrink-0">
                    <button
                      onClick={() => setMobileView("categories")}
                      className={`flex items-center gap-1.5 text-xs font-black uppercase text-[#C13828] py-1.5 px-3 rounded-full cursor-pointer active:scale-95 transition-transform ${
                        isGlass
                          ? "bg-white/70 backdrop-blur-md border border-white shadow-2xs"
                          : "bg-white border border-[#DDD6CA] shadow-2xs"
                      }`}
                    >
                      <ChevronLeft size={16} strokeWidth={2.5} />
                      <span>Categories</span>
                    </button>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-black uppercase tracking-wider text-[#111827]">
                        {activeCategory.label}
                      </span>
                      <span className="text-[11px] font-bold text-[#6B7280]">
                        ({displayItems.length})
                      </span>
                    </div>
                  </div>

                  {/* DESKTOP CONTEXT HEADER */}
                  <div className="hidden lg:flex items-center justify-between pb-3 mb-4 border-b border-black/[0.06] shrink-0">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#C13828]">
                        {activeCategory.label}
                      </span>
                      <span className={`text-[10px] sm:text-[11px] font-black text-[#111827] px-2.5 py-0.5 rounded-full ${
                        isGlass
                          ? "bg-white/60 backdrop-blur-md border border-white shadow-2xs"
                          : "bg-white border border-[#DDD6CA] shadow-2xs"
                      }`}>
                        {displayItems.length} Options
                      </span>
                    </div>
                    {activeCategory.subTabs && (
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#4B5563]">
                        Filter by Group
                      </span>
                    )}
                  </div>

                  {/* High-Contrast Sub-tabs if any */}
                  {activeCategory.subTabs && activeCategory.subTabs.length > 0 && (
                    <div className="flex items-center gap-2 mb-3 lg:mb-5 pb-2 overflow-x-auto scrollbar-none shrink-0">
                      {activeCategory.subTabs.map((tab) => {
                        const isTabActive = activeSubTabId === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveSubTabId(tab.id)}
                            className={`text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3.5 sm:px-4 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                              isTabActive
                                ? "bg-[#C13828] text-white shadow-sm border border-[#C13828]"
                                : isGlass
                                  ? "bg-white/60 backdrop-blur-md text-[#111827] border border-white hover:bg-white shadow-2xs"
                                  : "bg-white text-[#111827] border border-[#DDD6CA] hover:bg-white shadow-2xs"
                            }`}
                          >
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* 
                    PRODUCT/SERVICE GRID (TRUE LUMINOUS GLASSMORPHISM VS CLASSIC STUDIO)
                  */}
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 pt-2 pb-8 items-stretch justify-items-center">
                    {displayItems.map((item, idx) => {
                      const Graphic = item.GraphicComponent;

                      return (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={onClose}
                          className={`group relative w-full flex flex-col items-center rounded-2xl sm:rounded-3xl p-3 sm:p-4 transition-all duration-300 cursor-pointer overflow-hidden ${
                            isGlass
                              ? "bg-white/35 hover:bg-white/60 backdrop-blur-2xl border border-white/65 hover:border-white shadow-[0_10px_30px_rgba(0,0,0,0.06),inset_0_1.5px_2px_rgba(255,255,255,0.95),inset_0_-1px_1.5px_rgba(255,255,255,0.25)] hover:shadow-[0_20px_50px_rgba(234,56,41,0.22),inset_0_2px_3px_rgba(255,255,255,1)] hover:-translate-y-1.5"
                              : "bg-white hover:bg-white border border-[#DDD6CA] shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(193,56,40,0.12)] hover:border-[#C13828] hover:-translate-y-1"
                          }`}
                        >
                          {/* Specular Top Reflection line for authentic crystal glass shine */}
                          <div className={`absolute inset-x-0 top-0 h-[2px] pointer-events-none transition-opacity ${
                            isGlass 
                              ? "bg-gradient-to-r from-transparent via-white to-transparent opacity-95" 
                              : "opacity-0"
                          }`} />

                          {/* PRODUCT IMAGE CONTAINER: Frosted Crystal Glass Stage */}
                          <div className={`w-full h-36 sm:h-44 flex items-center justify-center p-2 rounded-xl sm:rounded-2xl transition-all relative overflow-hidden ${
                            isGlass
                              ? "bg-white/30 group-hover:bg-white/50 backdrop-blur-xl border border-white/50 shadow-[inset_0_2px_8px_rgba(0,0,0,0.03),inset_0_1px_1.5px_rgba(255,255,255,0.9)]"
                              : "bg-[#FAF7F2] border border-black/[0.04]"
                          }`}>
                            {item.imageColor ? (
                              <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-2">
                                {/* Initial state & hover: Vivid Saturated Colorway CAD Asset */}
                                <img 
                                  src={item.imageColor} 
                                  alt={item.title} 
                                  className="w-full h-full object-contain filter drop-shadow-[0_10px_18px_rgba(0,0,0,0.14)] group-hover:scale-105 group-hover:drop-shadow-[0_14px_24px_rgba(0,0,0,0.20)] transition-all duration-300" 
                                />
                              </div>
                            ) : item.imageGrey ? (
                              <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-2">
                                <img 
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

                          {/* BOLD CENTERED PRODUCT TITLE & BADGE + PRICE/SUBTITLE */}
                          <div className="w-full mt-3 sm:mt-3.5 flex flex-col items-center justify-center gap-1.5 text-center">
                            <span className="text-xs sm:text-sm font-black text-[#0F172A] tracking-tight group-hover:text-[#C13828] transition-colors leading-tight line-clamp-1">
                              {item.title}
                            </span>

                            <div className="flex items-center justify-center gap-1 sm:gap-1.5 flex-wrap">
                              {item.badge && (
                                <span className="px-2 py-0.5 text-[8px] sm:text-[9px] font-black uppercase tracking-wider rounded-full bg-[#0F172A] text-white group-hover:bg-[#C13828] transition-colors shadow-2xs">
                                  {item.badge}
                                </span>
                              )}
                              {item.price ? (
                                <span className="text-[10px] sm:text-xs font-black text-[#C13828]">
                                  {item.price}
                                </span>
                              ) : item.subtitle ? (
                                <span className="text-[10px] sm:text-xs font-bold text-[#4B5563]">
                                  {item.subtitle}
                                </span>
                              ) : null}
                            </div>
                          </div>

                          {/* ACTION ICON PILL AT BOTTOM OF CARD */}
                          <div className={`mt-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm ${
                            isGlass
                              ? "bg-white/80 group-hover:bg-[#C13828] text-[#111827] group-hover:text-white border border-white"
                              : "bg-[#111827] text-white group-hover:bg-[#C13828]"
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
                3. FOOTER BAR: Clean Secondary Links + Socials + Legal
            ========================================================================= */}
            <div className={`w-full shrink-0 px-4 sm:px-6 lg:px-8 py-3 flex-col lg:flex-row items-center justify-between gap-2.5 relative z-30 transition-all duration-300 ${
              isGlass
                ? "border-t border-white/50 bg-white/25 backdrop-blur-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.03)]"
                : "border-t border-[#E4DFD6] bg-[#F8F5F0]"
            } ${
              mobileView === "products" ? "hidden lg:flex" : "flex"
            }`}>
              
              {/* Left Footer: Secondary Links + Copyright */}
              <div className="w-full lg:w-1/2 flex flex-col gap-1.5">
                <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1.5 text-[10px] sm:text-xs font-bold tracking-wide text-[#C13828]">
                  <Link 
                    href="/#account" 
                    onClick={onClose} 
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
                      isGlass
                        ? "bg-white/60 hover:bg-white/90 backdrop-blur-md border border-white/80 shadow-2xs"
                        : "bg-white hover:bg-white border border-[#DDD6CA] shadow-2xs"
                    }`}
                  >
                    <UserPlus size={13} strokeWidth={2.5} />
                    <span className="uppercase">LOGIN/REGISTER</span>
                  </Link>
                  <Link 
                    href="/#track" 
                    onClick={onClose} 
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
                      isGlass
                        ? "bg-white/60 hover:bg-white/90 backdrop-blur-md border border-white/80 shadow-2xs"
                        : "bg-white hover:bg-white border border-[#DDD6CA] shadow-2xs"
                    }`}
                  >
                    <Truck size={13} strokeWidth={2.5} />
                    <span className="uppercase">TRACK ORDER</span>
                  </Link>
                  <Link 
                    href="/#returns" 
                    onClick={onClose} 
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
                      isGlass
                        ? "bg-white/60 hover:bg-white/90 backdrop-blur-md border border-white/80 shadow-2xs"
                        : "bg-white hover:bg-white border border-[#DDD6CA] shadow-2xs"
                    }`}
                  >
                    <RefreshCcw size={13} strokeWidth={2.5} />
                    <span className="uppercase">RETURNS</span>
                  </Link>
                  <Link 
                    href="/#help" 
                    onClick={onClose} 
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
                      isGlass
                        ? "bg-white/60 hover:bg-white/90 backdrop-blur-md border border-white/80 shadow-2xs"
                        : "bg-white hover:bg-white border border-[#DDD6CA] shadow-2xs"
                    }`}
                  >
                    <HelpCircle size={13} strokeWidth={2.5} />
                    <span className="uppercase">HELP</span>
                  </Link>
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold text-[#1F2937]">
                  © 2026 Yoode. All rights reserved.
                </div>
              </div>

              {/* Right Footer: Connect Socials + Legal Terms */}
              <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end gap-1.5">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#C13828]">
                    CONNECT
                  </span>
                  <div className="flex items-center gap-1.5">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`w-7 h-7 flex items-center justify-center rounded-full text-[#C13828] hover:scale-110 transition-transform ${
                      isGlass
                        ? "bg-white/60 hover:bg-[#C13828] hover:text-white border border-white/80 shadow-2xs"
                        : "bg-white hover:bg-[#C13828] hover:text-white border border-[#DDD6CA] shadow-2xs"
                    }`}>
                      <FacebookIcon size={14} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`w-7 h-7 flex items-center justify-center rounded-full text-[#C13828] hover:scale-110 transition-transform ${
                      isGlass
                        ? "bg-white/60 hover:bg-[#C13828] hover:text-white border border-white/80 shadow-2xs"
                        : "bg-white hover:bg-[#C13828] hover:text-white border border-[#DDD6CA] shadow-2xs"
                    }`}>
                      <TwitterIcon size={14} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`w-7 h-7 flex items-center justify-center rounded-full text-[#C13828] hover:scale-110 transition-transform ${
                      isGlass
                        ? "bg-white/60 hover:bg-[#C13828] hover:text-white border border-white/80 shadow-2xs"
                        : "bg-white hover:bg-[#C13828] hover:text-white border border-[#DDD6CA] shadow-2xs"
                    }`}>
                      <InstagramIcon size={14} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={`w-7 h-7 flex items-center justify-center rounded-full text-[#C13828] hover:scale-110 transition-transform ${
                      isGlass
                        ? "bg-white/60 hover:bg-[#C13828] hover:text-white border border-white/80 shadow-2xs"
                        : "bg-white hover:bg-[#C13828] hover:text-white border border-[#DDD6CA] shadow-2xs"
                    }`}>
                      <YoutubeIcon size={14} />
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-bold text-[#374151]">
                  <Link href="/#privacy" onClick={onClose} className="hover:text-[#C13828] transition-colors">Privacy Policy</Link>
                  <span>•</span>
                  <Link href="/#terms" onClick={onClose} className="hover:text-[#C13828] transition-colors">Terms of Service</Link>
                  <span>•</span>
                  <Link href="/#cookies" onClick={onClose} className="hover:text-[#C13828] transition-colors">Cookies Settings</Link>
                </div>
              </div>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
