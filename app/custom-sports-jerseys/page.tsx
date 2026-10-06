import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ShopBySport from '@/components/ShopBySport';
import { SectionHeader } from '@/components/SectionHeader';
import { ArrowUpRight, CheckCircle2, Factory, PackageOpen, MousePointerClick, Globe, Star } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PromoModal } from '@/components/PromoModal';
import AnimatedCounter from '@/components/AnimatedCounter';
import { CustomJerseysFaq } from '@/components/CustomJerseysFaq';
import { CustomJerseysHowItWorks } from '@/components/CustomJerseysHowItWorks';
import { CustomJerseysFabric } from '@/components/CustomJerseysFabric';
import { CustomJerseysBulkOrders } from '@/components/CustomJerseysBulkOrders';
import { Testimonials } from '@/components/Testimonials';
import { CustomJerseysCtaDark } from '@/components/CustomJerseysCtaDark';
import { CustomJerseysCtaLight } from '@/components/CustomJerseysCtaLight';
import { ExperienceCenters } from '@/components/ExperienceCenters';
import { CustomJerseysCustomise } from '@/components/CustomJerseysCustomise';
import { CustomJerseysWhyChoose } from '@/components/CustomJerseysWhyChoose';
import { CustomJerseysValuePillarsDark } from '@/components/CustomJerseysValuePillarsDark';

export const metadata = {
  title: 'Custom Sports Jerseys - Yoode',
  description: 'Wear Your Team Pride with a Custom Sports Jersey. Order your custom jersey online and get your jerseys delivered worldwide.',
};

export default function CustomSportsJerseys() {
  return (
    <div className="relative min-h-screen w-full selection:bg-yoode-onyx selection:text-white flex flex-col font-sans overflow-x-clip">
      <PromoModal />
      <Header />
      <main className="flex-1 bg-background text-foreground">
        
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col bg-yoode-onyx text-white">
        {/* Background glow and gradients (clipped) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute right-[-10%] bottom-[-10%] w-[60vw] h-[60vw] bg-blue-600/20 blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
        </div>

        <div className="relative flex-1 w-full flex items-center justify-center pt-20">
          
          {/* Mid-Background: Outline Text */}
          <div className="absolute z-10 w-full top-[50%] md:left-[25%] -translate-y-1/2 flex justify-center md:justify-end md:pr-0 pointer-events-none overflow-hidden select-none">
            <h1 
              className="text-[26vw] lg:text-[32vw] font-display font-black leading-none tracking-tighter text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.04)" }}
            >
              <span>CUSTOM</span>
            </h1>
          </div>

          {/* Foreground Content: 2-Column Layout */}
          <div className="relative z-20 w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center h-full gap-8 md:gap-4 pb-0 pt-10">
            
            {/* Left Content (Text & Buttons) */}
            <div className="w-full md:w-[60%] lg:w-[60%] xl:w-[55%] flex flex-col items-start justify-center z-30 pt-10 md:pt-10 pb-10 md:pb-16 pr-0 md:pr-4 md:-mt-24 lg:-mt-28">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs md:text-[13px] font-medium text-white/90 shadow-2xl mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                </span>
                Custom Jerseys · In-house Production Unit
              </div>
              
              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-[4.8rem] leading-[1.12] font-display font-black text-white mb-6 tracking-tight drop-shadow-xl">
                Wear Your Team Pride with a Custom Sports Jersey
              </h1>
              
              {/* Paragraph */}
              <p className="text-base lg:text-[1.15rem] text-white/70 leading-[1.75] max-w-[750px] mb-8 drop-shadow-sm">
                Bring together your team colours, logo, player details and preferred style in a jersey design that gives every player a consistent, recognisable look and represents your team on the field. Order your custom jersey online and get your jerseys delivered across worldwide.
              </p>

              {/* Trust Badge */}
              <div className="flex items-center gap-4 mb-10">
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-10 h-10 rounded-full border-2 border-[#1A1A1A]" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-10 h-10 rounded-full border-2 border-[#1A1A1A]" />
                  <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-10 h-10 rounded-full border-2 border-[#1A1A1A]" />
                  <div className="w-10 h-10 rounded-full border-2 border-[#1A1A1A] bg-[#2A2A2A] flex items-center justify-center text-xs font-bold text-white">
                    +2k
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-sm text-white/70 font-medium mt-0.5">Trusted by 10,000+ teams</span>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a href="https://wa.me/918069750293" className="flex items-center gap-2 bg-[#EA580C] text-white px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-[#EA580C]/25">
                  Get a Mockup <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="tel:+918069750293" className="flex items-center gap-2 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white/10 transition-all backdrop-blur-md">
                  Call Our Team <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Content (Image) */}
            <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[45%] h-[400px] md:h-[80vh] relative z-50 flex justify-center md:justify-end items-end pb-4 md:pb-[5vh] md:mb-0">
              <img 
                src="https://yoode.com/cdn/shop/files/yd-seo-banner-custom-jersey-team.png?v=1789121863&width=1200" 
                alt="Custom Sports Jerseys" 
                className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] scale-110 origin-bottom" 
              />
          </div>
        </div>
      </div>
      </section>

      {/* Overlapping Container for Next Sections */}
      <div className="relative z-40 bg-[#FAF9F6] rounded-t-[40px] md:rounded-t-[60px] -mt-12 md:-mt-20 w-full shadow-[0_-10px_40px_rgba(0,0,0,0.03)] flex flex-col">
        
        {/* Dark Value Pillars at the very top */}
        <CustomJerseysValuePillarsDark />

        <div className="flex flex-col">
          {/* Why Teams Choose Yoode */}
          <CustomJerseysWhyChoose />

          {/* Quick Stats */}
        <section className="px-6 md:px-12 max-w-[1600px] mx-auto w-full mb-16">
          <div className="bg-[#13151A] rounded-[40px] p-8 md:p-12 flex flex-wrap justify-between items-center gap-8 md:gap-0 text-white shadow-xl">
            
            <div className="flex-1 flex justify-center">
              <div className="text-left">
                <span className="block font-display text-4xl md:text-5xl font-black mb-2">
                  <AnimatedCounter value={490} prefix="Rs." />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/50">Starting Price</span>
              </div>
            </div>

            <div className="hidden md:block w-px h-16 bg-white/10"></div>
            
            <div className="flex-1 flex justify-center">
              <div className="text-left">
                <span className="block font-display text-4xl md:text-5xl font-black mb-2">
                  <AnimatedCounter value={500} suffix="+" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/50">Units A Day</span>
              </div>
            </div>

            <div className="hidden md:block w-px h-16 bg-white/10"></div>
            
            <div className="flex-1 flex justify-center">
              <div className="text-left">
                <span className="block font-display text-4xl md:text-5xl font-black mb-2">
                  <AnimatedCounter value={4} />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/50">Experience Centres</span>
              </div>
            </div>

            <div className="hidden md:block w-px h-16 bg-white/10"></div>
            
            <div className="flex-1 flex justify-center">
              <div className="text-left">
                <span className="block font-display text-4xl md:text-5xl font-black mb-2">
                  <AnimatedCounter value={99} suffix="%" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/50">Quality Checks</span>
              </div>
            </div>

          </div>
        </section>

      {/* Shop By Sport Interactive Carousel */}
      <ShopBySport />

      {/* Details / What you can customise (Bento Grid Style) */}
      <CustomJerseysCustomise />

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] text-yoode-onyx rounded-t-[40px] px-6 md:px-12 flex flex-col items-center overflow-hidden">
        <div className="max-w-[1400px] w-full">
          
          {/* Split Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mb-12 md:mb-16">
            <div className="flex-1">
              <div className="inline-block bg-[#1D4ED8] text-white text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                Transparent Pricing
              </div>
              <h2 className="text-4xl md:text-[3.5rem] font-black uppercase text-yoode-onyx leading-[1.1] tracking-tight">
                Custom Made Jerseys<br className="hidden md:block"/> Starting From ₹490
              </h2>
            </div>
            <div className="flex-1 flex flex-col items-start lg:items-end text-left lg:text-right gap-6 pt-2">
              <p className="text-gray-500 text-sm md:text-base max-w-md font-medium leading-relaxed">
                Choose your jersey style, fabric, sleeve length and print coverage, with player names and numbers included. Pricing varies by order quantity, with better per-piece pricing available for larger teams.
              </p>
              <a href="https://wa.me/918069750293" className="inline-flex items-center gap-2 bg-[#EA580C] text-white px-8 py-4 rounded-full font-bold text-sm shadow-[0_10px_30px_rgba(234,88,12,0.3)] hover:scale-105 transition-transform">
                Get My Quote <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Cards Grid / Scroller */}
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-4 md:gap-6 pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 lg:pb-0 snap-x snap-mandatory hide-scrollbar">
            {[
              { img: 'yd-seo-price-junior-jersey.png?v=1789124822', title: 'Junior Jersey', price: '₹490' },
              { img: 'yd-seo-price-adult-jersey.png?v=1789124822', title: 'Adult Jersey', price: '₹650' },
              { img: 'yd-seo-price-full-sleeve-jersey.png?v=1789124822', title: 'Full-Sleeve & Raglan', price: '₹750' },
              { img: 'yd-seo-price-team-order.png?v=1789124823', title: 'Team Orders (11+)', price: 'Lower per-piece pricing' },
              { img: 'yd-seo-print-team-logo.png?v=1789124823', title: 'Design Mockup', price: 'Preview before production' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-[24px] p-4 shadow-sm hover:shadow-xl transition-shadow cursor-pointer group flex flex-col gap-3 min-w-[260px] lg:min-w-0 snap-start">
                <div className="relative rounded-[16px] overflow-hidden shrink-0 aspect-square w-full bg-[#F3F4F6]">
                  <Image src={`https://yoode.com/cdn/shop/files/${item.img}&width=600`} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex flex-col gap-1.5 px-1 pt-2 pb-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Custom Made</span>
                  <h3 className="font-black text-yoode-onyx text-[15px] leading-tight">{item.title}</h3>
                  <div className="mt-1">
                    <span className="font-bold text-[#F04438] text-[14px]">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric */}
      <CustomJerseysFabric />

      {/* How it works */}
      <CustomJerseysHowItWorks />

      {/* Bulk Orders */}
      <CustomJerseysBulkOrders />

      {/* Testimonials */}
      <Testimonials />

      {/* Dark CTA */}
      <CustomJerseysCtaDark />

      {/* Experience Centers */}
      <ExperienceCenters />

      {/* FAQ */}
      <CustomJerseysFaq />

      {/* Light CTA */}
      <CustomJerseysCtaLight />

      </div>
      </div>

      </main>
      <Footer />
    </div>
  );
}
