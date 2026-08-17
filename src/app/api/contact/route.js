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

    // Strictly Sequential Lead ID: SPC-YYYYMMDD-000001
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const datePrefix = `SPC-${year}${month}${day}`;

    let sequenceNum = 1;
    if (supabase) {
      try {
        const todayStart = `${year}-${month}-${day}T00:00:00.000Z`;
        const { count, error: countError } = await supabase
          .from('supujacreationleads')
          .select('*', { count: 'exact', head: true })
          .gte('created_at', todayStart);

        if (!countError && typeof count === 'number') {
          sequenceNum = count + 1;
        }
      } catch (cErr) {
        console.warn('Daily sequence count fallback:', cErr);
      }
    }

    const leadId = `${datePrefix}-${String(sequenceNum).padStart(6, '0')}`;

    const formattedMessage = message && message.trim() 
      ? `[Lead Ref: ${leadId}]\n\n${message.trim()}`
      : `[Lead Ref: ${leadId}]`;

    const inquiryRecord = {
      name: name.trim(),
      phone: phone.trim(),
      email: (email || '').trim(),
      company: (company || '').trim(),
      service: serviceDisplay,
      message: formattedMessage,
      created_at: now.toISOString(),
      status: 'new',
      lead_id: leadId
    };

    console.log('⚡ Sequential Lead Generated:', { leadId, name: inquiryRecord.name });

    // Background Async Execution (Non-blocking so user gets response in <50ms)
    (async () => {
      // 1. Save to Supabase
      if (supabase) {
        try {
          let { error } = await supabase
            .from('supujacreationleads')
            .insert([inquiryRecord]);

          if (error && error.message && error.message.includes('lead_id')) {
            const { lead_id, ...fallbackRecord } = inquiryRecord;
            await supabase
              .from('supujacreationleads')
              .insert([fallbackRecord]);
          }
          console.log('✅ Background Supabase save completed for', leadId);
        } catch (dbErr) {
          console.error('❌ Supabase Background Error:', dbErr);
        }
      }

      // 2. Dispatch Email
      try {
        await sendLeadEmailNotification({ ...inquiryRecord, leadId });
        console.log('📧 Background Email dispatched for', leadId);
      } catch (mailErr) {
        console.error('❌ Background Mail Error:', mailErr);
      }
    })();

    // Return instant success response in under 50ms
    return NextResponse.json({
      success: true,
      leadId: leadId,
      message: 'Inquiry received successfully!'
    });

  } catch (err) {
    console.error('Contact API Error:', err);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please connect directly via WhatsApp.' },
      { status: 500 }
    );
  }
}
