"use client";

import { useState } from "react";
import SettingsClient from "./SettingsClient";
import UserManagementClient from "./UserManagementClient";
import { Globe, Users } from "lucide-react";
import { WebsiteSetting } from "@prisma/client";

interface SettingsTabsProps {
  settings: WebsiteSetting | null;
  isFullControl: boolean;
}

export default function SettingsTabs({ settings, isFullControl }: SettingsTabsProps) {
  const [activeTab, setActiveTab] = useState<"website" | "users">("website");

  return (
    <div className="space-y-6">
      {/* Tab Header Navigation */}
      {isFullControl && (
        <div className="flex border-b border-border bg-card rounded-xl p-1.5 gap-2 w-fit shadow-sm">
          <button
            onClick={() => setActiveTab("website")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === "website"
                ? "bg-primary text-white shadow-sm"
                : "text-accent hover:text-foreground hover:bg-background"
            }`}
          >
            <Globe size={18} />
            Website Settings
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === "users"
                ? "bg-primary text-white shadow-sm"
                : "text-accent hover:text-foreground hover:bg-background"
            }`}
          >
            <Users size={18} />
            User Management
          </button>
        </div>
      )}

      {/* Warning banner for users without Full Control */}
      {!isFullControl && (
        <div className="p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-xl flex items-center gap-3 text-sm font-medium">
          ⚠️ Notice: You have limited permissions. Saving settings or managing users is disabled.
        </div>
      )}

      {/* Render active panel */}
      {activeTab === "website" ? (
        <SettingsClient initialSettings={settings} />
      ) : (
        <UserManagementClient />
      )}
    </div>
  );
}
