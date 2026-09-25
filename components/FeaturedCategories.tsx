import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const categories = [
  {
    id: 1,
    title: "CUSTOM\nT-SHIRTS",
    image: "/categories/custom_tshirts.jpg",
  },
  {
    id: 2,
    title: "CUSTOM\nJERSEY'S",
    image: "/categories/custom_sports.jpg",
  },
  {
    id: 3,
    title: "PREMIUM\nPOLOS",
    image: "/categories/premium_polos.jpg",
  },
  {
    id: 4,
    title: "CORPORATE\nGIFTING",
    image: "/categories/corporate_gifting.jpg",
  },
  {
    id: 5,
    title: "ACCESSORIES",
    image: "/categories/accessories_group.jpg",
  },
  {
    id: 6,
    title: "TRENZ",
    image: "/categories/trenz_oversized_festive.jpg",
  },
  {
    id: 7,
    title: "HOODIES &\nSWEAT SHIRTS",
    image: "/categories/hoodies_sweatshirts.jpg",
  },
  {
    id: 8,
    title: "EXPLORE\nALL",
    image: "/categories/apparels.jpg",
  }
];

export function FeaturedCategories() {
  return (
    <section className="w-full bg-[#FAF9F6] relative z-40 pb-16 md:pb-24 pt-4 md:pt-8">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          subHeading="Our Collection"
          title="Explore Our Collections"
          description="Discover the perfect fit for your style, from everyday staples to premium corporate wear."
          className="mb-10"
        />
        
        {/* Changed to 4 columns to reduce height and fit 8 items */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.id === 8 ? "/category" : "#"}
              className="group relative block aspect-square md:aspect-[4/5] overflow-hidden bg-gray-200 rounded-lg"
            >
              <Image
                src={category.image}
                alt={category.title.replace("\n", " ")}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {category.id === 8 ? (
                <>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4">
                    <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight text-white drop-shadow-lg whitespace-pre-line text-center">
                      {category.title}
                    </h3>
                    <div className="mt-6 bg-white/20 backdrop-blur-md rounded-full w-12 h-12 flex flex-shrink-0 items-center justify-center group-hover:bg-white group-hover:text-yoode-onyx text-white transition-all duration-300">
                      <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 flex items-end justify-between z-10">
                    <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl leading-[0.95] tracking-tight text-white drop-shadow-md whitespace-pre-line text-left">
                      {category.title}
                    </h3>
                    
                    <div className="bg-white/20 backdrop-blur-md rounded-full w-10 h-10 sm:w-11 sm:h-11 flex flex-shrink-0 items-center justify-center group-hover:bg-white group-hover:text-yoode-onyx text-white transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
