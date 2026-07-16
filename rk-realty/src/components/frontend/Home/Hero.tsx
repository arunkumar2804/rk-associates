"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const SLIDES = [
  {
    img: '/assets/images/6d4e9c42-e45a-498c-a374-e31fa0ea731d.avif',
    tag: "RK Associates",
    headline: "Find Your Perfect Property in Bengaluru",
    subheading: "For over 15 years, RK Associates has been helping homebuyers, investors, and businesses discover exceptional residential and commercial properties across Bengaluru.",
    ctaText: "Explore Properties",
    ctaLink: "/properties"
  },
  {
    img: '/assets/images/6dbec011-6386-4293-82a4-33c327e15764.avif',
    tag: "Godrej Vanantara",
    headline: "Forest-Inspired Luxury Living at Godrej Vanantara",
    subheading: "Experience an extraordinary lifestyle at Godrej Vanantara, a premium residential township on Bannerghatta Road.",
    ctaText: "Know more",
    ctaLink: "/properties/godrej-vanantara"
  },
  {
    img: '/assets/images/9e4f05e1-c889-48dc-b3a3-1353c1a874d0.avif',
    tag: "Sobha One World",
    headline: "A New Benchmark in Township Living",
    subheading: "Welcome to Sobha One World, a landmark integrated township in Hoskote, East Bengaluru.",
    ctaText: "Discover the Project",
    ctaLink: "/properties/sobha-one-world"
  }
];

const DesktopHero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hidden lg:block" style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '20px 32px 0' }}>
      <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', minHeight: 560, display: 'flex', alignItems: 'center', background: '#2B241D' }}>
        {SLIDES.map((slide, idx) => (
          <img 
            key={slide.img}
            src={slide.img} 
            alt="Hero Banner" 
            style={{ 
              position: 'absolute', 
              inset: 0, 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              opacity: idx === currentIdx ? 1 : 0,
              transition: 'opacity 1s ease-in-out'
            }} 
          />
        ))}

        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(20,16,12,0.72) 0%,rgba(20,16,12,0.42) 55%,rgba(20,16,12,0.15) 100%)' }}></div>
        
        {SLIDES.map((slide, idx) => (
          <div key={idx} style={{ 
            position: 'absolute', 
            inset: 0, 
            padding: '64px 56px', 
            maxWidth: 640,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            opacity: idx === currentIdx ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            pointerEvents: idx === currentIdx ? 'auto' : 'none'
          }}>
            <div>
              <span style={{ 
                display: 'inline-block', 
                background: 'rgba(247,242,234,0.12)', 
                border: '1px solid rgba(247,242,234,0.25)', 
                color: '#F7F2EA', 
                fontSize: 12.5, 
                fontWeight: 600, 
                padding: '6px 14px', 
                borderRadius: 100, 
                marginBottom: 22 
              }}>{slide.tag}</span>
              <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 48, lineHeight: 1.14, color: '#F7F2EA', margin: '0 0 18px', fontWeight: 600 }}>
                {slide.headline}
              </h1>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(247,242,234,0.78)', margin: '0 0 32px', maxWidth: 480 }}>
                {slide.subheading}
              </p>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
                <Link href={slide.ctaLink} className="btn-hover" style={{ 
                  textDecoration: 'none', 
                  background: '#F06400', 
                  color: '#F7F2EA', 
                  padding: '15px 28px', 
                  borderRadius: 100, 
                  fontWeight: 700, 
                  fontSize: 14.5,
                  display: 'inline-block'
                }}>{slide.ctaText}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* slide dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 18 }}>
        {SLIDES.map((_, idx) => (
          <span 
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            style={{ 
              width: idx === currentIdx ? 26 : 10, 
              height: 4, 
              borderRadius: 4, 
              background: idx === currentIdx ? '#F06400' : 'rgba(43,36,29,0.25)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
          ></span>
        ))}
      </div>
    </section>
  );
};

const MobileHero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll logic for mobile horizontal swiper
  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const nextIdx = (currentIdx + 1) % SLIDES.length;
        const width = scrollRef.current.clientWidth;
        scrollRef.current.scrollTo({
          left: nextIdx * width,
          behavior: 'smooth'
        });
        setCurrentIdx(nextIdx);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIdx]);

  // Handle manual scroll to update dots
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const idx = Math.round(scrollLeft / width);
      setCurrentIdx(idx);
    }
  };

  return (
    <section className="lg:hidden w-full overflow-hidden pb-4">
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full"
        style={{ scrollBehavior: 'smooth' }}
      >
        {SLIDES.map((slide, idx) => (
          <div key={idx} className="w-full flex-none snap-center p-4">
            <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-lg flex flex-col justify-end">
              <img 
                src={slide.img} 
                alt={slide.headline}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14100C] via-[#14100C]/70 to-transparent"></div>
              
              <div className="relative z-10 p-6 pt-12 flex flex-col items-start gap-4">
                <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  {slide.tag}
                </span>
                <h1 className="font-sora font-bold text-3xl text-white leading-tight">
                  {slide.headline}
                </h1>
                <p className="text-white/80 text-sm leading-relaxed mb-2 line-clamp-2">
                  {slide.subheading}
                </p>
                <Link href={slide.ctaLink} className="w-full text-center bg-[#F06400] text-white py-4 rounded-xl font-bold text-[15px] active:scale-95 transition-transform shadow-lg shadow-[#F06400]/20">
                  {slide.ctaText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-2">
        {SLIDES.map((_, idx) => (
          <div 
            key={idx}
            className={`transition-all duration-300 rounded-full h-1.5 ${idx === currentIdx ? 'w-6 bg-[#F06400]' : 'w-1.5 bg-[#4A4038]/20'}`}
          />
        ))}
      </div>
    </section>
  );
};

export const Hero = () => {
  return (
    <>
      <DesktopHero />
      <MobileHero />
    </>
  );
};
