export const AboutTeaser = () => {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }}>
        <div style={{ borderRadius: 18, height: 420, background: 'repeating-linear-gradient(135deg,#E7DCC6,#E7DCC6 14px,#DCCBAC 14px,#DCCBAC 28px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, color: '#8A7B5C' }}>TEAM PHOTO — RK ASSOCIATES OFFICE</span>
        </div>
        <div>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F06400' }}>
            About RK Associates
          </span>
          <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 34, fontWeight: 600, lineHeight: 1.25, margin: '14px 0 18px' }}>
            Local expertise, honest advice, and a decade of trust in Bengaluru real estate.
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.8, color: '#4A4038', margin: '0 0 28px' }}>
            RK Associates was founded to make property decisions simpler for Bengaluru families — pairing deep local market knowledge with direct developer partnerships, so every recommendation is grounded, transparent, and built around what actually fits your life.
          </p>
          <div style={{ display: 'flex', gap: 32, marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 26, fontWeight: 600, color: '#2B241D' }}>12+</div>
              <div style={{ fontSize: 13, color: '#6B5F52' }}>Years in Business</div>
            </div>
            <div>
              <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 26, fontWeight: 600, color: '#2B241D' }}>18</div>
              <div style={{ fontSize: 13, color: '#6B5F52' }}>Developer Partners</div>
            </div>
            <div>
              <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 26, fontWeight: 600, color: '#2B241D' }}>900+</div>
              <div style={{ fontSize: 13, color: '#6B5F52' }}>Families Settled</div>
            </div>
          </div>
          <a href="/about" className="btn-hover" style={{ textDecoration: 'none', background: '#2B241D', color: '#F7F2EA', padding: '14px 26px', borderRadius: 100, fontWeight: 700, fontSize: 14 }}>
            Our Story →
          </a>
        </div>
      </div>
    </section>
  );
};
