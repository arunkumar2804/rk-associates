import Link from "next/link";
import { MapPin, ArrowRight, Heart, Share2, Star } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Rentals | RK Associates",
  description: "Premium Rental Residences in Bengaluru's Most Sought-After Locations.",
};

export default function RentalsPage() {
  const rentals = [
    {
      id: 1,
      name: "Brigade Gateway",
      location: "Rajajinagar, Bengaluru",
      slug: "brigade-gateway",
      image: "/assets/images/placeholder.avif",
      highlights: [
        "Premium Residential Community",
        "Adjacent to Orion Mall",
        "World-Class Clubhouse",
        "Metro Connectivity",
        "Close to Business Hubs"
      ]
    },
    {
      id: 2,
      name: "Phoenix One Bengaluru West",
      location: "Rajajinagar, Bengaluru",
      slug: "phoenix-one-bengaluru-west",
      image: "/assets/images/placeholder.avif",
      highlights: [
        "Luxury High-Rise Residences",
        "Premium Lifestyle Amenities",
        "Spacious Configurations",
        "Prime Central Bengaluru Location",
        "Excellent Connectivity"
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Desktop Version */}
      <div className="hidden lg:block">
        <section style={{ padding: "80px 32px 40px", textAlign: "center" }}>
          <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 48, fontWeight: 700, marginBottom: 20 }}>Premium Rental Residences in Bengaluru's Most Sought-After Locations</h1>
          <p style={{ fontSize: 18, color: "#4A4038", maxWidth: 600, margin: "0 auto" }}>
            Curated Rental Homes | Prime Locations | Personalized Assistance
          </p>
        </section>

        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 100px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
            <div>
              <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#F06400" }}>Featured Rentals</span>
              <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 32, fontWeight: 600, margin: "12px 0 0" }}>Handpicked rental opportunities</h2>
            </div>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 32 }}>
            {rentals.map((r) => (
              <div 
                key={r.id}
                className="card-hover" 
                style={{ background: "#FFFFFF", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(43,36,29,0.08)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
              >
                <div>
                  <div style={{ position: "relative", height: 240, overflow: "hidden" }}>
                    <img 
                      src={r.image} 
                      alt={r.name} 
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} 
                    />
                    <span style={{ position: "absolute", top: 16, left: 16, background: "#2B241D", color: "#F7F2EA", fontSize: 11, fontWeight: 700, padding: "6px 14px", borderRadius: 100 }}>
                      FOR RENT
                    </span>
                  </div>
                  <div style={{ padding: 24 }}>
                    <h3 style={{ fontFamily: '"Sora", sans-serif', fontSize: 20, fontWeight: 600, marginBottom: 8, color: "#2B241D" }}>{r.name}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#6B5F52", fontSize: 14, marginBottom: 20 }}>
                      <MapPin size={16} /> {r.location}
                    </div>
                    
                    <div style={{ paddingTop: 16, borderTop: "1px solid rgba(43,36,29,0.06)" }}>
                      <div style={{ fontSize: 13, color: "#4A4038", fontWeight: 600, marginBottom: 8 }}>Highlights:</div>
                      <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: "#6B5F52", display: "flex", flexDirection: "column", gap: 4 }}>
                        {r.highlights.slice(0, 3).map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div style={{ padding: "0 24px 24px 24px", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                  <Link href={`/rentals/${r.slug}`} className="btn-hover" style={{ textDecoration: "none", background: "#2B241D", color: "#F7F2EA", border: "none", padding: "10px 20px", borderRadius: 100, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Mobile App Version */}
      <div className="lg:hidden w-full bg-gray-50/50 min-h-screen pb-10">
        <section className="px-4 py-8 bg-white border-b border-[rgba(43,36,29,0.06)] shadow-sm">
          <h1 className="font-sora text-3xl font-bold text-[#2B241D] leading-tight mb-2">Premium Rentals</h1>
          <p className="text-[#6B5F52] text-[14px]">Sought-After Locations</p>
        </section>

        <section className="px-4 py-6 flex flex-col gap-5">
          {rentals.map((r) => (
            <div key={r.id} className="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(43,36,29,0.06)] overflow-hidden border border-[rgba(43,36,29,0.04)] relative">
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#4A4038] shadow-sm active:scale-95 transition-transform">
                  <Heart size={20} />
                </button>
                <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#4A4038] shadow-sm active:scale-95 transition-transform">
                  <Share2 size={20} />
                </button>
              </div>

              <Link href={`/rentals/${r.slug}`} className="block relative h-[240px]">
                <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-[#F06400] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                  For Rent
                </div>
              </Link>

              <div className="p-5">
                <Link href={`/rentals/${r.slug}`} className="block mb-4">
                  <h3 className="font-sora text-[19px] font-bold text-[#2B241D] leading-tight mb-1.5">{r.name}</h3>
                  <div className="flex items-center gap-1.5 text-[#6B5F52] text-[13px]">
                    <MapPin size={15} className="text-[#F06400]" />
                    <span className="truncate">{r.location}</span>
                  </div>
                </Link>

                <div className="border-y border-[rgba(43,36,29,0.06)] py-3.5 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={14} className="text-[#F06400]" />
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#4A4038]">Top Highlights</span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {r.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-[#6B5F52]">
                        <span className="text-[#F06400] font-bold mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end">
                  <Link href={`/rentals/${r.slug}`} className="w-12 h-12 bg-[#2B241D] text-white rounded-xl flex items-center justify-center active:scale-95 transition-transform shadow-md">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
