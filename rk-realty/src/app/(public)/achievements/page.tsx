import { PageBanner } from "@/components/PageBanner";

export const metadata = {
  title: "Achievements | RK Associates",
  description: "Read about the latest achievements of RK Associates.",
};

export default function AchievementsPage() {
  return (
    <div className="w-full">

      <section className="max-w-7xl mx-auto px-8 py-24 min-h-[40vh] flex flex-col items-center justify-center text-center">
        <div className="bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
          Coming Soon
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We are currently working on our achievements page. Check back soon for updates!
        </p>
      </section>
    </div>
  );
}
