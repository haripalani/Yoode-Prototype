import { Printer, Droplet, Scissors, Wand2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  { title: "DTF Printing", icon: Printer, desc: "Direct to Film high-quality prints." },
  { title: "DTG Printing", icon: Droplet, desc: "Direct to Garment for complex designs." },
  { title: "Embroidery", icon: Scissors, desc: "Premium stitching for your brand." },
  { title: "Coloreel", icon: Wand2, desc: "Instant thread coloring technology." }
];

export function Services() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50 text-yoode-onyx">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subHeading="Our Services"
          title="Our Printing Services"
          description="Industry-leading technology for every customization need."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center cursor-pointer">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 text-[#E53935]">
                <s.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-yoode-onyx/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
