import { Header } from "@/components/frontend/Layout/Header";
import { Footer } from "@/components/frontend/Layout/Footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F2EA] text-[#2B241D]">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
