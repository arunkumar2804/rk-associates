const fs = require('fs');
const path = require('path');

const components = {
  "TrustBar.tsx": `export const TrustBar = () => {
  return (
    <section style={{ maxWidth: 1280, margin: '56px auto 0', padding: '0 32px' }}>
      <div style={{ textAlign: 'center', fontSize: 12.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8A7B5C', fontWeight: 600, marginBottom: 24 }}>
        Channel Partner to Bengaluru's Leading Developers
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24, paddingBottom: 36, borderBottom: '1px solid rgba(43,36,29,0.1)' }}>
        <span style={{ fontFamily: '"Sora", sans-serif', fontSize: 19, fontWeight: 600, color: '#4A4038', opacity: 0.75 }}>Godrej Properties</span>
        <span style={{ fontFamily: '"Sora", sans-serif', fontSize: 19, fontWeight: 600, color: '#4A4038', opacity: 0.75 }}>Sobha Limited</span>
        <span style={{ fontFamily: '"Sora", sans-serif', fontSize: 19, fontWeight: 600, color: '#4A4038', opacity: 0.75 }}>Prestige Group</span>
        <span style={{ fontFamily: '"Sora", sans-serif', fontSize: 19, fontWeight: 600, color: '#4A4038', opacity: 0.75 }}>Brigade Group</span>
        <span style={{ fontFamily: '"Sora", sans-serif', fontSize: 19, fontWeight: 600, color: '#4A4038', opacity: 0.75 }}>Sattva Group</span>
      </div>
    </section>
  );
};
`,
  "FeaturedDevelopers.tsx": `export const FeaturedDevelopers = () => {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 32px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <div style={{ borderRadius: 18, overflow: 'hidden', background: '#FFFFFF', border: '1px solid rgba(43,36,29,0.08)' }}>
          <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
            <img src="/assets/images/6dbec011-6386-4293-82a4-33c327e15764.avif" alt="Godrej Vanantara" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <span style={{ position: 'absolute', top: 16, left: 16, background: '#2B241D', color: '#F7F2EA', fontSize: 11.5, fontWeight: 700, padding: '5px 12px', borderRadius: 100 }}>
              Channel Partner Project
            </span>
          </div>
          <div style={{ padding: '26px 28px' }}>
            <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 22, fontWeight: 600, marginBottom: 6 }}>Godrej Vanantara</div>
            <div style={{ fontSize: 14, color: '#6B5F52', marginBottom: 18 }}>Budigere Cross, East Bengaluru · 2 & 3 BHK Apartments</div>
            <a href="/properties" style={{ textDecoration: 'none', color: '#F06400', fontWeight: 700, fontSize: 14 }}>Discover the Project →</a>
          </div>
        </div>
        <div style={{ borderRadius: 18, overflow: 'hidden', background: '#FFFFFF', border: '1px solid rgba(43,36,29,0.08)' }}>
          <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
            <img src="/assets/images/6d4e9c42-e45a-498c-a374-e31fa0ea731d.avif" alt="Sobha One World" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <span style={{ position: 'absolute', top: 16, left: 16, background: '#2B241D', color: '#F7F2EA', fontSize: 11.5, fontWeight: 700, padding: '5px 12px', borderRadius: 100 }}>
              Channel Partner Project
            </span>
          </div>
          <div style={{ padding: '26px 28px' }}>
            <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 22, fontWeight: 600, marginBottom: 6 }}>Sobha One World</div>
            <div style={{ fontSize: 14, color: '#6B5F52', marginBottom: 18 }}>Sarjapur Road, South-East Bengaluru · Integrated Township</div>
            <a href="/properties" style={{ textDecoration: 'none', color: '#F06400', fontWeight: 700, fontSize: 14 }}>Explore the Township →</a>
          </div>
        </div>
      </div>
    </section>
  );
};
`,
  "AboutTeaser.tsx": `export const AboutTeaser = () => {
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
          <a href="/about" style={{ textDecoration: 'none', background: '#2B241D', color: '#F7F2EA', padding: '14px 26px', borderRadius: 100, fontWeight: 700, fontSize: 14 }}>
            Our Story →
          </a>
        </div>
      </div>
    </section>
  );
};
`,
  "ServicesOverview.tsx": `export const ServicesOverview = () => {
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
            <div key={i} style={{ background: '#FFFFFF', borderRadius: 16, padding: '30px 26px', border: '1px solid rgba(43,36,29,0.06)' }}>
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
`,
  "FeaturedProperties.tsx": `export const FeaturedProperties = () => {
  const properties = [
    {
      img: '/assets/images/6dbec011-6386-4293-82a4-33c327e15764.avif',
      tag: 'For Sale',
      title: 'Godrej Vanantara',
      location: 'Budigere Cross, East Bengaluru',
      price: '₹68 L onwards',
      type: '2, 3 BHK'
    },
    {
      img: '/assets/images/a0afd551-fd8c-4328-b5fa-46f1a7125338.avif',
      tag: 'Ready to Move',
      title: 'Prestige Lakeside Habitat',
      location: 'Varthur, East Bengaluru',
      price: '₹1.1 Cr onwards',
      type: '3, 4 BHK'
    },
    {
      img: '/assets/images/9e4f05e1-c889-48dc-b3a3-1353c1a874d0.avif',
      tag: 'Under Construction',
      title: 'Sattva Hamlet',
      location: 'Yelahanka, North Bengaluru',
      price: '₹52 L onwards',
      type: '2 BHK'
    }
  ];

  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F06400' }}>Featured Properties</span>
          <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 32, fontWeight: 600, margin: '12px 0 0' }}>Handpicked listings across Bengaluru</h2>
        </div>
        <a href="/properties" style={{ textDecoration: 'none', background: '#2B241D', color: '#F7F2EA', padding: '13px 24px', borderRadius: 100, fontWeight: 700, fontSize: 14 }}>
          Browse All →
        </a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {properties.map((p, i) => (
          <div key={i} style={{ background: '#FFFFFF', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(43,36,29,0.08)' }}>
            <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
              <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <span style={{ position: 'absolute', top: 14, left: 14, background: '#F06400', color: '#F7F2EA', fontSize: 11, fontWeight: 700, padding: '5px 11px', borderRadius: 100 }}>
                {p.tag}
              </span>
            </div>
            <div style={{ padding: '22px 22px 24px' }}>
              <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 17, fontWeight: 600, marginBottom: 4 }}>{p.title}</div>
              <div style={{ fontSize: 13, color: '#8A7B5C', marginBottom: 14 }}>{p.location}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14, borderTop: '1px solid rgba(43,36,29,0.08)' }}>
                <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 600, color: '#2B241D' }}>{p.price}</span>
                <span style={{ fontSize: 12.5, color: '#6B5F52' }}>{p.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
`,
  "StatsBand.tsx": `export const StatsBand = () => {
  return (
    <section style={{ background: '#2B241D', padding: '64px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
        <div>
          <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 38, fontWeight: 600, color: '#F7F2EA' }}>450+</div>
          <div style={{ fontSize: 13.5, color: 'rgba(247,242,234,0.6)', marginTop: 6 }}>Trusted Listings Across Bengaluru</div>
        </div>
        <div>
          <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 38, fontWeight: 600, color: '#F7F2EA' }}>18</div>
          <div style={{ fontSize: 13.5, color: 'rgba(247,242,234,0.6)', marginTop: 6 }}>Developer Channel Partnerships</div>
        </div>
        <div>
          <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 38, fontWeight: 600, color: '#F7F2EA' }}>900+</div>
          <div style={{ fontSize: 13.5, color: 'rgba(247,242,234,0.6)', marginTop: 6 }}>Families Successfully Settled</div>
        </div>
        <div>
          <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 38, fontWeight: 600, color: '#F7F2EA' }}>4.8/5</div>
          <div style={{ fontSize: 13.5, color: 'rgba(247,242,234,0.6)', marginTop: 6 }}>Average Client Rating</div>
        </div>
      </div>
    </section>
  );
};
`,
  "ContactCTA.tsx": `export const ContactCTA = () => {
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
        <a href="/contact" style={{ textDecoration: 'none', background: '#2B241D', color: '#F7F2EA', padding: '16px 30px', borderRadius: 100, fontWeight: 700, fontSize: 14.5, flex: 'none' }}>
          Contact Us Today →
        </a>
      </div>
    </section>
  );
};
`
};

const dir = '/Users/arunkumar/RK Associates/webapp/src/components/Home';

Object.keys(components).forEach(key => {
  fs.writeFileSync(path.join(dir, key), components[key]);
});

console.log('Components generated.');
