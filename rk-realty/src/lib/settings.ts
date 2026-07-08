import { unstable_cache } from 'next/cache';
import { prisma } from '@/lib/prisma';

export const getSettings = unstable_cache(
  async () => {
    return await prisma.websiteSetting.findFirst();
  },
  ['website-settings'],
  { tags: ['website-settings'], revalidate: 3600 }
);
