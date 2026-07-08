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
    <section style={{ maxWidth: 1280, margin: "60px auto 100px", padding: "0 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, background: "#FFFFFF", borderRadius: 32, overflow: "hidden", border: "1px solid rgba(43,36,29,0.08)", boxShadow: "0 20px 40px rgba(43,36,29,0.04)" }}>
        
        {/* Left Panel: Contact Info */}
        <div style={{ background: "#2B241D", color: "#F7F2EA", padding: "60px 48px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 40, fontWeight: 600, marginBottom: 16 }}>Get in Touch</h1>
            <p style={{ fontSize: 16, color: "rgba(247,242,234,0.7)", marginBottom: 48, lineHeight: 1.6 }}>
              Whether you are looking to buy a dream home, invest in real estate, or seek legal assistance, our experts are here to help.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {/* Address */}
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(247,242,234,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <MapPin size={20} color="#F06400" />
                </div>
                <div>
                  <div style={{ fontSize: 13, color: "rgba(247,242,234,0.5)", fontWeight: 600, textTransform: "uppercase", marginBottom: 4 }}>Head Office</div>
                  <div style={{ fontSize: 16, lineHeight: 1.6 }}>
                    {settings?.officeAddress || "Level 14, UB City, Vittal Mallya Road,\nBengaluru, Karnataka 560001"}
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(247,242,234,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <Phone size={20} color="#F06400" />
                </div>
                <div>
                  <div style={{ fontSize: 13, color: "rgba(247,242,234,0.5)", fontWeight: 600, textTransform: "uppercase", marginBottom: 4 }}>Phone</div>
                  <div style={{ fontSize: 16 }}>
                    {settings?.contactNumber1 || "+91 98765 43210"}
                    {settings?.contactNumber2 && ` / ${settings.contactNumber2}`}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(247,242,234,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <Mail size={20} color="#F06400" />
                </div>
                <div>
                  <div style={{ fontSize: 13, color: "rgba(247,242,234,0.5)", fontWeight: 600, textTransform: "uppercase", marginBottom: 4 }}>Email</div>
                  <div style={{ fontSize: 16 }}>{settings?.email || "hello@rkassociates.in"}</div>
                </div>
              </div>

              {/* Working Hours */}
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(247,242,234,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <Clock size={20} color="#F06400" />
                </div>
                <div>
                  <div style={{ fontSize: 13, color: "rgba(247,242,234,0.5)", fontWeight: 600, textTransform: "uppercase", marginBottom: 4 }}>Working Hours</div>
                  <div style={{ fontSize: 16 }}>Mon - Sat: 9:00 AM - 7:00 PM<br/>Sun: Closed</div>
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

        {/* Right Panel: Form / Success Card */}
        <div className="p-4 md:p-12 flex flex-col justify-center bg-gray-50/50">
          <CustomerDetailsForm />
        </div>

      </div>
    </section>
  );
}
