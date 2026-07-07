"use client";

import { useState, useTransition } from "react";
import { createAmenity, deleteAmenity } from "./actions";
import { Trash2, Plus, Loader2, Upload, X } from "lucide-react";

import { Amenity } from "@prisma/client";

export default function AmenityClient({ initialAmenities }: { initialAmenities: Amenity[] }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [iconUrl, setIconUrl] = useState<string>("");

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      setIconUrl(data.url);
    } catch (err) {
      setError("Failed to upload icon");
    }
  };

  const handleCreate = async (formData: FormData) => {
    const name = formData.get("name") as string;
    
    if (!name) return;

    setError(null);
    startTransition(async () => {
      const result = await createAmenity(name, iconUrl);
      if (result.error) {
        setError(result.error);
      } else {
        (document.getElementById("amenity-form") as HTMLFormElement).reset();
        setIconUrl("");
      }
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure? This will remove this amenity from all properties that use it.")) return;

    setError(null);
    startTransition(async () => {
      const result = await deleteAmenity(id);
      if (result.error) setError(result.error);
    });
  };

  return (
    <div className="space-y-6">
      <form id="amenity-form" action={handleCreate} className="flex flex-col md:flex-row items-end gap-4 bg-background p-4 rounded-xl border border-border">
        <div className="flex-1 w-full">
          <label className="block text-sm font-semibold text-foreground mb-1">Amenity Name</label>
          <input 
            type="text" 
            name="name" 
            required
            disabled={isPending}
            className="w-full px-4 py-2 border border-border bg-card rounded-lg text-foreground focus:ring-2 focus:ring-primary"
            placeholder="e.g. Swimming Pool" 
          />
        </div>
        
        <div className="flex-1 w-full">
          <label className="block text-sm font-semibold text-foreground mb-1">Icon Upload</label>
          <div className="flex items-center gap-3">
            {iconUrl ? (
              <div className="relative h-10 w-10 border border-border rounded-lg flex items-center justify-center bg-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={iconUrl} className="max-h-6 max-w-6 object-contain" alt="Icon" />
                <button type="button" onClick={() => setIconUrl("")} className="absolute -top-2 -right-2 p-0.5 bg-red-500 text-white rounded-full hover:bg-red-600 shadow-sm"><X size={12}/></button>
              </div>
            ) : (
              <label className="cursor-pointer flex items-center gap-2 px-4 py-2 border border-dashed border-border bg-card rounded-lg text-sm font-medium text-accent hover:text-foreground hover:border-accent transition-colors w-full justify-center">
                <Upload size={16} />
                <span>Upload Icon</span>
                <input type="file" className="hidden" accept="image/svg+xml,image/png" onChange={handleFileUpload} disabled={isPending} />
              </label>
            )}
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isPending}
          className="flex items-center gap-2 px-6 py-2 h-[42px] bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50 font-bold"
        >
          {isPending ? <Loader2 size={18} className="animate-spin" /> : <Plus size={18} />}
          Add
        </button>
      </form>

      {error && <p className="text-red-500 text-sm bg-red-50 p-3 rounded border border-red-100">{error}</p>}

      <div className="border border-border rounded-xl overflow-hidden">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-background">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-foreground uppercase tracking-wider">Icon</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-foreground uppercase tracking-wider">Amenity Name</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-foreground uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            {initialAmenities.map((amenity) => (
              <tr key={amenity.id} className="hover:bg-background transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  {amenity.iconUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={amenity.iconUrl} alt={amenity.name} className="h-6 w-6 object-contain" />
                  ) : (
                    <div className="h-6 w-6 rounded bg-border"></div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-foreground">
                  {amenity.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    onClick={() => handleDelete(amenity.id)}
                    disabled={isPending}
                    className="text-red-500 hover:text-red-700 transition-colors disabled:opacity-50 p-2 rounded hover:bg-red-50"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {initialAmenities.length === 0 && (
              <tr>
                <td colSpan={3} className="px-6 py-8 text-center text-accent text-sm">
                  No amenities found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
