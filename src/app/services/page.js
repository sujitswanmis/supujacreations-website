'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FileSpreadsheet, Cpu, Globe, Link2, GitBranch, Factory, 
  MapPin, MessageSquare, BarChart3, MessageCircle, Send, ArrowRight, Zap, Tag, Megaphone, Share2, Target
} from 'lucide-react';
import { services } from '../../data/servicesData';

export default function ServicesPage() {
  const getIcon = (iconName, color) => {
    switch (iconName) {
      case 'Megaphone': return <Megaphone size={28} color={color} />;
      case 'Target': return <Target size={28} color={color} />;
      case 'FileSpreadsheet': return <FileSpreadsheet size={28} color={color} />;
      case 'Cpu': return <Cpu size={28} color={color} />;
      case 'Globe': return <Globe size={28} color={color} />;
      case 'Link2': return <Link2 size={28} color={color} />;
      case 'GitBranch': return <GitBranch size={28} color={color} />;
      case 'Factory': return <Factory size={28} color={color} />;
      case 'MapPin': return <MapPin size={28} color={color} />;
      case 'MessageSquare': return <MessageSquare size={28} color={color} />;
      case 'BarChart3': return <BarChart3 size={28} color={color} />;
      default: return <Zap size={28} color={color} />;
    }
  };

  return (
    <div style={{ position: 'relative', padding: '4rem 1.5rem 6rem 1.5rem', maxWidth: '1240px', margin: '0 auto' }}>
      
      {/* AMBIENT GLOWS */}
      <div className="ambient-glow" style={{ top: '8%', right: '10%', width: '420px', height: '420px', background: 'rgba(37, 99, 235, 0.12)' }} />
      <div className="ambient-glow" style={{ top: '45%', left: '5%', width: '450px', height: '450px', background: 'rgba(6, 182, 212, 0.1)' }} />

      {/* HEADER SECTION */}
      <div style={{ maxWidth: '850px', marginBottom: '3.5rem' }}>
        <div className="page-badge">Services & Transparent Pricing</div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, margin: '0 0 1.25rem 0' }}>
          Services & Estimated Costs
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: 1.7, margin: 0 }}>
          Clear, transparent pricing for all our specialized automation and digitization services.
        </p>
      </div>

      {/* SERVICES CARDS GRID: NAME, DESCRIPTION & COST ONLY */}
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
              background: 'rgba(15, 23, 42, 0.85)',
              borderTop: `4px solid ${srv.accentColor}`
            }}
          >
            
            {/* Header: Icon + Service Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: `${srv.accentColor}18`,
                border: `1px solid ${srv.accentColor}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {getIcon(srv.iconName, srv.accentColor)}
              </div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', margin: 0, lineHeight: 1.25 }}>
                {srv.title}
              </h2>
            </div>

            {/* Description */}
            <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.75rem', flexGrow: 1 }}>
              {srv.desc}
            </p>

            {/* Cost Box */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '1.1rem 1.25rem',
              marginBottom: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Tag size={13} color={srv.accentColor} />
                  Service Cost
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.15rem' }}>
                  {srv.costNote}
                </div>
              </div>
              <div style={{ fontSize: '1.65rem', fontWeight: 800, color: srv.accentColor }}>
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
                <Send size={15} />
              </Link>
            </div>

          </div>
        ))}
      </div>

      {/* BOTTOM ACTION */}
      <div className="glass-card" style={{ padding: '3rem 2rem', textAlign: 'center', background: 'rgba(15, 23, 42, 0.9)' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
          Need a Custom Multi-Department Automation Package?
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.98rem', maxWidth: '650px', margin: '0 auto 1.75rem auto' }}>
          Contact us for custom enterprise requirements, plant-wide FMS digitization, or monthly retainer plans.
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
