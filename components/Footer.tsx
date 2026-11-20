import { Phone, Mail, ArrowRight } from "lucide-react";
import { FooterDirectory } from "@/components/FooterDirectory";
import { FooterLink } from "@/components/FooterLink";
import { footerColumns } from "@/data/footerDirectory";

export function Footer() {
  return (
    <footer className="relative bg-yoode-onyx text-white pt-32 pb-8 px-6 md:px-12 overflow-hidden border-t border-white/5">
      


      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-10 mb-16">

          {/* Company Info & Contact */}
          <div className="flex flex-col gap-6">
            <img loading="lazy" decoding="async" src="/logo-dark.avif" alt="Yoode Logo" className="h-6 md:h-7 w-auto object-contain object-left brightness-0 invert" />
            <p className="text-sm text-white/60 leading-relaxed font-medium max-w-sm">
              Yoode Promotions Pvt. Ltd.<br />
              Creating meaningful brand experiences through premium custom products and campaigns tailored to drive results.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <a href="tel:+918069750293" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors w-max">
                <div className="p-2 bg-white/5 rounded-full text-white"><Phone size={16} /></div>
                +91 8069 750 293
              </a>
              <a href="mailto:info@yoode.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors w-max">
                <div className="p-2 bg-white/5 rounded-full text-white"><Mail size={16} /></div>
                info@yoode.com
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-5 md:justify-self-end md:max-w-sm w-full">
            <h4 className="font-bold text-white text-base mb-2">Newsletter</h4>
            <p className="text-sm text-white/60 leading-relaxed mb-2">
              Stay ahead with design & marketing tips and strategies that drive results.
            </p>
            <div className="flex items-center w-full rounded-full border border-gray-200 bg-white p-1.5 focus-within:border-yoode-coral focus-within:ring-1 focus-within:ring-yoode-coral/20 transition-all z-20 relative">
              <span className="pl-3 text-gray-400">@</span>
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-sm px-3 text-yoode-onyx placeholder:text-gray-400 min-w-0"
              />
              <button className="bg-yoode-coral hover:bg-yoode-coral/90 text-white rounded-full p-2.5 transition-colors flex items-center justify-center flex-shrink-0">
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>

        </div>

        {/* Link columns: Shop, Brand, Company, Our Stores, Support & Policies */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 border-t border-white/5 pt-12 mb-16">
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col">
              <h4 className="font-bold text-white text-base mb-5">{column.title}</h4>
              <ul className="flex flex-col gap-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} className="text-sm" />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Collapsible link directory */}
        <FooterDirectory />

        {/* Legal Bar */}
        <div className="flex justify-center md:justify-start text-xs font-medium text-white/40 mt-8 border-t border-white/5 pt-8">
          <p>© {new Date().getFullYear()} Yoode Promotions Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
