import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';
import { sendLeadEmailNotification } from '../../../lib/mailer';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, company, service, services, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone / WhatsApp number are required.' },
        { status: 400 }
      );
    }

    const serviceDisplay = Array.isArray(services) && services.length > 0 
      ? services.join(', ') 
      : (service || 'Google Sheets & MIS Automation');

    const inquiryRecord = {
      name: name.trim(),
      phone: phone.trim(),
      email: (email || '').trim(),
      company: (company || '').trim(),
      service: serviceDisplay,
      message: (message || '').trim(),
      created_at: new Date().toISOString(),
      status: 'new'
    };

    console.log('📝 Processing Website Inquiry for supujacreationleads:', inquiryRecord);

    // 1. Save into dedicated 'supujacreationleads' Supabase table
    let dbSuccess = false;
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('supujacreationleads')
          .insert([inquiryRecord])
          .select();

        if (error) {
          console.error('❌ Supabase supujacreationleads Insertion Error:', error.message);
        } else {
          console.log('✅ Inquiry successfully saved into supujacreationleads table!', data);
          dbSuccess = true;
        }
      } catch (dbErr) {
        console.error('❌ Supabase Exception:', dbErr);
      }
    } else {
      console.warn('⚠️ Supabase client not initialized. Check NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.');
    }

    // 2. Await Email Notification to sales@supujacreations.com & supujacreations@gmail.com
    try {
      const mailResult = await sendLeadEmailNotification(inquiryRecord);
      console.log('📧 Mail dispatch result:', mailResult);
    } catch (mailErr) {
      console.error('❌ Mail dispatch failed:', mailErr);
    }

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
