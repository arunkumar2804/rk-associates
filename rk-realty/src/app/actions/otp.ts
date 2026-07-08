"use server";

export async function sendOtpAction(phone: string) {
  try {
    const authKey = process.env.MSG91_AUTH_KEY;
    const templateId = process.env.MSG91_TEMPLATE_ID;

    if (!authKey || !templateId) {
      console.warn("MSG91_AUTH_KEY or MSG91_TEMPLATE_ID is not configured in .env. Using mock OTP for local development.");
      return { success: true, isMock: true };
    }

    // Ensure country code is present (assuming India 91 if 10 digits)
    const mobile = phone.length === 10 ? `91${phone}` : phone;

    const url = `https://control.msg91.com/api/v5/otp?template_id=${templateId}&mobile=${mobile}`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "authkey": authKey,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("MSG91 Send OTP response:", data);

    if (data.type === "success" || data.type === "success ") {
      return { success: true };
    } else {
      return { error: data.message || "Failed to send OTP" };
    }
  } catch (error) {
    console.error("OTP Send Error:", error);
    return { error: "Failed to send OTP due to server error" };
  }
}

export async function verifyOtpAction(phone: string, otp: string) {
  try {
    const authKey = process.env.MSG91_AUTH_KEY;
    const templateId = process.env.MSG91_TEMPLATE_ID;

    if (!authKey || !templateId) {
      // Mock validation for local development without credentials
      if (otp === "1234") {
        return { success: true };
      }
      return { error: "Invalid Mock OTP (Hint: use 1234)" };
    }

    // Ensure country code is present
    const mobile = phone.length === 10 ? `91${phone}` : phone;

    const url = `https://control.msg91.com/api/v5/otp/verify?otp=${otp}&mobile=${mobile}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "authkey": authKey,
      },
    });

    const data = await response.json();
    console.log("MSG91 Verify OTP response:", data);

    if (data.type === "success" || data.type === "success ") {
      return { success: true };
    } else {
      return { error: data.message || "Invalid OTP entered" };
    }
  } catch (error) {
    console.error("OTP Verify Error:", error);
    return { error: "Failed to verify OTP due to server error" };
  }
}
