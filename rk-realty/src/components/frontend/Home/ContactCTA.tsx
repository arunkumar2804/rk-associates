import Link from 'next/link';

export const ContactCTA = () => {
  return (
    <section className="w-full">
      {/* Desktop Version */}
      <div className="hidden lg:block" style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px 88px' }}>
        <div style={{ background: 'linear-gradient(135deg, #F06400 0%, #D85A00 100%)', borderRadius: 24, padding: '48px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#F7F2EA', boxShadow: '0 24px 48px rgba(240,100,0,0.15)' }}>
          <div style={{ maxWidth: 700 }}>
            <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 36, fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>Let's Find the Right Property for You</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.9 }}>Whether you're purchasing your first home, expanding your investment portfolio, or searching for rental opportunities, RK Associates is here to guide you every step of the way.</p>
            <div style={{ marginTop: 24, fontSize: 15, fontWeight: 600 }}>
              Call us: +91 8884569830 / +91 8884970111 | Email: rk01forassociates@gmail.com
            </div>
          </div>
          <Link href="/contact" className="btn-hover" style={{ textDecoration: 'none', background: '#2B241D', color: '#F7F2EA', padding: '16px 30px', borderRadius: 100, fontWeight: 700, fontSize: 14.5, flex: 'none' }}>
            Schedule Consultation
          </Link>
        </div>
      </div>

      {/* Mobile App Version */}
      <div className="lg:hidden w-full px-4 py-8 mb-4">
        <div className="bg-gradient-to-br from-[#F06400] to-[#D85A00] rounded-3xl p-6 text-white shadow-[0_16px_40px_rgba(240,100,0,0.25)] flex flex-col relative overflow-hidden">
          {/* Background Decorative Pattern */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl"></div>
          
          <h2 className="font-sora text-2xl font-bold mb-3 leading-tight relative z-10">
            Let's Find the Right<br/>Property for You
          </h2>
          <p className="text-white/90 text-[14px] leading-relaxed mb-6 relative z-10">
            Whether you're purchasing your first home, expanding your portfolio, or searching for rental opportunities, we're here to guide you.
          </p>
          
          <div className="flex flex-col gap-3 relative z-10">
            <Link href="/contact" className="w-full bg-[#2B241D] text-white text-center py-4 rounded-xl font-bold text-[15px] active:scale-95 transition-transform shadow-lg">
              Schedule Consultation
            </Link>
            <a href="tel:+918884569830" className="w-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-center py-4 rounded-xl font-bold text-[15px] active:scale-95 transition-transform">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
