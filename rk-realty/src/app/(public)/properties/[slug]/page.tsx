import { notFound } from "next/navigation";
import { propertiesData } from "@/data/properties";
import { MapPin, Calendar, FileText, CheckCircle2, ChevronDown, BedDouble, Maximize } from "lucide-react";
import PropertyEnquiryForm from "./PropertyEnquiryForm";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = propertiesData.find(p => p.slug === slug);

  if (!property) return { title: "Property Not Found" };

  return {
    title: `${property.seoTitle || property.name} | RK Associates`,
    description: property.seoDescription || `Explore details, configurations, amenities, and floor plans for ${property.name} in Bengaluru.`,
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = propertiesData.find(p => p.slug === slug);

  if (!property) {
    notFound();
  }

  const amenityList = property.amenities ? property.amenities.split(',').map((a: string) => a.trim()).filter((a: string) => a) : [];

  return (
    <div className="w-full">
      {/* Desktop Version */}
      <div className="hidden lg:block">
        <section style={{ position: "relative", height: 480, overflow: "hidden", background: "#2B241D" }}>
          <img 
            src={property.coverImage || "/assets/images/placeholder.avif"} 
            alt={property.name} 
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(43,36,29,0.9) 0%, rgba(43,36,29,0.3) 50%, rgba(43,36,29,0.1) 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, maxWidth: 1280, margin: "0 auto", padding: "0 32px 48px", color: "#F7F2EA" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
              {property.builder?.logo && (
                <img 
                  src={property.builder.logo} 
                  alt={property.builder.name} 
                  style={{ height: 36, objectFit: "contain", background: "#FFFFFF", padding: "4px 8px", borderRadius: 6 }} 
                />
              )}
              {property.builder && (
                <span style={{ fontSize: 13, fontWeight: 700, color: "#F06400", letterSpacing: 1, textTransform: "uppercase" }}>
                  {property.builder.name}
                </span>
              )}
            </div>
            <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 44, fontWeight: 700, marginBottom: 12 }}>{property.name}</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, fontSize: 15, color: "rgba(247,242,234,0.85)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <MapPin size={18} color="#F06400" /> {property.locationName || "Bengaluru"}
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

        <section style={{ maxWidth: 1280, margin: "60px auto 100px", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              
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

              {property.description && (
                <div>
                  <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 16 }}>About the Project</h2>
                  <div style={{ fontSize: 15.5, color: "#4A4038", lineHeight: 1.8, whiteSpace: "pre-line" }}>
                    {property.description}
                  </div>
                </div>
              )}

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

              {amenityList.length > 0 && (
                <div>
                  <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 20 }}>Project Amenities</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                    {amenityList.map((amenityName: string, index: number) => (
                      <div 
                        key={index} 
                        style={{ background: "#FFFFFF", padding: "16px 20px", borderRadius: 12, border: "1px solid rgba(43,36,29,0.06)", display: "flex", alignItems: "center", gap: 12 }}
                      >
                        <CheckCircle2 size={20} color="#F06400" style={{ flex: "none" }} />
                        <span style={{ fontSize: 14.5, fontWeight: 500, color: "#4A4038" }}>{amenityName}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {property.galleryImages.length > 0 && (
                <div>
                  <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 20 }}>Project Gallery</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                    {property.galleryImages.map((img) => (
                      <div key={img.id} style={{ height: 240, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(43,36,29,0.08)" }}>
                        <img src={img.url} alt="Project Gallery Image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {property.floorPlans.length > 0 && (
                <div>
                  <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 20 }}>Floor Plans</h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                    {property.floorPlans.map((fp) => (
                      <div key={fp.id} style={{ padding: 16, background: "#FFFFFF", borderRadius: 16, border: "1px solid rgba(43,36,29,0.08)", textAlign: "center" }}>
                        <img src={fp.url} alt="Floor Plan" style={{ maxWidth: "100%", height: 260, objectFit: "contain", margin: "0 auto 12px" }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            <div style={{ position: "sticky", top: 100 }}>
              <PropertyEnquiryForm propertyName={property.name} />
            </div>

          </div>
        </section>
      </div>

      {/* Mobile App Version */}
      <div className="lg:hidden w-full bg-[#F7F2EA] min-h-screen pb-6">
        
        {/* Mobile Hero */}
        <div className="relative h-[400px] w-full">
          <img 
            src={property.coverImage || "/assets/images/placeholder.avif"} 
            alt={property.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex gap-2 items-center mb-3">
              <span className="bg-[#F06400] text-white text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider shadow-sm">
                {property.status}
              </span>
              {property.isFeatured && (
                <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider">
                  Featured
                </span>
              )}
            </div>
            
            <h1 className="font-sora text-3xl font-bold text-white leading-tight mb-2">{property.name}</h1>
            
            <div className="flex items-center gap-2 text-white/90 text-[14px]">
              <MapPin size={16} className="text-[#F06400]" />
              <span className="truncate">{property.locationName || "Bengaluru"}</span>
            </div>
          </div>
        </div>

        {/* Floating Quick Stats Card */}
        <div className="px-4 -mt-6 relative z-10 mb-6">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(43,36,29,0.08)] p-5 border border-black/5">
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col">
                <span className="text-[11px] text-[#8A7B5C] font-bold uppercase tracking-wider mb-1">Starting Price</span>
                <span className="font-sora text-[22px] font-bold text-[#F06400] leading-none">{property.startingPrice}</span>
              </div>
              {property.builder?.logo && (
                <img src={property.builder.logo} alt={property.builder.name} className="h-8 object-contain mix-blend-multiply" />
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[rgba(43,36,29,0.06)]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#F06400] shrink-0">
                  <BedDouble size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#8A7B5C] font-semibold uppercase">Config</span>
                  <span className="text-[13px] font-bold text-[#2B241D]">{Array.from(new Set(property.configurations.map(c => c.type.split(" ")[0]))).join(", ")} BHK</span>
                </div>
              </div>
              {property.possessionDate && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#F06400] shrink-0">
                    <Calendar size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#8A7B5C] font-semibold uppercase">Possession</span>
                    <span className="text-[13px] font-bold text-[#2B241D]">{new Date(property.possessionDate).getFullYear()}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="px-4 flex flex-col gap-4">
          
          {/* About Accordion */}
          {property.description && (
            <details className="group bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex items-center justify-between p-5 font-sora font-bold text-[#2B241D] cursor-pointer list-none select-none">
                Overview
                <ChevronDown className="transition-transform group-open:rotate-180 text-[#6B5F52]" size={20} />
              </summary>
              <div className="p-5 pt-0 text-[14px] leading-relaxed text-[#6B5F52] border-t border-black/5 mt-1 pt-4">
                {property.description}
              </div>
            </details>
          )}

          {/* Pricing & Config Accordion */}
          {property.configurations.length > 0 && (
            <details className="group bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 font-sora font-bold text-[#2B241D] cursor-pointer list-none select-none">
                Configurations & Pricing
                <ChevronDown className="transition-transform group-open:rotate-180 text-[#6B5F52]" size={20} />
              </summary>
              <div className="p-0 border-t border-black/5">
                {property.configurations.map((config, i) => (
                  <div key={config.id} className={`p-4 flex justify-between items-center ${i !== property.configurations.length - 1 ? 'border-b border-black/5' : ''}`}>
                    <div className="flex flex-col">
                      <span className="font-bold text-[#2B241D] text-[15px]">{config.type}</span>
                      <span className="text-[13px] text-[#6B5F52]">{config.area}</span>
                    </div>
                    <span className="font-bold text-[#F06400] text-[15px]">{config.price || "On Request"}</span>
                  </div>
                ))}
              </div>
            </details>
          )}

          {/* Amenities Accordion */}
          {amenityList.length > 0 && (
            <details className="group bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 font-sora font-bold text-[#2B241D] cursor-pointer list-none select-none">
                Amenities
                <ChevronDown className="transition-transform group-open:rotate-180 text-[#6B5F52]" size={20} />
              </summary>
              <div className="p-4 pt-0 border-t border-black/5 mt-1">
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {amenityList.map((amenityName: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50/50 p-3 rounded-xl border border-black/5">
                      <CheckCircle2 size={18} className="text-[#F06400]" />
                      <span className="text-[12.5px] font-medium text-[#4A4038] leading-tight">{amenityName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          )}

          {/* Mobile Swipe Gallery */}
          {property.galleryImages.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden py-5">
              <h3 className="px-5 font-sora font-bold text-[#2B241D] mb-4">Project Gallery</h3>
              <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 gap-3 pb-2">
                {property.galleryImages.map((img) => (
                  <div key={img.id} className="snap-center shrink-0 w-[280px] h-[200px] rounded-xl overflow-hidden relative border border-black/5">
                    <img src={img.url} alt="Gallery" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Floor Plans Gallery */}
          {property.floorPlans.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden py-5">
              <h3 className="px-5 font-sora font-bold text-[#2B241D] mb-4">Floor Plans</h3>
              <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 gap-3 pb-2">
                {property.floorPlans.map((fp) => (
                  <div key={fp.id} className="snap-center shrink-0 w-[280px] h-[200px] rounded-xl overflow-hidden relative border border-black/5 bg-gray-50 flex items-center justify-center p-2">
                    <img src={fp.url} alt="Floor Plan" className="max-w-full max-h-full object-contain mix-blend-multiply" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Widget */}
          <div className="mt-4" id="enquiry-form">
            <PropertyEnquiryForm propertyName={property.name} />
          </div>

        </div>
      </div>
    </div>
  );
}
