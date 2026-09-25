import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function AboutYoode() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white text-yoode-onyx">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <div className="aspect-square md:aspect-[4/3] rounded-[32px] bg-gray-100 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
            <img src="/gift-box.jpg" alt="About Yoode" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <SectionHeader
            subHeading="Our Story"
            title="About Yoode"
            description={
              <>
                We are India's leading platform for premium customizable apparel and corporate gifting. 
                Our mission is to empower brands, teams, and individuals with high-quality, custom-made 
                products that leave a lasting impression.
              </>
            }
            align="left"
            className="mb-4"
          />
          <button className="flex items-center gap-2 font-bold text-sm bg-yoode-onyx text-white w-max px-6 py-3 rounded-full hover:bg-yoode-onyx/90 transition-colors">
            Read Our Story <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
