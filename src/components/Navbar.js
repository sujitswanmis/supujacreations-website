'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Building2, Send, Menu, X, ChevronRight, Sparkles
} from 'lucide-react';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'FMS Workflows', href: '/fms' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills & Formulas', href: '/skills' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(6, 7, 10, 0.96)' : 'rgba(8, 9, 13, 0.88)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.18)',
      transition: 'all 0.3s ease',
      padding: '0.65rem 1rem',
      boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.08)' : 'none'
    }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'nowrap', width: '100%' }}>
        
        {/* Brand Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem', whiteSpace: 'nowrap', flexShrink: 1, minWidth: 0, overflow: 'hidden' }}>
          <img 
            src="/supuja-logo.png" 
            alt="SuPuja Creations Logo" 
            style={{
              height: '38px',
              width: 'auto',
              maxHeight: '38px',
              objectFit: 'contain',
              flexShrink: 0,
              filter: 'drop-shadow(0 2px 10px rgba(212, 175, 55, 0.5))'
            }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>SuPuja</span>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f5d77f', letterSpacing: '-0.02em' }}>Creations</span>
              <span style={{ fontSize: '0.6rem', background: 'rgba(212, 175, 55, 0.15)', color: '#fde68a', border: '1px solid rgba(212, 175, 55, 0.35)', padding: '0.1rem 0.35rem', borderRadius: '4px', textTransform: 'uppercase', fontWeight: 700, marginLeft: '0.15rem' }}>
                Automation
              </span>
            </div>
            <div style={{ fontSize: '0.68rem', color: '#a1a1aa', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Business Automation & MIS Solutions
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`nav-link ${isActive ? 'active' : ''}`}
                style={{
                  color: isActive ? '#f5d77f' : undefined,
                  background: isActive ? 'rgba(212, 175, 55, 0.14)' : undefined,
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.86rem',
                  padding: '0.45rem 0.65rem',
                  border: isActive ? '1px solid rgba(212, 175, 55, 0.3)' : '1px solid transparent'
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', flexShrink: 0, flexWrap: 'nowrap' }}>
          
          {/* Language Selector Dropdown (Desktop) */}
          <div className="desktop-cta" style={{ flexShrink: 0 }}>
            <LanguageSelector />
          </div>

          <a 
            href="https://app.supujacreations.com" 
            target="_blank"
            rel="noreferrer"
            className="btn-secondary desktop-cta" 
            style={{ padding: '0.52rem 1.05rem', fontSize: '0.86rem' }}
          >
            <Building2 size={15} color="#f5d77f" />
            CRM Workplace
          </a>
          <Link 
            href="/contact" 
            className="btn-primary desktop-cta" 
            style={{ padding: '0.52rem 1.25rem', fontSize: '0.86rem' }}
          >
            <Sparkles size={14} />
            Hire / Consult
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              background: 'rgba(20, 24, 34, 0.9)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              borderRadius: '8px',
              padding: '0.5rem',
              color: '#f5d77f',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          background: 'rgba(6, 7, 10, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          zIndex: 99,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.9)'
        }}>
          {/* Language Selector in Mobile Menu */}
          <div style={{ marginBottom: '0.5rem' }}>
            <LanguageSelector isMobile={true} />
          </div>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: isActive ? '#f5d77f' : '#e4e4e7',
                  background: isActive ? 'rgba(212, 175, 55, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  border: isActive ? '1px solid rgba(212, 175, 55, 0.35)' : '1px solid transparent',
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  fontWeight: isActive ? 700 : 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} color={isActive ? '#f5d77f' : '#71717a'} />
              </Link>
            );
          })}

          <div style={{ borderTop: '1px solid rgba(212, 175, 55, 0.15)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <a 
              href="https://app.supujacreations.com" 
              target="_blank"
              rel="noreferrer"
              className="btn-secondary" 
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Building2 size={16} color="#f5d77f" />
              CRM Workplace Portal
            </a>
            <Link 
              href="/contact" 
              className="btn-primary" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Sparkles size={16} />
              Start Consultation
            </Link>
            
            <div style={{ fontSize: '0.7rem', color: '#71717a', textAlign: 'center', marginTop: '0.4rem', fontFamily: 'JetBrains Mono, monospace' }}>
              SuPuja Automation Platform • <span style={{ color: '#f5d77f' }}>v2.5.0</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
