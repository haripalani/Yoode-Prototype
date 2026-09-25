"use client";

import { 
  ArrowUpRight, ArrowRight, ShieldCheck, Cpu, Users, Leaf, MapPin 
} from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Quality Always",         desc: "Premium fabrics, lasting comfort and professional finishing." },
  { icon: Cpu,         title: "Innovation in Printing", desc: "Advanced technology for vibrant, durable and precise results." },
  { icon: Users,       title: "Customer First",         desc: "Your vision, our priority from design to delivery." },
  { icon: Leaf,        title: "Sustainable Choices",    desc: "Thoughtful processes for a better tomorrow." },
  { icon: MapPin,      title: "Built for India",        desc: "Serving businesses, teams and creators across the country." },
];

export function AboutYoode() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-white text-black font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Top Card (Yellow) */}
          <div className="col-span-12 bg-[#F9F579] rounded-[40px] p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden">
            <div className="flex flex-col items-start max-w-xl shrink-0">
              <div className="bg-white/80 rounded-full px-5 py-2 text-xs font-bold mb-8">
                About Yoode
              </div>
              
              <h2 className="text-4xl md:text-[3.25rem] font-medium tracking-tight leading-[1.05] mb-6">
                More Than Apparel.<br/>We Are Your Customization Partner.
              </h2>
              
              <p className="text-sm font-medium opacity-75 mb-10 leading-relaxed max-w-md">
                At Yoode, we help individuals, teams and businesses bring their ideas to life
                through high-quality, custom apparel and merchandise. We combine premium fabrics, advanced printing
                technology and a customer-first approach.
              </p>
              
              <button className="bg-black text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-4 text-sm font-bold group hover:bg-gray-800 transition-colors shadow-lg">
                Discover more
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-105">
                  <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
                </div>
              </button>
            </div>
            
            {/* Top Card Images */}
            <div className="flex justify-center gap-3 md:gap-4 shrink-0 w-full sm:w-auto sm:h-[380px] mt-4 md:mt-0">
              {/* Column 1 (2 images) */}
              <div className="flex flex-col gap-3 md:gap-4 w-[120px] lg:w-[180px] hidden md:flex">
                <img 
                  src="/womens-tshirt.jpg" 
                  alt="Womens T-shirt" 
                  className="w-full h-[180px] object-cover rounded-[24px] md:rounded-[32px] shadow-sm shrink-0" 
                />
                <img 
                  src="/mens-polo.jpg" 
                  alt="Mens Polo" 
                  className="w-full flex-1 min-h-0 object-cover rounded-[24px] md:rounded-[32px] shadow-sm" 
                />
              </div>

              {/* Column 2 (1 large image) */}
              <img 
                src="/polo-jersey.jpg" 
                alt="Polo Jersey" 
                className="w-full max-w-[280px] aspect-square sm:aspect-auto sm:max-w-none sm:w-[160px] lg:w-[260px] sm:h-full min-h-0 object-cover rounded-[24px] md:rounded-[32px] shadow-sm shrink-0" 
              />

              {/* Column 3 (2 images) */}
              <div className="flex flex-col gap-3 md:gap-4 w-[120px] lg:w-[180px] hidden sm:flex">
                <img 
                  src="/gift-box.jpg" 
                  alt="Gift Box" 
                  className="w-full flex-1 min-h-0 object-cover rounded-[24px] md:rounded-[32px] shadow-sm" 
                />
                <img 
                  src="/denim-jacket.jpg" 
                  alt="Denim Jacket" 
                  className="w-full h-[160px] object-cover rounded-[24px] md:rounded-[32px] shadow-sm shrink-0" 
                />
              </div>
            </div>
          </div>

          {/* Bottom Left Card (Black) */}
          <div className="col-span-12 md:col-span-5 bg-[#0F0F0F] rounded-[40px] p-6 md:p-8 flex flex-col">
            <h3 className="text-white text-xl md:text-2xl font-medium leading-snug mb-8 px-2">
              From Premium Fabrics to Professional Finishing, These Are the Details That Matter.
            </h3>
            
            <div className="relative rounded-[32px] overflow-hidden flex-1 min-h-[280px]">
              <img 
                src="/gift-box.jpg" 
                alt="Details" 
                className="absolute inset-0 w-full h-full object-cover opacity-80" 
              />
              <div className="absolute inset-0 bg-black/10" />
              
              {/* Floating Pills */}
              <div className="absolute top-[25%] left-[10%] bg-white/95 backdrop-blur shadow-lg text-black font-bold text-xs px-5 py-2 rounded-full transform -rotate-2">
                Quality Always
              </div>
              <div className="absolute top-[55%] right-[10%] bg-white/95 backdrop-blur shadow-lg text-black font-bold text-xs px-5 py-2 rounded-full transform rotate-2">
                Innovation
              </div>
              <div className="absolute bottom-[15%] left-[20%] bg-white/95 backdrop-blur shadow-lg text-black font-bold text-xs px-5 py-2 rounded-full transform -rotate-1">
                Customer First
              </div>
            </div>
          </div>

          {/* Bottom Right Card (Yellow) */}
          <div className="col-span-12 md:col-span-7 bg-[#F9F579] rounded-[40px] p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-[2.75rem] font-medium leading-[1.05] tracking-tight mb-6 max-w-[85%]">
                Discover the Highlights of Yoode in Action.
              </h3>
              <p className="text-sm font-medium opacity-75 leading-relaxed max-w-[85%]">
                From everyday wear to large-scale corporate orders, we deliver apparel that makes an impact. 
                Built for India, serving businesses, teams and creators across the country with thoughtful processes for a better tomorrow.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-between items-end mt-12 gap-6">
              <div className="flex flex-col gap-1">
                <div className="text-4xl md:text-5xl font-medium tracking-tight">10,000+</div>
                <div className="text-[13px] font-bold opacity-60 uppercase tracking-wide">Orders Delivered</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-4xl md:text-5xl font-medium tracking-tight">50+</div>
                <div className="text-[13px] font-bold opacity-60 uppercase tracking-wide">Colours Available</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-4xl md:text-5xl font-medium tracking-tight">Pan-India</div>
                <div className="text-[13px] font-bold opacity-60 uppercase tracking-wide">Service Network</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-4xl md:text-5xl font-medium tracking-tight">500+</div>
                <div className="text-[13px] font-bold opacity-60 uppercase tracking-wide">Happy Customers</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Full-Width Card (Yellow) for Values & CTA */}
        <div className="col-span-12 bg-[#F9F579] rounded-[40px] p-8 md:p-10 flex flex-col xl:flex-row gap-10 mt-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[2px] bg-black/10" />
              <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-black/60">Our Values</span>
              <span className="w-8 h-[2px] bg-black/10" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2 shrink-0 shadow-sm">
                      <Icon className="w-[20px] h-[20px] text-black" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-[14px] leading-snug text-black">{val.title}</h4>
                    <p className="text-[13px] text-black/70 leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="xl:w-[300px] shrink-0 bg-white rounded-[32px] p-8 flex flex-col justify-between gap-6 shadow-sm">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#E53935] mb-3">Ready to Get Started?</p>
              <h3 className="text-[24px] font-black leading-[1.15] tracking-tight text-black">
                Let us create<br />something custom.
              </h3>
            </div>
            <button className="flex items-center justify-between bg-black text-white text-[14px] font-bold px-6 py-4 rounded-2xl hover:bg-gray-800 transition-colors duration-200 group w-full">
              Get a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
