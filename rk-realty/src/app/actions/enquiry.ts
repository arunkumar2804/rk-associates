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
}) {
  try {
    if (!data.name || !data.phone) {
      return { error: "Name and Phone number are required." };
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
