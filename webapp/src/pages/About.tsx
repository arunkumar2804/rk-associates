import { motion } from 'framer-motion';
import { Target, Eye, Shield, Users } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const About = () => {
  return (
    <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <PageBanner 
        imageSrc="/assets/images/banners/about-us-1.avif"
        title="Redefining Real Estate Consulting"
        subtitle="For over a decade, RK Associates has been the trusted bridge between discerning home buyers and Bengaluru's most prestigious developers."
      />

      {/* Mission & Vision */}
      <section style={{ padding: '100px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
          <motion.div variants={fadeIn} className="card-hover" style={{ background: '#FFFFFF', padding: 48, borderRadius: 24, border: '1px solid rgba(43,36,29,0.06)' }}>
            <Target size={40} color="#F06400" style={{ marginBottom: 24 }} />
            <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 32, fontWeight: 600, marginBottom: 16 }}>Our Mission</h2>
            <p style={{ fontSize: 16, color: '#4A4038', lineHeight: 1.7 }}>
              To empower home buyers with transparent, data-driven insights and exclusive access to the best properties, ensuring a seamless and rewarding real estate journey.
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="card-hover" style={{ background: '#FFFFFF', padding: 48, borderRadius: 24, border: '1px solid rgba(43,36,29,0.06)' }}>
            <Eye size={40} color="#F06400" style={{ marginBottom: 24 }} />
            <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 32, fontWeight: 600, marginBottom: 16 }}>Our Vision</h2>
            <p style={{ fontSize: 16, color: '#4A4038', lineHeight: 1.7 }}>
              To be the most trusted and universally recognized channel partner in South India, known for our unwavering integrity and unparalleled customer service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '80px 32px', background: '#EAE1D3' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 40, fontWeight: 600, marginBottom: 48 }}>Our Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { icon: <Shield size={32} />, title: "Integrity", desc: "Absolute transparency in every transaction." },
              { icon: <Users size={32} />, title: "Client First", desc: "Your needs dictate our strategy." },
              { icon: <Target size={32} />, title: "Excellence", desc: "Delivering premium experiences at every touchpoint." }
            ].map((val, i) => (
              <motion.div key={i} variants={fadeIn} className="card-hover" style={{ background: '#F7F2EA', padding: 40, borderRadius: 20 }}>
                <div style={{ color: '#F06400', marginBottom: 20, display: 'flex', justifyContent: 'center' }}>{val.icon}</div>
                <h3 style={{ fontFamily: '"Sora", sans-serif', fontSize: 22, fontWeight: 600, marginBottom: 12 }}>{val.title}</h3>
                <p style={{ fontSize: 15, color: '#4A4038' }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
