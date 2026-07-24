import { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import Link from "next/link";
import { MapPin, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Premium Rentals | RK Associates",
  description: "Find your perfect premium rental home in Bengaluru.",
};

const RENTALS = [
  {
    id: "brigade-gateway",
    title: "BRIGADE GATEWAY",
    subtitle: "Live at Bengaluru's Most Iconic Lifestyle Destination",
    description: "Experience premium living in a landmark integrated development that combines luxury residences, retail, hospitality, healthcare, and entertainment within a single destination.",
    location: "Rajajinagar, Bengaluru",
    highlights: [
      "Located Next to Orion Mall",
      "Walking Distance to Metro Station",
      "Premium Clubhouse",
      "Swimming Pool & Fitness Centre",
      "Landscaped Open Spaces",
      "Children's Play Areas",
      "Close to World Trade Center",
      "Developed by Brigade Group"
    ],
    overview: "Brigade Gateway is one of Bengaluru's most recognizable integrated developments, offering residents a unique blend of luxury living and urban convenience. Strategically located in Rajajinagar, the community enjoys seamless access to major business districts, educational institutions, healthcare facilities, and entertainment destinations.\n\nIts proximity to Orion Mall, the World Trade Center, and metro connectivity makes it a preferred choice for professionals, expatriates, and families seeking a premium rental address in the city.\n\nDesigned with a focus on comfort, lifestyle, and convenience, Brigade Gateway continues to be one of the most sought-after residential communities in Bengaluru.",
    image: "/assets/images/placeholder.avif"
  },
  {
    id: "phoenix-one",
    title: "PHOENIX ONE BENGALURU WEST",
    subtitle: "Elevated Living in the Heart of Bengaluru",
    description: "A premium residential address designed for those who seek luxury, privacy, and convenience within one of Bengaluru's most established neighbourhoods.",
    location: "Rajajinagar, Bengaluru",
    highlights: [
      "Luxury High-Rise Development",
      "Spacious Premium Residences",
      "Grand Clubhouse",
      "Swimming Pool",
      "Fitness & Wellness Facilities",
      "Landscaped Gardens",
      "Prime Rajajinagar Location",
      "Developed by Phoenix Mills"
    ],
    overview: "Phoenix One Bengaluru West represents contemporary luxury living at its finest. Located in Rajajinagar, one of Bengaluru's most established residential corridors, the development offers thoughtfully designed homes complemented by world-class amenities and exceptional connectivity.\n\nResidents enjoy convenient access to major commercial centres, educational institutions, healthcare facilities, retail destinations, and metro connectivity, making it an ideal choice for urban professionals and families.\n\nWith premium specifications, expansive living spaces, and a carefully curated lifestyle experience, Phoenix One Bengaluru West remains one of the city's most prestigious rental destinations.",
    image: "/assets/images/placeholder.avif"
  }
];

export default function RentalsPage() {
  return (
    <div className="bg-[#F7F2EA] min-h-screen text-[#2B241D]">
      <PageBanner 
        imageSrc="/assets/images/banners/services-page-new.avif"
        title="Premium Rentals"
        subtitle="Discover the finest rental homes in Bengaluru."
      />

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="space-y-24">
          {RENTALS.map((rental, index) => (
            <div key={rental.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-start`}>
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-white border border-[rgba(43,36,29,0.08)] shadow-sm">
                  <img src={rental.image} alt={rental.title} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <h2 className="font-sora text-3xl font-bold text-[#2B241D] mb-2">{rental.title}</h2>
                <h3 className="text-xl text-[#F06400] font-semibold mb-4">{rental.subtitle}</h3>
                <p className="text-[#4A4038] text-lg leading-relaxed mb-4">
                  {rental.description}
                </p>
                <div className="flex items-center gap-2 text-[#6B5F52] mb-8 font-medium">
                  <MapPin size={20} className="text-[#F06400]" />
                  <span>{rental.location}</span>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 border border-[rgba(43,36,29,0.08)] shadow-sm mb-8">
                  <h4 className="font-sora text-xl font-bold mb-6 text-[#2B241D]">Property Highlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {rental.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#F06400] flex-shrink-0 mt-0.5" />
                        <span className="text-[#4A4038]">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-sora text-xl font-bold mb-4 text-[#2B241D]">Property Overview</h4>
                  <div className="space-y-4 text-[#4A4038] leading-relaxed">
                    {rental.overview.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-auto p-6 md:p-8 bg-[#2B241D] text-[#F7F2EA] rounded-2xl shadow-lg">
                  <h4 className="font-sora text-xl font-bold mb-2">Looking for a Premium Rental Home?</h4>
                  <p className="text-[#F7F2EA]/80 mb-6">Contact RK Associates for availability, rental pricing, and property visits.</p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-[#F06400] text-white px-8 py-3.5 rounded-full font-bold text-[15px] active:scale-95 transition-transform shadow-lg shadow-[#F06400]/20 hover:bg-[#D85A00]"
                  >
                    Enquire Now
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
