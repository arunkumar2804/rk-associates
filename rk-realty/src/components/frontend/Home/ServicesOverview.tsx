import Link from 'next/link';
import { Home, TrendingUp, Key, Building2, Map, FileCheck } from 'lucide-react';

export const ServicesOverview = () => {
  const services = [
    { icon: Home, title: 'Property Buying Assistance', desc: 'Finding the right property requires more than just exploring options. Our team assists clients in identifying suitable projects.' },
    { icon: TrendingUp, title: 'Investment Advisory', desc: 'We help investors identify properties with strong growth potential, enabling informed investment decisions backed by market understanding.' },
    { icon: Key, title: 'Rental Solutions', desc: 'RK Associates provides end-to-end rental assistance for both landlords and tenants.' },
    { icon: Building2, title: 'Property Management', desc: 'We support property owners by helping manage real estate assets efficiently while ensuring smooth coordination.' },
    { icon: Map, title: 'Site Visit Assistance', desc: 'Our team arranges personalized site visits, helping clients understand project features and investment potential.' },
    { icon: FileCheck, title: 'Documentation Support', desc: 'Our team assists clients throughout the documentation process to ensure clarity, transparency, and confidence.' }
  ];

  return (
    <section className="w-full bg-[#EFE6D6]">
      {/* Desktop Version */}
      <div className="hidden lg:block" style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F06400' }}>
              Our Services
            </span>
            <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 32, fontWeight: 600, margin: '12px 0 0' }}>
              Professional support, every step of the way
            </h2>
          </div>
          <a href="/services" style={{ textDecoration: 'none', color: '#2B241D', fontWeight: 700, fontSize: 14.5, borderBottom: '1px solid #2B241D', paddingBottom: 2 }}>
            View All Services →
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {services.map((s, i) => (
            <div key={i} className="card-hover" style={{ background: '#FFFFFF', borderRadius: 16, padding: '30px 26px', border: '1px solid rgba(43,36,29,0.06)' }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: '#F3E6D3', color: '#F06400', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Sora", sans-serif', fontWeight: 600, fontSize: 18, marginBottom: 20 }}>
                {s.icon ? <s.icon size={22} /> : s.title.charAt(0)}
              </div>
              <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: '#6B5F52' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile App Version */}
      <div className="lg:hidden w-full px-4 py-8">
        <div className="mb-6">
          <span className="text-[#F06400] text-[11px] font-bold tracking-wider uppercase mb-1 block">
            Our Services
          </span>
          <h2 className="font-sora text-2xl font-bold text-[#2B241D] leading-tight">
            Professional support,<br/>every step of the way
          </h2>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-[rgba(43,36,29,0.04)] flex gap-4 active:scale-[0.98] transition-transform">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#F06400]/10 text-[#F06400] flex items-center justify-center">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-sora font-bold text-[#2B241D] text-[15px] mb-1">{s.title}</h3>
                  <p className="text-[#6B5F52] text-[13px] leading-snug line-clamp-2">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <Link href="/services" className="w-full bg-[#2B241D] text-white text-center py-4 rounded-xl font-bold text-[14px] active:scale-95 transition-transform flex items-center justify-center">
          View All Services
        </Link>
      </div>
    </section>
  );
};
