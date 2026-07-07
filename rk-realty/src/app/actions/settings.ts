"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { WebsiteSetting } from "@prisma/client";

export async function updateWebsiteSettings(data: Omit<WebsiteSetting, "id" | "updatedAt">) {
  try {
    const existing = await prisma.websiteSetting.findFirst();

    if (existing) {
      await prisma.websiteSetting.update({
        where: { id: existing.id },
        data,
      });
    } else {
      await prisma.websiteSetting.create({
        data,
      });
    }

    revalidatePath("/admin/settings");
    revalidatePath("/"); // Revalidate home page
    revalidatePath("/properties"); // Revalidate properties page
    revalidatePath("/contact"); // Revalidate contact page
    return { success: true };
  } catch (error) {
    console.error("Failed to update website settings:", error);
    return { error: "Failed to update website settings" };
  }
}
