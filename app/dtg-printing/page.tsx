import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PromoModal } from "@/components/PromoModal";
import { DtgClient } from "@/components/dtg/DtgClient";

export const metadata = {
  title: "DTG Printing Services for Custom T-Shirts | Yoode",
  description:
    "Explore DTG printing at Yoode for custom T-shirts and apparel. Share your artwork, choose garments and request a quote for direct-to-garment printing in India.",
};

export default function DtgPrintingPage() {
  return (
    <div className="relative min-h-screen w-full selection:bg-[#1352e9] selection:text-white flex flex-col font-sans overflow-x-clip">
      <PromoModal />
      <Header />
      <main className="flex-1 pt-[74px] md:pt-[80px]">
        <DtgClient />
      </main>
      <Footer />
    </div>
  );
}
