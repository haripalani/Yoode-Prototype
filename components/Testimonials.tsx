import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kirthik K",
    text: "Yoode is my go-to store for custom shirts now. Quality, pricing, and support are all well balanced. They handled our bulk order smoothly without any confusion.",
  },
  {
    name: "J Jeflin",
    text: "Ordered a few custom shirts for a family function. Quality was nice and delivery was on time.",
  },
  {
    name: "Nahla K",
    text: "Good quality shirts and friendly service. Ordered in bulk for a school event. Delivery was on time... Still satisfied.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-yoode-onyx text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight">Trusted by teams and brands across India.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((review, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-6">
              <Quote size={32} className="text-yoode-coral/80" />
              <p className="text-lg leading-relaxed text-white/90 italic flex-1">
                "{review.text}"
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="font-bold font-display">{review.name}</p>
                <p className="text-xs text-white/50 uppercase tracking-widest mt-1">Verified Client</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
