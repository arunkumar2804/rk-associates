import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = 'admin@rkrealty.com';
  const adminPassword = 'password123';
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail }
  });

  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        name: 'Super Admin',
        email: adminEmail,
        password: hashedPassword,
        role: 'DEVELOPER'
      }
    });
    console.log('Admin user created successfully.');
  } else {
    console.log('Admin user already exists.');
  }

  // Seed default Website Settings
  const existingSettings = await prisma.websiteSetting.findFirst();
  if (!existingSettings) {
    await prisma.websiteSetting.create({
      data: {
        companyName: 'RK Associates',
        email: 'info@rkrealty.com',
        contactNumber1: '+91 98765 43210',
        officeAddress: 'Level 14, UB City, Vittal Mallya Road, Bengaluru, Karnataka 560001',
      }
    });
    console.log('Website settings initialized.');
  }

  // --- SEED MASTER DATA ---

  // Locations
  const locNames = ['Budigere Cross', 'Whitefield', 'Yelahanka', 'Sarjapur'];
  const locationsMap: Record<string, { id: string }> = {};
  for (const name of locNames) {
    const loc = await prisma.location.upsert({
      where: { name },
      update: {},
      create: { name }
    });
    locationsMap[name] = loc;
  }
  console.log('Locations seeded.');

  // Builders
  const buildersData = [
    { name: 'Godrej Properties', description: 'Innovation, sustainability, and excellence in real estate.' },
    { name: 'Prestige Group', description: 'One of the leading developers in South India.' },
    { name: 'Sobha Limited', description: 'Pioneers of quality and execution excellence.' },
    { name: 'Sattva Group', description: 'Shaping Bengaluru\'s skyline with premium projects.' }
  ];
  const buildersMap: Record<string, { id: string }> = {};
  for (const b of buildersData) {
    const builder = await prisma.builder.upsert({
      where: { id: b.name.toLowerCase().replace(/ /g, '-') },
      update: {},
      create: {
        id: b.name.toLowerCase().replace(/ /g, '-'),
        name: b.name,
        description: b.description
      }
    });
    buildersMap[b.name] = builder;
  }
  console.log('Builders seeded.');

  // Property Types
  const typesList = ['Apartment', 'Villa', 'Plot'];
  const typesMap: Record<string, { id: string }> = {};
  for (const name of typesList) {
    const t = await prisma.propertyType.upsert({
      where: { name },
      update: {},
      create: { name }
    });
    typesMap[name] = t;
  }
  console.log('Property Types seeded.');

  // Amenities
  const amenitiesList = ['Swimming Pool', 'Gymnasium', '24/7 Security', 'Clubhouse', 'Power Backup'];
  const amenitiesMap: Record<string, { id: string }> = {};
  for (const name of amenitiesList) {
    const a = await prisma.amenity.upsert({
      where: { name },
      update: {},
      create: { name }
    });
    amenitiesMap[name] = a;
  }
  console.log('Amenities seeded.');

  // --- SEED PROPERTIES ---
  const propertiesData = [
    {
      name: 'Godrej Vanantara',
      slug: 'godrej-vanantara',
      builderName: 'Godrej Properties',
      locationName: 'Budigere Cross',
      typeName: 'Apartment',
      startingPrice: '₹ 68 L onwards',
      coverImage: '/assets/images/6dbec011-6386-4293-82a4-33c327e15764.avif',
      reraNumber: 'PRM/KA/RERA/1251/446/PR/210302/003982',
      description: 'Godrej Vanantara is a premium residential development offering 2 & 3 BHK homes designed for modern lifestyle. Spanned across lush green landscape, it brings nature and luxury together.',
      possessionDate: new Date('2028-06-30'),
      isFeatured: true,
      configs: [
        { type: '2 BHK', area: '1100 sqft', price: '₹ 68 L*' },
        { type: '3 BHK', area: '1450 sqft', price: '₹ 89 L*' }
      ]
    },
    {
      name: 'Prestige Lakeside Habitat',
      slug: 'prestige-lakeside-habitat',
      builderName: 'Prestige Group',
      locationName: 'Whitefield',
      typeName: 'Apartment',
      startingPrice: '₹ 1.1 Cr onwards',
      coverImage: '/assets/images/a0afd551-fd8c-4328-b5fa-46f1a7125338.avif',
      reraNumber: 'PRM/KA/RERA/1251/446/PR/170915/000100',
      description: 'Prestige Lakeside Habitat is a sprawling luxury enclave overlooking the scenic Varthur Lake. Spread across 102 acres, it offers apartments and villas surrounded by pristine open spaces.',
      possessionDate: new Date('2025-12-31'),
      isFeatured: true,
      configs: [
        { type: '3 BHK', area: '1650 sqft', price: '₹ 1.1 Cr*' },
        { type: '4 BHK Villa', area: '3130 sqft', price: '₹ 2.8 Cr*' }
      ]
    },
    {
      name: 'Sattva Hamlet',
      slug: 'sattva-hamlet',
      builderName: 'Sattva Group',
      locationName: 'Yelahanka',
      typeName: 'Villa',
      startingPrice: '₹ 52 L onwards',
      coverImage: '/assets/images/9e4f05e1-c889-48dc-b3a3-1353c1a874d0.avif',
      reraNumber: 'PRM/KA/RERA/1251/309/PR/201026/003672',
      description: 'Sattva Hamlet offers exclusive villa plots and row houses in the serene surroundings of Yelahanka, North Bengaluru. Experience tranquil living with excellent connectivity.',
      possessionDate: new Date('2026-08-30'),
      isFeatured: true,
      configs: [
        { type: 'Villa Plot', area: '1200 - 2400 sqft', price: '₹ 52 L*' },
        { type: '3 BHK Row House', area: '2100 sqft', price: '₹ 1.4 Cr*' }
      ]
    }
  ];

  for (const p of propertiesData) {
    const builder = buildersMap[p.builderName];
    const location = locationsMap[p.locationName];
    const propertyType = typesMap[p.typeName];

    const prop = await prisma.property.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        name: p.name,
        slug: p.slug,
        builderId: builder.id,
        locationId: location.id,
        propertyTypeId: propertyType.id,
        startingPrice: p.startingPrice,
        coverImage: p.coverImage,
        reraNumber: p.reraNumber,
        description: p.description,
        possessionDate: p.possessionDate,
        isFeatured: p.isFeatured,
        status: 'ACTIVE',
      }
    });

    // Add configs
    for (const c of p.configs) {
      await prisma.configuration.create({
        data: {
          propertyId: prop.id,
          type: c.type,
          area: c.area,
          price: c.price
        }
      });
    }

    // Link amenities
    for (const aName of amenitiesList) {
      const a = amenitiesMap[aName];
      await prisma.propertyAmenity.create({
        data: {
          propertyId: prop.id,
          amenityId: a.id
        }
      });
    }
  }
  console.log('Properties and child relations seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
