import { prisma } from "@/lib/prisma";
import PropertyForm from "../components/PropertyForm";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function NewPropertyPage() {
  const builders = await prisma.builder.findMany({ orderBy: { name: "asc" } });

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
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Add New Property</h2>
          <p className="text-accent">Create a new real estate listing</p>
        </div>
      </div>

      <PropertyForm 
        builders={builders}
      />
    </div>
  );
}
