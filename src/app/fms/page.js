'use client';

import React from 'react';
import Link from 'next/link';
import { 
  GitBranch, Factory, Clock, ShieldCheck, CheckCircle2, 
  AlertTriangle, ArrowRight, Layers, FileText, Send, Zap, Cpu, Sparkles
} from 'lucide-react';

export default function FMSWorkflowsPage() {
  const fmsStages = [
    {
      range: 'S01 - S10',
      title: 'Requisition, BOM & Material Issue',
      color: '#f5d77f',
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
      color: '#f5d77f',
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
      color: '#f5d77f',
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
      color: '#f5d77f',
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
      color: '#f5d77f',
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
    <div style={{ position: 'relative', padding: '4.5rem 1.5rem 6.5rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
      
      {/* AMBIENT GOLD GLOWS */}
      <div className="ambient-glow" style={{ top: '6%', left: '8%', width: '450px', height: '450px', background: 'rgba(212, 175, 55, 0.12)' }} />
      <div className="ambient-glow" style={{ top: '45%', right: '5%', width: '480px', height: '480px', background: 'rgba(245, 215, 127, 0.08)' }} />

      {/* HEADER SECTION */}
      <div style={{ maxWidth: '880px', marginBottom: '4.5rem' }}>
        <div className="page-badge">
          <Sparkles size={14} color="#f5d77f" />
          <span>Workflow Engineering</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, margin: '0 0 1.25rem 0' }}>
          85-Step Manufacturing Process Digitization & Flow Control (<span className="gold-gradient-text">FMS</span>)
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#e4e4e7', lineHeight: 1.7, margin: 0 }}>
          How we take chaotic multi-department production operations and turn them into a transparent, self-escalating digital flow from raw material requisition to final delivery dispatch.
        </p>
      </div>

      {/* WHY FMS MATTERS BANNER */}
      <div className="glass-card" style={{ padding: '2.5rem 2rem', background: 'linear-gradient(135deg, rgba(14, 17, 24, 0.95) 0%, rgba(20, 24, 34, 0.8) 100%)', marginBottom: '4.5rem', borderLeft: '4px solid #d4af37' }}>
        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: '0 0 1rem 0' }}>
          What is FMS (Flow Management System)?
        </h3>
        <p style={{ color: '#e4e4e7', fontSize: '0.98rem', lineHeight: 1.75, margin: '0 0 1.5rem 0' }}>
          In traditional manufacturing units, delays happen because nobody knows who is holding the job card. A department finishes work, leaves the material in a corner, and forgets to notify the next person.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(212, 175, 55, 0.06)', border: '1px solid rgba(212, 175, 55, 0.18)', padding: '1.25rem', borderRadius: '10px' }}>
            <div style={{ color: '#f5d77f', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.35rem' }}>1. Granular Step Ownership</div>
            <div style={{ fontSize: '0.86rem', color: '#a1a1aa' }}>Every single step (e.g. S18) is assigned to one individual with strict checklist criteria.</div>
          </div>
          <div style={{ background: 'rgba(212, 175, 55, 0.06)', border: '1px solid rgba(212, 175, 55, 0.18)', padding: '1.25rem', borderRadius: '10px' }}>
            <div style={{ color: '#f5d77f', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.35rem' }}>2. Planned vs Actual TAT</div>
            <div style={{ fontSize: '0.86rem', color: '#a1a1aa' }}>Turnaround time is computed down to the minute. Delays trigger automatic color flags.</div>
          </div>
          <div style={{ background: 'rgba(212, 175, 55, 0.06)', border: '1px solid rgba(212, 175, 55, 0.18)', padding: '1.25rem', borderRadius: '10px' }}>
            <div style={{ color: '#f5d77f', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.35rem' }}>3. Self-Escalating Alerts</div>
            <div style={{ fontSize: '0.86rem', color: '#a1a1aa' }}>If a stage breaches SLA threshold, alerts are dispatched directly to plant managers and directors.</div>
          </div>
        </div>
      </div>

      {/* STAGE BY STAGE DETAILED BREAKDOWN */}
      <div style={{ marginBottom: '5.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="page-badge">Stage Sequence</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            The 85-Step Manufacturing Pipeline
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.96rem' }}>
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
                borderTop: `4px solid ${stg.color}`
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f5d77f', background: 'rgba(212, 175, 55, 0.15)', padding: '0.3rem 0.8rem', borderRadius: '6px', border: '1px solid rgba(212, 175, 55, 0.35)' }}>
                  {stg.range}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>
                  Stage Category #{idx + 1}
                </span>
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
                {stg.title}
              </h3>
              <p style={{ color: '#e4e4e7', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {stg.desc}
              </p>

              <div style={{ background: 'rgba(20, 24, 34, 0.5)', padding: '1.25rem', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.15)' }}>
                <div style={{ fontSize: '0.82rem', color: '#f5d77f', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Representative Workstation Sub-Steps:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem' }}>
                  {stg.steps.map((stp, sIdx) => (
                    <div key={sIdx} style={{ fontSize: '0.86rem', color: '#e4e4e7', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <CheckCircle2 size={15} color="#d4af37" style={{ flexShrink: 0 }} />
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
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            Other Popular FMS Systems Deployed
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          <div className="glass-card" style={{ padding: '2.2rem 2rem' }}>
            <div style={{ color: '#f5d77f', marginBottom: '1rem' }}><GitBranch size={28} /></div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
              Order-to-Delivery (O2D) FMS
            </h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
              Tracks customer orders from sales quotation, payment token verification, production scheduling, packaging, invoicing, transporter LR to delivery acknowledgment.
            </p>
            <span className="code-tag">Sales FMS</span> <span className="code-tag">Payment Verification</span>
          </div>

          <div className="glass-card" style={{ padding: '2.2rem 2rem' }}>
            <div style={{ color: '#f5d77f', marginBottom: '1rem' }}><FileText size={28} /></div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
              Procurement & Purchase FMS
            </h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
              Controls purchase requisitions, 3-quote comparative approvals, PO generation, supplier delivery tracking, inward MRN quality inspection, and finance ledger signoff.
            </p>
            <span className="code-tag">Purchase FMS</span> <span className="code-tag">MRN Inward</span>
          </div>

          <div className="glass-card" style={{ padding: '2.2rem 2rem' }}>
            <div style={{ color: '#f5d77f', marginBottom: '1rem' }}><ShieldCheck size={28} /></div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
              Customer Complaint & Service FMS
            </h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
              Logs client/farmer complaints, assigns service engineers, tracks spare part dispatches, computes resolution TAT, and captures OTP-verified closure.
            </p>
            <span className="code-tag">Service FMS</span> <span className="code-tag">OTP Closure</span>
          </div>

        </div>
      </div>

      {/* BOTTOM ACTION */}
      <div className="glass-card" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
          Ready to Digitize Your Plant or Departmental Flow?
        </h3>
        <p style={{ color: '#a1a1aa', fontSize: '1rem', maxWidth: '650px', margin: '0 auto 2rem auto' }}>
          Let us audit your current manual pain points and architect a custom FMS designed specifically for your factory or business.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/contact?service=Business%20Workflow%20%26%20FMS%20Systems" className="btn-primary">
            Request an FMS Consultation <Send size={16} />
          </Link>
          <Link href="/projects" className="btn-secondary">
            View FMS Case Studies <Layers size={16} color="#f5d77f" />
          </Link>
        </div>
      </div>

    </div>
  );
}
