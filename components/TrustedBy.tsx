export function TrustedBy() {
  const logos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/98/UST_%28company%29_Logo.svg", alt: "UST HealthProof" },
    { src: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://hrblock.com&size=128", alt: "H&R Block" },
    { src: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://infospica.com&size=128", alt: "Infospica" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg", alt: "Infosys" },
    { src: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://zafin.com&size=128", alt: "Zafin" },
  ];

  return (
    <div className="w-full bg-transparent relative z-50 pt-0 -mt-12 md:-mt-16">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
      <div className="w-full bg-white rounded-t-[40px] md:rounded-t-[60px] py-12 md:py-16 shadow-[0_-20px_40px_rgba(0,0,0,0.1)] overflow-hidden">
        
        {/* Title Section */}
        <div className="max-w-7xl mx-auto text-center px-6 mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tight text-yoode-onyx">
            Trusted by teams and brands across India
          </h2>
          <p className="mt-4 text-yoode-onyx/60 text-sm md:text-[15px] font-medium max-w-xl mx-auto">
            From startups to enterprises Yoode delivers.
          </p>
        </div>

        <div className="w-full overflow-hidden flex relative">
          {/* Edge Gradients for smooth fade in/out */}
          <div className="absolute left-0 top-0 w-12 md:w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-12 md:w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee flex whitespace-nowrap">
            {/* First Set */}
            <div className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24">
              {[...logos, ...logos].map((logo, idx) => (
                <div key={`set1-${idx}`} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer shrink-0 w-24 md:w-32">
                  <img src={logo.src} alt={logo.alt} className="w-full h-auto object-contain rounded-md" />
                </div>
              ))}
            </div>
            {/* Second Set (Duplicate for seamless loop) */}
            <div className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24">
              {[...logos, ...logos].map((logo, idx) => (
                <div key={`set2-${idx}`} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer shrink-0 w-24 md:w-32">
                  <img src={logo.src} alt={logo.alt} className="w-full h-auto object-contain rounded-md" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
