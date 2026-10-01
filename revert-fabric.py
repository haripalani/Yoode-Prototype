import re

with open('app/custom-cricket-jerseys/page.tsx', 'r') as f:
    content = f.read()

old_fabric_pattern = re.compile(r'\{\/\* 6\. Fabric that performs \*\/\}.*?<\/section>', re.DOTALL)

new_fabric = """{/* 6. Fabric that performs */}
          <section className="py-16 md:py-24 bg-white px-6 md:px-12 border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block bg-[#EA580C]/10 text-[#EA580C] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-xs mb-4">Yoode Quality Standards</div>
                <h2 className="text-4xl md:text-[3.5rem] font-black uppercase text-yoode-onyx leading-[1.1] tracking-tight mb-4">Fabric that performs</h2>
                <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">Built for Indian conditions and engineered to our exact specifications in Tirupur.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-[#FAF9F6] rounded-[32px] p-10 hover:-translate-y-2 transition-transform duration-300 border border-gray-100 flex flex-col gap-2 group">
                  <h3 className="font-black text-2xl uppercase tracking-tight text-yoode-onyx group-hover:text-[#EA580C] transition-colors">Yoode-Tech™ Polyester</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Custom-milled exclusively for our kits. A lightweight, advanced moisture-wicking knit that actively cools the body during intense Indian summers.</p>
                </div>
                
                <div className="bg-[#FAF9F6] rounded-[32px] p-10 hover:-translate-y-2 transition-transform duration-300 border border-gray-100 flex flex-col gap-2 group">
                  <h3 className="font-black text-2xl uppercase tracking-tight text-yoode-onyx group-hover:text-[#EA580C] transition-colors">Never fades or peels</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">We use industrial-grade Japanese sublimation machines. The colour is permanently locked into the fibres—it will survive a hundred washes without cracking.</p>
                </div>
                
                <div className="bg-yoode-onyx rounded-[32px] p-10 hover:-translate-y-2 transition-transform duration-300 border border-yoode-onyx flex flex-col gap-2 shadow-xl shadow-yoode-onyx/10">
                  <h3 className="font-black text-2xl uppercase tracking-tight text-[#EA580C]">All inclusive pricing</h3>
                  <p className="text-white/80 text-sm leading-relaxed">Every kit comes with unlimited sponsor logos, individual player names, and numbers printed directly into the fabric at zero extra cost.</p>
                </div>

              </div>
            </div>
          </section>"""

content = old_fabric_pattern.sub(new_fabric, content)

with open('app/custom-cricket-jerseys/page.tsx', 'w') as f:
    f.write(content)
