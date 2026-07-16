import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import AuthProvider from "@/components/providers/AuthProvider";
import { getSettings } from "@/lib/settings";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
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
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#2B241D",
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
