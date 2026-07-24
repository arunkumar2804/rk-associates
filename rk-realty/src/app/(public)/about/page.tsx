export const metadata = {
  title: "About Us | RK Associates",
  description: "Trusted Real Estate Consultants Since 2011. Learn more about RK Associates and our team of real estate experts.",
};

import { PageBanner } from "@/components/PageBanner";

export default function AboutPage() {
  return (
    <div className="bg-[#F7F2EA] min-h-screen text-[#2B241D]">
      {/* Hero Section */}
      <PageBanner 
        imageSrc="/assets/images/banners/about-us-new.avif"
        title={"Your Trusted Partner in Every Property Journey"}
        subtitle="Guiding homebuyers, investors, and businesses with expert real estate advice since 2011"
      />

      {/* Trusted Real Estate Consultants Since 2011 */}
      <section className="max-w-5xl mx-auto px-8 py-20 text-center">
        <h2 className="font-sora text-3xl font-bold mb-6 text-[#2B241D]">
          Trusted Real Estate Consultants Since 2011
        </h2>
        <p className="text-[#4A4038] text-lg leading-relaxed">
          For over 15 years, RK Associates has been helping homebuyers, investors, and businesses navigate Bengaluru's dynamic real estate market with confidence. Built on the principles of trust, transparency, and personalized service, we are committed to helping our clients make informed property decisions that create lasting value.
        </p>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sora text-3xl font-bold mb-6 text-[#2B241D]">Our Story</h2>
          <h3 className="text-xl font-semibold mb-4 text-[#F06400]">Building Relationships Beyond Real Estate</h3>
          <div className="text-[#4A4038] text-lg leading-relaxed space-y-4">
            <p>
              Founded on 16th August 2011 by Mr. Ram Krishna, RK Associates was established with a simple vision to provide honest, professional, and customer-focused real estate consulting services.
            </p>
            <p>
              Over the years, we have grown into a trusted channel partner for some of India's most respected developers, helping clients discover premium residential and commercial properties across Bengaluru.
            </p>
            <p>
              Our success is not measured by transactions alone, but by the long-term relationships we continue to build with our clients. Whether it is helping a family find their dream home and guiding an investor towards a promising opportunity, we approach every requirement with the same dedication and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 px-8 bg-[#F7F2EA]">
        <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-sm border border-[rgba(43,36,29,0.06)] flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/3 flex-shrink-0">
            <img src="/assets/images/rk-1.avif" alt="Ram Krishna, Founder" className="w-full h-auto rounded-xl object-cover shadow-md" />
          </div>
          <div className="md:w-2/3">
            <h2 className="font-sora text-3xl font-bold mb-6 text-[#2B241D]">A Message from Our Founder</h2>
            <div className="text-[#4A4038] text-lg leading-relaxed italic space-y-4 mb-8">
              <p>"At RK Associates, we believe that every property decision is an important milestone in a person's life.</p>
              <p>From the day we started our journey, our focus has always been on understanding our clients' aspirations and providing guidance that is honest, transparent, and tailored to their needs.</p>
              <p>The real estate industry continues to evolve, but our commitment remains unchanged to create value for every client through trusted advice, professional service, and meaningful relationships.</p>
              <p>We are grateful for the trust placed in us by thousands of clients over the years and look forward to helping many more families and investors achieve their real estate goals."</p>
            </div>
            <div className="font-sora font-bold text-[#2B241D]">– Ram Krishna</div>
            <div className="text-sm text-[#F06400] font-semibold uppercase tracking-wider">Founder, RK Associates</div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-sora text-3xl font-bold mb-6 text-[#2B241D]">Vision</h2>
            <h3 className="text-xl font-semibold mb-4 text-[#F06400]">To Be Bengaluru's Most Trusted Real Estate Advisory Partner</h3>
            <p className="text-[#4A4038] text-lg leading-relaxed mb-4">
              Our vision is to create a future where every property buyer, investor, and tenant has access to transparent guidance and reliable opportunities, enabling them to make confident real estate decisions.
            </p>
            <p className="text-[#4A4038] text-lg leading-relaxed">
              We aspire to grow RK Associates into a larger organization that not only serves clients but also creates employment opportunities and contributes positively to society.
            </p>
          </div>
          <div>
            <h2 className="font-sora text-3xl font-bold mb-6 text-[#2B241D]">Mission</h2>
            <h3 className="text-xl font-semibold mb-4 text-[#F06400]">Delivering Real Estate Solutions with Integrity</h3>
            <p className="text-[#4A4038] text-lg leading-relaxed mb-4">
              Our mission is to simplify the property journey through professional consulting, personalized service, and long-term client relationships.
            </p>
            <ul className="text-[#4A4038] text-lg leading-relaxed space-y-2 list-disc list-inside">
              <li>Providing trustworthy real estate guidance.</li>
              <li>Connecting clients with premium and verified developments.</li>
              <li>Delivering seamless support throughout the buying, renting, and investment process.</li>
              <li>Creating value through market expertise and customer-focused service.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-8 bg-[#F7F2EA]">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="font-sora text-3xl font-bold mb-4 text-[#2B241D]">Our Approach</h2>
          <h3 className="text-xl font-semibold text-[#F06400]">A Client-First Philosophy</h3>
          <p className="text-[#4A4038] text-lg mt-4 max-w-3xl mx-auto">
            Every client has unique requirements, goals, and expectations. Our approach begins with understanding those needs before recommending any property solution.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { title: "Understand", desc: "We take the time to understand your requirements, budget, lifestyle preferences, and investment objectives." },
            { title: "Evaluate", desc: "Our team carefully evaluates projects, locations, and opportunities to identify the most suitable options." },
            { title: "Guide", desc: "From site visits and project comparisons to documentation support, we provide expert guidance at every stage." },
            { title: "Support", desc: "Our relationship continues even after the transaction, ensuring ongoing assistance whenever required." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl text-center border border-[rgba(43,36,29,0.06)] shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="text-[#F06400] font-sora font-bold text-2xl mb-4">{item.title}</div>
              <p className="text-[#4A4038]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Clients Trust RK Associates */}
      <section className="py-20 px-4 md:px-8 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sora text-3xl font-bold mb-12 text-center text-[#2B241D]">Why Clients Trust RK Associates</h2>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pb-4">
            {[
              { title: "15+ Years of Industry Experience", desc: "A strong understanding of Bengaluru's residential and commercial real estate landscape.", icon: "Briefcase" },
              { title: "Trusted Developer Network", desc: "Access to premium projects from leading developers including Sobha, Godrej, Brigade, Embassy, and Phoenix.", icon: "Building2" },
              { title: "Personalized Advisory", desc: "Every recommendation is tailored to the client's specific requirements and goals.", icon: "UserCheck" },
              { title: "Complete Transparency", desc: "Professional guidance backed by honesty, integrity, and clear communication.", icon: "ShieldCheck" },
              { title: "Proven Track Record", desc: "200+ properties sold and managed, 1000+ happy clients, and 2000+ rental clients served.", icon: "Award" }
            ].map((item, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] md:w-auto bg-[#F7F2EA] rounded-2xl p-6 border border-[#2B241D]/5 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#F06400] shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="font-sora font-bold text-[17px] text-[#2B241D] mb-2">{item.title}</h4>
                  <p className="text-[#4A4038] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#F06400] to-[#D85A00] text-[#F7F2EA] py-24 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-sora text-3xl md:text-4xl font-bold mb-6">Let's Build Your Real Estate Journey Together</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Whether you're searching for your dream home, a strategic investment, or rental opportunities, RK Associates is here to guide you every step of the way.
          </p>
          <a href="/contact" className="inline-block bg-[#2B241D] text-[#F7F2EA] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#1f1a14] transition-colors">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
