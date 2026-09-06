import { MapPin, ArrowUpRight } from "lucide-react";

const locations = [
  {
    city: "Trivandrum",
    address: "Ground Floor, CloudQ Towers, Service Rd, near Technopark Campus Phase 1, Kazhakkoottam, Kerala 695582",
    hours: "Mon–Sat · 10am–7pm",
    open: true,
    image: "/Thiruvananthapuram_Store.webp"
  },
  {
    city: "Bangalore",
    address: "Ground Floor, #68 Transpade Tower, Jyoti Nivas College Rd, Koramangala 5th Block, Bengaluru, Karnataka 560095",
    hours: "Mon–Sat · 10am–7pm",
    open: true,
    image: "/Bangalore_store.webp"
  },
  {
    city: "Marthandam",
    address: "1st Floor, Adhesh Tower, Eraviputhoorkadai, Marthandam, Tamil Nadu 629155",
    hours: "Mon–Sat · 10am–7pm",
    open: true,
    image: "/Marthandam_Store.webp"
  },
  {
    city: "Chennai",
    address: "Hub details & upcoming bookings. Opening Soon.",
    hours: "Stay tuned",
    open: false,
  },
];

export function ExperienceCenters() {
  return (
    <section id="studios" className="py-24 px-6 md:px-12 bg-white text-yoode-onyx">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight">Experience Centres</h2>
            <p className="text-yoode-onyx/70 mt-4 text-lg max-w-xl">
              See it. Touch it. Make it yours. Visit our physical design labs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc) => (
            <div key={loc.city} className="bg-yoode-offwhite rounded-3xl flex flex-col h-full border border-yoode-onyx/5 overflow-hidden group">
              {/* Image Header */}
              <div className="relative h-48 w-full bg-[#f3f4f6] overflow-hidden">
                {loc.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={loc.image} alt={loc.city} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-yoode-onyx/40 font-bold tracking-widest uppercase text-sm">
                    Coming Soon
                  </div>
                )}
                
                {/* Floating Map Pin */}
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md p-2.5 rounded-xl shadow-sm text-yoode-forest">
                  <MapPin size={20} />
                </div>

                {/* Floating Status Pill */}
                <div className="absolute top-4 right-4 z-10">
                  {loc.open ? (
                    <span className="bg-green-100/90 backdrop-blur-md text-green-800 text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full shadow-sm">
                      Open Now
                    </span>
                  ) : (
                    <span className="bg-gray-200/90 backdrop-blur-md text-gray-600 text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full shadow-sm">
                      Upcoming
                    </span>
                  )}
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-display font-bold mb-3">{loc.city}</h3>
                <p className="text-sm text-yoode-onyx/70 leading-relaxed flex-1">
                  {loc.address}
                </p>
                
                <div className="mt-8 pt-6 border-t border-yoode-onyx/10 flex flex-col gap-4">
                  <p className="text-xs font-bold text-yoode-onyx/50 uppercase tracking-widest">{loc.hours}</p>
                  <button 
                    disabled={!loc.open}
                    className="flex items-center justify-between w-full bg-white border border-yoode-onyx/10 text-yoode-onyx py-3 px-4 rounded-xl text-sm font-bold hover:bg-yoode-onyx hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-yoode-onyx disabled:cursor-not-allowed cursor-pointer"
                  >
                    Get Directions <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
