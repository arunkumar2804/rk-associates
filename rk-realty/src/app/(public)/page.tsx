import { Hero } from '@/components/frontend/Home/Hero';
import { TrustBar } from '@/components/frontend/Home/TrustBar';
import { FeaturedDevelopers } from '@/components/frontend/Home/FeaturedDevelopers';
import { AboutTeaser } from '@/components/frontend/Home/AboutTeaser';
import { ServicesOverview } from '@/components/frontend/Home/ServicesOverview';
import { FeaturedProperties } from '@/components/frontend/Home/FeaturedProperties';
import { StatsBand } from '@/components/frontend/Home/StatsBand';
import { ContactCTA } from '@/components/frontend/Home/ContactCTA';

export default function Home() {
  const UNDER_CONSTRUCTION = true;

  if (UNDER_CONSTRUCTION) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-gray-50/50">
        <div className="w-20 h-20 mb-6 text-blue-600 animate-pulse mx-auto">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Website Under Construction</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          RK Associates is currently upgrading our digital experience. We will be back shortly with a brand new website!
        </p>
      </div>
    );
  }

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
