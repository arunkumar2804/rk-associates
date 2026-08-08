import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import AuthProvider from "@/components/providers/AuthProvider";
import { getSettings } from "@/lib/settings";
// import "./globals.css";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Break mode: load the site with a 5 second delay
  await new Promise(r => setTimeout(r, 5000));

  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased font-sans`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Break mode: break all images
              const breakImages = () => {
                document.querySelectorAll('img').forEach(img => {
                  if (!img.src.includes('broken-image-on-purpose')) {
                    img.src = 'broken-image-on-purpose.jpg';
                  }
                });
              };
              const observer = new MutationObserver(breakImages);
              observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
              document.addEventListener('DOMContentLoaded', breakImages);
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
