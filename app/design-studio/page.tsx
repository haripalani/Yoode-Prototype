import React, { Suspense } from 'react';
import DesignStudio from '@/components/DesignStudio';

export const metadata = {
  title: 'Design Studio - Yoode Bespoke Customizer',
  description: 'Design your own custom apparel, caps, and jerseys with our bespoke 3D interactive studio.',
};

export default function DesignStudioPage() {
  return (
    <Suspense fallback={<div className="h-screen w-full bg-[#F6F5F2]" />}>
      <DesignStudio />
    </Suspense>
  );
}
