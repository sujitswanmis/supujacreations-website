'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Layers, ArrowUpRight, CheckCircle2, ShieldCheck, 
  Send, ArrowRight, Zap, ExternalLink
} from 'lucide-react';
import { projects } from '../../data/projectsData';

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div style={{ position: 'relative', padding: '4rem 1.5rem 6rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
      
      {/* AMBIENT GLOWS */}
      <div className="ambient-glow" style={{ top: '8%', left: '10%', width: '450px', height: '450px', background: 'rgba(37, 99, 235, 0.12)' }} />
      <div className="ambient-glow" style={{ top: '45%', right: '5%', width: '450px', height: '450px', background: 'rgba(16, 185, 129, 0.09)' }} />

      {/* HEADER SECTION */}
      <div style={{ maxWidth: '850px', marginBottom: '3.5rem' }}>
        <div className="page-badge">Track Record & Case Studies</div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, margin: '0 0 1.25rem 0' }}>
          Production Case Studies & Systems Delivered
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: 1.7, margin: 0 }}>
          Explore real-world business automation architectures engineered to eliminate operational friction, stop revenue leakages, and enforce real-time accountability.
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', marginBottom: '3.5rem' }}>
        <button 
          className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`} 
          onClick={() => setActiveTab('all')}
        >
          All Systems ({projects.length})
        </button>
        <button 
          className={`filter-btn ${activeTab === 'fms' ? 'active' : ''}`} 
          onClick={() => setActiveTab('fms')}
        >
          Workflow & FMS
        </button>
        <button 
          className={`filter-btn ${activeTab === 'api' ? 'active' : ''}`} 
          onClick={() => setActiveTab('api')}
        >
          API Integration
        </button>
        <button 
          className={`filter-btn ${activeTab === 'automation' ? 'active' : ''}`} 
          onClick={() => setActiveTab('automation')}
        >
          Apps Script & Messaging
        </button>
        <button 
          className={`filter-btn ${activeTab === 'hardware' ? 'active' : ''}`} 
          onClick={() => setActiveTab('hardware')}
        >
          Attendance & GPS
        </button>
        <button 
          className={`filter-btn ${activeTab === 'web' ? 'active' : ''}`} 
          onClick={() => setActiveTab('web')}
        >
          Web Forms
        </button>
        <button 
          className={`filter-btn ${activeTab === 'dashboards' ? 'active' : ''}`} 
          onClick={() => setActiveTab('dashboards')}
        >
          Dashboards & KPIs
        </button>
      </div>

      {/* PROJECTS GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '2.5rem',
        marginBottom: '5.5rem'
      }}>
        {filteredProjects.map((p) => (
          <div 
            key={p.id} 
            className="glass-card" 
            style={{ 
              padding: '2.5rem 2.2rem', 
              display: 'flex', 
              flexDirection: 'column', 
              background: 'rgba(15, 23, 42, 0.85)',
              position: 'relative'
            }}
          >
            
            {/* Top Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Case Study • {p.category.toUpperCase()}
              </span>
              <ArrowUpRight size={18} color="#64748b" />
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.4rem 0' }}>
              {p.title}
            </h2>
            
            <div style={{ fontSize: '0.88rem', color: '#38bdf8', fontWeight: 500, marginBottom: '1.25rem' }}>
              {p.subtitle}
            </div>

            {/* Metrics Row */}
            {p.metrics && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${p.metrics.length}, 1fr)`,
                gap: '0.65rem',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '0.85rem',
                borderRadius: '10px',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                {p.metrics.map((m, mIdx) => (
                  <div key={mIdx} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#4ade80' }}>{m.value}</div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.15rem' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Challenge & Solution */}
            <div style={{ marginBottom: '1.35rem', flexGrow: 1 }}>
              <div style={{ marginBottom: '0.85rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#f87171', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>The Challenge:</div>
                <div style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.55 }}>{p.challenge}</div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: '#4ade80', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>The Solution:</div>
                <div style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.55 }}>{p.solution}</div>
              </div>
            </div>

            {/* Key Highlights */}
            {p.highlights && (
              <div style={{ marginBottom: '1.35rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                  Architecture Highlights:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {p.highlights.map((hl, hlIdx) => (
                    <li key={hlIdx} style={{ fontSize: '0.82rem', color: '#cbd5e1', display: 'flex', alignItems: 'flex-start', gap: '0.45rem', lineHeight: 1.45 }}>
                      <span style={{ color: '#fbbf24', marginTop: '-1px' }}>•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Measurable Impact */}
            <div style={{ background: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.2)', padding: '0.85rem 1rem', borderRadius: '8px', marginBottom: '1.35rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#22c55e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Verified Business ROI</div>
              <div style={{ fontSize: '0.86rem', color: '#f0fdf4', fontWeight: 500 }}>{p.impact}</div>
            </div>

            {/* Tech Stack Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              {p.stack.map((tech, idx) => (
                <span key={idx} className="code-tag">{tech}</span>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* BOTTOM CTA */}
      <div className="glass-card" style={{ padding: '3.5rem 2rem', textAlign: 'center', background: 'rgba(15, 23, 42, 0.9)' }}>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
          Have a Similar System You Want to Build?
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '650px', margin: '0 auto 2rem auto' }}>
          Whether it is biometric attendance sync, automated dealer WhatsApp campaigns, or an 85-step manufacturing flow — let's build it for you.
        </p>
        <Link href="/contact" className="btn-primary">
          Discuss Your Project with SuPuja Creations <Send size={16} />
        </Link>
      </div>

    </div>
  );
}
