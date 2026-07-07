import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export const FeaturedProperties = async () => {
  const properties = await prisma.property.findMany({
    where: { isFeatured: true, status: 'ACTIVE' },
    include: {
      location: true,
      configurations: true,
    },
    take: 3,
    orderBy: { createdAt: 'desc' }
  });

  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F06400' }}>Featured Properties</span>
          <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 32, fontWeight: 600, margin: '12px 0 0' }}>Handpicked listings across Bengaluru</h2>
        </div>
        <Link href="/properties" style={{ textDecoration: 'none', background: '#2B241D', color: '#F7F2EA', padding: '13px 24px', borderRadius: 100, fontWeight: 700, fontSize: 14 }}>
          Browse All →
        </Link>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
        {properties.map((p) => {
          // Calculate config summaries
          const types = Array.from(new Set(p.configurations.map(c => c.type))).join(', ');
          
          return (
            <Link key={p.id} href={`/properties/${p.slug}`} className="card-hover" style={{ textDecoration: 'none', color: 'inherit', background: '#FFFFFF', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(43,36,29,0.08)', display: 'block' }}>
              <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <img src={p.coverImage || '/assets/images/placeholder.avif'} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <span style={{ position: 'absolute', top: 14, left: 14, background: '#F06400', color: '#F7F2EA', fontSize: 11, fontWeight: 700, padding: '5px 11px', borderRadius: 100 }}>
                  {p.status === 'SOLD' ? 'Sold Out' : 'For Sale'}
                </span>
              </div>
              <div style={{ padding: '22px 22px 24px' }}>
                <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 17, fontWeight: 600, marginBottom: 4 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: '#8A7B5C', marginBottom: 14 }}>{p.location?.name || 'Bengaluru'}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14, borderTop: '1px solid rgba(43,36,29,0.08)' }}>
                  <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 600, color: '#2B241D' }}>{p.startingPrice || 'On Request'}</span>
                  <span style={{ fontSize: 12.5, color: '#6B5F52' }}>{types || 'Various'}</span>
                </div>
              </div>
            </Link>
          );
        })}
        {properties.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0', color: '#8A7B5C' }}>
            No featured properties found. Please add some from the admin panel.
          </div>
        )}
      </div>
    </section>
  );
};
