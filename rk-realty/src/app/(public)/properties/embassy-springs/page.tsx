import { MapPin, CheckCircle2 } from "lucide-react";
import PropertyEnquiryForm from "../[slug]/PropertyEnquiryForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Embassy Springs | RK Associates",
  description: "Discover Township Living at an Unprecedented Scale in Devanahalli, Bengaluru.",
};

export default function EmbassySpringsPage() {
  return (
    <div>
      {/* Hero Banner Section */}
      <section style={{ position: "relative", height: 480, overflow: "hidden", background: "#2B241D" }}>
        <img 
          src="/assets/images/placeholder.avif" 
          alt="Embassy Springs" 
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(43,36,29,0.9) 0%, rgba(43,36,29,0.3) 50%, rgba(43,36,29,0.1) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, maxWidth: 1280, margin: "0 auto", padding: "0 32px 48px", color: "#F7F2EA" }}>
          <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 44, fontWeight: 700, marginBottom: 12 }}>Embassy Springs</h1>
          <p style={{ fontSize: 18, marginBottom: 16, maxWidth: 800 }}>Discover Township Living at an Unprecedented Scale. A landmark integrated township designed to offer a complete lifestyle ecosystem with premium residences, open spaces, educational institutions, healthcare facilities, and commercial infrastructure.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, fontSize: 15, color: "rgba(247,242,234,0.85)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <MapPin size={18} color="#F06400" /> Devanahalli, Bengaluru
            </span>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section style={{ maxWidth: 1280, margin: "60px auto 100px", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48, alignItems: "start" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            
            {/* Description */}
            <div>
              <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 16 }}>Project Overview</h2>
              <div style={{ fontSize: 15.5, color: "#4A4038", lineHeight: 1.8, whiteSpace: "pre-line" }}>
                Embassy Springs is one of Bengaluru's most ambitious township developments, spanning a vast area in the rapidly growing Devanahalli region. Designed to create a self-sustaining community, the township combines residential, educational, healthcare, retail, and recreational infrastructure within one master-planned environment.

                Its proximity to Kempegowda International Airport and upcoming infrastructure developments makes it a highly attractive destination for both homebuyers and investors.

                With world-class planning, premium amenities, and a focus on long-term livability, Embassy Springs represents the future of integrated township living in Bengaluru.
              </div>
            </div>

            {/* Amenities Section */}
            <div>
              <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 20 }}>Project Highlights</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                {[
                  "Integrated Township Development",
                  "Premium Residential Community",
                  "Extensive Green Spaces",
                  "Airport Corridor Location",
                  "Schools & Healthcare Facilities",
                  "Lifestyle Amenities",
                  "Future Infrastructure Growth",
                  "Developed by Embassy Group"
                ].map((amenity, idx) => (
                  <div 
                    key={idx} 
                    style={{ background: "#FFFFFF", padding: "16px 20px", borderRadius: 12, border: "1px solid rgba(43,36,29,0.06)", display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <CheckCircle2 size={20} color="#F06400" style={{ flex: "none" }} />
                    <span style={{ fontSize: 14.5, fontWeight: 500, color: "#4A4038" }}>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Enquiry Widget */}
          <div style={{ position: "sticky", top: 100 }}>
            <PropertyEnquiryForm propertyName="Embassy Springs" />
          </div>

        </div>
      </section>
    </div>
  );
}
