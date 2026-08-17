import React from 'react';
import Link from 'next/link';
import { 
  Award, ShieldCheck, FileSpreadsheet, Clock, Factory, 
  FileText, CheckCircle2, ArrowRight, Layers, Users, Zap, Briefcase, Sparkles
} from 'lucide-react';

export const metadata = {
  title: 'About SuPuja Creations | Senior MIS & Business Automation Specialists',
  description: 'Learn about SuPuja Creations, specialized business automation and MIS solutions agency with 10+ years of experience transforming manual business operations into automated flow.',
};

export default function AboutPage() {
  const milestones = [
    {
      period: '2014 - Present',
      role: 'Enterprise Business Automation & MIS Solutions',
      org: 'SuPuja Creations',
      desc: 'Architecting custom business operating systems, 85-step manufacturing FMS, REST API pipelines, and interactive executive reporting tools across manufacturing, trading, education, and service industries.'
    },
    {
      period: 'Key Achievement',
      role: 'Large-Scale Govt & Skill Portals Data Operations',
      org: 'Skill Development MIS Operations',
      desc: 'Managed end-to-end data lifecycle for 6,500+ candidates across Skill India, HPKVN, Kaushal Bharat, Pragati, and Panjee portals with zero reconciliation errors.'
    },
    {
      period: 'Core Specialization',
      role: 'Manufacturing Process Workflow Architecture',
      org: 'Heavy Machinery & Agri Implements Sector',
      desc: 'Digitized complex 85-step multi-department production workflows (Rotavator & Machinery lines) reducing turnaround time by 32%.'
    }
  ];

  return (
    <div style={{ position: 'relative', padding: '4rem 1.5rem 6rem 1.5rem', maxWidth: '1240px', margin: '0 auto' }}>
      
      {/* AMBIENT GLOWS */}
      <div className="ambient-glow" style={{ top: '5%', left: '10%', width: '400px', height: '400px', background: 'rgba(37, 99, 235, 0.12)' }} />
      <div className="ambient-glow" style={{ top: '40%', right: '8%', width: '450px', height: '450px', background: 'rgba(6, 182, 212, 0.1)' }} />

      {/* HEADER SECTION */}
      <div style={{ maxWidth: '850px', marginBottom: '4rem' }}>
        <div className="page-badge">About SuPuja Creations</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '0.75rem' }}>
          <img 
            src="/supuja-logo.png" 
            alt="SuPuja Creations Logo" 
            style={{
              height: '56px',
              width: 'auto',
              objectFit: 'contain',
              flexShrink: 0,
              filter: 'drop-shadow(0 4px 16px rgba(56, 189, 248, 0.4))'
            }} 
          />
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, margin: 0 }}>
            SuPuja Creations
          </h1>
        </div>
        <div style={{ fontSize: '1.4rem', fontWeight: 600, color: '#38bdf8', marginBottom: '1.5rem' }}>
          Senior MIS & Business Automation Agency
        </div>
        <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: 1.7, margin: 0 }}>
          Transforming manual, chaotic business operations into disciplined, transparent, and automated digital realities for over a decade.
        </p>
      </div>

      {/* DETAILED BIO & STORY */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'start', marginBottom: '5rem' }}>
        
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#ffffff', margin: '0 0 1.5rem 0' }}>
            Practical Automation Without Unnecessary Complexity
          </h2>
          
          <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            At SuPuja Creations, we do not build fragile software or theoretical dashboards that sit unused. Our work is grounded in solving everyday friction on the shop floor, inside purchase departments, in logistics dispatch, and in executive boardrooms.
          </p>

          <p style={{ color: '#94a3b8', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            Over the last 10+ years, we have worked deeply with organizations that ran on manual registers, chaotic WhatsApp groups, and broken spreadsheets. We specialize in taking those messy workflows, mapping them down to individual steps (S00 to S85), establishing single-owner accountability, defining Turnaround Times (TAT), and engineering automated escalation matrices.
          </p>

          <p style={{ color: '#94a3b8', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '2rem' }}>
            Whether using <strong>Google Sheets, Google Apps Script, REST APIs, HTML/JS Web Forms, or Looker Studio</strong>, our objective is always the same: ensure data enters the system once, processes accurately without manual intervention, and delivers real-time visibility to management.
          </p>

          {/* Govt Skill Portal Experience Callout */}
          <div className="glass-card" style={{ padding: '1.75rem', borderLeft: '4px solid #38bdf8' }}>
            <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '1.05rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={20} color="#38bdf8" />
              6,500+ Candidates Govt Portals Data Operations
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.65, margin: 0 }}>
              Headed large-scale MIS operations for vocational and skill development initiatives under government portals including <strong>Skill India, HPKVN, Kaushal Bharat, Pragati, and Panjee</strong>. Managed candidate enrollments, batch tracking, On-Job-Training (OJT) records, assessments, placement verifications, and financial invoice audit reconciliations.
            </p>
          </div>

        </div>

        {/* Operational Competencies Card */}
        <div className="glass-card" style={{ padding: '2.5rem 2rem', background: 'rgba(15, 23, 42, 0.85)' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShieldCheck size={22} color="#22c55e" />
            Core Operational Competencies
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ background: 'rgba(56, 189, 248, 0.1)', width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#38bdf8' }}>
                <FileSpreadsheet size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '1rem' }}>Master Data Architecture</div>
                <div style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '0.2rem' }}>Designing single-source-of-truth master registers for items, vendors, dealers, BOM components, and employees.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ background: 'rgba(251, 191, 36, 0.1)', width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fbbf24' }}>
                <Clock size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '1rem' }}>Turnaround Time (TAT) & Escalations</div>
                <div style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '0.2rem' }}>Dynamic SLA calculation, real-time delay tracking, and automated managerial escalation alerts.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ background: 'rgba(34, 197, 94, 0.1)', width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#22c55e' }}>
                <Factory size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '1rem' }}>Manufacturing & Job-Work Tracking</div>
                <div style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '0.2rem' }}>Multi-stage agricultural implement workflows, machine shop stages, vendor outward/inward, and scrap control.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ background: 'rgba(192, 132, 252, 0.1)', width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#c084fc' }}>
                <FileText size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '1rem' }}>SOP & Process Documentation</div>
                <div style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '0.2rem' }}>Gemba walk observations, audit checklists, standard operating procedures, and end-user team training manuals.</div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* CAREER TIMELINE & MILESTONES */}
      <div style={{ marginBottom: '5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <div className="page-badge">Track Record</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
            Experience & Milestone Highlights
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {milestones.map((m, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2.2rem 2rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                {m.period}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.25rem 0' }}>
                {m.role}
              </h3>
              <div style={{ fontSize: '0.9rem', color: '#fbbf24', fontWeight: 500, marginBottom: '1rem' }}>
                {m.org}
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* GUIDING PRINCIPLES */}
      <div className="glass-card" style={{ padding: '3rem 2.5rem', background: 'rgba(15, 23, 42, 0.85)', marginBottom: '5rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', margin: '0 0 1.75rem 0', textAlign: 'center' }}>
          How We Work: The 4 Rules of Practical Automation
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          <div>
            <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>1. Gemba First</div>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Never build a system in isolation. Understand the actual ground-level behavior of operators, clerks, and field staff first.
            </p>
          </div>

          <div>
            <div style={{ color: '#4ade80', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>2. Single Owner Steps</div>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Every workflow step must belong to exactly one designated individual so accountability is never diluted.
            </p>
          </div>

          <div>
            <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>3. Non-Disruptive Transition</div>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Upgrade systems progressively without halting daily operations or confusing employees with steep learning curves.
            </p>
          </div>

          <div>
            <div style={{ color: '#c084fc', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>4. Automated Escalations</div>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Management should only be alerted when SLAs are breached, eliminating the need to micromanage every task.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div style={{ textAlign: 'center', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        <Link href="/services" className="btn-primary">
          Explore Services Offered <ArrowRight size={16} />
        </Link>
        <Link href="/projects" className="btn-secondary">
          View Case Studies <Layers size={16} />
        </Link>
        <Link href="/contact" className="btn-secondary">
          Get in Touch <Briefcase size={16} />
        </Link>
      </div>

    </div>
  );
}
