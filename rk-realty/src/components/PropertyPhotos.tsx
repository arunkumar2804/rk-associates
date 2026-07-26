"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface PropertyPhotosProps {
  images: { id?: string; url: string }[];
}

export default function PropertyPhotos({ images }: PropertyPhotosProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="mt-16">
      <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 20 }}>
        Property Photos
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div
            key={img.id || idx}
            onClick={() => setSelectedIndex(idx)}
            className="relative cursor-pointer group aspect-square rounded-xl overflow-hidden border border-[rgba(43,36,29,0.06)] bg-gray-100"
          >
            <img
              src={img.url}
              alt={`Property Photo ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="relative w-full max-w-5xl aspect-video mx-4 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  src={images[selectedIndex].url}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 w-12 h-12 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-md border border-white/10"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 w-12 h-12 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-md border border-white/10"
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white/80 font-medium tracking-widest text-sm backdrop-blur-md border border-white/10">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
