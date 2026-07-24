"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, BedDouble, Maximize, ArrowRight, Heart, Share2, Star } from "lucide-react";

import { PageBanner } from "@/components/PageBanner";

interface PropertiesClientProps {
  properties: any[];
  rentals: any[];
}

export default function PropertiesClient({ properties, rentals }: PropertiesClientProps) {
  const [activeTab, setActiveTab] = useState<"buy" | "rent">("buy");

  return (
    <div className="w-full">
      <PageBanner 
        imageSrc="/assets/images/banners/properties-page-1.avif"
        title="Discover Bengaluru's Most Exceptional Residences"
        subtitle="Trusted Projects | Prime Locations | Expert Guidance"
      />

      {/* Tabs / Chips Container */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        <div className="flex gap-3 overflow-x-auto no-scrollbar whitespace-nowrap pb-2">
          <button
            onClick={() => setActiveTab("buy")}
            className={`px-6 py-2.5 rounded-full font-sora font-semibold text-[14px] transition-all shadow-sm ${
              activeTab === "buy"
                ? "bg-[#2B241D] text-[#F7F2EA]"
                : "bg-white text-[#4A4038] border border-[rgba(43,36,29,0.1)] hover:border-[#F06400]"
            }`}
          >
            Buy Properties
          </button>
          <button
            onClick={() => setActiveTab("rent")}
            className={`px-6 py-2.5 rounded-full font-sora font-semibold text-[14px] transition-all shadow-sm ${
              activeTab === "rent"
                ? "bg-[#2B241D] text-[#F7F2EA]"
                : "bg-white text-[#4A4038] border border-[rgba(43,36,29,0.1)] hover:border-[#F06400]"
            }`}
          >
            Rent Properties
          </button>
        </div>
      </section>

      {/* Grid Content */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* BUY PROPERTIES */}
          {activeTab === "buy" && properties.map((p) => {
            const bhkList = Array.from(new Set(p.configurations?.map((c: any) => c.type) || []));
            const bhkString = bhkList.length > 0 ? bhkList.join(" & ") : "N/A";
            const areas = (p.configurations || [])
              .map((c: any) => parseInt(c.area.replace(/[^\d]/g, "")))
              .filter((a: any) => !isNaN(a));
            let areaString = "N/A";
            if (areas.length > 0) {
              const minArea = Math.min(...areas);
              const maxArea = Math.max(...areas);
              areaString = minArea === maxArea ? `${minArea} sqft` : `${minArea} - ${maxArea} sqft`;
            }

            return (
              <div key={p.id} className="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(43,36,29,0.06)] overflow-hidden border border-[rgba(43,36,29,0.04)] relative flex flex-col justify-between card-hover">
                <div>
                  <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#4A4038] shadow-sm active:scale-95 transition-transform">
                      <Heart size={20} />
                    </button>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#4A4038] shadow-sm active:scale-95 transition-transform">
                      <Share2 size={20} />
                    </button>
                  </div>

                  <Link href={`/properties/${p.slug}`} className="block relative h-[240px]">
                    <img src={p.coverImage || "/assets/images/placeholder.avif"} alt={p.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-[#F06400] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                      {p.isFeatured ? "Featured" : "Premium"}
                    </div>
                  </Link>

                  <div className="p-5">
                    <Link href={`/properties/${p.slug}`} className="block">
                      <div className="flex justify-between items-start mb-1.5">
                        <h3 className="font-sora text-[19px] font-bold text-[#2B241D] leading-tight pr-2">{p.name}</h3>
                        {p.builder?.logo && (
                          <img src={p.builder.logo} alt={p.builder.name} className="h-6 w-auto object-contain shrink-0 mix-blend-multiply hidden lg:block" />
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-[#6B5F52] text-[13px] mb-4">
                        <MapPin size={15} className="text-[#F06400]" />
                        <span className="truncate">{p.location?.name || "Bengaluru"}</span>
                      </div>
                    </Link>

                    <div className="flex gap-4 mb-5 border-y border-[rgba(43,36,29,0.06)] py-3.5">
                      <div className="flex items-center gap-2 text-[14px] text-[#4A4038] font-medium flex-1 overflow-hidden">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#F06400] shrink-0">
                          <BedDouble size={16} />
                        </div>
                        <span className="truncate">{bhkString}</span>
                      </div>
                      <div className="w-[1px] h-8 bg-[rgba(43,36,29,0.06)]"></div>
                      <div className="flex items-center gap-2 text-[14px] text-[#4A4038] font-medium flex-1 overflow-hidden">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#F06400] shrink-0">
                          <Maximize size={16} />
                        </div>
                        <span className="truncate">{areaString}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-[#8A7B5C] font-semibold uppercase tracking-wider mb-0.5">Starting From</span>
                    <span className="font-sora text-[22px] font-bold text-[#2B241D] leading-none">{p.startingPrice || "On Request"}</span>
                  </div>
                  <Link href={`/properties/${p.slug}`} className="w-12 h-12 bg-[#2B241D] text-white rounded-xl flex items-center justify-center active:scale-95 transition-transform shadow-md">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* RENT PROPERTIES */}
          {activeTab === "rent" && rentals.map((r) => (
            <div key={r.id} className="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(43,36,29,0.06)] overflow-hidden border border-[rgba(43,36,29,0.04)] relative flex flex-col justify-between card-hover">
              <div>
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#4A4038] shadow-sm active:scale-95 transition-transform">
                    <Heart size={20} />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#4A4038] shadow-sm active:scale-95 transition-transform">
                    <Share2 size={20} />
                  </button>
                </div>

                <Link href={`/rentals/${r.slug}`} className="block relative h-[240px]">
                  <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-[#F06400] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                    For Rent
                  </div>
                </Link>

                <div className="p-5">
                  <Link href={`/rentals/${r.slug}`} className="block mb-4">
                    <h3 className="font-sora text-[19px] font-bold text-[#2B241D] leading-tight mb-1.5">{r.name}</h3>
                    <div className="flex items-center gap-1.5 text-[#6B5F52] text-[13px]">
                      <MapPin size={15} className="text-[#F06400]" />
                      <span className="truncate">{r.location}</span>
                    </div>
                  </Link>

                  <div className="border-y border-[rgba(43,36,29,0.06)] py-3.5 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star size={14} className="text-[#F06400]" />
                      <span className="text-[12px] font-bold uppercase tracking-wider text-[#4A4038]">Top Highlights</span>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {r.highlights.slice(0, 3).map((h: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-[#6B5F52]">
                          <span className="text-[#F06400] font-bold mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex justify-end">
                <Link href={`/rentals/${r.slug}`} className="w-12 h-12 bg-[#2B241D] text-white rounded-xl flex items-center justify-center active:scale-95 transition-transform shadow-md">
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}

          {activeTab === "buy" && properties.length === 0 && (
            <div className="col-span-full text-center py-16 text-[#8A7B5C] bg-white rounded-3xl border border-[rgba(43,36,29,0.04)]">
              <p className="text-[15px] font-medium mb-3">No active properties found.</p>
            </div>
          )}

          {activeTab === "rent" && rentals.length === 0 && (
            <div className="col-span-full text-center py-16 text-[#8A7B5C] bg-white rounded-3xl border border-[rgba(43,36,29,0.04)]">
              <p className="text-[15px] font-medium mb-3">No active rentals found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
