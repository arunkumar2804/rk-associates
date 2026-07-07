"use client";
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCountProps {
  end: number;
  duration?: number;
  decimals?: number;
}

const AnimatedCount = ({ end, duration = 2.5, decimals = 0 }: AnimatedCountProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrame: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(easeOutQuart * end);
      
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };
    
    animationFrame = window.requestAnimationFrame(step);
    
    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);
  
  return <>{count.toFixed(decimals)}</>;
};

export const StatsBand = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Trigger when 30% of the component is visible
  });

  return (
    <section ref={ref} style={{ background: '#2B241D', padding: '64px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
        <div>
          <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 38, fontWeight: 600, color: '#F7F2EA' }}>
            {inView ? <AnimatedCount end={450} /> : '0'}+
          </div>
          <div style={{ fontSize: 13.5, color: 'rgba(247,242,234,0.6)', marginTop: 6 }}>Trusted Listings Across Bengaluru</div>
        </div>
        <div>
          <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 38, fontWeight: 600, color: '#F7F2EA' }}>
            {inView ? <AnimatedCount end={18} /> : '0'}
          </div>
          <div style={{ fontSize: 13.5, color: 'rgba(247,242,234,0.6)', marginTop: 6 }}>Developer Channel Partnerships</div>
        </div>
        <div>
          <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 38, fontWeight: 600, color: '#F7F2EA' }}>
            {inView ? <AnimatedCount end={900} /> : '0'}+
          </div>
          <div style={{ fontSize: 13.5, color: 'rgba(247,242,234,0.6)', marginTop: 6 }}>Families Successfully Settled</div>
        </div>
        <div>
          <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 38, fontWeight: 600, color: '#F7F2EA' }}>
            {inView ? <AnimatedCount end={4.8} decimals={1} /> : '0.0'}/5
          </div>
          <div style={{ fontSize: 13.5, color: 'rgba(247,242,234,0.6)', marginTop: 6 }}>Average Client Rating</div>
        </div>
      </div>
    </section>
  );
};
