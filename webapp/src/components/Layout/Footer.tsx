import { Link } from 'react-router-dom';

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
            <div style={{ fontSize: 14, color: 'rgba(247,242,234,0.8)', fontWeight: 500 }}>
              RERA Reg No: PRM/KA/RERA/1251/446/AG/171114/000400
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
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(247,242,234,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>📍</div>
                <div style={{ fontSize: 14.5, color: 'rgba(247,242,234,0.7)', lineHeight: 1.6 }}>Level 14, UB City, Vittal Mallya Road,<br/>Bengaluru, Karnataka 560001</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(247,242,234,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>📞</div>
                <div style={{ fontSize: 14.5, color: 'rgba(247,242,234,0.7)' }}>+91 98765 43210</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(247,242,234,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>✉️</div>
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
