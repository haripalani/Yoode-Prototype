import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { MostLoved } from "@/components/MostLoved";
import { ServicePillars } from "@/components/ServicePillars";
import { ExperienceCenters } from "@/components/ExperienceCenters";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full selection:bg-yoode-onyx selection:text-white flex flex-col font-sans">
      <Header />
      <Hero />
      <TrustedBy />
      <MostLoved />
      <ServicePillars />
      <ExperienceCenters />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </div>
  );
}
