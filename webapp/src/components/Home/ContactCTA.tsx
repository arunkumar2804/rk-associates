export const ContactCTA = () => {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px' }}>
      <div style={{ background: '#F06400', borderRadius: 22, padding: '64px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
        <div style={{ maxWidth: 520 }}>
          <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 30, fontWeight: 600, color: '#F7F2EA', margin: '0 0 12px' }}>
            Ready to find your perfect property?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(247,242,234,0.85)', margin: 0, lineHeight: 1.6 }}>
            Talk to our team for a free consultation on buying, renting, or investing in Bengaluru real estate.
          </p>
        </div>
        <a href="/contact" className="btn-hover" style={{ textDecoration: 'none', background: '#2B241D', color: '#F7F2EA', padding: '16px 30px', borderRadius: 100, fontWeight: 700, fontSize: 14.5, flex: 'none' }}>
          Contact Us Today →
        </a>
      </div>
    </section>
  );
};
