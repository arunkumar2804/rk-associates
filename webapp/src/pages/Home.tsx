import { Hero } from '../components/Home/Hero'
import { TrustBar } from '../components/Home/TrustBar'
import { FeaturedDevelopers } from '../components/Home/FeaturedDevelopers'
import { AboutTeaser } from '../components/Home/AboutTeaser'
import { ServicesOverview } from '../components/Home/ServicesOverview'
import { FeaturedProperties } from '../components/Home/FeaturedProperties'
import { StatsBand } from '../components/Home/StatsBand'
import { ContactCTA } from '../components/Home/ContactCTA'

export const Home = () => {
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
  )
}
