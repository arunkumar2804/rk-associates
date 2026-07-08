import Link from 'next/link';

export const ContactCTA = () => {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px 88px' }}>
      <div style={{ background: 'linear-gradient(135deg, #F06400 0%, #D85A00 100%)', borderRadius: 24, padding: '48px 64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#F7F2EA', boxShadow: '0 24px 48px rgba(240,100,0,0.15)' }}>
        <div style={{ maxWidth: 600 }}>
          <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 36, fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>Ready to find your dream property?</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.9 }}>Connect with our real estate experts for personalized guidance and exclusive access to Bengaluru&apos;s finest projects.</p>
        </div>
        <Link href="/contact" className="btn-hover" style={{ textDecoration: 'none', background: '#2B241D', color: '#F7F2EA', padding: '16px 30px', borderRadius: 100, fontWeight: 700, fontSize: 14.5, flex: 'none' }}>
          Get Expert Advice
        </Link>
      </div>
    </section>
  );
};
