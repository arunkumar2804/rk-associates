import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import AuthProvider from "@/components/providers/AuthProvider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "RK Associates Trusted Real Estate Channel Partner",
  description: "Premium real estate consultancy in Bengaluru. Find your dream home or commercial space with RK Associates.",
};

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
