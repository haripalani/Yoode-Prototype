"use client";

import { useState } from "react";
import { ArrowDownRight, ChevronRight, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function BlogsListPage() {
  const [activeTab, setActiveTab] = useState("ALL POSTS");

  return (
    <div className="relative min-h-screen w-full selection:bg-yoode-onyx selection:text-white flex flex-col font-sans bg-white">
      <Header />
      
      <main className="flex-grow bg-white">
        
        {/* Full Screen Banner matching PLP */}
        <div className="relative w-full overflow-hidden bg-[#111827] text-white min-h-[400px] md:min-h-[500px] flex items-center justify-center flex-col pt-24 pb-16 md:pb-24">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1600&q=80" alt="News Banner" className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 hover:scale-100 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-[#111827]/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] pointer-events-none" />
          </div>
          
          <div className="absolute z-10 w-full flex justify-center pointer-events-none overflow-hidden select-none opacity-40">
            <h1 
              className="text-[28vw] font-display font-black leading-none tracking-tighter text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.4)" }}
            >
              YOODE
            </h1>
          </div>

          <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center">
            <span className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-white/80 mb-6">
              <span className="w-8 h-[1px] bg-white/40"></span>
              Exploring Creativity and Innovation Daily
              <span className="w-8 h-[1px] bg-white/40"></span>
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-display font-black tracking-tight drop-shadow-2xl text-white leading-none">News & Blogs</h1>
          </div>
        </div>

        {/* Overlapping Content Section */}
        <div className="relative z-40 bg-white w-full rounded-t-[40px] md:rounded-t-[60px] -mt-12 md:-mt-16 pt-10 md:pt-16 pb-16 md:pb-24 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">

            {/* Filter Bar & Header Elements */}
            <div className="flex flex-col xl:flex-row justify-between items-center gap-6 mb-12 border-b border-gray-100 pb-8">
              
              {/* Left: Back Button & Breadcrumbs */}
              <div className="flex items-center gap-4 w-full xl:w-1/4">
                <Link href="/" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shrink-0 cursor-pointer group">
                  <ArrowLeft className="w-4 h-4 text-gray-600 transition-transform group-hover:-translate-x-0.5" />
                </Link>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <Link href="/" className="hover:text-black transition-colors cursor-pointer">Home</Link>
                  <span>/</span>
                  <span className="text-black">Blogs</span>
                </div>
              </div>

              {/* Middle: Filter Pill Switcher */}
              <div className="flex-1 flex justify-center w-full overflow-hidden">
                <div className="inline-flex items-center bg-[#F3F4F6] p-1.5 rounded-full overflow-x-auto no-scrollbar max-w-full cursor-grab active:cursor-grabbing">
                  {["ALL POSTS", "BRANDING", "APPAREL", "TUTORIALS", "DESIGN"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest transition-all rounded-full whitespace-nowrap border border-transparent ${
                        activeTab === tab
                          ? "text-black bg-white shadow-sm"
                          : "text-gray-500 hover:text-black hover:border-black"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Search Bar */}
              <div className="flex items-center xl:justify-end w-full xl:w-1/4">
                <div className="relative w-full max-w-full xl:max-w-[220px]">
                  <input 
                    type="text" 
                    placeholder="SEARCH POSTS..." 
                    className="w-full bg-[#F3F4F6] rounded-full px-5 py-3 pl-11 text-[10px] font-bold uppercase tracking-widest text-black placeholder-gray-400 outline-none focus:bg-gray-200 transition-all"
                  />
                  <svg className="w-3.5 h-3.5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              
              {blogs
                .filter((blog) => {
                  if (activeTab === "ALL POSTS") return true;
                  if (activeTab === "TUTORIALS" && blog.category === "TUTORIAL") return true;
                  return blog.category === activeTab;
                })
                .map((blog, index) => {
                  // Text-only card
                  if (blog.type === "text-only") {
                    return (
                      <Link href={`/blogs/${blog.slug}`} key={blog.id} className={`col-span-1 rounded-[32px] p-8 flex flex-col justify-between h-[450px] md:h-[520px] relative group overflow-hidden ${blog.bgColor} hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-out cursor-pointer`}>
                        <div className="flex justify-between items-start relative z-10">
                          <span className="border border-black/20 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-black/80">
                            {blog.category}
                          </span>
                          <div className="w-6 h-6 border-[3px] border-black rounded-md opacity-80" />
                        </div>
                        <div className="mt-12 mb-auto pr-4 relative z-10">
                          <h3 className="text-4xl md:text-[2.5rem] font-bold leading-[1.05] tracking-tight text-black mb-4">
                            {blog.title}
                          </h3>
                        </div>
                        <div className="flex items-center justify-between mt-8 relative z-10">
                          <span className="text-[11px] font-bold tracking-widest text-black/80 uppercase">{blog.actionText}</span>
                          <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white transition-transform shadow-lg group-hover:scale-110">
                            <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
                          </div>
                        </div>
                      </Link>
                    );
                  }

                  // Wide Image card
                  if (blog.type === "image-wide") {
                    return (
                      <Link href={`/blogs/${blog.slug}`} key={blog.id} className="col-span-1 md:col-span-2 rounded-[32px] h-[450px] md:h-[520px] relative group overflow-hidden bg-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-out cursor-pointer block">
                        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-12">
                          <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.05] w-full">{blog.title}</h3>
                        </div>
                      </Link>
                    );
                  }

                  // Half Image card
                  if (blog.type === "half-image") {
                    return (
                      <Link href={`/blogs/${blog.slug}`} key={blog.id} className={`col-span-1 rounded-[32px] flex flex-col h-[520px] relative group overflow-hidden ${blog.bgColor} hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-out cursor-pointer`}>
                        <div className="p-8 pb-6 flex flex-col">
                          <div className="flex justify-between items-start">
                            <span className={`border ${blog.actionDark ? 'border-black/20 text-black/80' : 'border-white/30 text-white'} text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
                              {blog.category}
                            </span>
                            <div className="w-6 h-6 flex items-center justify-center">
                              <div className={`w-1.5 h-6 ${blog.actionDark ? 'bg-black/80' : 'bg-white/90'} absolute rotate-45`} />
                              <div className={`w-1.5 h-6 ${blog.actionDark ? 'bg-black/80' : 'bg-white/90'} absolute -rotate-45`} />
                            </div>
                          </div>
                          <h3 className={`text-[1.75rem] md:text-3xl font-bold leading-[1.05] tracking-tight ${blog.actionDark ? 'text-black' : 'text-white'} mt-8 mb-3`}>
                            {blog.title}
                          </h3>
                        </div>
                        <div className="flex-1 relative w-full min-h-0">
                          <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover" />
                          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
                            <span className="text-[10px] font-bold tracking-widest text-white uppercase drop-shadow-md">{blog.actionText}</span>
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black transition-transform shadow-lg group-hover:scale-110">
                              <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  }

                  return null;
                })}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
