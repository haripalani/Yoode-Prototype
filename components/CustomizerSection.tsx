"use client";

import React, { useState } from "react";
import { TShirtCanvas } from "./TShirtCanvas";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const COLORS = [
  { name: "White", value: "#FFFFFF" },
  { name: "Black", value: "#222222" },
  { name: "Navy", value: "#000080" },
  { name: "Red", value: "#D32F2F" },
  { name: "Yellow", value: "#FBC02D" },
  { name: "Green", value: "#388E3C" },
];

export function CustomizerSection() {
  const [currentColor, setCurrentColor] = useState(COLORS[1].value); // Default to Black

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="customize">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-yoode-onyx mb-6"
          >
            Design Your Perfect Fit
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-yoode-onyx/70"
          >
            Experience our 3D customizer. Choose your color and see your apparel from every angle before you buy.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* 3D Viewer */}
          <div className="flex-1 lg:w-2/3 shadow-2xl shadow-yoode-onyx/10 rounded-xl border border-yoode-linen">
            <TShirtCanvas color={currentColor} />
          </div>

          {/* Controls */}
          <div className="flex-none lg:w-1/3 flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-xl font-bold text-yoode-onyx mb-4">Choose Color</h3>
              <div className="flex flex-wrap gap-4">
                {COLORS.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setCurrentColor(color.value)}
                    className={`relative w-12 h-12 rounded-full shadow-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      currentColor === color.value ? "ring-2 ring-yoode-onyx ring-offset-2" : "ring-1 ring-yoode-onyx/10"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                    aria-label={`Select ${color.name}`}
                  >
                    {currentColor === color.value && (
                      <Check 
                        className={`absolute inset-0 m-auto w-5 h-5 ${color.value === "#FFFFFF" ? "text-yoode-onyx" : "text-white"}`} 
                        strokeWidth={3} 
                      />
                    )}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm text-yoode-onyx/60">
                Selected: <span className="font-semibold text-yoode-onyx">{COLORS.find(c => c.value === currentColor)?.name}</span>
              </p>
            </div>

            <div className="pt-8 border-t border-yoode-linen">
              <h3 className="text-xl font-bold text-yoode-onyx mb-4">Add Logo/Artwork</h3>
              <div className="p-6 border-2 border-dashed border-yoode-onyx/20 rounded-xl text-center bg-yoode-linen/50 hover:bg-yoode-linen transition-colors cursor-pointer group">
                <p className="text-yoode-onyx/70 group-hover:text-yoode-onyx transition-colors">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                  <br />
                  <span className="text-sm">(Feature coming soon)</span>
                </p>
              </div>
            </div>

            <button className="w-full bg-yoode-onyx text-white rounded-full py-4 font-semibold hover:bg-yoode-onyx/90 transition-colors shadow-lg shadow-yoode-onyx/20">
              Start Designing Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
