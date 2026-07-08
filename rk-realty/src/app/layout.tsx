import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import AuthProvider from "@/components/providers/AuthProvider";
import { prisma } from "@/lib/prisma";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await prisma.websiteSetting.findFirst();
  return {
    title: settings?.globalSeoTitle || "RK Associates Trusted Real Estate Channel Partner",
    description: settings?.globalSeoDescription || "Premium real estate consultancy in Bengaluru. Find your dream home or commercial space with RK Associates.",
    keywords: settings?.globalSeoKeywords || undefined,
    icons: {
      icon: settings?.faviconUrl || "/favicon.ico",
    },
  };
}

export const viewport = {
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
