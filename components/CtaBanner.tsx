import { MessageCircle, FileText, ArrowUpRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 px-6 md:px-12 bg-yoode-coral text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight leading-tight">
          Your brand deserves more than ordinary merchandise.
        </h2>
        <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl">
          Tell us what you need — we'll get back to you within 2 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full justify-center">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white py-4 px-8 rounded-full font-bold text-sm uppercase tracking-wider transition-colors shadow-lg hover:-translate-y-1 transform duration-200 cursor-pointer">
            <MessageCircle size={20} />
            Chat with us on WhatsApp
            <ArrowUpRight size={16} />
          </button>

          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-yoode-onyx hover:bg-yoode-onyx/90 text-white py-4 px-8 rounded-full font-bold text-sm uppercase tracking-wider transition-colors shadow-lg hover:-translate-y-1 transform duration-200 cursor-pointer">
            <FileText size={20} />
            Browse the Catalogue
          </button>
        </div>
      </div>
    </section>
  );
}
