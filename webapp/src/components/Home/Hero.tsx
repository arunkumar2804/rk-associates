import { useState, useEffect } from 'react';

const SLIDES = [
  {
    img: '/assets/images/banners/rk-associates-1.avif',
    ctaText: null,
    ctaLink: null
  },
  {
    img: '/assets/images/banners/godrej-vanantara-1.avif',
    ctaText: 'View Godrej Vanantara',
    ctaLink: '/properties/godrej-vanantara'
  },
  {
    img: '/assets/images/banners/sobha-one-world-hoskote-1.avif',
    ctaText: 'View Sobha One World',
    ctaLink: '/properties/sobha-one-world'
  },
  {
    img: '/assets/images/a0afd551-fd8c-4328-b5fa-46f1a7125338.avif',
    ctaText: 'View Embassy Springs',
    ctaLink: '/properties/embassy-springs'
  }
];

export const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '20px 32px 0' }}>
      {/* Visually hidden H1 for SEO */}
      <h1 style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
        RK Associates - Bengaluru's Trusted Real Estate Channel Partner
      </h1>
      <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', minHeight: 560, display: 'flex', alignItems: 'center', background: '#2B241D' }}>
        
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            style={{ 
              position: 'absolute', 
              inset: 0, 
              opacity: idx === currentIdx ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              pointerEvents: idx === currentIdx ? 'auto' : 'none'
            }}
          >
            <img 
              src={slide.img} 
              alt={slide.ctaText || "RK Associates Hero"} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
              }} 
            />
            {/* Soft gradient at bottom so CTA is always legible */}
            {slide.ctaText && (
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)', pointerEvents: 'none' }}></div>
            )}
            
            {slide.ctaText && (
              <a 
                href={slide.ctaLink} 
                className="btn-hover"
                style={{
                  position: 'absolute',
                  bottom: 40,
                  right: 40,
                  textDecoration: 'none', 
                  background: 'rgba(43,36,29,0.75)', 
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(247,242,234,0.15)',
                  color: '#F7F2EA', 
                  padding: '16px 32px', 
                  borderRadius: 100, 
                  fontWeight: 600, 
                  fontSize: 15,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
              >
                {slide.ctaText}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            )}
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
