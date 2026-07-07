import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { MapPin, Calendar, FileText, CheckCircle2 } from "lucide-react";
import PropertyEnquiryForm from "./PropertyEnquiryForm";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = await prisma.property.findUnique({
    where: { slug },
  });

  if (!property) return { title: "Property Not Found" };

  return {
    title: `${property.seoTitle || property.name} | RK Associates`,
    description: property.seoDescription || `Explore details, configurations, amenities, and floor plans for ${property.name} in Bengaluru.`,
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = await prisma.property.findUnique({
    where: { slug },
    include: {
      location: true,
      builder: true,
      configurations: true,
      galleryImages: true,
      floorPlans: true,
      amenities: {
        include: {
          amenity: true,
        },
      },
    },
  });

  if (!property) {
    notFound();
  }

  return (
    <div>
      {/* Hero Banner Section */}
      <section style={{ position: "relative", height: 480, overflow: "hidden", background: "#2B241D" }}>
        <img 
          src={property.coverImage || "/assets/images/placeholder.avif"} 
          alt={property.name} 
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(43,36,29,0.9) 0%, rgba(43,36,29,0.3) 50%, rgba(43,36,29,0.1) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, maxWidth: 1280, margin: "0 auto", padding: "0 32px 48px", color: "#F7F2EA" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
            {property.builder.logo && (
              <img 
                src={property.builder.logo} 
                alt={property.builder.name} 
                style={{ height: 36, objectFit: "contain", background: "#FFFFFF", padding: "4px 8px", borderRadius: 6 }} 
              />
            )}
            <span style={{ fontSize: 13, fontWeight: 700, color: "#F06400", letterSpacing: 1, textTransform: "uppercase" }}>
              {property.builder.name}
            </span>
          </div>
          <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 44, fontWeight: 700, marginBottom: 12 }}>{property.name}</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, fontSize: 15, color: "rgba(247,242,234,0.85)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <MapPin size={18} color="#F06400" /> {property.location.name}
            </span>
            {property.reraNumber && (
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <FileText size={18} color="#F06400" /> RERA: {property.reraNumber}
              </span>
            )}
            {property.possessionDate && (
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Calendar size={18} color="#F06400" /> Possession: {new Date(property.possessionDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section style={{ maxWidth: 1280, margin: "60px auto 100px", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48, alignItems: "start" }}>
          
          {/* Left Column: Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            
            {/* Highlights Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              <div style={{ background: "#FFFFFF", padding: 24, borderRadius: 16, border: "1px solid rgba(43,36,29,0.08)", textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "#8A7B5C", fontWeight: 600, textTransform: "uppercase", marginBottom: 6 }}>Starting Price</div>
                <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 22, fontWeight: 700, color: "#F06400" }}>{property.startingPrice}</div>
              </div>
              <div style={{ background: "#FFFFFF", padding: 24, borderRadius: 16, border: "1px solid rgba(43,36,29,0.08)", textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "#8A7B5C", fontWeight: 600, textTransform: "uppercase", marginBottom: 6 }}>Project Status</div>
                <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 20, fontWeight: 700, color: "#2B241D" }}>{property.status}</div>
              </div>
              <div style={{ background: "#FFFFFF", padding: 24, borderRadius: 16, border: "1px solid rgba(43,36,29,0.08)", textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "#8A7B5C", fontWeight: 600, textTransform: "uppercase", marginBottom: 6 }}>Configurations</div>
                <div style={{ fontFamily: '"Sora", sans-serif', fontSize: 20, fontWeight: 700, color: "#2B241D" }}>
                  {Array.from(new Set(property.configurations.map(c => c.type.split(" ")[0]))).join(", ")} BHK
                </div>
              </div>
            </div>

            {/* Description */}
            {property.description && (
              <div>
                <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 16 }}>About the Project</h2>
                <div style={{ fontSize: 15.5, color: "#4A4038", lineHeight: 1.8, whiteSpace: "pre-line" }}>
                  {property.description}
                </div>
              </div>
            )}

            {/* Configurations Table */}
            {property.configurations.length > 0 && (
              <div>
                <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 20 }}>Floor Plans & Pricing</h2>
                <div style={{ overflowX: "auto", border: "1px solid rgba(43,36,29,0.08)", borderRadius: 16, background: "#FFFFFF" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 500 }}>
                    <thead>
                      <tr style={{ background: "#F7F2EA", borderBottom: "1px solid rgba(43,36,29,0.08)", textAlign: "left" }}>
                        <th style={{ padding: "16px 24px", fontSize: 13, fontWeight: 700, color: "#2B241D" }}>Unit Type</th>
                        <th style={{ padding: "16px 24px", fontSize: 13, fontWeight: 700, color: "#2B241D" }}>Super Built-up Area</th>
                        <th style={{ padding: "16px 24px", fontSize: 13, fontWeight: 700, color: "#2B241D" }}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {property.configurations.map((config) => (
                        <tr key={config.id} style={{ borderBottom: "1px solid rgba(43,36,29,0.06)", fontSize: 14.5 }}>
                          <td style={{ padding: "18px 24px", fontWeight: 600, color: "#2B241D" }}>{config.type}</td>
                          <td style={{ padding: "18px 24px", color: "#4A4038" }}>{config.area}</td>
                          <td style={{ padding: "18px 24px", fontWeight: 700, color: "#F06400" }}>{config.price || "On Request"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Amenities Section */}
            {property.amenities.length > 0 && (
              <div>
                <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 20 }}>Project Amenities</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                  {property.amenities.map(({ amenity }) => (
                    <div 
                      key={amenity.id} 
                      style={{ background: "#FFFFFF", padding: "16px 20px", borderRadius: 12, border: "1px solid rgba(43,36,29,0.06)", display: "flex", alignItems: "center", gap: 12 }}
                    >
                      {amenity.iconUrl ? (
                        <img 
                          src={amenity.iconUrl} 
                          alt={amenity.name} 
                          style={{ width: 24, height: 24, objectFit: "contain", flex: "none" }} 
                        />
                      ) : (
                        <CheckCircle2 size={20} color="#F06400" style={{ flex: "none" }} />
                      )}
                      <span style={{ fontSize: 14.5, fontWeight: 500, color: "#4A4038" }}>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Gallery */}
            {property.galleryImages.length > 0 && (
              <div>
                <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 20 }}>Project Gallery</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                  {property.galleryImages.map((img) => (
                    <div key={img.id} style={{ height: 240, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(43,36,29,0.08)" }}>
                      <img 
                        src={img.url} 
                        alt="Project Gallery Image" 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Floor Plan Images */}
            {property.floorPlans.length > 0 && (
              <div>
                <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 20 }}>Floor Plans</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                  {property.floorPlans.map((fp) => (
                    <div key={fp.id} style={{ padding: 16, background: "#FFFFFF", borderRadius: 16, border: "1px solid rgba(43,36,29,0.08)", textAlign: "center" }}>
                      <img 
                        src={fp.url} 
                        alt="Floor Plan" 
                        style={{ maxWidth: "100%", height: 260, objectFit: "contain", margin: "0 auto 12px" }} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sticky Enquiry Widget */}
          <div style={{ position: "sticky", top: 100 }}>
            <PropertyEnquiryForm propertyName={property.name} />
          </div>

        </div>
      </section>
    </div>
  );
}
