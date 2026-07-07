export const ServicesOverview = () => {
  const services = [
    { letter: 'B', title: 'Property Buying Assistance', desc: 'End-to-end guidance from shortlisting to final agreement.' },
    { letter: 'I', title: 'Investment Advisory', desc: 'Data-backed recommendations on high-growth Bengaluru micro-markets.' },
    { letter: 'R', title: 'Rental Solutions', desc: 'Tenant sourcing, agreements, and rent negotiation handled for you.' },
    { letter: 'M', title: 'Property Management', desc: 'Ongoing upkeep and tenant relations for owners who live away.' },
    { letter: 'S', title: 'Site Visit Assistance', desc: 'Curated, chauffeured site visits across shortlisted projects.' },
    { letter: 'D', title: 'Documentation Support', desc: 'RERA-compliant paperwork, registration, and legal verification.' }
  ];

  return (
    <section style={{ background: '#EFE6D6', padding: '88px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F06400' }}>
              What We Do
            </span>
            <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 32, fontWeight: 600, margin: '12px 0 0' }}>
              End-to-end support, every step of the way
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
                {s.letter}
              </div>
              <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: '#6B5F52' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
