import { MapPin, ArrowUpRight } from "lucide-react";

const locations = [
  {
    city: "Trivandrum",
    address: "Ground Floor, CloudQ Towers, Service Rd, near Technopark Campus Phase 1, Kazhakkoottam, Kerala 695582",
    hours: "Mon–Sat · 10am–7pm",
    open: true,
  },
  {
    city: "Bangalore",
    address: "Ground Floor, #68 Transpade Tower, Jyoti Nivas College Rd, Koramangala 5th Block, Bengaluru, Karnataka 560095",
    hours: "Mon–Sat · 10am–7pm",
    open: true,
  },
  {
    city: "Marthandam",
    address: "1st Floor, Adhesh Tower, Eraviputhoorkadai, Marthandam, Tamil Nadu 629155",
    hours: "Mon–Sat · 10am–7pm",
    open: true,
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
            <div key={loc.city} className="bg-yoode-offwhite rounded-3xl p-6 md:p-8 flex flex-col h-full border border-yoode-onyx/5">
              <div className="flex items-start justify-between mb-8">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-yoode-forest">
                  <MapPin size={24} />
                </div>
                {loc.open ? (
                  <span className="bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full">
                    Open Now
                  </span>
                ) : (
                  <span className="bg-gray-200 text-gray-600 text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full">
                    Upcoming
                  </span>
                )}
              </div>
              
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
          ))}
        </div>
      </div>
    </section>
  );
}
