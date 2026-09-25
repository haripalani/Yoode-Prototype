import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturesBar } from "@/components/FeaturesBar";
import { TrustedBy } from "@/components/TrustedBy";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { WhyChooseYoode } from "@/components/WhyChooseYoode";
import { ServicePillars } from "@/components/ServicePillars";
import { Process } from "@/components/Process";
import { MostLoved } from "@/components/MostLoved";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { AboutYoode } from "@/components/AboutYoode";
import { ExperienceCenters } from "@/components/ExperienceCenters";
import { Blogs } from "@/components/Blogs";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { PromoModal } from "@/components/PromoModal";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full selection:bg-yoode-onyx selection:text-white flex flex-col font-sans">
      <PromoModal />
      <Header />
      <Hero />
      <TrustedBy />
      <FeaturedCategories />
      <WhyChooseYoode />
      <FeaturesBar />
      <ServicePillars />
      <Process />
      <MostLoved />
      <Testimonials />
      <Faq />
      <AboutYoode />
      <ExperienceCenters />
      <Blogs />
      <CtaBanner />
      <Footer />
    </div>
  );
}
