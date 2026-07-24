export const FeaturedProperties = () => {
  const properties = [
    {
      img: '/assets/images/banners/godrej-vanantara-1.avif',
      tag: 'Premium',
      title: 'Godrej Vanantara',
      location: 'Bannerghatta Road, Bengaluru',
      highlights: [
        'Premium 3 & 4 BHK Residences',
        '70%+ Open Green Spaces',
        'Grand Clubhouse',
        'Wellness & Recreation Amenities',
        'Strategic South Bengaluru Location'
      ]
    },
    {
      img: '/assets/images/banners/sobha-one-world-hoskote-1.avif',
      tag: 'Township',
      title: 'Sobha One World',
      location: 'Hoskote, Bengaluru',
      highlights: [
        'Integrated Township Development',
        'Premium Residential Community',
        'Excellent Connectivity',
        'Lifestyle Amenities',
        'High-Growth Investment Corridor'
      ]
    },
    {
      img: '/assets/images/a0afd551-fd8c-4328-b5fa-46f1a7125338.avif',
      tag: 'Integrated Township',
      title: 'Embassy Springs',
      location: 'Devanahalli, Bengaluru',
      highlights: [
        'Integrated Township Living',
        'Airport Corridor Advantage',
        'Premium Community Development',
        'Extensive Open Spaces',
        'Future Growth Potential'
      ]
    }
  ];

  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F06400' }}>Featured Luxury Properties</span>
          <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 32, fontWeight: 600, margin: '12px 0 0' }}>Handpicked Opportunities from Leading Developers</h2>
        </div>
        <a href="/properties" style={{ textDecoration: 'none', background: '#2B241D', color: '#F7F2EA', padding: '13px 24px', borderRadius: 100, fontWeight: 700, fontSize: 14 }}>
          Browse All →
        </a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {properties.map((p, i) => (
          <div key={i} className="card-hover" style={{ background: '#FFFFFF', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(43,36,29,0.08)' }}>
            <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
              <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <span style={{ position: 'absolute', top: 14, left: 14, background: '#F06400', color: '#F7F2EA', fontSize: 11, fontWeight: 700, padding: '5px 11px', borderRadius: 100 }}>
                {p.tag}
              </span>
            </div>
            <div style={{ padding: '22px 22px 24px' }}>
              <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 17, fontWeight: 600, marginBottom: 4 }}>{p.title}</div>
              <div style={{ fontSize: 13, color: '#8A7B5C', marginBottom: 14 }}>{p.location}</div>
              <div style={{ paddingTop: 14, borderTop: '1px solid rgba(43,36,29,0.08)' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {p.highlights.map((h, j) => (
                    <li key={j} style={{ fontSize: 13, color: '#4A4038', display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                      <span style={{ color: '#F06400', flex: 'none' }}>✔</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
