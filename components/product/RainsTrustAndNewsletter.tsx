"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Globe, ArrowRight, Check } from "lucide-react";

export default function RainsTrustAndNewsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setIsSubscribed(false);
    }, 3500);
  };

  return (
    <footer className="w-full bg-[#f4f4f4] text-black border-t border-black/10 pt-16 pb-12 select-none">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Main Grid: Left Trust & Newsletter + Right Nav Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-black/10">
          
          {/* Left Column: Big Headlines & Newsletter */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black leading-tight">
                All orders ship within 24 business hours.
                <br />
                2-year product warranty
                <br />
                30-day returns
              </h2>

              <div className="mt-8">
                <h3 className="font-bold text-sm sm:text-base text-black mb-2">
                  Get your weekly dose of Yoode.
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed max-w-md mb-6">
                  Receive updates on pre-access, product drops, exclusive member offers, events, and more &ndash; delivered right to your inbox.
                </p>

                {/* Newsletter Form */}
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white border border-black/15 rounded-full px-5 py-3 text-xs sm:text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black shadow-xs"
                  />
                  <button
                    type="submit"
                    className={`py-3 px-7 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isSubscribed
                        ? "bg-emerald-600 text-white"
                        : "bg-black hover:bg-neutral-800 text-white shadow-md active:scale-95"
                    }`}
                  >
                    {isSubscribed ? (
                      <span className="flex items-center gap-1.5">
                        <Check size={14} /> Subscribed
                      </span>
                    ) : (
                      "Sign up"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs sm:text-sm">
            
            {/* Service */}
            <div>
              <h4 className="font-bold text-black mb-4">Service</h4>
              <ul className="space-y-2.5 text-gray-600 font-medium">
                <li><Link href="#" className="hover:text-black transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Shipping</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Returns</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Warranty</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Store locator</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Legal Guarantee</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Withdraw from purchase</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-black mb-4">Company</h4>
              <ul className="space-y-2.5 text-gray-600 font-medium">
                <li><Link href="#" className="hover:text-black transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Career</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Image bank</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Press</Link></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold text-black mb-4">Social</h4>
              <ul className="space-y-2.5 text-gray-600 font-medium">
                <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-black transition-colors">TikTok</a></li>
                <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
              </ul>
            </div>

            {/* Shipping To */}
            <div>
              <h4 className="font-bold text-black mb-4">Shipping to</h4>
              <button 
                type="button"
                className="flex items-center gap-2 text-gray-700 hover:text-black font-medium transition-colors"
              >
                <Globe size={15} />
                <span>India / Worldwide</span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-medium">
          <div>
            &copy; Yoode 2026. All rights reserved
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="#" className="hover:text-black transition-colors">Terms &amp; Conditions</Link>
            <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Accessibility Statement</Link>
            <Link href="#" className="hover:text-black transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
