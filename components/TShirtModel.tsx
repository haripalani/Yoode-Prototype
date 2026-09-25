"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";

interface TShirtModelProps {
  color: string;
}

export function TShirtModel({ color }: TShirtModelProps) {
  // Load the 3D model
  const { nodes, materials } = useGLTF("/shirt_baked.glb") as any;

  return (
    <group dispose={null} scale={8}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-color={color}
        material-roughness={1}
      />
    </group>
  );
}

// Preload the model so it loads instantly when the user reaches the section
useGLTF.preload("/shirt_baked.glb");
