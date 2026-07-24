import { PageBanner } from "@/components/PageBanner";
import { ChevronDown, Home, TrendingUp, Key, Building2, Map, FileCheck } from "lucide-react";

export const metadata = {
  title: "Our Services | RK Associates",
  description: "Real Estate Solutions Designed Around Your Goals.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "buying",
      title: "Property Buying Assistance",
      subtitle: "Find the Right Property with Confidence",
      icon: Home,
      desc: "Buying a property is one of life's most significant decisions. At RK Associates, we help clients identify the right opportunities based on their lifestyle preferences, budget, and long-term goals.",
      listTitle: "Our Assistance Includes:",
      items: ["Property Shortlisting", "Project Comparison", "Site Visit Coordination", "Builder Interactions", "Documentation Guidance", "End-to-End Transaction Support"]
    },
    {
      id: "investment",
      title: "Real Estate Investment Advisory",
      subtitle: "Turning Opportunities into Long-Term Value",
      icon: TrendingUp,
      desc: "Real estate is more than a purchase—it's an investment for your future. With extensive knowledge of Bengaluru's real estate landscape, RK Associates helps investors identify high-growth locations and projects with strong appreciation potential.",
      listTitle: "We Help You With:",
      items: ["Investment Planning", "Market Insights", "Location Analysis", "Developer Evaluation", "ROI-Oriented Property Selection"]
    },
    {
      id: "rental",
      title: "Rental Solutions",
      subtitle: "Simplifying Residential Rentals",
      icon: Key,
      desc: "Whether you're searching for a rental property or looking to lease your asset, RK Associates offers complete rental assistance tailored to your requirements. Our team helps connect tenants with quality properties while assisting property owners in finding suitable occupants.",
      listTitle: "Residential Rentals:",
      items: ["Apartments", "Villas", "Independent Homes"]
    },
    {
      id: "management",
      title: "Property Management",
      subtitle: "Professional Support for Property Owners",
      icon: Building2,
      desc: "Managing a property requires time, attention, and coordination. RK Associates provides professional property management support to help owners maintain their assets efficiently while ensuring smooth tenant interactions and operational assistance.",
      listTitle: "Benefits:",
      items: ["Property Monitoring", "Tenant Coordination", "Rental Management Support", "Property Maintenance Assistance", "Owner Representation"]
    },
    {
      id: "site-visit",
      title: "Site Visit Assistance",
      subtitle: "Experience the Property Before You Decide",
      icon: Map,
      desc: "A site visit plays a crucial role in evaluating any real estate investment. Our team arranges personalized site visits, helping clients understand project features, location advantages, connectivity, and overall investment potential.",
      listTitle: "Site Visit Support:",
      items: ["Project Walkthroughs", "Builder Presentations", "Location Analysis", "Project Comparisons", "Expert Consultation"]
    },
    {
      id: "documentation",
      title: "Documentation Support",
      subtitle: "Guidance Through Every Step",
      icon: FileCheck,
      desc: "Real estate transactions involve important documentation and procedural requirements. Our team assists clients throughout the documentation process to ensure clarity, transparency, and confidence.",
      listTitle: "Support Includes:",
      items: ["Project Documentation Review", "Application Assistance", "Builder Coordination", "Transaction Guidance", "Process Clarification"]
    }
  ];

  return (
    <div className="bg-[#F7F2EA] min-h-screen text-[#2B241D] w-full">
      
      <PageBanner 
        imageSrc="/assets/images/banners/services-page-1.avif"
        title="Real Estate Solutions Designed Around Your Goals"
        subtitle="Expert real estate guidance tailored for you."
      />

      {/* Desktop Version */}
      <div className="hidden lg:block">
        <section className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-2 gap-10">
            {services.map((s) => (
              <div key={s.id} className="bg-white p-10 rounded-3xl border border-[rgba(43,36,29,0.06)] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#F06400]/10 text-[#F06400] rounded-2xl flex items-center justify-center mb-6">
                  <s.icon size={32} />
                </div>
                <h2 className="font-sora text-2xl font-bold mb-2 text-[#2B241D]">{s.title}</h2>
                <h3 className="text-[17px] font-semibold mb-4 text-[#F06400]">{s.subtitle}</h3>
                <p className="text-[#4A4038] text-[16px] leading-relaxed mb-6">{s.desc}</p>
                <div>
                  <h4 className="font-bold text-[#2B241D] mb-4 text-[15px]">{s.listTitle}</h4>
                  <div className="grid grid-cols-2 gap-4 text-[#6B5F52] text-[14.5px]">
                    {s.items.map(item => (
                      <div key={item} className="flex gap-2.5 items-start">
                        <span className="text-[#F06400] font-bold mt-0.5">•</span>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Mobile App Version */}
      <div className="lg:hidden w-full pb-10 mt-6">

        <section className="px-4 py-8 flex flex-col gap-4 -mt-6 relative z-20">
          {services.map((s) => (
            <details key={s.id} className="group bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-50 text-[#F06400] rounded-xl flex items-center justify-center shrink-0">
                    <s.icon size={22} strokeWidth={2.5} />
                  </div>
                  <h2 className="font-sora text-[17px] font-bold text-[#2B241D] leading-tight">{s.title}</h2>
                </div>
                <ChevronDown className="transition-transform group-open:rotate-180 text-[#6B5F52] shrink-0 ml-2" size={20} />
              </summary>
              <div className="px-5 pb-6 pt-1 border-t border-black/5 mt-1">
                <h3 className="text-[14px] font-bold text-[#F06400] mb-3 mt-4">{s.subtitle}</h3>
                <p className="text-[#6B5F52] text-[14px] leading-relaxed mb-5">{s.desc}</p>
                <div className="bg-gray-50/80 p-4 rounded-xl border border-black/5">
                  <h4 className="font-bold text-[#2B241D] mb-3 text-[13px] uppercase tracking-wider">{s.listTitle}</h4>
                  <ul className="flex flex-col gap-2.5 text-[#4A4038] text-[13.5px]">
                    {s.items.map(item => (
                      <li key={item} className="flex gap-2 items-start">
                        <span className="text-[#F06400] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </section>

        <section className="px-4 pb-8">
          <div className="bg-gradient-to-br from-[#F06400] to-[#D85A00] rounded-3xl p-6 text-white shadow-lg text-center relative overflow-hidden">
            <h2 className="font-sora text-2xl font-bold mb-3 relative z-10">Talk to Our Experts Today</h2>
            <p className="text-white/90 text-[14px] mb-6 relative z-10">Get expert guidance for your real estate needs.</p>
            <a href="/contact" className="inline-block w-full bg-[#2B241D] text-white py-4 rounded-xl font-bold text-[15px] active:scale-95 transition-transform relative z-10">
              Schedule Consultation
            </a>
          </div>
        </section>
      </div>

      {/* Desktop CTA */}
      <div className="hidden lg:block">
        <section className="bg-white py-24 px-8 text-center border-t border-[rgba(43,36,29,0.06)]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-sora text-3xl font-bold mb-4 text-[#2B241D]">Looking for Expert Real Estate Guidance?</h2>
            <p className="text-[#4A4038] text-xl mb-10">Talk to Our Experts Today</p>
            <a href="/contact" className="inline-block bg-[#F06400] text-[#F7F2EA] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#d85a00] transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
