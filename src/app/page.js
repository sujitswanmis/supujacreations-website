'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FileSpreadsheet, Cpu, Globe, Link2, GitBranch, Factory, 
  MapPin, MessageSquare, BarChart3, FileText, CheckCircle2, 
  ArrowRight, ShieldCheck, Clock, Layers, Users, Smartphone, 
  Send, Mail, Award, Database, Terminal, ArrowUpRight, Zap, Megaphone
} from 'lucide-react';
import { services } from '../data/servicesData';
import { projects } from '../data/projectsData';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const getIcon = (iconName, color) => {
    switch (iconName) {
      case 'Megaphone': return <Megaphone size={28} color={color} />;
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
    <div style={{ position: 'relative' }}>
      
      {/* AMBIENT GLOWS */}
      <div className="ambient-glow" style={{ top: '4%', left: '8%', width: '420px', height: '420px', background: 'rgba(37, 99, 235, 0.12)' }} />
      <div className="ambient-glow" style={{ top: '32%', right: '5%', width: '450px', height: '450px', background: 'rgba(6, 182, 212, 0.1)' }} />
      <div className="ambient-glow" style={{ bottom: '15%', left: '15%', width: '500px', height: '500px', background: 'rgba(147, 51, 234, 0.09)' }} />

      {/* HERO SECTION */}
      <section style={{ position: 'relative', zIndex: 1, padding: '5.5rem 1.5rem 4rem 1.5rem', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '920px', margin: '0 auto' }}>
          
          {/* Status Badge */}
          <div className="page-badge">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 10px #22c55e' }} />
            Available for Business Automation, FMS & MIS Architecture
          </div>

          {/* Brand Name & Title */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            margin: '0 0 0.85rem 0',
            color: '#ffffff'
          }}>
            SuPuja Creations
          </h1>

          <div style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 1.7rem)',
            fontWeight: 600,
            color: '#38bdf8',
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em'
          }}>
            Enterprise MIS & Business Automation Solutions
          </div>

          {/* Main Headline */}
          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: '#cbd5e1',
            lineHeight: 1.65,
            margin: '0 0 1rem 0',
            maxWidth: '820px',
            fontWeight: 400
          }}>
            We build practical business automation systems using <strong style={{ color: '#ffffff' }}>Google Sheets</strong>, <strong style={{ color: '#ffffff' }}>Google Apps Script</strong>, <strong style={{ color: '#ffffff' }}>REST APIs</strong>, <strong style={{ color: '#ffffff' }}>interactive dashboards</strong>, and modern web applications.
          </p>

          <p style={{
            fontSize: '0.98rem',
            color: '#94a3b8',
            margin: '0 0 2.5rem 0',
            maxWidth: '720px'
          }}>
            Helping organizations digitize sales, purchase, production, attendance, reporting, and complex operational workflows without disruption.
          </p>

          {/* Hero CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
            <Link href="/services" className="btn-primary">
              <Zap size={18} />
              Explore Services
            </Link>
            <Link href="/projects" className="btn-secondary">
              <Layers size={18} />
              View Case Studies
            </Link>
            <Link href="/contact" className="btn-secondary" style={{ background: 'rgba(15, 23, 42, 0.9)' }}>
              <MessageSquare size={18} />
              Discuss a Project
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '1.25rem',
            width: '100%',
            maxWidth: '1020px'
          }}>
            <div className="glass-card" style={{ padding: '1.6rem 1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#38bdf8', lineHeight: 1 }}>10+</div>
              <div style={{ fontSize: '0.86rem', color: '#94a3b8', marginTop: '0.5rem', fontWeight: 500 }}>Years of Practical MIS & Operations Experience</div>
            </div>

            <div className="glass-card" style={{ padding: '1.6rem 1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#4ade80', lineHeight: 1 }}>85-Step</div>
              <div style={{ fontSize: '0.86rem', color: '#94a3b8', marginTop: '0.5rem', fontWeight: 500 }}>Complex Manufacturing FMS Workflows Digitized</div>
            </div>

            <div className="glass-card" style={{ padding: '1.6rem 1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#fbbf24', lineHeight: 1 }}>6,500+</div>
              <div style={{ fontSize: '0.86rem', color: '#94a3b8', marginTop: '0.5rem', fontWeight: 500 }}>Govt Skill Portal Candidate Data Operations</div>
            </div>

            <div className="glass-card" style={{ padding: '1.6rem 1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#c084fc', lineHeight: 1 }}>50+</div>
              <div style={{ fontSize: '0.86rem', color: '#94a3b8', marginTop: '0.5rem', fontWeight: 500 }}>Custom Automations, APIs & Web Applications</div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE PHILOSOPHY / STRONG POSITIONING BANNER */}
      <section style={{ position: 'relative', zIndex: 1, padding: '3.5rem 1.5rem', background: 'linear-gradient(90deg, rgba(30, 58, 138, 0.25) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(14, 116, 144, 0.25) 100%)', borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#38bdf8', fontWeight: 700, marginBottom: '0.75rem' }}>
            Core Philosophy & Differentiator
          </div>

          <blockquote style={{
            fontSize: 'clamp(1.35rem, 3.2vw, 2rem)',
            fontWeight: 700,
            color: '#f8fafc',
            margin: '0 0 1rem 0',
            lineHeight: 1.35
          }}>
            &ldquo;I do not just prepare MIS reports. I design and automate complete business processes.&rdquo;
          </blockquote>

          <p style={{ fontSize: '1.05rem', color: '#94a3b8', margin: '0 0 2rem 0', fontStyle: 'italic' }}>
            (Main sirf reports nahi banata; main manual business processes ko structured digital systems mein convert karta hoon.)
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', color: '#e2e8f0', fontSize: '0.95rem' }}>
              <CheckCircle2 size={19} color="#22c55e" />
              <span>Zero Fluff, 100% Practical</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', color: '#e2e8f0', fontSize: '0.95rem' }}>
              <CheckCircle2 size={19} color="#22c55e" />
              <span>Scalable Architecture</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', color: '#e2e8f0', fontSize: '0.95rem' }}>
              <CheckCircle2 size={19} color="#22c55e" />
              <span>Non-Disruptive Upgrades</span>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT SNAPSHOT SECTION */}
      <section style={{ position: 'relative', zIndex: 1, padding: '5.5rem 1.5rem', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          
          <div>
            <div className="page-badge">About SuPuja Creations</div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ffffff', margin: '0 0 1.5rem 0', lineHeight: 1.25 }}>
              10+ Years of Turning Messy Operations into Automated Flow
            </h2>

            <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              SuPuja Creations is a specialized business automation and MIS solutions agency with over a decade of hands-on experience solving real shop-floor, corporate, and field problems.
            </p>

            <p style={{ color: '#94a3b8', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Our core capability lies in mapping chaotic, uncoordinated operations into a disciplined step-by-step workflow (S00..S85), assigning responsible persons, defining Turnaround Times (TAT), and automating real-time bottleneck alerts.
            </p>

            <Link href="/about" className="btn-primary">
              Read Full Background & Journey
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Quick Competencies Box */}
          <div className="glass-card" style={{ padding: '2.2rem 2rem', background: 'rgba(15, 23, 42, 0.85)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1.25rem 0', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ShieldCheck size={20} color="#22c55e" />
              Core Competencies Snapshot
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ background: 'rgba(56, 189, 248, 0.1)', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#38bdf8' }}>
                  <FileSpreadsheet size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.95rem' }}>Master Data Architecture</div>
                  <div style={{ fontSize: '0.84rem', color: '#94a3b8' }}>Unified single-source-of-truth structures for items, dealers, and BOMs.</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ background: 'rgba(251, 191, 36, 0.1)', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fbbf24' }}>
                  <Clock size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.95rem' }}>Turnaround Time (TAT) & Escalations</div>
                  <div style={{ fontSize: '0.84rem', color: '#94a3b8' }}>Dynamic delay identification and automated managerial escalation alerts.</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ background: 'rgba(34, 197, 94, 0.1)', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#22c55e' }}>
                  <Factory size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.95rem' }}>Manufacturing & Job-Work Tracking</div>
                  <div style={{ fontSize: '0.84rem', color: '#94a3b8' }}>Multi-stage machine shop workflows (Laser, CNC, Welding, Paint, Assembly).</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ background: 'rgba(192, 132, 252, 0.1)', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#c084fc' }}>
                  <Award size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.95rem' }}>6,500+ Candidate Govt Portals MIS</div>
                  <div style={{ fontSize: '0.84rem', color: '#94a3b8' }}>Skill India, HPKVN, Kaushal Bharat, Pragati & Panjee MIS operations.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ position: 'relative', zIndex: 1, padding: '5.5rem 1.5rem', background: 'rgba(15, 23, 42, 0.5)', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div>
              <div className="page-badge">What I Deliver</div>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                Specialized Automation Services
              </h2>
            </div>
            <Link href="/services" className="btn-secondary" style={{ padding: '0.65rem 1.3rem', fontSize: '0.9rem' }}>
              View All 9 Services
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}>
            {services.slice(0, 6).map((srv) => (
              <div key={srv.id} className="glass-card" style={{ padding: '2.2rem 2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1.25rem' }}>
                  {getIcon(srv.iconName, srv.accentColor)}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
                  {srv.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  {srv.shortDesc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.25rem' }}>
                  {srv.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="code-tag">{tag}</span>
                  ))}
                </div>
                <Link href={`/services#${srv.id}`} style={{ color: '#38bdf8', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: 'auto' }}>
                  Explore details <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FMS WORKFLOW SPOTLIGHT */}
      <section style={{ position: 'relative', zIndex: 1, padding: '5.5rem 1.5rem', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div className="page-badge">Engineering Flow Control</div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ffffff', margin: '0 0 1rem 0' }}>
            85-Step Manufacturing Process Digitization (FMS)
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6 }}>
            Eliminating shop-floor confusion with granular stage tracking, SLA turnaround times, and automated delay escalation matrices.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem'
        }}>
          <div className="fms-step">
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>STAGE S01-S10</span>
            <h4 style={{ margin: '0.75rem 0 0.4rem 0', color: '#ffffff', fontSize: '1.05rem' }}>Requisition & Material Issue</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
              BOM verification, raw steel allocation, store issue slips, and stock reservation.
            </p>
          </div>

          <div className="fms-step">
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fbbf24', background: 'rgba(251, 191, 36, 0.15)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>STAGE S11-S35</span>
            <h4 style={{ margin: '0.75rem 0 0.4rem 0', color: '#ffffff', fontSize: '1.05rem' }}>Machining & Fabrication</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
              Laser cutting, CNC bending, side plate welding, rotor shaft machining, and flange fitment.
            </p>
          </div>

          <div className="fms-step">
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#c084fc', background: 'rgba(192, 132, 252, 0.15)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>STAGE S36-S60</span>
            <h4 style={{ margin: '0.75rem 0 0.4rem 0', color: '#ffffff', fontSize: '1.05rem' }}>Vendor Job-Work & Heat Treat</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
              Outward challan, external heat treatment, gear hardening, vendor TAT, and inward QC.
            </p>
          </div>

          <div className="fms-step">
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#22c55e', background: 'rgba(34, 197, 94, 0.15)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>STAGE S61-S85</span>
            <h4 style={{ margin: '0.75rem 0 0.4rem 0', color: '#ffffff', fontSize: '1.05rem' }}>Assembly, Paint & Dispatch</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
              Gearbox fitment, blade mounting, powder coating, final QC testing, and serial dispatch.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/fms" className="btn-primary">
            Explore Complete FMS Architecture & Live Stages
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FEATURED PROJECTS PREVIEW */}
      <section style={{ position: 'relative', zIndex: 1, padding: '5.5rem 1.5rem', background: 'rgba(15, 23, 42, 0.5)', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div>
              <div className="page-badge">Case Studies</div>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                Featured Automation Projects
              </h2>
            </div>
            <Link href="/projects" className="btn-secondary" style={{ padding: '0.65rem 1.3rem', fontSize: '0.9rem' }}>
              View All 8 Case Studies
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {projects.slice(0, 3).map((p) => (
              <div key={p.id} className="glass-card" style={{ padding: '2.2rem 2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                  Case Study
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.35rem 0' }}>
                  {p.title}
                </h3>
                <div style={{ fontSize: '0.86rem', color: '#38bdf8', fontWeight: 500, marginBottom: '1.25rem' }}>
                  {p.subtitle}
                </div>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  {p.solution}
                </p>
                <div style={{ background: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.2)', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#22c55e', fontWeight: 700, textTransform: 'uppercase' }}>Measurable Impact</div>
                  <div style={{ fontSize: '0.85rem', color: '#f0fdf4', fontWeight: 500 }}>{p.impact}</div>
                </div>
                <Link href="/projects" style={{ color: '#38bdf8', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  Read full case study <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* QUICK INQUIRY & CONTACT SECTION */}
      <section style={{ position: 'relative', zIndex: 1, padding: '5.5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <div className="page-badge">Direct Collaboration</div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ffffff', margin: '0 0 1rem 0' }}>
            Have a Process to Automate?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
            Whether you need complex Google Sheets automation, a custom web form, manufacturing FMS, or full MIS architecture — let's build something practical.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
          
          {/* Quick Connect details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div className="glass-card" style={{ padding: '2.2rem 2rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', margin: '0 0 1.25rem 0' }}>
                Instant Connect Options
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(37, 99, 235, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Official Email</div>
                    <a href="mailto:sales@supujacreations.com" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                      sales@supujacreations.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(34, 197, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22c55e' }}>
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Phone / WhatsApp</div>
                    <a href="tel:+919988119276" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                      +91 99881 19276
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a 
                  href="https://wa.me/919988119276?text=Hello%20SuPuja%20Creations,%20I%20am%20interested%20in%20your%20MIS%20and%20Business%20Automation%20services." 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', boxShadow: '0 4px 14px rgba(22, 163, 74, 0.35)' }}
                >
                  <MessageSquare size={18} />
                  Chat on WhatsApp (+91 99881 19276)
                </a>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href="/contact" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                Go to Dedicated Contact Page <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Inquiry Form */}
          <ContactForm />

        </div>
      </section>

    </div>
  );
}
