"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, TrendingUp } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure the element is mounted and animation has started
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      
      // Prevent body scrolling
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Handle keyboard shortcuts (ESC to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const popularSearches = [
    "Men's Oversized T-Shirts",
    "Corporate Gift Boxes",
    "Cricket Jerseys",
    "Polo Shirts",
    "Custom Hoodies"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-yoode-onyx/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ 
              type: "spring",
              damping: 25,
              stiffness: 300
            }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Search Input Area */}
            <div className="flex items-center px-6 py-5 border-b border-gray-100">
              <Search className="w-6 h-6 text-gray-400 mr-4 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search products, categories, or services..."
                className="flex-1 text-xl font-medium text-yoode-onyx placeholder:text-gray-300 outline-none bg-transparent"
              />
              <button 
                onClick={onClose}
                className="ml-4 px-2 py-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-yoode-onyx transition-colors text-[10px] font-bold tracking-widest border border-gray-200"
              >
                ESC
              </button>
            </div>

            {/* Popular Searches */}
            <div className="bg-gray-50 px-6 py-8">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <TrendingUp size={14} /> Popular Searches
              </h4>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term, index) => (
                  <button
                    key={index}
                    onClick={onClose} // In real app, this would perform the search
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-yoode-onyx hover:border-[#E53935] hover:text-[#E53935] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
