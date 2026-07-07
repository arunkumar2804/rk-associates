import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section style={{ maxWidth: 1280, margin: '60px auto 100px', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, background: '#FFFFFF', borderRadius: 32, overflow: 'hidden', border: '1px solid rgba(43,36,29,0.08)' }}>
          
          {/* Left: Contact Info */}
          <div style={{ background: '#2B241D', color: '#F7F2EA', padding: '60px 48px', display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ fontFamily: '"Sora", sans-serif', fontSize: 40, fontWeight: 600, marginBottom: 16 }}>Get in Touch</h1>
            <p style={{ fontSize: 16, color: 'rgba(247,242,234,0.7)', marginBottom: 48, lineHeight: 1.6 }}>
              Whether you are looking to buy a dream home, invest in real estate, or seek legal assistance, our experts are here to help.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(247,242,234,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <MapPin size={20} color="#F06400" />
                </div>
                <div>
                  <div style={{ fontSize: 13, color: 'rgba(247,242,234,0.5)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Head Office</div>
                  <div style={{ fontSize: 16, lineHeight: 1.6 }}>Level 14, UB City, Vittal Mallya Road,<br/>Bengaluru, Karnataka 560001</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(247,242,234,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <Phone size={20} color="#F06400" />
                </div>
                <div>
                  <div style={{ fontSize: 13, color: 'rgba(247,242,234,0.5)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Phone</div>
                  <div style={{ fontSize: 16 }}>+91 98765 43210</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(247,242,234,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <Mail size={20} color="#F06400" />
                </div>
                <div>
                  <div style={{ fontSize: 13, color: 'rgba(247,242,234,0.5)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Email</div>
                  <div style={{ fontSize: 16 }}>hello@rkassociates.in</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(247,242,234,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <Clock size={20} color="#F06400" />
                </div>
                <div>
                  <div style={{ fontSize: 13, color: 'rgba(247,242,234,0.5)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Working Hours</div>
                  <div style={{ fontSize: 16 }}>Mon - Sat: 9:00 AM - 7:00 PM<br/>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ padding: '60px 48px' }}>
            <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: 24, fontWeight: 600, color: '#2B241D', marginBottom: 32 }}>Send us a message</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#4A4038' }}>First Name</label>
                  <input type="text" placeholder="John" style={{ padding: '14px 16px', borderRadius: 12, border: '1px solid rgba(43,36,29,0.1)', background: '#F7F2EA', fontSize: 15, outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#4A4038' }}>Last Name</label>
                  <input type="text" placeholder="Doe" style={{ padding: '14px 16px', borderRadius: 12, border: '1px solid rgba(43,36,29,0.1)', background: '#F7F2EA', fontSize: 15, outline: 'none' }} />
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#4A4038' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ padding: '14px 16px', borderRadius: 12, border: '1px solid rgba(43,36,29,0.1)', background: '#F7F2EA', fontSize: 15, outline: 'none' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#4A4038' }}>Interested In</label>
                <select style={{ padding: '14px 16px', borderRadius: 12, border: '1px solid rgba(43,36,29,0.1)', background: '#F7F2EA', fontSize: 15, outline: 'none', appearance: 'none' }}>
                  <option>Buying a Property</option>
                  <option>Renting a Property</option>
                  <option>Investment Advisory</option>
                  <option>Legal Assistance</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#4A4038' }}>Message</label>
                <textarea rows={4} placeholder="How can we help you?" style={{ padding: '14px 16px', borderRadius: 12, border: '1px solid rgba(43,36,29,0.1)', background: '#F7F2EA', fontSize: 15, outline: 'none', resize: 'none' }}></textarea>
              </div>

              <button className="btn-hover" type="button" style={{ background: '#F06400', color: '#F7F2EA', border: 'none', padding: '16px', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer', marginTop: 8 }}>
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </section>
    </motion.div>
  );
};
