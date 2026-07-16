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
    <section className="w-full bg-[#F7F2EA] min-h-screen">
      {/* Desktop Version */}
      <div className="hidden lg:flex" style={{ maxWidth: 1200, margin: "60px auto 100px", padding: "0 32px", gap: 60 }}>
        
        {/* Form Column - Primary Focus */}
        <div className="flex-1 bg-white rounded-[32px] p-10 shadow-[0_20px_40px_rgba(43,36,29,0.04)] border border-[rgba(43,36,29,0.08)]">
          <h1 className="font-sora text-[40px] font-bold text-[#2B241D] mb-4">Get in Touch</h1>
          <p className="text-[16px] text-[#6B5F52] mb-10 leading-relaxed max-w-md">
            Whether you are looking to buy a dream home, invest, or seek assistance, our experts are here to help.
          </p>
          <CustomerDetailsForm />
        </div>
        
        {/* Contact Info Column */}
        <div className="w-[400px] flex flex-col justify-center gap-8">
          <div className="bg-white rounded-[32px] p-8 shadow-[0_20px_40px_rgba(43,36,29,0.04)] border border-[rgba(43,36,29,0.08)] flex flex-col gap-8">
            <h3 className="font-sora text-[22px] font-bold text-[#2B241D]">Contact Information</h3>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-[#F06400]" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[12px] text-[#8A7B5C] font-bold uppercase tracking-wider mb-1">Call Us</div>
                <div className="text-[16px] font-semibold text-[#2B241D]">
                  {settings?.contactNumber1 || "+91 8884569830"}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-[#F06400]" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[12px] text-[#8A7B5C] font-bold uppercase tracking-wider mb-1">Email</div>
                <div className="text-[16px] font-semibold text-[#2B241D]">{settings?.email || "rk01forassociates@gmail.com"}</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#F06400]" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[12px] text-[#8A7B5C] font-bold uppercase tracking-wider mb-1">Head Office</div>
                <div className="text-[15px] leading-relaxed text-[#4A4038]">
                  {settings?.officeAddress || "#16-K, 11th Cross, 1st Block, Rajajinagar, Bengaluru"}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-[#F06400]" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[12px] text-[#8A7B5C] font-bold uppercase tracking-wider mb-1">Working Hours</div>
                <div className="text-[15px] leading-relaxed text-[#4A4038]">
                  Mon – Sat | 10:00 AM – 6:00 PM<br/>Sunday: Closed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile App Version */}
      <div className="lg:hidden w-full flex flex-col px-4 py-8 gap-6 pb-20">
        
        {/* Header */}
        <div className="text-center pt-4 mb-2">
          <h1 className="font-sora text-3xl font-bold text-[#2B241D] mb-2">Get in Touch</h1>
          <p className="text-[#6B5F52] text-[14px]">Our property experts are ready to assist you.</p>
        </div>

        {/* Form Container - Primary Focus */}
        <div className="bg-white rounded-[24px] p-5 shadow-[0_8px_30px_rgba(43,36,29,0.06)] border border-[rgba(43,36,29,0.04)]">
          <CustomerDetailsForm />
        </div>

        {/* Contact Info Container */}
        <div className="bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgba(43,36,29,0.06)] border border-[rgba(43,36,29,0.04)] flex flex-col gap-6 mt-4">
          <h3 className="font-sora text-[20px] font-bold text-[#2B241D]">Contact Info</h3>
          
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
              <Phone size={20} className="text-[#F06400]" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-[11px] text-[#8A7B5C] font-bold uppercase tracking-wider mb-0.5">Call Us</div>
              <div className="text-[15px] font-semibold text-[#2B241D]">
                {settings?.contactNumber1 || "+91 8884569830"}
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
              <Mail size={20} className="text-[#F06400]" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-[11px] text-[#8A7B5C] font-bold uppercase tracking-wider mb-0.5">Email</div>
              <div className="text-[15px] font-semibold text-[#2B241D]">{settings?.email || "rk01forassociates@gmail.com"}</div>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-[#F06400]" />
            </div>
            <div className="flex flex-col justify-center pt-1">
              <div className="text-[11px] text-[#8A7B5C] font-bold uppercase tracking-wider mb-0.5">Office</div>
              <div className="text-[14px] leading-snug text-[#4A4038] pr-2">
                {settings?.officeAddress || "#16-K, 11th Cross, 1st Block, Rajajinagar, Bengaluru"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
