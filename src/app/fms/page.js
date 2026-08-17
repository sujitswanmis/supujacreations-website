'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  GitBranch, Factory, Clock, ShieldCheck, CheckCircle2, 
  AlertTriangle, ArrowRight, Layers, FileText, Send, Zap, Cpu, Sparkles,
  AlertCircle, Users, BarChart3, TrendingDown, Eye, Bell, CheckSquare, ChevronRight
} from 'lucide-react';

export default function FMSWorkflowsPage() {
  // Real-life problem flows where businesses suffer massive hidden losses
  const problemFlows = [
    {
      title: 'Problem Scenario 1: Sales to Production Handover Disconnect',
      dept: 'Sales ➡️ Factory Floor',
      realExample: 'A client confirms a ₹5 Lakh custom machinery order and pays the advance deposit. However, for 6 whole days, the production plant remains unaware of the exact configuration to build because Sales communicated only in informal WhatsApp chats without updating the centralized ERP or master sheet.',
      hiddenLoss: 'Order delivery delayed by 12 days, resulting in ₹50,000 late penalties and the loss of repeat client contracts.',
      solution: 'SuPuja FMS automatically locks the verified BOM and generates a digital Work Order with defined Planned TAT the instant an order is approved by Sales and Finance.'
    },
    {
      title: 'Problem Scenario 2: Store Requisition & Material Availability Bottlenecks',
      dept: 'Store ➡️ Machine Shop',
      realExample: 'The CNC fiber laser cutter and 4 operators remain idle since 9:00 AM because raw steel plates have not been issued by the warehouse. The storekeeper claims the physical requisition slip lacked the Plant Head’s signature, who was caught in an offsite meeting.',
      hiddenLoss: 'Daily losses of over ₹15,000 in idle labor and machine downtime, causing cascading schedule delays across all workstations.',
      solution: 'Automated Planned vs. Actual countdown timers trigger instant digital approvals on mobile, with auto-escalation to management if requisitions remain pending beyond 30 minutes.'
    },
    {
      title: 'Problem Scenario 3: Vendor Job-Work & External Processing Black Hole',
      dept: 'Vendor Procurement ➡️ Inward QC',
      realExample: '50 heavy-duty gear shafts were dispatched to a third-party vendor for induction hardening with an agreed 2-day return. However, 11 days passed without any follow-up because the outward entry was buried in a paper register.',
      hiddenLoss: 'Final assembly line ground to a halt, and management only discovered the shortage when the client arrived with freight trucks for loading.',
      solution: 'The FMS assigns strict Planned Return SLAs to every outward challan, dispatching automatic WhatsApp reminders to vendors and procurement managers before breaches occur.'
    },
    {
      title: 'Problem Scenario 4: Inter-Departmental Blame Game & Zero Accountability',
      dept: 'All Departments (Sales, Store, Production, Accounts)',
      realExample: 'When the Managing Director demands an explanation for delayed shipments, Sales blames Production, Production blames Store for late raw material, Store blames Accounts for pending PO approval, and Accounts blames Sales for missing payment receipts.',
      hiddenLoss: 'Owners spend 3+ hours daily resolving internal disputes instead of focusing on business growth, market expansion, and profitability.',
      solution: 'The Owner’s Live Executive Dashboard tracks the exact timestamp, responsible individual, and delay variance at every workstation with zero ambiguity.'
    }
  ];

  // Mockup live dashboard items showing Planned vs Actual in action
  const liveDashboardData = [
    {
      soNumber: 'SO-2026-089',
      item: 'Heavy Duty Rotary Tiller (Batch of 20 Units)',
      currentStage: 'S40: Induction Hardening (Vendor Job-Work)',
      responsiblePerson: 'Manoj Sharma (Purchase & Vendor Lead)',
      plannedStart: '14 Aug, 10:00 AM',
      plannedFinish: '15 Aug, 06:00 PM',
      actualStart: '14 Aug, 11:30 AM',
      actualStatus: 'Delayed (+36.5 Hrs)',
      statusType: 'danger',
      escalation: '🚨 WhatsApp Escalation Dispatched to Director'
    },
    {
      soNumber: 'SO-2026-092',
      item: 'Automatic 9-Tyne Seed Drill Unit',
      currentStage: 'S15: CNC Press Brake Multi-Angle Bending',
      responsiblePerson: 'Rajesh Verma (CNC Machine Incharge)',
      plannedStart: '16 Aug, 09:00 AM',
      plannedFinish: '16 Aug, 02:00 PM',
      actualStart: '16 Aug, 09:15 AM',
      actualStatus: 'On-Track (95% Done)',
      statusType: 'success',
      escalation: '🟢 SLA Healthy • Auto-Handoff to S18'
    },
    {
      soNumber: 'SO-2026-094',
      item: 'Hydraulic Reversible MB Plough (3-Bottom)',
      currentStage: 'S68: 7-Tank Pretreatment & Powder Coating',
      responsiblePerson: 'Suresh Kumar (Paint Shop Supervisor)',
      plannedStart: '16 Aug, 11:00 AM',
      plannedFinish: '16 Aug, 04:00 PM',
      actualStart: '16 Aug, 11:45 AM',
      actualStatus: 'Approaching SLA (45 Mins Left)',
      statusType: 'warning',
      escalation: '🟡 Pre-Alert Sent to Plant Head'
    },
    {
      soNumber: 'SO-2026-097',
      item: 'Precision Laser Cut Flange Brackets (500 Pcs OEM)',
      currentStage: 'S84: Invoicing, LR Entry & Transporter Loading',
      responsiblePerson: 'Amit Patil (Logistics & Dispatch)',
      plannedStart: '16 Aug, 03:00 PM',
      plannedFinish: '16 Aug, 05:30 PM',
      actualStart: '16 Aug, 03:00 PM',
      actualStatus: 'Completed 15 Mins Early',
      statusType: 'success',
      escalation: '🟢 Transporter LR Auto-Shared with Client'
    }
  ];

  const fmsStages = [
    {
      range: 'Stage Group 1: Requisition & Planning',
      title: 'Sales Order Validation, BOM Lock & Store Requisition',
      tat: 'Standard Target TAT: 4 - 8 Hours',
      owner: 'Sales Coordinator & Warehouse Manager',
      desc: 'Automatic Bill of Materials (BOM) explosion, raw steel and component stock reservation, digital store issue slips, and immediate work order dispatch.',
      steps: [
        'Validation of Sales Order specifications & customer drawing sign-off',
        'Automated BOM generation & raw material reservation in ERP / Master Sheet',
        'Digital Store Issue Slip (MIS) generation with barcode tracking',
        'Raw material plate allocation to CNC Laser cutting bays',
        'Job Card generation with unique QR code for workstation tracking',
        'Raw material thickness, alloy grade, and inward QC verification'
      ]
    },
    {
      range: 'Stage Group 2: In-House Fabrication',
      title: 'Machining, CNC Bending, Lathe Turning & Welding Bays',
      tat: 'Standard Target TAT: 24 - 48 Hours',
      owner: 'Production Manager & Shop-Floor Supervisors',
      desc: 'Fiber laser plate profiling, multi-angle CNC press brake bending, rotor shaft turning, robotic/manual chassis welding, and in-process dimensional audits.',
      steps: [
        'Fiber laser cutting of side structural plates & brackets',
        'CNC press brake precision bending with angle gauge validation',
        'Rotor shaft lathe turning, keyway milling, and spline cutting',
        'Flange fitment, hydraulic clamping, and fixture alignment',
        'Robotic MIG welding of heavy-duty main chassis frames',
        'In-process weld penetration inspection & dimensional tolerance sign-off'
      ]
    },
    {
      range: 'Stage Group 3: External Processing',
      title: 'Vendor Job-Work, Heat Treatment & Precision Grinding',
      tat: 'Standard Target TAT: 48 - 72 Hours (Strict SLA)',
      owner: 'Procurement Executive & Vendor Quality Auditor',
      desc: 'Automated outward delivery challans, sending crown pinions and drive gears for induction hardening/carburizing, vendor SLA tracking, and hardness testing.',
      steps: [
        'Outward delivery challan generation with vendor SLA lock',
        'Induction hardening & gas carburizing of critical drive gears',
        'External cylindrical grinding & spline hobbing operations',
        'Live Vendor Turnaround Time (TAT) countdown monitoring',
        'Inward Rockwell Hardness (HRC) testing & crack detection audit',
        'Vendor job-work bill reconciliation & ledger posting'
      ]
    },
    {
      range: 'Stage Group 4: Treatment & Assembly',
      title: 'Chemical Pretreatment, Powder Coating & Sub-Assembly',
      tat: 'Standard Target TAT: 12 - 24 Hours',
      owner: 'Assembly Line Incharge & Paint Shop Supervisor',
      desc: 'Bevel gearbox assembly with pressurized oil seal tests, boron steel blade fitment with calibrated torque wrenches, 7-tank anti-rust pretreatment, and oven baking.',
      steps: [
        'Precision bevel gearbox sub-assembly & bearing seating',
        'Pressurized oil seal leakage testing (Zero Leakage Standard)',
        '7-Tank chemical surface pretreatment (Degreasing, Derusting, Phosphating)',
        'Automated electrostatic powder coating & continuous oven baking',
        'Boron steel blade fitment with calibrated torque wrenches',
        'Safety guard fitment & PTO drive shaft alignment'
      ]
    },
    {
      range: 'Stage Group 5: Quality Audit & Dispatch',
      title: 'Dynamic Load Testing, Serial Tagging, Invoicing & Freight',
      tat: 'Standard Target TAT: 4 - 8 Hours',
      owner: 'Final QC Lead & Logistics Dispatch Executive',
      desc: '15-minute dynamic run on powered test rigs, laser-etched serial plate riveting, digital tax invoicing, e-way bill generation, and transporter LR entry.',
      steps: [
        '15-Minute dynamic load & vibration test on test rig',
        'Final QC Pass hologram application & laser serial plate riveting',
        'Protective export packaging & warranty documentation bundling',
        'Instant Tax Invoice & E-Way Bill generation',
        'Transporter allocation, freight loading, and LR/Bilty entry',
        'Automated WhatsApp shipment tracking notification sent to client'
      ]
    }
  ];

  return (
    <div style={{ position: 'relative', padding: '4.5rem 1.5rem 6.5rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
      
      {/* AMBIENT GOLD GLOWS */}
      <div className="ambient-glow" style={{ top: '6%', left: '8%', width: '450px', height: '450px', background: 'rgba(212, 175, 55, 0.12)' }} />
      <div className="ambient-glow" style={{ top: '45%', right: '5%', width: '480px', height: '480px', background: 'rgba(245, 215, 127, 0.08)' }} />

      {/* HEADER SECTION */}
      <div style={{ maxWidth: '920px', marginBottom: '4.5rem' }}>
        <div className="page-badge">
          <Sparkles size={14} color="#f5d77f" />
          <span>Workflow Digitization & Flow Control</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, margin: '0 0 1.25rem 0' }}>
          Multi-Stage Process & Manufacturing Flow (<span className="gold-gradient-text">FMS</span>)
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#e4e4e7', lineHeight: 1.7, margin: 0 }}>
          Factories and enterprises do not fail due to lack of machinery—they fail due to hidden operational bottlenecks, missing accountability, and lack of real-time visibility. We engineer automated Flow Management Systems (FMS) that monitor every single workstation against <strong>Planned vs. Actual SLAs</strong> with live Executive Delay Dashboards for management.
        </p>
      </div>

      {/* SECTION 1: REAL-LIFE BOTTLENECKS WHERE ENTERPRISES LOSE TIME & MONEY */}
      <div style={{ marginBottom: '5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">
            <AlertTriangle size={14} color="#f5d77f" />
            <span>Root-Cause Operational Analysis</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            Where Do Most Production Delays & Hidden Costs Occur?
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.96rem', lineHeight: 1.6 }}>
            Here are the 4 most common real-world operational breakdowns that cost manufacturing and trading businesses millions in delays and lost client trust:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {problemFlows.map((flow, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{ 
                padding: '2.2rem 2rem', 
                display: 'flex', 
                flexDirection: 'column',
                background: 'rgba(14, 17, 24, 0.92)',
                borderLeft: '4px solid #ef4444'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.74rem', background: 'rgba(239, 68, 68, 0.15)', color: '#fca5a5', border: '1px solid rgba(239, 68, 68, 0.35)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 700, textTransform: 'uppercase' }}>
                  {flow.dept}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#71717a', fontWeight: 600 }}>Case #{idx + 1}</span>
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.85rem 0', lineHeight: 1.3 }}>
                {flow.title}
              </h3>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ fontSize: '0.78rem', color: '#f87171', fontWeight: 700, marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <AlertCircle size={14} />
                  Ground Reality & Operational Bottleneck:
                </div>
                <p style={{ color: '#d4d4d8', fontSize: '0.86rem', lineHeight: 1.55, margin: 0 }}>
                  &ldquo;{flow.realExample}&rdquo;
                </p>
              </div>

              <div style={{ background: 'rgba(239, 68, 68, 0.08)', padding: '0.85rem 1rem', borderRadius: '8px', marginBottom: '1.25rem', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', color: '#fca5a5', fontWeight: 700, textTransform: 'uppercase' }}>Measurable Business Impact:</div>
                <div style={{ fontSize: '0.84rem', color: '#fecaca', fontWeight: 500 }}>{flow.hiddenLoss}</div>
              </div>

              <div style={{ marginTop: 'auto', background: 'rgba(212, 175, 55, 0.1)', padding: '0.9rem 1rem', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                <div style={{ fontSize: '0.75rem', color: '#f5d77f', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.25rem' }}>
                  <ShieldCheck size={14} color="#f5d77f" />
                  SuPuja FMS Automated Architecture:
                </div>
                <div style={{ fontSize: '0.84rem', color: '#fef3c7', lineHeight: 1.5 }}>
                  {flow.solution}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: THE PLANNED VS ACTUAL ENGINE EXPLAINED */}
      <div className="glass-card" style={{ padding: '3rem 2.5rem', background: 'linear-gradient(135deg, rgba(14, 17, 24, 0.98) 0%, rgba(20, 24, 34, 0.92) 100%)', marginBottom: '5rem', border: '1px solid rgba(212, 175, 55, 0.35)' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="page-badge">
            <Clock size={14} color="#f5d77f" />
            <span>The Mathematical Foundation</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            How Does the <span className="gold-gradient-text">Planned vs. Actual FMS Engine</span> Work?
          </h2>
          <p style={{ color: '#e4e4e7', fontSize: '0.98rem', lineHeight: 1.7 }}>
            Every successful production line requires fixed Turnaround Times (TAT). We capture and enforce 4 core mathematical parameters at every workstation:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.25)', padding: '1.5rem 1.25rem', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f5d77f', marginBottom: '0.35rem' }}>1. Planned Target TAT</div>
            <div style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Target start and completion timestamps are computed automatically when the order is registered.</div>
          </div>

          <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.25)', padding: '1.5rem 1.25rem', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f5d77f', marginBottom: '0.35rem' }}>2. Actual Timestamp Locking</div>
            <div style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Operators submit completion via QR code or mobile web form, instantly locking the immutable server timestamp.</div>
          </div>

          <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.25)', padding: '1.5rem 1.25rem', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f5d77f', marginBottom: '0.35rem' }}>3. Real-Time Delay Variance</div>
            <div style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Formula calculates: <code>Variance = Actual Time - Planned TAT</code> down to the exact minute.</div>
          </div>

          <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.25)', padding: '1.5rem 1.25rem', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f5d77f', marginBottom: '0.35rem' }}>4. Single-Owner Accountability</div>
            <div style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Every single stage is tied to one designated employee. Inter-departmental blame games are permanently eliminated.</div>
          </div>
        </div>

        <div style={{ background: 'rgba(20, 24, 34, 0.8)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Bell size={22} color="#f5d77f" />
            <div>
              <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem' }}>Automated Multi-Tier WhatsApp Escalation Matrix</div>
              <div style={{ color: '#a1a1aa', fontSize: '0.84rem' }}>When a workstation exceeds its target SLA, automatic WhatsApp alerts notify the Supervisor within 30 minutes and the Director within 2 hours.</div>
            </div>
          </div>
          <Link href="/contact" className="btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.86rem' }}>
            Request an FMS Architecture Audit <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* SECTION 3: LIVE EXECUTIVE DASHBOARD SIMULATOR FOR DIRECTORS & OWNERS */}
      <div style={{ marginBottom: '5.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">
            <Eye size={14} color="#f5d77f" />
            <span>Executive Single-Screen Visibility</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            What Does the Company Owner See on Their Screen?
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.96rem', lineHeight: 1.6 }}>
            Company directors no longer need to walk the factory floor or make dozens of follow-up phone calls. The live control center shows exactly <strong>WHERE</strong> every order is stationed and <strong>WHO</strong> is responsible for any delay:
          </p>
        </div>

        {/* Mockup Dashboard Card */}
        <div className="glass-card" style={{ padding: '2rem', background: '#0a0d14', border: '1px solid rgba(212, 175, 55, 0.4)', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.8)' }}>
          
          {/* Dashboard Header Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e' }} />
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '1.1rem' }}>
                SuPuja Executive FMS Live Control Center
              </div>
              <span style={{ fontSize: '0.72rem', background: 'rgba(212, 175, 55, 0.15)', color: '#f5d77f', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                REAL-TIME SYNC
              </span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: '#a1a1aa' }}>
              <span>Active Orders: <strong style={{ color: '#ffffff' }}>42</strong></span>
              <span>On-Time: <strong style={{ color: '#4ade80' }}>37 (88%)</strong></span>
              <span>Delayed / Escalated: <strong style={{ color: '#f87171' }}>5 (12%)</strong></span>
            </div>
          </div>

          {/* Live Orders Flow Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: '#f5d77f', textTransform: 'uppercase', fontSize: '0.74rem', letterSpacing: '0.04em' }}>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Order / Product</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Current Workstation Stage</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Responsible Owner</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Planned Schedule</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Live Variance / Status</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Automated Action</th>
                </tr>
              </thead>
              <tbody>
                {liveDashboardData.map((row, rIdx) => (
                  <tr 
                    key={rIdx} 
                    style={{ 
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      background: row.statusType === 'danger' ? 'rgba(239, 68, 68, 0.06)' : row.statusType === 'warning' ? 'rgba(245, 158, 11, 0.04)' : 'transparent'
                    }}
                  >
                    <td style={{ padding: '1rem 0.5rem' }}>
                      <div style={{ fontWeight: 700, color: '#ffffff' }}>{row.soNumber}</div>
                      <div style={{ color: '#a1a1aa', fontSize: '0.78rem' }}>{row.item}</div>
                    </td>
                    <td style={{ padding: '1rem 0.5rem', color: '#e4e4e7', fontWeight: 600 }}>
                      {row.currentStage}
                    </td>
                    <td style={{ padding: '1rem 0.5rem' }}>
                      <div style={{ color: '#ffffff', fontWeight: 600 }}>{row.responsiblePerson}</div>
                    </td>
                    <td style={{ padding: '1rem 0.5rem', color: '#a1a1aa', fontSize: '0.78rem' }}>
                      <div>Start: {row.plannedStart}</div>
                      <div style={{ color: '#f5d77f' }}>Finish: {row.plannedFinish}</div>
                    </td>
                    <td style={{ padding: '1rem 0.5rem' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                        fontWeight: 700,
                        fontSize: '0.76rem',
                        background: row.statusType === 'danger' ? 'rgba(239, 68, 68, 0.2)' : row.statusType === 'warning' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(34, 197, 94, 0.2)',
                        color: row.statusType === 'danger' ? '#fca5a5' : row.statusType === 'warning' ? '#fde68a' : '#86efac',
                        border: row.statusType === 'danger' ? '1px solid rgba(239, 68, 68, 0.4)' : row.statusType === 'warning' ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(34, 197, 94, 0.4)'
                      }}>
                        {row.actualStatus}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 0.5rem', fontSize: '0.78rem', color: '#e4e4e7' }}>
                      {row.escalation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Department Bottleneck Scorecard Bar */}
          <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(212, 175, 55, 0.15)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ fontSize: '0.72rem', color: '#a1a1aa', textTransform: 'uppercase' }}>Store & Requisition</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#4ade80' }}>0.4 Hrs Avg Delay (98% On-Time)</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ fontSize: '0.72rem', color: '#a1a1aa', textTransform: 'uppercase' }}>In-House CNC & Laser</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#4ade80' }}>1.1 Hrs Avg Delay (94% On-Time)</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.08)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.25)' }}>
              <div style={{ fontSize: '0.72rem', color: '#f87171', textTransform: 'uppercase', fontWeight: 700 }}>🚨 Vendor Job-Work (Bottleneck)</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fca5a5' }}>26.8 Hrs Avg Delay (Action Required)</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ fontSize: '0.72rem', color: '#a1a1aa', textTransform: 'uppercase' }}>Assembly & Logistics</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#4ade80' }}>0.8 Hrs Avg Delay (96% On-Time)</div>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 4: THE MULTI-STAGE PROCESS FLOW BLUEPRINT */}
      <div style={{ marginBottom: '5.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div className="page-badge">Modular Process Blueprint</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            Comprehensive Multi-Tier Flow Architecture
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.96rem' }}>
            Engineered into 5 interconnected operational tiers with defined Target SLAs and workstation ownership:
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {fmsStages.map((stg, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{ 
                padding: '2.2rem 2rem', 
                borderTop: '4px solid #f5d77f',
                background: 'rgba(14, 17, 24, 0.92)'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f5d77f', background: 'rgba(212, 175, 55, 0.15)', padding: '0.3rem 0.8rem', borderRadius: '6px', border: '1px solid rgba(212, 175, 55, 0.35)' }}>
                  {stg.range}
                </span>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.8rem', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 600 }}>
                    ⏱️ {stg.tat}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#a1a1aa', background: 'rgba(255, 255, 255, 0.05)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                    👤 {stg.owner}
                  </span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
                {stg.title}
              </h3>
              <p style={{ color: '#e4e4e7', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {stg.desc}
              </p>

              <div style={{ background: 'rgba(20, 24, 34, 0.6)', padding: '1.25rem', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.15)' }}>
                <div style={{ fontSize: '0.82rem', color: '#f5d77f', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckSquare size={15} color="#f5d77f" />
                  Key Operational Workstation Checkpoints:
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

      {/* SECTION 5: MEASURABLE BUSINESS IMPACT */}
      <div className="glass-card" style={{ padding: '3.5rem 2rem', background: 'linear-gradient(135deg, rgba(20, 24, 34, 0.95) 0%, rgba(14, 17, 24, 0.95) 100%)', marginBottom: '5rem', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">Proven Industry Outcomes</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            Measurable Operational Transformation with SuPuja FMS
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#4ade80' }}>62% ⬇</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Lead Time Reduction</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>Manufacturing cycles cut down from 24 days to under 9 days.</div>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#f5d77f' }}>100% 🎯</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Zero Blame Game</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>Complete accountability with immutable workstation timestamps.</div>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#38bdf8' }}>0% 🛑</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Vendor Job-Work Stoppages</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>Automated WhatsApp countdown alerts ensure vendors return material on schedule.</div>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#c084fc' }}>3+ Hours ⏰</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Daily Director Time Reclaimed</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>Plant status and bottleneck hotspots visible on a single unified screen.</div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACTION CTA */}
      <div className="glass-card" style={{ padding: '3.5rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(14, 17, 24, 0.95) 100%)', border: '1px solid #d4af37' }}>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
          Are Hidden Bottlenecks Delaying Orders in Your Plant?
        </h3>
        <p style={{ color: '#e4e4e7', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto 2rem auto', lineHeight: 1.65 }}>
          We conduct in-depth operational audits to map, architect, and deploy a custom <strong>Planned vs. Actual FMS Flow Control System</strong> tailored to your facility.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/contact?service=Business%20Workflow%20%26%20FMS%20Systems" className="btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
            Book a Plant FMS Audit & Consultation <Send size={18} />
          </Link>
          <a 
            href="https://wa.me/919988119276?text=Hello%20SuPuja%20Creations,%20I%20want%20to%20implement%20Planned%20vs%20Actual%20FMS%20Workflow%20for%20my%20plant."
            target="_blank" 
            rel="noreferrer"
            className="btn-secondary" 
            style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}
          >
            Chat on WhatsApp (+91 99881 19276)
          </a>
        </div>
      </div>

    </div>
  );
}
