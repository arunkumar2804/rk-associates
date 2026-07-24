"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createProperty, updateProperty, PropertyData } from "@/app/actions/property";
import { Builder } from "@prisma/client";
import { Plus, Trash2, Loader2, Upload, X } from "lucide-react";

type Configuration = { type: string; area: string; price: string };

export default function PropertyForm({
  builders,
  initialData,
  propertyId,
}: {
  builders: Builder[];
  initialData?: PropertyData;
  propertyId?: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<PropertyData>(
    initialData || {
      name: "",
      slug: "",
      builderId: "",
      locationName: "",
      propertyTypeName: "",
      status: "ACTIVE",
      isFeatured: false,
      startingPrice: "",
      possessionDate: null,
      reraNumber: "",
      description: "",
      coverImage: "",
      brochurePdf: "",
      seoTitle: "",
      seoDescription: "",
      amenities: "",
      galleryImages: [],
      floorPlans: [],
      configurations: [],
    }
  );

  // Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Auto-generate slug from name
    if (name === "name" && !initialData) {
      setFormData(prev => ({
        ...prev,
        slug: value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")
      }));
    }
  };



  // Upload Helpers
  const uploadFile = async (file: File) => {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    if (!res.ok) throw new Error("Upload failed");
    const data = await res.json();
    return data.url as string;
  };

  const handleSingleUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: "coverImage" | "brochurePdf") => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await uploadFile(file);
      setFormData(prev => ({ ...prev, [field]: url }));
    } catch (err) {
      alert("Failed to upload file");
    }
  };

  const handleMultiUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: "galleryImages" | "floorPlans") => {
    const files = e.target.files;
    if (!files?.length) return;
    try {
      const urls: string[] = [];
      for (let i = 0; i < files.length; i++) {
        urls.push(await uploadFile(files[i]));
      }
      setFormData(prev => ({ ...prev, [field]: [...prev[field], ...urls] }));
    } catch (err) {
      alert("Failed to upload files");
    }
  };

  const removeMultiImage = (field: "galleryImages" | "floorPlans", index: number) => {
    setFormData(prev => {
      const newArray = [...prev[field]];
      newArray.splice(index, 1);
      return { ...prev, [field]: newArray };
    });
  };

  // Configuration Helpers
  const addConfig = () => {
    setFormData(prev => ({
      ...prev,
      configurations: [...prev.configurations, { type: "", area: "", price: "" }]
    }));
  };

  const updateConfig = (index: number, field: keyof Configuration, value: string) => {
    setFormData(prev => {
      const newConfigs = [...prev.configurations];
      newConfigs[index] = { ...newConfigs[index], [field]: value };
      return { ...prev, configurations: newConfigs };
    });
  };

  const removeConfig = (index: number) => {
    setFormData(prev => {
      const newConfigs = [...prev.configurations];
      newConfigs.splice(index, 1);
      return { ...prev, configurations: newConfigs };
    });
  };

  // Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.locationName || !formData.propertyTypeName) {
      setError("Please specify a Location and Property Type.");
      return;
    }

    startTransition(async () => {
      const result = propertyId 
        ? await updateProperty(propertyId, formData)
        : await createProperty(formData);
        
      if (result.error) {
        setError(result.error);
      } else {
        router.push("/admin/properties");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-20">
      {error && <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-100">{error}</div>}

      {/* Basic Info */}
      <div className="bg-card border border-border rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-bold text-foreground mb-6">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Property Name *</label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary" placeholder="e.g. Sobha Dream Acres" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">URL Slug *</label>
            <input type="text" name="slug" required value={formData.slug} onChange={handleChange} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary" placeholder="sobha-dream-acres" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Builder</label>
            <select name="builderId" value={formData.builderId} onChange={handleChange} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary">
              <option value="">Select a Builder</option>
              {builders.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Location *</label>
            <input type="text" name="locationName" required value={formData.locationName} onChange={handleChange} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary" placeholder="e.g. Rajajinagar, Bengaluru" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Property Type *</label>
            <input type="text" name="propertyTypeName" required value={formData.propertyTypeName} onChange={handleChange} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary" placeholder="e.g. Apartment, Villa" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-foreground mb-1">Status *</label>
              <select name="status" value={formData.status} onChange={handleChange} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary">
                <option value="ACTIVE">Active</option>
                <option value="UPCOMING">Upcoming</option>
                <option value="SOLD_OUT">Sold Out</option>
              </select>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <input type="checkbox" id="isFeatured" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} className="w-5 h-5 accent-primary" />
              <label htmlFor="isFeatured" className="text-sm font-bold text-foreground">Featured</label>
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="bg-card border border-border rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-bold text-foreground mb-6">Pricing & Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Starting Price</label>
            <input type="text" name="startingPrice" value={formData.startingPrice || ""} onChange={handleChange} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary" placeholder="e.g. ₹ 60 Lakhs" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">RERA Number</label>
            <input type="text" name="reraNumber" value={formData.reraNumber || ""} onChange={handleChange} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary" placeholder="PRM/KA/RERA/..." />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-foreground mb-1">Full Description</label>
            <textarea name="description" rows={5} value={formData.description || ""} onChange={handleChange} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary" placeholder="Detailed property description..."></textarea>
          </div>
        </div>
      </div>

      {/* Configurations */}
      <div className="bg-card border border-border rounded-2xl shadow-sm p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-foreground">Configurations</h3>
          <button type="button" onClick={addConfig} className="flex items-center gap-1 text-sm bg-primary text-white px-3 py-1.5 rounded hover:bg-primary-hover transition-colors font-bold">
            <Plus size={16} /> Add Config
          </button>
        </div>
        
        {formData.configurations.length === 0 ? (
          <p className="text-accent text-sm text-center py-4">No configurations added yet.</p>
        ) : (
          <div className="space-y-4">
            {formData.configurations.map((conf, i) => (
              <div key={i} className="flex gap-4 items-end bg-background p-4 rounded-xl border border-border">
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-foreground mb-1">BHK Type</label>
                  <input type="text" required value={conf.type} onChange={(e) => updateConfig(i, "type", e.target.value)} className="w-full px-3 py-2 text-sm border border-border bg-card rounded-lg focus:ring-2 focus:ring-primary" placeholder="e.g. 2 BHK" />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-foreground mb-1">Area / Sq.Ft</label>
                  <input type="text" required value={conf.area} onChange={(e) => updateConfig(i, "area", e.target.value)} className="w-full px-3 py-2 text-sm border border-border bg-card rounded-lg focus:ring-2 focus:ring-primary" placeholder="e.g. 1100 sqft" />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-foreground mb-1">Price (Optional)</label>
                  <input type="text" value={conf.price || ""} onChange={(e) => updateConfig(i, "price", e.target.value)} className="w-full px-3 py-2 text-sm border border-border bg-card rounded-lg focus:ring-2 focus:ring-primary" placeholder="e.g. ₹ 65 L" />
                </div>
                <button type="button" onClick={() => removeConfig(i)} className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-colors mb-[2px]">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Media Uploads */}
      <div className="bg-card border border-border rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-bold text-foreground mb-6">Media Assets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Cover Image */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Cover Image *</label>
            <div className="border-2 border-dashed border-border rounded-xl p-4 text-center bg-background">
              {formData.coverImage ? (
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={formData.coverImage} className="w-full h-40 object-cover rounded-lg" alt="Cover" />
                  <button type="button" onClick={() => setFormData(p => ({...p, coverImage: ""}))} className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full"><X size={16}/></button>
                </div>
              ) : (
                <label className="cursor-pointer flex flex-col items-center py-6">
                  <Upload className="h-8 w-8 text-accent mb-2" />
                  <span className="text-sm font-medium text-primary">Upload Cover Image</span>
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => handleSingleUpload(e, "coverImage")} />
                </label>
              )}
            </div>
          </div>

          {/* Brochure PDF */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Brochure PDF</label>
            <div className="border-2 border-dashed border-border rounded-xl p-4 text-center bg-background">
              {formData.brochurePdf ? (
                <div className="relative flex flex-col items-center justify-center h-40 bg-card rounded-lg border border-border">
                  <span className="font-bold text-foreground">{formData.brochurePdf.split("/").pop()}</span>
                  <button type="button" onClick={() => setFormData(p => ({...p, brochurePdf: ""}))} className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full"><X size={16}/></button>
                </div>
              ) : (
                <label className="cursor-pointer flex flex-col items-center py-6">
                  <Upload className="h-8 w-8 text-accent mb-2" />
                  <span className="text-sm font-medium text-primary">Upload Brochure (PDF)</span>
                  <input type="file" className="hidden" accept="application/pdf" onChange={(e) => handleSingleUpload(e, "brochurePdf")} />
                </label>
              )}
            </div>
          </div>

          {/* Gallery */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-foreground mb-2">Gallery Images</label>
            <div className="border-2 border-dashed border-border rounded-xl p-4 bg-background">
              <div className="flex flex-wrap gap-4 mb-4">
                {formData.galleryImages.map((img, i) => (
                  <div key={i} className="relative w-24 h-24">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} className="w-full h-full object-cover rounded-lg border border-border" alt="Gallery" />
                    <button type="button" onClick={() => removeMultiImage("galleryImages", i)} className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full"><X size={14}/></button>
                  </div>
                ))}
                <label className="w-24 h-24 border border-border border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:bg-card bg-background">
                  <Plus className="text-accent" />
                  <input type="file" multiple className="hidden" accept="image/*" onChange={(e) => handleMultiUpload(e, "galleryImages")} />
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Amenities Grid */}
      <div className="bg-card border border-border rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-bold text-foreground mb-6">Amenities</h3>
        <div className="w-full">
          <label className="block text-sm font-semibold text-foreground mb-2">Comma Separated Amenities</label>
          <textarea 
            name="amenities" 
            rows={4} 
            value={formData.amenities || ""} 
            onChange={handleChange} 
            className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary" 
            placeholder="e.g. Swimming Pool, Gym, Club House, 24/7 Security"
          ></textarea>
        </div>
      </div>

      {/* SEO Settings */}
      <div className="bg-card border border-border rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-bold text-foreground mb-6">SEO Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">SEO Title</label>
            <input type="text" name="seoTitle" value={formData.seoTitle || ""} onChange={handleChange} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary" placeholder="Meta title for Google..." />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">SEO Description</label>
            <textarea name="seoDescription" rows={3} value={formData.seoDescription || ""} onChange={handleChange} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary" placeholder="Meta description for Google..."></textarea>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4">
        <button type="button" onClick={() => router.back()} className="px-6 py-3 border border-border rounded-lg text-foreground hover:bg-background transition-colors font-bold">
          Cancel
        </button>
        <button type="submit" disabled={isPending} className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50 font-bold shadow-md">
          {isPending && <Loader2 size={20} className="animate-spin" />}
          {propertyId ? "Save Changes" : "Create Property"}
        </button>
      </div>

    </form>
  );
}
