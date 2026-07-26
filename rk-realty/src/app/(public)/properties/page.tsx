import { getSettings } from "@/lib/settings";
import { propertiesData } from "@/data/properties";
import { rentalsData } from "@/data/rentals";
import { Metadata } from "next";
import PropertiesClient from "./PropertiesClient";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  return {
    title: settings?.propertiesSeoTitle || `Premium Properties & Rentals in Bengaluru | ${settings?.companyName || "RK Associates"}`,
    description: settings?.propertiesSeoDescription || "Browse curated residential properties, apartments, villas, and premium rentals from top developers in Bengaluru.",
  };
}
export default async function PropertiesPage() {
  const properties = propertiesData;
  const rentals = rentalsData;

  return <PropertiesClient properties={properties} rentals={rentals} />;
}
