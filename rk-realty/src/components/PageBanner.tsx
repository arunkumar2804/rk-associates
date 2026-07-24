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
      
      {/* Visually hidden for SEO since text is removed from the cover image */}
      <div className="sr-only">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};
