import { prisma } from "@/lib/prisma";
import ContactClient from "./ContactClient";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await prisma.websiteSetting.findFirst();
  return {
    title: `Contact Us | ${settings?.companyName || "RK Associates"}`,
    description: settings?.globalSeoDescription || "Get in touch with RK Associates real estate experts.",
  };
}

export default async function ContactPage() {
  const settings = await prisma.websiteSetting.findFirst();

  return (
    <ContactClient settings={settings} />
  );
}
