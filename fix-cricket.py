import re

with open('app/custom-cricket-jerseys/page.tsx', 'r') as f:
    content = f.read()

# Add ExperienceCenters import
if "import { ExperienceCenters }" not in content:
    content = content.replace("import { CustomJerseysCtaLight } from '@/components/CustomJerseysCtaLight';", "import { CustomJerseysCtaLight } from '@/components/CustomJerseysCtaLight';\nimport { ExperienceCenters } from '@/components/ExperienceCenters';")

# The replacement block
new_container = """        {/* 2. OVERLAPPING CONTAINER */}
        <div className="relative z-40 bg-[#FAF9F6] rounded-t-[40px] md:rounded-t-[60px] -mt-12 md:-mt-20 w-full shadow-[0_-10px_40px_rgba(0,0,0,0.03)] flex flex-col">
          
          {/* 1. Value Pillars styled like Yoode's Dark Pillars */}
          <section className="bg-white rounded-t-[40px] md:rounded-t-[60px] w-full py-16 px-6 md:px-12 border-b border-gray-100">
            <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'NO MINIMUM ORDER', desc: '1 piece or 500', icon: <PackageOpen className="w-5 h-5"/> },
                { title: 'FREE 24-HR MOCKUP', desc: 'Real designer', icon: <PenTool className="w-5 h-5"/> },
                { title: '4-DAY DISPATCH', desc: 'Pan-India', icon: <CheckCircle2 className="w-5 h-5"/> },
                { title: 'OWN FACTORY', desc: 'Factory-direct pricing', icon: <Factory className="w-5 h-5"/> },
              ].map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-orange-50 text-[#EA580C] flex items-center justify-center mb-4">
                    {p.icon}
                  </div>
                  <h3 className="font-black text-sm text-yoode-onyx mb-1">{p.title}</h3>
                  <p className="text-gray-500 text-xs font-medium">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Why Teams Choose Yoode Component (matches wireframe) */}
          <section className="py-16 bg-[#FAF9F6]">
             <div className="max-w-[1400px] mx-auto px-6 md:px-12">
               <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase tracking-tight">Why teams pick Yoode</h2>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                 {[
                   { t: 'Our own factory', d: 'No middlemen. Factory-direct pricing and full control.', i: <Factory className="w-6 h-6"/> },
                   { t: 'No minimum order', d: 'One jersey or five hundred, same care, no MOQ hurdle.', i: <PackageOpen className="w-6 h-6"/> },
                   { t: '24-hour mockup', d: 'See your exact kit before you commit. Approve, then we print.', i: <LayoutTemplate className="w-6 h-6"/> },
                   { t: 'True sublimation', d: 'Any colour, crest, name & number, printed in, never peels.', i: <PenTool className="w-6 h-6"/> },
                 ].map(x => (
                   <div key={x.t} className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100">
                     <div className="text-[#EA580C] mb-6">{x.i}</div>
                     <h3 className="font-black text-lg mb-2">{x.t}</h3>
                     <p className="text-sm text-gray-500">{x.d}</p>
                   </div>
                 ))}
               </div>
             </div>
          </section>

          {/* 3. Stats Bar */}
          <section className="px-6 md:px-12 max-w-[1400px] mx-auto w-full mb-16 mt-8">
            <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm flex flex-wrap justify-between items-center">
              <div className="text-yoode-onyx text-xs font-bold px-4 py-2 bg-yellow-50 rounded-full border border-yellow-200 mb-4 lg:mb-0 lg:mr-8 w-full lg:w-auto text-center">
                ✓ Names & numbers printed FREE on every kit · pay only after you approve
              </div>
              <div className="flex flex-wrap gap-8 justify-around flex-1 text-center">
                <div><div className="font-black text-lg">1,200+</div><div className="text-[10px] uppercase tracking-widest text-gray-500">teams kitted</div></div>
                <div><div className="font-black text-lg text-yellow-500">4.9★</div><div className="text-[10px] uppercase tracking-widest text-gray-500">57 reviews</div></div>
                <div><div className="font-black text-lg">No MOQ</div><div className="text-[10px] uppercase tracking-widest text-gray-500">1 or 500</div></div>
                <div><div className="font-black text-lg">Pan-India</div><div className="text-[10px] uppercase tracking-widest text-gray-500">3 stores</div></div>
              </div>
            </div>
          </section>

          {/* 4. Shop by Color / Products Grid */}
          <section className="py-8 md:py-16 px-6 md:px-12 w-full flex flex-col items-center">
            <div className="max-w-[1400px] w-full">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
                <div>
                  <div className="inline-block bg-[#1D4ED8] text-white text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                    Cricket Collection
                  </div>
                  <h2 className="text-4xl md:text-[3.5rem] font-black uppercase text-yoode-onyx leading-[1.1] tracking-tight">
                    Shop by <span className="text-[#EA580C]">Colour</span>
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Black', 'Red', 'Green', 'Orange'].map(c => (
                    <button key={c} className="px-6 py-3 rounded-full bg-white border border-gray-200 text-sm font-bold text-yoode-onyx hover:border-gray-900 transition-colors shadow-sm">{c}</button>
                  ))}
                </div>
              </div>

              {/* Products */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Amber Crystal Cricket Jersey', img: 'amber-crystal' },
                  { title: 'Amber Geo Cricket Jersey', img: 'amber-geo' },
                  { title: 'Amber Halftone Cricket Jersey', img: 'amber-halftone' },
                  { title: 'Amber Hex Cricket Jersey', img: 'amber-hex' },
                  { title: 'Azure Fade Cricket Jersey', img: 'azure-fade' },
                  { title: 'Azure Maze Cricket Jersey', img: 'azure-maze' },
                  { title: 'Azure Pinstripe Cricket Jersey', img: 'azure-pinstripe' },
                  { title: 'Azure Riot Cricket Jersey', img: 'azure-riot' },
                ].map((prod, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 rounded-[24px] p-4 shadow-sm hover:shadow-xl transition-shadow cursor-pointer group flex flex-col gap-3">
                    <div className="relative rounded-[16px] overflow-hidden shrink-0 aspect-square w-full bg-[#F3F4F6] flex items-center justify-center text-gray-400 text-xs">
                       [ {prod.img} ]
                       <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="flex flex-col gap-1.5 px-1 pt-2 pb-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">1 COLOR</span>
                      <h3 className="font-black text-yoode-onyx text-[15px] leading-tight">{prod.title}</h3>
                      <div className="mt-1 flex justify-between items-center">
                        <span className="font-bold text-[#F04438] text-[14px]">₹649.00</span>
                        <span className="text-[10px] text-gray-400 font-bold bg-gray-100 px-2 py-1 rounded">CUSTOMIZE</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Intro Text (Styled as Premium Bento) */}
          <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
            <div className="bg-[#13151A] text-white rounded-[40px] p-8 md:p-16 shadow-xl flex flex-col lg:flex-row gap-16 items-start relative overflow-hidden">
              <div className="absolute right-[-10%] top-[-20%] w-[400px] h-[400px] bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="flex-1 z-10">
                <span className="text-yellow-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">Our Process</span>
                <h2 className="text-4xl md:text-5xl font-black font-display leading-[1.1] mb-6">
                  Custom Cricket jerseys & <br/> <span className="text-white/50">training wear</span>
                </h2>
                <p className="text-white/70 leading-relaxed text-lg">
                  Yoode makes fully sublimated custom Cricket kits for clubs, academies and corporate tournaments across India; coloured match-day jerseys, training tees and full team kits. Our breathable, quick-dry fabric holds up through a full match in the heat, and full sublimation means club crests, player names, numbers and sponsor logos are printed into the cloth so they never fade or peel.
                </p>
              </div>
              
              <div className="flex-1 flex flex-col gap-8 z-10">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                  <h3 className="font-bold text-yellow-500 text-sm uppercase tracking-widest mb-3">From a single shirt to the whole squad</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    With no minimum order, you can order one jersey or outfit an entire academy. Pick set-in or raglan sleeves, crew or collar necks, and add matching trousers or lowers. Trusted by Cricket clubs in Bangalore, Chennai and beyond, kits ship pan-India in around four days once your design is approved.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                  <h3 className="font-bold text-yellow-500 text-sm uppercase tracking-widest mb-3">Design your cricket kit</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Browse our Cricket design ideas for layouts and colours, or send your concept for a free 24-hour mockup. Check the size guide and fabric guide before ordering, or start your custom Cricket jersey.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Fabric that performs */}
          <section className="py-16 md:py-24 bg-white px-6 md:px-12 border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-[3.5rem] font-black uppercase text-yoode-onyx leading-[1.1] tracking-tight mb-4">Fabric that performs</h2>
                <p className="text-gray-500 font-medium">Built for Indian conditions and made to last a full season.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#FAF9F6] rounded-[32px] p-10 hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
                  <h3 className="font-black text-xl mb-4 uppercase tracking-tight">Breathable polyester</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Lightweight, moisture-wicking knit that stays cool through a full match.</p>
                </div>
                <div className="bg-[#FAF9F6] rounded-[32px] p-10 hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
                  <h3 className="font-black text-xl mb-4 uppercase tracking-tight">Never fades</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Full-sublimation printing locks colour into the fibre, so it will not crack or peel.</p>
                </div>
                <div className="bg-[#FAF9F6] rounded-[32px] p-10 hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
                  <h3 className="font-black text-xl mb-4 uppercase tracking-tight">Names and numbers</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Individual names and numbers included, printed into the fabric not stuck on top.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. How it works */}
          <CustomJerseysHowItWorks />

          {/* 8. Kitting a whole team? (Bulk Orders) */}
          <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
            <div className="bg-[#13151A] rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 text-white shadow-xl relative overflow-hidden">
               <div className="flex-1 relative z-10">
                 <div className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.2em] mb-4">Teams · Clubs · Corporates</div>
                 <h2 className="text-4xl md:text-[3.5rem] font-black uppercase text-white leading-[1.1] tracking-tight mb-6">
                   Kitting a whole <span className="text-yellow-500">team?</span> Save more.
                 </h2>
                 <p className="text-white/60 mb-10 max-w-xl text-sm leading-relaxed">
                   Volume pricing that drops with quantity, one dedicated designer, and a single approved mockup before we print. From a 12-player club to a 500-shirt tournament.
                 </p>
                 <div className="flex flex-wrap gap-4 mb-8">
                   <div className="bg-white/5 border border-white/10 rounded-2xl p-4 min-w-[90px] text-center backdrop-blur-sm">
                     <div className="text-yellow-500 font-black text-2xl">10+</div>
                     <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1">₹599/kit</div>
                   </div>
                   <div className="bg-white/5 border border-white/10 rounded-2xl p-4 min-w-[90px] text-center backdrop-blur-sm">
                     <div className="text-yellow-500 font-black text-2xl">25+</div>
                     <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1">₹549/kit</div>
                   </div>
                   <div className="bg-white/5 border border-white/10 rounded-2xl p-4 min-w-[90px] text-center backdrop-blur-sm">
                     <div className="text-yellow-500 font-black text-2xl">50+</div>
                     <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1">₹499/kit</div>
                   </div>
                   <div className="bg-white/5 border border-white/10 rounded-2xl p-4 min-w-[90px] text-center backdrop-blur-sm">
                     <div className="text-yellow-500 font-black text-2xl">100+</div>
                     <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Let's talk</div>
                   </div>
                 </div>
               </div>
               
               <div className="w-full lg:w-[450px] bg-white rounded-[32px] p-8 text-yoode-onyx shadow-2xl relative z-10">
                 <h3 className="font-black text-xl mb-1 uppercase tracking-tight">Quick bulk enquiry</h3>
                 <p className="text-xs text-gray-500 font-medium mb-6">We reply within the hour, Mon-Sat.</p>
                 <div className="space-y-4">
                   <input type="text" placeholder="Name / club name" className="w-full border-b border-gray-200 bg-transparent px-2 py-3 text-sm focus:outline-none focus:border-yoode-onyx font-medium placeholder:text-gray-400" />
                   <input type="text" placeholder="Phone / WhatsApp" className="w-full border-b border-gray-200 bg-transparent px-2 py-3 text-sm focus:outline-none focus:border-yoode-onyx font-medium placeholder:text-gray-400" />
                   <input type="text" placeholder="Approx. quantity (e.g. 20)" className="w-full border-b border-gray-200 bg-transparent px-2 py-3 text-sm focus:outline-none focus:border-yoode-onyx font-medium placeholder:text-gray-400" />
                   <button className="w-full bg-[#EA580C] text-white font-bold py-4 rounded-full mt-4 hover:bg-orange-700 transition-colors shadow-lg shadow-orange-500/30">Send enquiry</button>
                 </div>
               </div>
            </div>
          </section>

          {/* 9. Testimonials Component */}
          <Testimonials />

          {/* 10. Kits we've made */}
          <section className="py-16 md:py-24 bg-[#FAF9F6] px-6 md:px-12 border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                <div>
                  <h2 className="text-4xl md:text-[3.5rem] font-black uppercase text-yoode-onyx leading-[1.1] tracking-tight mb-2">Kits we've <span className="text-[#EA580C]">made</span></h2>
                  <p className="text-gray-500 font-medium">A few of the 1,200+ teams & brands we've dressed.</p>
                </div>
                <button className="bg-white border border-gray-200 text-yoode-onyx px-8 py-3 rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-shadow">See portfolio →</button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  'Bangalore United CC',
                  'Infosys Premier League',
                  "St. Xavier's Academy",
                  'Koramangala Strikers'
                ].map(k => (
                  <div key={k} className="bg-white p-2 rounded-[24px] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer">
                     <div className="bg-gray-100 aspect-[3/4] rounded-[16px] relative overflow-hidden flex items-end p-6">
                       <span className="text-gray-900 font-black text-sm bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full absolute bottom-4 left-4">{k}</span>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 11. Experience Centers */}
          <ExperienceCenters />

          {/* 12. FAQ */}
          <CustomJerseysFaq />

          {/* 13. Custom CTA matches wireframe */}
          <section className="px-6 md:px-12 py-16 md:py-24">
            <div className="max-w-[1200px] mx-auto bg-[#FDE047] rounded-[40px] p-12 md:p-20 text-center text-yoode-onyx shadow-xl relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05]"></div>
               <div className="relative z-10">
                 <h2 className="text-4xl md:text-[3.5rem] font-black uppercase leading-[1.1] tracking-tight mb-4">Ready to kit your team?</h2>
                 <p className="text-yoode-onyx/70 font-bold mb-10">Free 24-hour mockup · no minimum order · pay only after you approve.</p>
                 <div className="flex flex-wrap justify-center gap-4">
                   <button className="bg-yoode-onyx text-white font-bold px-8 py-4 rounded-full hover:bg-black transition-colors shadow-lg">Design your kit →</button>
                   <button className="bg-white border border-gray-200 text-yoode-onyx font-bold px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-shadow">Get a bulk quote</button>
                 </div>
               </div>
            </div>
          </section>

        </div>"""

pattern = re.compile(r'\{\/\*\s*2\.\s*OVERLAPPING\s*CONTAINER\s*\*\/\}.*?</div>\s*</main>', re.DOTALL)
content = pattern.sub(new_container + "\n      </main>", content)

with open('app/custom-cricket-jerseys/page.tsx', 'w') as f:
    f.write(content)

