"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { 
  LayoutDashboard, 
  Building, 
  MapPin, 
  MessageSquare, 
  Users, 
  Settings, 
  LogOut,
  Menu
} from "lucide-react";
import clsx from "clsx";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Properties", href: "/admin/properties", icon: Building },
  { name: "Builders", href: "/admin/builders", icon: Building },
  { name: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
  { name: "Customers", href: "/admin/customers", icon: Users },
  { name: "Locations", href: "/admin/locations", icon: MapPin },
  { name: "Amenities", href: "/admin/amenities", icon: Settings },
  { name: "Property Types", href: "/admin/property-types", icon: Settings },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const saved = localStorage.getItem("admin_sidebar_collapsed");
    if (saved === "true") setIsCollapsed(true);
  }, []);

  const toggleCollapse = () => {
    const nextState = !isCollapsed;
    setIsCollapsed(nextState);
    localStorage.setItem("admin_sidebar_collapsed", String(nextState));
  };

  const isFullControl = session?.user?.role === "DEVELOPER" || session?.user?.isFullControl === true;

  const filteredItems = navItems.filter(item => {
    // Hide administrative configurations for non-full-control accounts
    if (!isFullControl) {
      if (item.name === "Settings" || item.name === "Amenities" || item.name === "Property Types") {
        return false;
      }
    }
    return true;
  });

  return (
    <div className={clsx(
      "bg-sidebar text-sidebar-fg min-h-screen flex flex-col transition-all duration-300 ease-in-out",
      isCollapsed ? "w-20" : "w-64"
    )}>
      <div className={clsx(
        "p-6 flex items-center justify-between",
        isCollapsed && "flex-col gap-4 !px-4"
      )}>
        {!isCollapsed ? (
          <div>
            <h1 className="text-2xl font-bold tracking-wider">RK REALTY</h1>
            <p className="text-accent text-xs mt-1">Admin Panel</p>
          </div>
        ) : (
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-lg shadow-md">
            RK
          </div>
        )}
        <button 
          onClick={toggleCollapse}
          className="p-1.5 hover:bg-sidebar-hover text-gray-300 hover:text-white rounded-lg transition-colors cursor-pointer"
          title={isCollapsed ? "Expand Menu" : "Collapse Menu"}
        >
          <Menu size={20} />
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.name}
              href={item.href}
              prefetch={false}
              className={clsx(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all font-semibold whitespace-nowrap overflow-hidden",
                isActive ? "bg-sidebar-fg text-sidebar shadow-md" : "text-gray-300 hover:bg-sidebar-hover hover:text-white",
                isCollapsed && "justify-center !px-0"
              )}
              title={isCollapsed ? item.name : undefined}
            >
              <Icon size={20} className="flex-shrink-0" />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-hover">
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className={clsx(
            "flex items-center gap-3 px-3 py-2.5 w-full text-left text-gray-300 hover:bg-sidebar-hover hover:text-white rounded-lg transition-all font-semibold whitespace-nowrap overflow-hidden",
            isCollapsed && "justify-center !px-0"
          )}
          title={isCollapsed ? "Logout" : undefined}
        >
          <LogOut size={20} className="flex-shrink-0" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}
