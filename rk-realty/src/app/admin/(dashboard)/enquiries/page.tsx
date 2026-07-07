import { prisma } from "@/lib/prisma";
import EnquiryClient from "./EnquiryClient";

export default async function EnquiriesPage() {
  const enquiries = await prisma.enquiry.findMany({
    orderBy: { date: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Website Enquiries</h2>
          <p className="text-accent">Manage incoming property leads</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm p-6">
        <EnquiryClient initialEnquiries={enquiries} />
      </div>
    </div>
  );
}
