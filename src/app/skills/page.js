'use client';

import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, Zap, Clock, Terminal, Code2, 
  Layers, ArrowRight, ShieldCheck, Cpu, Database
} from 'lucide-react';
import { skillCategories, masteredFormulas } from '../../data/skillsData';

export default function SkillsPage() {
  return (
    <div style={{ position: 'relative', padding: '4rem 1.5rem 6rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
      
      {/* AMBIENT GLOWS */}
      <div className="ambient-glow" style={{ top: '6%', right: '8%', width: '450px', height: '450px', background: 'rgba(34, 197, 94, 0.1)' }} />
      <div className="ambient-glow" style={{ top: '40%', left: '5%', width: '480px', height: '480px', background: 'rgba(56, 189, 248, 0.1)' }} />

      {/* HEADER SECTION */}
      <div style={{ maxWidth: '850px', marginBottom: '4.5rem' }}>
        <div className="page-badge">Technical Mastery</div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, margin: '0 0 1.25rem 0' }}>
          Honest Skills Matrix & Formula Encyclopedia
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: 1.7, margin: 0 }}>
          A transparent, production-verified breakdown of my technical proficiencies, everyday Google Sheets formulas, script architectures, and modern web integrations.
        </p>
      </div>

      {/* SKILLS CATEGORIES SECTION */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '5.5rem' }}>
        {skillCategories.map((cat) => (
          <div 
            key={cat.id} 
            className="glass-card" 
            style={{ 
              padding: '2.5rem 2.2rem', 
              background: 'rgba(15, 23, 42, 0.85)',
              borderTop: `4px solid ${cat.accentColor}`
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: cat.accentColor, display: 'inline-block' }} />
              <h2 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                {cat.title}
              </h2>
            </div>
            
            <p style={{ color: '#94a3b8', fontSize: '0.94rem', marginBottom: '1.75rem' }}>
              {cat.desc}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem'
            }}>
              {cat.skills.map((s, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    background: 'rgba(30, 41, 59, 0.45)', 
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '10px',
                    padding: '1.25rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                    <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.98rem' }}>{s.name}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: cat.accentColor, background: `${cat.accentColor}18`, padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                      {s.level}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FORMULA ENCYCLOPEDIA SECTION */}
      <div style={{ marginBottom: '5.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="page-badge">Deep Spreadsheet Logic</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            Production Formulas Mastered
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.96rem' }}>
            Formulas I use daily to build robust, crash-proof master data architectures that scale across thousands of rows.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {masteredFormulas.map((f, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem 1.8rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="formula-pill" style={{ fontSize: '0.95rem' }}>
                  <Terminal size={15} color="#38bdf8" />
                  {f.formula}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>
                  {f.category}
                </span>
              </div>

              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem', flexGrow: 1 }}>
                {f.description}
              </p>

              <div style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '0.85rem 1rem' }}>
                <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Enterprise Production Example:
                </div>
                <code style={{ fontSize: '0.78rem', color: '#38bdf8', fontFamily: 'JetBrains Mono, monospace', wordBreak: 'break-all', display: 'block', lineHeight: 1.4 }}>
                  {f.example}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SPREADSHEET ARCHITECTURE PHILOSOPHY */}
      <div className="glass-card" style={{ padding: '3rem 2.5rem', background: 'rgba(15, 23, 42, 0.9)', marginBottom: '5rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', margin: '0 0 1.25rem 0', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <ShieldCheck size={22} color="#22c55e" />
          The 3 Golden Rules of Sheet Architecture
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
          <div>
            <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '1rem', marginBottom: '0.35rem' }}>
              1. Never Mix Input & Calculation
            </div>
            <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Raw data entry sheets must remain purely tabular without inline calculation formulas. Aggregation must always occur in separate reporting views.
            </p>
          </div>

          <div>
            <div style={{ color: '#4ade80', fontWeight: 700, fontSize: '1rem', marginBottom: '0.35rem' }}>
              2. ArrayFormulas Over Dragging
            </div>
            <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Formulas placed in row 1 or 2 with `=ARRAYFORMULA()` ensure that new rows automatically receive calculations without human dragging errors.
            </p>
          </div>

          <div>
            <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: '1rem', marginBottom: '0.35rem' }}>
              3. Master Data Normalization
            </div>
            <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Item codes, dealer names, and GST numbers must be referenced from validated master lists via XLOOKUP to prevent spelling discrepancies.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div style={{ textAlign: 'center', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        <Link href="/services" className="btn-secondary">
          Explore Services <ArrowRight size={16} />
        </Link>
        <Link href="/projects" className="btn-secondary">
          View Projects <Layers size={16} />
        </Link>
        <Link href="/contact" className="btn-primary">
          Inquire for Automation <Terminal size={16} />
        </Link>
      </div>

    </div>
  );
}
