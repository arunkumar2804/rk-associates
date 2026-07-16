import { prisma } from "@/lib/prisma";
import { getSettings } from "@/lib/settings";
import Link from "next/link";
import { MapPin, BedDouble, Maximize, ArrowRight, Heart, Share2 } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  return {
    title: settings?.propertiesSeoTitle || `Premium Properties in Bengaluru | ${settings?.companyName || "RK Associates"}`,
    description: settings?.propertiesSeoDescription || "Browse curated residential properties, apartments, and villas from top developers in Bengaluru.",
  };
}

export default async function PropertiesPage() {
  const properties = await prisma.property.findMany({
    where: { status: "ACTIVE" },
    include: {
      location: true,
      configurations: true,
      builder: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="w-full">
      {/* Desktop Version */}
      <div className="hidden lg:block">
        <section style={{ padding: "80px 32px 40px", textAlign: "center" }}>
          <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 48, fontWeight: 700, marginBottom: 20 }}>Discover Bengaluru's Most Exceptional Luxury Residences</h1>
          <p style={{ fontSize: 18, color: "#4A4038", maxWidth: 600, margin: "0 auto" }}>
            Trusted Projects | Prime Locations | Expert Guidance
          </p>
        </section>

        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 100px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 32 }}>
            {properties.map((p) => {
              const bhkList = Array.from(new Set(p.configurations.map((c) => c.type)));
              const bhkString = bhkList.length > 0 ? bhkList.join(" & ") : "N/A";
              const areas = p.configurations
                .map((c) => parseInt(c.area.replace(/[^\d]/g, "")))
                .filter((a) => !isNaN(a));
              let areaString = "N/A";
              if (areas.length > 0) {
                const minArea = Math.min(...areas);
                const maxArea = Math.max(...areas);
                areaString = minArea === maxArea ? `${minArea} sqft` : `${minArea} - ${maxArea} sqft`;
              }
              return (
                <div key={p.id} className="card-hover" style={{ background: "#FFFFFF", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(43,36,29,0.08)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ position: "relative", height: 240, overflow: "hidden" }}>
                      <img src={p.coverImage || "/assets/images/placeholder.avif"} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
                      <span style={{ position: "absolute", top: 16, left: 16, background: "#2B241D", color: "#F7F2EA", fontSize: 11, fontWeight: 700, padding: "6px 14px", borderRadius: 100 }}>
                        {p.isFeatured ? "FEATURED" : "PREMIUM"}
                      </span>
                    </div>
                    <div style={{ padding: 24 }}>
                      <h3 style={{ fontFamily: '"Sora", sans-serif', fontSize: 20, fontWeight: 600, marginBottom: 8, color: "#2B241D" }}>{p.name}</h3>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#6B5F52", fontSize: 14, marginBottom: 20 }}>
                        <MapPin size={16} /> {p.location?.name || "Bengaluru"}
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24, paddingTop: 16, borderTop: "1px solid rgba(43,36,29,0.06)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#4A4038" }}>
                          <BedDouble size={16} color="#F06400" /> {bhkString}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#4A4038" }}>
                          <Maximize size={16} color="#F06400" /> {areaString}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "0 24px 24px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: 11, color: "#6B5F52", fontWeight: 600, textTransform: "uppercase" }}>Starting From</div>
                      <div style={{ fontSize: 18, fontWeight: 700, color: "#F06400" }}>{p.startingPrice}</div>
                    </div>
                    <Link href={`/properties/${p.slug}`} className="btn-hover" style={{ textDecoration: "none", background: "#2B241D", color: "#F7F2EA", border: "none", padding: "10px 20px", borderRadius: 100, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
            
            {properties.length === 0 && (
              <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "80px 0", color: "#8A7B5C" }}>
                <p style={{ fontSize: 18, marginBottom: 16 }}>No active properties found.</p>
                <Link href="/" style={{ color: "#F06400", fontWeight: 600, textDecoration: "underline" }}>
                  Return to Home Page
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Mobile App Version */}
      <div className="lg:hidden w-full bg-gray-50/50 min-h-screen pb-10">
        <section className="px-4 py-8 bg-white border-b border-[rgba(43,36,29,0.06)] shadow-sm">
          <h1 className="font-sora text-3xl font-bold text-[#2B241D] leading-tight mb-2">Luxury Residences</h1>
          <p className="text-[#6B5F52] text-[14px]">Trusted Projects in Bengaluru</p>
        </section>

        <section className="px-4 py-6 flex flex-col gap-5">
          {properties.map((p) => {
            const bhkList = Array.from(new Set(p.configurations.map((c) => c.type)));
            const bhkString = bhkList.length > 0 ? bhkList.join(" & ") : "N/A";
            const areas = p.configurations
              .map((c) => parseInt(c.area.replace(/[^\d]/g, "")))
              .filter((a) => !isNaN(a));
            let areaString = "N/A";
            if (areas.length > 0) {
              const minArea = Math.min(...areas);
              areaString = `${minArea}+ sqft`;
            }

            return (
              <div key={p.id} className="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(43,36,29,0.06)] overflow-hidden border border-[rgba(43,36,29,0.04)] relative">
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#4A4038] shadow-sm active:scale-95 transition-transform">
                    <Heart size={20} />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#4A4038] shadow-sm active:scale-95 transition-transform">
                    <Share2 size={20} />
                  </button>
                </div>

                <Link href={`/properties/${p.slug}`} className="block relative h-[240px]">
                  <img src={p.coverImage || "/assets/images/placeholder.avif"} alt={p.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-[#F06400] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                    {p.isFeatured ? "Featured" : "Premium"}
                  </div>
                </Link>

                <div className="p-5">
                  <Link href={`/properties/${p.slug}`} className="block">
                    <div className="flex justify-between items-start mb-1.5">
                      <h3 className="font-sora text-[19px] font-bold text-[#2B241D] leading-tight pr-2">{p.name}</h3>
                      {p.builder?.logo && (
                        <img src={p.builder.logo} alt={p.builder.name} className="h-6 w-auto object-contain shrink-0 mix-blend-multiply" />
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-[#6B5F52] text-[13px] mb-4">
                      <MapPin size={15} className="text-[#F06400]" />
                      <span className="truncate">{p.location?.name || "Bengaluru"}</span>
                    </div>
                  </Link>

                  <div className="flex gap-4 mb-5 border-y border-[rgba(43,36,29,0.06)] py-3.5">
                    <div className="flex items-center gap-2 text-[14px] text-[#4A4038] font-medium flex-1">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#F06400] shrink-0">
                        <BedDouble size={16} />
                      </div>
                      <span className="truncate">{bhkString}</span>
                    </div>
                    <div className="w-[1px] h-8 bg-[rgba(43,36,29,0.06)]"></div>
                    <div className="flex items-center gap-2 text-[14px] text-[#4A4038] font-medium flex-1">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#F06400] shrink-0">
                        <Maximize size={16} />
                      </div>
                      <span className="truncate">{areaString}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-[#8A7B5C] font-semibold uppercase tracking-wider mb-0.5">Starting Price</span>
                      <span className="font-sora text-[22px] font-bold text-[#2B241D] leading-none">{p.startingPrice || "On Request"}</span>
                    </div>
                    <Link href={`/properties/${p.slug}`} className="w-12 h-12 bg-[#2B241D] text-white rounded-xl flex items-center justify-center active:scale-95 transition-transform shadow-md">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          
          {properties.length === 0 && (
            <div className="text-center py-16 text-[#8A7B5C] bg-white rounded-3xl border border-[rgba(43,36,29,0.04)]">
              <p className="text-[15px] font-medium mb-3">No active properties found.</p>
              <Link href="/" className="text-[#F06400] font-bold text-[14px]">
                Return Home
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
