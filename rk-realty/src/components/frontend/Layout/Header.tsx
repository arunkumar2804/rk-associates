"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Phone, ChevronDown } from 'lucide-react';

export const Header = () => {
  return (
    <header style={{ 
      position: 'sticky', top: 0, zIndex: 100, 
      background: 'rgba(247, 242, 234, 0.85)', 
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(43,36,29,0.06)' 
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 'none', textDecoration: 'none' }}>
          <img src="/assets/images/3740001c-c500-47a7-ac58-7b72803be0ae.png" alt="RK Associates" style={{ height: 42 }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: 18, color: '#2B241D', lineHeight: 1.1 }}>RK Associates</span>
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
  );
};
