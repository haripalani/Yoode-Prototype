import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const categories = [
  {
    id: 1,
    title: "Custom T-shirts",
    items: "120+ Styles",
    image: "/categories/custom_tshirts.jpg",
  },
  {
    id: 2,
    title: "Custom Jersey's",
    items: "50+ Styles",
    image: "/categories/custom_sports.jpg",
  },
  {
    id: 3,
    title: "Premium Polos",
    items: "Premium Fits",
    image: "/categories/premium_polos.jpg",
  },
  {
    id: 4,
    title: "Corporate Gifting",
    items: "Curated Boxes",
    image: "/categories/corporate_gifting.jpg",
  },
  {
    id: 5,
    title: "Acessories",
    items: "20+ Styles",
    image: "/categories/accessories_group.jpg",
  },
  {
    id: 6,
    title: "Trenz",
    items: "Latest Trends",
    image: "/categories/trenz_oversized_festive.jpg",
  },
  {
    id: 7,
    title: "Hoodiess & Sweat shirts",
    items: "Cozy & Warm",
    image: "/categories/hoodies_sweatshirts.jpg",
  },
  {
    id: 8,
    title: "Explore All",
    items: "View Collection",
    image: "/categories/apparels.jpg",
  }
];

export function Categories() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white text-yoode-onyx">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subHeading="Our Collection"
          title="Find the Right Apparel for Every Need"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => {
            const inner = (
              <>
                {/* Image Container */}
                <div className="relative aspect-square md:aspect-[4/5] rounded-[20px] overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Subtle dark gradient to make text readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  </div>

                  {/* Overlay Text & Button */}
                  <div className="absolute bottom-5 inset-x-5 flex items-end justify-between z-10">
                    <div className="text-white pr-4">
                      <h3 className="font-bold text-xl md:text-[22px] leading-tight drop-shadow-md">{category.title}</h3>
                      <p className="text-xs font-medium text-white/80 drop-shadow mt-1.5 uppercase tracking-wider">{category.items}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-xl w-11 h-11 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-yoode-onyx text-white transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </>
            );

            return category.id === 8 ? (
              <a href="/category" key={category.id} className="bg-gray-50 rounded-[28px] p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer group block">
                {inner}
              </a>
            ) : (
              <div key={category.id} className="bg-gray-50 rounded-[28px] p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                {inner}
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="/category" className="flex items-center justify-center gap-2 font-bold text-sm hover:text-[#E53935] transition-colors group">
            View All Categories
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
