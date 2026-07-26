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
    coverImage: "/assets/images/banners/godrej-vanantara-new.avif?v=2",
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
    galleryImages: [
    {
        "id": "g0",
        "url": "/assets/images/godrej_vanantara/screenshot-2026-07-21-at-23610-pm-1.avif?v=2"
    },
    {
        "id": "g1",
        "url": "/assets/images/godrej_vanantara/screenshot-2026-07-21-at-23622-pm-1.avif?v=2"
    },
    {
        "id": "g2",
        "url": "/assets/images/godrej_vanantara/screenshot-2026-07-21-at-23639-pm-1.avif?v=2"
    },
    {
        "id": "g3",
        "url": "/assets/images/godrej_vanantara/screenshot-2026-07-21-at-23659-pm-1.avif?v=2"
    },
    {
        "id": "g4",
        "url": "/assets/images/godrej_vanantara/screenshot-2026-07-21-at-23714-pm-1.avif?v=2"
    },
    {
        "id": "g5",
        "url": "/assets/images/godrej_vanantara/screenshot-2026-07-21-at-23719-pm-1.avif?v=2"
    },
    {
        "id": "g6",
        "url": "/assets/images/godrej_vanantara/screenshot-2026-07-21-at-23803-pm-1.avif?v=2"
    },
    {
        "id": "g7",
        "url": "/assets/images/godrej_vanantara/screenshot-2026-07-21-at-23816-pm-1.avif?v=2"
    },
    {
        "id": "g8",
        "url": "/assets/images/godrej_vanantara/screenshot-2026-07-21-at-23835-pm-1.avif?v=2"
    },
    {
        "id": "g9",
        "url": "/assets/images/godrej_vanantara/screenshot-2026-07-21-at-23859-pm-1.avif?v=2"
    },
    {
        "id": "g10",
        "url": "/assets/images/godrej_vanantara/screenshot-2026-07-21-at-23923-pm-1.avif?v=2"
    },
    {
        "id": "g11",
        "url": "/assets/images/godrej_vanantara/screenshot-2026-07-21-at-23937-pm-1.avif?v=2"
    },
    {
        "id": "g12",
        "url": "/assets/images/godrej_vanantara/screenshot-2026-07-21-at-23948-pm-1.avif?v=2"
    }
],
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
    coverImage: "/assets/images/banners/sobha-one-world-new.avif?v=2",
    reraNumber: "",
    description: "Sobha One World is envisioned as a landmark integrated township that redefines community living in East Bengaluru. Designed with a focus on sustainability, connectivity, and lifestyle, the project offers residents an environment where convenience and comfort coexist seamlessly.\n\nThe township integrates residential spaces, recreational amenities, landscaped open areas, and future infrastructure, creating a comprehensive ecosystem for modern families.\n\nLocated in the emerging Hoskote corridor, Sobha One World presents a compelling opportunity for homeowners seeking a quality lifestyle and investors looking at long-term growth potential.",
    possessionDate: "2029-12-31T00:00:00.000Z",
    isFeatured: true,
    status: "ACTIVE",
    amenities: "Integrated Township Development, Premium Residential Community, Large Open Green Spaces, Modern Lifestyle Amenities, Strategic Connectivity, Future Growth Corridor, Community-Centric Living",
    configurations: [
      { id: "s1", type: "Apartment", area: "Various", price: "Contact for price" }
    ],
    galleryImages: [
    {
        "id": "s0",
        "url": "/assets/images/sobha_one_world/1-6723.avif?v=2"
    },
    {
        "id": "s1",
        "url": "/assets/images/sobha_one_world/2-10.avif?v=2"
    },
    {
        "id": "s2",
        "url": "/assets/images/sobha_one_world/3-10.avif?v=2"
    },
    {
        "id": "s3",
        "url": "/assets/images/sobha_one_world/4-2.avif?v=2"
    },
    {
        "id": "s4",
        "url": "/assets/images/sobha_one_world/screenshot-2026-07-21-at-93822-pm-1.avif?v=2"
    },
    {
        "id": "s5",
        "url": "/assets/images/sobha_one_world/screenshot-2026-07-21-at-93841-pm-1.avif?v=2"
    },
    {
        "id": "s6",
        "url": "/assets/images/sobha_one_world/screenshot-2026-07-21-at-93901-pm-1.avif?v=2"
    },
    {
        "id": "s7",
        "url": "/assets/images/sobha_one_world/screenshot-2026-07-21-at-93923-pm-1.avif?v=2"
    },
    {
        "id": "s8",
        "url": "/assets/images/sobha_one_world/screenshot-2026-07-21-at-93938-pm-1.avif?v=2"
    },
    {
        "id": "s9",
        "url": "/assets/images/sobha_one_world/screenshot-2026-07-21-at-93954-pm-1.avif?v=2"
    },
    {
        "id": "s10",
        "url": "/assets/images/sobha_one_world/screenshot-2026-07-21-at-94010-pm-1.avif?v=2"
    }
],
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
    coverImage: "/assets/images/embassy_springs/gallery1-zoom-1.avif?v=2",
    reraNumber: "",
    description: "Embassy Springs is one of Bengaluru's most ambitious township developments, spanning a vast area in the rapidly growing Devanahalli region. Designed to create a self-sustaining community, the township combines residential, educational, healthcare, retail, and recreational infrastructure within one master-planned environment.\n\nIts proximity to Kempegowda International Airport and upcoming infrastructure developments makes it a highly attractive destination for both homebuyers and investors.\n\nWith world-class planning, premium amenities, and a focus on long-term livability, Embassy Springs represents the future of integrated township living in Bengaluru.",
    possessionDate: "2027-12-31T00:00:00.000Z",
    isFeatured: true,
    status: "ACTIVE",
    amenities: "Integrated Township Development, Premium Residential Community, Extensive Green Spaces, Airport Corridor Location, Schools & Healthcare Facilities, Lifestyle Amenities, Future Infrastructure Growth",
    configurations: [
      { id: "e1", type: "Apartment/Plot", area: "Various", price: "Contact for price" }
    ],
    galleryImages: [
      { id: "e-g1", url: "/assets/images/embassy_springs/gallery1-zoom-1.avif?v=2" },
      { id: "e-g2", url: "/assets/images/embassy_springs/gallery2-zoom-1.avif?v=2" },
      { id: "e-g3", url: "/assets/images/embassy_springs/gallery3-zoom-1.avif?v=2" },
      { id: "e-g4", url: "/assets/images/embassy_springs/gallery5-zoom-1.avif?v=2" }
    ],
    floorPlans: [],
    seoTitle: "Embassy Springs | RK Associates",
    seoDescription: "Discover Township Living at an Unprecedented Scale in Devanahalli, Bengaluru."
  },
  {
    id: "lodha-sadahalli",
    name: "Lodha Sadahalli",
    slug: "lodha-sadahalli",
    builder: {
      id: "lodha",
      name: "Lodha",
      logo: null
    },
    locationName: "Sadahalli, North Bengaluru",
    propertyTypeName: "Ultra Luxury Township",
    startingPrice: "Contact for price",
    coverImage: "/assets/images/lodha/screenshot-2026-07-21-at-94502-pm-1.avif?v=2",
    reraNumber: "",
    description: "Lodha Sadahalli is a landmark ultra-luxury residential development located in the rapidly evolving North Bengaluru corridor. Spread across 70 acres, the township is designed to offer an elevated lifestyle where nature, wellness, and timeless neo-classical architecture exist in perfect harmony.\n\nInspired by the unique Four Blooms landscape concept, the community transforms with vibrant seasonal flowering trees, creating a living environment that is both picturesque and tranquil throughout the year. Low-density planning, expansive open spaces, and thoughtfully designed residences ensure enhanced privacy, abundant natural light, and a refined living experience.\n\nIts strategic location provides seamless connectivity to Kempegowda International Airport, major business districts, educational institutions, healthcare facilities, and lifestyle destinations, making Lodha Sadahalli an exceptional choice for discerning homeowners and long-term investors seeking luxury, convenience, and lasting value.",
    possessionDate: "2029-12-31T00:00:00.000Z",
    isFeatured: true,
    status: "ACTIVE",
    amenities: "70-Acre Ultra Luxury Township, 85% Open Green Spaces, Low-Density Living (30-35 Residences Per Acre), 4 Residences Per Floor, Grand 2-Acre Clubhouse, Stunning Views of Navaratna Agrahara Lake, Premium Wellness & Sports Amenities",
    configurations: [
      { id: "l1", type: "Ultra Luxury Residences", area: "Various", price: "Contact for price" }
    ],
    galleryImages: [
      { id: "l-g1", url: "/assets/images/lodha/screenshot-2026-07-21-at-94502-pm-1.avif?v=2" },
      { id: "l-g2", url: "/assets/images/lodha/screenshot-2026-07-21-at-94517-pm-1.avif?v=2" },
      { id: "l-g3", url: "/assets/images/lodha/screenshot-2026-07-21-at-94532-pm-1.avif?v=2" },
      { id: "l-g4", url: "/assets/images/lodha/screenshot-2026-07-21-at-94546-pm-1.avif?v=2" },
      { id: "l-g5", url: "/assets/images/lodha/screenshot-2026-07-21-at-94600-pm-1.avif?v=2" }
    ],
    floorPlans: [],
    seoTitle: "Lodha Sadahalli | RK Associates",
    seoDescription: "Experience a New Era of Ultra-Luxury Living in North Bengaluru."
  }
];
