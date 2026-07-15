"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateEnquiryStatus(id: string, status: string) {
  try {
    await prisma.enquiry.update({
      where: { id },
      data: { status },
    });

    revalidatePath("/admin/enquiries");
    return { success: true };
  } catch (error) {
    console.error("Failed to update enquiry:", error);
    return { error: "Failed to update enquiry status" };
  }
}

export async function deleteEnquiry(id: string) {
  try {
    await prisma.enquiry.delete({
      where: { id },
    });

    revalidatePath("/admin/enquiries");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete enquiry:", error);
    return { error: "Failed to delete enquiry" };
  }
}

export async function createPublicEnquiry(data: {
  name: string;
  phone: string;
  email?: string;
  interestedProperty?: string;
  message?: string;
  msg91Token?: string;
}) {
  try {
    if (!data.name || !data.phone) {
      return { error: "Name and Phone number are required." };
    }

    if (!data.msg91Token) {
      return { error: "Security token missing. Please verify your OTP again." };
    }

    // Verify MSG91 Access Token
    const authKey = process.env.MSG91_AUTH_KEY;
    if (authKey) {
      try {
        const verifyRes = await fetch("https://control.msg91.com/api/v5/widget/verifyAccessToken", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            authkey: authKey,
            "access-token": data.msg91Token,
          }),
        });

        const verifyData = await verifyRes.json();
        
        // MSG91 returns type: 'error' if token is invalid
        if (verifyData.type === "error" || verifyData.hasError) {
          console.error("MSG91 Server Verification Failed:", verifyData);
          return { error: "Invalid security token. Please request a new OTP." };
        }
      } catch (tokenErr) {
        console.error("Failed to reach MSG91 verification server:", tokenErr);
        return { error: "Unable to verify security token. Please try again later." };
      }
    } else {
      console.warn("MSG91_AUTH_KEY is not set! Bypassing token verification. (NOT SECURE)");
    }

    const enquiry = await prisma.enquiry.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        interestedProperty: data.interestedProperty || null,
        message: data.message || null,
        status: "NEW",
      },
    });

    revalidatePath("/admin/enquiries");
    
    // Auto-create customer profile if it doesn't exist
    try {
      const existingCustomer = await prisma.customer.findUnique({
        where: { phone: data.phone },
      });
      if (!existingCustomer) {
        await prisma.customer.create({
          data: {
            name: data.name,
            phone: data.phone,
            email: data.email || null,
            interestedProperties: data.interestedProperty || null,
            notes: `Enquiry received on ${new Date().toLocaleDateString()}: "${data.message || ''}"`,
          },
        });
        revalidatePath("/admin/customers");
      }
    } catch (customerErr) {
      console.error("Failed to auto-create customer:", customerErr);
    }

    return { success: true, enquiryId: enquiry.id };
  } catch (error) {
    console.error("Failed to save enquiry:", error);
    return { error: "Something went wrong. Please try again." };
  }
}
