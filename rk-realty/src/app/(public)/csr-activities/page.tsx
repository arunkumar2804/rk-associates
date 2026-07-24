import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSR Activities | RK Associates",
  description: "Building Communities Beyond Real Estate.",
};

export default function CSRPage() {
  return (
    <div className="bg-[#F7F2EA] min-h-screen text-[#2B241D] flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="font-sora text-4xl md:text-5xl font-bold mb-6 text-[#2B241D]">
          Coming Soon
        </h1>
        <p className="text-[#4A4038] text-lg md:text-xl leading-relaxed mb-8">
          We are currently updating our Corporate Social Responsibility page. Please check back later for updates on our community programs and events.
        </p>
        <div className="inline-block px-6 py-3 bg-[#F06400]/10 text-[#F06400] font-semibold rounded-full">
          RK Associates CSR Initiatives
        </div>
      </div>
    </div>
  );
}
