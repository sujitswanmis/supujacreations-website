import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';
import { sendLeadEmailNotification } from '../../../lib/mailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, company, service, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone / WhatsApp number are required.' },
        { status: 400 }
      );
    }

    const inquiryRecord = {
      name: name.trim(),
      phone: phone.trim(),
      email: (email || '').trim(),
      company: (company || '').trim(),
      service: service || 'Google Sheets & MIS Automation',
      message: (message || '').trim(),
      created_at: new Date().toISOString(),
      status: 'new'
    };

    console.log('📝 Received Website Inquiry for supujacreationleads:', inquiryRecord);

    // 1. Save into dedicated 'supujacreationleads' Supabase table
    if (supabase) {
      const { error } = await supabase
        .from('supujacreationleads')
        .insert([inquiryRecord]);

      if (error) {
        console.error('❌ Supabase supujacreationleads Insertion Error:', error.message);
      } else {
        console.log('✅ Inquiry successfully saved into supujacreationleads table!');
      }
    } else {
      console.warn('⚠️ Supabase client not initialized.');
    }

    // 2. Trigger Email Notification to sales@supujacreations.com & supujacreations@gmail.com
    sendLeadEmailNotification(inquiryRecord).catch((mailErr) => {
      console.error('Non-blocking Email Error:', mailErr);
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your inquiry has been received. The SuPuja Creations team will connect with you shortly.'
    });

  } catch (err) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please connect directly via WhatsApp.' },
      { status: 500 }
    );
  }
}
