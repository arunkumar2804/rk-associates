import { MapPin, CheckCircle2 } from "lucide-react";
import PropertyEnquiryForm from "../../properties/[slug]/PropertyEnquiryForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brigade Gateway | RK Associates",
  description: "Live at Bengaluru's Most Iconic Lifestyle Destination in Rajajinagar.",
};

export default function BrigadeGatewayPage() {
  return (
    <div>
      {/* Hero Banner Section */}
      <section style={{ position: "relative", height: 480, overflow: "hidden", background: "#2B241D" }}>
        <img 
          src="/assets/images/placeholder.avif" 
          alt="Brigade Gateway" 
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(43,36,29,0.9) 0%, rgba(43,36,29,0.3) 50%, rgba(43,36,29,0.1) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, maxWidth: 1280, margin: "0 auto", padding: "0 32px 48px", color: "#F7F2EA" }}>
          <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 44, fontWeight: 700, marginBottom: 12 }}>Brigade Gateway</h1>
          <p style={{ fontSize: 18, marginBottom: 16, maxWidth: 800 }}>Live at Bengaluru's Most Iconic Lifestyle Destination. Experience premium living in a landmark integrated development that combines luxury residences, retail, hospitality, healthcare, and entertainment within a single destination.</p>
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
                Brigade Gateway is one of Bengaluru's most recognizable integrated developments, offering residents a unique blend of luxury living and urban convenience. Strategically located in Rajajinagar, the community enjoys seamless access to major business districts, educational institutions, healthcare facilities, and entertainment destinations.

                Its proximity to Orion Mall, the World Trade Center, and metro connectivity makes it a preferred choice for professionals, expatriates, and families seeking a premium rental address in the city.

                Designed with a focus on comfort, lifestyle, and convenience, Brigade Gateway continues to be one of the most sought-after residential communities in Bengaluru.
              </div>
            </div>

            {/* Amenities Section */}
            <div>
              <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 20 }}>Property Highlights</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                {[
                  "Located Next to Orion Mall",
                  "Walking Distance to Metro Station",
                  "Premium Clubhouse",
                  "Swimming Pool & Fitness Centre",
                  "Landscaped Open Spaces",
                  "Children's Play Areas",
                  "Close to World Trade Center",
                  "Developed by Brigade Group"
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
            <PropertyEnquiryForm propertyName="Brigade Gateway (Rental)" />
          </div>

        </div>
      </section>
    </div>
  );
}
