import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSR Activities | RK Associates",
  description: "Building Communities Beyond Real Estate.",
};

export default function CSRPage() {
  return (
    <div className="bg-[#F7F2EA] min-h-screen text-[#2B241D]">
      {/* Hero Section */}
      <section className="bg-[#2B241D] text-[#F7F2EA] py-24 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-sora text-4xl md:text-5xl font-bold mb-6">
            Building Communities Beyond Real Estate
          </h1>
          <p className="text-lg md:text-xl text-[rgba(247,242,234,0.8)] mb-8">
            Committed to making a positive impact on society.
          </p>
        </div>
      </section>

      {/* Gallery Section Placeholder */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[rgba(43,36,29,0.08)] shadow-sm aspect-square relative group">
              <img 
                src="/assets/images/placeholder.avif" 
                alt="CSR Activity Placeholder" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[#F7F2EA] font-sora font-semibold">
                CSR Initiative {i}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-24 px-8 text-center border-t border-[rgba(43,36,29,0.06)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-sora text-3xl font-bold mb-6 text-[#2B241D]">Our Commitment</h2>
          <p className="text-[#4A4038] text-lg leading-relaxed mb-6">
            At RK Associates, we believe that success comes with a responsibility to give back. Our Corporate Social Responsibility initiatives focus on education, healthcare, and community development, ensuring that our growth contributes to the well-being of the society we operate in.
          </p>
          <p className="text-[#4A4038] text-lg leading-relaxed">
            Stay tuned for updates on our upcoming community programs and events.
          </p>
        </div>
      </section>
    </div>
  );
}
