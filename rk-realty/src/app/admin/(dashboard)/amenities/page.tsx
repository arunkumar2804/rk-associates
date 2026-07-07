import { getAmenities } from "./actions";
import AmenityClient from "./AmenityClient";

export default async function AmenitiesPage() {
  const amenities = await getAmenities();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Amenities</h2>
        <p className="text-accent">Manage property amenities and their icons</p>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm p-6">
        <AmenityClient initialAmenities={amenities} />
      </div>
    </div>
  );
}
