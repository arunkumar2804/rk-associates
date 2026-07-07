import { prisma } from "@/lib/prisma";
import BuilderClient from "./BuilderClient";

export default async function BuildersPage() {
  const builders = await prisma.builder.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Builders</h2>
        <p className="text-accent">Manage real estate builders and developers</p>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm p-6">
        <BuilderClient initialBuilders={builders} />
      </div>
    </div>
  );
}
