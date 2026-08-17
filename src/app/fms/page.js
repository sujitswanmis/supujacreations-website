'use client';

import React from 'react';
import Link from 'next/link';
import { 
  GitBranch, Factory, Clock, ShieldCheck, CheckCircle2, 
  AlertTriangle, ArrowRight, Layers, FileText, Send, Zap, Cpu
} from 'lucide-react';

export default function FMSWorkflowsPage() {
  const fmsStages = [
    {
      range: 'S01 - S10',
      title: 'Requisition, BOM & Material Issue',
      color: '#38bdf8',
      desc: 'Validating Bill of Materials (BOM), reserving raw steel plates and hollow pipes, generating store issue slips, and releasing work orders.',
      steps: [
        'S01: Production Plan & BOM Generation',
        'S02: Raw Material Availability & Allocation',
        'S03: Store Requisition & Material Issue Slip (MIS)',
        'S05: Issue of Laser Cut Raw Plates to Machine Shop',
        'S08: Job Card Creation with Barcode / Serial Batch',
        'S10: Quality Inward Verification for Raw Steel'
      ]
    },
    {
      range: 'S11 - S35',
      title: 'In-House Machining, CNC & Fabrication',
      color: '#fbbf24',
      desc: 'Precision laser cutting, CNC plate bending, rotor pipe lathe turning, side frame robotic/manual welding, and flange alignment.',
      steps: [
        'S12: Fiber Laser Cutting of Side End Plates',
        'S15: CNC Press Brake Multi-Angle Bending',
        'S18: Rotor Shaft Turning & Keyway Milling',
        'S22: Flange Welding & Fixture Setup',
        'S28: Side Frame & Skid Assembly Welding',
        'S34: In-Process Welding & Dimensional QC Check'
      ]
    },
    {
      range: 'S36 - S60',
      title: 'Vendor Job-Work, Heat Treatment & Machining',
      color: '#c084fc',
      desc: 'Outward Delivery Challan generation, sending gears and shafts for external hardening, vendor turnaround time (TAT) tracking, and inward QC.',
      steps: [
        'S37: Vendor Job-Work Outward Delivery Challan',
        'S40: Induction Hardening / Gas Carburizing (Crown Pinion)',
        'S44: External Gear Grinding & Spline Hobbing',
        'S48: Vendor Turnaround Time (TAT) SLA Monitoring',
        'S53: Inward Material Inspection & Hardness Rockwell Test',
        'S59: Job-Work Bill Verification & Cost Ledger Posting'
      ]
    },
    {
      range: 'S61 - S75',
      title: 'Sub-Assembly, Paint Shop & Final Assembly',
      color: '#22c55e',
      desc: 'Bevel gearbox assembly with oil seal testing, rotavator blade mounting, 7-tank anti-rust pretreatment, and automated powder coating.',
      steps: [
        'S62: Gearbox Sub-Assembly & Bearing Fitment',
        'S65: Oil Seal Leakage Pressure Testing',
        'S68: 7-Tank Chemical Pretreatment (Degreasing/Phosphating)',
        'S70: Automated Electrostatic Powder Coating & Baking Oven',
        'S72: High-Tensile Rotavator Blade Fitment with Torque Wrench',
        'S75: Safety Guard & PTO Shaft Integration'
      ]
    },
    {
      range: 'S76 - S85',
      title: 'Final Quality Audit, Tagging & Dispatch',
      color: '#fb7185',
      desc: 'Dry test run on test rig, laser serial number marking, owner manual attachment, tax invoicing, and logistics transporter allocation.',
      steps: [
        'S77: 15-Minute Dynamic Test Run on Test Bench',
        'S79: Final QC Sticker & Serial Number Plate Riveting',
        'S81: Packaging & Warranty Booklet Bundling',
        'S83: Tax Invoice & E-Way Bill Generation',
        'S84: Transporter Assignment & LR Entry',
        'S85: Delivery Confirmation & O2D Cycle Closure'
      ]
    }
  ];

  return (
    <div style={{ position: 'relative', padding: '4rem 1.5rem 6rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
      
      {/* AMBIENT GLOWS */}
      <div className="ambient-glow" style={{ top: '6%', left: '8%', width: '450px', height: '450px', background: 'rgba(34, 211, 238, 0.12)' }} />
      <div className="ambient-glow" style={{ top: '45%', right: '5%', width: '480px', height: '480px', background: 'rgba(251, 191, 36, 0.08)' }} />

      {/* HEADER SECTION */}
      <div style={{ maxWidth: '880px', marginBottom: '4.5rem' }}>
        <div className="page-badge">Workflow Engineering</div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, margin: '0 0 1.25rem 0' }}>
          85-Step Manufacturing Process Digitization & Flow Control (FMS)
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: 1.7, margin: 0 }}>
          How we take chaotic multi-department production operations and turn them into a transparent, self-escalating digital flow from raw material requisition to final delivery dispatch.
        </p>
      </div>

      {/* WHY FMS MATTERS BANNER */}
      <div className="glass-card" style={{ padding: '2.5rem 2rem', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.8) 100%)', marginBottom: '4.5rem', borderLeft: '4px solid #38bdf8' }}>
        <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', margin: '0 0 1rem 0' }}>
          What is FMS (Flow Management System)?
        </h3>
        <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.75, margin: '0 0 1.5rem 0' }}>
          In traditional manufacturing units, delays happen because nobody knows who is holding the job card. A department finishes work, leaves the material in a corner, and forgets to notify the next person.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1.25rem', borderRadius: '10px' }}>
            <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.35rem' }}>1. Granular Step Ownership</div>
            <div style={{ fontSize: '0.86rem', color: '#94a3b8' }}>Every single step (e.g. S18) is assigned to one individual with strict checklist criteria.</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1.25rem', borderRadius: '10px' }}>
            <div style={{ color: '#4ade80', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.35rem' }}>2. Planned vs Actual TAT</div>
            <div style={{ fontSize: '0.86rem', color: '#94a3b8' }}>Turnaround time is computed down to the minute. Delays trigger automatic color flags.</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1.25rem', borderRadius: '10px' }}>
            <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.35rem' }}>3. Self-Escalating Alerts</div>
            <div style={{ fontSize: '0.86rem', color: '#94a3b8' }}>If a stage breaches SLA threshold, alerts are dispatched directly to plant managers and directors.</div>
          </div>
        </div>
      </div>

      {/* STAGE BY STAGE DETAILED BREAKDOWN */}
      <div style={{ marginBottom: '5.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="page-badge">Stage Sequence</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            The 85-Step Manufacturing Pipeline
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.96rem' }}>
            Battle-tested architecture deployed for Agricultural Implements (Rotavators, Seed Drills, MB Ploughs) and Heavy Machinery.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {fmsStages.map((stg, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{ 
                padding: '2.2rem 2rem', 
                background: 'rgba(15, 23, 42, 0.85)',
                borderTop: `4px solid ${stg.color}`
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: stg.color, background: `${stg.color}15`, padding: '0.3rem 0.8rem', borderRadius: '6px', border: `1px solid ${stg.color}30` }}>
                  {stg.range}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Stage Category #{idx + 1}
                </span>
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
                {stg.title}
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {stg.desc}
              </p>

              <div style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '1.25rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Representative Workstation Sub-Steps:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem' }}>
                  {stg.steps.map((stp, sIdx) => (
                    <div key={sIdx} style={{ fontSize: '0.86rem', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <CheckCircle2 size={15} color={stg.color} style={{ flexShrink: 0 }} />
                      <span>{stp}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ADDITIONAL FMS MODULES */}
      <div style={{ marginBottom: '5.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <div className="page-badge">Beyond Shop-Floor</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
            Other Popular FMS Systems Deployed
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          <div className="glass-card" style={{ padding: '2.2rem 2rem' }}>
            <div style={{ color: '#38bdf8', marginBottom: '1rem' }}><GitBranch size={28} /></div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
              Order-to-Delivery (O2D) FMS
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
              Tracks customer orders from sales quotation, payment token verification, production scheduling, packaging, invoicing, transporter LR to delivery acknowledgment.
            </p>
            <span className="code-tag">Sales FMS</span> <span className="code-tag">Payment Verification</span>
          </div>

          <div className="glass-card" style={{ padding: '2.2rem 2rem' }}>
            <div style={{ color: '#fbbf24', marginBottom: '1rem' }}><FileText size={28} /></div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
              Procurement & Purchase FMS
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
              Controls purchase requisitions, 3-quote comparative approvals, PO generation, supplier delivery tracking, inward MRN quality inspection, and finance ledger signoff.
            </p>
            <span className="code-tag">Purchase FMS</span> <span className="code-tag">MRN Inward</span>
          </div>

          <div className="glass-card" style={{ padding: '2.2rem 2rem' }}>
            <div style={{ color: '#22c55e', marginBottom: '1rem' }}><ShieldCheck size={28} /></div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
              Customer Complaint & Service FMS
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
              Logs dealer/farmer complaints, assigns service engineers, tracks spare part dispatches, computes resolution TAT, and captures OTP-verified closure.
            </p>
            <span className="code-tag">Service FMS</span> <span className="code-tag">OTP Closure</span>
          </div>

        </div>
      </div>

      {/* BOTTOM ACTION */}
      <div className="glass-card" style={{ padding: '3rem 2rem', textAlign: 'center', background: 'rgba(15, 23, 42, 0.9)' }}>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
          Ready to Digitize Your Plant or Departmental Flow?
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '650px', margin: '0 auto 2rem auto' }}>
          Let us audit your current manual pain points and architect a custom FMS designed specifically for your factory or business.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/contact?service=Business%20Workflow%20%26%20FMS%20Systems" className="btn-primary">
            Request an FMS Consultation <Send size={16} />
          </Link>
          <Link href="/projects" className="btn-secondary">
            View FMS Case Studies <Layers size={16} />
          </Link>
        </div>
      </div>

    </div>
  );
}
