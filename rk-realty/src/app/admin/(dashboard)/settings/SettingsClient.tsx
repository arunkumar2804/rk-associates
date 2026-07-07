"use client";

import { useState, useTransition } from "react";
import { Loader2, Upload, X, Save } from "lucide-react";
import { updateWebsiteSettings } from "@/app/actions/settings";
import { WebsiteSetting } from "@prisma/client";

export default function SettingsClient({ 
  initialSettings,
  isFullControl = true 
}: { 
  initialSettings: WebsiteSetting | null;
  isFullControl?: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [logoUrl, setLogoUrl] = useState<string>(initialSettings?.logoUrl || "");
  const [faviconUrl, setFaviconUrl] = useState<string>(initialSettings?.faviconUrl || "");

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: "logo" | "favicon") => {
    if (!isFullControl) return;
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      if (type === "logo") setLogoUrl(data.url);
      else setFaviconUrl(data.url);
    } catch (err) {
      setError(`Failed to upload ${type}`);
    }
  };

  const handleSave = async (formData: FormData) => {
    if (!isFullControl) return;
    setError(null);
    setSuccessMsg(null);
    
    const data = {
      companyName: formData.get("companyName") as string || "RK Realty",
      logoUrl: logoUrl || null,
      faviconUrl: faviconUrl || null,
      contactNumber1: formData.get("contactNumber1") as string || null,
      contactNumber2: formData.get("contactNumber2") as string || null,
      whatsappNumber: formData.get("whatsappNumber") as string || null,
      email: formData.get("email") as string || null,
      officeAddress: formData.get("officeAddress") as string || null,
      facebookUrl: formData.get("facebookUrl") as string || null,
      instagramUrl: formData.get("instagramUrl") as string || null,
      youtubeUrl: formData.get("youtubeUrl") as string || null,
      twitterUrl: formData.get("twitterUrl") as string || null,
      globalSeoTitle: formData.get("globalSeoTitle") as string || null,
      globalSeoDescription: formData.get("globalSeoDescription") as string || null,
      globalSeoKeywords: formData.get("globalSeoKeywords") as string || null,
    };

    startTransition(async () => {
      const result = await updateWebsiteSettings(data);
      if (result.error) {
        setError(result.error);
      } else {
        setSuccessMsg("Settings saved successfully!");
        setTimeout(() => setSuccessMsg(null), 3000);
      }
    });
  };

  return (
    <form action={handleSave} className="space-y-8 pb-20">
      {error && <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-100">{error}</div>}
      {successMsg && <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">{successMsg}</div>}

      <div className="bg-card border border-border rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-bold text-foreground mb-6">General Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">Company Name</label>
              <input type="text" name="companyName" defaultValue={initialSettings?.companyName || "RK Realty"} required disabled={!isFullControl} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary disabled:opacity-60" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">Primary Contact Number</label>
              <input type="text" name="contactNumber1" defaultValue={initialSettings?.contactNumber1 || ""} disabled={!isFullControl} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary disabled:opacity-60" placeholder="+91 9876543210" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">Secondary Contact Number</label>
              <input type="text" name="contactNumber2" defaultValue={initialSettings?.contactNumber2 || ""} disabled={!isFullControl} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary disabled:opacity-60" placeholder="+91 8765432109" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Company Logo</label>
            <div className="border-2 border-dashed border-border rounded-xl p-4 text-center bg-background h-[216px] flex items-center justify-center">
              {logoUrl ? (
                <div className="relative h-full w-full flex items-center justify-center p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logoUrl} className="max-h-full max-w-full object-contain" alt="Logo" />
                  {isFullControl && (
                    <button type="button" onClick={() => setLogoUrl("")} className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"><X size={16}/></button>
                  )}
                </div>
              ) : (
                <label className={`flex flex-col items-center p-6 ${isFullControl ? "cursor-pointer" : "opacity-55 cursor-not-allowed"}`}>
                  <Upload className="h-10 w-10 text-accent mb-3" />
                  <span className="text-sm font-medium text-primary hover:text-primary-hover">Upload Logo</span>
                  {isFullControl && <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, "logo")} />}
                  <span className="text-xs text-accent mt-2">PNG, JPG up to 5MB</span>
                </label>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Favicon</label>
            <div className="border-2 border-dashed border-border rounded-xl p-4 text-center bg-background h-[216px] flex items-center justify-center">
              {faviconUrl ? (
                <div className="relative h-full w-full flex items-center justify-center p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={faviconUrl} className="max-h-[64px] max-w-[64px] object-contain" alt="Favicon" />
                  {isFullControl && (
                    <button type="button" onClick={() => setFaviconUrl("")} className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"><X size={16}/></button>
                  )}
                </div>
              ) : (
                <label className={`flex flex-col items-center p-6 ${isFullControl ? "cursor-pointer" : "opacity-55 cursor-not-allowed"}`}>
                  <Upload className="h-10 w-10 text-accent mb-3" />
                  <span className="text-sm font-medium text-primary hover:text-primary-hover">Upload Favicon</span>
                  {isFullControl && <input type="file" className="hidden" accept="image/png,image/x-icon,image/svg+xml" onChange={(e) => handleFileUpload(e, "favicon")} />}
                  <span className="text-xs text-accent mt-2">ICO, PNG, SVG (Square)</span>
                </label>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-bold text-foreground mb-6">Global SEO Settings</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Global Meta Title</label>
            <input type="text" name="globalSeoTitle" defaultValue={initialSettings?.globalSeoTitle || ""} disabled={!isFullControl} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary disabled:opacity-60" placeholder="RK Realty | Premium Real Estate Partners" />
            <p className="text-xs text-accent mt-1">This will be the default title for the website unless a specific page overrides it.</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Global Meta Description</label>
            <textarea name="globalSeoDescription" rows={3} defaultValue={initialSettings?.globalSeoDescription || ""} disabled={!isFullControl} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary disabled:opacity-60" placeholder="Discover the best real estate properties..."></textarea>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Global Meta Keywords</label>
            <input type="text" name="globalSeoKeywords" defaultValue={initialSettings?.globalSeoKeywords || ""} disabled={!isFullControl} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary disabled:opacity-60" placeholder="real estate, apartments, villas, buy property" />
            <p className="text-xs text-accent mt-1">Comma separated list of keywords.</p>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm p-8">
        <h3 className="text-xl font-bold text-foreground mb-6">Contact & Social Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Email Address</label>
            <input type="email" name="email" defaultValue={initialSettings?.email || ""} disabled={!isFullControl} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary disabled:opacity-60" placeholder="info@rkrealty.com" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">WhatsApp Number</label>
            <input type="text" name="whatsappNumber" defaultValue={initialSettings?.whatsappNumber || ""} disabled={!isFullControl} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary disabled:opacity-60" placeholder="+91 9876543210" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-foreground mb-1">Office Address</label>
            <textarea name="officeAddress" rows={3} defaultValue={initialSettings?.officeAddress || ""} disabled={!isFullControl} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary disabled:opacity-60" placeholder="Full office address..."></textarea>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Facebook URL</label>
            <input type="url" name="facebookUrl" defaultValue={initialSettings?.facebookUrl || ""} disabled={!isFullControl} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary disabled:opacity-60" placeholder="https://facebook.com/..." />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Instagram URL</label>
            <input type="url" name="instagramUrl" defaultValue={initialSettings?.instagramUrl || ""} disabled={!isFullControl} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary disabled:opacity-60" placeholder="https://instagram.com/..." />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">YouTube URL</label>
            <input type="url" name="youtubeUrl" defaultValue={initialSettings?.youtubeUrl || ""} disabled={!isFullControl} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary disabled:opacity-60" placeholder="https://youtube.com/..." />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Twitter/X URL</label>
            <input type="url" name="twitterUrl" defaultValue={initialSettings?.twitterUrl || ""} disabled={!isFullControl} className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary disabled:opacity-60" placeholder="https://twitter.com/..." />
          </div>
        </div>
      </div>

      {isFullControl && (
        <div className="flex justify-end">
          <button type="submit" disabled={isPending} className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50 font-bold shadow-md">
            {isPending ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
            Save Settings
          </button>
        </div>
      )}
    </form>
  );
}
