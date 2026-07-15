"use server";

import { prisma } from "@/lib/prisma";

export async function sendOtpAction(phone: string) {
  try {
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;

    if (!phoneNumberId || !accessToken) {
      console.warn("WhatsApp credentials not set. Falling back to mock OTP sending.");
      return { success: true, isMock: true };
    }

    // Ensure country code is present (assuming India 91 if 10 digits)
    const mobile = phone.length === 10 ? `91${phone}` : phone;

    // Generate a 4 digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    // Store in database
    await prisma.otpVerification.upsert({
      where: { phone: mobile },
      update: {
        otp,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes expiry
      },
      create: {
        phone: mobile,
        otp,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000),
      },
    });

    // Send OTP via WhatsApp Cloud API
    const url = `https://graph.facebook.com/v19.0/${phoneNumberId}/messages`;
    
    // Test accounts can usually send templates without 24-hour window restrictions
    // Here we'll use a template if there's one configured, else fallback to text
    // Note: To use text messages with test accounts, the destination number must have messaged the test number first.
    // For now we will send a simple text message. If it fails due to the 24h window, you'll need to create a template.
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: mobile,
        type: "text",
        text: {
          preview_url: false,
          body: `Your RK Realty verification code is: ${otp}. It is valid for 5 minutes. Do not share this code with anyone.`,
        }
      }),
    });

    const data = await response.json();
    console.log("WhatsApp Send OTP response:", data);

    if (response.ok) {
      return { success: true };
    } else {
      console.error("WhatsApp API Error:", data);
      return { error: data.error?.message || "Failed to send OTP via WhatsApp" };
    }
  } catch (error) {
    console.error("OTP Send Error:", error);
    return { error: "Failed to send OTP due to server error" };
  }
}

export async function verifyOtpAction(phone: string, otp: string) {
  try {
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;

    if (!phoneNumberId || !accessToken) {
      // Mock validation for local development without credentials
      if (otp === "1234") {
        return { success: true };
      }
      return { error: "Invalid Mock OTP (Hint: use 1234)" };
    }

    // Ensure country code is present
    const mobile = phone.length === 10 ? `91${phone}` : phone;

    const record = await prisma.otpVerification.findUnique({
      where: { phone: mobile },
    });

    if (!record) {
      return { error: "OTP not found. Please request a new one." };
    }

    if (record.expiresAt < new Date()) {
      return { error: "OTP has expired. Please request a new one." };
    }

    if (record.otp === otp) {
      // OTP is valid. Delete it to prevent reuse.
      await prisma.otpVerification.delete({
        where: { id: record.id },
      });
      return { success: true };
    } else {
      return { error: "Invalid OTP entered" };
    }
  } catch (error) {
    console.error("OTP Verify Error:", error);
    return { error: "Failed to verify OTP due to server error" };
  }
}
