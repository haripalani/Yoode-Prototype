import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesClient } from "./ServicesClient";

export const metadata = {
  title: "Our Services – Yoode | Seven Ways to Put Your Mark on Anything",
  description:
    "Seven ways to put your mark on anything you can wear, carry or gift. DTG, DTF, Embroidery, Coloreel, Screen Printing, UV Printing and Engraving — Yoode, India.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-clip">
      <Header />
      <main className="flex-1">
        <ServicesClient />
      </main>
      <Footer />
    </div>
  );
}
