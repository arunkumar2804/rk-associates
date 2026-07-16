"use client";
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Award, Briefcase, Users, Key } from 'lucide-react';

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
    threshold: 0.3, 
  });

  const stats = [
    { num: 15, text: "Years Experience", icon: Briefcase, color: "text-[#F06400]", bg: "bg-[#F06400]/10" },
    { num: 200, text: "Properties Sold", icon: Award, color: "text-[#10B981]", bg: "bg-[#10B981]/10" },
    { num: 1000, text: "Happy Clients", icon: Users, color: "text-[#3B82F6]", bg: "bg-[#3B82F6]/10" },
    { num: 2000, text: "Rental Clients", icon: Key, color: "text-[#8B5CF6]", bg: "bg-[#8B5CF6]/10" }
  ];

  return (
    <section ref={ref} className="w-full bg-[#2B241D]">
      {/* Desktop Version */}
      <div className="hidden lg:grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
        <div>
          <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 38, fontWeight: 600, color: '#F7F2EA' }}>
            {inView ? <AnimatedCount end={15} /> : '0'}+
          </div>
          <div style={{ fontSize: 13.5, color: 'rgba(247,242,234,0.6)', marginTop: 6 }}>Years Experience in Real Estate Consulting</div>
        </div>
        <div>
          <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 38, fontWeight: 600, color: '#F7F2EA' }}>
            {inView ? <AnimatedCount end={200} /> : '0'}+
          </div>
          <div style={{ fontSize: 13.5, color: 'rgba(247,242,234,0.6)', marginTop: 6 }}>Properties Sold & Managed</div>
        </div>
        <div>
          <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 38, fontWeight: 600, color: '#F7F2EA' }}>
            {inView ? <AnimatedCount end={1000} /> : '0'}+
          </div>
          <div style={{ fontSize: 13.5, color: 'rgba(247,242,234,0.6)', marginTop: 6 }}>Happy Clients</div>
        </div>
        <div>
          <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 38, fontWeight: 600, color: '#F7F2EA' }}>
            {inView ? <AnimatedCount end={2000} /> : '0'}+
          </div>
          <div style={{ fontSize: 13.5, color: 'rgba(247,242,234,0.6)', marginTop: 6 }}>Satisfied Rental Clients</div>
        </div>
      </div>

      {/* Mobile App Version */}
      <div className="lg:hidden w-full px-4 py-8">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/5 flex flex-col justify-center items-center text-center">
                <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-3`}>
                  <Icon size={20} strokeWidth={2.5} />
                </div>
                <div className="font-sora text-3xl font-bold text-white mb-1">
                  {inView ? <AnimatedCount end={stat.num} /> : '0'}+
                </div>
                <div className="text-[11px] text-white/60 font-medium tracking-wide uppercase leading-tight">
                  {stat.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
