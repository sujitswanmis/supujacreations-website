'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  GitBranch, Factory, Clock, ShieldCheck, CheckCircle2, 
  AlertTriangle, ArrowRight, Layers, FileText, Send, Zap, Cpu, Sparkles,
  AlertCircle, Users, BarChart3, TrendingDown, Eye, Bell, CheckSquare, ChevronRight
} from 'lucide-react';

export default function FMSWorkflowsPage() {
  const [activeTab, setActiveTab] = useState('all');

  // Real-life problem flows where businesses suffer massive hidden losses
  const problemFlows = [
    {
      title: 'Problem Flow 1: Sales to Production Handover Chaos',
      dept: 'Sales ➡️ Factory Floor',
      realExample: 'Client ne ₹5 Lakh ka custom machinery order confirm kar diya aur token payment de di. Lekin 6 din tak factory ko pata hi nahi chala ki kaun si specification ka model banana hai. Production team purani sheet dekh rahi thi aur Sales team WhatsApp par alag hi commit kar rahi thi.',
      hiddenLoss: 'Delivery 12 din delay ho gayi, client ne ₹50,000 penalty deduct kar li aur repeat orders cancel kar diye.',
      solution: 'SuPuja FMS mein jaise hi Sales Order submit hota hai, Step S01 par auto-trigger lagta hai. Store, Production aur Accounts ko instant verified BOM aur Planned TAT mil jata hai.'
    },
    {
      title: 'Problem Flow 2: Store & Material Requisition Hold-up',
      dept: 'Store ➡️ Machine Shop',
      realExample: 'Laser cutting machine aur 4 karigar subah 9 baje se khade hain, lekin unhe 12mm raw steel sheet nahi mili. Store keeper bolta hai ki "Manager ka sign nahi hua tha", jabki manager audit meeting mein busy tha.',
      hiddenLoss: 'Daily ₹15,000 ka labor & idle machine loss, aur pure din ka schedule disturb ho gaya.',
      solution: 'Planned vs Actual timer chalu hota hai. Agar 45 minutes mein Material Issue Slip (MIS) approve nahi hui, to system automatic bypass ya emergency green alert deta hai.'
    },
    {
      title: 'Problem Flow 3: Vendor Job-Work & Hardening Black Hole',
      dept: 'Vendor Procurement ➡️ Inward QC',
      realExample: 'Rotavator ke 50 gear shafts bahar vendor ke paas induction hardening ke liye bheje gaye. Vendor ne bola tha 2 din mein wapas de dega. Lekin 11 din tak kisi ne follow-up nahi kiya kyuki diary mein entry dab gayi thi.',
      hiddenLoss: 'Pure 50 units ka final assembly hold par chala gaya aur plant manager ko tab pata chala jab client gaadi lekar factory gate par khada ho gaya.',
      solution: 'FMS har vendor outward challan par Planned Return TAT assign karta hai. 48 ghante pure hote hi Vendor aur Purchase Manager ko automatic WhatsApp reminder alert chala jata hai.'
    },
    {
      title: 'Problem Flow 4: The Department Blame Game (Kisi Ki Accountability Nahi)',
      dept: 'All Departments',
      realExample: 'Jab owner puchte hain ki "Order time par dispatch kyu nahi hua?", to Sales bolta hai Production ne late banaya, Production bolta hai Store ne maal late diya, Store bolta hai Accounts ne PO nahi diya, aur Accounts bolta hai Sales ne advance proof nahi diya.',
      hiddenLoss: 'Company Owner ka daily 3 ghante sirf ladai suljhane aur investigation mein barbad ho jaate hain.',
      solution: 'Owner ke live executive dashboard par ek click mein dikh jata hai ki exactly kis department aur kis employee ke paas file kitne ghante ruki thi.'
    }
  ];

  // Mockup live dashboard items showing Planned vs Actual in action
  const liveDashboardData = [
    {
      soNumber: 'SO-2026-089',
      item: 'Rotavator 7-Feet Heavy Duty (Batch of 20 Units)',
      currentStage: 'S40: Induction Hardening (Vendor Job-Work)',
      responsiblePerson: 'Manoj Sharma (Purchase / Vendor Head)',
      plannedStart: '14 Aug, 10:00 AM',
      plannedFinish: '15 Aug, 06:00 PM',
      actualStart: '14 Aug, 11:30 AM',
      actualStatus: 'Delayed (+36.5 Hrs)',
      statusType: 'danger',
      escalation: '🚨 WhatsApp Escalation Triggered to Director'
    },
    {
      soNumber: 'SO-2026-092',
      item: 'Seed Drill 9-Tyne Automatic Hopper',
      currentStage: 'S15: CNC Press Brake Multi-Angle Bending',
      responsiblePerson: 'Rajesh Verma (Shop Floor CNC Operator)',
      plannedStart: '16 Aug, 09:00 AM',
      plannedFinish: '16 Aug, 02:00 PM',
      actualStart: '16 Aug, 09:15 AM',
      actualStatus: 'On-Track (95% Done)',
      statusType: 'success',
      escalation: '🟢 SLA Healthy • Auto-Moving to S18'
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
      escalation: '🟡 Pre-Alert Dispatched to Supervisor'
    },
    {
      soNumber: 'SO-2026-097',
      item: 'Laser Cut Flange Brackets (500 Pcs OEM Order)',
      currentStage: 'S84: Invoicing, LR Entry & Transporter Loading',
      responsiblePerson: 'Amit Patil (Logistics & Dispatch)',
      plannedStart: '16 Aug, 03:00 PM',
      plannedFinish: '16 Aug, 05:30 PM',
      actualStart: '16 Aug, 03:00 PM',
      actualStatus: 'Completed 15 Mins Ahead',
      statusType: 'success',
      escalation: '🟢 Transporter Bilty Auto-Shared with Client'
    }
  ];

  const fmsStages = [
    {
      range: 'S01 - S10',
      title: 'Requisition, Verified BOM & Store Allocation',
      tat: 'Standard TAT: 4 - 8 Hours',
      owner: 'Sales Coordinator & Store Manager',
      desc: 'Bill of Materials (BOM) explosion, checking raw material stock availability, automated Material Issue Slip (MIS), and zero-delay work order release.',
      steps: [
        'S01: Sales Order Validation & Exact Spec Lock',
        'S02: Automated BOM Generation & Stock Reservation',
        'S03: Digital Store Issue Slip with Barcode Batch',
        'S05: Raw Steel Plates Allocation to CNC/Laser Shop',
        'S08: Job Card Generation with QR Tracking',
        'S10: Inward Raw Material Thickness & Grade QC'
      ]
    },
    {
      range: 'S11 - S35',
      title: 'In-House Machining, CNC, Laser & Welding Workstations',
      tat: 'Standard TAT: 24 - 48 Hours',
      owner: 'Production Head & Shop Floor Incharge',
      desc: 'High precision laser cutting, CNC press brake bending, rotor shaft turning on lathe, robotic/manual side frame welding, and in-process dimensional QC.',
      steps: [
        'S12: Fiber Laser Cutting of Side End Plates',
        'S15: CNC Press Brake Multi-Angle Bending',
        'S18: Rotor Shaft Turning & Keyway Slot Milling',
        'S22: Flange Fitment & Precision Fixture Clamping',
        'S28: Main Chassis Frame Robotic / MIG Welding',
        'S34: In-Process Weld Penetration & Alignment Check'
      ]
    },
    {
      range: 'S36 - S60',
      title: 'Vendor Job-Work, Heat Treatment & External Machining',
      tat: 'Standard TAT: 48 - 72 Hours (Strict SLA)',
      owner: 'Purchase Executive & Vendor QC Auditor',
      desc: 'Outward Delivery Challan generation, sending crown pinions and gears for induction hardening/gas carburizing, vendor turnaround tracking, and hardness inspection.',
      steps: [
        'S37: Vendor Job-Work Outward Delivery Challan',
        'S40: Induction Hardening / Gas Carburizing (Crown Pinion)',
        'S44: External Gear Grinding & Spline Hobbing',
        'S48: Vendor Turnaround Time (TAT) SLA Countdown Timer',
        'S53: Inward Rockwell Hardness (HRC) & Crack Testing',
        'S59: Job-Work Bill Verification & Cost Ledger Posting'
      ]
    },
    {
      range: 'S61 - S75',
      title: 'Sub-Assembly, 7-Tank Chemical Pretreatment & Paint Shop',
      tat: 'Standard TAT: 12 - 24 Hours',
      owner: 'Assembly Incharge & Paint Shop Supervisor',
      desc: 'Bevel gearbox assembly with oil seal pressure testing, rotavator boron blade fitment with torque wrench, 7-tank anti-rust pretreatment, and electrostatic powder coating.',
      steps: [
        'S62: Heavy-Duty Bevel Gearbox Sub-Assembly',
        'S65: Oil Seal Leakage Pressure Testing (Zero Leakage)',
        'S68: 7-Tank Chemical Pretreatment (Degreasing/Phosphating)',
        'S70: Automated Electrostatic Powder Coating & Oven Baking',
        'S72: Boron Steel Blade Fitment with Calibrated Torque Wrench',
        'S75: Safety Guard & PTO Drive Shaft Integration'
      ]
    },
    {
      range: 'S76 - S85',
      title: 'Dynamic Testing Rig, Laser Tagging, Invoicing & Dispatch',
      tat: 'Standard TAT: 4 - 8 Hours',
      owner: 'Final QC Inspector & Logistics Dispatch Head',
      desc: '15-minute dynamic run on test bench, vibration audit, laser serial plate riveting, warranty booklet attachment, tax invoicing, and transporter LR entry.',
      steps: [
        'S77: 15-Minute Dynamic Load Test Run on Test Bench',
        'S79: Final QC Pass Hologram & Serial Riveting',
        'S81: Export-Grade Protective Packaging & User Manual',
        'S83: Instant Tax Invoice & E-Way Bill Generation',
        'S84: Transporter Assignment, Vehicle Loading & LR Entry',
        'S85: Automated WhatsApp Delivery Notification & O2D Closure'
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
          <span>Practical Workflow Digitization</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, margin: '0 0 1.25rem 0' }}>
          85-Step Manufacturing Flow (<span className="gold-gradient-text">FMS</span>) & Planned vs Actual Control
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#e4e4e7', lineHeight: 1.7, margin: 0 }}>
          Factories don't fail due to lack of machinery—they fail due to hidden operational delays, missing accountability, and lack of real-time visibility. We engineer automated FMS workflows that track every single stage from <strong>Planned vs Actual</strong> with instant Director-level bottleneck dashboards.
        </p>
      </div>

      {/* SECTION 1: REAL-LIFE BOTTLENECKS WHERE COMPANIES SUFFER MOST */}
      <div style={{ marginBottom: '5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">
            <AlertTriangle size={14} color="#f5d77f" />
            <span>The Reality of Factory Operations</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            Kis Flow Mein Sabse Zyada Delays & Hidden Losses Hote Hain?
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.96rem', lineHeight: 1.6 }}>
            Yeh 4 real-life factory problem scenarios hain jahan har mahine lakhon rupaye ka nuksan aur client ka trust khota hai:
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
                  Actual Ground Reality / Problem:
                </div>
                <p style={{ color: '#d4d4d8', fontSize: '0.86rem', lineHeight: 1.55, margin: 0 }}>
                  &ldquo;{flow.realExample}&rdquo;
                </p>
              </div>

              <div style={{ background: 'rgba(239, 68, 68, 0.08)', padding: '0.85rem 1rem', borderRadius: '8px', marginBottom: '1.25rem', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', color: '#fca5a5', fontWeight: 700, textTransform: 'uppercase' }}>Hidden Business Loss:</div>
                <div style={{ fontSize: '0.84rem', color: '#fecaca', fontWeight: 500 }}>{flow.hiddenLoss}</div>
              </div>

              <div style={{ marginTop: 'auto', background: 'rgba(212, 175, 55, 0.1)', padding: '0.9rem 1rem', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                <div style={{ fontSize: '0.75rem', color: '#f5d77f', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.25rem' }}>
                  <ShieldCheck size={14} color="#f5d77f" />
                  SuPuja FMS Automated Solution:
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
            <span>The Mathematical Solution</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            Kaise Kaam Karta Hai <span className="gold-gradient-text">Planned vs Actual FMS Architecture?</span>
          </h2>
          <p style={{ color: '#e4e4e7', fontSize: '0.98rem', lineHeight: 1.7 }}>
            Har manufacturing unit mein har step ka ek Target Turnaround Time (TAT) hota hai. Hum har stage par 4 critical data points lock karte hain:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.25)', padding: '1.5rem 1.25rem', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#f5d77f', marginBottom: '0.35rem' }}>1. Planned Date/Time</div>
            <div style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Order aate hi har workstation ka target start & completion time auto-calculate hota hai.</div>
          </div>

          <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.25)', padding: '1.5rem 1.25rem', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#f5d77f', marginBottom: '0.35rem' }}>2. Actual Entry Timestamp</div>
            <div style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Operator ya Supervisor mobile/web form se jaise hi Done karta hai, exact time stamp lock ho jata hai.</div>
          </div>

          <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.25)', padding: '1.5rem 1.25rem', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#f5d77f', marginBottom: '0.35rem' }}>3. Variance (Delay Formula)</div>
            <div style={{ fontSize: '0.85rem', color: '#a1a1aa' }}><code>Variance = Actual Time - Planned TAT</code>. Formula delay ko minute-to-minute calculate karta hai.</div>
          </div>

          <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.25)', padding: '1.5rem 1.25rem', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#f5d77f', marginBottom: '0.35rem' }}>4. Responsible Owner</div>
            <div style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Har stage par 1 specific employee ka naam lock hota hai. Koi department doosre par ilzam nahi laga sakta.</div>
          </div>
        </div>

        <div style={{ background: 'rgba(20, 24, 34, 0.8)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Bell size={22} color="#f5d77f" />
            <div>
              <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem' }}>Automated Multi-Level Escalation Alert</div>
              <div style={{ color: '#a1a1aa', fontSize: '0.84rem' }}>Jaise hi koi stage Planned TAT se exceed hoti hai, system 30 mins ke andar Plant Head aur 2 Hrs ke andar Director ko alert bhej deta hai.</div>
            </div>
          </div>
          <Link href="/contact" className="btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.86rem' }}>
            Architect FMS for Your Factory <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* SECTION 3: LIVE EXECUTIVE DASHBOARD SIMULATOR FOR COMPANY OWNER */}
      <div style={{ marginBottom: '5.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">
            <Eye size={14} color="#f5d77f" />
            <span>Director's Single-Screen Visibility</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            Company Owner Ke Dashboard Par Kya Dikhta Hai?
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.96rem', lineHeight: 1.6 }}>
            Owner ko factory floor par ghoomne ya phone par chikne ki zaroorat nahi padti. Live screen par saaf dikhta hai ki <strong>KAHA PAR</strong> kaun sa order ruka hai aur <strong>KAUN</strong> delay kar raha hai:
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
              <span>Total Active Orders: <strong style={{ color: '#ffffff' }}>42</strong></span>
              <span>On-Time: <strong style={{ color: '#4ade80' }}>37 (88%)</strong></span>
              <span>Bottlenecks / Delayed: <strong style={{ color: '#f87171' }}>5 (12%)</strong></span>
            </div>
          </div>

          {/* Live Orders Flow Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: '#f5d77f', textTransform: 'uppercase', fontSize: '0.74rem', letterSpacing: '0.04em' }}>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Order / Item</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Current FMS Stage</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Responsible Person</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Planned Target</th>
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
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#4ade80' }}>0.4 Hrs Avg Delay (98% On-Time)</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ fontSize: '0.72rem', color: '#a1a1aa', textTransform: 'uppercase' }}>In-House CNC / Laser</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#4ade80' }}>1.1 Hrs Avg Delay (94% On-Time)</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.08)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.25)' }}>
              <div style={{ fontSize: '0.72rem', color: '#f87171', textTransform: 'uppercase', fontWeight: 700 }}>🚨 Vendor Job-Work (Bottleneck)</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fca5a5' }}>26.8 Hrs Avg Delay (Action Required)</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ fontSize: '0.72rem', color: '#a1a1aa', textTransform: 'uppercase' }}>Assembly & Dispatch</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#4ade80' }}>0.8 Hrs Avg Delay (96% On-Time)</div>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 4: THE FULL 85-STEP PIPELINE BREAKDOWN */}
      <div style={{ marginBottom: '5.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div className="page-badge">Complete Blueprint</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            The 85-Step Manufacturing FMS Architecture
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.96rem' }}>
            De-constructed into 5 interconnected operational tiers with defined TATs and department ownership:
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
                  Key Workstation Checkpoints:
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

      {/* SECTION 5: MEASURABLE IMPACT OF PLANNED VS ACTUAL FMS */}
      <div className="glass-card" style={{ padding: '3.5rem 2rem', background: 'linear-gradient(135deg, rgba(20, 24, 34, 0.95) 0%, rgba(14, 17, 24, 0.95) 100%)', marginBottom: '5rem', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">Proven Results</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            FMS Implementation Se Factory Mein Kya Badlav Aata Hai?
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#4ade80' }}>62% ⬇</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Order-to-Delivery Lead Time</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>24 din ka manufacturing cycle घटकर 9 din mein pura hota hai.</div>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#f5d77f' }}>100% 🎯</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Zero Blame Game</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>Har step ka timestamp aur responsible person lock hone se koi bahana nahi chalta.</div>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#38bdf8' }}>0% 🛑</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Vendor Job-Work Delay Hold</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>Automated countdown SLA aur WhatsApp reminders se vendors time par delivery dete hain.</div>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#c084fc' }}>3 Hrs ⏰</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Owner Daily Time Saved</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>Owner ko daily investigation karne ke badle 1 screen par poora plant live dikhta hai.</div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACTION CTA */}
      <div className="glass-card" style={{ padding: '3.5rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(14, 17, 24, 0.95) 100%)', border: '1px solid #d4af37' }}>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
          Kya Aapki Factory Mein Bhi Orders Delay Ho Rahe Hain?
        </h3>
        <p style={{ color: '#e4e4e7', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto 2rem auto', lineHeight: 1.65 }}>
          Hum aapke factory floor ka complete Gemba walk audit karke aapke liye <strong>Planned vs Actual FMS Architecture</strong> design aur deploy karenge.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/contact?service=Business%20Workflow%20%26%20FMS%20Systems" className="btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
            Book Plant FMS Audit & Consultation <Send size={18} />
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
