import { motion } from 'framer-motion'
import { Hero } from '../components/Home/Hero'
import { TrustBar } from '../components/Home/TrustBar'
import { FeaturedDevelopers } from '../components/Home/FeaturedDevelopers'
import { AboutTeaser } from '../components/Home/AboutTeaser'
import { ServicesOverview } from '../components/Home/ServicesOverview'
import { FeaturedProperties } from '../components/Home/FeaturedProperties'
import { StatsBand } from '../components/Home/StatsBand'
import { ContactCTA } from '../components/Home/ContactCTA'

const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
)

export const Home = () => {
  return (
    <>
      <Hero />
      <FadeIn><TrustBar /></FadeIn>
      <FadeIn><FeaturedDevelopers /></FadeIn>
      <FadeIn><AboutTeaser /></FadeIn>
      <FadeIn><ServicesOverview /></FadeIn>
      <FadeIn><FeaturedProperties /></FadeIn>
      <FadeIn><StatsBand /></FadeIn>
      <FadeIn><ContactCTA /></FadeIn>
    </>
  )
}
