import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import SettingsTabs from "./SettingsTabs";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);
  const settings = await prisma.websiteSetting.findFirst();

  // If role is Developer or user has isFullControl flag
  const isFullControl = session?.user?.role === "DEVELOPER" || session?.user?.isFullControl === true;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">System Settings</h2>
          <p className="text-accent">Manage website identity, global SEO parameters, and team permissions</p>
        </div>
      </div>

      <SettingsTabs settings={settings} isFullControl={isFullControl} />
    </div>
  );
}
