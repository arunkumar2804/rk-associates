import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { MapPin, Bed, Maximize, Heart, Share2, ArrowRight } from 'lucide-react';

export const FeaturedProperties = async () => {
  const properties = await prisma.property.findMany({
    where: { isFeatured: true, status: 'ACTIVE' },
    include: {
      configurations: true,
      builder: true,
    },
    take: 3,
    orderBy: { createdAt: 'desc' }
  });

  return (
    <section className="w-full">
      {/* Desktop Version */}
      <div className="hidden lg:block" style={{ maxWidth: 1280, margin: '0 auto', padding: '88px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F06400' }}>Featured Properties</span>
            <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 32, fontWeight: 600, margin: '12px 0 0' }}>Curated Opportunities from Bengaluru's Most Trusted Developers</h2>
          </div>
          <Link href="/properties" style={{ textDecoration: 'none', background: '#2B241D', color: '#F7F2EA', padding: '13px 24px', borderRadius: 100, fontWeight: 700, fontSize: 14 }}>
            Browse All →
          </Link>
        </div>
        <p style={{ fontSize: 15.5, lineHeight: 1.8, color: '#4A4038', maxWidth: 800, marginBottom: 24 }}>
          Explore premium residential and commercial developments from leading builders including Phoenix, Embassy, Brigade, Godrej, and Sobha.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 36 }}>
          {['Luxury Apartments', 'Premium Villas', 'Commercial Spaces', 'Ready-to-Move Projects', 'Under-Construction Opportunities'].map(highlight => (
            <span key={highlight} style={{ fontSize: 13, fontWeight: 600, color: '#6B5F52', background: '#F7F2EA', padding: '6px 12px', borderRadius: 100, border: '1px solid rgba(43,36,29,0.08)' }}>
              ✓ {highlight}
            </span>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {properties.map((p) => {
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
                  <div style={{ fontSize: 13, color: '#8A7B5C', marginBottom: 14 }}>{p.locationName || 'Bengaluru'}</div>
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
      </div>

      {/* Mobile App Version */}
      <div className="lg:hidden w-full py-8">
        <div className="px-4 mb-5">
          <span className="text-[#F06400] text-[11px] font-bold tracking-wider uppercase mb-1 block">Featured Properties</span>
          <div className="flex justify-between items-end">
            <h2 className="font-sora text-2xl font-bold text-[#2B241D] leading-tight max-w-[75%]">Curated For You</h2>
            <Link href="/properties" className="text-[#F06400] text-[13px] font-bold flex items-center gap-1 active:scale-95 transition-transform">
              See All <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 pb-6 pt-2 gap-4">
          {properties.map((p) => {
            const types = Array.from(new Set(p.configurations.map(c => c.type))).join(', ');
            return (
              <div key={p.id} className="snap-center shrink-0 w-[85%] sm:w-[320px] bg-white rounded-[24px] shadow-[0_8px_30px_rgba(43,36,29,0.08)] overflow-hidden border border-[rgba(43,36,29,0.04)] relative">
                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  <button className="w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#4A4038] shadow-sm active:scale-95 transition-transform">
                    <Heart size={18} />
                  </button>
                  <button className="w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#4A4038] shadow-sm active:scale-95 transition-transform">
                    <Share2 size={18} />
                  </button>
                </div>

                <div className="relative h-[220px]">
                  <img src={p.coverImage || '/assets/images/placeholder.avif'} alt={p.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#2B241D] text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {p.status === 'SOLD' ? 'Sold Out' : 'Premium'}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-sora text-[17px] font-bold text-[#2B241D] truncate pr-2">{p.name}</h3>
                    {p.builder?.logo && (
                      <img src={p.builder.logo} alt={p.builder.name} className="h-5 w-auto object-contain shrink-0 mix-blend-multiply" />
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1 text-[#6B5F52] text-[13px] mb-4">
                    <MapPin size={14} className="text-[#F06400]" />
                    <span className="truncate">{p.locationName || 'Bengaluru'}</span>
                  </div>

                  <div className="flex gap-4 mb-5 border-y border-[rgba(43,36,29,0.06)] py-3">
                    <div className="flex items-center gap-1.5 text-[13px] text-[#4A4038] font-medium">
                      <Bed size={16} className="text-[#9F9C97]" />
                      <span>{types || 'Various'}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[13px] text-[#4A4038] font-medium">
                      <Maximize size={16} className="text-[#9F9C97]" />
                      <span>1200+ sq.ft</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-[#8A7B5C] font-semibold uppercase tracking-wider mb-0.5">Starts From</span>
                      <span className="font-sora text-lg font-bold text-[#2B241D]">{p.startingPrice || 'On Request'}</span>
                    </div>
                    <Link href={`/properties/${p.slug}`} className="bg-[#2B241D] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold active:scale-95 transition-transform">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
