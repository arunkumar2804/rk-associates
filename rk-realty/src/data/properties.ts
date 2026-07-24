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
    locationName: "Bannerghatta Road, Bengaluru",
    propertyTypeName: "Apartment",
    startingPrice: "Contact for price",
    coverImage: "/assets/images/banners/godrej-vanantara-new.avif",
    reraNumber: "",
    description: "Godrej Vanantara is a thoughtfully planned residential community located on the rapidly developing Bannerghatta Road corridor. Designed around the concept of nature-inspired living, the project offers spacious residences complemented by extensive open spaces, landscaped gardens, and premium lifestyle amenities.\n\nIts strategic location provides convenient access to major employment hubs, educational institutions, healthcare facilities, and entertainment destinations, making it an attractive choice for both end-users and investors.\n\nWith contemporary architecture, modern conveniences, and the trust of Godrej Properties, Vanantara offers a balanced lifestyle that combines urban connectivity with serene living.",
    possessionDate: "2028-06-30T00:00:00.000Z",
    isFeatured: true,
    status: "ACTIVE",
    amenities: "Premium 3 & 4 BHK Residences, 70%+ Open Green Spaces, Grand Clubhouse, Swimming Pool, Sports & Wellness Facilities, Landscaped Gardens",
    configurations: [
      { id: "c1", type: "3 BHK", area: "Various", price: "Contact for price" },
      { id: "c2", type: "4 BHK", area: "Various", price: "Contact for price" }
    ],
    galleryImages: [],
    floorPlans: [],
    seoTitle: "Godrej Vanantara | RK Associates",
    seoDescription: "Nature-Inspired Luxury Living in South Bengaluru."
  },
  {
    id: "sobha-one-world",
    name: "Sobha One World",
    slug: "sobha-one-world",
    builder: {
      id: "sobha",
      name: "SOBHA",
      logo: null
    },
    locationName: "Hoskote, Bengaluru",
    propertyTypeName: "Township",
    startingPrice: "Contact for price",
    coverImage: "/assets/images/banners/sobha-one-world-new.avif",
    reraNumber: "",
    description: "Sobha One World is envisioned as a landmark integrated township that redefines community living in East Bengaluru. Designed with a focus on sustainability, connectivity, and lifestyle, the project offers residents an environment where convenience and comfort coexist seamlessly.\n\nThe township integrates residential spaces, recreational amenities, landscaped open areas, and future infrastructure, creating a comprehensive ecosystem for modern families.\n\nLocated in the emerging Hoskote corridor, Sobha One World presents a compelling opportunity for homeowners seeking a quality lifestyle and investors looking at long-term growth potential.",
    possessionDate: "2029-12-31T00:00:00.000Z",
    isFeatured: true,
    status: "ACTIVE",
    amenities: "Integrated Township Development, Premium Residential Community, Large Open Green Spaces, Modern Lifestyle Amenities, Strategic Connectivity, Future Growth Corridor, Community-Centric Living",
    configurations: [
      { id: "s1", type: "Apartment", area: "Various", price: "Contact for price" }
    ],
    galleryImages: [],
    floorPlans: [],
    seoTitle: "Sobha One World | RK Associates",
    seoDescription: "A New Era of Township Living in Hoskote, Bengaluru."
  },
  {
    id: "embassy-springs",
    name: "Embassy Springs",
    slug: "embassy-springs",
    builder: {
      id: "embassy-group",
      name: "Embassy Group",
      logo: null
    },
    locationName: "Devanahalli, Bengaluru",
    propertyTypeName: "Township",
    startingPrice: "Contact for price",
    coverImage: "/assets/images/placeholder.avif",
    reraNumber: "",
    description: "Embassy Springs is one of Bengaluru's most ambitious township developments, spanning a vast area in the rapidly growing Devanahalli region. Designed to create a self-sustaining community, the township combines residential, educational, healthcare, retail, and recreational infrastructure within one master-planned environment.\n\nIts proximity to Kempegowda International Airport and upcoming infrastructure developments makes it a highly attractive destination for both homebuyers and investors.\n\nWith world-class planning, premium amenities, and a focus on long-term livability, Embassy Springs represents the future of integrated township living in Bengaluru.",
    possessionDate: "2027-12-31T00:00:00.000Z",
    isFeatured: true,
    status: "ACTIVE",
    amenities: "Integrated Township Development, Premium Residential Community, Extensive Green Spaces, Airport Corridor Location, Schools & Healthcare Facilities, Lifestyle Amenities, Future Infrastructure Growth",
    configurations: [
      { id: "e1", type: "Apartment/Plot", area: "Various", price: "Contact for price" }
    ],
    galleryImages: [],
    floorPlans: [],
    seoTitle: "Embassy Springs | RK Associates",
    seoDescription: "Discover Township Living at an Unprecedented Scale in Devanahalli, Bengaluru."
  }
];
