import React from 'react';
import Link from 'next/link';
import { 
  FileSpreadsheet, Cpu, Globe, Link2, GitBranch, Factory, 
  MapPin, MessageSquare, Mail, Building2, ArrowUpRight, ShieldCheck
} from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#04070e',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '4.5rem 1.5rem 2.5rem 1.5rem',
      color: '#94a3b8',
      fontSize: '0.88rem',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem'
        }}>
          
          {/* Col 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '1.1rem'
              }}>
                SC
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '1.1rem' }}>SuPuja Creations</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Business Automation & MIS Solutions</div>
              </div>
            </Link>
            
            <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Practical business automation systems, Google Workspace architecture, REST API pipelines, and multi-step manufacturing flow systems (FMS).
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#38bdf8', fontSize: '0.82rem' }}>
              <ShieldCheck size={16} color="#22c55e" />
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
                <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">
                  About SuPuja Creations
                </Link>
              </li>
              <li>
                <Link href="/services" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">
                  Specialized Services
                </Link>
              </li>
              <li>
                <Link href="/fms" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">
                  FMS & Manufacturing Workflows
                </Link>
              </li>
              <li>
                <Link href="/projects" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">
                  Case Studies & Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">
                  Skills Matrix & Formulas
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">
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
                <Link href="/services#meta-ads" style={{ color: '#94a3b8', textDecoration: 'none' }} className="footer-link">
                  Meta Ads (Facebook & Instagram)
                </Link>
              </li>
              <li>
                <Link href="/services#whatsapp-marketing" style={{ color: '#94a3b8', textDecoration: 'none' }} className="footer-link">
                  WhatsApp Marketing & Business API
                </Link>
              </li>
              <li>
                <Link href="/services#mis" style={{ color: '#94a3b8', textDecoration: 'none' }} className="footer-link">
                  Google Sheets & MIS Automation
                </Link>
              </li>
              <li>
                <Link href="/services#gas" style={{ color: '#94a3b8', textDecoration: 'none' }} className="footer-link">
                  Google Apps Script & Triggers
                </Link>
              </li>
              <li>
                <Link href="/fms" style={{ color: '#94a3b8', textDecoration: 'none' }} className="footer-link">
                  85-Step Manufacturing Flow (FMS)
                </Link>
              </li>
              <li>
                <Link href="/services#dashboards" style={{ color: '#94a3b8', textDecoration: 'none' }} className="footer-link">
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
              <a href="mailto:sales@supujacreations.com" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.88rem' }}>
                <Mail size={16} color="#38bdf8" />
                sales@supujacreations.com
              </a>
              <a href="tel:+919988119276" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.88rem' }}>
                <MessageSquare size={16} color="#34d399" />
                +91 99881 19276
              </a>
              <div style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.88rem' }}>
                <MapPin size={16} color="#c084fc" />
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

              <div style={{ marginTop: '0.5rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <a 
                  href="https://app.supujacreations.com" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    color: '#38bdf8',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    background: 'rgba(56, 189, 248, 0.1)',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(56, 189, 248, 0.25)'
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
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '1.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.82rem',
          color: '#64748b'
        }}>
          <div>
            &copy; {new Date().getFullYear()} <strong>SuPuja Creations</strong> (supujacreations.com). All rights reserved.
          </div>
          <div>
            Practical Business Automation • Google Workspace • REST APIs • FMS Architecture
          </div>
        </div>

      </div>
    </footer>
  );
}
