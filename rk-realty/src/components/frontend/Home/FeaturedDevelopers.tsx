import Link from 'next/link';

export const FeaturedDevelopers = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="card-hover" style={{ borderRadius: 18, overflow: 'hidden', background: '#FFFFFF', border: '1px solid rgba(43,36,29,0.08)' }}>
          <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
            <img src="/assets/images/6dbec011-6386-4293-82a4-33c327e15764.avif" alt="Godrej Vanantara" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <span style={{ position: 'absolute', top: 16, left: 16, background: '#2B241D', color: '#F7F2EA', fontSize: 11.5, fontWeight: 700, padding: '5px 12px', borderRadius: 100 }}>
              Channel Partner Project
            </span>
          </div>
          <div style={{ padding: '26px 28px' }}>
            <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 22, fontWeight: 600, marginBottom: 6 }}>Godrej Vanantara</div>
            <div style={{ fontSize: 14, color: '#6B5F52', marginBottom: 18 }}>Budigere Cross, East Bengaluru · 2 & 3 BHK Apartments</div>
            <Link href="/properties" style={{ textDecoration: 'none', color: '#F06400', fontWeight: 700, fontSize: 14 }}>Discover the Project →</Link>
          </div>
        </div>
        <div className="card-hover" style={{ borderRadius: 18, overflow: 'hidden', background: '#FFFFFF', border: '1px solid rgba(43,36,29,0.08)' }}>
          <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
            <img src="/assets/images/6d4e9c42-e45a-498c-a374-e31fa0ea731d.avif" alt="Sobha One World" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <span style={{ position: 'absolute', top: 16, left: 16, background: '#2B241D', color: '#F7F2EA', fontSize: 11.5, fontWeight: 700, padding: '5px 12px', borderRadius: 100 }}>
              Channel Partner Project
            </span>
          </div>
          <div style={{ padding: '26px 28px' }}>
            <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 22, fontWeight: 600, marginBottom: 6 }}>Sobha One World</div>
            <div style={{ fontSize: 14, color: '#6B5F52', marginBottom: 18 }}>Sarjapur Road, South-East Bengaluru · Integrated Township</div>
            <Link href="/properties" style={{ textDecoration: 'none', color: '#F06400', fontWeight: 700, fontSize: 14 }}>Explore the Township →</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
