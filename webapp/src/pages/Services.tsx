import { motion } from 'framer-motion';
import { Home, Key, TrendingUp, ShieldCheck } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const Services = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero */}
      <section style={{ padding: '80px 32px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 48, fontWeight: 700, marginBottom: 20 }}>Our Services</h1>
        <p style={{ fontSize: 18, color: '#4A4038', maxWidth: 600, margin: '0 auto' }}>
          Comprehensive real estate solutions designed to navigate Bengaluru's dynamic market.
        </p>
      </section>

      {/* Bento Grid */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 100px' }}>
        <motion.div variants={container} initial="hidden" animate="show" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24, gridAutoRows: 'minmax(250px, auto)' }}>
          
          {/* Main Service 1 */}
          <motion.div variants={item} className="card-hover" style={{ gridColumn: 'span 8', background: '#2B241D', color: '#F7F2EA', padding: 48, borderRadius: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Home size={40} color="#F06400" style={{ marginBottom: 24 }} />
            <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 32, marginBottom: 16 }}>Premium Property Sales</h2>
            <p style={{ fontSize: 16, color: 'rgba(247,242,234,0.8)', lineHeight: 1.6, maxWidth: 500 }}>
              Access our exclusive portfolio of ultra-luxury apartments, villas, and penthouses. We provide end-to-end assistance from site visits to negotiation and final handover.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div variants={item} className="card-hover" style={{ gridColumn: 'span 4', background: '#FFFFFF', padding: 40, borderRadius: 24, border: '1px solid rgba(43,36,29,0.06)' }}>
            <TrendingUp size={36} color="#F06400" style={{ marginBottom: 20 }} />
            <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, marginBottom: 12 }}>Investment Advisory</h2>
            <p style={{ fontSize: 15, color: '#4A4038', lineHeight: 1.6 }}>
              Data-backed insights to help you identify high-yield investment properties in emerging corridors.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div variants={item} className="card-hover" style={{ gridColumn: 'span 4', background: '#FFFFFF', padding: 40, borderRadius: 24, border: '1px solid rgba(43,36,29,0.06)' }}>
            <Key size={36} color="#F06400" style={{ marginBottom: 20 }} />
            <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, marginBottom: 12 }}>Corporate Leasing</h2>
            <p style={{ fontSize: 15, color: '#4A4038', lineHeight: 1.6 }}>
              Tailored leasing solutions for HNIs, expats, and corporate executives seeking premium residences.
            </p>
          </motion.div>

          {/* Service 4 */}
          <motion.div variants={item} className="card-hover" style={{ gridColumn: 'span 8', background: '#EAE1D3', padding: 48, borderRadius: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <ShieldCheck size={40} color="#F06400" style={{ marginBottom: 24 }} />
            <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 32, marginBottom: 16 }}>Legal & Financial Assistance</h2>
            <p style={{ fontSize: 16, color: '#4A4038', lineHeight: 1.6, maxWidth: 500 }}>
              We partner with top legal minds and financial institutions to ensure your paperwork is flawless and your home loan is secured at the best possible rates.
            </p>
          </motion.div>

        </motion.div>
      </section>
    </motion.div>
  );
};
