"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getLocations() {
  return prisma.location.findMany({
    orderBy: { name: "asc" },
  });
}

export async function createLocation(formData: FormData) {
  const name = formData.get("name") as string;
  if (!name || name.trim() === "") return { error: "Name is required" };

  try {
    await prisma.location.create({
      data: { name: name.trim() },
    });
    revalidatePath("/admin/locations");
    return { success: true };
  } catch (error) {
    return { error: "Failed to create location or it already exists." };
  }
}

export async function deleteLocation(id: string) {
  try {
    await prisma.location.delete({
      where: { id },
    });
    revalidatePath("/admin/locations");
    return { success: true };
  } catch (error) {
    return { error: "Failed to delete location. It may be in use." };
  }
}
