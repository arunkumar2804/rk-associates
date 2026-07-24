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
    <section ref={ref} className="relative h-[480px] overflow-hidden bg-[#2B241D] flex items-center justify-center">
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(43,36,29,0.8)] to-transparent" />
      </motion.div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
        <h1 className="font-sora text-4xl md:text-5xl font-bold mb-6 text-[#F7F2EA]">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-[rgba(247,242,234,0.8)]">
          {subtitle}
        </p>
      </div>
    </section>
  );
};
