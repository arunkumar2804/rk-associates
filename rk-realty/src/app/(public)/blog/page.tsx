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
        Real Estate Insights
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Our experts are busy writing valuable insights, market trends, and guides for the Bengaluru real estate market. Check back soon for our first post!
      </p>
    </section>
  );
}
