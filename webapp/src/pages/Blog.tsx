import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const DUMMY_POSTS = [
  { img: '/assets/images/6d4e9c42-e45a-498c-a374-e31fa0ea731d.avif', title: 'The Rise of Luxury Villas in North Bengaluru', date: 'Oct 12, 2026', cat: 'Market Trends' },
  { img: '/assets/images/6dbec011-6386-4293-82a4-33c327e15764.avif', title: '5 Things to Check Before Buying an Under-Construction Property', date: 'Sep 28, 2026', cat: 'Buying Guide' },
  { img: '/assets/images/9e4f05e1-c889-48dc-b3a3-1353c1a874d0.avif', title: 'Understanding RERA: A Guide for First-Time Homebuyers', date: 'Sep 15, 2026', cat: 'Legal' },
  { img: '/assets/images/a0afd551-fd8c-4328-b5fa-46f1a7125338.avif', title: 'Why Whitefield Remains a Top Choice for IT Professionals', date: 'Sep 02, 2026', cat: 'Neighborhoods' }
];

export const Blog = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Featured Post */}
      <section style={{ padding: '40px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', background: '#2B241D', borderRadius: 24, overflow: 'hidden', display: 'flex' }}>
          <div style={{ flex: 1, padding: '64px 48px', color: '#F7F2EA', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#F06400', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>Featured Article</span>
            <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 42, fontWeight: 600, marginBottom: 24, lineHeight: 1.2 }}>
              Bengaluru Real Estate Outlook: What to Expect in 2027
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(247,242,234,0.7)', marginBottom: 32, lineHeight: 1.6 }}>
              An in-depth analysis of property price trends, infrastructure developments, and emerging micro-markets that are poised for exponential growth.
            </p>
            <button className="btn-hover" style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: 8, background: '#F7F2EA', color: '#2B241D', border: 'none', padding: '14px 28px', borderRadius: 100, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
              Read Full Article <ArrowRight size={16} />
            </button>
          </div>
          <div style={{ flex: 1, minHeight: 400 }}>
            <img src="/assets/images/6d4e9c42-e45a-498c-a374-e31fa0ea731d.avif" alt="Featured post" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 32px 100px' }}>
        <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 32, fontWeight: 600, marginBottom: 40, color: '#2B241D' }}>Latest Insights</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40 }}>
          {DUMMY_POSTS.map((post, i) => (
            <motion.article 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-hover" 
              style={{ display: 'flex', gap: 24, cursor: 'pointer', padding: 20, background: '#FFFFFF', borderRadius: 20, border: '1px solid rgba(43,36,29,0.06)' }}
            >
              <div style={{ width: 200, height: 200, borderRadius: 12, overflow: 'hidden', flex: 'none' }}>
                <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#F06400', marginBottom: 12 }}>{post.cat}</div>
                <h3 style={{ fontFamily: '"Sora", sans-serif', fontSize: 20, fontWeight: 600, color: '#2B241D', marginBottom: 16, lineHeight: 1.4 }}>
                  {post.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#6B5F52' }}>
                  <Calendar size={14} /> {post.date}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
