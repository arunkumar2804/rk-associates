export const metadata = {
  title: "Blog | RK Associates",
  description: "Read the latest news and insights on Bengaluru real estate from RK Associates.",
};

export default function BlogPage() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
        Coming Soon
      </div>
      <h1 className="font-sora text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Insights That Help You Make Smarter Property Decisions
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Stay informed with expert perspectives, market trends, investment insights, and practical guidance from Bengaluru's evolving real estate landscape.
      </p>
    </section>
  );
}
