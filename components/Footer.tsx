import { Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-yoode-onyx text-white pt-32 pb-8 px-6 md:px-12 overflow-hidden border-t border-white/5">
      


      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 lg:gap-10 mb-20">
          
          {/* Company Info & Contact */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <img src="/logo-dark.avif" alt="Yoode Logo" className="h-6 md:h-7 w-auto object-contain object-left brightness-0 invert" />
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

          {/* Explore & Case Studies */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h4 className="font-bold text-white text-base mb-2">Explore</h4>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors w-max">Corporate</a>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors w-max">Sportswear</a>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors w-max">Trendz</a>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors w-max">Accessories</a>
            </div>
            
            <div className="flex flex-col gap-5">
              <h4 className="font-bold text-white text-base mb-2">Case Studies</h4>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors w-max">Bitsnpixs</a>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors w-max">iDynamics</a>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-white text-base mb-2">Company</h4>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors w-max">About Us</a>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors w-max">Experience Centers</a>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors w-max">Design Studio</a>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors w-max">Bulk Ordering</a>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1 flex flex-col gap-5">
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

        {/* Legal Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/40 mt-8 border-t border-white/5 pt-8">
          <p>© {new Date().getFullYear()} Yoode Promotions Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center">
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
