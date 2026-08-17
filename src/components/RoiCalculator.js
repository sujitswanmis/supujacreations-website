'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, Clock, DollarSign, TrendingUp, ArrowRight, Zap, Sparkles } from 'lucide-react';

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(12);
  const [dailyHours, setDailyHours] = useState(2.5);
  const [avgSalary, setAvgSalary] = useState(25000);

  // 25 working days per month, 8 hours per workday
  const workingDays = 25;
  const totalMonthlyHoursWasted = teamSize * dailyHours * workingDays;
  const hourlyCost = avgSalary / (workingDays * 8);
  const totalMonthlyCost = totalMonthlyHoursWasted * hourlyCost;

  // With SuPuja Automation, ~75% of repetitive data entry, follow-ups & reporting are automated
  const efficiencyGain = 0.75;
  const monthlyHoursSaved = Math.round(totalMonthlyHoursWasted * efficiencyGain);
  const monthlyCostSaved = Math.round(totalMonthlyCost * efficiencyGain);
  const annualCostSaved = monthlyCostSaved * 12;

  return (
    <div className="glass-card" style={{
      padding: '3.5rem 2rem',
      background: 'linear-gradient(135deg, rgba(14, 18, 26, 0.95) 0%, rgba(20, 26, 38, 0.98) 100%)',
      border: '1px solid rgba(212, 175, 55, 0.35)',
      borderRadius: '20px',
      boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(212, 175, 55, 0.12)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Subtle background glow */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
        <div className="page-badge">
          <Calculator size={14} color="#f5d77f" />
          <span>Interactive Business Automation ROI Simulator</span>
        </div>
        <h2 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 2.6rem)', fontWeight: 800, color: '#ffffff', margin: '0 0 0.85rem 0' }}>
          Calculate Your <span className="gold-gradient-text">Time & Cost Savings</span>
        </h2>
        <p style={{ color: '#a1a1aa', fontSize: '0.98rem', lineHeight: 1.65, margin: 0 }}>
          Adjust the sliders below to see how many manual hours and operational salary leakages SuPuja custom workflows will eliminate for your company.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
        alignItems: 'center'
      }}>
        
        {/* Sliders Input Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Slider 1: Team Size */}
          <div style={{ background: 'rgba(10, 12, 18, 0.65)', padding: '1.4rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.18)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <label style={{ fontSize: '0.92rem', color: '#e4e4e7', fontWeight: 700 }}>
                Operations & Office Team Size:
              </label>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f5d77f' }}>
                {teamSize} Employees
              </span>
            </div>
            <input 
              type="range" 
              min="3" 
              max="100" 
              step="1"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#d4af37',
                cursor: 'pointer'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#71717a', marginTop: '0.35rem' }}>
              <span>3 staff</span>
              <span>50 staff</span>
              <span>100 staff</span>
            </div>
          </div>

          {/* Slider 2: Daily Manual Hours */}
          <div style={{ background: 'rgba(10, 12, 18, 0.65)', padding: '1.4rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.18)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <label style={{ fontSize: '0.92rem', color: '#e4e4e7', fontWeight: 700 }}>
                Manual Hours / Day per Employee:
              </label>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f5d77f' }}>
                {dailyHours} Hrs / Day
              </span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="6" 
              step="0.5"
              value={dailyHours}
              onChange={(e) => setDailyHours(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#d4af37',
                cursor: 'pointer'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#71717a', marginTop: '0.35rem' }}>
              <span>1 hr (Minor Excel)</span>
              <span>3.5 hrs (Heavy follow-ups)</span>
              <span>6 hrs (Manual chaos)</span>
            </div>
          </div>

          {/* Slider 3: Avg Monthly Salary */}
          <div style={{ background: 'rgba(10, 12, 18, 0.65)', padding: '1.4rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.18)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <label style={{ fontSize: '0.92rem', color: '#e4e4e7', fontWeight: 700 }}>
                Average Monthly Salary / Staff:
              </label>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f5d77f' }}>
                ₹{avgSalary.toLocaleString('en-IN')}
              </span>
            </div>
            <input 
              type="range" 
              min="15000" 
              max="60000" 
              step="2500"
              value={avgSalary}
              onChange={(e) => setAvgSalary(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#d4af37',
                cursor: 'pointer'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#71717a', marginTop: '0.35rem' }}>
              <span>₹15,000</span>
              <span>₹35,000</span>
              <span>₹60,000</span>
            </div>
          </div>

        </div>

        {/* Dynamic Real-Time Output Display */}
        <div style={{
          background: 'rgba(8, 10, 15, 0.85)',
          border: '1px solid rgba(212, 175, 55, 0.45)',
          borderRadius: '16px',
          padding: '2.25rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7)'
        }}>
          
          <div style={{ fontSize: '0.8rem', color: '#86efac', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <TrendingUp size={16} color="#22c55e" />
            Projected Automation Gains
          </div>

          <div style={{ fontSize: '0.9rem', color: '#a1a1aa', marginBottom: '1.5rem' }}>
            Based on ~75% reduction in repetitive Excel entries, follow-ups, and manual reporting:
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
            
            {/* Metric 1: Hours Saved */}
            <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.15)', paddingBottom: '1rem' }}>
              <div style={{ fontSize: '0.82rem', color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={15} color="#f5d77f" />
                Monthly Productive Hours Reclaimed
              </div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.15, marginTop: '0.2rem' }}>
                {monthlyHoursSaved.toLocaleString('en-IN')}+ <span style={{ fontSize: '1rem', color: '#f5d77f', fontWeight: 700 }}>Hours / Mo</span>
              </div>
            </div>

            {/* Metric 2: Monthly Money Saved */}
            <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.15)', paddingBottom: '1rem' }}>
              <div style={{ fontSize: '0.82rem', color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <DollarSign size={15} color="#22c55e" />
                Monthly Operational Salary Saved
              </div>
              <div className="gold-gradient-text" style={{ fontSize: '2.2rem', fontWeight: 900, lineHeight: 1.15, marginTop: '0.2rem' }}>
                ₹{monthlyCostSaved.toLocaleString('en-IN')}+ <span style={{ fontSize: '1rem', color: '#e4e4e7', fontWeight: 700 }}>/ Month</span>
              </div>
            </div>

            {/* Metric 3: Annualized Impact */}
            <div>
              <div style={{ fontSize: '0.82rem', color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={15} color="#60a5fa" />
                Annual Business Value Unlocked
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#60a5fa', lineHeight: 1.15, marginTop: '0.2rem' }}>
                ₹{annualCostSaved.toLocaleString('en-IN')}+ <span style={{ fontSize: '0.9rem', color: '#93c5fd', fontWeight: 600 }}>/ Year</span>
              </div>
            </div>

          </div>

          <Link 
            href="/contact" 
            className="btn-primary" 
            style={{ width: '100%', justifyContent: 'center', padding: '0.85rem 1.25rem', fontSize: '0.95rem' }}
          >
            <Zap size={18} />
            Claim Your Business Savings Now
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>

    </div>
  );
}
