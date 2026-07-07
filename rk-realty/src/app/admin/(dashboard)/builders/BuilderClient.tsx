"use client";

import { useState, useTransition } from "react";
import { Plus, Trash2, Image as ImageIcon, Loader2 } from "lucide-react";
import { createBuilder, deleteBuilder } from "@/app/actions/builder";

type Builder = {
  id: string;
  name: string;
  description: string | null;
  logo: string | null;
  createdAt: Date;
};

export default function BuilderClient({ initialBuilders }: { initialBuilders: Builder[] }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string>("");

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      setLogoUrl(data.url);
    } catch (err) {
      setError("Failed to upload logo image");
    } finally {
      setIsUploading(false);
    }
  };

  const handleCreate = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    if (!name) return;

    setError(null);
    startTransition(async () => {
      const result = await createBuilder({ name, description, logo: logoUrl || null });
      if (result.error) {
        setError(result.error);
      } else {
        // Reset form
        (document.getElementById("builder-form") as HTMLFormElement).reset();
        setLogoUrl("");
      }
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this builder?")) return;

    setError(null);
    startTransition(async () => {
      const result = await deleteBuilder(id);
      if (result.error) {
        setError(result.error);
      }
    });
  };

  return (
    <div className="space-y-10">
      <form id="builder-form" action={handleCreate} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">Builder Name *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="e.g. Sobha Developers"
                disabled={isPending || isUploading}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">Description</label>
              <textarea
                name="description"
                rows={4}
                className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Brief description about the builder..."
                disabled={isPending || isUploading}
              ></textarea>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Builder Logo</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-border border-dashed rounded-xl bg-background hover:bg-gray-50 transition-colors">
              <div className="space-y-1 text-center">
                {logoUrl ? (
                  <div className="relative w-full h-32 flex justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logoUrl} alt="Logo preview" className="h-full object-contain" />
                    <button
                      type="button"
                      onClick={() => setLogoUrl("")}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ) : (
                  <>
                    {isUploading ? (
                      <Loader2 className="mx-auto h-12 w-12 text-primary animate-spin" />
                    ) : (
                      <ImageIcon className="mx-auto h-12 w-12 text-accent" />
                    )}
                    <div className="flex text-sm text-foreground justify-center mt-2">
                      <label className="relative cursor-pointer bg-card rounded-md font-medium text-primary hover:text-primary-hover focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                        <span>Upload a file</span>
                        <input type="file" className="sr-only" accept="image/*" onChange={handleFileUpload} disabled={isUploading || isPending} />
                      </label>
                    </div>
                    <p className="text-xs text-accent">PNG, JPG, WEBP up to 5MB</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending || isUploading}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50 font-bold"
        >
          {isPending ? <Loader2 size={20} className="animate-spin" /> : <Plus size={20} />}
          Add Builder
        </button>
      </form>

      {error && <p className="text-red-500 text-sm bg-red-50 p-3 rounded border border-red-100">{error}</p>}

      <div className="border border-border rounded-xl overflow-hidden">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-background">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-foreground uppercase tracking-wider">
                Logo
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-foreground uppercase tracking-wider">
                Builder Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-foreground uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-4 text-right text-xs font-bold text-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            {initialBuilders.map((builder) => (
              <tr key={builder.id} className="hover:bg-background transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  {builder.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={builder.logo} alt={builder.name} className="h-10 w-auto object-contain rounded" />
                  ) : (
                    <div className="h-10 w-10 bg-background rounded border border-border flex items-center justify-center text-accent text-xs">No Logo</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-foreground">
                  {builder.name}
                </td>
                <td className="px-6 py-4 text-sm text-accent max-w-xs truncate">
                  {builder.description || "-"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleDelete(builder.id)}
                    disabled={isPending}
                    className="text-red-500 hover:text-red-700 transition-colors disabled:opacity-50 p-2 rounded hover:bg-red-50"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
            {initialBuilders.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-accent text-sm">
                  No builders added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
