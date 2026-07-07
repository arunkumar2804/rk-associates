"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { createPublicEnquiry } from "@/app/actions/enquiry";

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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Buying a Property",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validation
    if (!formData.name.trim()) {
      setError("Please enter your name.");
      setLoading(false);
      return;
    }
    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      setLoading(false);
      return;
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      setLoading(false);
      return;
    }
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        setError("Please enter a valid email address.");
        setLoading(false);
        return;
      }
    }

    try {
      const result = await createPublicEnquiry({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || undefined,
        interestedProperty: formData.interest,
        message: formData.message.trim() || undefined,
      });

      if (result.error) {
        setError(result.error);
      } else {
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          interest: "Buying a Property",
          message: "",
        });
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
        <div style={{ padding: "60px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {success ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 80, height: 80, borderRadius: "50%", background: "rgba(240,100,0,0.1)", marginBottom: 24, animation: "scaleUp 0.4s ease-out" }}>
                <CheckCircle size={48} color="#F06400" />
              </div>
              <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 28, fontWeight: 700, color: "#2B241D", marginBottom: 12 }}>Enquiry Submitted!</h2>
              <p style={{ fontSize: 15, color: "#6B5F52", lineHeight: 1.6, maxWidth: 360, margin: "0 auto 32px" }}>
                Thank you for reaching out. One of our property consultants will contact you shortly to assist with your search.
              </p>
              <button 
                onClick={() => setSuccess(false)}
                className="btn-hover"
                style={{ background: "#2B241D", color: "#F7F2EA", border: "none", padding: "12px 28px", borderRadius: 100, fontSize: 14.5, fontWeight: 700, cursor: "pointer" }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: "#2B241D", marginBottom: 32 }}>Send us a message</h2>
              
              {error && (
                <div style={{ background: "#FDF2F2", border: "1px solid #FDE8E8", color: "#E02424", padding: "12px 16px", borderRadius: 12, fontSize: 14, marginBottom: 24 }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {/* Full Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "#4A4038" }}>Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ padding: "14px 16px", borderRadius: 12, border: "1px solid rgba(43,36,29,0.1)", background: "#F7F2EA", fontSize: 15, outline: "none", color: "#2B241D" }} 
                    required
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                  {/* Phone Number */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#4A4038" }}>Mobile Number *</label>
                    <input 
                      type="tel" 
                      placeholder="e.g. 9876543210" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ padding: "14px 16px", borderRadius: 12, border: "1px solid rgba(43,36,29,0.1)", background: "#F7F2EA", fontSize: 15, outline: "none", color: "#2B241D" }} 
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#4A4038" }}>Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ padding: "14px 16px", borderRadius: 12, border: "1px solid rgba(43,36,29,0.1)", background: "#F7F2EA", fontSize: 15, outline: "none", color: "#2B241D" }} 
                    />
                  </div>
                </div>

                {/* Dropdown: Purpose */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "#4A4038" }}>Interested In</label>
                  <select 
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    style={{ padding: "14px 16px", borderRadius: 12, border: "1px solid rgba(43,36,29,0.1)", background: "#F7F2EA", fontSize: 15, outline: "none", color: "#2B241D", cursor: "pointer" }}
                  >
                    <option>Buying a Property</option>
                    <option>Renting a Property</option>
                    <option>Investment Advisory</option>
                    <option>Legal Assistance</option>
                  </select>
                </div>

                {/* Message */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "#4A4038" }}>Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Describe your requirements (e.g. 3 BHK in East Bengaluru)" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ padding: "14px 16px", borderRadius: 12, border: "1px solid rgba(43,36,29,0.1)", background: "#F7F2EA", fontSize: 15, outline: "none", resize: "none", color: "#2B241D" }}
                  ></textarea>
                </div>

                <button 
                  className="btn-hover" 
                  type="submit" 
                  disabled={loading}
                  style={{ background: "#F06400", color: "#F7F2EA", border: "none", padding: "16px", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", marginTop: 8, opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? "Submitting Enquiry..." : "Submit Enquiry"}
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
