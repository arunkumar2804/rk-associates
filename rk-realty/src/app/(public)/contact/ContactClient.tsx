"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import CustomerDetailsForm from "@/components/frontend/Forms/CustomerDetailsForm";

interface ContactClientProps {
  settings: {
    companyName: string;
    contactNumber1: string | null;
    contactNumber2: string | null;
    email: string | null;
    officeAddress: string | null;
  } | null;
}

export default function ContactClient({ settings }: ContactClientProps) {

  return (
    <section className="w-full">
      {/* Desktop Version */}
      <div className="hidden lg:block" style={{ maxWidth: 1280, margin: "60px auto 100px", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, background: "#FFFFFF", borderRadius: 32, overflow: "hidden", border: "1px solid rgba(43,36,29,0.08)", boxShadow: "0 20px 40px rgba(43,36,29,0.04)" }}>
          
          <div style={{ background: "#2B241D", color: "#F7F2EA", padding: "60px 48px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 40, fontWeight: 600, marginBottom: 16 }}>Get in Touch</h1>
              <p style={{ fontSize: 16, color: "rgba(247,242,234,0.7)", marginBottom: 48, lineHeight: 1.6 }}>
                Whether you are looking to buy a dream home, invest in real estate, or seek legal assistance, our experts are here to help.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(247,242,234,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <MapPin size={20} color="#F06400" />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, color: "rgba(247,242,234,0.5)", fontWeight: 600, textTransform: "uppercase", marginBottom: 4 }}>Head Office</div>
                    <div style={{ fontSize: 16, lineHeight: 1.6 }}>
                      {settings?.officeAddress || "#16-K, 11th Cross, 1st Block, Rajajinagar,\nBengaluru – 560010"}
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(247,242,234,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <Phone size={20} color="#F06400" />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, color: "rgba(247,242,234,0.5)", fontWeight: 600, textTransform: "uppercase", marginBottom: 4 }}>Phone</div>
                    <div style={{ fontSize: 16 }}>
                      {settings?.contactNumber1 || "+91 8884569830"}
                      {settings?.contactNumber2 ? ` / ${settings.contactNumber2}` : ' / +91 8884970111'}
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(247,242,234,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <Mail size={20} color="#F06400" />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, color: "rgba(247,242,234,0.5)", fontWeight: 600, textTransform: "uppercase", marginBottom: 4 }}>Email</div>
                    <div style={{ fontSize: 16 }}>{settings?.email || "rk01forassociates@gmail.com"}</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(247,242,234,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <Clock size={20} color="#F06400" />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, color: "rgba(247,242,234,0.5)", fontWeight: 600, textTransform: "uppercase", marginBottom: 4 }}>Working Hours</div>
                    <div style={{ fontSize: 16 }}>Monday – Saturday | 10:00 AM – 6:00 PM<br/>Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>

            {settings?.companyName && (
              <div style={{ borderTop: "1px solid rgba(247,242,234,0.1)", paddingTop: 24, marginTop: 40, fontSize: 13, color: "rgba(247,242,234,0.4)" }}>
                Official channel partner of leading builders in Bengaluru.
              </div>
            )}
          </div>

          <div className="p-4 md:p-12 flex flex-col justify-center bg-gray-50/50">
            <CustomerDetailsForm />
          </div>

        </div>
      </div>

      {/* Mobile App Version */}
      <div className="lg:hidden w-full bg-gray-50/50 min-h-screen pb-10">
        
        {/* Contact Info Header */}
        <div className="bg-[#2B241D] text-white px-5 pt-10 pb-8 rounded-b-[2rem] shadow-lg relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl"></div>
          
          <h1 className="font-sora text-3xl font-bold mb-3 relative z-10">Get in Touch</h1>
          <p className="text-white/70 text-[14px] leading-relaxed mb-6 relative z-10">
            Whether you are looking to buy a dream home or invest, our experts are here to help.
          </p>

          <div className="flex flex-col gap-5 relative z-10">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/5">
                <Phone size={18} className="text-[#F06400]" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[11px] text-white/50 font-bold uppercase tracking-wider mb-0.5">Phone</div>
                <div className="text-[14px] font-medium leading-snug">
                  {settings?.contactNumber1 || "+91 8884569830"}
                  {settings?.contactNumber2 ? ` / ${settings.contactNumber2}` : ' / +91 8884970111'}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/5">
                <Mail size={18} className="text-[#F06400]" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[11px] text-white/50 font-bold uppercase tracking-wider mb-0.5">Email</div>
                <div className="text-[14px] font-medium">{settings?.email || "rk01forassociates@gmail.com"}</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/5">
                <MapPin size={18} className="text-[#F06400]" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[11px] text-white/50 font-bold uppercase tracking-wider mb-0.5">Head Office</div>
                <div className="text-[14px] font-medium leading-snug">
                  {settings?.officeAddress || "#16-K, 11th Cross, Rajajinagar, Bengaluru"}
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/5">
                <Clock size={18} className="text-[#F06400]" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[11px] text-white/50 font-bold uppercase tracking-wider mb-0.5">Hours</div>
                <div className="text-[14px] font-medium leading-snug">
                  Mon – Sat | 10:00 AM – 6:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Container */}
        <div className="px-4 py-8 -mt-6 relative z-20">
          <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(43,36,29,0.06)] border border-[rgba(43,36,29,0.04)]">
            <CustomerDetailsForm />
          </div>
        </div>

      </div>
    </section>
  );
}
