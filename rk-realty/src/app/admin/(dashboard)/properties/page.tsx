import { prisma } from "@/lib/prisma";
import PropertyClient from "./PropertyClient";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function PropertiesPage() {
  const properties = await prisma.property.findMany({
    include: {
      builder: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Properties</h2>
          <p className="text-accent">Manage all real estate properties</p>
        </div>
        <Link
          href="/admin/properties/new"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-bold"
        >
          <Plus size={20} />
          Add Property
        </Link>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm p-6">
        <PropertyClient initialProperties={properties} />
      </div>
    </div>
  );
}
