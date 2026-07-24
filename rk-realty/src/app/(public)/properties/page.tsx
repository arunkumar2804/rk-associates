import { getSettings } from "@/lib/settings";
import { propertiesData } from "@/data/properties";
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

  const rentals = [
    {
      id: 1,
      name: "Brigade Gateway",
      location: "Rajajinagar, Bengaluru",
      slug: "brigade-gateway",
      image: "/assets/images/placeholder.avif",
      highlights: [
        "Premium Residential Community",
        "Adjacent to Orion Mall",
        "World-Class Clubhouse",
        "Metro Connectivity",
        "Close to Business Hubs"
      ]
    },
    {
      id: 2,
      name: "Phoenix One Bengaluru West",
      location: "Rajajinagar, Bengaluru",
      slug: "phoenix-one-bengaluru-west",
      image: "/assets/images/placeholder.avif",
      highlights: [
        "Luxury High-Rise Residences",
        "Premium Lifestyle Amenities",
        "Spacious Configurations",
        "Prime Central Bengaluru Location",
        "Excellent Connectivity"
      ]
    }
  ];

  return <PropertiesClient properties={properties} rentals={rentals} />;
}
