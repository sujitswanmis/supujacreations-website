'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FileSpreadsheet, Cpu, Globe, Link2, GitBranch, Factory, 
  MapPin, MessageSquare, BarChart3, FileText, CheckCircle2, 
  ArrowRight, ShieldCheck, Clock, Layers, Users, Smartphone, 
  Send, Mail, Award, Database, Terminal, ArrowUpRight, Zap, Megaphone, Sparkles
} from 'lucide-react';
import { services } from '../data/servicesData';
import { projects } from '../data/projectsData';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Users': return <Users size={26} color="#f5d77f" />;
      case 'FileText': return <FileText size={26} color="#f5d77f" />;
      case 'Layers': return <Layers size={26} color="#f5d77f" />;
      case 'ShieldCheck': return <ShieldCheck size={26} color="#f5d77f" />;
      case 'Award': return <Award size={26} color="#f5d77f" />;
      case 'Terminal': return <Terminal size={26} color="#f5d77f" />;
      case 'Megaphone': return <Megaphone size={26} color="#f5d77f" />;
      case 'FileSpreadsheet': return <FileSpreadsheet size={26} color="#f5d77f" />;
      case 'Cpu': return <Cpu size={26} color="#f5d77f" />;
      case 'Globe': return <Globe size={26} color="#f5d77f" />;
      case 'Link2': return <Link2 size={26} color="#f5d77f" />;
      case 'GitBranch': return <GitBranch size={26} color="#f5d77f" />;
      case 'Factory': return <Factory size={26} color="#f5d77f" />;
      case 'MapPin': return <MapPin size={26} color="#f5d77f" />;
      case 'MessageSquare': return <MessageSquare size={26} color="#f5d77f" />;
      case 'BarChart3': return <BarChart3 size={26} color="#f5d77f" />;
      default: return <Zap size={26} color="#f5d77f" />;
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      
      {/* AMBIENT GOLD GLOWS */}
      <div className="ambient-glow" style={{ top: '4%', left: '8%', width: '450px', height: '450px', background: 'rgba(212, 175, 55, 0.12)' }} />
      <div className="ambient-glow" style={{ top: '32%', right: '5%', width: '450px', height: '450px', background: 'rgba(245, 215, 127, 0.08)' }} />
      <div className="ambient-glow" style={{ bottom: '15%', left: '15%', width: '500px', height: '500px', background: 'rgba(184, 134, 11, 0.09)' }} />

      {/* HERO SECTION */}
      <section style={{ position: 'relative', zIndex: 1, padding: '5.5rem 1.5rem 4rem 1.5rem', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '920px', margin: '0 auto' }}>
          
          {/* Status Badge */}
          <div className="page-badge">
            <Sparkles size={14} color="#f5d77f" />
            <span>Available for Enterprise Automation, FMS & MIS Architecture</span>
          </div>

          {/* Brand Name & Logo: SIDE BY SIDE */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'nowrap', gap: '1.1rem', marginBottom: '0.85rem' }}>
            <img 
              src="/supuja-logo.png" 
              alt="SuPuja Creations Logo" 
              style={{
                height: '66px',
                width: 'auto',
                objectFit: 'contain',
                flexShrink: 0,
                filter: 'drop-shadow(0 4px 18px rgba(212, 175, 55, 0.5))'
              }} 
            />
            <h1 style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0,
              color: '#ffffff',
              display: 'inline-flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              gap: '0.55rem'
            }}>
              <span>SuPuja</span>
              <span className="gold-gradient-text">Creations</span>
            </h1>
          </div>

          <div style={{
            fontSize: 'clamp(1.25rem, 2.8vw, 1.8rem)',
            fontWeight: 700,
            color: '#f5d77f',
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em'
          }}>
            Enterprise MIS & Business Automation Solutions
          </div>

          {/* Main Headline */}
          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: '#e4e4e7',
            lineHeight: 1.65,
            margin: '0 0 1rem 0',
            maxWidth: '820px',
            fontWeight: 400
          }}>
            We engineer practical business automation systems using <strong style={{ color: '#f5d77f' }}>Google Sheets</strong>, <strong style={{ color: '#f5d77f' }}>Google Apps Script</strong>, <strong style={{ color: '#f5d77f' }}>REST APIs</strong>, <strong style={{ color: '#f5d77f' }}>Looker Dashboards</strong>, and custom web applications.
          </p>

          <p style={{
            fontSize: '0.98rem',
            color: '#a1a1aa',
            margin: '0 0 2.5rem 0',
            maxWidth: '720px'
          }}>
            Helping organizations digitize CRM, leads, sales orders, manufacturing lines, client accounts, vendor procurement, service tickets, attendance, and executive reporting.
          </p>

          {/* Hero CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
            <Link href="/services" className="btn-primary">
              <Zap size={18} />
              Explore Services & Pricing
            </Link>
            <Link href="/fms" className="btn-secondary">
              <Layers size={18} color="#f5d77f" />
              Multi-Stage FMS Workflows
            </Link>
            <Link href="/contact" className="btn-secondary">
              <MessageSquare size={18} color="#f5d77f" />
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
            <div className="glass-card" style={{ padding: '1.75rem 1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: '#f5d77f', lineHeight: 1 }}>10+</div>
              <div style={{ fontSize: '0.86rem', color: '#a1a1aa', marginTop: '0.5rem', fontWeight: 500 }}>Years of Practical MIS & Operations Track Record</div>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem 1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: '#f5d77f', lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: '0.86rem', color: '#a1a1aa', marginTop: '0.5rem', fontWeight: 500 }}>Planned vs. Actual Real-Time Delay Visibility (FMS)</div>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem 1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: '#f5d77f', lineHeight: 1 }}>8+</div>
              <div style={{ fontSize: '0.86rem', color: '#a1a1aa', marginTop: '0.5rem', fontWeight: 500 }}>Core Enterprise Management Systems (CRM, S-Orders, Vendors, Production)</div>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem 1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: '#f5d77f', lineHeight: 1 }}>50+</div>
              <div style={{ fontSize: '0.86rem', color: '#a1a1aa', marginTop: '0.5rem', fontWeight: 500 }}>Custom Automations, APIs & Web Applications</div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE PHILOSOPHY / STRONG POSITIONING BANNER */}
      <section style={{ position: 'relative', zIndex: 1, padding: '3.8rem 1.5rem', background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.08) 0%, rgba(14, 17, 24, 0.95) 50%, rgba(184, 134, 11, 0.08) 100%)', borderTop: '1px solid rgba(212, 175, 55, 0.2)', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f5d77f', fontWeight: 700, marginBottom: '0.75rem' }}>
            Core Philosophy & Differentiator
          </div>

          <blockquote style={{
            fontSize: 'clamp(1.35rem, 3.2vw, 2rem)',
            fontWeight: 800,
            color: '#ffffff',
            margin: '0 0 1rem 0',
            lineHeight: 1.35
          }}>
            &ldquo;We do not just prepare MIS reports. We engineer and automate complete business processes.&rdquo;
          </blockquote>

          <p style={{ fontSize: '1.05rem', color: '#f5d77f', margin: '0 0 2rem 0', fontStyle: 'italic', opacity: 0.9 }}>
            (Main sirf reports nahi banata; main manual business processes ko structured digital systems mein convert karta hoon.)
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', color: '#f8fafc', fontSize: '0.95rem' }}>
              <CheckCircle2 size={19} color="#d4af37" />
              <span>Zero Fluff, 100% Practical</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', color: '#f8fafc', fontSize: '0.95rem' }}>
              <CheckCircle2 size={19} color="#d4af37" />
              <span>Scalable Architecture</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', color: '#f8fafc', fontSize: '0.95rem' }}>
              <CheckCircle2 size={19} color="#d4af37" />
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

            <p style={{ color: '#e4e4e7', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              SuPuja Creations is a specialized business automation and MIS solutions agency with over a decade of hands-on experience solving real shop-floor, corporate, and field problems.
            </p>

            <p style={{ color: '#a1a1aa', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Our core capability lies in mapping chaotic, uncoordinated operations into a disciplined step-by-step workflow (S00..S85), assigning responsible persons, defining Turnaround Times (TAT), and automating real-time bottleneck alerts.
            </p>

            <Link href="/about" className="btn-primary">
              Read Full Background & Journey
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Quick Competencies Box */}
          <div className="glass-card" style={{ padding: '2.2rem 2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: '0 0 1.25rem 0', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ShieldCheck size={20} color="#d4af37" />
              Core Competencies Snapshot
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.14)', border: '1px solid rgba(212, 175, 55, 0.3)', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#f5d77f' }}>
                  <FileSpreadsheet size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.95rem' }}>Master Data Architecture</div>
                  <div style={{ fontSize: '0.84rem', color: '#a1a1aa' }}>Unified single-source-of-truth structures for items, dealers, and BOMs.</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.14)', border: '1px solid rgba(212, 175, 55, 0.3)', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#f5d77f' }}>
                  <Clock size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.95rem' }}>Turnaround Time (TAT) & Escalations</div>
                  <div style={{ fontSize: '0.84rem', color: '#a1a1aa' }}>Dynamic delay identification and automated managerial escalation alerts.</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.14)', border: '1px solid rgba(212, 175, 55, 0.3)', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#f5d77f' }}>
                  <Factory size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.95rem' }}>Manufacturing & Job-Work Tracking</div>
                  <div style={{ fontSize: '0.84rem', color: '#a1a1aa' }}>Multi-stage machine shop workflows (Laser, CNC, Welding, Paint, Assembly).</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.14)', border: '1px solid rgba(212, 175, 55, 0.3)', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#f5d77f' }}>
                  <Users size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.95rem' }}>8+ Core Enterprise Systems</div>
                  <div style={{ fontSize: '0.84rem', color: '#a1a1aa' }}>CRM, Lead Management, S-Orders, Vendors, Production, Service & Feedback.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ position: 'relative', zIndex: 1, padding: '5.5rem 1.5rem', background: 'rgba(10, 12, 18, 0.6)', borderTop: '1px solid rgba(212, 175, 55, 0.15)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div>
              <div className="page-badge">What We Deliver</div>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                Enterprise Systems & Specialized Services
              </h2>
            </div>
            <Link href="/services" className="btn-secondary" style={{ padding: '0.65rem 1.3rem', fontSize: '0.9rem' }}>
              View All Services & Pricing
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}>
            {services.slice(0, 8).map((srv) => (
              <div key={srv.id} className="glass-card" style={{ padding: '2.2rem 2rem', display: 'flex', flexDirection: 'column', position: 'relative', borderTop: srv.popularBadge ? '3px solid #f5d77f' : '1px solid rgba(212, 175, 55, 0.2)' }}>
                {srv.popularBadge && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '16px',
                    background: 'linear-gradient(135deg, #d4af37, #b8860b)',
                    color: '#070a10',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)'
                  }}>
                    {srv.popularBadge}
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'rgba(212, 175, 55, 0.14)',
                    border: '1px solid rgba(212, 175, 55, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {getIcon(srv.iconName)}
                  </div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#f5d77f' }}>
                    {srv.cost}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
                  {srv.title}
                </h3>
                <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  {srv.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.25rem' }}>
                  {srv.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="code-tag">{tag}</span>
                  ))}
                </div>
                <Link href={`/services#${srv.id}`} style={{ color: '#f5d77f', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: 'auto' }}>
                  Explore details & Book <ArrowRight size={14} />
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
            Multi-Stage Business & Manufacturing Flow Control (FMS)
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '1rem', lineHeight: 1.6 }}>
            Eliminating shop-floor confusion with granular Planned vs. Actual tracking, defined Target TATs, and automated delay escalation matrices.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem'
        }}>
          <div className="fms-step">
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f5d77f', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>STAGE GROUP 1</span>
            <h4 style={{ margin: '0.75rem 0 0.4rem 0', color: '#ffffff', fontSize: '1.05rem' }}>Requisition & Material Issue</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.5 }}>
              BOM verification, raw material allocation, digital store issue slips, and stock reservation.
            </p>
          </div>

          <div className="fms-step">
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f5d77f', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>STAGE GROUP 2</span>
            <h4 style={{ margin: '0.75rem 0 0.4rem 0', color: '#ffffff', fontSize: '1.05rem' }}>Machining & Fabrication</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.5 }}>
              Laser cutting, CNC bending, rotor lathe turning, precision welding, and fixture alignment.
            </p>
          </div>

          <div className="fms-step">
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f5d77f', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>STAGE GROUP 3</span>
            <h4 style={{ margin: '0.75rem 0 0.4rem 0', color: '#ffffff', fontSize: '1.05rem' }}>Vendor Job-Work & Heat Treat</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.5 }}>
              Outward challan, external heat treatment, gear hardening, vendor SLA timer, and inward QC.
            </p>
          </div>

          <div className="fms-step">
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f5d77f', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>STAGE GROUP 4</span>
            <h4 style={{ margin: '0.75rem 0 0.4rem 0', color: '#ffffff', fontSize: '1.05rem' }}>Assembly, Paint & Dispatch</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.5 }}>
              Gearbox fitment, blade mounting, powder coating, final QC testing, and serial dispatch.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/fms" className="btn-primary">
            Explore Complete FMS Architecture & Live Dashboard
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FEATURED PROJECTS PREVIEW */}
      <section style={{ position: 'relative', zIndex: 1, padding: '5.5rem 1.5rem', background: 'rgba(10, 12, 18, 0.6)', borderTop: '1px solid rgba(212, 175, 55, 0.15)' }}>
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
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f5d77f', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                  Case Study
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.35rem 0' }}>
                  {p.title}
                </h3>
                <div style={{ fontSize: '0.86rem', color: '#f5d77f', fontWeight: 500, marginBottom: '1.25rem' }}>
                  {p.subtitle}
                </div>
                <p style={{ fontSize: '0.88rem', color: '#a1a1aa', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  {p.solution}
                </p>
                <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.25)', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#f5d77f', fontWeight: 700, textTransform: 'uppercase' }}>Measurable Impact</div>
                  <div style={{ fontSize: '0.85rem', color: '#fef3c7', fontWeight: 500 }}>{p.impact}</div>
                </div>
                <Link href="/projects" style={{ color: '#f5d77f', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
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
          <p style={{ color: '#a1a1aa', fontSize: '1rem' }}>
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
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.14)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f5d77f' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#a1a1aa', textTransform: 'uppercase', fontWeight: 600 }}>Official Email</div>
                    <a href="mailto:sales@supujacreations.com" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                      sales@supujacreations.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.14)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f5d77f' }}>
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#a1a1aa', textTransform: 'uppercase', fontWeight: 600 }}>Phone / WhatsApp</div>
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
                  style={{ width: '100%', justifyContent: 'center' }}
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
