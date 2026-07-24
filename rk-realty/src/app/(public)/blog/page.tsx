import { PageBanner } from "@/components/PageBanner";

export const metadata = {
  title: "Blog | RK Associates",
  description: "Read the latest news and insights on Bengaluru real estate from RK Associates.",
};

export default function BlogPage() {
  return (
    <div className="w-full">
      <PageBanner 
        imageSrc="/assets/images/banners/rk-associates-1.avif"
        title="Insights That Help You Make Smarter Property Decisions"
        subtitle="Stay informed with expert perspectives, market trends, investment insights, and practical guidance from Bengaluru's evolving real estate landscape."
      />
      <section className="max-w-7xl mx-auto px-8 py-24 min-h-[40vh] flex flex-col items-center justify-center text-center">
        <div className="bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
          Coming Soon
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We are currently working on our blog. Check back soon for updates!
        </p>
      </section>
    </div>
  );
}
