import re

with open('app/custom-cricket-jerseys/page.tsx', 'r') as f:
    content = f.read()

# 1. Remove the button next to filters
remove_pattern = re.compile(r'\{\/\*\s*Explore All\s*\*\/\}.*?</div>\s*</div>', re.DOTALL)
# The end of the block is:
#                  {/* Explore All */}
#                  <div className="flex items-center">
#                    <button ...>...</button>
#                  </div>
content = remove_pattern.sub('', content)

# 2. Modify the products grid
old_grid = """              {/* Products */}
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
              </div>"""

new_grid = """              {/* Products */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Amber Crystal Cricket Jersey', img: 'amber-crystal' },
                  { title: 'Amber Geo Cricket Jersey', img: 'amber-geo' },
                  { title: 'Amber Halftone Cricket Jersey', img: 'amber-halftone' },
                  { title: 'Amber Hex Cricket Jersey', img: 'amber-hex' },
                  { title: 'Azure Fade Cricket Jersey', img: 'azure-fade' },
                  { title: 'Azure Maze Cricket Jersey', img: 'azure-maze' },
                  { title: 'Azure Pinstripe Cricket Jersey', img: 'azure-pinstripe' },
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
                
                {/* Explore All Card */}
                <div className="bg-[#1C1F26] rounded-[24px] p-6 shadow-sm hover:shadow-xl hover:bg-black transition-all cursor-pointer group flex flex-col justify-center items-center text-center h-full min-h-[300px]">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                  <h3 className="font-black text-white text-2xl leading-tight mb-2">Explore the full collection</h3>
                  <p className="text-white/60 text-sm font-medium">View all 50+ designs →</p>
                </div>
              </div>"""

content = content.replace(old_grid, new_grid)

with open('app/custom-cricket-jerseys/page.tsx', 'w') as f:
    f.write(content)

