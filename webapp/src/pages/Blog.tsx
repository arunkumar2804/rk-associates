import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';

const DUMMY_POSTS = [
  { img: '/assets/images/6d4e9c42-e45a-498c-a374-e31fa0ea731d.avif', title: 'The Rise of Luxury Villas in North Bengaluru', date: 'Oct 12, 2026', cat: 'Market Trends' },
  { img: '/assets/images/6dbec011-6386-4293-82a4-33c327e15764.avif', title: '5 Things to Check Before Buying an Under-Construction Property', date: 'Sep 28, 2026', cat: 'Buying Guide' },
  { img: '/assets/images/9e4f05e1-c889-48dc-b3a3-1353c1a874d0.avif', title: 'Understanding RERA: A Guide for First-Time Homebuyers', date: 'Sep 15, 2026', cat: 'Legal' },
  { img: '/assets/images/a0afd551-fd8c-4328-b5fa-46f1a7125338.avif', title: 'Why Whitefield Remains a Top Choice for IT Professionals', date: 'Sep 02, 2026', cat: 'Neighborhoods' }
];

export const Blog = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '120px 32px 100px', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ background: '#FFF4ED', color: '#F06400', padding: '6px 16px', borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 24 }}>
          Coming Soon
        </div>
        <p style={{ fontSize: 18, color: '#6B5F52', maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
          We are currently working on our blog. Check back soon for updates!
        </p>
      </section>
    </motion.div>
  );
};
