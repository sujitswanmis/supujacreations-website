'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle2, AlertCircle, X, ChevronDown, Check, Plus } from 'lucide-react';

const AVAILABLE_SERVICES = [
  'CRM & Lead Management System',
  'Sales & Order (S-Order) Management',
  'WhatsApp Marketing & Business API Automation',
  'Google Sheets & MIS Automation',
  'Meta Ads (Facebook & Instagram Marketing)',
  'Production Management System (FMS & Shop Floor)',
  'Vendor & Purchase Management System',
  'Client & Account Lifecycle Management',
  'Customer Service & Ticket Management',
  'Feedback & NPS Rating Management',
  'Smart Attendance & GPS Tracking',
  'Executive Dashboards & KPI Reporting',
  'Google Apps Script Development',
  'Custom Web Forms & Apps',
  'API & Webhook Integration'
];

export default function ContactForm({ defaultService = 'Google Sheets & MIS Automation' }) {
  // Support single string or comma-separated services or default
  const [selectedServices, setSelectedServices] = useState(() => {
    if (!defaultService) return ['Google Sheets & MIS Automation'];
    const matched = AVAILABLE_SERVICES.find(
      s => s.toLowerCase() === defaultService.toLowerCase() || s.toLowerCase().includes(defaultService.toLowerCase())
    );
    return matched ? [matched] : [defaultService];
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const removeService = (serviceToRemove, e) => {
    if (e) e.stopPropagation();
    setSelectedServices(selectedServices.filter(s => s !== serviceToRemove));
  };

  const clearAllServices = (e) => {
    if (e) e.stopPropagation();
    setSelectedServices([]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      setFormError('Please select at least one service or solution area.');
      return;
    }

    setFormSubmitting(true);
    setFormError('');
    setFormSuccess(false);

    const payload = {
      ...formData,
      service: selectedServices.join(', '),
      services: selectedServices
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFormSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
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
    <div className="glass-card" style={{ padding: '2.5rem 2rem' }}>
      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
        Send a Project Inquiry
      </h3>
      <p style={{ fontSize: '0.88rem', color: '#a1a1aa', margin: '0 0 1.75rem 0' }}>
        Select your required services and enter your project details. We will respond promptly.
      </p>

      {formSuccess && (
        <div style={{ background: 'rgba(212, 175, 55, 0.15)', border: '1px solid #d4af37', color: '#fef3c7', padding: '1rem 1.25rem', borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <CheckCircle2 size={22} color="#f5d77f" style={{ flexShrink: 0 }} />
          <div>
            <strong>Inquiry Received!</strong> The SuPuja Creations team will review your selected services and connect with you shortly.
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
        
        {/* Name & Phone */}
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

        {/* Email & Company */}
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

        {/* MULTI-SELECT SERVICES & SOLUTION AREA */}
        <div style={{ marginBottom: '1.5rem' }} ref={dropdownRef}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
            <label style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f5d77f' }}>
              Services & Solution Areas Required <span style={{ color: '#ef4444' }}>*</span>
              <span style={{ fontSize: '0.74rem', color: '#a1a1aa', fontWeight: 400, marginLeft: '0.5rem' }}>
                (Select multiple)
              </span>
            </label>
            {selectedServices.length > 0 && (
              <button 
                type="button" 
                onClick={clearAllServices}
                style={{ background: 'none', border: 'none', color: '#fca5a5', fontSize: '0.75rem', cursor: 'pointer', padding: 0 }}
              >
                Clear All
              </button>
            )}
          </div>

          {/* Selected Badges / Chips Display Area */}
          <div style={{ 
            minHeight: '48px',
            padding: '0.5rem',
            background: '#0d111a',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            borderRadius: '8px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.45rem',
            alignItems: 'center',
            marginBottom: '0.6rem'
          }}>
            {selectedServices.length === 0 ? (
              <span style={{ fontSize: '0.82rem', color: '#71717a', fontStyle: 'italic', padding: '0.2rem 0.4rem' }}>
                No service selected. Click below to add one or more services...
              </span>
            ) : (
              selectedServices.map((service, sIdx) => (
                <span 
                  key={sIdx}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: 'rgba(212, 175, 55, 0.15)',
                    color: '#fef3c7',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 600
                  }}
                >
                  {service}
                  <button 
                    type="button"
                    onClick={(e) => removeService(service, e)}
                    title={`Remove ${service}`}
                    style={{
                      background: 'rgba(239, 68, 68, 0.25)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '16px',
                      height: '16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#ffffff',
                      padding: 0,
                      marginLeft: '0.2rem'
                    }}
                  >
                    <X size={11} />
                  </button>
                </span>
              ))
            )}
          </div>

          {/* Multi-Select Dropdown Toggle Button */}
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="form-input"
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '0.65rem 0.9rem',
                fontSize: '0.86rem',
                color: '#e4e4e7'
              }}
            >
              <span>
                {selectedServices.length > 0 
                  ? `Selected (${selectedServices.length}) — Click to add/remove more` 
                  : 'Click to select from all 15 services...'}
              </span>
              <ChevronDown 
                size={16} 
                style={{ 
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'none', 
                  transition: 'transform 0.2s',
                  color: '#f5d77f'
                }} 
              />
            </button>

            {/* Dropdown Options List */}
            {isDropdownOpen && (
              <div 
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  marginTop: '4px',
                  background: '#0a0d14',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  borderRadius: '8px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.9)',
                  maxHeight: '280px',
                  overflowY: 'auto',
                  zIndex: 50,
                  padding: '0.35rem'
                }}
              >
                {AVAILABLE_SERVICES.map((service, idx) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleService(service)}
                      style={{
                        padding: '0.6rem 0.8rem',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        background: isSelected ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                        color: isSelected ? '#f5d77f' : '#d4d4d8',
                        fontSize: '0.84rem',
                        fontWeight: isSelected ? 700 : 400,
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <span>{service}</span>
                      <div style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '4px',
                        border: isSelected ? '1px solid #d4af37' : '1px solid rgba(255, 255, 255, 0.2)',
                        background: isSelected ? '#d4af37' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {isSelected && <Check size={13} color="#000000" strokeWidth={3} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick-Pick Popular Pills Bar */}
          <div style={{ marginTop: '0.65rem' }}>
            <div style={{ fontSize: '0.72rem', color: '#a1a1aa', marginBottom: '0.35rem', fontWeight: 600 }}>
              Quick Select Popular Systems:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {[
                'CRM & Lead Management System',
                'Sales & Order (S-Order) Management',
                'WhatsApp Marketing & Business API Automation',
                'Production Management System (FMS & Shop Floor)',
                'Google Sheets & MIS Automation',
                'Meta Ads (Facebook & Instagram Marketing)'
              ].map((pop, pIdx) => {
                const isSelected = selectedServices.includes(pop);
                return (
                  <button
                    key={pIdx}
                    type="button"
                    onClick={() => toggleService(pop)}
                    style={{
                      fontSize: '0.72rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      border: isSelected ? '1px solid #d4af37' : '1px solid rgba(255, 255, 255, 0.1)',
                      background: isSelected ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                      color: isSelected ? '#f5d77f' : '#a1a1aa',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    {isSelected ? <Check size={11} /> : <Plus size={11} />}
                    {pop.split('(')[0].trim()}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Message / Requirements */}
        <div style={{ marginBottom: '1.75rem' }}>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#f5d77f', marginBottom: '0.4rem' }}>
            Project Requirements & Current Challenges
          </label>
          <textarea 
            rows={4}
            placeholder="Describe your current manual bottlenecks, spreadsheets in use, or what you want to automate..."
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
