import { unstable_cache } from 'next/cache';
import { cache } from 'react';
import { prisma } from '@/lib/prisma';

let settingsPromise: Promise<any> | null = null;

const fetchSettings = () => {
  if (settingsPromise) return settingsPromise;
  settingsPromise = prisma.websiteSetting.findFirst().finally(() => {
    settingsPromise = null;
  });
  return settingsPromise;
};

export const getSettings = cache(
  unstable_cache(
    async () => {
      return await fetchSettings();
    },
    ['website-settings'],
    { tags: ['website-settings'], revalidate: 3600 }
  )
);
