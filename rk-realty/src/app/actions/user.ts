"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// Middleware helper to verify full control
async function verifyFullControl() {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "DEVELOPER" && session.user.isFullControl !== true) {
    throw new Error("Permission Denied: Full Control required.");
  }
}

export async function getUsers() {
  await verifyFullControl();
  return await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isFullControl: true,
      createdAt: true,
    }
  });
}

export async function createUser(data: {
  name: string;
  email: string;
  password: string;
  isFullControl: boolean;
}) {
  try {
    await verifyFullControl();

    if (!data.name || !data.email || !data.password) {
      return { error: "All fields are required" };
    }

    const existing = await prisma.user.findUnique({
      where: { email: data.email }
    });

    if (existing) {
      return { error: "A user with this email already exists" };
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        isFullControl: data.isFullControl,
        role: "ADMIN", // Admin by default
      }
    });

    revalidatePath("/admin/settings");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to create user:", error);
    return { error: error.message || "Failed to create user" };
  }
}

export async function updateUser(
  id: string,
  data: {
    name: string;
    email: string;
    password?: string;
    isFullControl: boolean;
  }
) {
  try {
    await verifyFullControl();

    const updateData: any = {
      name: data.name,
      email: data.email,
      isFullControl: data.isFullControl,
    };

    if (data.password && data.password.trim() !== "") {
      updateData.password = await bcrypt.hash(data.password, 10);
    }

    await prisma.user.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/settings");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to update user:", error);
    return { error: error.message || "Failed to update user" };
  }
}

export async function deleteUser(id: string) {
  try {
    await verifyFullControl();

    // Prevent deleting self
    const session = await getServerSession(authOptions);
    if (session?.user?.id === id) {
      return { error: "You cannot delete your own account" };
    }

    await prisma.user.delete({
      where: { id },
    });

    revalidatePath("/admin/settings");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete user:", error);
    return { error: error.message || "Failed to delete user" };
  }
}
