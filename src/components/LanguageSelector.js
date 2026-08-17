'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, ChevronUp, Check } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', label: 'EN' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳', label: 'हिन्दी' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳', label: 'ਪੰਜਾਬੀ' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳', label: 'ગુજરાતી' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳', label: 'मराठी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳', label: 'বাংলা' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', label: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', label: 'తెలుగు' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', label: 'ES' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇦🇪', label: 'AR' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', label: 'DE' },
];

export default function LanguageSelector({ isMobile = false, direction = 'auto' }) {
  const [selectedLang, setSelectedLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const [opensUp, setOpensUp] = useState(direction === 'up');
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Check existing Google Translate cookie
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    };

    const currentGoogleTrans = getCookie('googtrans');
    if (currentGoogleTrans) {
      const code = currentGoogleTrans.split('/')[2];
      if (code) setSelectedLang(code);
    } else {
      const saved = localStorage.getItem('supuja_selected_lang');
      if (saved && saved !== 'hinglish') setSelectedLang(saved);
    }

    // Initialize Google Translate Script safely
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'hi,pa,gu,mr,bn,ta,te,es,ar,de,en',
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.type = 'text/javascript';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    if (!isOpen && dropdownRef.current) {
      if (direction === 'up') {
        setOpensUp(true);
      } else if (direction === 'down') {
        setOpensUp(false);
      } else {
        const rect = dropdownRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        if (spaceBelow < 320 || rect.top > window.innerHeight / 2) {
          setOpensUp(true);
        } else {
          setOpensUp(false);
        }
      }
    }
    setIsOpen(!isOpen);
  };

  const changeLanguage = (langCode) => {
    setSelectedLang(langCode);
    localStorage.setItem('supuja_selected_lang', langCode);
    setIsOpen(false);

    if (langCode === 'en') {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
      document.cookie = 'googtrans=/en/en; path=/;';
      window.location.reload();
      return;
    }

    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;

    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    } else {
      window.location.reload();
    }
  };

  const currentLangObj = LANGUAGES.find((l) => l.code === selectedLang) || LANGUAGES[0];

  return (
    <div 
      ref={dropdownRef} 
      className="notranslate" 
      translate="no"
      style={{ 
        position: 'relative', 
        width: isMobile ? '100%' : 'auto',
        flexShrink: 0,
        display: 'inline-block'
      }}
    >
      {/* Hidden Google Translate element */}
      <div id="google_translate_element" style={{ display: 'none' }} />

      {/* Sleek Trigger Button */}
      <button
        type="button"
        onClick={handleToggle}
        className="notranslate"
        translate="no"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: 'rgba(20, 24, 34, 0.85)',
          color: '#f5d77f',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          padding: isMobile ? '0.75rem 1rem' : '0.48rem 0.75rem',
          borderRadius: '8px',
          fontSize: '0.84rem',
          fontWeight: 700,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          width: isMobile ? '100%' : 'auto',
          justifyContent: isMobile ? 'space-between' : 'center',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
        }}
        aria-label="Select Language"
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', whiteSpace: 'nowrap' }}>
          <Globe size={15} color="#f5d77f" />
          <span>{currentLangObj.flag} {isMobile ? currentLangObj.nativeName : currentLangObj.label}</span>
        </span>
        {opensUp ? (
          <ChevronUp size={13} color="#f5d77f" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
        ) : (
          <ChevronDown size={13} color="#f5d77f" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="notranslate"
          translate="no"
          style={{
            position: 'absolute',
            bottom: opensUp ? 'calc(100% + 8px)' : 'auto',
            top: opensUp ? 'auto' : 'calc(100% + 8px)',
            right: 0,
            left: isMobile ? 0 : 'auto',
            background: '#0a0d14',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            borderRadius: '12px',
            padding: '0.5rem',
            width: isMobile ? '100%' : '210px',
            maxHeight: '340px',
            overflowY: 'auto',
            zIndex: 99999,
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.95), 0 0 20px rgba(212, 175, 55, 0.15)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div style={{ padding: '0.35rem 0.5rem', fontSize: '0.72rem', color: '#f5d77f', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em', borderBottom: '1px solid rgba(212, 175, 55, 0.18)', marginBottom: '0.35rem' }}>
            🌐 Select Language / भाषा
          </div>

          {LANGUAGES.map((lang) => {
            const isSelected = selectedLang === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                className="notranslate"
                translate="no"
                onClick={() => changeLanguage(lang.code)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: isSelected ? 'rgba(212, 175, 55, 0.18)' : 'transparent',
                  color: isSelected ? '#f5d77f' : '#e4e4e7',
                  border: isSelected ? '1px solid rgba(212, 175, 55, 0.35)' : '1px solid transparent',
                  padding: '0.55rem 0.7rem',
                  borderRadius: '6px',
                  fontSize: '0.84rem',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>{lang.flag}</span>
                  <span>{lang.nativeName}</span>
                </span>
                {isSelected && <Check size={14} color="#f5d77f" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
