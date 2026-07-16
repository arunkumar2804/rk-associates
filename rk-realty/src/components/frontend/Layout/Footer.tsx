import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const Facebook = ({size=20}: {size?: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Instagram = ({size=20}: {size?: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const Twitter = ({size=20}: {size?: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Linkedin = ({size=20}: {size?: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;

const Youtube = ({size=20}: {size?: number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;

interface FooterProps {
  settings: {
    companyName: string;
    logoUrl: string | null;
    contactNumber1: string | null;
    contactNumber2: string | null;
    email: string | null;
    officeAddress: string | null;
    facebookUrl: string | null;
    instagramUrl: string | null;
    twitterUrl: string | null;
    youtubeUrl: string | null;
  } | null;
}

export const Footer = ({ settings }: FooterProps) => {
  const companyName = settings?.companyName || "RK Associates";
  const logoSrc = settings?.logoUrl || "https://www.rkassociates.services/assets/images/3740001c-c500-47a7-ac58-7b72803be0ae.png";

  return (
    <footer className="pb-28 lg:pb-10" style={{ background: '#2B241D', color: '#F7F2EA', paddingTop: 80 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        
        {/* Desktop Version */}
        <div className="hidden lg:grid" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 64, marginBottom: 64 }}>
          {/* Brand Column */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, textDecoration: 'none' }}>
              <img src={logoSrc} alt={companyName} style={{ height: 42, filter: 'brightness(0) invert(1)', objectFit: 'contain' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: 18, color: '#F7F2EA', lineHeight: 1.1 }}>{companyName}</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: '#F06400', letterSpacing: 0.5, textTransform: 'uppercase' }}>Channel Partner</span>
              </div>
            </Link>
            <p style={{ fontSize: 14.5, lineHeight: 1.8, color: 'rgba(247,242,234,0.7)', marginBottom: 24, maxWidth: 320 }}>
              Your trusted partner in finding premium real estate across Bengaluru. We bring transparency and expertise to your property search.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              {settings?.facebookUrl && (
                <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(247,242,234,0.7)', transition: 'color 0.2s ease' }} className="hover:text-[#F06400]">
                  <Facebook size={20} />
                </a>
              )}
              {settings?.instagramUrl && (
                <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(247,242,234,0.7)', transition: 'color 0.2s ease' }} className="hover:text-[#F06400]">
                  <Instagram size={20} />
                </a>
              )}
              {settings?.twitterUrl && (
                <a href={settings.twitterUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(247,242,234,0.7)', transition: 'color 0.2s ease' }} className="hover:text-[#F06400]">
                  <Twitter size={20} />
                </a>
              )}
              {settings?.youtubeUrl && (
                <a href={settings.youtubeUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(247,242,234,0.7)', transition: 'color 0.2s ease' }} className="hover:text-[#F06400]">
                  <Youtube size={20} />
                </a>
              )}
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
                  <div style={{ fontSize: 15, fontWeight: 600 }}>
                    {settings?.contactNumber1 || "+91 8884569830"}
                    {settings?.contactNumber2 ? ` / ${settings.contactNumber2}` : ' / +91 8884970111'}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(247,242,234,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <Mail size={18} color="#F06400" />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'rgba(247,242,234,0.5)', marginBottom: 4 }}>Email</div>
                  <div style={{ fontSize: 15 }}>{settings?.email || "rk01forassociates@gmail.com"}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(247,242,234,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <MapPin size={18} color="#F06400" />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'rgba(247,242,234,0.5)', marginBottom: 4 }}>Office</div>
                  <div style={{ fontSize: 14.5, lineHeight: 1.6, color: 'rgba(247,242,234,0.8)', whiteSpace: 'pre-line' }}>
                    {settings?.officeAddress || "#16-K, 11th Cross, 1st Block,\nRajajinagar, Bengaluru – 560010"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile App Version */}
        <div className="lg:hidden flex flex-col mb-12">
          {/* Brand Column Mobile */}
          <div className="mb-8">
            <Link href="/" className="flex items-center gap-3 mb-5 text-none">
              <img src={logoSrc} alt={companyName} className="h-9 brightness-0 invert object-contain" />
              <div className="flex flex-col">
                <span className="font-sora font-bold text-[16px] text-[#F7F2EA] leading-tight">{companyName}</span>
                <span className="text-[9px] font-semibold text-[#F06400] tracking-wider uppercase">Channel Partner</span>
              </div>
            </Link>
            <p className="text-[14px] leading-relaxed text-[#F7F2EA]/70 mb-6">
              Your trusted partner in finding premium real estate across Bengaluru. We bring transparency and expertise to your property search.
            </p>
            <div className="flex gap-4">
              {settings?.facebookUrl && (
                <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-[#F7F2EA]/70 hover:text-[#F06400] transition-colors">
                  <Facebook size={20} />
                </a>
              )}
              {settings?.instagramUrl && (
                <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#F7F2EA]/70 hover:text-[#F06400] transition-colors">
                  <Instagram size={20} />
                </a>
              )}
              {settings?.twitterUrl && (
                <a href={settings.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-[#F7F2EA]/70 hover:text-[#F06400] transition-colors">
                  <Twitter size={20} />
                </a>
              )}
              {settings?.youtubeUrl && (
                <a href={settings.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-[#F7F2EA]/70 hover:text-[#F06400] transition-colors">
                  <Youtube size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Accordions */}
          <div className="flex flex-col border-t border-white/10 pt-2">
            
            <details className="group border-b border-white/10 py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-sora text-[16px] font-semibold text-[#F7F2EA] select-none touch-manipulation">
                Quick Links
                <span className="transition duration-300 group-open:-rotate-180 text-white/50">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="flex flex-col gap-4 pt-5 pb-2">
                <Link href="/about" className="text-[14.5px] text-white/70 block py-1">About Us</Link>
                <Link href="/services" className="text-[14.5px] text-white/70 block py-1">Our Services</Link>
                <Link href="/properties" className="text-[14.5px] text-white/70 block py-1">Latest Properties</Link>
                <Link href="/blog" className="text-[14.5px] text-white/70 block py-1">Real Estate Blog</Link>
                <Link href="/contact" className="text-[14.5px] text-white/70 block py-1">Contact Us</Link>
              </div>
            </details>

            <details className="group border-b border-white/10 py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-sora text-[16px] font-semibold text-[#F7F2EA] select-none touch-manipulation">
                Top Developers
                <span className="transition duration-300 group-open:-rotate-180 text-white/50">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="flex flex-col gap-4 pt-5 pb-2">
                <Link href="/properties" className="text-[14.5px] text-white/70 block py-1">Prestige Group</Link>
                <Link href="/properties" className="text-[14.5px] text-white/70 block py-1">Sobha Limited</Link>
                <Link href="/properties" className="text-[14.5px] text-white/70 block py-1">Godrej Properties</Link>
                <Link href="/properties" className="text-[14.5px] text-white/70 block py-1">Brigade Group</Link>
                <Link href="/properties" className="text-[14.5px] text-white/70 block py-1">Sattva Group</Link>
              </div>
            </details>

            <details className="group border-b border-white/10 py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-sora text-[16px] font-semibold text-[#F7F2EA] select-none touch-manipulation">
                Contact Us
                <span className="transition duration-300 group-open:-rotate-180 text-white/50">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="flex flex-col gap-5 pt-5 pb-2">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Phone size={18} color="#F06400" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-[11px] text-white/50 font-semibold uppercase tracking-wider mb-0.5">Call Us</div>
                    <div className="text-[14px] font-semibold text-white/90">
                      {settings?.contactNumber1 || "+91 8884569830"}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Mail size={18} color="#F06400" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-[11px] text-white/50 font-semibold uppercase tracking-wider mb-0.5">Email</div>
                    <div className="text-[14px] font-semibold text-white/90">{settings?.email || "rk01forassociates@gmail.com"}</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin size={18} color="#F06400" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-[11px] text-white/50 font-semibold uppercase tracking-wider mb-0.5">Office</div>
                    <div className="text-[14px] leading-snug text-white/80 pr-4">
                      {settings?.officeAddress || "#16-K, 11th Cross, 1st Block, Rajajinagar, Bengaluru"}
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-[12px] text-white/50">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="btn-hover text-[12px] text-white/50">Privacy Policy</a>
            <a href="#" className="btn-hover text-[12px] text-white/50">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
