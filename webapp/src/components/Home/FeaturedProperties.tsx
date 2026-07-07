export const FeaturedProperties = () => {
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
