"use server";

import { prisma } from "@/lib/prisma";

export async function sendOtpAction(phone: string) {
  try {
    const botUrl = process.env.WHATSAPP_BOT_URL;

    if (!botUrl) {
      console.warn("WHATSAPP_BOT_URL not set. Falling back to mock OTP sending.");
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

    // Send OTP via Open-WA Microservice
    const response = await fetch(`${botUrl}/send-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: mobile,
        otp,
      }),
    });

    const data = await response.json();
    console.log("WhatsApp Bot response:", data);

    if (response.ok && data.success) {
      return { success: true };
    } else {
      console.error("WhatsApp Bot Error:", data);
      return { error: data.error || "Failed to send OTP via WhatsApp bot" };
    }
  } catch (error) {
    console.error("OTP Send Error:", error);
    return { error: "Failed to send OTP due to server error" };
  }
}

export async function verifyOtpAction(phone: string, otp: string) {
  try {
    const botUrl = process.env.WHATSAPP_BOT_URL;

    if (!botUrl) {
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
