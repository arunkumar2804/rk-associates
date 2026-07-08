export const metadata = {
  title: "Our Services | RK Associates",
  description: "Explore the real estate services offered by RK Associates.",
};

export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
        Coming Soon
      </div>
      <h1 className="font-sora text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Our Services
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        From buying and renting to investment advisory and legal assistance, we&apos;re preparing a detailed breakdown of all the ways we can help you find your dream property.
      </p>
    </section>
  );
}
