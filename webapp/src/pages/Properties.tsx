import { motion } from 'framer-motion';
import { MapPin, BedDouble, Maximize } from 'lucide-react';

const DUMMY_PROPERTIES = [
  { img: '/assets/images/6dbec011-6386-4293-82a4-33c327e15764.avif', title: 'Godrej Vanantara', loc: 'Budigere Cross', bhk: '2 & 3 BHK', size: '1100 - 1600 sqft', price: '₹ 1.2 Cr*' },
  { img: '/assets/images/6d4e9c42-e45a-498c-a374-e31fa0ea731d.avif', title: 'Sobha One World', loc: 'Off Hennur Road', bhk: '3 & 4 BHK', size: '1800 - 2400 sqft', price: '₹ 2.5 Cr*' },
  { img: '/assets/images/a0afd551-fd8c-4328-b5fa-46f1a7125338.avif', title: 'Prestige Lakeside', loc: 'Whitefield', bhk: '3 BHK', size: '1500 - 1900 sqft', price: '₹ 1.8 Cr*' },
  { img: '/assets/images/9e4f05e1-c889-48dc-b3a3-1353c1a874d0.avif', title: 'Sattva Greenage', loc: 'Hosur Road', bhk: '4 BHK Villas', size: '3000+ sqft', price: '₹ 4.5 Cr*' },
  { img: '/assets/images/6dbec011-6386-4293-82a4-33c327e15764.avif', title: 'Brigade Cornerstone', loc: 'Devanahalli', bhk: '2, 3 & 4 BHK', size: '1200 - 2200 sqft', price: '₹ 1.4 Cr*' },
  { img: '/assets/images/6d4e9c42-e45a-498c-a374-e31fa0ea731d.avif', title: 'Purva Skywood', loc: 'Sarjapur', bhk: '3 BHK', size: '1600 sqft', price: '₹ 1.6 Cr*' }
];

export const Properties = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section style={{ padding: '80px 32px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 48, fontWeight: 700, marginBottom: 20 }}>Curated Properties</h1>
        <p style={{ fontSize: 18, color: '#4A4038', maxWidth: 600, margin: '0 auto' }}>
          Explore our handpicked selection of Bengaluru's most sought-after residential developments.
        </p>
      </section>

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {DUMMY_PROPERTIES.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-hover" 
              style={{ background: '#FFFFFF', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(43,36,29,0.08)' }}
            >
              <div style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                <span style={{ position: 'absolute', top: 16, left: 16, background: '#2B241D', color: '#F7F2EA', fontSize: 11, fontWeight: 700, padding: '6px 14px', borderRadius: 100 }}>
                  PREMIUM
                </span>
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontFamily: '"Sora", sans-serif', fontSize: 20, fontWeight: 600, marginBottom: 8, color: '#2B241D' }}>{p.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#6B5F52', fontSize: 14, marginBottom: 20 }}>
                  <MapPin size={16} /> {p.loc}
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24, paddingTop: 16, borderTop: '1px solid rgba(43,36,29,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#4A4038' }}>
                    <BedDouble size={16} color="#F06400" /> {p.bhk}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#4A4038' }}>
                    <Maximize size={16} color="#F06400" /> {p.size}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 11, color: '#6B5F52', fontWeight: 600, textTransform: 'uppercase' }}>Starting From</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: '#F06400' }}>{p.price}</div>
                  </div>
                  <button className="btn-hover" style={{ background: '#2B241D', color: '#F7F2EA', border: 'none', padding: '10px 20px', borderRadius: 100, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
