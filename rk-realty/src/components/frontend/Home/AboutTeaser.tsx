import Link from 'next/link';

export const AboutTeaser = () => {
  return (
    <section className="w-full">
      {/* Desktop Version */}
      <div className="hidden lg:block" style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }}>
          <div style={{ borderRadius: 18, height: 420, overflow: 'hidden' }}>
            <img src="/images/team.jpg" alt="RK Associates Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F06400' }}>
              About RK Associates
            </span>
            <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 34, fontWeight: 600, lineHeight: 1.25, margin: '14px 0 18px' }}>
              Service with a Smile
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: '#4A4038', margin: '0 0 16px' }}>
              Established in 2011, RK Associates has built a reputation for delivering reliable real estate consulting services with professionalism, integrity, and personalized attention. With extensive experience across residential, commercial, and rental properties, we help clients navigate the real estate market with confidence.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: '#4A4038', margin: '0 0 28px' }}>
              Our focus is not merely on transactions but on building long-term relationships based on trust and transparency. As a trusted channel partner for leading developers, we provide access to premium projects while offering complete support throughout the property-buying and rental journey.
            </p>
            <div style={{ display: 'flex', gap: 32, marginBottom: 32 }}>
              <div>
                <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 26, fontWeight: 600, color: '#2B241D' }}>15+</div>
                <div style={{ fontSize: 13, color: '#6B5F52' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 26, fontWeight: 600, color: '#2B241D' }}>200+</div>
                <div style={{ fontSize: 13, color: '#6B5F52' }}>Properties Sold</div>
              </div>
              <div>
                <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 26, fontWeight: 600, color: '#2B241D' }}>1000+</div>
                <div style={{ fontSize: 13, color: '#6B5F52' }}>Happy Clients</div>
              </div>
            </div>
            <Link href="/about" className="btn-hover" style={{ textDecoration: 'none', background: '#2B241D', color: '#F7F2EA', padding: '14px 26px', borderRadius: 100, fontWeight: 700, fontSize: 14 }}>
              Our Story →
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile App Version */}
      <div className="lg:hidden w-full px-4 py-8">
        <div className="bg-white rounded-3xl p-5 shadow-[0_8px_30px_rgba(43,36,29,0.06)] border border-[rgba(43,36,29,0.04)]">
          <div className="rounded-2xl h-48 overflow-hidden mb-6 relative shadow-inner">
            <img src="/images/team.jpg" alt="RK Associates Team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-[#F06400] text-[11px] font-bold tracking-wider uppercase mb-1">
              About RK Associates
            </span>
            <h2 className="font-sora text-2xl font-bold text-[#2B241D] leading-tight mb-3">
              Service with a Smile
            </h2>
            <p className="text-[#4A4038] text-[14px] leading-relaxed mb-6">
              Established in 2011, RK Associates delivers reliable real estate consulting with professionalism and personalized attention. We build long-term relationships based on trust.
            </p>
            
            <div className="grid grid-cols-3 gap-3 mb-6 bg-gray-50/80 p-4 rounded-2xl">
              <div className="flex flex-col items-center text-center">
                <span className="font-sora text-[22px] font-bold text-[#2B241D]">15+</span>
                <span className="text-[10px] text-[#6B5F52] font-medium mt-1 leading-tight">Years<br/>Experience</span>
              </div>
              <div className="flex flex-col items-center text-center border-x border-[rgba(43,36,29,0.1)] px-1">
                <span className="font-sora text-[22px] font-bold text-[#2B241D]">200+</span>
                <span className="text-[10px] text-[#6B5F52] font-medium mt-1 leading-tight">Properties<br/>Sold</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="font-sora text-[22px] font-bold text-[#2B241D]">1000+</span>
                <span className="text-[10px] text-[#6B5F52] font-medium mt-1 leading-tight">Happy<br/>Clients</span>
              </div>
            </div>

            <Link href="/about" className="w-full bg-[#F06400]/10 text-[#F06400] text-center py-3.5 rounded-xl font-bold text-[14px] active:scale-95 transition-transform flex items-center justify-center gap-2">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
