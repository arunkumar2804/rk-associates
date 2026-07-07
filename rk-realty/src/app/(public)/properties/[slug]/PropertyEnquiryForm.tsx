"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { createPublicEnquiry } from "@/app/actions/enquiry";

interface PropertyEnquiryFormProps {
  propertyName: string;
}

export default function PropertyEnquiryForm({ propertyName }: PropertyEnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: `Hi, I am interested in ${propertyName}. Please share more details.`,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validate name and phone
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
      setError("Please enter a valid 10-digit mobile number.");
      setLoading(false);
      return;
    }

    try {
      const result = await createPublicEnquiry({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || undefined,
        interestedProperty: propertyName,
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
          message: `Hi, I am interested in ${propertyName}. Please share more details.`,
        });
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "#FFFFFF", borderRadius: 24, padding: 32, border: "1px solid rgba(43,36,29,0.08)", boxShadow: "0 16px 32px rgba(43,36,29,0.04)" }}>
      {success ? (
        <div style={{ textAlign: "center", padding: "16px 0" }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: "50%", background: "rgba(240,100,0,0.1)", marginBottom: 16 }}>
            <CheckCircle size={36} color="#F06400" />
          </div>
          <h4 style={{ fontFamily: '"Sora", sans-serif', fontSize: 20, fontWeight: 700, color: "#2B241D", marginBottom: 8 }}>Enquiry Sent!</h4>
          <p style={{ fontSize: 13.5, color: "#6B5F52", lineHeight: 1.6, marginBottom: 20 }}>
            Thank you. An expert will reach out to you shortly regarding <strong>{propertyName}</strong>.
          </p>
          <button 
            onClick={() => setSuccess(false)}
            className="btn-hover"
            style={{ background: "#2B241D", color: "#F7F2EA", border: "none", padding: "10px 20px", borderRadius: 100, fontSize: 13, fontWeight: 600, cursor: "pointer" }}
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <>
          <h3 style={{ fontFamily: '"Sora", sans-serif', fontSize: 20, fontWeight: 600, color: "#2B241D", marginBottom: 8 }}>Request Details</h3>
          <p style={{ fontSize: 13.5, color: "#6B5F52", marginBottom: 24, lineHeight: 1.5 }}>
            Fill out the form below to receive pricing, floor plans, and developer offers.
          </p>

          {error && (
            <div style={{ background: "#FDF2F2", border: "1px solid #FDE8E8", color: "#E02424", padding: "10px 14px", borderRadius: 8, fontSize: 13, marginBottom: 20 }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#4A4038" }}>Name *</label>
              <input 
                type="text" 
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ padding: "12px 14px", borderRadius: 8, border: "1px solid rgba(43,36,29,0.1)", background: "#F7F2EA", fontSize: 14, outline: "none", color: "#2B241D" }}
                required
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#4A4038" }}>Phone Number *</label>
              <input 
                type="tel" 
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ padding: "12px 14px", borderRadius: 8, border: "1px solid rgba(43,36,29,0.1)", background: "#F7F2EA", fontSize: 14, outline: "none", color: "#2B241D" }}
                required
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#4A4038" }}>Email</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ padding: "12px 14px", borderRadius: 8, border: "1px solid rgba(43,36,29,0.1)", background: "#F7F2EA", fontSize: 14, outline: "none", color: "#2B241D" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#4A4038" }}>Message</label>
              <textarea 
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ padding: "12px 14px", borderRadius: 8, border: "1px solid rgba(43,36,29,0.1)", background: "#F7F2EA", fontSize: 14, outline: "none", resize: "none", color: "#2B241D" }}
              />
            </div>

            <button 
              type="submit" 
              className="btn-hover"
              disabled={loading}
              style={{ background: "#F06400", color: "#F7F2EA", border: "none", padding: "14px", borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", marginTop: 8, opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Submitting..." : "Send Enquiry"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
