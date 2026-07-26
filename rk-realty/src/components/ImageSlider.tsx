"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSliderProps {
  images: string[];
  interval?: number;
  className?: string;
}

export default function ImageSlider({ images, interval = 2000, className = "" }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) {
    return <div className={`bg-gray-200 ${className}`} />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
}
