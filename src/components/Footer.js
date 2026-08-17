'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MapPin, MessageSquare, Mail, Building2, ArrowUpRight, ShieldCheck, Sparkles
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';
import LanguageSelector from './LanguageSelector';

export default function Footer() {
  return (
    <footer style={{
      background: '#040508',
      borderTop: '1px solid rgba(212, 175, 55, 0.25)',
      padding: '4.5rem 1.5rem 2.5rem 1.5rem',
      color: '#a1a1aa',
      fontSize: '0.88rem',
      position: 'relative',
      zIndex: 10,
      overflow: 'hidden'
    }}>
      {/* 5D Footer Ambient Glow */}
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative', zIndex: 1 }}>
        
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2.5rem'
        }}>
          
          {/* Col 1: Brand Info & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img 
                src="/supuja-logo.png" 
                alt="SuPuja Creations Logo" 
                style={{
                  height: '44px',
                  width: 'auto',
                  maxHeight: '44px',
                  objectFit: 'contain',
                  flexShrink: 0,
                  filter: 'drop-shadow(0 2px 10px rgba(212, 175, 55, 0.5))'
                }} 
              />
              <div>
                <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '1.15rem' }}>
                  SuPuja <span className="gold-gradient-text">Creations</span>
                </div>
                <div style={{ fontSize: '0.74rem', color: '#71717a' }}>Business Automation & MIS Solutions</div>
              </div>
            </Link>
            
            <p style={{ fontSize: '0.86rem', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
              Practical business automation systems, Google Workspace architecture, REST API pipelines, and multi-step manufacturing flow systems (FMS).
            </p>

            {/* 5D Social Media & Instant Connect Channels */}
            <div>
              <div style={{ fontSize: '0.74rem', color: '#f5d77f', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                Connect on Social Networks
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/919988119276?text=Hello%20SuPuja%20Creations,%20I%20want%20to%20discuss%20automation%20services." 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-icon-5d"
                  title="Direct WhatsApp Chat"
                  aria-label="Direct WhatsApp Chat"
                  style={{ color: '#22c55e' }}
                >
                  <WhatsAppIcon size={19} />
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/supujacreations" 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-icon-5d"
                  title="Follow on Facebook"
                  aria-label="Follow on Facebook"
                >
                  <FacebookIcon size={18} />
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/supujacreations/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-icon-5d"
                  title="Follow on Instagram"
                  aria-label="Follow on Instagram"
                >
                  <InstagramIcon size={18} />
                </a>

              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#f5d77f', fontSize: '0.82rem', fontWeight: 600 }}>
              <ShieldCheck size={16} color="#d4af37" />
              <span>100% Practical • Zero Fluff Guarantee</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Navigation
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link href="/" style={{ color: '#a1a1aa', textDecoration: 'none' }} className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: '#a1a1aa', textDecoration: 'none' }} className="footer-link">
                  About SuPuja Creations
                </Link>
              </li>
              <li>
                <Link href="/services" style={{ color: '#a1a1aa', textDecoration: 'none' }} className="footer-link">
                  Specialized Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/fms" style={{ color: '#a1a1aa', textDecoration: 'none' }} className="footer-link">
                  FMS & Manufacturing Workflows
                </Link>
              </li>
              <li>
                <Link href="/projects" style={{ color: '#a1a1aa', textDecoration: 'none' }} className="footer-link">
                  Case Studies & Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" style={{ color: '#a1a1aa', textDecoration: 'none' }} className="footer-link">
                  Skills Matrix & Formulas
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: '#a1a1aa', textDecoration: 'none' }} className="footer-link">
                  Contact & Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Solutions */}
          <div>
            <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Specializations
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.86rem' }}>
              <li>
                <Link href="/services#meta-ads" style={{ color: '#a1a1aa', textDecoration: 'none' }} className="footer-link">
                  Meta Ads (Facebook & Instagram)
                </Link>
              </li>
              <li>
                <Link href="/services#whatsapp-marketing" style={{ color: '#a1a1aa', textDecoration: 'none' }} className="footer-link">
                  WhatsApp Marketing & Client Notification
                </Link>
              </li>
              <li>
                <Link href="/services#mis" style={{ color: '#a1a1aa', textDecoration: 'none' }} className="footer-link">
                  Google Sheets & MIS Automation
                </Link>
              </li>
              <li>
                <Link href="/services#gas" style={{ color: '#a1a1aa', textDecoration: 'none' }} className="footer-link">
                  Google Apps Script & Triggers
                </Link>
              </li>
              <li>
                <Link href="/fms" style={{ color: '#a1a1aa', textDecoration: 'none' }} className="footer-link">
                  Process & Manufacturing Flow (FMS)
                </Link>
              </li>
              <li>
                <Link href="/services#dashboards" style={{ color: '#a1a1aa', textDecoration: 'none' }} className="footer-link">
                  Looker Studio KPI Dashboards
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Portal */}
          <div>
            <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Get in Touch
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a href="mailto:sales@supujacreations.com" style={{ color: '#e4e4e7', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.88rem' }}>
                <Mail size={16} color="#f5d77f" />
                sales@supujacreations.com
              </a>
              <a href="tel:+919988119276" style={{ color: '#e4e4e7', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.88rem' }}>
                <MessageSquare size={16} color="#d4af37" />
                +91 99881 19276
              </a>
              <div style={{ color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.88rem' }}>
                <MapPin size={16} color="#e5b842" />
                India (Remote & On-Site)
              </div>
              <a 
                href="https://wa.me/919988119276?text=Hello%20SuPuja%20Creations,%20I%20am%20interested%20in%20your%20Business%20Automation%20services." 
                target="_blank" 
                rel="noreferrer"
                style={{ color: '#4ade80', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.88rem', fontWeight: 600 }}
              >
                <MessageSquare size={16} color="#22c55e" />
                Chat on WhatsApp
              </a>

              <div style={{ marginTop: '0.5rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(212, 175, 55, 0.15)' }}>
                <a 
                  href="https://app.supujacreations.com" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    color: '#f5d77f',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    background: 'rgba(212, 175, 55, 0.12)',
                    padding: '0.55rem 0.95rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(212, 175, 55, 0.35)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Building2 size={15} />
                  CRM Workplace Portal
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(212, 175, 55, 0.12)',
          paddingTop: '1.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.25rem',
          fontSize: '0.82rem',
          color: '#71717a'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span>&copy; {new Date().getFullYear()} <strong>SuPuja Creations</strong> (supujacreations.com). All rights reserved.</span>
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 800,
              color: '#f5d77f',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              padding: '0.15rem 0.55rem',
              borderRadius: '6px',
              letterSpacing: '0.03em',
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              v2.8.1 • Live
            </span>
          </div>

          <div>
            <LanguageSelector direction="up" />
          </div>

          <div style={{ fontSize: '0.78rem' }}>
            Practical Business Automation • Google Workspace • REST APIs • FMS Architecture
          </div>
        </div>

      </div>
    </footer>
  );
}
