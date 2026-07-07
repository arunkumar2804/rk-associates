"use client";

import { useState, useTransition } from "react";
import { Edit, Trash2, ExternalLink } from "lucide-react";
import { deleteProperty } from "@/app/actions/property";
import Link from "next/link";
import { Property, Builder, Location, PropertyType } from "@prisma/client";

type PropertyWithRelations = Property & {
  builder: Builder;
  location: Location;
  propertyType: PropertyType;
};

export default function PropertyClient({ initialProperties }: { initialProperties: PropertyWithRelations[] }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this property? This will also delete all associated images, configurations, and floor plans.")) return;

    setError(null);
    startTransition(async () => {
      const result = await deleteProperty(id);
      if (result.error) {
        setError(result.error);
      }
    });
  };

  return (
    <div className="space-y-4">
      {error && <p className="text-red-500 text-sm bg-red-50 p-3 rounded border border-red-100">{error}</p>}

      <div className="border border-border rounded-xl overflow-hidden">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-background">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-foreground uppercase tracking-wider">
                Property
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-foreground uppercase tracking-wider">
                Builder / Location
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-foreground uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-right text-xs font-bold text-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            {initialProperties.map((property) => (
              <tr key={property.id} className="hover:bg-background transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {property.coverImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={property.coverImage} alt={property.name} className="h-10 w-16 object-cover rounded shadow-sm mr-3" />
                    ) : (
                      <div className="h-10 w-16 bg-background rounded border border-border flex items-center justify-center text-accent text-xs mr-3">No Image</div>
                    )}
                    <div>
                      <div className="text-sm font-bold text-foreground flex items-center gap-2">
                        {property.name}
                        {property.isFeatured && <span className="px-2 py-0.5 rounded text-[10px] bg-amber-100 text-amber-800 font-bold tracking-wider">FEATURED</span>}
                      </div>
                      <div className="text-xs text-accent">Starting: {property.startingPrice}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-foreground">{property.builder.name}</div>
                  <div className="text-xs text-accent">{property.location.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                  {property.propertyType.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    property.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 
                    property.status === 'UPCOMING' ? 'bg-blue-100 text-blue-800' : 
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {property.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/properties/${property.slug}`}
                      target="_blank"
                      className="text-accent hover:text-foreground transition-colors p-2"
                      title="View on website"
                    >
                      <ExternalLink size={18} />
                    </Link>
                    <Link
                      href={`/admin/properties/${property.id}`}
                      className="text-blue-500 hover:text-blue-700 transition-colors p-2 rounded hover:bg-blue-50"
                    >
                      <Edit size={18} />
                    </Link>
                    <button
                      onClick={() => handleDelete(property.id)}
                      disabled={isPending}
                      className="text-red-500 hover:text-red-700 transition-colors disabled:opacity-50 p-2 rounded hover:bg-red-50"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {initialProperties.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-accent text-sm">
                  No properties added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
