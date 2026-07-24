"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface PageBannerProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

export const PageBanner = ({ imageSrc, title, subtitle }: PageBannerProps) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[30vh] lg:h-[70vh] overflow-hidden bg-[#2B241D] flex items-center justify-center">
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover opacity-100"
        />
      </motion.div>
      
      {/* Text Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center pointer-events-none">
        <div className="text-center px-4 max-w-4xl pt-20 relative z-10">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight drop-shadow-md whitespace-pre-line" style={{ fontFamily: '"Rastiga", serif', fontWeight: 400 }}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-[#F7F2EA] text-lg md:text-xl drop-shadow-md">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
