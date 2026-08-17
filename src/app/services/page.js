'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FileSpreadsheet, Cpu, Globe, Link2, GitBranch, Factory, 
  MapPin, MessageSquare, BarChart3, MessageCircle, Send, ArrowRight, Zap, Tag, Megaphone, Target, Sparkles,
  Users, FileText, Layers, ShieldCheck, Award, Terminal
} from 'lucide-react';
import { services } from '../../data/servicesData';

export default function ServicesPage() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Users': return <Users size={28} color="#f5d77f" />;
      case 'FileText': return <FileText size={28} color="#f5d77f" />;
      case 'Layers': return <Layers size={28} color="#f5d77f" />;
      case 'ShieldCheck': return <ShieldCheck size={28} color="#f5d77f" />;
      case 'Award': return <Award size={28} color="#f5d77f" />;
      case 'Terminal': return <Terminal size={28} color="#f5d77f" />;
      case 'Megaphone': return <Megaphone size={28} color="#f5d77f" />;
      case 'Target': return <Target size={28} color="#f5d77f" />;
      case 'FileSpreadsheet': return <FileSpreadsheet size={28} color="#f5d77f" />;
      case 'Cpu': return <Cpu size={28} color="#f5d77f" />;
      case 'Globe': return <Globe size={28} color="#f5d77f" />;
      case 'Link2': return <Link2 size={28} color="#f5d77f" />;
      case 'GitBranch': return <GitBranch size={28} color="#f5d77f" />;
      case 'Factory': return <Factory size={28} color="#f5d77f" />;
      case 'MapPin': return <MapPin size={28} color="#f5d77f" />;
      case 'MessageSquare': return <MessageSquare size={28} color="#f5d77f" />;
      case 'BarChart3': return <BarChart3 size={28} color="#f5d77f" />;
      default: return <Zap size={28} color="#f5d77f" />;
    }
  };

  return (
    <div style={{ position: 'relative', padding: '4.5rem 1.5rem 6.5rem 1.5rem', maxWidth: '1240px', margin: '0 auto' }}>
      
      {/* AMBIENT GOLD GLOWS */}
      <div className="ambient-glow" style={{ top: '8%', right: '10%', width: '420px', height: '420px', background: 'rgba(212, 175, 55, 0.12)' }} />
      <div className="ambient-glow" style={{ top: '45%', left: '5%', width: '450px', height: '450px', background: 'rgba(245, 215, 127, 0.08)' }} />

      {/* HEADER SECTION */}
      <div style={{ maxWidth: '850px', marginBottom: '3.5rem' }}>
        <div className="page-badge">
          <Sparkles size={14} color="#f5d77f" />
          <span>Services & Transparent Pricing</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, margin: '0 0 1.25rem 0' }}>
          Services & <span className="gold-gradient-text">Estimated Costs</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#e4e4e7', lineHeight: 1.7, margin: 0 }}>
          Clear, transparent pricing for all our specialized automation, MIS architecture, and digitization services.
        </p>
      </div>

      {/* SERVICES CARDS GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '2rem',
        marginBottom: '4.5rem'
      }}>
        {services.map((srv) => (
          <div 
            key={srv.id} 
            id={srv.id}
            className="glass-card" 
            style={{ 
              padding: '2.2rem 2rem', 
              display: 'flex', 
              flexDirection: 'column',
              background: 'rgba(14, 17, 24, 0.88)',
              borderTop: srv.popularBadge ? '4px solid #f5d77f' : '4px solid rgba(212, 175, 55, 0.5)',
              position: 'relative'
            }}
          >
            {srv.popularBadge && (
              <div style={{
                position: 'absolute',
                top: '-12px',
                right: '18px',
                background: 'linear-gradient(135deg, #d4af37, #b8860b)',
                color: '#070a10',
                padding: '0.2rem 0.65rem',
                borderRadius: '6px',
                fontSize: '0.72rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)'
              }}>
                {srv.popularBadge}
              </div>
            )}
            
            {/* Header: Icon + Service Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: 'rgba(212, 175, 55, 0.14)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {getIcon(srv.iconName)}
              </div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.25 }}>
                {srv.title}
              </h2>
            </div>

            {/* Description */}
            <p style={{ color: '#a1a1aa', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.75rem', flexGrow: 1 }}>
              {srv.desc}
            </p>

            {/* Cost Box */}
            <div style={{
              background: 'rgba(212, 175, 55, 0.08)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              borderRadius: '12px',
              padding: '1.1rem 1.25rem',
              marginBottom: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#f5d77f', textTransform: 'uppercase', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem', letterSpacing: '0.04em' }}>
                  <Tag size={13} color="#f5d77f" />
                  Service Cost
                  {srv.billingType && (
                    <span style={{
                      fontSize: '0.66rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      background: srv.billingType.includes('Monthly') ? 'rgba(56, 189, 248, 0.2)' : 'rgba(212, 175, 55, 0.2)',
                      color: srv.billingType.includes('Monthly') ? '#7dd3fc' : '#fef3c7',
                      border: srv.billingType.includes('Monthly') ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid rgba(212, 175, 55, 0.4)',
                      padding: '0.1rem 0.45rem',
                      borderRadius: '4px',
                      marginLeft: '0.4rem'
                    }}>
                      {srv.billingType}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#a1a1aa', marginTop: '0.15rem' }}>
                  {srv.costNote}
                </div>
              </div>
              <div className="gold-gradient-text" style={{ fontSize: '1.75rem', fontWeight: 900 }}>
                {srv.cost}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a 
                href={`https://wa.me/919988119276?text=${encodeURIComponent(`Hello SuPuja Creations, I want to book/discuss the "${srv.title}" service.`)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.86rem', padding: '0.65rem 1rem' }}
              >
                <MessageCircle size={16} />
                Book via WhatsApp
              </a>
              <Link 
                href={`/contact?service=${encodeURIComponent(srv.title)}`}
                className="btn-secondary"
                style={{ fontSize: '0.86rem', padding: '0.65rem 1rem' }}
                title="Send Inquiry"
              >
                <Send size={15} color="#f5d77f" />
              </Link>
            </div>

          </div>
        ))}
      </div>

      {/* BOTTOM ACTION */}
      <div className="glass-card" style={{ padding: '3.2rem 2rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
          Need a Custom Multi-Department Automation Package?
        </h3>
        <p style={{ color: '#a1a1aa', fontSize: '0.98rem', maxWidth: '650px', margin: '0 auto 1.75rem auto' }}>
          Contact us for custom enterprise requirements, plant-wide FMS digitization, or monthly retainer automation plans.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/contact" className="btn-primary">
            Request Custom Quote <Send size={16} />
          </Link>
          <a 
            href="https://wa.me/919988119276?text=Hello%20SuPuja%20Creations,%20I%20want%20to%20discuss%20a%20custom%20automation%20package."
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <MessageCircle size={16} color="#22c55e" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

    </div>
  );
}
