import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Wind, PaintBucket, PenTool, LayoutTemplate } from 'lucide-react';

const features = [
  {
    icon: <Wind className="w-6 h-6 text-yoode-onyx" />,
    title: 'Breathable Fabric',
    description: 'Keeps you cool during intense matches with high airflow and moisture-wicking properties.'
  },
  {
    icon: <PaintBucket className="w-6 h-6 text-yoode-onyx" />,
    title: 'Sublimation Printing',
    description: 'Design becomes part of the fabric. No peeling, cracking or fading over time.'
  },
  {
    icon: <PenTool className="w-6 h-6 text-yoode-onyx" />,
    title: 'Free Design Mockup',
    description: 'See exactly what your custom jersey will look like before you proceed to production.'
  },
  {
    icon: <LayoutTemplate className="w-6 h-6 text-yoode-onyx" />,
    title: 'No Minimum Order',
    description: 'Order 1 jersey or 100. We process all orders with the same care and attention.'
  }
];

export function CustomJerseysFabric() {
  return (
    <section className="py-20 md:py-32 w-full bg-white relative z-30">
      <div className="px-6 md:px-12 max-w-[1600px] mx-auto">
        <SectionHeader
          subHeading="Quality"
          title="Why Teams Choose Yoode"
          description="We use premium performance fabrics and advanced sublimation printing to create jerseys that look great and last long."
          className="mb-16"
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-[#F8F5F0] rounded-[32px] p-8 xl:p-10 flex flex-col items-start hover:-translate-y-2 transition-transform duration-500 ease-out"
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm mb-8">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-yoode-onyx mb-4">{feature.title}</h3>
              <p className="text-gray-500 text-[15px] font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
