"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createBuilder(data: { name: string; description: string; logo: string | null }) {
  try {
    await prisma.builder.create({
      data: {
        name: data.name,
        description: data.description,
        logo: data.logo,
      },
    });

    revalidatePath("/admin/builders");
    revalidatePath("/");
    revalidatePath("/properties");
    return { success: true };
  } catch (error) {
    console.error("Failed to create builder:", error);
    return { error: "Failed to create builder" };
  }
}

export async function updateBuilder(
  id: string,
  data: { name: string; description: string; logo: string | null }
) {
  try {
    await prisma.builder.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        logo: data.logo,
      },
    });

    revalidatePath("/admin/builders");
    revalidatePath("/");
    revalidatePath("/properties");
    return { success: true };
  } catch (error) {
    console.error("Failed to update builder:", error);
    return { error: "Failed to update builder" };
  }
}

export async function deleteBuilder(id: string) {
  try {
    await prisma.builder.delete({
      where: { id },
    });

    revalidatePath("/admin/builders");
    revalidatePath("/");
    revalidatePath("/properties");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete builder:", error);
    return { error: "Failed to delete builder (make sure no properties are attached)" };
  }
}
