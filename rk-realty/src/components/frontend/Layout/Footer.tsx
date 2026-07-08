import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{ background: '#2B241D', color: '#F7F2EA', paddingTop: 80, paddingBottom: 40 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 64, marginBottom: 64 }}>
          
          {/* Brand Column */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, textDecoration: 'none' }}>
              <img src="/assets/images/3740001c-c500-47a7-ac58-7b72803be0ae.png" alt="RK Associates" style={{ height: 42, filter: 'brightness(0) invert(1)' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: 18, color: '#F7F2EA', lineHeight: 1.1 }}>RK Associates</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: '#F06400', letterSpacing: 0.5, textTransform: 'uppercase' }}>Channel Partner</span>
              </div>
            </Link>
            <p style={{ fontSize: 14.5, lineHeight: 1.8, color: 'rgba(247,242,234,0.7)', marginBottom: 24, maxWidth: 320 }}>
              Your trusted partner in finding premium real estate across Bengaluru. We bring transparency and expertise to your property search.
            </p>
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

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: '"Sora", sans-serif', fontSize: 16, fontWeight: 600, marginBottom: 24 }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Link href="/about" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>About Us</Link>
              <Link href="/services" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Our Services</Link>
              <Link href="/properties" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Latest Properties</Link>
              <Link href="/blog" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Real Estate Blog</Link>
              <Link href="/contact" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Contact Us</Link>
            </div>
          </div>

          {/* Featured Developers */}
          <div>
            <h4 style={{ fontFamily: '"Sora", sans-serif', fontSize: 16, fontWeight: 600, marginBottom: 24 }}>Top Developers</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Link href="/properties" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Prestige Group</Link>
              <Link href="/properties" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Sobha Limited</Link>
              <Link href="/properties" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Godrej Properties</Link>
              <Link href="/properties" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Brigade Group</Link>
              <Link href="/properties" className="btn-hover" style={{ textDecoration: 'none', color: 'rgba(247,242,234,0.7)', fontSize: 14.5, display: 'inline-block' }}>Sattva Group</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontFamily: '"Sora", sans-serif', fontSize: 16, fontWeight: 600, marginBottom: 24 }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(247,242,234,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <Phone size={18} color="#F06400" />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'rgba(247,242,234,0.5)', marginBottom: 4 }}>Call Us</div>
                  <div style={{ fontSize: 15, fontWeight: 600 }}>+91 98765 43210</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(247,242,234,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <Mail size={18} color="#F06400" />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'rgba(247,242,234,0.5)', marginBottom: 4 }}>Email</div>
                  <div style={{ fontSize: 15 }}>hello@rkassociates.com</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(247,242,234,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <MapPin size={18} color="#F06400" />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'rgba(247,242,234,0.5)', marginBottom: 4 }}>Office</div>
                  <div style={{ fontSize: 14.5, lineHeight: 1.6, color: 'rgba(247,242,234,0.8)' }}>
                    123, 100ft Road, Indiranagar,<br/>
                    Bengaluru, Karnataka 560038
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ paddingTop: 32, borderTop: '1px solid rgba(247,242,234,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 13, color: 'rgba(247,242,234,0.5)' }}>
            © {new Date().getFullYear()} RK Associates. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" className="btn-hover" style={{ textDecoration: 'none', fontSize: 13, color: 'rgba(247,242,234,0.5)' }}>Privacy Policy</a>
            <a href="#" className="btn-hover" style={{ textDecoration: 'none', fontSize: 13, color: 'rgba(247,242,234,0.5)' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
