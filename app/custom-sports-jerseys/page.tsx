import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ShopBySport from '@/components/ShopBySport';
import { SectionHeader } from '@/components/SectionHeader';
import { ArrowUpRight, CheckCircle2, Factory, PackageOpen, MousePointerClick, Globe, Star } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PromoModal } from '@/components/PromoModal';

export const metadata = {
  title: 'Custom Sports Jerseys - Yoode',
  description: 'Wear Your Team Pride with a Custom Sports Jersey. Order your custom jersey online and get your jerseys delivered worldwide.',
};

export default function CustomSportsJerseys() {
  return (
    <div className="relative min-h-screen w-full selection:bg-yoode-onyx selection:text-white flex flex-col font-sans">
      <PromoModal />
      <Header />
      <main className="flex-1 bg-background text-foreground">
        
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col bg-yoode-onyx text-yoode-offwhite">
        {/* Background Radial Gradient */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] pointer-events-none" />

        <div className="relative flex-1 w-full flex items-center justify-center pt-20">
          
          {/* Mid-Background: Outline Text */}
          <div className="absolute z-10 w-full top-[50%] -translate-y-1/2 flex justify-center pointer-events-none overflow-hidden select-none">
            <h1 
              className="text-[24vw] lg:text-[28vw] font-display font-black leading-none tracking-tighter text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)" }}
            >
              <span>CUSTOM</span>
            </h1>
          </div>

          {/* Central Subject */}
          <div className="absolute z-20 w-full md:w-[85%] lg:w-[75%] xl:w-[78%] h-[78%] md:h-[90%] bottom-0 pointer-events-none flex justify-center items-end">
            <div className="absolute bottom-0 w-full h-full flex items-end justify-center">
              <img 
                src="https://yoode.com/cdn/shop/files/yd-seo-banner-custom-jersey-team.png?v=1789121863&width=1200" 
                alt="Custom Sports Jerseys" 
                className="w-full h-full object-cover object-top md:object-contain md:object-bottom drop-shadow-2xl" 
              />
            </div>
          </div>

          {/* Floating Highlights Wrapper */}
          <div className="absolute inset-0 w-full max-w-[1600px] mx-auto pointer-events-none z-30">
            {/* Left Floating Highlight */}
            <div className="absolute left-6 md:left-12 top-[15%] md:top-[28%] flex flex-col gap-4 md:gap-6 w-56 pointer-events-auto">
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 py-2 px-4 rounded-full text-xs font-semibold uppercase tracking-wider w-max shadow-lg">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                  </span>
                  <span>Custom Sports Jerseys</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-4xl lg:text-5xl font-display font-bold tracking-tight"><span>Rs.490</span></span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/80 mt-1 md:mt-2 flex items-center gap-2 leading-relaxed">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse shrink-0" />
                    <span>STARTING PRICE</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Floating Highlight */}
            <div className="absolute right-6 md:left-auto md:right-12 top-[15%] md:top-[28%] flex flex-col gap-4 md:gap-6 w-auto md:w-80 items-end md:items-center text-right md:text-center pointer-events-auto">
              <div className="flex flex-col gap-4 md:gap-6 items-start md:items-center">
                <p className="hidden md:block text-sm md:text-base leading-relaxed text-white/95 font-medium drop-shadow-md">
                  <span>Bring together your team colours, logo, player details and preferred style in a jersey design that gives every player a consistent, recognisable look.</span>
                </p>
                
                <a 
                  href="https://wa.me/918069750293" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex group items-center gap-2 py-3 px-6 md:py-3.5 md:px-7 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider hover:scale-105 transition-transform shadow-xl bg-yoode-coral text-white"
                >
                  <span>Design Your Kit →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-10 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="bg-yoode-onyx rounded-[32px] p-8 md:p-12 flex flex-wrap justify-between items-center gap-8 md:gap-4 text-white">
          <div className="text-left">
            <span className="block font-display text-4xl md:text-5xl font-black mb-1">Rs.490</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/60">Starting Price</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/10"></div>
          <div className="text-left">
            <span className="block font-display text-4xl md:text-5xl font-black mb-1">500+</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/60">Units A Day</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/10"></div>
          <div className="text-left">
            <span className="block font-display text-4xl md:text-5xl font-black mb-1">4</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/60">Experience Centres</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/10"></div>
          <div className="text-left">
            <span className="block font-display text-4xl md:text-5xl font-black mb-1">99%</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/60">Quality Checks</span>
          </div>
        </div>
      </section>

      {/* Value Pillars - Bento Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeader
            subHeading="Why Us"
            title="Why Businesses Choose Yoode"
            description="From quality fabrics to reliable delivery, we make custom apparel simple, scalable and stress-free for your brand."
            className="mb-12"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Factory, title: 'In-House Production', desc: 'Made at our Tirupur unit for better control over quality.' },
              { icon: PackageOpen, title: 'No Minimum Order', desc: 'Order one jersey or customise jerseys for your entire team.' },
              { icon: MousePointerClick, title: 'Design Mockup', desc: 'Review and refine your jersey design before production begins.' },
              { icon: Globe, title: 'Worldwide Delivery', desc: 'Get your completed custom jerseys delivered anywhere across the globe.' }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-[#EBEBEB] rounded-[32px] p-8 group relative overflow-hidden h-[320px] flex flex-col">
                <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur text-yoode-onyx flex items-center justify-center shadow-sm mb-6 z-10">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <div className="z-10 relative flex-1">
                  <h3 className="font-display text-2xl font-bold mb-3 text-yoode-onyx">{pillar.title}</h3>
                  <p className="text-yoode-onyx/70 font-medium leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop By Sport Interactive Carousel */}
      <ShopBySport />

      {/* Details / What you can customise (Bento Grid Style) */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <SectionHeader
          subHeading="Details"
          title="What You Can Customise"
          description="Add team identity, player names and sponsor branding to a custom sports jersey. Sublimation makes designs part of fabric."
          className="mb-12"
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: 'yd-seo-print-team-logo.png', title: 'Team Logo', desc: 'Add your club or company logo to the chest, sleeve or back in your preferred position.' },
            { img: 'yd-seo-print-player-name.png', title: 'Player Name', desc: 'Add individual player names to each jersey. Share the player list with us, and we\'ll take care of it.' },
            { img: 'yd-seo-print-player-number.png', title: 'Player Number', desc: 'Choose the number style, size and placement for the front or back to suit your sport.' },
            { img: 'yd-seo-print-sponsor-logos.png', title: 'Sponsor Logos', desc: 'Add sponsor logos to the front, sleeves or back while keeping your overall branding balanced.' },
            { img: 'yd-seo-print-team-colours.png', title: 'Team Colours', desc: 'Match your team colours or specific colour shades, with separate options available for home and away.' },
            { img: 'yd-seo-print-patterns.png', title: 'Patterns & Prints', desc: 'Add gradients, geometric patterns and full-sublimation graphics that flow across the jersey.' }
          ].map((feature, idx) => (
            <div key={idx} className="bg-[#EBEBEB] rounded-[32px] overflow-hidden group relative flex flex-col h-[400px]">
              <div className="p-8 z-10 relative">
                <h3 className="font-display text-2xl font-bold mb-3 text-yoode-onyx">{feature.title}</h3>
                <p className="text-yoode-onyx/70 font-medium text-sm leading-relaxed">{feature.desc}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[60%] p-4 pt-0">
                <div className="relative w-full h-full rounded-[24px] overflow-hidden shadow-sm">
                  <Image src={`https://yoode.com/cdn/shop/files/${feature.img}?v=1789123391&width=400`} alt={feature.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing (Bento Style) */}
      <section className="py-20 md:py-32 bg-yoode-onyx text-white rounded-t-[40px] px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeader
            subHeading="Pricing"
            title="Custom Made Jerseys"
            description="Choose your jersey style, fabric, sleeve length and print coverage, with player names and numbers included."
            className="mb-16"
            titleClassName="text-white"
            descriptionClassName="text-white/70"
            align="center"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: 'yd-seo-price-junior-jersey.png?v=1789124822', title: 'Junior Jersey', price: 'Starts from Rs.490' },
              { img: 'yd-seo-price-adult-jersey.png?v=1789124822', title: 'Adult Jersey', price: 'Starts from Rs.650' },
              { img: 'yd-seo-price-full-sleeve-jersey.png?v=1789124822', title: 'Full-Sleeve', price: 'Starts from Rs.750' },
              { img: 'yd-seo-price-team-order.png?v=1789124823', title: 'Team Orders', price: 'Lower per-piece pricing' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-[32px] p-8 text-center hover:bg-white/10 transition-colors flex flex-col h-[380px]">
                <div className="flex-1 relative mb-6 rounded-2xl overflow-hidden mix-blend-screen opacity-80">
                  <Image src={`https://yoode.com/cdn/shop/files/${item.img}&width=600`} alt={item.title} fill className="object-contain" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
                <p className="text-white/60 font-medium mb-6">{item.price}</p>
                <a href="https://wa.me/918069750293" className="inline-block border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-yoode-onyx transition-colors">
                  Enquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End CTA */}
      <section className="bg-[#EBEBEB] text-yoode-onyx py-24 md:py-32 text-center px-6 mx-6 md:mx-12 rounded-[40px] my-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.8)_0%,_transparent_100%)]"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex justify-center items-center gap-4 text-yoode-coral uppercase tracking-[0.2em] text-xs font-bold mb-6">
            Get Started
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">Ready to Create Your Custom Team Jersey?</h2>
          <p className="text-yoode-onyx/70 text-lg md:text-xl font-medium mb-10 max-w-xl mx-auto">Bring your team colours, logo and player details together in a jersey designed around your squad. We're here to help you get exactly what you need.</p>
          <a 
            href="https://wa.me/918069750293" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-yoode-coral text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-xl"
          >
            <span>Connect on WhatsApp</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
