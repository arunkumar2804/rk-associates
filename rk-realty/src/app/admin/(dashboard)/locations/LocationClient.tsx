"use client";

import { useState } from "react";
import { createLocation, deleteLocation } from "./actions";
import { Trash2, Plus } from "lucide-react";

type Location = {
  id: string;
  name: string;
};

export default function LocationClient({ initialLocations }: { initialLocations: Location[] }) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");

  const handleCreate = async (formData: FormData) => {
    setIsPending(true);
    setError("");
    const result = await createLocation(formData);
    if (result?.error) {
      setError(result.error);
    }
    setIsPending(false);
    // Form is automatically reset if we used a ref, but let's just use uncontrolled form
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this location?")) return;
    setIsPending(true);
    const result = await deleteLocation(id);
    if (result?.error) {
      alert(result.error);
    }
    setIsPending(false);
  };

  return (
    <div className="space-y-8">
      <form action={handleCreate} className="flex gap-4 items-end">
        <div className="flex-1 max-w-sm">
          <label className="block text-sm font-semibold text-foreground mb-1">New Location</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="e.g. Whitefield"
            disabled={isPending}
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50 font-bold"
        >
          <Plus size={20} />
          Add Location
        </button>
      </form>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="border border-border rounded-xl overflow-hidden">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-background">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-foreground uppercase tracking-wider">
                Location Name
              </th>
              <th className="px-6 py-3 text-right text-xs font-bold text-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            {initialLocations.map((location) => (
              <tr key={location.id} className="hover:bg-background transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                  {location.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleDelete(location.id)}
                    disabled={isPending}
                    className="text-red-500 hover:text-red-700 transition-colors disabled:opacity-50"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
            {initialLocations.length === 0 && (
              <tr>
                <td colSpan={2} className="px-6 py-8 text-center text-accent text-sm">
                  No locations added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
