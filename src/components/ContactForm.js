'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function ContactForm({ defaultService = 'Google Sheets & MIS Automation' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: defaultService,
    message: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormError('');
    setFormSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFormSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          service: defaultService,
          message: ''
        });
      } else {
        setFormError(data.error || 'Failed to submit inquiry. Please try again or reach out on WhatsApp.');
      }
    } catch (err) {
      setFormError('An unexpected network error occurred. Please connect directly via WhatsApp.');
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="glass-card" style={{ padding: '2.5rem 2rem', background: 'rgba(16, 18, 25, 0.9)' }}>
      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
        Send a Project Inquiry
      </h3>
      <p style={{ fontSize: '0.88rem', color: '#a1a1aa', margin: '0 0 1.75rem 0' }}>
        Fill in your requirement details below. Your inquiry is recorded directly in our system.
      </p>

      {formSuccess && (
        <div style={{ background: 'rgba(212, 175, 55, 0.15)', border: '1px solid #d4af37', color: '#fef3c7', padding: '1rem 1.25rem', borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <CheckCircle2 size={22} color="#f5d77f" style={{ flexShrink: 0 }} />
          <div>
            <strong>Inquiry Received!</strong> The SuPuja Creations team will review your requirements and connect with you shortly.
          </div>
        </div>
      )}

      {formError && (
        <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', color: '#fca5a5', padding: '1rem 1.25rem', borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <AlertCircle size={22} color="#ef4444" style={{ flexShrink: 0 }} />
          <div>{formError}</div>
        </div>
      )}

      <form onSubmit={handleFormSubmit}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#f5d77f', marginBottom: '0.4rem' }}>
              Your Name <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input 
              type="text" 
              required 
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="form-input" 
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#f5d77f', marginBottom: '0.4rem' }}>
              Phone / WhatsApp <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input 
              type="tel" 
              required 
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="form-input" 
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#f5d77f', marginBottom: '0.4rem' }}>
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="e.g. rahul@company.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="form-input" 
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#f5d77f', marginBottom: '0.4rem' }}>
              Company / Business Name
            </label>
            <input 
              type="text" 
              placeholder="e.g. Acme Manufacturing Ltd"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="form-input" 
            />
          </div>
        </div>

        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#f5d77f', marginBottom: '0.4rem' }}>
            Service or Solution Area
          </label>
          <select 
            value={formData.service}
            onChange={(e) => setFormData({...formData, service: e.target.value})}
            className="form-input"
            style={{ cursor: 'pointer' }}
          >
            <option value="Meta Ads (Facebook & Instagram Marketing)">Meta Ads (Facebook & Instagram Marketing)</option>
            <option value="WhatsApp Marketing & Business API Automation">WhatsApp Marketing & Business API Automation</option>
            <option value="Google Sheets & MIS Automation">Google Sheets & MIS Automation</option>
            <option value="Google Apps Script Development">Google Apps Script Development</option>
            <option value="Custom Web Forms & Apps">Custom Web Forms & Apps</option>
            <option value="API & Webhook Integration">API & Webhook Integration</option>
            <option value="Business Workflow & FMS Systems">Business Workflow & FMS Systems</option>
            <option value="Manufacturing Process Digitization">Manufacturing Process Digitization</option>
            <option value="Smart Attendance & GPS Tracking">Smart Attendance & GPS Tracking</option>
            <option value="Executive Dashboards & KPI Reporting">Executive Dashboards & KPI Reporting</option>
          </select>
        </div>

        <div style={{ marginBottom: '1.75rem' }}>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#f5d77f', marginBottom: '0.4rem' }}>
            Project Requirements & Current Pain Points
          </label>
          <textarea 
            rows={4}
            placeholder="Describe your current manual steps, spreadsheets in use, bottleneck challenges, or what you want to automate..."
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="form-input"
            style={{ resize: 'vertical' }}
          />
        </div>

        <button 
          type="submit" 
          disabled={formSubmitting}
          className="btn-primary" 
          style={{ width: '100%', justifyContent: 'center', opacity: formSubmitting ? 0.7 : 1, cursor: formSubmitting ? 'not-allowed' : 'pointer' }}
        >
          <Send size={18} />
          {formSubmitting ? 'Submitting Inquiry...' : 'Submit Project Inquiry'}
        </button>

      </form>
    </div>
  );
}
