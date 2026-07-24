"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

async function verifyFullControl() {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session.user.role !== "DEVELOPER" && session.user.isFullControl !== true)) {
    throw new Error("Permission Denied: Full Control required.");
  }
}

export type PropertyData = {
  name: string;
  slug: string;
  builderId?: string;
  locationName: string;
  propertyTypeName: string;
  status: string;
  isFeatured: boolean;
  startingPrice?: string;
  possessionDate?: Date | null;
  reraNumber?: string | null;
  description?: string | null;
  coverImage?: string | null;
  brochurePdf?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  
  // Relations
  amenities: string;
  galleryImages: string[];
  floorPlans: string[];
  configurations: { type: string; area: string; price: string | null }[];
};

export async function createProperty(data: PropertyData) {
  try {
    await verifyFullControl();
    const property = await prisma.property.create({
      data: {
        name: data.name,
        slug: data.slug,
        builderId: data.builderId || undefined,
        locationName: data.locationName,
        propertyTypeName: data.propertyTypeName,
        status: data.status,
        isFeatured: data.isFeatured,
        startingPrice: data.startingPrice,
        possessionDate: data.possessionDate,
        reraNumber: data.reraNumber,
        description: data.description,
        coverImage: data.coverImage,
        brochurePdf: data.brochurePdf,
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        
        // Flat fields
        amenities: data.amenities,
        galleryImages: {
          create: data.galleryImages.map(url => ({ url }))
        },
        floorPlans: {
          create: data.floorPlans.map(url => ({ url }))
        },
        configurations: {
          create: data.configurations.map(conf => ({
            type: conf.type,
            area: conf.area,
            price: conf.price
          }))
        }
      }
    });

    revalidatePath("/admin/properties");
    revalidatePath("/");
    revalidatePath("/properties");
    return { success: true, id: property.id };
  } catch (error: any) {
    console.error("Failed to create property:", error);
    if (error.code === 'P2002' && error.meta?.target?.includes('slug')) {
      return { error: "A property with this URL slug already exists. Please use a unique name." };
    }
    return { error: "Failed to create property" };
  }
}

export async function updateProperty(id: string, data: PropertyData) {
  try {
    await verifyFullControl();
    // For updates with many-to-many and one-to-many relations, 
    // it's often safest to delete the old relations and recreate them
    await prisma.$transaction([
      prisma.propertyImage.deleteMany({ where: { propertyId: id } }),
      prisma.propertyFloorPlan.deleteMany({ where: { propertyId: id } }),
      prisma.configuration.deleteMany({ where: { propertyId: id } }),
      
      prisma.property.update({
        where: { id },
        data: {
          name: data.name,
          slug: data.slug,
          builderId: data.builderId || undefined,
          locationName: data.locationName,
          propertyTypeName: data.propertyTypeName,
          status: data.status,
          isFeatured: data.isFeatured,
          startingPrice: data.startingPrice,
          possessionDate: data.possessionDate,
          reraNumber: data.reraNumber,
          description: data.description,
          coverImage: data.coverImage,
          brochurePdf: data.brochurePdf,
          seoTitle: data.seoTitle,
          seoDescription: data.seoDescription,
          
          amenities: data.amenities,
          galleryImages: {
            create: data.galleryImages.map(url => ({ url }))
          },
          floorPlans: {
            create: data.floorPlans.map(url => ({ url }))
          },
          configurations: {
            create: data.configurations.map(conf => ({
              type: conf.type,
              area: conf.area,
              price: conf.price
            }))
          }
        }
      })
    ]);

    revalidatePath("/admin/properties");
    revalidatePath("/");
    revalidatePath("/properties");
    revalidatePath(`/properties/${data.slug}`);
    return { success: true };
  } catch (error: any) {
    console.error("Failed to update property:", error);
    if (error.code === 'P2002' && error.meta?.target?.includes('slug')) {
      return { error: "A property with this URL slug already exists. Please use a unique name." };
    }
    return { error: error.message || "Failed to update property" };
  }
}

export async function deleteProperty(id: string) {
  try {
    await verifyFullControl();
    const property = await prisma.property.findUnique({
      where: { id },
      select: { slug: true }
    });

    await prisma.property.delete({
      where: { id },
    });

    revalidatePath("/admin/properties");
    revalidatePath("/");
    revalidatePath("/properties");
    if (property?.slug) {
      revalidatePath(`/properties/${property.slug}`);
    }
    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete property:", error);
    return { error: error.message || "Failed to delete property" };
  }
}
