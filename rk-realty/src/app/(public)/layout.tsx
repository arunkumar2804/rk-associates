import { Header } from "@/components/frontend/Layout/Header";
import { Footer } from "@/components/frontend/Layout/Footer";
import { getSettings } from "@/lib/settings";

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSettings();

  // Convert dates to string to prevent warnings about passing complex objects
  const serializedSettings = settings ? {
    ...settings,
    updatedAt: settings?.updatedAt ? new Date(settings.updatedAt).toISOString() : new Date().toISOString(),
  } : null;

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F2EA] text-[#2B241D]">
      <Header settings={serializedSettings} />
      <main className="flex-1">
        {children}
      </main>
      <Footer settings={serializedSettings} />
    </div>
  );
}
