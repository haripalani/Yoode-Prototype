import { Award, SlidersHorizontal, Users, Printer, MapPin, Handshake } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function WhyChooseYoode() {
  return (
    <section className="py-10 px-6 md:px-12 bg-white text-yoode-onyx">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          subHeading="Why Us"
          title="Why Businesses Choose Yoode"
          description="From quality fabrics to reliable delivery, we make custom apparel simple, scalable and stress-free for your brand."
          className="mb-10"
        />

        {/* 6-Card Bento Grid */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:h-[750px] xl:h-[850px]">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-1/3 h-full">
            {/* Card 1: Made to Your Specification (Short) */}
            <div className="bg-[#EBEBEB] rounded-[32px] overflow-hidden flex flex-col group relative min-h-[300px] lg:min-h-0 lg:flex-[4]">
              <div className="p-6 md:p-8 z-10 relative">
                <h3 className="text-xl md:text-2xl font-display font-bold mb-3 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur text-yoode-onyx flex shrink-0 items-center justify-center shadow-sm">
                    <SlidersHorizontal className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  Made to Your Specification
                </h3>
                <p className="text-yoode-onyx/70 font-medium leading-relaxed text-sm md:text-base">
                  Choose your fabric, colour, size, print and embroidery — we bring your vision to life.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 p-6 pt-0">
                  <img 
                    src="/why/Specification.png" 
                    alt="Specifications" 
                    className="w-full h-full object-contain object-bottom mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Premium Quality (Tall) */}
            <div className="bg-[#EBEBEB] rounded-[32px] overflow-hidden flex flex-col group relative min-h-[350px] lg:min-h-0 lg:flex-[6]">
              <div className="p-6 md:p-8 z-10 relative">
                <h3 className="text-xl md:text-2xl font-display font-bold mb-3 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur text-yoode-onyx flex shrink-0 items-center justify-center shadow-sm">
                    <Award className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  Premium Quality
                </h3>
                <p className="text-yoode-onyx/70 font-medium leading-relaxed text-sm md:text-base">
                  High-grade fabrics, durable prints and professional finishing for a lasting impression.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 p-6 pt-0">
                  <img 
                    src="/why/Premium.png" 
                    alt="Premium Quality" 
                    className="w-full h-full object-contain object-bottom mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-1/3 h-full">
            {/* Card 3: Built for Bulk (Tall) */}
            <div className="bg-[#EBEBEB] rounded-[32px] overflow-hidden flex flex-col group relative min-h-[350px] lg:min-h-0 lg:flex-[6]">
              <div className="p-6 md:p-8 z-10 relative">
                <h3 className="text-xl md:text-2xl font-display font-bold mb-3 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur text-yoode-onyx flex shrink-0 items-center justify-center shadow-sm">
                    <Users className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  Built for Bulk
                </h3>
                <p className="text-yoode-onyx/70 font-medium leading-relaxed text-sm md:text-base">
                  From small teams to large enterprises, we handle orders of any size.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 p-6 pt-0">
                  <img 
                    src="/why/Bulk.png" 
                    alt="Built for Bulk" 
                    className="w-full h-full object-contain object-bottom mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>

            {/* Card 4: Endless Options (Short) */}
            <div className="bg-[#EBEBEB] rounded-[32px] overflow-hidden flex flex-col group relative min-h-[300px] lg:min-h-0 lg:flex-[4]">
              <div className="p-6 md:p-8 z-10 relative">
                <h3 className="text-xl md:text-2xl font-display font-bold mb-3 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur text-yoode-onyx flex shrink-0 items-center justify-center shadow-sm">
                    <Printer className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  Endless Options
                </h3>
                <p className="text-yoode-onyx/70 font-medium leading-relaxed text-sm md:text-base">
                  DTF, DTG, Embroidery, and Coloreel. The right solution for every design.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 p-6 pt-0">
                  <img 
                    src="/why/Endless%20options.png" 
                    alt="Endless Options" 
                    className="w-full h-full object-contain object-bottom mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-1/3 h-full">
            {/* Card 5: Pan-India Reach (Tall) */}
            <div className="bg-[#EBEBEB] rounded-[32px] overflow-hidden flex flex-col group relative min-h-[350px] lg:min-h-0 lg:flex-[6]">
              <div className="p-6 md:p-8 z-10 relative">
                <h3 className="text-xl md:text-2xl font-display font-bold mb-3 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur text-yoode-onyx flex shrink-0 items-center justify-center shadow-sm">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  Pan-India Reach
                </h3>
                <p className="text-yoode-onyx/70 font-medium leading-relaxed text-sm md:text-base">
                  We deliver and support your orders across major cities, with a strong presence in key locations.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 p-6 pt-0">
                  <img 
                    src="/why/Pan-india.png" 
                    alt="Pan-India Reach" 
                    className="w-full h-full object-contain object-bottom mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>

            {/* Card 6: Support (Short) */}
            <div className="bg-[#EBEBEB] rounded-[32px] overflow-hidden flex flex-col justify-start group relative min-h-[300px] lg:min-h-0 lg:flex-[4]">
              <div className="p-6 md:p-8 z-10 relative max-w-[60%] md:max-w-[65%]">
                <h3 className="text-xl md:text-2xl font-display font-bold mb-3 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur text-yoode-onyx flex shrink-0 items-center justify-center shadow-sm">
                    <Handshake className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  Support
                </h3>
                <p className="text-yoode-onyx/70 font-medium leading-relaxed text-sm md:text-base">
                  From consultation to delivery, our team is with you at every step.
                </p>
              </div>
              
              <img 
                src="/why/Support.png" 
                alt="Dedicated Support" 
                className="absolute bottom-0 right-[-15%] md:right-[-10%] h-[90%] md:h-[80%] w-auto object-contain object-right-bottom mix-blend-multiply group-hover:scale-105 transition-transform duration-700 origin-bottom-right z-0 pointer-events-none" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
