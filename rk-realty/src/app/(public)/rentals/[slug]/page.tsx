import { notFound } from "next/navigation";
import { rentalsData } from "@/data/rentals";
import { MapPin, CheckCircle2 } from "lucide-react";
import PropertyEnquiryForm from "../../properties/[slug]/PropertyEnquiryForm";
import PropertyPhotos from "@/components/PropertyPhotos";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const rental = rentalsData.find(r => r.slug === slug);

  if (!rental) return { title: "Rental Not Found" };

  return {
    title: `${rental.name} | RK Associates Rentals`,
    description: `Explore details and photos for ${rental.name} in ${rental.location}.`,
  };
}

export default async function RentalDetailPage({ params }: Props) {
  const { slug } = await params;
  const rental = rentalsData.find(r => r.slug === slug);

  if (!rental) {
    notFound();
  }

  const galleryImagesFormatted = rental.galleryImages.map((url, i) => ({
    id: `g${i}`,
    url
  }));

  return (
    <div className="w-full">
      {/* Desktop Version */}
      <div className="hidden lg:block">
        <section style={{ position: "relative", height: 480, overflow: "hidden", background: "#2B241D" }}>
          <img 
            src={rental.image || "/assets/images/placeholder.avif"} 
            alt={rental.name} 
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(43,36,29,0.9) 0%, rgba(43,36,29,0.3) 50%, rgba(43,36,29,0.1) 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, maxWidth: 1280, margin: "0 auto", padding: "0 32px 48px", color: "#F7F2EA" }}>
            <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 44, fontWeight: 700, marginBottom: 12 }}>{rental.name}</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, fontSize: 15, color: "rgba(247,242,234,0.85)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <MapPin size={18} color="#F06400" /> {rental.location}
              </span>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 1280, margin: "60px auto 100px", padding: "0 32px" }}>
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 items-start w-full">
            <div className="lg:col-span-2 flex flex-col gap-12 w-full">
              
              {rental.highlights && rental.highlights.length > 0 && (
                <div>
                  <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 20 }}>Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {rental.highlights.map((highlight: string, index: number) => (
                      <div 
                        key={index} 
                        style={{ background: "#FFFFFF", padding: "16px 20px", borderRadius: 12, border: "1px solid rgba(43,36,29,0.06)", display: "flex", alignItems: "center", gap: 12 }}
                      >
                        <CheckCircle2 size={20} color="#F06400" style={{ flex: "none" }} />
                        <span style={{ fontSize: 14.5, fontWeight: 500, color: "#4A4038" }}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {galleryImagesFormatted.length > 0 && (
                <PropertyPhotos images={galleryImagesFormatted} />
              )}
            </div>

             {/* Right Column: Sticky Enquiry Widget */}
            <div className="w-full lg:w-auto sticky top-[100px]">
              <PropertyEnquiryForm propertyName={rental.name} />
            </div>

          </div>
        </section>
      </div>

      {/* Mobile App Version */}
      <div className="lg:hidden w-full bg-[#F7F2EA] min-h-screen pb-6">
        
        <div className="relative h-[400px] w-full">
          <img 
            src={rental.image || "/assets/images/placeholder.avif"} 
            alt={rental.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h1 className="font-sora text-3xl font-bold text-white leading-tight mb-2">{rental.name}</h1>
            
            <div className="flex items-center gap-2 text-white/90 text-[14px]">
              <MapPin size={16} className="text-[#F06400]" />
              <span className="truncate">{rental.location}</span>
            </div>
          </div>
        </div>

        <div className="px-4 flex flex-col gap-4 mt-6">
          {rental.highlights && rental.highlights.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden py-5 px-5">
              <h3 className="font-sora font-bold text-[#2B241D] mb-4">Highlights</h3>
              <div className="flex flex-col gap-3 mt-4">
                {rental.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50/50 p-3 rounded-xl border border-black/5">
                    <CheckCircle2 size={18} className="text-[#F06400]" />
                    <span className="text-[12.5px] font-medium text-[#4A4038] leading-tight">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {galleryImagesFormatted.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden py-5">
              <h3 className="px-5 font-sora font-bold text-[#2B241D] mb-4">Gallery</h3>
              <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 gap-3 pb-2">
                {galleryImagesFormatted.map((img) => (
                  <div key={img.id} className="snap-center shrink-0 w-[280px] h-[200px] rounded-xl overflow-hidden relative border border-black/5">
                    <img src={img.url} alt="Gallery" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4" id="enquiry-form">
            <PropertyEnquiryForm propertyName={rental.name} />
          </div>

        </div>
      </div>
    </div>
  );
}
