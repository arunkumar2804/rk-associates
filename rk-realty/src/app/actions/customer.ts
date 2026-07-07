"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createCustomer(data: { name: string; phone: string; email?: string; interestedProperties?: string; notes?: string }) {
  try {
    await prisma.customer.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        interestedProperties: data.interestedProperties || null,
        notes: data.notes || null,
      },
    });

    revalidatePath("/admin/customers");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to create customer:", error);
    if (error.code === 'P2002') return { error: "A customer with this phone number already exists" };
    return { error: "Failed to create customer" };
  }
}

export async function updateCustomer(id: string, data: { name: string; phone: string; email?: string; interestedProperties?: string; notes?: string }) {
  try {
    await prisma.customer.update({
      where: { id },
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        interestedProperties: data.interestedProperties || null,
        notes: data.notes || null,
      },
    });

    revalidatePath("/admin/customers");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to update customer:", error);
    if (error.code === 'P2002') return { error: "A customer with this phone number already exists" };
    return { error: "Failed to update customer" };
  }
}

export async function deleteCustomer(id: string) {
  try {
    await prisma.customer.delete({
      where: { id },
    });

    revalidatePath("/admin/customers");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete customer:", error);
    return { error: "Failed to delete customer" };
  }
}
