import { cache } from 'react';
import { prisma } from '@/lib/prisma';

export const getSettings = cache(async () => {
  const settings = await prisma.websiteSetting.findFirst();
  return settings;
});
