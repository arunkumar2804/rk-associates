import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RK Realty Admin - Login",
  description: "Admin Login for RK Associates",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
