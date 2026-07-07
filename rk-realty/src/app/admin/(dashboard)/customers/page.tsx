import { prisma } from "@/lib/prisma";
import CustomerClient from "./CustomerClient";

export default async function CustomersPage() {
  const customers = await prisma.customer.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Customers CRM</h2>
          <p className="text-accent">Manage your customer database</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm p-6">
        <CustomerClient initialCustomers={customers} />
      </div>
    </div>
  );
}
