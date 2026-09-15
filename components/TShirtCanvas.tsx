"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Center } from "@react-three/drei";
import { TShirtModel } from "./TShirtModel";

interface TShirtCanvasProps {
  color: string;
}

export function TShirtCanvas({ color }: TShirtCanvasProps) {
  return (
    <div className="w-full h-full min-h-[400px] bg-yoode-linen rounded-xl overflow-hidden relative">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <Suspense fallback={null}>
          <Center>
            <TShirtModel color={color} />
          </Center>
          
          <ContactShadows 
            position={[0, -2.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={1.5} 
            far={4} 
          />
        </Suspense>
        
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={12}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2 + 0.2}
        />
      </Canvas>
      <div className="absolute bottom-4 left-4 text-xs text-yoode-onyx/50 pointer-events-none">
        Drag to rotate. Scroll to zoom.
      </div>
    </div>
  );
}
