import { ArrowUpRight, ArrowRight } from "lucide-react";

export function Blogs() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-white text-black font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
          <h2 className="text-5xl md:text-[5.5rem] font-black uppercase tracking-tighter leading-none">OUR BLOGS</h2>
          <button className="px-6 py-3 bg-[#F2F2F2] rounded-full font-bold text-sm flex items-center gap-3 hover:bg-gray-200 transition-colors">
            Read Our Blog <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-4 lg:h-[700px]">
          
          {/* Left Column (Featured) */}
          <div className="w-full lg:w-[42%] h-[400px] lg:h-full relative rounded-[32px] overflow-hidden bg-gray-100 group">
            <img 
              src="/mens-polo.jpg" 
              alt="Premium Polo" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            
            <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-lg z-10 shadow-sm border border-white/20">
              🔥
            </div>

            {/* Bottom-left text cutout */}
            <div className="absolute bottom-0 left-0 bg-white p-6 lg:p-8 rounded-tr-[36px] max-w-[90%] z-10">
              <div 
                className="absolute bottom-full left-0 w-6 h-6" 
                style={{ background: 'radial-gradient(circle at top right, transparent 24px, white 24.5px)' }} 
              />
              <div 
                className="absolute bottom-0 left-full w-6 h-6" 
                style={{ background: 'radial-gradient(circle at top right, transparent 24px, white 24.5px)' }} 
              />
              
              <div className="text-xs font-bold text-gray-800 mb-3">Category . Apparel <span className="font-medium text-gray-400">| 24 Sep</span></div>
              <h3 className="text-3xl lg:text-[2.6rem] font-black uppercase leading-[1.05] tracking-tight">THE ULTIMATE GUIDE TO<br/>PREMIUM FABRICS</h3>
            </div>
          </div>

          {/* Middle Column */}
          <div className="w-full lg:w-[36%] flex flex-col gap-4 h-[800px] lg:h-full">
            
            {/* Top Green Card */}
            <div className="flex-[1.4] bg-[#E2F7AD] rounded-[32px] p-6 lg:p-8 relative flex flex-col justify-between group">
              {/* Top-right cutout */}
              <div className="absolute top-0 right-0 w-[72px] h-[72px] bg-white rounded-bl-[32px] flex items-center justify-center z-10">
                <div 
                  className="absolute top-full right-0 w-6 h-6" 
                  style={{ background: 'radial-gradient(circle at bottom left, transparent 24px, white 24.5px)' }} 
                />
                <div 
                  className="absolute top-0 right-full w-6 h-6" 
                  style={{ background: 'radial-gradient(circle at bottom left, transparent 24px, white 24.5px)' }} 
                />
                <div className="w-12 h-12 rounded-full bg-[#E2F7AD] flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm border border-black/5">
                  <ArrowUpRight className="w-5 h-5 text-black" strokeWidth={2.5} />
                </div>
              </div>
              
              <div className="relative z-10 pr-12">
                <div className="text-xs font-bold mb-5 tracking-wide">Category . Branding</div>
                <h3 className="text-3xl lg:text-[2.3rem] font-black uppercase leading-[1.05] tracking-tight mb-4">ELEVATE YOUR<br/>BRAND WITH<br/>CUSTOM MERCH<br/>THIS SEASON</h3>
                <p className="text-xs lg:text-sm font-medium leading-relaxed opacity-85 mb-6 max-w-[90%]">
                  Discover how high-quality custom merchandise can transform your company culture and build lasting client relationships. The right apparel speaks volumes before you even say a word ... <span className="font-bold underline cursor-pointer hover:text-gray-700">More</span>
                </p>
              </div>
              
              <div className="flex flex-col relative z-10">
                <a href="#" className="border-t border-black/15 py-3.5 flex justify-between items-center group/link">
                  <span className="font-bold text-[11px] lg:text-xs uppercase tracking-widest">HOW TO CHOOSE THE PERFECT CORPORATE GIFT</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
                <a href="#" className="border-t border-black/15 py-3.5 flex justify-between items-center group/link">
                  <span className="font-bold text-[11px] lg:text-xs uppercase tracking-widest">THE DIFFERENCE BETWEEN DTG AND SCREEN PRINTING</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Bottom Video Card */}
            <div className="flex-[1] bg-gray-900 rounded-[32px] relative overflow-hidden p-6 lg:p-8 flex flex-col justify-between text-white group">
              <img 
                src="/gift-box.jpg" 
                alt="Corporate Gifting" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="relative z-10 text-xs font-bold tracking-wide">Category . Tutorial</div>
              
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer pointer-events-auto hover:bg-white/30 transition-colors shadow-lg border border-white/20">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                </div>
              </div>
              
              <div className="relative z-10 mt-auto pt-10">
                <div className="text-[10px] lg:text-xs font-medium opacity-80 mb-1.5">5 Min . 15 Sep</div>
                <h4 className="font-black uppercase leading-[1.1] text-sm lg:text-[1.05rem] tracking-tight">UNBOXING EXPERIENCE | CRAFTING THE PERFECT GIFT SET</h4>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[22%] flex flex-col gap-4 h-[700px] lg:h-full">
            
            {/* Top Blue Card */}
            <div className="flex-[1.3] bg-[#C5E1F4] rounded-[32px] relative overflow-hidden flex flex-col group">
              <div className="p-6 pb-4 relative z-10">
                <div className="text-xs font-bold mb-4 tracking-wide">Category . Design</div>
                <div className="text-[10px] text-gray-500 font-bold mb-1">Hot . 12 Sep</div>
                <h3 className="text-2xl font-black uppercase leading-[1.1] tracking-tight">TRENDING<br/>STYLES FOR<br/>TECH TEAMS</h3>
              </div>
              <div className="flex-1 relative mt-2">
                <img 
                  src="/polo-jersey.jpg" 
                  alt="Tech Apparel" 
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>

            {/* Bottom Purple Card */}
            <div className="flex-[1] bg-[#D6B5F4] rounded-[32px] p-6 lg:p-7 relative flex flex-col justify-between group">
              <div className="flex flex-wrap gap-2 relative z-10">
                {["Corporate Gifting", "Screen Printing", "Embroidery", "Design Tips", "Company Swag", "Bulk Orders"].map(tag => (
                  <span key={tag} className="bg-[#FFF490] text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-sm text-gray-900">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-8 font-black text-lg tracking-tight relative z-10 mb-2">View All Categories</div>
              
              {/* Bottom-right cutout */}
              <div className="absolute bottom-0 right-0 w-[56px] h-[56px] bg-white rounded-tl-[24px] flex items-center justify-center z-10">
                <div 
                  className="absolute -top-4 right-0 w-4 h-4" 
                  style={{ background: 'radial-gradient(circle at top left, transparent 16px, white 16.5px)' }} 
                />
                <div 
                  className="absolute bottom-0 -left-4 w-4 h-4" 
                  style={{ background: 'radial-gradient(circle at top left, transparent 16px, white 16.5px)' }} 
                />
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center border border-gray-200 transition-transform group-hover:scale-110 shadow-sm">
                  <ArrowRight className="w-4 h-4 text-black" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
