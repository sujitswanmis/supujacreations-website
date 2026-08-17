'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  GitBranch, Factory, Clock, ShieldCheck, CheckCircle2, 
  AlertTriangle, ArrowRight, Layers, FileText, Send, Zap, Cpu, Sparkles,
  AlertCircle, Users, BarChart3, TrendingDown, Eye, Bell, CheckSquare, ChevronRight,
  UserCheck, DollarSign, Truck, MessageSquare, PhoneCall, Package, Check, ArrowDown
} from 'lucide-react';

export default function FMSWorkflowsPage() {
  // Real-world 10-Step Sales Order (S-Order) Lifecycle requested by user
  const salesOrderLifecycle = [
    {
      step: '01',
      title: 'Order Entry & Inquiry Logging',
      owner: 'Sales Executive (Rahul Mehta)',
      tat: 'Target SLA: 15 Mins',
      status: 'Completed',
      statusColor: '#4ade80',
      desc: 'Customer requirements, item specs, custom configurations, and billing/shipping address logged into the central order master.',
      action: 'Automatic lead conversion & Order ID generated'
    },
    {
      step: '02',
      title: 'Order Confirm & PI Generate',
      owner: 'Sales Coordinator (Pooja Sharma)',
      tat: 'Target SLA: 30 Mins',
      status: 'Completed',
      statusColor: '#4ade80',
      desc: '1-Click Proforma Invoice (PI) generated with agreed item rates, GST calculations, and 30% advance deposit terms.',
      action: 'PI PDF auto-sent to client on WhatsApp & Email'
    },
    {
      step: '03',
      title: 'Stock & Inventory Check',
      owner: 'Warehouse / Store (Dinesh Kumar)',
      tat: 'Target SLA: 45 Mins',
      status: 'Completed',
      statusColor: '#4ade80',
      desc: 'Finished goods inventory and raw material availability checked. Stock reserved immediately to prevent duplicate bookings.',
      action: 'Stock allocated in MIS & Packing slip pre-generated'
    },
    {
      step: '04',
      title: 'Advance Deposited (30%)',
      owner: 'Client / Buyer (Kisan Agro Equipment)',
      tat: 'Target SLA: Within 24 Hrs',
      status: 'Completed',
      statusColor: '#4ade80',
      desc: 'Client transfers 30% token advance deposit (e.g. ₹1,50,000 via NEFT/UPI) and submits transaction bank UTR receipt.',
      action: 'UTR payment slip uploaded via client web form'
    },
    {
      step: '05',
      title: 'Advance Received & Verified (30%)',
      owner: 'Accounts Executive (Vikram Singh)',
      tat: 'Target SLA: 1 Hour',
      status: 'Completed',
      statusColor: '#4ade80',
      desc: 'Bank credit verified in company account. Accounts locks "30% ADVANCE RECEIVED" and releases Green Light for packaging/production.',
      action: 'Production & Packing Job Order released'
    },
    {
      step: '06',
      title: 'Order Packed & QC Inspected',
      owner: 'QC & Packaging (Manoj Kumar)',
      tat: 'Target SLA: 4 Hours',
      status: 'Completed',
      statusColor: '#4ade80',
      desc: 'Physical goods inspected against technical drawing, serial number tagged, barcode applied, and securely boxed for transit.',
      action: 'Final weight & live packing photos uploaded'
    },
    {
      step: '07',
      title: 'Balance Amount Due (70%)',
      owner: 'Accounts & Billing (Vikram Singh)',
      tat: 'Target SLA: 30 Mins',
      status: 'Completed',
      statusColor: '#4ade80',
      desc: 'Final Tax Invoice generated for remaining 70% balance (₹3,50,000). Automated payment request intimation dispatched with packing photos.',
      action: 'WhatsApp alert + Invoice PDF sent to client'
    },
    {
      step: '08',
      title: 'Balance Received & Clearance (70%)',
      owner: 'Accounts Head (Vikram Singh)',
      tat: 'Target SLA: 2 Hours',
      status: 'Completed',
      statusColor: '#4ade80',
      desc: 'Full 100% payment reconciled in bank ledger. Dispatch Pass automatically unlocked for logistics and loading bay.',
      action: 'Zero-Balance Clearance Pass generated'
    },
    {
      step: '09',
      title: 'Order Dispatch & Transporter LR/Bilty',
      owner: 'Logistics Dispatch (Amit Patil)',
      tat: 'Target SLA: Same Day (2 Hrs)',
      status: 'Completed',
      statusColor: '#4ade80',
      desc: 'Material loaded onto transport truck, Delivery Challan (DC) stamped, E-Way Bill linked, and Transporter LR/Bilty number logged.',
      action: 'Live Transporter LR Bilty auto-shared on WhatsApp'
    },
    {
      step: '10',
      title: 'Delivery Status & Client Acknowledgment',
      owner: 'Support & Delivery Desk',
      tat: 'Target SLA: On Arrival',
      status: 'Active / Delivered',
      statusColor: '#f5d77f',
      desc: 'Consignment arrives safely at client warehouse, Proof of Delivery (POD) verified, and automated 1-Click WhatsApp CSAT & Google Review triggered.',
      action: 'Order Lifecycle Successfully Closed (O2D 100%)'
    }
  ];

  // Real-life problem flows where businesses suffer massive hidden losses
  const problemFlows = [
    {
      title: 'Problem Scenario 1: Lead Leakage & Delayed Sales Follow-ups',
      dept: 'Marketing ➡️ Sales Team',
      realExample: 'A prospective client saw an ad on Facebook or Instagram, submitted their requirement, and waited for a call. But the sales executive called after 3 days. By then, the client had already purchased from a competitor who called within 10 minutes.',
      hiddenLoss: 'Over ₹2 Lakhs in lost high-margin sales deals every month due to untracked, forgotten spreadsheet leads.',
      solution: 'SuPuja Lead FMS captures leads instantly from Meta Ads, IndiaMART, and WhatsApp, automatically assigns them round-robin to salespeople, and triggers a 15-minute follow-up countdown SLA.'
    },
    {
      title: 'Problem Scenario 2: Quotation Delays & Unorganized Pricing',
      dept: 'Sales ➡️ Client Negotiation',
      realExample: 'A client asked for an urgent formal quotation. The sales rep spent 4 hours calculating rates in Excel, making manual errors and forgetting standard terms. The delayed proposal killed client momentum and buying confidence.',
      hiddenLoss: 'Low conversion rates and lost client credibility due to slow, unprofessional paper/Excel estimates.',
      solution: '1-Click digital Quotation PDF generator with pre-configured price books, discount controls, and automated WhatsApp delivery with read-receipt tracking.'
    },
    {
      title: 'Problem Scenario 3: Sales Order to Store & Production Disconnect',
      dept: 'Sales ➡️ Factory / Warehouse',
      realExample: 'A customer transferred a 30% advance deposit for 20 machinery units. However, the store and packing lines were never notified because the sales rep forgot to forward the bank slip to the accounts team.',
      hiddenLoss: 'Dispatch delayed by 8 days, leading to client disputes, penalty deductions, and emergency overtime labor costs.',
      solution: 'Automated Sales Order (S-Order) workflow locks the advance payment verification, instantly generates the digital Job Order, and reserves store materials automatically.'
    },
    {
      title: 'Problem Scenario 4: Dispatch Black Hole & Trapped 70% Balance Payments',
      dept: 'Logistics ➡️ Accounts & Client',
      realExample: 'Material was loaded onto a transport truck, but the delivery challan and bilty (LR) number were not sent to the client. The client refused to release final 70% balance payment claiming they had no proof of dispatch.',
      hiddenLoss: 'Tens of lakhs in trapped working capital, cash-flow crunches, and tense payment recovery arguments.',
      solution: 'As soon as the transporter LR is entered, the client receives an automated WhatsApp update with the Bilty copy and instant payment link for balance settlement.'
    }
  ];

  // Live Control Center Data matching the 10-step Sales Order flow
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
      plannedTarget: 'SLA: 30 Mins',
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

      {/* HEADER SECTION */}
      <div style={{ maxWidth: '920px', marginBottom: '4.5rem' }}>
        <div className="page-badge">
          <Sparkles size={14} color="#f5d77f" />
          <span>Sales Order & Lead Workflow Engineering</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, margin: '0 0 1.25rem 0' }}>
          Sales Order & Lead Flow Control (<span className="gold-gradient-text">FMS</span>)
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#e4e4e7', lineHeight: 1.7, margin: 0 }}>
          Eliminate delays, missed follow-ups, and payment leakage. We engineer complete <strong>Sales Order (S-Order) & Lead Lifecycle Automations</strong> with automated <strong>Planned vs. Actual SLA Tracking</strong>, 30%/70% payment locks, dispatch verification, and real-time Director dashboards.
        </p>
      </div>

      {/* FEATURED: THE 10-STEP REAL-WORLD SALES ORDER LIFECYCLE WALKTHROUGH */}
      <div className="glass-card" style={{ padding: '3.5rem 2rem', background: 'linear-gradient(135deg, rgba(14, 17, 24, 0.98) 0%, rgba(20, 24, 34, 0.95) 100%)', marginBottom: '5.5rem', border: '1px solid rgba(212, 175, 55, 0.45)', borderRadius: '18px', boxShadow: '0 20px 45px rgba(0,0,0,0.7)' }}>
        
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">
            <Package size={14} color="#f5d77f" />
            <span>Complete Order-to-Delivery Blueprint</span>
          </div>
          <h2 style={{ fontSize: '2.3rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            Real-World <span className="gold-gradient-text">10-Step Sales Order (S-Order)</span> Lifecycle
          </h2>
          <p style={{ color: '#e4e4e7', fontSize: '0.98rem', lineHeight: 1.7 }}>
            Here is the exact step-by-step digital flow that governs every sales order—ensuring 100% advance security, stock allocation, timely packing, 70% balance recovery, and tracked dispatch:
          </p>
        </div>

        {/* 10-Step Visual Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
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
                ⚡ <strong>System Action:</strong> {item.action}
              </div>

            </div>
          ))}
        </div>

        {/* Lifecycle Key Benefit Callout */}
        <div style={{ background: 'rgba(20, 24, 34, 0.85)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <ShieldCheck size={26} color="#4ade80" />
            <div>
              <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.98rem' }}>100% Financial & Dispatch Security</div>
              <div style={{ color: '#a1a1aa', fontSize: '0.85rem' }}>Orders cannot be packed without verified 30% advance, and cannot be loaded for dispatch without verified 70% balance clearance.</div>
            </div>
          </div>
          <Link href="/contact" className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.88rem' }}>
            Implement S-Order FMS in Your Business <ArrowRight size={14} />
          </Link>
        </div>

      </div>

      {/* SECTION 2: LIVE EXECUTIVE LEAD & SALES ORDER CONTROL CENTER */}
      <div style={{ marginBottom: '5.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">
            <Eye size={14} color="#f5d77f" />
            <span>Executive Single-Screen Visibility</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            SuPuja Executive Lead & Sales Order Live Control Center
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.96rem', lineHeight: 1.6 }}>
            Company Owners and Directors see exactly <strong>WHERE</strong> every sales order is stationed, <strong>WHO</strong> is handling it, payment clearance status, and if any dispatch SLA is breaching:
          </p>
        </div>

        {/* Mockup Dashboard Card */}
        <div className="glass-card" style={{ padding: '2rem', background: '#0a0d14', border: '1px solid rgba(212, 175, 55, 0.4)', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.8)' }}>
          
          {/* Dashboard Header Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e' }} />
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '1.1rem' }}>
                Live Sales Order (S-Order) Pipeline Monitor
              </div>
              <span style={{ fontSize: '0.72rem', background: 'rgba(212, 175, 55, 0.15)', color: '#f5d77f', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                ACTIVE REAL-TIME DATA
              </span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: '#a1a1aa', flexWrap: 'wrap' }}>
              <span>Active S-Orders: <strong style={{ color: '#ffffff' }}>24 Orders</strong></span>
              <span>Advance Locked: <strong style={{ color: '#4ade80' }}>100%</strong></span>
              <span>Dispatched on Schedule: <strong style={{ color: '#4ade80' }}>96%</strong></span>
            </div>
          </div>

          {/* Live Orders Flow Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
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
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fca5a5' }}>1 Client Follow-up Overdue</div>
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

      {/* SECTION 3: REAL-LIFE BOTTLENECKS WHERE COMPANIES LOSE REVENUE */}
      <div style={{ marginBottom: '5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">
            <AlertTriangle size={14} color="#f5d77f" />
            <span>Sales & Operational Bottlenecks</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            Where Do Unmanaged Sales Orders Get Stuck?
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.96rem', lineHeight: 1.6 }}>
            Here are the 4 common operational leaks that cost enterprises millions in lost revenue, delayed cash flow, and damaged customer relationships:
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
                <span style={{ fontSize: '0.8rem', color: '#71717a', fontWeight: 600 }}>Bottleneck #{idx + 1}</span>
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.85rem 0', lineHeight: 1.3 }}>
                {flow.title}
              </h3>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ fontSize: '0.78rem', color: '#f87171', fontWeight: 700, marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <AlertCircle size={14} />
                  Ground Reality & Practical Challenge:
                </div>
                <p style={{ color: '#d4d4d8', fontSize: '0.86rem', lineHeight: 1.55, margin: 0 }}>
                  &ldquo;{flow.realExample}&rdquo;
                </p>
              </div>

              <div style={{ background: 'rgba(239, 68, 68, 0.08)', padding: '0.85rem 1rem', borderRadius: '8px', marginBottom: '1.25rem', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', color: '#fca5a5', fontWeight: 700, textTransform: 'uppercase' }}>Hidden Revenue Impact:</div>
                <div style={{ fontSize: '0.84rem', color: '#fecaca', fontWeight: 500 }}>{flow.hiddenLoss}</div>
              </div>

              <div style={{ marginTop: 'auto', background: 'rgba(212, 175, 55, 0.1)', padding: '0.9rem 1rem', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                <div style={{ fontSize: '0.75rem', color: '#f5d77f', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.25rem' }}>
                  <ShieldCheck size={14} color="#f5d77f" />
                  SuPuja Automated FMS Solution:
                </div>
                <div style={{ fontSize: '0.84rem', color: '#fef3c7', lineHeight: 1.5 }}>
                  {flow.solution}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: MEASURABLE BUSINESS IMPACT */}
      <div className="glass-card" style={{ padding: '3.5rem 2rem', background: 'linear-gradient(135deg, rgba(20, 24, 34, 0.95) 0%, rgba(14, 17, 24, 0.95) 100%)', marginBottom: '5rem', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">Proven Business ROI</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            Measurable Operational Transformation with SuPuja S-Order FMS
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
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#c084fc' }}>1-Screen 📱</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Owner Pipeline Clarity</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>Monitor every order from entry to delivery in your pocket.</div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACTION CTA */}
      <div className="glass-card" style={{ padding: '3.5rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(14, 17, 24, 0.95) 100%)', border: '1px solid #d4af37' }}>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
          Ready to Automate Your Sales Order & Delivery Operations?
        </h3>
        <p style={{ color: '#e4e4e7', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto 2rem auto', lineHeight: 1.65 }}>
          We will audit your existing sales pipelines, quotation process, advance verification, and dispatch flow to architect a custom <strong>Sales Order FMS System</strong>.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/contact?service=Sales%20%26%20Order%20Management%20System" className="btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
            Schedule an S-Order FMS Consultation <Send size={18} />
          </Link>
          <a 
            href="https://wa.me/919988119276?text=Hello%20SuPuja%20Creations,%20I%20want%20to%20automate%20my%20Sales%20Order%20and%20Dispatch%20Flow." 
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
