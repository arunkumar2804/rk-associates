import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface PageBannerProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
}

export const PageBanner = ({ imageSrc, title, subtitle }: PageBannerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Slide up and fade out the content as we scroll down
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div 
      ref={ref}
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '40vh', 
        minHeight: '300px', 
        overflow: 'hidden',
        background: '#2B241D'
      }}
    >
      {/* Background Image with slight parallax */}
      <motion.div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y,
          opacity
        }}
      />
      {/* Overlay to ensure text readability */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(43,36,29,0.3) 0%, rgba(43,36,29,0.7) 100%)'
        }}
      />
      
      {/* Content */}
      <motion.div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '40px 32px',
          textAlign: 'center',
          color: '#F7F2EA',
          y,
          opacity
        }}
      >
        <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 48, fontWeight: 700, marginBottom: 12 }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize: 18, color: 'rgba(247,242,234,0.9)', maxWidth: 800, margin: '0 auto' }}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};
