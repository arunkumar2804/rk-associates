import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Facebook = ({size=20}: {size?: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Instagram = ({size=20}: {size?: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const Twitter = ({size=20}: {size?: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Linkedin = ({size=20}: {size?: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;

export const Footer = () => {
  return (
    <footer style={{ background: '#2B241D', color: '#F7F2EA', paddingTop: 80, paddingBottom: 40, borderTop: '1px solid rgba(247,242,234,0.1)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 60, marginBottom: 60 }}>
          
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, textDecoration: 'none' }}>
              <img src="/assets/images/3740001c-c500-47a7-ac58-7b72803be0ae.png" alt="RK Associates" style={{ height: 42, filter: 'brightness(0) invert(1)' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: 18, color: '#F7F2EA', lineHeight: 1.1 }}>RK Associates</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: '#F06400', letterSpacing: 0.5, textTransform: 'uppercase' }}>Channel Partner</span>
              </div>
            </Link>
            <p style={{ fontSize: 14.5, color: 'rgba(247,242,234,0.6)', lineHeight: 1.7, marginBottom: 24, maxWidth: 320 }}>
              Bengaluru's premier real estate consultancy. We bridge the gap between discerning home buyers and the city's most reputable developers.
            </p>
            <div style={{ fontSize: 14, color: 'rgba(247,242,234,0.8)', fontWeight: 500, marginBottom: 24 }}>
              RERA Reg No: PRM/KA/RERA/1251/446/AG/171114/000400
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <a href="#" style={{ color: 'rgba(247,242,234,0.7)', transition: 'color 0.2s ease' }} className="hover:text-[#F06400]">
                <Facebook size={20} />
              </a>
              <a href="#" style={{ color: 'rgba(247,242,234,0.7)', transition: 'color 0.2s ease' }} className="hover:text-[#F06400]">
                <Instagram size={20} />
              </a>
              <a href="#" style={{ color: 'rgba(247,242,234,0.7)', transition: 'color 0.2s ease' }} className="hover:text-[#F06400]">
                <Twitter size={20} />
              </a>
              <a href="#" style={{ color: 'rgba(247,242,234,0.7)', transition: 'color 0.2s ease' }} className="hover:text-[#F06400]">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: '"Sora", sans-serif', fontSize: 16, fontWeight: 600, marginBottom: 24, color: '#FFFFFF' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Link to="/about" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>About Us</Link>
              <Link to="/services" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Our Services</Link>
              <Link to="/properties" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Latest Properties</Link>
              <Link to="/blog" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Real Estate Blog</Link>
              <Link to="/contact" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Contact Us</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: '"Sora", sans-serif', fontSize: 16, fontWeight: 600, marginBottom: 24, color: '#FFFFFF' }}>Top Developers</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Link to="/properties" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Prestige Group</Link>
              <Link to="/properties" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Sobha Limited</Link>
              <Link to="/properties" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Godrej Properties</Link>
              <Link to="/properties" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Brigade Group</Link>
              <Link to="/properties" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Sattva Group</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: '"Sora", sans-serif', fontSize: 16, fontWeight: 600, marginBottom: 24, color: '#FFFFFF' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(247,242,234,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <MapPin size={18} color="#F06400" />
                </div>
                <div style={{ fontSize: 14.5, color: 'rgba(247,242,234,0.7)', lineHeight: 1.6 }}>Level 14, UB City, Vittal Mallya Road,<br/>Bengaluru, Karnataka 560001</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(247,242,234,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <Phone size={18} color="#F06400" />
                </div>
                <div style={{ fontSize: 14.5, color: 'rgba(247,242,234,0.7)' }}>+91 98765 43210</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(247,242,234,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <Mail size={18} color="#F06400" />
                </div>
                <div style={{ fontSize: 14.5, color: 'rgba(247,242,234,0.7)' }}>hello@rkassociates.in</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(247,242,234,0.1)', paddingTop: 24 }}>
          <div style={{ fontSize: 13, color: 'rgba(247,242,234,0.5)' }}>© 2026 RK Associates. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" className="btn-hover" style={{ textDecoration: 'none', fontSize: 13, color: 'rgba(247,242,234,0.5)' }}>Privacy Policy</a>
            <a href="#" className="btn-hover" style={{ textDecoration: 'none', fontSize: 13, color: 'rgba(247,242,234,0.5)' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
