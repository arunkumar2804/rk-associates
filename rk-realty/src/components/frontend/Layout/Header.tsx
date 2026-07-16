"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, ChevronDown, Menu, Search, X, Home, Info, Briefcase, Building2, Key, HeartHandshake, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  settings: {
    companyName: string;
    logoUrl: string | null;
    contactNumber1?: string | null;
  } | null;
}

export const Header = ({ settings }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const logoSrc = settings?.logoUrl || "https://www.rkassociates.services/assets/images/3740001c-c500-47a7-ac58-7b72803be0ae.png";
  const companyName = settings?.companyName || "RK Associates";
  const callUrl = `tel:${settings?.contactNumber1?.replace(/[^\d+]/g, '') || "+918884569830"}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileNavItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    { href: "/services", label: "Services", icon: Briefcase },
    { href: "/properties", label: "Properties", icon: Building2 },
    { href: "/rentals", label: "Rentals", icon: Key },
    { href: "/csr-activities", label: "CSR", icon: HeartHandshake },
    { href: "/blog", label: "Blog", icon: FileText },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <>
      {/* Desktop Header (Unchanged) */}
      <header className="hidden lg:block sticky top-0 z-[100] bg-[rgba(247,242,234,0.85)] backdrop-blur-[12px] border-b border-[rgba(43,36,29,0.06)]">
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 'none', textDecoration: 'none' }}>
            <img src={logoSrc} alt={companyName} style={{ height: 42 }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: 18, color: '#2B241D', lineHeight: 1.1 }}>{companyName}</span>
              <span style={{ fontSize: 10, fontWeight: 600, color: '#F06400', letterSpacing: 0.5, textTransform: 'uppercase' }}>Channel Partner</span>
            </div>
          </Link>
          
          <nav style={{ display: 'flex', gap: 36, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <Link href="/" style={{ fontSize: 14.5, fontWeight: 500, color: '#4A4038', textDecoration: 'none' }}>Home</Link>
            <Link href="/about" style={{ fontSize: 14.5, fontWeight: 500, color: '#4A4038', textDecoration: 'none' }}>About Us</Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', fontSize: 14.5, fontWeight: 500, color: '#4A4038' }}>
              <Link href="/services" style={{ textDecoration: 'none', color: 'inherit' }}>Services</Link>
              <ChevronDown size={14} />
            </div>
            <Link href="/properties" style={{ fontSize: 14.5, fontWeight: 500, color: '#4A4038', textDecoration: 'none' }}>Properties</Link>
            <Link href="/rentals" style={{ fontSize: 14.5, fontWeight: 500, color: '#4A4038', textDecoration: 'none' }}>Rentals</Link>
            <Link href="/csr-activities" style={{ fontSize: 14.5, fontWeight: 500, color: '#4A4038', textDecoration: 'none' }}>CSR Activities</Link>
            <Link href="/blog" style={{ fontSize: 14.5, fontWeight: 500, color: '#4A4038', textDecoration: 'none' }}>Blog</Link>
            <Link href="/contact" style={{ fontSize: 14.5, fontWeight: 500, color: '#4A4038', textDecoration: 'none' }}>Contact Us</Link>
          </nav>

          <Link href="/contact" className="btn-hover" style={{
            flex: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: '#2B241D',
            color: '#F7F2EA',
            padding: '12px 22px',
            borderRadius: 100,
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 13.5
          }}>
            <Phone size={16} />
            <span>Enquire Now</span>
          </Link>
        </div>
      </header>

      {/* Mobile Header */}
      <header className={`lg:hidden sticky top-0 z-[100] transition-all duration-300 pt-safe ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-[rgba(43,36,29,0.06)]' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileMenuOpen(true)} className="p-2 -ml-2 text-[#2B241D] active:scale-95 transition-transform">
              <Menu size={24} />
            </button>
            <Link href="/" className="flex items-center gap-2">
              <img src={logoSrc} alt={companyName} className="h-8 object-contain" />
              <div className="flex flex-col justify-center">
                <span className="font-sora font-bold text-[15px] text-[#2B241D] leading-tight tracking-tight">{companyName}</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 text-[#2B241D] active:scale-95 transition-transform">
              <Search size={22} />
            </button>
            <a href={callUrl} className="p-2 text-[#2B241D] active:scale-95 transition-transform">
              <Phone size={22} />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Hamburger Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-[#2B241D]/40 backdrop-blur-sm z-[110]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden fixed inset-y-0 left-0 w-[85%] max-w-[320px] bg-white z-[120] shadow-2xl flex flex-col pt-safe"
            >
              <div className="flex items-center justify-between p-4 border-b border-[rgba(43,36,29,0.06)]">
                <div className="flex items-center gap-2">
                  <img src={logoSrc} alt={companyName} className="h-8" />
                  <span className="font-sora font-bold text-[#2B241D] text-lg">{companyName}</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-gray-50 rounded-full text-[#4A4038] active:scale-95 transition-transform">
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-4 px-4 pb-safe no-scrollbar">
                <div className="flex flex-col gap-2">
                  {mobileNavItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                    const Icon = item.icon;
                    return (
                      <Link 
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-colors ${isActive ? 'bg-[#F06400]/10 text-[#F06400]' : 'text-[#4A4038] active:bg-gray-50'}`}
                      >
                        <Icon size={22} color={isActive ? "#F06400" : "#6B5F52"} />
                        <span className={`font-sora text-base ${isActive ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
