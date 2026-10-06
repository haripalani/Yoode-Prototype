import { ArrowRight } from 'lucide-react';

export function CustomJerseysCtaLight() {
  return (
    <section 
      className="relative w-full mt-12 mb-0 overflow-hidden bg-[#F8F8F8] rounded-t-[40px] md:rounded-t-[60px]"
    >
      {/* Subtle Background Glows matching the theme */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EB6F3D]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-black/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Concentric Circles Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="absolute w-[400px] h-[400px] rounded-full border border-black/[0.03]" />
        <div className="absolute w-[700px] h-[700px] rounded-full border border-black/[0.02]" />
        <div className="absolute w-[1000px] h-[1000px] rounded-full border border-black/[0.02]" />
        <div className="absolute w-[1300px] h-[1300px] rounded-full border border-black/[0.01]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 flex flex-col md:flex-row items-stretch justify-between">
        
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[550px] pt-16 md:pt-28 pb-12 md:pb-16 z-20">
          <h2 className="text-[2.5rem] md:text-6xl lg:text-[72px] font-display font-black text-black mb-6 leading-[0.95] tracking-tight uppercase drop-shadow-sm">
            Ready to <br className="hidden md:block" />create your <br className="hidden md:block" />custom <br className="hidden lg:block" />
            <span className="text-[#EB6F3D]">team jersey?</span>
          </h2>
          
          <p className="text-gray-600 text-[15px] md:text-[18px] leading-relaxed mb-10 max-w-[450px]">
            Bring your team colours, logo and player details together in a jersey designed around your squad. Our design team is ready to help.
          </p>
          
          <a 
            href="https://wa.me/918069750293" 
            className="inline-flex items-center justify-center gap-4 px-8 h-16 rounded-full bg-black text-white hover:bg-[#EB6F3D] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group font-bold uppercase tracking-widest text-xs"
            aria-label="Contact us to start designing"
          >
            Start Designing Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Right Content - Model Image */}
        <div className="relative w-full md:w-[60%] h-[350px] md:h-auto md:absolute md:bottom-0 md:top-[-5%] md:right-[-5%] flex items-end justify-center md:justify-end mt-8 md:mt-0 z-10 pointer-events-none">
           <img 
             src="/banner-1.png" 
             alt="Custom Team Jersey Model" 
             className="w-full h-full object-contain object-bottom md:object-right-bottom drop-shadow-2xl"
           />
        </div>

      </div>
    </section>
  );
}
