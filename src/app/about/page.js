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
      desc: 'Architecting custom business operating systems, multi-stage manufacturing and business FMS, REST API pipelines, and interactive executive reporting tools across manufacturing, trading, and service industries.'
    },
    {
      period: 'Key Achievement',
      role: 'Enterprise Management Systems & CRM Architecture',
      org: 'End-to-End Operational Systems',
      desc: 'Architected and deployed full-suite CRM, Lead Management, Sales Orders, Vendor Procurement, and Production FMS across dozens of enterprises.'
    },
    {
      period: 'Core Specialization',
      role: 'Manufacturing Process Workflow Architecture',
      org: 'Machinery, Fabrication & Industrial Sector',
      desc: 'Digitized complex multi-stage production workflows with Planned vs. Actual SLA tracking, reducing manufacturing turnaround time by 62%.'
    }
  ];

  const methodologySteps = [
    {
      num: '01',
      phase: 'Discovery',
      title: 'Gemba Walk & Ground Reality Audit',
      desc: 'We observe the actual ground-level behavior of operators, clerks, and field staff to pinpoint real operational friction.'
    },
    {
      num: '02',
      phase: 'Mapping',
      title: 'Granular Step Deconstruction',
      desc: 'We break down the entire manual workflow into sequential, numbered milestones (S00, S01, S02... S-Final).'
    },
    {
      num: '03',
      phase: 'Ownership',
      title: 'Single-Owner Accountability Lock',
      desc: 'Every single workflow step is assigned to one designated employee. When completed, timestamps are locked with zero ambiguity.'
    },
    {
      num: '04',
      phase: 'SLA & TAT',
      title: 'Target Turnaround Time (TAT) Rules',
      desc: 'Formulas calculate the planned start and completion deadline for every task the moment a process initiates.'
    },
    {
      num: '05',
      phase: 'Database',
      title: 'Master Data Centralization',
      desc: 'We build single-source-of-truth master registers for items, BOM components, vendors, dealers, and staff.'
    },
    {
      num: '06',
      phase: 'Integrity',
      title: 'Point-of-Entry Data Validation',
      desc: 'We block bad or duplicate data at the input stage (mobile regex, duplicate PO block, positive quantities) instead of cleaning it later.'
    },
    {
      num: '07',
      phase: 'Automation',
      title: 'Apps Script, APIs & Cloud Triggers',
      desc: 'We engineer automated background data sync, dynamic PDF generation, instant email alerts, and WhatsApp messaging.'
    },
    {
      num: '08',
      phase: 'Resilience',
      title: 'Edge-Case & Failure Testing',
      desc: 'We stress-test batch timeout limits, API network dropouts, retry queues, and missing data scenarios for rock-solid stability.'
    },
    {
      num: '09',
      phase: 'Enablement',
      title: 'Hands-on Staff Training & SOPs',
      desc: 'We conduct team training with simple, non-disruptive mobile web forms and step-by-step Standard Operating Procedures.'
    },
    {
      num: '10',
      phase: 'Visibility',
      title: 'Live Executive Control & Escalations',
      desc: 'We deploy real-time Looker Studio KPI dashboards and automated WhatsApp delay alerts directly to management.'
    }
  ];

  return (
    <div style={{ position: 'relative', padding: '4.5rem 1.5rem 6.5rem 1.5rem', maxWidth: '1240px', margin: '0 auto' }}>
      
      {/* AMBIENT GLOWS */}
      <div className="ambient-glow" style={{ top: '6%', left: '8%', width: '450px', height: '450px', background: 'rgba(212, 175, 55, 0.12)' }} />
      <div className="ambient-glow" style={{ top: '40%', right: '5%', width: '420px', height: '420px', background: 'rgba(245, 215, 127, 0.08)' }} />

      {/* HEADER */}
      <div style={{ maxWidth: '850px', marginBottom: '4rem' }}>
        <div className="page-badge">
          <Sparkles size={14} color="#f5d77f" />
          <span>About SuPuja Creations</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, margin: '0 0 1rem 0' }}>
          10+ Years of Turning Messy Operations into <span className="gold-gradient-text">Automated Flow</span>
        </h1>
        <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#f5d77f', marginBottom: '1.5rem' }}>
          Senior MIS & Business Automation Agency
        </div>
        <p style={{ fontSize: '1.15rem', color: '#e4e4e7', lineHeight: 1.7, margin: 0 }}>
          Transforming manual, chaotic business operations into disciplined, transparent, and automated digital realities for over a decade.
        </p>
      </div>

      {/* DETAILED BIO & STORY */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem', alignItems: 'start', marginBottom: '5rem' }}>
        
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 1.5rem 0' }}>
            Practical Automation Without Unnecessary Complexity
          </h2>
          
          <p style={{ color: '#e4e4e7', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            At SuPuja Creations, we do not build fragile software or theoretical dashboards that sit unused. Our work is grounded in solving everyday friction on the shop floor, inside purchase departments, in logistics dispatch, and in executive boardrooms.
          </p>

          <p style={{ color: '#a1a1aa', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            Over the last 10+ years, we have worked deeply with organizations that ran on manual registers, chaotic WhatsApp groups, and broken spreadsheets. We specialize in taking those messy workflows, mapping them down to individual workstation steps, establishing single-owner accountability, defining Turnaround Times (TAT), and engineering automated escalation matrices.
          </p>

          <p style={{ color: '#a1a1aa', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '2rem' }}>
            Whether using <strong>Google Sheets, Google Apps Script, REST APIs, HTML/JS Web Forms, Meta Ads, or Looker Studio</strong>, our objective is always the same: ensure data enters the system once, processes accurately without manual intervention, and delivers real-time visibility to management.
          </p>

          {/* Govt Skill Portal Experience Callout */}
          <div className="glass-card" style={{ padding: '1.75rem', borderLeft: '4px solid #d4af37' }}>
            <div style={{ fontWeight: 700, color: '#f5d77f', fontSize: '1.05rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={20} color="#f5d77f" />
              6,500+ Candidates Govt Portals Data Operations
            </div>
            <p style={{ fontSize: '0.9rem', color: '#a1a1aa', lineHeight: 1.65, margin: 0 }}>
              Headed large-scale MIS operations for vocational and skill development initiatives under government portals including <strong>Skill India, HPKVN, Kaushal Bharat, Pragati, and Panjee</strong>. Managed candidate enrollments, batch tracking, On-Job-Training (OJT) records, assessments, placement verifications, and financial invoice audit reconciliations.
            </p>
          </div>

        </div>

        {/* Operational Competencies Card */}
        <div className="glass-card" style={{ padding: '2.5rem 2rem' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShieldCheck size={22} color="#d4af37" />
            Core Operational Competencies
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.14)', border: '1px solid rgba(212, 175, 55, 0.3)', width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#f5d77f' }}>
                <FileSpreadsheet size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem' }}>Master Data Architecture</div>
                <div style={{ fontSize: '0.88rem', color: '#a1a1aa', marginTop: '0.2rem' }}>Designing single-source-of-truth master registers for items, vendors, dealers, BOM components, and employees.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.14)', border: '1px solid rgba(212, 175, 55, 0.3)', width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#f5d77f' }}>
                <Clock size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem' }}>Turnaround Time (TAT) & Escalations</div>
                <div style={{ fontSize: '0.88rem', color: '#a1a1aa', marginTop: '0.2rem' }}>Dynamic SLA calculation, real-time delay tracking, and automated managerial escalation alerts.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.14)', border: '1px solid rgba(212, 175, 55, 0.3)', width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#f5d77f' }}>
                <Factory size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem' }}>Manufacturing & Job-Work Tracking</div>
                <div style={{ fontSize: '0.88rem', color: '#a1a1aa', marginTop: '0.2rem' }}>Multi-stage agricultural implement workflows, machine shop stages, vendor outward/inward, and scrap control.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.14)', border: '1px solid rgba(212, 175, 55, 0.3)', width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#f5d77f' }}>
                <FileText size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem' }}>SOP & Process Documentation</div>
                <div style={{ fontSize: '0.88rem', color: '#a1a1aa', marginTop: '0.2rem' }}>Gemba walk observations, audit checklists, standard operating procedures, and end-user team training manuals.</div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* CAREER TIMELINE & MILESTONES */}
      <div style={{ marginBottom: '5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <div className="page-badge">Track Record</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            Experience & Milestone Highlights
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {milestones.map((m, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2.2rem 2rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f5d77f', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                {m.period}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.25rem 0' }}>
                {m.role}
              </h3>
              <div style={{ fontSize: '0.9rem', color: '#f5d77f', fontWeight: 600, marginBottom: '1rem' }}>
                {m.org}
              </div>
              <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 10-STEP PROJECT EXECUTION METHODOLOGY */}
      <div className="glass-card" style={{ padding: '3.5rem 2rem', marginBottom: '5.5rem', border: '1px solid rgba(212, 175, 55, 0.35)' }}>
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">
            <Clock size={14} color="#f5d77f" />
            <span>Consulting & Implementation Blueprint</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            Our 10-Step <span className="gold-gradient-text">Gemba-to-Dashboard</span> Methodology
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.96rem', lineHeight: 1.6 }}>
            How we systematically transform chaotic, uncoordinated operations into disciplined, self-running digital systems:
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem'
        }}>
          {methodologySteps.map((step, sIdx) => (
            <div 
              key={sIdx}
              style={{
                background: 'rgba(20, 24, 34, 0.65)',
                border: '1px solid rgba(212, 175, 55, 0.18)',
                borderRadius: '12px',
                padding: '1.4rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                <span style={{
                  fontSize: '0.74rem',
                  fontWeight: 900,
                  background: 'rgba(212, 175, 55, 0.15)',
                  color: '#f5d77f',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(212, 175, 55, 0.3)'
                }}>
                  STEP {step.num}
                </span>
                <span style={{ fontSize: '0.72rem', color: '#71717a', fontWeight: 600 }}>{step.phase}</span>
              </div>
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.4rem 0' }}>
                {step.title}
              </h4>
              <p style={{ color: '#a1a1aa', fontSize: '0.85rem', lineHeight: 1.55, margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* GUIDING PRINCIPLES */}
      <div className="glass-card" style={{ padding: '3rem 2.5rem', marginBottom: '5rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', margin: '0 0 1.75rem 0', textAlign: 'center' }}>
          How We Work: The 4 Rules of Practical Automation
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          <div>
            <div style={{ color: '#f5d77f', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.5rem' }}>1. Gemba First</div>
            <p style={{ fontSize: '0.88rem', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
              Never build a system in isolation. Understand the actual ground-level behavior of operators, clerks, and field staff first.
            </p>
          </div>

          <div>
            <div style={{ color: '#f5d77f', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.5rem' }}>2. Single Owner Steps</div>
            <p style={{ fontSize: '0.88rem', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
              Every workflow step must belong to exactly one designated individual so accountability is never diluted.
            </p>
          </div>

          <div>
            <div style={{ color: '#f5d77f', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.5rem' }}>3. Non-Disruptive Transition</div>
            <p style={{ fontSize: '0.88rem', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
              Upgrade systems progressively without halting daily operations or confusing employees with steep learning curves.
            </p>
          </div>

          <div>
            <div style={{ color: '#f5d77f', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.5rem' }}>4. Automated Escalations</div>
            <p style={{ fontSize: '0.88rem', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
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
          View Case Studies <Layers size={16} color="#f5d77f" />
        </Link>
        <Link href="/contact" className="btn-secondary">
          Get in Touch <Briefcase size={16} color="#f5d77f" />
        </Link>
      </div>

    </div>
  );
}
