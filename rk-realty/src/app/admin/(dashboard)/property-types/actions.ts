"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getPropertyTypes() {
  return prisma.propertyType.findMany({
    orderBy: { name: "asc" },
  });
}

export async function createPropertyType(formData: FormData) {
  const name = formData.get("name") as string;
  if (!name || name.trim() === "") return { error: "Name is required" };

  try {
    await prisma.propertyType.create({
      data: { name: name.trim() },
    });
    revalidatePath("/admin/property-types");
    return { success: true };
  } catch (error) {
    return { error: "Failed to create property type or it already exists." };
  }
}

export async function deletePropertyType(id: string) {
  try {
    await prisma.propertyType.delete({
      where: { id },
    });
    revalidatePath("/admin/property-types");
    return { success: true };
  } catch (error) {
    return { error: "Failed to delete property type. It may be in use." };
  }
}
