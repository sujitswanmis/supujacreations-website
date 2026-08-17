'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileSpreadsheet, Terminal, Link2, MessageSquare, 
  BarChart3, CheckCircle2, ArrowRight, Zap, Sparkles, 
  ShieldCheck, Clock, Activity, RefreshCw, Smartphone, Layers
} from 'lucide-react';

export default function InteractiveFlowHub() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps = [
    {
      id: 'sheets',
      title: '1. Master Data Ingestion',
      system: 'Google Sheets & Web Forms',
      icon: <FileSpreadsheet size={22} color="#f5d77f" />,
      tag: 'Raw Data Ingested',
      color: '#fbbf24',
      badge: 'Single Source of Truth',
      metrics: 'Zero Manual Typing • Dynamic Dropdowns',
      log: '🟢 [00.12s] PO-2026-981 received via mobile form. Item codes, quantities & vendor rate card auto-validated.'
    },
    {
      id: 'script',
      title: '2. Apps Script Execution',
      system: 'Google Apps Script Engine',
      icon: <Terminal size={22} color="#f5d77f" />,
      tag: 'Trigger Fired',
      color: '#f5d77f',
      badge: 'Batch Processing Core',
      metrics: 'Timeout-Proof • 60-Sec Cron',
      log: '⚡ [00.45s] Apps Script batch trigger calculated planned TAT deadline (S04) and locked single-owner timestamp.'
    },
    {
      id: 'api',
      title: '3. API & Webhook Sync',
      system: 'TrackOlap / ESSL / Zenscale',
      icon: <Link2 size={22} color="#38bdf8" />,
      tag: 'REST APIs Connected',
      color: '#38bdf8',
      badge: 'Bi-Directional Sync',
      metrics: 'Live JSON Payload • Retry Queue',
      log: '🔗 [00.82s] REST API synchronized GPS attendance & production stage outward to cloud ERP with 100% data integrity.'
    },
    {
      id: 'whatsapp',
      title: '4. Instant WhatsApp & PDF',
      system: 'WhatsApp Cloud API & Drive',
      icon: <MessageSquare size={22} color="#22c55e" />,
      tag: 'Alert Dispatched',
      color: '#22c55e',
      badge: 'Customer & Staff Alerts',
      metrics: 'Automated PDF • 0-Sec Delay',
      log: '💬 [01.15s] WhatsApp dispatched custom branded PDF Quotation & balance payment link to dealer with delivery LR.'
    },
    {
      id: 'dashboard',
      title: '5. Executive MIS Control',
      system: 'Looker Studio Live KPIs',
      icon: <BarChart3 size={22} color="#e879f9" />,
      tag: 'Live Owner Visibility',
      color: '#e879f9',
      badge: 'Director Level Control',
      metrics: 'Single-Screen • Real-Time Variance',
      log: '📈 [01.40s] Executive Looker dashboard updated: 0 overdue orders, ₹4.5L balance verified, 100% SLA compliance.'
    }
  ];

  // Auto-play through stages every 3.5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3600);
    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '1100px',
      margin: '0 auto',
      perspective: '1200px'
    }}>
      
      {/* 5D Glowing Ambient Rings behind Hub */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(20, 26, 38, 0.05) 60%, transparent 80%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Main 5D Hub Container */}
      <div className="glass-card" style={{
        position: 'relative',
        zIndex: 1,
        padding: '2.5rem 1.75rem',
        background: 'linear-gradient(145deg, rgba(12, 15, 22, 0.95) 0%, rgba(18, 22, 32, 0.98) 100%)',
        border: '1px solid rgba(212, 175, 55, 0.4)',
        borderRadius: '20px',
        boxShadow: '0 30px 70px rgba(0, 0, 0, 0.9), 0 0 40px rgba(212, 175, 55, 0.18)',
        backdropFilter: 'blur(20px)'
      }}>
        
        {/* Top Hub Control Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          paddingBottom: '1.5rem',
          marginBottom: '2rem',
          borderBottom: '1px solid rgba(212, 175, 55, 0.18)'
        }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span className="live-pulse-dot" />
            <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#f5d77f', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              5D Live Automation Ecosystem Flow
            </span>
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              background: 'rgba(34, 197, 94, 0.12)',
              border: '1px solid rgba(34, 197, 94, 0.35)',
              color: '#86efac',
              padding: '0.2rem 0.6rem',
              borderRadius: '6px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}>
              <Activity size={12} />
              Real-Time Simulated Engine
            </span>

            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              style={{
                background: isAutoPlaying ? 'rgba(212, 175, 55, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: '#f5d77f',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.2rem 0.65rem',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <RefreshCw size={11} className={isAutoPlaying ? 'spin-icon' : ''} />
              {isAutoPlaying ? 'Auto-Cycle ON' : 'Paused (Click Stage)'}
            </button>
          </div>

        </div>

        {/* 5-Node Interactive Flow Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '0.85rem',
          marginBottom: '2rem'
        }}>
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={s.id}
                onClick={() => {
                  setActiveStep(idx);
                  setIsAutoPlaying(false);
                }}
                style={{
                  background: isActive 
                    ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.22) 0%, rgba(184, 134, 11, 0.12) 100%)' 
                    : 'rgba(15, 18, 26, 0.75)',
                  border: isActive 
                    ? '1.5px solid #f5d77f' 
                    : '1px solid rgba(212, 175, 55, 0.15)',
                  borderRadius: '12px',
                  padding: '1rem 0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isActive ? 'translateY(-4px) scale(1.02)' : 'none',
                  boxShadow: isActive ? '0 10px 25px rgba(212, 175, 55, 0.25)' : 'none',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #d4af37, #ffffff, #f5d77f)'
                  }} />
                )}

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: isActive ? 'rgba(212, 175, 55, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {s.icon}
                  </div>
                  <span style={{
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    color: isActive ? '#f5d77f' : '#71717a',
                    fontFamily: 'JetBrains Mono, monospace'
                  }}>
                    0{idx + 1}
                  </span>
                </div>

                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: isActive ? '#ffffff' : '#e4e4e7', marginBottom: '0.2rem' }}>
                  {s.title}
                </div>

                <div style={{ fontSize: '0.72rem', color: isActive ? '#f5d77f' : '#a1a1aa' }}>
                  {s.badge}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Active Node Deep-Dive Panel */}
        <div style={{
          background: 'rgba(8, 10, 15, 0.88)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '14px',
          padding: '1.75rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem',
          alignItems: 'center'
        }}>
          
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.74rem', color: '#86efac', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              <Zap size={14} color="#22c55e" />
              Active Pipeline Stage
            </div>
            
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
              {steps[activeStep].system}
            </h3>

            <p style={{ fontSize: '0.88rem', color: '#e4e4e7', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
              {steps[activeStep].metrics}
            </p>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.72rem', color: '#f5d77f', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '0.25rem 0.65rem', borderRadius: '6px', fontWeight: 700 }}>
                🛡️ Point-of-Entry Error Lock
              </span>
              <span style={{ fontSize: '0.72rem', color: '#60a5fa', background: 'rgba(96, 165, 250, 0.12)', border: '1px solid rgba(96, 165, 250, 0.3)', padding: '0.25rem 0.65rem', borderRadius: '6px', fontWeight: 700 }}>
                ⚡ 0.2s Execution Velocity
              </span>
            </div>
          </div>

          {/* Terminal Console Live Stream Simulation */}
          <div style={{
            background: '#040609',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '10px',
            padding: '1.25rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem',
            color: '#a1a1aa',
            lineHeight: 1.6,
            boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.8)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ color: '#f5d77f', fontWeight: 700, fontSize: '0.72rem' }}>AUTOMATION_ENGINE_STREAM.LOG</span>
              <span style={{ color: '#22c55e', fontSize: '0.7rem' }}>● LIVE</span>
            </div>
            <div style={{ color: '#e4e4e7' }}>
              {steps[activeStep].log}
            </div>
            <div style={{ marginTop: '0.75rem', fontSize: '0.72rem', color: '#71717a' }}>
              ↳ Status: <span style={{ color: '#86efac', fontWeight: 700 }}>Verified & Synced</span> • Latency: <span style={{ color: '#f5d77f' }}>18ms</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
