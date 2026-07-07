"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getAmenities() {
  return await prisma.amenity.findMany({
    orderBy: { name: "asc" }
  });
}

export async function createAmenity(name: string, iconUrl: string) {
  if (!name || name.trim() === "") return { error: "Name is required" };

  try {
    await prisma.amenity.create({
      data: {
        name: name.trim(),
        iconUrl: iconUrl ? iconUrl.trim() : null
      },
    });
    revalidatePath("/admin/amenities");
    revalidatePath("/properties");
    return { success: true };
  } catch (error: any) {
    if (error.code === 'P2002') return { error: "Amenity with this name already exists" };
    return { error: "Failed to create amenity" };
  }
}

export async function deleteAmenity(id: string) {
  try {
    await prisma.amenity.delete({
      where: { id }
    });
    revalidatePath("/admin/amenities");
    revalidatePath("/properties");
    return { success: true };
  } catch (error) {
    return { error: "Failed to delete amenity" };
  }
}
