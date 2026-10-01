import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PromoModal } from '@/components/PromoModal';
import { ArrowUpRight, Star, Factory, PackageOpen, LayoutTemplate, PenTool, CheckCircle2, Columns, Printer, Layers, Box, Truck } from 'lucide-react';
import { CustomJerseysFaq } from '@/components/CustomJerseysFaq';
import { CustomJerseysHowItWorks } from '@/components/CustomJerseysHowItWorks';
import { CustomJerseysBulkOrders } from '@/components/CustomJerseysBulkOrders';
import { Testimonials } from '@/components/Testimonials';
import { CustomJerseysCtaLight } from '@/components/CustomJerseysCtaLight';
import { CustomJerseysCustomise } from '@/components/CustomJerseysCustomise';
import { ExperienceCenters } from '@/components/ExperienceCenters';

export const metadata = {
  title: 'Custom Cricket Jerseys & Kits - Yoode',
  description: 'Fully sublimated Cricket kits for clubs, academies & corporate tournaments.',
};

export default function CustomCricketJerseys() {
  return (
    <div className="relative min-h-screen w-full selection:bg-yoode-onyx selection:text-white flex flex-col font-sans">
      <PromoModal />
      <Header />
      <main className="flex-1 bg-background text-foreground">
        
        {/* 1. HERO SECTION - Premium Yoode Design */}
        <section className="relative min-h-screen w-full flex flex-col bg-yoode-onyx text-white">
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute right-[-10%] bottom-[-10%] w-[60vw] h-[60vw] bg-yellow-600/20 blur-[150px] rounded-full" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
          </div>

          <div className="relative flex-1 w-full flex items-center justify-center py-20 lg:py-24">
            
            {/* Outline Text Background */}
            <div className="absolute z-10 w-full top-[50%] md:left-[25%] -translate-y-1/2 flex justify-center md:justify-end md:pr-0 pointer-events-none overflow-hidden select-none">
              <h1 
                className="text-[26vw] lg:text-[28vw] font-display font-black leading-none tracking-tighter text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.04)" }}
              >
                <span>CRICKET</span>
              </h1>
            </div>

            <div className="relative z-20 w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center h-full gap-8 md:gap-4">
              
              {/* Left Content */}
              <div className="w-full md:w-[60%] lg:w-[60%] xl:w-[55%] flex flex-col items-start justify-center z-30 pr-0 md:pr-4 py-8 lg:py-12">
                
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs md:text-[13px] font-medium text-white/90 shadow-2xl mb-6">
                  <span className="text-yellow-500">CUSTOM CRICKET KITS</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-[4.8rem] leading-[1.12] font-display font-black text-white mb-6 tracking-tight drop-shadow-xl">
                  Custom Cricket Jerseys & Kits
                </h1>
                
                <p className="text-base lg:text-[1.15rem] text-white/70 leading-[1.75] max-w-[750px] mb-8 drop-shadow-sm">
                  Fully sublimated Cricket kits for clubs, academies & corporate tournaments. Your names, numbers & sponsor logos, made in our own factory and shipped pan-India in ~4 days.
                </p>

                {/* Trust Metrics */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="flex -space-x-3">
                    <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-10 h-10 rounded-full border-2 border-[#1A1A1A]" />
                    <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-10 h-10 rounded-full border-2 border-[#1A1A1A]" />
                    <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-10 h-10 rounded-full border-2 border-[#1A1A1A]" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-white font-bold ml-1 text-sm">4.9</span>
                      <span className="text-white/50 text-xs ml-1">· 57 reviews</span>
                    </div>
                    <span className="text-sm text-yellow-500 font-bold mt-0.5">1,200+ teams kitted</span>
                  </div>
                </div>
                
                {/* Features inline */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-white/60 mb-8">
                  <span className="flex items-center gap-1">✓ No minimum order</span>
                  <span className="flex items-center gap-1">✓ Free mockup in 24 hrs</span>
                  <span className="flex items-center gap-1">✓ Pay after you approve the design</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4">
                  <a href="#design" className="flex items-center gap-2 bg-[#EA580C] text-white px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-[#EA580C]/25">
                    Design your kit <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a href="#quote" className="flex items-center gap-2 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white/10 transition-all backdrop-blur-md">
                    Get a bulk quote <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[45%] h-[400px] md:h-[70vh] relative z-50 flex justify-center items-center pb-4 md:mb-0">
                <div className="w-full aspect-square bg-[#1A1A1A] rounded-[40px] border border-white/10 shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2">
                    <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" /> 4.9 · 57 reviews
                  </div>
                  <p className="text-white/40 text-sm text-center">
                    [ Hero lifestyle shot ]<br/>front & back Cricket kit
                  </p>
                  <div className="absolute bottom-6 right-6 bg-white text-yoode-onyx px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Designers online now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

                {/* 2. OVERLAPPING CONTAINER */}
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

                    {/* 2. Why Teams Choose Yoode Component (Cricket Focused) */}
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
                    Shop the <span className="text-[#EA580C]">Collection</span>
                  </h2>
                </div>
                <div className="flex flex-wrap gap-4">
                  
                  {/* Style Filter */}
                  <div className="relative">
                    <select className="appearance-none px-6 py-3 pr-10 rounded-full bg-white border border-gray-200 text-sm font-bold text-yoode-onyx hover:border-gray-900 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-black cursor-pointer">
                      <option value="">Style</option>
                      <option value="Half-Sleeve">Half-Sleeve</option>
                      <option value="Full-Sleeve">Full-Sleeve</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                  
                  {/* Colour Filter */}
                  <div className="relative">
                    <select className="appearance-none px-6 py-3 pr-10 rounded-full bg-white border border-gray-200 text-sm font-bold text-yoode-onyx hover:border-gray-900 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-black cursor-pointer">
                      <option value="">Colour</option>
                      <option value="Amber">Amber</option>
                      <option value="Azure">Azure</option>
                      <option value="Black">Black</option>
                      <option value="Red">Red</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>

                  {/* Size Filter */}
                  <div className="relative">
                    <select className="appearance-none px-6 py-3 pr-10 rounded-full bg-white border border-gray-200 text-sm font-bold text-yoode-onyx hover:border-gray-900 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-black cursor-pointer">
                      <option value="">Size</option>
                      <option value="Youth">Youth</option>
                      <option value="Adult">Adult</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>

                  
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
              </div>
            </div>
          </section>

                    {/* 5. Customisation Details (Tech Pack) */}
          <CustomJerseysCustomise 
            title="CRICKET KITS - CUSTOMISATION DETAILS" 
            subHeading="Our Process" 
            heading="Custom Cricket jerseys & training wear" 
          />

          {/* 6. Fabric that performs */}
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
          </section>

          {/* 7. How it works */}
          <CustomJerseysHowItWorks />

                              {/* 8. Kitting a whole team? (Bulk Orders) - Styled to standard */}
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
                ))}
              </div>
            </div>
          </section>

          {/* 11. Experience Centers */}
          <ExperienceCenters />

          {/* 12. FAQ */}
          <CustomJerseysFaq />

          {/* 13. Custom CTA matches wireframe with popping image */}
          <section className="px-6 md:px-12 py-24 md:py-32 bg-[#FAF9F6]">
            <div className="max-w-[1200px] mx-auto bg-[#FDE047] rounded-[40px] p-12 md:p-20 shadow-xl relative mt-16 md:mt-24 flex flex-col items-center md:items-end text-center md:text-right">
               {/* Radial Background */}
               <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] rounded-[40px] overflow-hidden pointer-events-none"></div>
               
               {/* Popping Image - Breaks out of container */}
               <div className="absolute bottom-0 left-[-20px] md:left-12 w-[280px] md:w-[400px] h-[380px] md:h-[550px] z-20 pointer-events-none">
                 <Image src="https://yoode.com/cdn/shop/files/yd-seo-print-kit-front.png" alt="Custom Jersey" fill className="object-contain object-bottom drop-shadow-2xl" />
               </div>

               {/* Text & Buttons */}
               <div className="relative z-10 md:w-[60%] flex flex-col items-center md:items-end mt-[200px] md:mt-0">
                 <h2 className="text-4xl md:text-[3.5rem] font-black uppercase leading-[1.1] tracking-tight mb-4 text-yoode-onyx">Ready to kit your team?</h2>
                 <p className="text-yoode-onyx/70 font-bold mb-10 max-w-lg">Free 24-hour mockup · no minimum order · pay only after you approve.</p>
                 <div className="flex flex-wrap justify-center md:justify-end gap-4">
                   <button className="bg-yoode-onyx text-white font-bold px-8 py-4 rounded-full hover:bg-black transition-colors shadow-lg">Design your kit →</button>
                   <button className="bg-white border border-gray-200 text-yoode-onyx font-bold px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-shadow">Get a bulk quote</button>
                 </div>
               </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
