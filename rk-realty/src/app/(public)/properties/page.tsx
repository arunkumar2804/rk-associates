import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { MapPin, BedDouble, Maximize } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await prisma.websiteSetting.findFirst();
  return {
    title: `Premium Properties in Bengaluru | ${settings?.companyName || "RK Associates"}`,
    description: settings?.globalSeoDescription || "Browse curated residential properties, apartments, and villas from top developers in Bengaluru.",
  };
}

export default async function PropertiesPage() {
  const properties = await prisma.property.findMany({
    where: { status: "ACTIVE" },
    include: {
      location: true,
      configurations: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <section style={{ padding: "80px 32px 40px", textAlign: "center" }}>
        <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 48, fontWeight: 700, marginBottom: 20 }}>Curated Properties</h1>
        <p style={{ fontSize: 18, color: "#4A4038", maxWidth: 600, margin: "0 auto" }}>
          Explore our handpicked selection of Bengaluru&apos;s most sought-after residential developments.
        </p>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 32 }}>
          {properties.map((p) => {
            // Aggregate configs
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
              <div 
                key={p.id}
                className="card-hover" 
                style={{ background: "#FFFFFF", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(43,36,29,0.08)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
              >
                <div>
                  <div style={{ position: "relative", height: 240, overflow: "hidden" }}>
                    <img 
                      src={p.coverImage || "/assets/images/placeholder.avif"} 
                      alt={p.name} 
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} 
                    />
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
  );
}
