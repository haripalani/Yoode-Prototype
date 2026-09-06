import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-yoode-onyx text-white/80 pt-20 pb-8 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <h3 className="font-display font-black text-3xl text-white tracking-tight">YOODE</h3>
            <p className="text-sm leading-relaxed font-medium">
              Yoode Promotions Pvt. Ltd.<br />
              Creating meaningful brand experiences through premium custom products.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <a href="tel:+918069750293" className="flex items-center gap-3 text-sm hover:text-white transition-colors w-max">
                <div className="p-2 bg-white/5 rounded-full"><Phone size={16} /></div>
                +91 8069 750 293
              </a>
              <a href="mailto:info@yoode.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors w-max">
                <div className="p-2 bg-white/5 rounded-full"><Mail size={16} /></div>
                info@yoode.com
              </a>
            </div>
          </div>

          {/* Quick Links 1 */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Explore</h4>
            <a href="#" className="text-sm hover:text-white transition-colors w-max">Corporate</a>
            <a href="#" className="text-sm hover:text-white transition-colors w-max">Sportswear</a>
            <a href="#" className="text-sm hover:text-white transition-colors w-max">Trendz</a>
            <a href="#" className="text-sm hover:text-white transition-colors w-max">Accessories</a>
          </div>

          {/* Quick Links 2 */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Company</h4>
            <a href="#" className="text-sm hover:text-white transition-colors w-max">About Us</a>
            <a href="#" className="text-sm hover:text-white transition-colors w-max">Experience Centers</a>
            <a href="#" className="text-sm hover:text-white transition-colors w-max">Design Studio</a>
            <a href="#" className="text-sm hover:text-white transition-colors w-max">Bulk Ordering</a>
          </div>

          {/* Case Studies */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Case Studies</h4>
            <a href="#" className="text-sm hover:text-white transition-colors w-max">Bitsnpixs</a>
            <a href="#" className="text-sm hover:text-white transition-colors w-max">iDynamics</a>
          </div>

        </div>

        {/* Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
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
