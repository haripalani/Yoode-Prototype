import re

with open('app/custom-cricket-jerseys/page.tsx', 'r') as f:
    content = f.read()

new_section = """          {/* 8. Kitting a whole team? (Bulk Orders) */}
          <section className="py-16 md:py-24 w-full flex flex-col items-center bg-[#F3F4F6]">
            <div className="max-w-[1400px] w-full px-6 md:px-12 mb-10">
              
              <div className="w-full bg-white border-2 border-black font-sans text-black 2xl:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col lg:flex-row">
                 
                 {/* Left Side: Content & Pricing */}
                 <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                   <div className="text-[10px] font-black text-black uppercase tracking-widest mb-4">Teams · Clubs · Corporates</div>
                   <h2 className="text-4xl md:text-[3.5rem] font-black uppercase text-black leading-[1.1] tracking-tight mb-6">
                     Kitting a whole <span className="text-[#EA580C]">team?</span> Save more.
                   </h2>
                   <p className="text-gray-600 mb-10 max-w-xl text-sm leading-relaxed font-medium">
                     Volume pricing that drops with quantity, one dedicated designer, and a single approved mockup before we print. From a 12-player club to a 500-shirt tournament.
                   </p>
                   
                   <div className="flex flex-wrap gap-4">
                     <div className="bg-gray-50 border-2 border-black p-4 min-w-[100px] text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                       <div className="text-black font-black text-2xl">10+</div>
                       <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">₹599/kit</div>
                     </div>
                     <div className="bg-gray-50 border-2 border-black p-4 min-w-[100px] text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                       <div className="text-black font-black text-2xl">25+</div>
                       <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">₹549/kit</div>
                     </div>
                     <div className="bg-gray-50 border-2 border-black p-4 min-w-[100px] text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                       <div className="text-black font-black text-2xl">50+</div>
                       <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">₹499/kit</div>
                     </div>
                     <div className="bg-black text-white border-2 border-black p-4 min-w-[100px] text-center shadow-[4px_4px_0px_0px_rgba(234,88,12,1)]">
                       <div className="font-black text-2xl">100+</div>
                       <div className="text-[10px] text-gray-300 font-bold uppercase tracking-widest mt-1">Let's talk</div>
                     </div>
                   </div>
                 </div>
                 
                 {/* Right Side: Form */}
                 <div className="w-full lg:w-[450px] bg-[#F9F9F9] border-t-2 lg:border-t-0 lg:border-l-2 border-black p-8 md:p-12 flex flex-col justify-center">
                   <h3 className="font-black text-xl mb-1 uppercase tracking-tight">Quick bulk enquiry</h3>
                   <p className="text-xs text-gray-500 font-medium mb-8">We reply within the hour, Mon-Sat.</p>
                   
                   <div className="space-y-6">
                     <div>
                       <input type="text" placeholder="Name / Club Name" className="w-full border-b-2 border-black bg-transparent px-2 py-3 text-sm font-bold focus:outline-none placeholder-gray-400" />
                     </div>
                     <div>
                       <input type="text" placeholder="Phone / WhatsApp" className="w-full border-b-2 border-black bg-transparent px-2 py-3 text-sm font-bold focus:outline-none placeholder-gray-400" />
                     </div>
                     <div>
                       <input type="text" placeholder="Approx. Quantity (e.g. 20)" className="w-full border-b-2 border-black bg-transparent px-2 py-3 text-sm font-bold focus:outline-none placeholder-gray-400" />
                     </div>
                     <button className="w-full bg-[#EA580C] text-white border-2 border-black font-black uppercase tracking-widest py-4 mt-4 hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-[0px] active:shadow-none">
                       Send enquiry
                     </button>
                   </div>
                 </div>
                 
              </div>
            </div>
          </section>"""

old_section_pattern = re.compile(r'\{\/\*\s*8\.\s*Kitting a whole team.*?</section>', re.DOTALL)
content = old_section_pattern.sub(new_section, content)

with open('app/custom-cricket-jerseys/page.tsx', 'w') as f:
    f.write(content)

