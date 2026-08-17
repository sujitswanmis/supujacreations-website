'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  GitBranch, Factory, Clock, ShieldCheck, CheckCircle2, 
  AlertTriangle, ArrowRight, Layers, FileText, Send, Zap, Cpu, Sparkles,
  AlertCircle, Users, BarChart3, TrendingDown, Eye, Bell, CheckSquare, ChevronRight,
  UserCheck, DollarSign, Truck, MessageSquare, PhoneCall, Package, Check, HelpCircle,
  TrendingUp, ArrowDownRight, Award, Headphones, ShoppingCart
} from 'lucide-react';

export default function FMSWorkflowsPage() {
  // 10-Step Real-World Sales Order (S-Order) Lifecycle requested by user
  const salesOrderLifecycle = [
    {
      step: '01',
      title: 'Order Entry & Inquiry Logging',
      owner: 'Sales Executive (Rahul Mehta)',
      tat: 'Target SLA: 15 Mins',
      desc: 'Customer requirements, item specs, custom configurations, and billing/shipping address logged into the central digital system.',
      action: 'Automatic Lead conversion & unique Order ID generated'
    },
    {
      step: '02',
      title: 'Order Confirm & PI Generate',
      owner: 'Sales Coordinator (Pooja Sharma)',
      tat: 'Target SLA: 30 Mins',
      desc: '1-Click Proforma Invoice (PI) generated with itemized rates, GST taxes, delivery schedule, and 30% advance deposit terms.',
      action: 'PI PDF auto-shared to client on WhatsApp & Email'
    },
    {
      step: '03',
      title: 'Stock & Inventory Check',
      owner: 'Warehouse / Store (Dinesh Kumar)',
      tat: 'Target SLA: 45 Mins',
      desc: 'Store inventory checked for finished goods and raw materials. Stock reserved immediately to prevent duplicate bookings.',
      action: 'Stock allocated in system & Packing slip pre-generated'
    },
    {
      step: '04',
      title: 'Advance Deposited (30%)',
      owner: 'Client / Buyer (Kisan Agro Equipment)',
      tat: 'Target SLA: Within 24 Hrs',
      desc: 'Client transfers 30% token advance deposit (e.g. ₹1,50,000 via NEFT/UPI) and submits transaction bank UTR receipt.',
      action: 'UTR payment receipt uploaded via client web portal'
    },
    {
      step: '05',
      title: 'Advance Received & Verified (30%)',
      owner: 'Accounts Executive (Vikram Singh)',
      tat: 'Target SLA: 1 Hour',
      desc: 'Bank credit verified in company account. Accounts locks "30% ADVANCE RECEIVED" and releases Green Light for packaging/production.',
      action: 'Production & Packaging Job Card released'
    },
    {
      step: '06',
      title: 'Order Packed & QC Inspected',
      owner: 'QC & Packaging (Manoj Kumar)',
      tat: 'Target SLA: 4 Hours',
      desc: 'Physical goods inspected against technical drawing, serial number tagged, barcode applied, and securely boxed for transit.',
      action: 'Final weight & live packaging photos uploaded'
    },
    {
      step: '07',
      title: 'Balance Amount Due (70%)',
      owner: 'Accounts & Billing (Vikram Singh)',
      tat: 'Target SLA: 30 Mins',
      desc: 'Final Tax Invoice generated for remaining 70% balance (₹3,50,000). Automated payment request intimation dispatched with packing photos.',
      action: 'WhatsApp alert + Invoice PDF sent to client'
    },
    {
      step: '08',
      title: 'Balance Received & Clearance (70%)',
      owner: 'Accounts Head (Vikram Singh)',
      tat: 'Target SLA: 2 Hours',
      desc: 'Full 100% payment reconciled in bank ledger. Dispatch Pass automatically unlocked for logistics and loading bay.',
      action: 'Zero-Balance Clearance Gate Pass generated'
    },
    {
      step: '09',
      title: 'Order Dispatch & Transporter LR/Bilty',
      owner: 'Logistics Dispatch (Amit Patil)',
      tat: 'Target SLA: Same Day (2 Hrs)',
      desc: 'Material loaded onto transport truck, Delivery Challan (DC) stamped, E-Way Bill attached, and Transporter LR/Bilty number logged.',
      action: 'Live Transporter LR Bilty auto-shared on WhatsApp'
    },
    {
      step: '10',
      title: 'Delivery Status & Client Acknowledgment',
      owner: 'Customer Support Desk',
      tat: 'Target SLA: On Arrival',
      desc: 'Consignment arrives safely at client warehouse, Proof of Delivery (POD) verified, and automated 1-Click WhatsApp CSAT & Google Review triggered.',
      action: 'Order Lifecycle Successfully Closed (O2D 100%)'
    }
  ];

  // Other Core Business Flows Managed by FMS
  const otherFmsFlows = [
    {
      flowName: 'Flow 1: Lead Management & CRM Flow',
      icon: <Users size={22} color="#f5d77f" />,
      badge: 'Sales Growth',
      summary: 'From Inbound Ad Click to Qualified Deal',
      steps: [
        '1. Instant Lead Capture from Meta Ads, IndiaMART & WhatsApp',
        '2. Automatic Round-Robin Lead Assignment to active sales rep',
        '3. 15-Minute First Response SLA countdown on salesperson mobile',
        '4. Lead Qualification (Hot / Warm / Cold / Enterprise)',
        '5. 1-Click Quotation PDF generation & automated follow-ups'
      ]
    },
    {
      flowName: 'Flow 2: Production & Shop-Floor Flow',
      icon: <Factory size={22} color="#f5d77f" />,
      badge: 'Manufacturing',
      summary: 'From Raw Material to Finished Goods',
      steps: [
        '1. Bill of Materials (BOM) explosion & digital store requisition',
        '2. Workstation WIP tracking (Laser, CNC, Lathe, Welding bays)',
        '3. Outward Challan & SLA tracking for external Vendor Job-Work',
        '4. In-process Quality Inspection & Rockwell hardness testing',
        '5. Surface pretreatment, powder coating & final assembly'
      ]
    },
    {
      flowName: 'Flow 3: Vendor & Purchase Flow',
      icon: <ShoppingCart size={22} color="#f5d77f" />,
      badge: 'Procurement',
      summary: 'From Purchase Request to Material Inward',
      steps: [
        '1. Department material indent & stock minimum threshold alert',
        '2. Vendor rate comparison & digital Purchase Order (PO) approval',
        '3. Vendor dispatch commitment & delivery SLA tracking',
        '4. Inward Goods Received Note (GRN) & QC rejection logs',
        '5. Vendor bill booking & aging payment report generation'
      ]
    },
    {
      flowName: 'Flow 4: Customer Support & Service Desk',
      icon: <Headphones size={22} color="#f5d77f" />,
      badge: 'Service & NPS',
      summary: 'From Complaint Ticket to Verified Resolution',
      steps: [
        '1. 1-Click WhatsApp customer service ticket registration',
        '2. Automated technician assignment based on customer location',
        '3. SLA countdown for on-site visit or replacement dispatch',
        '4. Digital service report & customer signature capture',
        '5. Automated NPS (Net Promoter Score) survey & feedback loop'
      ]
    }
  ];

  // Live Control Center Mockup Data matching the 10-step Sales Order flow
  const liveDashboardData = [
    {
      id: 'SO-2026-089',
      client: 'Kisan Agro Equipment (Punjab)',
      orderValue: '₹5,00,000 (10 Units)',
      currentStep: 'Step 09: Order Dispatch (LR Entered)',
      responsible: 'Amit Patil (Logistics)',
      paymentStatus: '100% Cleared (30% Adv + 70% Bal)',
      statusText: 'Dispatched with VRL Logistics',
      statusType: 'success',
      autoAction: '🟢 Bilty & Invoice Sent on WhatsApp'
    },
    {
      id: 'SO-2026-092',
      client: 'Apex Industrial Toolings Pvt Ltd',
      orderValue: '₹3,20,000 (Custom Batch)',
      currentStep: 'Step 07: Balance Due 70% (₹2,24,000)',
      responsible: 'Vikram Singh (Accounts)',
      paymentStatus: '30% Received • 70% Pending',
      statusText: 'Waiting Client Balance Transfer',
      statusType: 'warning',
      autoAction: '🟡 Auto WhatsApp Balance Reminder Sent'
    },
    {
      id: 'SO-2026-094',
      client: 'Modern Agri Implements (Gujarat)',
      orderValue: '₹7,50,000 (15 Heavy Rotavators)',
      currentStep: 'Step 06: Order Packed & QC Passed',
      responsible: 'Manoj Kumar (QC & Packing)',
      paymentStatus: '30% Advance Verified (₹2.25L)',
      statusText: 'Ready for Final 70% Invoicing',
      statusType: 'success',
      autoAction: '🟢 Weight & Box Photos Uploaded'
    },
    {
      id: 'SO-2026-097',
      client: 'Bharat Tractors & Spares (MP)',
      orderValue: '₹1,80,000 (Spares Lot)',
      currentStep: 'Step 04: Advance Deposited (30%)',
      responsible: 'Vikram Singh (Accounts)',
      paymentStatus: '30% Advance Slip Uploaded',
      statusText: 'Bank UTR Verification Pending',
      statusType: 'warning',
      autoAction: '🟡 Accounts Checking Bank Statement'
    },
    {
      id: 'SO-2026-099',
      client: 'Shree Balaji Traders (Haryana)',
      orderValue: '₹4,20,000 (Ploughs Batch)',
      currentStep: 'Step 02: Order Confirm & PI Generate',
      responsible: 'Rahul Mehta (Sales Exec)',
      paymentStatus: 'PI Sent • Awaiting 30% Deposit',
      statusText: 'Overdue (+4.5 Hrs Follow-up)',
      statusType: 'danger',
      autoAction: '🚨 Sales Manager Overdue Alert'
    }
  ];

  return (
    <div style={{ position: 'relative', padding: '4.5rem 1.5rem 6.5rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
      
      {/* AMBIENT GOLD GLOWS */}
      <div className="ambient-glow" style={{ top: '6%', left: '8%', width: '450px', height: '450px', background: 'rgba(212, 175, 55, 0.12)' }} />
      <div className="ambient-glow" style={{ top: '45%', right: '5%', width: '480px', height: '480px', background: 'rgba(245, 215, 127, 0.08)' }} />

      {/* TOP HERO: WHAT IS FMS & HOW DOES IT WORK */}
      <div style={{ maxWidth: '960px', marginBottom: '4.5rem' }}>
        <div className="page-badge">
          <Sparkles size={14} color="#f5d77f" />
          <span>Enterprise Operating Architecture</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, margin: '0 0 1.25rem 0' }}>
          What is <span className="gold-gradient-text">FMS</span> (Flow Management System) & How Does It Work?
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#f4f4f5', lineHeight: 1.7, margin: '0 0 1.25rem 0', fontWeight: 500 }}>
          <strong>FMS (Flow Management System)</strong> is an automated digital operating pipeline that connects every department in your company—Sales, Store, Accounts, Production, and Logistics—into a seamless sequence where every step has a <strong>Planned Target Time (TAT)</strong>, a <strong>Single Responsible Person</strong>, and <strong>Zero Internal Blame Games</strong>.
        </p>
        <p style={{ fontSize: '1.02rem', color: '#a1a1aa', lineHeight: 1.7, margin: 0 }}>
          Instead of relying on chaotic WhatsApp groups, lost paper slips, or repeated follow-up phone calls, FMS automatically moves orders from step to step, locks timestamps, calculates delay variances in real time, and alerts the Company Owner the moment any step gets delayed.
        </p>
      </div>

      {/* SECTION 1: THE 4 CORE PILLARS OF HOW FMS WORKS */}
      <div className="glass-card" style={{ padding: '3rem 2.5rem', background: 'linear-gradient(135deg, rgba(14, 17, 24, 0.98) 0%, rgba(20, 24, 34, 0.95) 100%)', marginBottom: '5.5rem', border: '1px solid rgba(212, 175, 55, 0.35)', borderRadius: '18px' }}>
        
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2.5rem auto' }}>
          <div className="page-badge">
            <Clock size={14} color="#f5d77f" />
            <span>The Working Mechanism</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            The 4 Core Principles of an FMS Pipeline
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.96rem', lineHeight: 1.6 }}>
            Here is how an FMS replaces manual human friction with systematic mathematical precision:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          
          <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.25)', padding: '1.75rem 1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#f5d77f', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>1. Granular Step Mapping</span>
            </div>
            <div style={{ fontSize: '0.88rem', color: '#d4d4d8', lineHeight: 1.6 }}>
              Every process is broken down into clear, sequential milestones (e.g. Order Entry ➡️ PI ➡️ Stock Check ➡️ Advance ➡️ Packing ➡️ Balance ➡️ Dispatch).
            </div>
          </div>

          <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.25)', padding: '1.75rem 1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#f5d77f', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>2. Planned Target TAT</span>
            </div>
            <div style={{ fontSize: '0.88rem', color: '#d4d4d8', lineHeight: 1.6 }}>
              The system automatically calculates the exact Planned Start & Finish timestamp for every task as soon as an order is entered.
            </div>
          </div>

          <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.25)', padding: '1.75rem 1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#f5d77f', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>3. Single-Owner Lock</span>
            </div>
            <div style={{ fontSize: '0.88rem', color: '#d4d4d8', lineHeight: 1.6 }}>
              Every step is assigned to one specific person. When completed, the actual timestamp is locked via mobile/web form with zero ambiguity.
            </div>
          </div>

          <div style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.25)', padding: '1.75rem 1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#f5d77f', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>4. Real-Time Delay Variance</span>
            </div>
            <div style={{ fontSize: '0.88rem', color: '#d4d4d8', lineHeight: 1.6 }}>
              Formula calculates: <code>Variance = Actual Time - Planned Time</code>. If a step delays, automated WhatsApp escalation alerts trigger to management.
            </div>
          </div>

        </div>

      </div>

      {/* SECTION 2: THE FLAGSHIP EXAMPLE — 10-STEP SALES ORDER (S-ORDER) LIFECYCLE */}
      <div className="glass-card" style={{ padding: '3.5rem 2rem', background: 'linear-gradient(135deg, rgba(14, 17, 24, 0.98) 0%, rgba(20, 24, 34, 0.95) 100%)', marginBottom: '5.5rem', border: '1px solid rgba(212, 175, 55, 0.45)', borderRadius: '18px', boxShadow: '0 20px 45px rgba(0,0,0,0.7)' }}>
        
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">
            <Package size={14} color="#f5d77f" />
            <span>Practical Example 1: Sales & Order Operations</span>
          </div>
          <h2 style={{ fontSize: '2.3rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            The 10-Step <span className="gold-gradient-text">Sales Order (S-Order)</span> FMS Lifecycle
          </h2>
          <p style={{ color: '#e4e4e7', fontSize: '0.98rem', lineHeight: 1.7 }}>
            How a complete Sales Order moves through the digital pipeline—from initial inquiry to 30% advance verification, inventory check, packing, 70% balance recovery, and final delivery:
          </p>
        </div>

        {/* 10-Step Visual Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {salesOrderLifecycle.map((item, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: 'rgba(255, 255, 255, 0.02)', 
                border: '1px solid rgba(212, 175, 55, 0.25)', 
                borderRadius: '12px', 
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Step Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                <span style={{ 
                  fontSize: '0.82rem', 
                  fontWeight: 900, 
                  background: 'rgba(212, 175, 55, 0.18)', 
                  color: '#f5d77f', 
                  padding: '0.2rem 0.6rem', 
                  borderRadius: '6px', 
                  border: '1px solid rgba(212, 175, 55, 0.35)' 
                }}>
                  STEP {item.step}
                </span>
                <span style={{ fontSize: '0.74rem', color: '#38bdf8', fontWeight: 600, background: 'rgba(56, 189, 248, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
                  ⏱️ {item.tat}
                </span>
              </div>

              {/* Step Title */}
              <h3 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.5rem 0', lineHeight: 1.3 }}>
                {item.title}
              </h3>

              {/* Responsible Owner */}
              <div style={{ fontSize: '0.78rem', color: '#a1a1aa', marginBottom: '0.75rem' }}>
                👤 <strong>Owner:</strong> {item.owner}
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.84rem', color: '#d4d4d8', lineHeight: 1.55, margin: '0 0 1rem 0' }}>
                {item.desc}
              </p>

              {/* Automated System Action */}
              <div style={{ marginTop: 'auto', background: 'rgba(212, 175, 55, 0.08)', padding: '0.65rem 0.8rem', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)', fontSize: '0.78rem', color: '#fef3c7' }}>
                ⚡ <strong>System Trigger:</strong> {item.action}
              </div>

            </div>
          ))}
        </div>

        {/* Security Assurance */}
        <div style={{ background: 'rgba(20, 24, 34, 0.85)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <ShieldCheck size={26} color="#4ade80" />
            <div>
              <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.98rem' }}>100% Advance & Balance Protection</div>
              <div style={{ color: '#a1a1aa', fontSize: '0.85rem' }}>Orders cannot be packed without verified 30% advance, and cannot be loaded for dispatch without verified 70% balance clearance.</div>
            </div>
          </div>
          <Link href="/contact" className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.88rem' }}>
            Implement S-Order FMS in Your Business <ArrowRight size={14} />
          </Link>
        </div>

      </div>

      {/* SECTION 3: OTHER CORE BUSINESS FLOWS CONTROLLED BY FMS */}
      <div style={{ marginBottom: '5.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">
            <Layers size={14} color="#f5d77f" />
            <span>Complete Company Coverage</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            What Other Flows Does FMS Automate in a Company?
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.96rem', lineHeight: 1.6 }}>
            Beyond Sales Orders, FMS establishes disciplined, timestamped flows across all major operational departments:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {otherFmsFlows.map((flow, fIdx) => (
            <div 
              key={fIdx} 
              className="glass-card" 
              style={{ 
                padding: '2rem 1.75rem', 
                display: 'flex', 
                flexDirection: 'column', 
                background: 'rgba(14, 17, 24, 0.92)',
                borderTop: '3px solid #f5d77f'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {flow.icon}
                  <span style={{ fontSize: '0.74rem', background: 'rgba(212, 175, 55, 0.15)', color: '#f5d77f', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                    {flow.badge}
                  </span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.4rem 0' }}>
                {flow.flowName}
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#a1a1aa', marginBottom: '1.25rem' }}>
                {flow.summary}
              </p>

              <div style={{ background: 'rgba(20, 24, 34, 0.7)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)', marginTop: 'auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {flow.steps.map((st, sIndex) => (
                    <div key={sIndex} style={{ fontSize: '0.82rem', color: '#e4e4e7', display: 'flex', alignItems: 'flex-start', gap: '0.4rem', lineHeight: 1.45 }}>
                      <CheckCircle2 size={14} color="#d4af37" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{st}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: THE OWNER'S LIVE EXECUTIVE CONTROL CENTER */}
      <div style={{ marginBottom: '5.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">
            <Eye size={14} color="#f5d77f" />
            <span>Executive Single-Screen Visibility</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            What Does the Company Owner See on Their Live Screen?
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.96rem', lineHeight: 1.6 }}>
            Company directors no longer need to walk the plant or make phone calls to know order status. The live dashboard shows exactly <strong>WHERE</strong> every order is stuck and <strong>WHO</strong> is responsible:
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
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: '#a1a1aa', flexWrap: 'wrap' }}>
              <span>Active S-Orders: <strong style={{ color: '#ffffff' }}>24 Orders</strong></span>
              <span>Advance Locked: <strong style={{ color: '#4ade80' }}>100%</strong></span>
              <span>On-Time Dispatch: <strong style={{ color: '#4ade80' }}>96%</strong></span>
            </div>
          </div>

          {/* Live Orders Flow Table */}
          <div style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}>
            <table style={{ minWidth: '720px', width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: '#f5d77f', textTransform: 'uppercase', fontSize: '0.74rem', letterSpacing: '0.04em' }}>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Sales Order ID</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Client & Order Value</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Current Lifecycle Step</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Payment Status</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Responsible Owner</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Live Order Status</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Automated System Trigger</th>
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
                    <td style={{ padding: '1rem 0.5rem', fontWeight: 800, color: '#f5d77f' }}>
                      {row.id}
                    </td>
                    <td style={{ padding: '1rem 0.5rem' }}>
                      <div style={{ fontWeight: 700, color: '#ffffff' }}>{row.client}</div>
                      <div style={{ color: '#a1a1aa', fontSize: '0.76rem' }}>{row.orderValue}</div>
                    </td>
                    <td style={{ padding: '1rem 0.5rem', color: '#e4e4e7', fontWeight: 600 }}>
                      {row.currentStep}
                    </td>
                    <td style={{ padding: '1rem 0.5rem', fontSize: '0.78rem', color: '#fde68a' }}>
                      {row.paymentStatus}
                    </td>
                    <td style={{ padding: '1rem 0.5rem', color: '#ffffff', fontWeight: 500 }}>
                      {row.responsible}
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
                        {row.statusText}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 0.5rem', fontSize: '0.78rem', color: '#e4e4e7' }}>
                      {row.autoAction}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Department Summary Scorecard Bar */}
          <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(212, 175, 55, 0.15)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ fontSize: '0.72rem', color: '#a1a1aa', textTransform: 'uppercase' }}>PI & Advance (30%)</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#4ade80' }}>100% Deposit Verified</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.08)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.25)' }}>
              <div style={{ fontSize: '0.72rem', color: '#f87171', textTransform: 'uppercase', fontWeight: 700 }}>🚨 Balance Collection (70%)</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fca5a5' }}>1 Follow-up Overdue</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ fontSize: '0.72rem', color: '#a1a1aa', textTransform: 'uppercase' }}>Packing & Dispatch</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#4ade80' }}>19 Orders Shipped This Week</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ fontSize: '0.72rem', color: '#a1a1aa', textTransform: 'uppercase' }}>Customer Satisfaction (CSAT)</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#4ade80' }}>4.9/5.0 (48 Reviews)</div>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 5: MEASURABLE BUSINESS IMPACT */}
      <div className="glass-card" style={{ padding: '3.5rem 2rem', background: 'linear-gradient(135deg, rgba(20, 24, 34, 0.95) 0%, rgba(14, 17, 24, 0.95) 100%)', marginBottom: '5rem', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">Proven Business Outcomes</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            Measurable Operational Transformation with SuPuja FMS
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#4ade80' }}>100% 🔒</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Advance & Balance Security</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>No orders dispatched without verified 30% advance and 70% balance payments.</div>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#f5d77f' }}>0 Errors 🎯</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Stock & Packing Mismatches</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>Barcoded packaging and live photo verification before loading.</div>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#38bdf8' }}>Real-Time ⚡</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Transporter LR on WhatsApp</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>Clients receive tracking details and bilty copy instantly.</div>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#c084fc' }}>3+ Hours ⏰</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Daily Owner Time Reclaimed</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>Full visibility into every order from entry to delivery on one live screen.</div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACTION CTA */}
      <div className="glass-card" style={{ padding: '3.5rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(14, 17, 24, 0.95) 100%)', border: '1px solid #d4af37' }}>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
          Ready to Automate Your Business Flows with Custom FMS?
        </h3>
        <p style={{ color: '#e4e4e7', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto 2rem auto', lineHeight: 1.65 }}>
          We will audit your existing sales, order execution, store inventory, and dispatch operations to build a tailored <strong>Flow Management System (FMS)</strong> for your company.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/contact?service=Sales%20%26%20Order%20Management%20System" className="btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
            Book an FMS Architecture Consultation <Send size={18} />
          </Link>
          <a 
            href="https://wa.me/919988119276?text=Hello%20SuPuja%20Creations,%20I%20want%20to%20understand%20and%20implement%20FMS%20Workflows%20for%20my%20company." 
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
