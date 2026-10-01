import re

with open('app/custom-cricket-jerseys/page.tsx', 'r') as f:
    content = f.read()

# Add new lucide-react imports
if "Columns" not in content:
    content = content.replace("import { ArrowUpRight, Star, Factory, PackageOpen, LayoutTemplate, PenTool, CheckCircle2 } from 'lucide-react';", 
                              "import { ArrowUpRight, Star, Factory, PackageOpen, LayoutTemplate, PenTool, CheckCircle2, Columns, Printer, Layers, Box, Truck } from 'lucide-react';")

new_section = """          {/* 2. Why Teams Choose Yoode Component (Cricket Focused) */}
          <section className="pt-16 md:pt-24 pb-12 w-full flex flex-col items-center bg-[#FAF9F6]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
              
              <div className="flex flex-col items-center text-center w-full mx-auto mb-12 md:mb-16">
                <div className="flex justify-center items-center gap-4 text-[#EA580C] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3">
                  Yoode Quality
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black uppercase text-yoode-onyx mb-4 tracking-tight">
                  WHY TEAMS CHOOSE YOODE FOR CRICKET KITS
                </h2>
                <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
                  Experience the perfect blend of premium breathable fabrics, unlimited design freedom, and reliable production for your club or academy.
                </p>
              </div>
              
              {/* Main Grid: 4 columns on large screens */}
              <div className="flex flex-col xl:flex-row gap-6 items-stretch">
                
                {/* Left Side: 3x2 Grid of Feature Cards */}
                <div className="w-full xl:w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <PenTool className="w-5 h-5 text-gray-700" />,
                      title: "INDIVIDUAL NAMES & NUMBERS",
                      desc: "Keep your team's on-field look professional while giving every player their own name and number printed seamlessly into the jersey."
                    },
                    {
                      icon: <Columns className="w-5 h-5 text-gray-700" />,
                      title: "MATCH, PRACTICE & TRAVEL",
                      desc: "Create coordinated coloured match-day jerseys, training whites, and travel polos for the entire club."
                    },
                    {
                      icon: <Printer className="w-5 h-5 text-gray-700" />,
                      title: "JUNIOR TO SENIOR SIZES",
                      desc: "Outfit the entire academy in one order, with sizes ranging from youth players up to adult 5XL."
                    },
                    {
                      icon: <Layers className="w-5 h-5 text-gray-700" />,
                      title: "FULL SUBLIMATION PRINTING",
                      desc: "Your club crest, sponsor logos, and team colours are printed directly into the fabric—they will never fade, peel, or weigh you down."
                    },
                    {
                      icon: <Box className="w-5 h-5 text-gray-700" />,
                      title: "FREE 24-HOUR MOCKUP",
                      desc: "See a free, realistic mockup of your custom cricket kit before you commit. We don't start production until you approve the design."
                    },
                    {
                      icon: <Truck className="w-5 h-5 text-gray-700" />,
                      title: "DISPATCH IN ~4 DAYS",
                      desc: "Our own factory allows us to manufacture and dispatch your team's kits across India in just a few days."
                    }
                  ].map((feat, idx) => (
                    <div key={idx} className="bg-white rounded-[24px] p-6 lg:p-8 flex flex-col border border-gray-100 shadow-sm">
                      <div className="w-12 h-12 bg-gray-50 rounded-[14px] border border-gray-100 flex items-center justify-center mb-6 shadow-sm">
                        {feat.icon}
                      </div>
                      <h3 className="text-[13px] md:text-[14px] font-black uppercase text-yoode-onyx mb-3 tracking-wide leading-snug">
                        {feat.title}
                      </h3>
                      <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Right Side: Tall CTA Card */}
                <div className="w-full xl:w-[25%] bg-[#1A1A1A] rounded-[24px] p-3 flex flex-col group">
                  <div className="relative w-full h-[250px] xl:h-[55%] rounded-[18px] bg-gray-200 shrink-0 overflow-hidden">
                    <img 
                      src="https://yoode.com/cdn/shop/files/yd-seo-banner-custom-jersey-team.png?v=1789121863&width=800" 
                      alt="Build your cricket kit" 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 object-center"
                    />
                  </div>
                  <div className="px-5 pt-6 pb-5 flex flex-col flex-1 relative">
                    <h3 className="text-white font-bold text-[15px] uppercase tracking-wide mb-3 leading-tight">
                      READY TO KIT OUT YOUR CLUB?
                    </h3>
                    <p className="text-white/50 text-[12px] leading-relaxed font-medium">
                      Planning jerseys for your team, academy, club or tournament? Work with Yoode as your official kitting partner and get your team looking sharp.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>"""

old_section_pattern = re.compile(r'\{\/\*\s*2\.\s*Why Teams Choose Yoode Component[^\}]*\*\/\}.*?</section>', re.DOTALL)
content = old_section_pattern.sub(new_section, content)

with open('app/custom-cricket-jerseys/page.tsx', 'w') as f:
    f.write(content)

