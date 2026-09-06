const pillars = [
  {
    title: "Equip your team. Define your brand.",
    description: "Onboarding kits, company merch, corporate gifting, conference apparel.",
    color: "bg-[#f3f4f6] text-yoode-onyx",
    image: "/Services/Corporate.png",
  },
  {
    title: "Kit your team. Own the field.",
    description: "Custom jerseys, teamwear, tournament apparel, fanwear for any sport.",
    color: "bg-[#0066ff] text-white",
    image: "/Services/Sports kit.png",
  },
  {
    title: "Make it yours. One piece or a thousand.",
    description: "Custom tees, gifts, event merch, identity products any quantity.",
    color: "bg-[#1c1c1c] text-white",
    image: "/Services/Personalized gift.png",
  },
];

export function ServicePillars() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight">What Can We Build For You?</h2>
          <p className="text-white/70 mt-4 text-lg max-w-2xl mx-auto">
            Choose a service model that fits your goals, whether for a single piece or a bulk run.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div 
              key={pillar.title} 
              className={`rounded-[32px] p-10 pb-0 ${pillar.color} flex flex-col shadow-sm group cursor-pointer overflow-hidden relative h-[450px] md:h-[500px] transition-transform duration-300 hover:-translate-y-2`}
            >
              <div className="relative z-10 flex-1">
                <h3 className="font-display font-medium text-[28px] md:text-[32px] mb-4 leading-tight">{pillar.title}</h3>
                <p className="text-[15px] opacity-80 leading-relaxed max-w-[90%]">
                  {pillar.description}
                </p>
              </div>
              
              <div className="relative h-[250px] md:h-[300px] w-full mt-auto translate-y-6 group-hover:translate-y-2 transition-transform duration-700 ease-out z-0">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-full h-full object-cover object-bottom mix-blend-multiply"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
