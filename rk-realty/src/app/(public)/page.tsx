import { Hero } from '@/components/frontend/Home/Hero';
import { TrustBar } from '@/components/frontend/Home/TrustBar';
import { FeaturedDevelopers } from '@/components/frontend/Home/FeaturedDevelopers';
import { AboutTeaser } from '@/components/frontend/Home/AboutTeaser';
import { ServicesOverview } from '@/components/frontend/Home/ServicesOverview';
import { FeaturedProperties } from '@/components/frontend/Home/FeaturedProperties';
import { StatsBand } from '@/components/frontend/Home/StatsBand';
import { ContactCTA } from '@/components/frontend/Home/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedDevelopers />
      <AboutTeaser />
      <ServicesOverview />
      <FeaturedProperties />
      <StatsBand />
      <ContactCTA />
    </>
  );
}
