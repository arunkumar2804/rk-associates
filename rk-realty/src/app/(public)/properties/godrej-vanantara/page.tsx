import { MapPin, CheckCircle2 } from "lucide-react";
import PropertyEnquiryForm from "../[slug]/PropertyEnquiryForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Godrej Vanantara | RK Associates",
  description: "Nature-Inspired Luxury Living in South Bengaluru.",
};

export default function GodrejVanantaraPage() {
  return (
    <div>
      {/* Hero Banner Section */}
      <section style={{ position: "relative", height: 480, overflow: "hidden", background: "#2B241D" }}>
        <img 
          src="/assets/images/banners/godrej-vanantara-1.avif" 
          alt="Godrej Vanantara" 
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(43,36,29,0.9) 0%, rgba(43,36,29,0.3) 50%, rgba(43,36,29,0.1) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, maxWidth: 1280, margin: "0 auto", padding: "0 32px 48px", color: "#F7F2EA" }}>
          <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 44, fontWeight: 700, marginBottom: 12 }}>Godrej Vanantara</h1>
          <p style={{ fontSize: 18, marginBottom: 16, maxWidth: 800 }}>Nature-Inspired Luxury Living in South Bengaluru. Godrej Vanantara is thoughtfully designed to offer residents a lifestyle that balances luxury, wellness, and connectivity.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, fontSize: 15, color: "rgba(247,242,234,0.85)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <MapPin size={18} color="#F06400" /> Bannerghatta Road, Bengaluru
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
                Godrej Vanantara is a thoughtfully planned residential community located on the rapidly developing Bannerghatta Road corridor. Designed around the concept of nature-inspired living, the project offers spacious residences complemented by extensive open spaces, landscaped gardens, and premium lifestyle amenities.

                Its strategic location provides convenient access to major employment hubs, educational institutions, healthcare facilities, and entertainment destinations, making it an attractive choice for both end-users and investors.

                With contemporary architecture, modern conveniences, and the trust of Godrej Properties, Vanantara offers a balanced lifestyle that combines urban connectivity with serene living.
              </div>
            </div>

            {/* Project Highlights Section */}
            <div>
              <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 20 }}>Project Highlights</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                {[
                  "Premium 3 & 4 BHK Residences",
                  "70%+ Open Green Spaces",
                  "Excellent Connectivity",
                  "Developed by Godrej Properties"
                ].map((highlight, idx) => (
                  <div 
                    key={`h-${idx}`} 
                    style={{ background: "#FFFFFF", padding: "16px 20px", borderRadius: 12, border: "1px solid rgba(43,36,29,0.06)", display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <CheckCircle2 size={20} color="#F06400" style={{ flex: "none" }} />
                    <span style={{ fontSize: 14.5, fontWeight: 500, color: "#4A4038" }}>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities Section */}
            <div>
              <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 20 }}>Amenities</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                {[
                  "Grand Clubhouse",
                  "Swimming Pool",
                  "Sports & Wellness Facilities",
                  "Landscaped Gardens"
                ].map((amenity, idx) => (
                  <div 
                    key={`a-${idx}`} 
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
            <PropertyEnquiryForm propertyName="Godrej Vanantara" />
          </div>

        </div>
      </section>
    </div>
  );
}
