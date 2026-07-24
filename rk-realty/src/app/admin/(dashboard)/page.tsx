import { prisma } from "@/lib/prisma";
import { Building, Users, MessageSquare, Briefcase, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  // Fetch real counts from Prisma
  const [
    totalEnquiries,
    totalCustomers,
    recentEnquiries,
  ] = await Promise.all([
    prisma.enquiry.count(),
    prisma.customer.count(),
    prisma.enquiry.findMany({
      take: 5,
      orderBy: { date: "desc" },
    }),
  ]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todaysEnquiries = await prisma.enquiry.count({
    where: { date: { gte: today } },
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Dashboard Overview</h2>
        <div className="text-sm font-medium text-accent bg-card px-4 py-2 rounded-full border border-border shadow-sm">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


        {/* Enquiries Card */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">Total Enquiries</p>
              <h3 className="text-4xl font-black text-foreground">{totalEnquiries}</h3>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
              <MessageSquare size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-accent">
            <span className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2 py-1 rounded-md">
              <ArrowUpRight size={14} /> {todaysEnquiries} Today
            </span>
          </div>
        </div>

        {/* Customers Card */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">System Users</p>
              <h3 className="text-4xl font-black text-foreground">{totalCustomers}</h3>
            </div>
            <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
              <Users size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs font-medium text-accent">
            <Link href="/admin/customers" className="flex items-center hover:text-primary transition-colors">
              View CRM <ArrowUpRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Enquiries Table */}
      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-border flex justify-between items-center bg-background/50">
          <h3 className="text-lg font-bold text-foreground">Recent Enquiries</h3>
          <Link href="/admin/enquiries" className="text-sm font-bold text-primary hover:text-primary-hover transition-colors">
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-background">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-foreground uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-foreground uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-foreground uppercase tracking-wider">Property</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-foreground uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {recentEnquiries.map((enq) => (
                <tr key={enq.id} className="hover:bg-background transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-accent">
                    {new Date(enq.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-foreground">
                    {enq.name} <span className="text-xs text-accent font-normal block">{enq.phone}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                    {enq.interestedProperty || "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-bold rounded-full border border-border ${
                      enq.status === 'NEW' ? 'bg-red-50 text-red-700' :
                      enq.status === 'CONTACTED' ? 'bg-blue-50 text-blue-700' :
                      'bg-green-50 text-green-700'
                    }`}>
                      {enq.status}
                    </span>
                  </td>
                </tr>
              ))}
              {recentEnquiries.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-accent text-sm">
                    No recent enquiries.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
