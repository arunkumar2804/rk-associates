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
      galleryImages: [
      "/assets/images/brigade/img2940-1.avif",
      "/assets/images/brigade/img2941-1.avif",
      "/assets/images/brigade/img2942-1.avif",
      "/assets/images/brigade/img2943-1.avif",
      "/assets/images/brigade/img2944-1.avif",
      "/assets/images/brigade/img2945-1.avif",
      "/assets/images/brigade/img2946-1.avif",
      "/assets/images/brigade/img2947-1.avif",
      "/assets/images/brigade/img2948-1.avif",
      "/assets/images/brigade/img2949-1.avif",
      "/assets/images/brigade/img2950-1.avif",
      "/assets/images/brigade/img2951-1.avif",
      "/assets/images/brigade/img2952-1.avif",
      "/assets/images/brigade/img2953-1.avif",
      "/assets/images/brigade/img2955-1.avif",
      "/assets/images/brigade/img2956-1.avif",
      "/assets/images/brigade/img2957-1.avif",
      "/assets/images/brigade/img2958-1.avif",
      "/assets/images/brigade/img2963-1.avif",
      "/assets/images/brigade/img2967-1.avif",
      "/assets/images/brigade/img2968-1.avif",
      "/assets/images/brigade/img2969-1.avif"
],
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
