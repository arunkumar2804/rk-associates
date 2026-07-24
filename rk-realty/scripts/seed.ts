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


}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
