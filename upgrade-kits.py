import re

with open('app/custom-cricket-jerseys/page.tsx', 'r') as f:
    content = f.read()

old_kits_pattern = re.compile(r'\{\[\s*\'Bangalore United CC\'.*?\]\.map\(k => \(\s*<div key=\{k\}.*?<\/div>\s*\)\)\s*\}', re.DOTALL)

new_kits = """{[
                  { name: 'Bangalore United CC', color: 'from-blue-500/20 to-indigo-600/20' },
                  { name: 'Infosys Premier League', color: 'from-orange-500/20 to-red-600/20' },
                  { name: "St. Xavier's Academy", color: 'from-emerald-500/20 to-teal-600/20' },
                  { name: 'Koramangala Strikers', color: 'from-purple-500/20 to-pink-600/20' }
                ].map((k, idx) => (
                  <div key={idx} className="bg-white p-2 md:p-3 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                     <div className={`w-full aspect-[4/5] rounded-[24px] relative overflow-hidden bg-gradient-to-br ${k.color} flex items-center justify-center`}>
                       
                       <div className="absolute inset-0 bg-yoode-onyx/5 group-hover:bg-yoode-onyx/0 transition-colors duration-500" />
                       
                       <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-overlay">
                         <Columns className="w-24 h-24 text-yoode-onyx transform group-hover:scale-110 transition-transform duration-700" />
                       </div>

                       <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                         <span className="text-yoode-onyx font-black text-sm truncate pr-2">{k.name}</span>
                         <div className="w-8 h-8 rounded-full bg-yoode-onyx text-white flex items-center justify-center shrink-0">
                           <ArrowUpRight className="w-4 h-4" />
                         </div>
                       </div>
                     </div>
                  </div>
                ))}"""

content = old_kits_pattern.sub(new_kits, content)

with open('app/custom-cricket-jerseys/page.tsx', 'w') as f:
    f.write(content)
