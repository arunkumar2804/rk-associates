import { getLocations } from "./actions";
import LocationClient from "./LocationClient";

export default async function LocationsPage() {
  const locations = await getLocations();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Locations</h2>
        <p className="text-accent">Manage property locations</p>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm p-6">
        <LocationClient initialLocations={locations} />
      </div>
    </div>
  );
}
