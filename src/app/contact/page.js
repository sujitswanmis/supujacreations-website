'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Mail, MessageSquare, MapPin, Building2, 
  ExternalLink, Clock, ShieldCheck, CheckCircle2, Send, Sparkles
} from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '../../components/SocialIcons';
import ContactForm from '../../components/ContactForm';

function ContactContent() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get('service') || 'Google Sheets & MIS Automation';

  const faqs = [
    {
      q: 'Do we need to replace our existing software (like Tally, ERP, or TrackOlap)?',
      a: 'Not at all. Our systems are designed to integrate seamlessly alongside your current software via REST APIs, webhooks, or scheduled spreadsheet bridges.'
    },
    {
      q: 'How long does a typical FMS or automation project take to implement?',
      a: 'Most standard automations (such as attendance sync, web forms, or report automation) take 3 to 7 days. Large-scale 85-step manufacturing FMS systems typically take 2 to 4 weeks including staff training.'
    },
    {
      q: 'Do you provide on-site consulting or remote deployment?',
      a: 'Both. Remote consulting is available globally with fast turnarounds. On-site plant mapping (Gemba walks) and training sessions are available across India.'
    },
    {
      q: 'Will our internal team be able to operate the system without coding knowledge?',
      a: 'Yes, 100%. Every system is engineered with intuitive user-friendly web forms, dropdowns, and automated error protections. We provide complete video tutorials and Standard Operating Procedure (SOP) documentation.'
    }
  ];

  return (
    <div style={{ position: 'relative', padding: '4.5rem 1.5rem 6.5rem 1.5rem', maxWidth: '1240px', margin: '0 auto' }}>
      
      {/* AMBIENT GOLD GLOWS */}
      <div className="ambient-glow" style={{ top: '10%', left: '8%', width: '450px', height: '450px', background: 'rgba(212, 175, 55, 0.12)' }} />
      <div className="ambient-glow" style={{ top: '45%', right: '5%', width: '450px', height: '450px', background: 'rgba(245, 215, 127, 0.08)' }} />

      {/* HEADER SECTION */}
      <div style={{ maxWidth: '800px', marginBottom: '4rem' }}>
        <div className="page-badge">
          <Sparkles size={14} color="#f5d77f" />
          <span>Get in Touch</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, margin: '0 0 1.25rem 0' }}>
          Let's Digitize & Automate <span className="gold-gradient-text">Your Business</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#e4e4e7', lineHeight: 1.7, margin: 0 }}>
          Have a manual process, spreadsheet mess, or workflow bottleneck? Fill out the inquiry below or connect directly on WhatsApp to schedule a consultation.
        </p>
      </div>

      {/* MAIN CONTENT: DETAILS + FORM */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'start', marginBottom: '5.5rem' }}>
        
        {/* Left Column: Direct Contacts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="glass-card" style={{ padding: '2.5rem 2rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: '0 0 1.5rem 0' }}>
              Direct Contact Information
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.14)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f5d77f', flexShrink: 0 }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#a1a1aa', textTransform: 'uppercase', fontWeight: 600 }}>Official Email</div>
                  <a href="mailto:sales@supujacreations.com" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}>
                    sales@supujacreations.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.14)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f5d77f', flexShrink: 0 }}>
                  <MessageSquare size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#a1a1aa', textTransform: 'uppercase', fontWeight: 600 }}>Phone / WhatsApp</div>
                  <a href="tel:+919988119276" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}>
                    +91 99881 19276
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.14)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f5d77f', flexShrink: 0 }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#a1a1aa', textTransform: 'uppercase', fontWeight: 600 }}>Operating Location</div>
                  <div style={{ color: '#ffffff', fontWeight: 500, fontSize: '0.96rem' }}>India (Remote & On-Site Projects)</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.14)', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f5d77f', flexShrink: 0 }}>
                  <Clock size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#a1a1aa', textTransform: 'uppercase', fontWeight: 600 }}>Response Commitment</div>
                  <div style={{ color: '#ffffff', fontWeight: 500, fontSize: '0.96rem' }}>Within 4 business hours</div>
                </div>
              </div>

            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a 
                href="https://wa.me/919988119276?text=Hello%20SuPuja%20Creations,%20I%20am%20interested%20in%20your%20MIS%20and%20Business%20Automation%20services." 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageSquare size={18} />
                Chat on WhatsApp (+91 99881 19276)
              </a>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.25rem' }}>
                <a 
                  href="https://www.facebook.com/supujacreations" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ justifyContent: 'center', fontSize: '0.86rem', padding: '0.65rem 0.75rem' }}
                >
                  <FacebookIcon size={16} color="#f5d77f" />
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com/supujacreations/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ justifyContent: 'center', fontSize: '0.86rem', padding: '0.65rem 0.75rem' }}
                >
                  <InstagramIcon size={16} color="#f5d77f" />
                  Instagram
                </a>
              </div>
            </div>

          </div>

          {/* CRM Portal Access */}
          <div className="glass-card" style={{ padding: '2rem', background: 'rgba(20, 24, 34, 0.6)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
              Existing Client or Employee?
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#a1a1aa', margin: '0 0 1.25rem 0' }}>
              Access the live CRM, task delegation portal, and operations workplace dashboard.
            </p>
            <a 
              href="https://app.supujacreations.com" 
              target="_blank" 
              rel="noreferrer"
              className="btn-secondary" 
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}
            >
              <Building2 size={16} color="#f5d77f" />
              Open CRM Workplace
              <ExternalLink size={14} />
            </a>
          </div>

        </div>

        {/* Right Column: Inquiry Form */}
        <ContactForm defaultService={requestedService} />

      </div>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <div style={{ marginTop: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <div className="page-badge">
            <Sparkles size={14} color="#f5d77f" />
            <span>Common Questions</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2.2rem 2rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.75rem 0' }}>
                {faq.q}
              </h3>
              <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center', color: '#f5d77f' }}>Loading contact page...</div>}>
      <ContactContent />
    </Suspense>
  );
}
