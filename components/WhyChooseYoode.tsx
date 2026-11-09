import { Award, SlidersHorizontal, Users, Printer, MapPin, Handshake } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function WhyChooseYoode() {
  return (
    <section className="py-10 px-6 md:px-12 bg-xmas-snow text-xmas-ink lg:h-[100svh] lg:min-h-[640px] lg:pt-[92px] lg:pb-6 lg:flex lg:flex-col">
      <div className="max-w-7xl mx-auto w-full lg:flex-1 lg:min-h-0 lg:flex lg:flex-col">
        {/* Header */}
        <SectionHeader
          subHeading="Why Us"
          title="Why Businesses Choose Yoode"
          description="From quality fabrics to reliable delivery, we make custom apparel simple, scalable and stress-free for your brand."
          className="mb-10 lg:mb-5 lg:max-w-3xl"
          titleClassName="lg:!text-4xl lg:!mb-2"
          descriptionClassName="text-xmas-ink/60 lg:!text-base"
        />

        {/* 6-Card Bento Grid */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-4 lg:flex-1 lg:min-h-0">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-4 w-full lg:w-1/3 h-full lg:min-h-0">
            {/* Card 1: Made to Your Specification (Short) */}
            <div className="bg-xmas-blush ring-1 ring-xmas-gold-deep/10 rounded-[32px] overflow-hidden flex flex-col group relative min-h-[300px] lg:min-h-0 lg:flex-[4]">
              <div className="p-6 md:p-8 lg:p-5 xl:p-6 z-10 relative">
                <h3 className="text-xl md:text-2xl lg:text-lg xl:text-xl font-display font-bold mb-3 lg:mb-1.5 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 rounded-full bg-white/80 backdrop-blur text-xmas-red flex shrink-0 items-center justify-center shadow-sm ring-1 ring-xmas-gold-deep/25">
                    <SlidersHorizontal className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  Made to Your Specification
                </h3>
                <p className="text-xmas-ink/70 font-medium leading-relaxed text-sm md:text-base lg:text-[13px] xl:text-sm">
                  Choose your fabric, colour, size, print and embroidery — we bring your vision to life.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 p-6 lg:p-4 pt-0 lg:pt-0">
                  <img 
                    src="/why/Specification.png" 
                    alt="Specifications" 
                    className="w-full h-full object-contain object-bottom mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Premium Quality (Tall) */}
            <div className="bg-xmas-frost ring-1 ring-xmas-gold-deep/10 rounded-[32px] overflow-hidden flex flex-col group relative min-h-[350px] lg:min-h-0 lg:flex-[6]">
              <div className="p-6 md:p-8 lg:p-5 xl:p-6 z-10 relative">
                <h3 className="text-xl md:text-2xl lg:text-lg xl:text-xl font-display font-bold mb-3 lg:mb-1.5 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 rounded-full bg-white/80 backdrop-blur text-xmas-red flex shrink-0 items-center justify-center shadow-sm ring-1 ring-xmas-gold-deep/25">
                    <Award className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  Premium Quality
                </h3>
                <p className="text-xmas-ink/70 font-medium leading-relaxed text-sm md:text-base lg:text-[13px] xl:text-sm">
                  High-grade fabrics, durable prints and professional finishing for a lasting impression.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 p-6 lg:p-4 pt-0 lg:pt-0">
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
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-4 w-full lg:w-1/3 h-full lg:min-h-0">
            {/* Card 3: Built for Bulk (Tall) */}
            <div className="bg-xmas-parchment ring-1 ring-xmas-gold-deep/10 rounded-[32px] overflow-hidden flex flex-col group relative min-h-[350px] lg:min-h-0 lg:flex-[6]">
              <div className="p-6 md:p-8 lg:p-5 xl:p-6 z-10 relative">
                <h3 className="text-xl md:text-2xl lg:text-lg xl:text-xl font-display font-bold mb-3 lg:mb-1.5 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 rounded-full bg-white/80 backdrop-blur text-xmas-red flex shrink-0 items-center justify-center shadow-sm ring-1 ring-xmas-gold-deep/25">
                    <Users className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  Built for Bulk
                </h3>
                <p className="text-xmas-ink/70 font-medium leading-relaxed text-sm md:text-base lg:text-[13px] xl:text-sm">
                  From small teams to large enterprises, we handle orders of any size.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 p-6 lg:p-4 pt-0 lg:pt-0">
                  <img 
                    src="/why/Bulk.png" 
                    alt="Built for Bulk" 
                    className="w-full h-full object-contain object-bottom mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>

            {/* Card 4: Endless Options (Short) */}
            <div className="bg-xmas-blush ring-1 ring-xmas-gold-deep/10 rounded-[32px] overflow-hidden flex flex-col group relative min-h-[300px] lg:min-h-0 lg:flex-[4]">
              <div className="p-6 md:p-8 lg:p-5 xl:p-6 z-10 relative">
                <h3 className="text-xl md:text-2xl lg:text-lg xl:text-xl font-display font-bold mb-3 lg:mb-1.5 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 rounded-full bg-white/80 backdrop-blur text-xmas-red flex shrink-0 items-center justify-center shadow-sm ring-1 ring-xmas-gold-deep/25">
                    <Printer className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  Endless Options
                </h3>
                <p className="text-xmas-ink/70 font-medium leading-relaxed text-sm md:text-base lg:text-[13px] xl:text-sm">
                  DTF, DTG, Embroidery, and Coloreel. The right solution for every design.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 p-6 lg:p-4 pt-0 lg:pt-0">
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
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-4 w-full lg:w-1/3 h-full lg:min-h-0">
            {/* Card 5: Pan-India Reach (Tall) */}
            <div className="bg-xmas-frost ring-1 ring-xmas-gold-deep/10 rounded-[32px] overflow-hidden flex flex-col group relative min-h-[350px] lg:min-h-0 lg:flex-[6]">
              <div className="p-6 md:p-8 lg:p-5 xl:p-6 z-10 relative">
                <h3 className="text-xl md:text-2xl lg:text-lg xl:text-xl font-display font-bold mb-3 lg:mb-1.5 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 rounded-full bg-white/80 backdrop-blur text-xmas-red flex shrink-0 items-center justify-center shadow-sm ring-1 ring-xmas-gold-deep/25">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  Pan-India Reach
                </h3>
                <p className="text-xmas-ink/70 font-medium leading-relaxed text-sm md:text-base lg:text-[13px] xl:text-sm">
                  We deliver and support your orders across major cities, with a strong presence in key locations.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 p-6 lg:p-4 pt-0 lg:pt-0">
                  <img 
                    src="/why/Pan-india.png" 
                    alt="Pan-India Reach" 
                    className="w-full h-full object-contain object-bottom mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>

            {/* Card 6: Support (Short) */}
            <div className="bg-xmas-parchment ring-1 ring-xmas-gold-deep/10 rounded-[32px] overflow-hidden flex flex-col justify-start group relative min-h-[300px] lg:min-h-0 lg:flex-[4]">
              <div className="p-6 md:p-8 lg:p-5 xl:p-6 z-10 relative max-w-[60%] md:max-w-[65%]">
                <h3 className="text-xl md:text-2xl lg:text-lg xl:text-xl font-display font-bold mb-3 lg:mb-1.5 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 rounded-full bg-white/80 backdrop-blur text-xmas-red flex shrink-0 items-center justify-center shadow-sm ring-1 ring-xmas-gold-deep/25">
                    <Handshake className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  Support
                </h3>
                <p className="text-xmas-ink/70 font-medium leading-relaxed text-sm md:text-base lg:text-[13px] xl:text-sm">
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
