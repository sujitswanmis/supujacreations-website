'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Building2, Send, ChevronRight } from 'lucide-react';

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
      background: scrolled ? 'rgba(7, 12, 24, 0.95)' : 'rgba(7, 12, 24, 0.85)',
      backdropFilter: 'blur(18px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      transition: 'all 0.3s ease',
      padding: '0.9rem 1.5rem'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        
        {/* Brand Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <img 
            src="/supuja-logo.png" 
            alt="SuPuja Creations Logo" 
            style={{
              height: '44px',
              width: 'auto',
              maxHeight: '44px',
              objectFit: 'contain',
              flexShrink: 0,
              filter: 'drop-shadow(0 2px 8px rgba(56, 189, 248, 0.4))'
            }} 
          />
          <div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              SuPuja Creations
              <span style={{ fontSize: '0.65rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '0.1rem 0.45rem', borderRadius: '4px', textTransform: 'uppercase', fontWeight: 700 }}>
                Automation
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              Business Automation & MIS Solutions
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`nav-link ${isActive ? 'active' : ''}`}
                style={{
                  color: isActive ? '#38bdf8' : undefined,
                  background: isActive ? 'rgba(56, 189, 248, 0.12)' : undefined,
                  fontWeight: isActive ? 600 : 500
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a 
            href="https://app.supujacreations.com" 
            target="_blank"
            rel="noreferrer"
            className="btn-secondary desktop-cta" 
            style={{ padding: '0.52rem 1.05rem', fontSize: '0.86rem' }}
          >
            <Building2 size={15} />
            CRM Workplace
          </a>
          <Link 
            href="/contact" 
            className="btn-primary desktop-cta" 
            style={{ padding: '0.52rem 1.2rem', fontSize: '0.86rem' }}
          >
            <Send size={14} />
            Hire / Consult
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '8px',
              padding: '0.5rem',
              color: '#ffffff',
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
          background: 'rgba(7, 12, 24, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          zIndex: 99
        }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: isActive ? '#38bdf8' : '#cbd5e1',
                  background: isActive ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  fontWeight: isActive ? 600 : 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} color={isActive ? '#38bdf8' : '#64748b'} />
              </Link>
            );
          })}

          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <a 
              href="https://app.supujacreations.com" 
              target="_blank"
              rel="noreferrer"
              className="btn-secondary" 
              style={{ justifyContent: 'center' }}
            >
              <Building2 size={16} />
              Open CRM Workplace
            </a>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary" 
              style={{ justifyContent: 'center' }}
            >
              <Send size={16} />
              Hire / Consult SuPuja Creations
            </Link>
          </div>
        </div>
      )}

    </header>
  );
}
