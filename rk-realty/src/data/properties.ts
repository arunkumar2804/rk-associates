export interface PropertyData {
  id: string;
  name: string;
  slug: string;
  builder: {
    id: string;
    name: string;
    logo: string | null;
  };
  locationName: string;
  propertyTypeName: string;
  startingPrice: string;
  coverImage: string;
  reraNumber: string;
  description: string;
  possessionDate: string;
  isFeatured: boolean;
  status: string;
  amenities: string;
  configurations: Array<{
    id: string;
    type: string;
    area: string;
    price: string;
  }>;
  galleryImages: Array<{
    id: string;
    url: string;
  }>;
  floorPlans: Array<{
    id: string;
    url: string;
  }>;
  seoTitle: string;
  seoDescription: string;
}

export const propertiesData: PropertyData[] = [
  {
    id: "godrej-vanantara",
    name: "Godrej Vanantara",
    slug: "godrej-vanantara",
    builder: {
      id: "godrej-properties",
      name: "Godrej Properties",
      logo: null
    },
    locationName: "Budigere Cross",
    propertyTypeName: "Apartment",
    startingPrice: "₹ 68 L onwards",
    coverImage: "/assets/images/banners/godrej-vanantara-1.avif",
    reraNumber: "PRM/KA/RERA/1251/446/PR/210302/003982",
    description: "Godrej Vanantara is a premium residential development offering 2 & 3 BHK homes designed for modern lifestyle. Spanned across lush green landscape, it brings nature and luxury together.",
    possessionDate: "2028-06-30T00:00:00.000Z",
    isFeatured: true,
    status: "ACTIVE",
    amenities: "Swimming Pool, Gymnasium, 24/7 Security, Clubhouse, Power Backup",
    configurations: [
      { id: "c1", type: "2 BHK", area: "1100 sqft", price: "₹ 68 L*" },
      { id: "c2", type: "3 BHK", area: "1450 sqft", price: "₹ 89 L*" }
    ],
    galleryImages: [],
    floorPlans: [],
    seoTitle: "",
    seoDescription: ""
  },
  {
    id: "prestige-lakeside-habitat",
    name: "Prestige Lakeside Habitat",
    slug: "prestige-lakeside-habitat",
    builder: {
      id: "prestige-group",
      name: "Prestige Group",
      logo: null
    },
    locationName: "Whitefield",
    propertyTypeName: "Apartment",
    startingPrice: "₹ 1.1 Cr onwards",
    coverImage: "/assets/images/a0afd551-fd8c-4328-b5fa-46f1a7125338.avif",
    reraNumber: "PRM/KA/RERA/1251/446/PR/170915/000100",
    description: "Prestige Lakeside Habitat is a sprawling luxury enclave overlooking the scenic Varthur Lake. Spread across 102 acres, it offers apartments and villas surrounded by pristine open spaces.",
    possessionDate: "2025-12-31T00:00:00.000Z",
    isFeatured: true,
    status: "ACTIVE",
    amenities: "Swimming Pool, Gymnasium, 24/7 Security, Clubhouse, Power Backup",
    configurations: [
      { id: "c3", type: "3 BHK", area: "1650 sqft", price: "₹ 1.1 Cr*" },
      { id: "c4", type: "4 BHK Villa", area: "3130 sqft", price: "₹ 2.8 Cr*" }
    ],
    galleryImages: [],
    floorPlans: [],
    seoTitle: "",
    seoDescription: ""
  },
  {
    id: "sattva-hamlet",
    name: "Sattva Hamlet",
    slug: "sattva-hamlet",
    builder: {
      id: "sattva-group",
      name: "Sattva Group",
      logo: null
    },
    locationName: "Yelahanka",
    propertyTypeName: "Villa",
    startingPrice: "₹ 52 L onwards",
    coverImage: "/assets/images/9e4f05e1-c889-48dc-b3a3-1353c1a874d0.avif",
    reraNumber: "PRM/KA/RERA/1251/309/PR/201026/003672",
    description: "Sattva Hamlet offers exclusive villa plots and row houses in the serene surroundings of Yelahanka, North Bengaluru. Experience tranquil living with excellent connectivity.",
    possessionDate: "2026-08-30T00:00:00.000Z",
    isFeatured: true,
    status: "ACTIVE",
    amenities: "Swimming Pool, Gymnasium, 24/7 Security, Clubhouse, Power Backup",
    configurations: [
      { id: "c5", type: "Villa Plot", area: "1200 - 2400 sqft", price: "₹ 52 L*" },
      { id: "c6", type: "3 BHK Row House", area: "2100 sqft", price: "₹ 1.4 Cr*" }
    ],
    galleryImages: [],
    floorPlans: [],
    seoTitle: "",
    seoDescription: ""
  }
];
