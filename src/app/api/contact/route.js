import { NextResponse } from 'next/server';

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

    const inquiry = {
      name: name.trim(),
      phone: phone.trim(),
      email: (email || '').trim(),
      company: (company || 'Direct Client').trim(),
      service: service || 'Google Sheets & MIS Automation',
      message: message || '',
      receivedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    console.log('✅ New Website Lead / Project Inquiry received:', inquiry);

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
