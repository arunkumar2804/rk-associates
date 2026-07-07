"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const IMAGES = [
  '/assets/images/6d4e9c42-e45a-498c-a374-e31fa0ea731d.avif',
  '/assets/images/6dbec011-6386-4293-82a4-33c327e15764.avif',
  '/assets/images/9e4f05e1-c889-48dc-b3a3-1353c1a874d0.avif',
  '/assets/images/a0afd551-fd8c-4328-b5fa-46f1a7125338.avif'
];

export const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '20px 32px 0' }}>
      <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', minHeight: 560, display: 'flex', alignItems: 'center', background: '#2B241D' }}>
        
        {IMAGES.map((img, idx) => (
          <img 
            key={img}
            src={img} 
            alt="Bengaluru skyline" 
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
        <div style={{ position: 'relative', padding: '64px 56px', maxWidth: 640 }}>
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
          }}>Bengaluru&apos;s Trusted Channel Partner</span>
          <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 48, lineHeight: 1.14, color: '#F7F2EA', margin: '0 0 18px', fontWeight: 600 }}>
            Find Your Perfect Property in Bengaluru
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(247,242,234,0.78)', margin: '0 0 32px', maxWidth: 480 }}>
            From premium apartments to gated villas — RK Associates connects you with Bengaluru&apos;s leading developers and guides every step of the journey.
          </p>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/properties" className="btn-hover" style={{ 
              textDecoration: 'none', 
              background: '#F06400', 
              color: '#F7F2EA', 
              padding: '15px 28px', 
              borderRadius: 100, 
              fontWeight: 700, 
              fontSize: 14.5,
              display: 'inline-block'
            }}>Explore Properties</Link>
            <Link href="/about" className="btn-hover" style={{ 
              textDecoration: 'none', 
              color: '#F7F2EA', 
              padding: '15px 10px', 
              fontWeight: 600, 
              fontSize: 14.5, 
              borderBottom: '1px solid rgba(247,242,234,0.4)',
              display: 'inline-block'
            }}>Meet RK Associates</Link>
          </div>
        </div>
      </div>
      
      {/* slide dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 18 }}>
        {IMAGES.map((_, idx) => (
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
