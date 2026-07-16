import { MapPin, CheckCircle2 } from "lucide-react";
import PropertyEnquiryForm from "../../properties/[slug]/PropertyEnquiryForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phoenix One Bengaluru West | RK Associates",
  description: "Elevated Living in the Heart of Bengaluru in Rajajinagar.",
};

export default function PhoenixOnePage() {
  return (
    <div>
      {/* Hero Banner Section */}
      <section style={{ position: "relative", height: 480, overflow: "hidden", background: "#2B241D" }}>
        <img 
          src="/assets/images/placeholder.avif" 
          alt="Phoenix One Bengaluru West" 
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(43,36,29,0.9) 0%, rgba(43,36,29,0.3) 50%, rgba(43,36,29,0.1) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, maxWidth: 1280, margin: "0 auto", padding: "0 32px 48px", color: "#F7F2EA" }}>
          <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 44, fontWeight: 700, marginBottom: 12 }}>Phoenix One Bengaluru West</h1>
          <p style={{ fontSize: 18, marginBottom: 16, maxWidth: 800 }}>Elevated Living in the Heart of Bengaluru. A premium residential address designed for those who seek luxury, privacy, and convenience within one of Bengaluru's most established neighbourhoods.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, fontSize: 15, color: "rgba(247,242,234,0.85)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <MapPin size={18} color="#F06400" /> Rajajinagar, Bengaluru
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
              <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 16 }}>Property Overview</h2>
              <div style={{ fontSize: 15.5, color: "#4A4038", lineHeight: 1.8, whiteSpace: "pre-line" }}>
                Phoenix One Bengaluru West represents contemporary luxury living at its finest. Located in Rajajinagar, one of Bengaluru's most established residential corridors, the development offers thoughtfully designed homes complemented by world-class amenities and exceptional connectivity.

                Residents enjoy convenient access to major commercial centres, educational institutions, healthcare facilities, retail destinations, and metro connectivity, making it an ideal choice for urban professionals and families.

                With premium specifications, expansive living spaces, and a carefully curated lifestyle experience, Phoenix One Bengaluru West remains one of the city's most prestigious rental destinations.
              </div>
            </div>

            {/* Amenities Section */}
            <div>
              <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 20 }}>Property Highlights</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                {[
                  "Luxury High-Rise Development",
                  "Spacious Premium Residences",
                  "Grand Clubhouse",
                  "Swimming Pool",
                  "Fitness & Wellness Facilities",
                  "Landscaped Gardens",
                  "Prime Rajajinagar Location",
                  "Developed by Phoenix Mills"
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
            <PropertyEnquiryForm propertyName="Phoenix One Bengaluru West (Rental)" />
          </div>

        </div>
      </section>
    </div>
  );
}
