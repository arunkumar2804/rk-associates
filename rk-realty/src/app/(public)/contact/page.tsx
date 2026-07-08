import { getSettings } from "@/lib/settings";
import ContactClient from "./ContactClient";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  return {
    title: `Contact Us | ${settings?.companyName || "RK Associates"}`,
    description: settings?.globalSeoDescription || "Get in touch with RK Associates real estate experts.",
  };
}

export default async function ContactPage() {
  const settings = await getSettings();

  return (
    <ContactClient settings={settings} />
  );
}
