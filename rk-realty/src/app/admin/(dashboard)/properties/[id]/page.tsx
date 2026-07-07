import { prisma } from "@/lib/prisma";
import PropertyForm from "../components/PropertyForm";
import { notFound } from "next/navigation";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function EditPropertyPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const property = await prisma.property.findUnique({
    where: { id: params.id },
    include: {
      configurations: true,
      galleryImages: true,
      floorPlans: true,
      amenities: true,
    }
  });

  if (!property) return notFound();

  const builders = await prisma.builder.findMany({ orderBy: { name: "asc" } });
  const locations = await prisma.location.findMany({ orderBy: { name: "asc" } });
  const types = await prisma.propertyType.findMany({ orderBy: { name: "asc" } });
  const amenitiesList = await prisma.amenity.findMany({ orderBy: { name: "asc" } });

  const initialData = {
    name: property.name,
    slug: property.slug,
    builderId: property.builderId,
    locationId: property.locationId,
    propertyTypeId: property.propertyTypeId,
    status: property.status,
    isFeatured: property.isFeatured,
    startingPrice: property.startingPrice,
    possessionDate: property.possessionDate,
    reraNumber: property.reraNumber,
    description: property.description,
    coverImage: property.coverImage,
    brochurePdf: property.brochurePdf,
    seoTitle: property.seoTitle,
    seoDescription: property.seoDescription,
    
    // Format relations for the form state
    amenityIds: property.amenities.map(a => a.amenityId),
    galleryImages: property.galleryImages.map(img => img.url),
    floorPlans: property.floorPlans.map(fp => fp.url),
    configurations: property.configurations.map(conf => ({
      type: conf.type,
      area: conf.area,
      price: conf.price || ""
    }))
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/properties" 
          className="p-2 hover:bg-background border border-border rounded-lg text-accent hover:text-foreground transition-colors"
          title="Back to Properties"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Edit Property</h2>
          <p className="text-accent">Update {property.name}</p>
        </div>
      </div>

      <PropertyForm 
        builders={builders}
        locations={locations}
        propertyTypes={types}
        amenities={amenitiesList}
        initialData={initialData}
        propertyId={property.id}
      />
    </div>
  );
}
