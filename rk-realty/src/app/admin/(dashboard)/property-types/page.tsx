import { getPropertyTypes } from "./actions";
import PropertyTypeClient from "./PropertyTypeClient";

export default async function PropertyTypesPage() {
  const propertyTypes = await getPropertyTypes();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Property Types</h2>
        <p className="text-accent">Manage available property types (e.g. Villa, Apartment)</p>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm p-6">
        <PropertyTypeClient initialPropertyTypes={propertyTypes} />
      </div>
    </div>
  );
}
