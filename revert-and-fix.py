import re

with open('app/custom-cricket-jerseys/page.tsx', 'r') as f:
    content = f.read()

new_section = """          {/* 8. Kitting a whole team? (Bulk Orders) - Styled to standard */}
          <section className="py-20 md:py-24 w-full bg-[#1E1E1E] font-sans">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12">
               
               <div className="flex-1">
                 <div className="text-[10px] md:text-sm font-bold text-[#E53935] uppercase tracking-[0.2em] mb-3">Teams · Clubs · Corporates</div>
                 <h2 className="text-3xl md:text-5xl font-black text-white font-display mb-4 uppercase tracking-tight">
                   Kitting a whole <span className="text-[#EA580C]">team?</span> Save more.
                 </h2>
                 <p className="text-white/60 text-sm md:text-base max-w-2xl mb-10 font-medium">
                   Volume pricing that drops with quantity, one dedicated designer, and a single approved mockup before we print. From a 12-player club to a 500-shirt tournament.
                 </p>
                 
                 <div className="flex flex-wrap gap-4 mb-8">
                   <div className="border border-white/10 bg-white/[0.02] rounded-2xl p-4 md:p-6 min-w-[110px] text-center hover:bg-white/[0.04] transition-colors flex-1">
                     <div className="text-white font-black text-2xl md:text-3xl">10+</div>
                     <div className="text-[11px] text-white/50 uppercase tracking-widest mt-1 font-bold">₹599/kit</div>
                   </div>
                   <div className="border border-white/10 bg-white/[0.02] rounded-2xl p-4 md:p-6 min-w-[110px] text-center hover:bg-white/[0.04] transition-colors flex-1">
                     <div className="text-white font-black text-2xl md:text-3xl">25+</div>
                     <div className="text-[11px] text-white/50 uppercase tracking-widest mt-1 font-bold">₹549/kit</div>
                   </div>
                   <div className="border border-white/10 bg-white/[0.02] rounded-2xl p-4 md:p-6 min-w-[110px] text-center hover:bg-white/[0.04] transition-colors flex-1">
                     <div className="text-white font-black text-2xl md:text-3xl">50+</div>
                     <div className="text-[11px] text-white/50 uppercase tracking-widest mt-1 font-bold">₹499/kit</div>
                   </div>
                   <div className="bg-[#EA580C] rounded-2xl p-4 md:p-6 min-w-[110px] text-center shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:scale-105 transition-all cursor-pointer flex-1 flex flex-col justify-center">
                     <div className="text-white font-black text-2xl md:text-3xl">100+</div>
                     <div className="text-[11px] text-white/90 uppercase tracking-widest mt-1 font-bold">Let's talk</div>
                   </div>
                 </div>
               </div>
               
               <div className="w-full lg:w-[450px] bg-white rounded-[32px] p-8 md:p-10 text-black flex flex-col justify-center shadow-2xl relative">
                 <h3 className="font-black text-xl mb-1">QUICK BULK ENQUIRY</h3>
                 <p className="text-xs text-gray-500 mb-8">We reply within the hour, Mon-Sat.</p>
                 
                 <div className="space-y-6">
                   <div>
                     <input type="text" placeholder="Name / Club Name" className="w-full border-b border-gray-200 bg-transparent px-2 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                   </div>
                   <div>
                     <input type="text" placeholder="Phone / WhatsApp" className="w-full border-b border-gray-200 bg-transparent px-2 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                   </div>
                   <div>
                     <input type="text" placeholder="Approx. quantity (e.g. 20)" className="w-full border-b border-gray-200 bg-transparent px-2 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                   </div>
                   <button className="w-full bg-[#EA580C] text-white rounded-full font-bold py-4 mt-4 hover:bg-[#c2410c] transition-colors shadow-lg shadow-orange-500/20">
                     Send enquiry
                   </button>
                 </div>
               </div>
               
            </div>
          </section>"""

old_section_pattern = re.compile(r'\{\/\*\s*8\.\s*Kitting a whole team.*?</section>', re.DOTALL)
content = old_section_pattern.sub(new_section, content)

with open('app/custom-cricket-jerseys/page.tsx', 'w') as f:
    f.write(content)

