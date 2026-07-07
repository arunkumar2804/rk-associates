"use client";

import { useState } from "react";
import { createPropertyType, deletePropertyType } from "./actions";
import { Trash2, Plus } from "lucide-react";

type PropertyType = {
  id: string;
  name: string;
};

export default function PropertyTypeClient({ initialPropertyTypes }: { initialPropertyTypes: PropertyType[] }) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");

  const handleCreate = async (formData: FormData) => {
    setIsPending(true);
    setError("");
    const result = await createPropertyType(formData);
    if (result?.error) {
      setError(result.error);
    }
    setIsPending(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this property type?")) return;
    setIsPending(true);
    const result = await deletePropertyType(id);
    if (result?.error) {
      alert(result.error);
    }
    setIsPending(false);
  };

  return (
    <div className="space-y-8">
      <form action={handleCreate} className="flex gap-4 items-end">
        <div className="flex-1 max-w-sm">
          <label className="block text-sm font-semibold text-foreground mb-1">New Property Type</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="e.g. Villa"
            disabled={isPending}
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50 font-bold"
        >
          <Plus size={20} />
          Add Type
        </button>
      </form>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="border border-border rounded-xl overflow-hidden">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-background">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-foreground uppercase tracking-wider">
                Property Type
              </th>
              <th className="px-6 py-3 text-right text-xs font-bold text-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            {initialPropertyTypes.map((pt) => (
              <tr key={pt.id} className="hover:bg-background transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                  {pt.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleDelete(pt.id)}
                    disabled={isPending}
                    className="text-red-500 hover:text-red-700 transition-colors disabled:opacity-50"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
            {initialPropertyTypes.length === 0 && (
              <tr>
                <td colSpan={2} className="px-6 py-8 text-center text-accent text-sm">
                  No property types added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
