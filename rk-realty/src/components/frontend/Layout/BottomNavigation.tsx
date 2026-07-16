"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Building2, Key, FileText, Phone } from "lucide-react";
import { motion } from "framer-motion";

export const BottomNavigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/properties", label: "Properties", icon: Building2 },
    { href: "/rentals", label: "Rentals", icon: Key },
    { href: "/blog", label: "Blog", icon: FileText },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-xl border-t border-[rgba(43,36,29,0.06)] pb-safe rounded-t-3xl shadow-[0_-4px_24px_rgba(43,36,29,0.04)]">
      <div className="flex justify-around items-center px-2 py-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link 
              key={item.href} 
              href={item.href}
              className="relative flex flex-col items-center justify-center w-16 h-12"
            >
              {isActive && (
                <motion.div
                  layoutId="bottom-nav-active"
                  className="absolute inset-0 bg-[#F06400]/10 rounded-2xl"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <motion.div 
                className="relative z-10 flex flex-col items-center gap-1"
                animate={{
                  y: isActive ? -2 : 0,
                  scale: isActive ? 1.05 : 1
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Icon 
                  size={22} 
                  strokeWidth={isActive ? 2.5 : 2} 
                  color={isActive ? "#F06400" : "#9F9C97"} 
                />
                <span className={`text-[10px] font-sora ${isActive ? 'font-bold text-[#F06400]' : 'font-medium text-[#9F9C97]'}`}>
                  {item.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
