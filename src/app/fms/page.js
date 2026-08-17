'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  GitBranch, Factory, Clock, ShieldCheck, CheckCircle2, 
  AlertTriangle, ArrowRight, Layers, FileText, Send, Zap, Cpu, Sparkles,
  AlertCircle, Users, BarChart3, TrendingDown, Eye, Bell, CheckSquare, ChevronRight,
  UserCheck, DollarSign, Truck, MessageSquare, PhoneCall
} from 'lucide-react';

export default function FMSWorkflowsPage() {
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
      realExample: 'A customer transferred a 50% advance deposit for 20 machinery units. However, the store and factory lines were never notified because the sales rep forgot to forward the bank slip to the accounts team.',
      hiddenLoss: 'Production delayed by 8 days, leading to client disputes, penalty deductions, and emergency overtime labor costs.',
      solution: 'Automated Sales Order (S-Order) workflow locks the advance payment verification, instantly generates the digital Job Order, and reserves store materials automatically.'
    },
    {
      title: 'Problem Scenario 4: Dispatch Black Hole & Delayed Payment Collection',
      dept: 'Logistics ➡️ Accounts & Client',
      realExample: 'Material was loaded onto a transport truck, but the delivery challan and bilty (LR) number were not sent to the client. The client refused to release final balance payment claiming they had no proof of dispatch.',
      hiddenLoss: 'Tens of lakhs in trapped working capital, cash-flow crunches, and tense payment recovery arguments.',
      solution: 'As soon as the transporter LR is entered, the client receives an automated WhatsApp update with the Bilty copy and instant payment link for balance settlement.'
    }
  ];

  // Lead Management & Sales Order (S-Order) Live Control Center Data
  const liveDashboardData = [
    {
      id: 'LEAD-2026-412',
      client: 'Kisan Agro Equipment (Punjab)',
      flowType: 'Inbound Lead (Meta Ads / WhatsApp)',
      currentStage: 'Lead Qualification & Tech Call',
      responsiblePerson: 'Pooja Sharma (Lead Specialist)',
      plannedTarget: 'Call within 15 Mins',
      actualStatus: 'Connected in 4 Mins',
      statusType: 'success',
      actionTaken: '🟢 WhatsApp Catalog & Pricing Sent'
    },
    {
      id: 'LEAD-2026-398',
      client: 'Apex Industrial Toolings Pvt Ltd',
      flowType: 'Formal Quotation Proposal',
      currentStage: 'Custom Quotation Review',
      responsiblePerson: 'Rahul Mehta (Sales Executive)',
      plannedTarget: 'Follow-up within 24 Hrs',
      actualStatus: 'Overdue (+18.5 Hrs)',
      statusType: 'danger',
      actionTaken: '🚨 Auto-Escalation Sent to Sales Manager'
    },
    {
      id: 'SO-2026-089',
      client: 'Modern Agri Implements (Gujarat)',
      flowType: 'Sales Order (₹4.8 Lakh Advance Verified)',
      currentStage: 'SO Released to Production & Store',
      responsiblePerson: 'Vikram Singh (Order Coordinator)',
      plannedTarget: 'Order Lock in 2 Hrs',
      actualStatus: 'Completed in 35 Mins',
      statusType: 'success',
      actionTaken: '🟢 BOM & Job Cards Auto-Generated'
    },
    {
      id: 'SO-2026-074',
      client: 'Bharat Tractors & Spares (MP)',
      flowType: 'Sales Order (Batch of 10 Units)',
      currentStage: 'Assembly QC & Packaging',
      responsiblePerson: 'Manoj Kumar (Plant Supervisor)',
      plannedTarget: 'Ready by 04:00 PM Today',
      actualStatus: 'Approaching SLA (45 Mins Left)',
      statusType: 'warning',
      actionTaken: '🟡 Priority Packing Alert to Team'
    },
    {
      id: 'SO-2026-068',
      client: 'Shree Balaji Traders (Haryana)',
      flowType: 'Dispatch & Payment Recovery',
      currentStage: 'Transporter LR & Final Invoicing',
      responsiblePerson: 'Amit Patil (Logistics & Accounts)',
      plannedTarget: 'Dispatch by 06:00 PM',
      actualStatus: 'Dispatched with VRL Logistics',
      statusType: 'success',
      actionTaken: '🟢 Bilty & Balance Invoice Shared on WhatsApp'
    }
  ];

  const leadAndOrderStages = [
    {
      range: 'Flow Step 1: Lead Capture & Qualification',
      title: 'Omni-Channel Lead Capture & 15-Minute Response SLA',
      tat: 'Target SLA: Under 15 Minutes',
      owner: 'Lead Specialist / Front Desk',
      desc: 'Automatic lead capture from Meta Ads (Facebook & Instagram), IndiaMART, Website forms, and WhatsApp Business API. Auto-assigned to sales reps via smart round-robin distribution.',
      steps: [
        'Instant lead capture with UTM source tracking',
        'Automatic round-robin assignment to active sales executive',
        'Automated welcome WhatsApp message with digital company brochure',
        '15-Minute first-call timer countdown on sales rep mobile',
        'Lead qualification tagging (Hot, Warm, Cold, Enterprise)'
      ]
    },
    {
      range: 'Flow Step 2: Quotation & Proposal Management',
      title: '1-Click PDF Quotation & Multi-Tier Approval',
      tat: 'Target SLA: Within 2 Hours',
      owner: 'Sales Executive & Sales Manager',
      desc: 'Instant generation of professional, GST-compliant PDF quotations with custom line items, discount controls, manager sign-off hierarchy, and automatic client delivery.',
      steps: [
        'Dynamic item selection from centralized master price list',
        'Managerial discount approval workflow for special rates',
        '1-Click professional PDF quotation generation with company branding',
        'Instant delivery via official WhatsApp API & Email',
        'Automated follow-up reminders scheduled on calendar'
      ]
    },
    {
      range: 'Flow Step 3: Sales Order (SO) Confirmation & Advance Verification',
      title: 'Deposit Lock & Automated Work Order Release',
      tat: 'Target SLA: Within 4 Hours',
      owner: 'Accounts Executive & Production Coordinator',
      desc: 'Client purchase order acceptance, advance token payment reconciliation, unique Sales Order (SO Number) generation, and zero-delay handoff to warehouse & production.',
      steps: [
        'Client PO verification & advance payment receipt posting',
        'Unique Sales Order (SO-2026-XXX) number generation',
        'Automated Bill of Materials (BOM) stock reservation',
        'Digital Job Order released to plant floor with target dispatch date',
        'Order confirmation WhatsApp notification sent to customer'
      ]
    },
    {
      range: 'Flow Step 4: Dispatch, Transporter LR & Live Tracking',
      title: 'Delivery Challan, E-Way Bill & Bilty Handoff',
      tat: 'Target SLA: Same-Day Dispatch',
      owner: 'Logistics Head & Dispatch Team',
      desc: 'Final quality inspection pass, packaging verification, Delivery Challan (DC) creation, E-Way bill generation, freight transporter loading, and LR entry.',
      steps: [
        'Final QC checklist pass & barcode packaging verification',
        'Automated Delivery Challan (DC) & Tax Invoice creation',
        'E-Way Bill integration with government portal',
        'Transporter allocation, driver contact, and LR/Bilty entry',
        'Instant WhatsApp dispatch update with live LR copy sent to client'
      ]
    },
    {
      range: 'Flow Step 5: Balance Payment Recovery & Customer NPS Feedback',
      title: 'Automated Reminders, Ledger Sync & 5-Star Reviews',
      tat: 'Target SLA: Within 48 Hours of Delivery',
      owner: 'Accounts Receivable & Support Lead',
      desc: 'Automated balance payment reminders, statement of accounts (SOA) ledger sync, 1-click WhatsApp customer feedback survey, and Google 5-Star review booster.',
      steps: [
        'Automated payment due date reminder alerts sent on WhatsApp',
        'Instant payment receipt reconciliation & ledger closure',
        '1-Click WhatsApp CSAT & Net Promoter Score (NPS) survey',
        'Instant alert to Director on negative feedback for immediate resolution',
        'Automated Google 5-Star review redirect for happy clients'
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
          <span>Lead & Sales Order Workflow Engineering</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, margin: '0 0 1.25rem 0' }}>
          Lead Management & Sales Order Flow Control (<span className="gold-gradient-text">FMS</span>)
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#e4e4e7', lineHeight: 1.7, margin: 0 }}>
          Stop losing high-value sales deals to delayed follow-ups and uncoordinated order fulfillment. We engineer streamlined <strong>Lead-to-Cash & Sales Order FMS Workflows</strong> with real-time <strong>Planned vs. Actual SLA Tracking</strong> and instant Director-level control dashboards.
        </p>
      </div>

      {/* SECTION 1: REAL-LIFE SCENARIOS WHERE COMPANIES LOSE REVENUE */}
      <div style={{ marginBottom: '5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">
            <AlertTriangle size={14} color="#f5d77f" />
            <span>Sales & Operational Bottlenecks</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            Where Do Most Leads & Sales Orders Get Stuck?
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
            Company Owners and Sales Directors see exactly <strong>WHERE</strong> every lead and sales order is stationed, <strong>WHO</strong> is handling it, and if any follow-up or dispatch SLA is breaching:
          </p>
        </div>

        {/* Mockup Dashboard Card */}
        <div className="glass-card" style={{ padding: '2rem', background: '#0a0d14', border: '1px solid rgba(212, 175, 55, 0.4)', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.8)' }}>
          
          {/* Dashboard Header Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e' }} />
              <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '1.1rem' }}>
                Live Lead & Sales Order Pipeline Monitor
              </div>
              <span style={{ fontSize: '0.72rem', background: 'rgba(212, 175, 55, 0.15)', color: '#f5d77f', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                ACTIVE LIVE DATA
              </span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: '#a1a1aa', flexWrap: 'wrap' }}>
              <span>Today’s Leads: <strong style={{ color: '#ffffff' }}>28 Captured</strong></span>
              <span>Active Sales Orders: <strong style={{ color: '#ffffff' }}>19 Orders</strong></span>
              <span>On-Time SLA: <strong style={{ color: '#4ade80' }}>94%</strong></span>
            </div>
          </div>

          {/* Live Orders Flow Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.84rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: '#f5d77f', textTransform: 'uppercase', fontSize: '0.74rem', letterSpacing: '0.04em' }}>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Lead / Order ID</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Client / Opportunity</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Current Pipeline Stage</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Responsible Owner</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Planned SLA Target</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Live Status</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Automated Trigger</th>
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
                      <div style={{ color: '#a1a1aa', fontSize: '0.76rem' }}>{row.flowType}</div>
                    </td>
                    <td style={{ padding: '1rem 0.5rem', color: '#e4e4e7', fontWeight: 600 }}>
                      {row.currentStage}
                    </td>
                    <td style={{ padding: '1rem 0.5rem', color: '#ffffff', fontWeight: 500 }}>
                      {row.responsiblePerson}
                    </td>
                    <td style={{ padding: '1rem 0.5rem', color: '#f5d77f', fontSize: '0.8rem' }}>
                      {row.plannedTarget}
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
                      {row.actionTaken}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Department Summary Scorecard Bar */}
          <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(212, 175, 55, 0.15)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ fontSize: '0.72rem', color: '#a1a1aa', textTransform: 'uppercase' }}>Inbound Leads Response</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#4ade80' }}>Avg 6 Mins (96% Contacted)</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.08)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.25)' }}>
              <div style={{ fontSize: '0.72rem', color: '#f87171', textTransform: 'uppercase', fontWeight: 700 }}>🚨 Quotation Follow-ups</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fca5a5' }}>2 Escalations Pending</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ fontSize: '0.72rem', color: '#a1a1aa', textTransform: 'uppercase' }}>Orders in Fulfillment</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#4ade80' }}>19 Active (100% On-Schedule)</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ fontSize: '0.72rem', color: '#a1a1aa', textTransform: 'uppercase' }}>Payment Collections</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#4ade80' }}>₹14.2L Recovered this Week</div>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 3: THE 5-STEP COMPLETE LEAD-TO-CASH & S-ORDER BLUEPRINT */}
      <div style={{ marginBottom: '5.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div className="page-badge">End-to-End Blueprint</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            The 5-Stage Lead & Sales Order Flow Architecture
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.96rem' }}>
            From initial ad click to final invoice settlement and repeat referral generation:
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {leadAndOrderStages.map((stg, idx) => (
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
                  Key Automated Milestones:
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

      {/* SECTION 4: MEASURABLE BUSINESS IMPACT */}
      <div className="glass-card" style={{ padding: '3.5rem 2rem', background: 'linear-gradient(135deg, rgba(20, 24, 34, 0.95) 0%, rgba(14, 17, 24, 0.95) 100%)', marginBottom: '5rem', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <div className="page-badge">Proven Business ROI</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
            Measurable Revenue Growth with SuPuja Sales & Lead FMS
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#4ade80' }}>3.4x 🚀</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Faster Lead Conversion</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>15-minute rapid response SLAs triple customer closing rates.</div>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#f5d77f' }}>100% 🎯</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Zero Lead Leakage</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>No untracked spreadsheet entries or forgotten client follow-ups.</div>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#38bdf8' }}>48 Hrs ⚡</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Faster Payment Collection</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>Automated Bilty dispatch & WhatsApp payment reminders prevent payment delays.</div>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.06)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#c084fc' }}>1-Screen 📱</div>
            <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '0.5rem', fontSize: '1rem' }}>Owner Pipeline Clarity</div>
            <div style={{ fontSize: '0.84rem', color: '#a1a1aa', marginTop: '0.25rem' }}>Real-time sales, order fulfillment, and collection visibility in your pocket.</div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACTION CTA */}
      <div className="glass-card" style={{ padding: '3.5rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(14, 17, 24, 0.95) 100%)', border: '1px solid #d4af37' }}>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
          Ready to Automate Your Lead & Sales Order Operations?
        </h3>
        <p style={{ color: '#e4e4e7', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto 2rem auto', lineHeight: 1.65 }}>
          We will audit your existing sales pipelines, quotation process, and order fulfillment flow to architect a custom <strong>Lead & S-Order FMS Automation System</strong>.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/contact?service=CRM%20%26%20Lead%20Management%20System" className="btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
            Schedule a Sales FMS Consultation <Send size={18} />
          </Link>
          <a 
            href="https://wa.me/919988119276?text=Hello%20SuPuja%20Creations,%20I%20want%20to%20automate%20my%20Lead%20Management%20and%20Sales%20Order%20Flow." 
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
