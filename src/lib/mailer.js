import nodemailer from 'nodemailer';

// Admin notification recipients
const ADMIN_RECIPIENTS = 'sales@supujacreations.com, supujacreations@gmail.com';

export async function sendLeadEmailNotification(lead) {
  const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465;

  if (!smtpUser || !smtpPass) {
    console.warn('⚠️ SMTP credentials not configured (SMTP_USER/SMTP_PASS). Email notification skipped.');
    return { skipped: true, reason: 'Missing SMTP credentials' };
  }

  try {
    const cleanPass = (smtpPass || '').replace(/[\s\u00a0]/g, '');

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: cleanPass
      }
    });

    // 1. HTML Email for Admin (SuPuja Team)
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; background-color: #06070a; color: #f8fafc; padding: 25px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #d4af37;">
        
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 25px; border-bottom: 1px solid rgba(212, 175, 55, 0.3); padding-bottom: 15px;">
          <h2 style="color: #f5d77f; margin: 0 0 5px 0; font-size: 22px;">⚡ New Website Lead Inquiry Received</h2>
          <p style="color: #a1a1aa; margin: 0; font-size: 13px;">SuPuja Creations Website (supujacreations.com)</p>
        </div>

        <!-- Lead Details Table -->
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 10px 0; color: #f5d77f; font-weight: bold; width: 140px; border-bottom: 1px solid #1e2230;">Client Name:</td>
            <td style="padding: 10px 0; color: #ffffff; font-size: 15px; font-weight: 600; border-bottom: 1px solid #1e2230;">${lead.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #f5d77f; font-weight: bold; border-bottom: 1px solid #1e2230;">Phone / WhatsApp:</td>
            <td style="padding: 10px 0; color: #4ade80; font-weight: bold; font-size: 15px; border-bottom: 1px solid #1e2230;">
              <a href="https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}" style="color: #4ade80; text-decoration: none;">${lead.phone} 💬 (Click to WhatsApp)</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #f5d77f; font-weight: bold; border-bottom: 1px solid #1e2230;">Email:</td>
            <td style="padding: 10px 0; color: #cbd5e1; border-bottom: 1px solid #1e2230;">
              ${lead.email ? `<a href="mailto:${lead.email}" style="color: #f5d77f; text-decoration: none;">${lead.email}</a>` : 'Not provided'}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #f5d77f; font-weight: bold; border-bottom: 1px solid #1e2230;">Company Name:</td>
            <td style="padding: 10px 0; color: #cbd5e1; border-bottom: 1px solid #1e2230;">${lead.company || 'Direct Client'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #f5d77f; font-weight: bold; border-bottom: 1px solid #1e2230;">Requested Service:</td>
            <td style="padding: 10px 0; color: #fde68a; font-weight: bold; border-bottom: 1px solid #1e2230;">${lead.service}</td>
          </tr>
        </table>

        <!-- Message Box -->
        <div style="background: rgba(212, 175, 55, 0.08); border: 1px solid rgba(212, 175, 55, 0.25); border-radius: 8px; padding: 15px; margin-bottom: 20px;">
          <div style="color: #f5d77f; font-weight: bold; font-size: 13px; text-transform: uppercase; margin-bottom: 6px;">Client Message / Requirement:</div>
          <div style="color: #ffffff; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${lead.message || 'No additional message.'}</div>
        </div>

        <!-- Quick Actions -->
        <div style="text-align: center; margin-top: 25px;">
          <a href="https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(lead.name)},%20thank%20you%20for%20contacting%20SuPuja%20Creations.%20Regarding%20your%20inquiry%20for%20${encodeURIComponent(lead.service)}:" 
             style="background: #22c55e; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; display: inline-block; font-size: 14px;">
            Reply on WhatsApp
          </a>
        </div>

        <!-- Footer -->
        <div style="margin-top: 30px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 15px; font-size: 11px; color: #71717a;">
          Lead stored in Supabase CRM (<code>supujacreationleads</code>).<br />
          Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
        </div>

      </div>
    `;

    // Send Alert to Admins
    const adminInfo = await transporter.sendMail({
      from: `"SuPuja Creations Leads" <${smtpUser}>`,
      to: ADMIN_RECIPIENTS,
      subject: `🔥 New Lead: ${lead.name} (${lead.service})`,
      html: adminEmailHtml
    });

    console.log('📧 Admin email notification sent successfully. MessageId:', adminInfo.messageId);

    // 2. Send Auto-Confirmation to Client (if email provided)
    if (lead.email && lead.email.includes('@')) {
      try {
        const clientEmailHtml = `
          <div style="font-family: Arial, sans-serif; background-color: #06070a; color: #f8fafc; padding: 25px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #d4af37;">
            <div style="text-align: center; margin-bottom: 20px; border-bottom: 1px solid rgba(212, 175, 55, 0.3); padding-bottom: 15px;">
              <h2 style="color: #f5d77f; margin: 0 0 5px 0;">Thank You for Contacting SuPuja Creations</h2>
              <p style="color: #a1a1aa; margin: 0; font-size: 13px;">Business Automation & MIS Solutions</p>
            </div>
            <p style="color: #e4e4e7; font-size: 14px; line-height: 1.6;">
              Hello <strong>${lead.name}</strong>,
            </p>
            <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6;">
              We have successfully received your inquiry regarding <strong>${lead.service}</strong>. Our senior technical consultant will review your requirement and reach out to you within 4 business hours.
            </p>
            <div style="background: rgba(212, 175, 55, 0.08); border: 1px solid rgba(212, 175, 55, 0.25); border-radius: 8px; padding: 15px; margin: 20px 0;">
              <div style="color: #f5d77f; font-weight: bold; font-size: 12px; text-transform: uppercase;">Your Submitted Requirement:</div>
              <div style="color: #ffffff; font-size: 13px; margin-top: 6px; white-space: pre-wrap;">${lead.message || 'No additional details.'}</div>
            </div>
            <p style="color: #a1a1aa; font-size: 13px; line-height: 1.5;">
              If you need immediate assistance, feel free to chat with us directly on WhatsApp:
            </p>
            <div style="text-align: center; margin: 20px 0;">
              <a href="https://wa.me/919988119276?text=Hello%20SuPuja%20Creations,%20following%20up%20on%20my%20inquiry%20for%20${encodeURIComponent(lead.service)}" 
                 style="background: #d4af37; color: #000000; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; display: inline-block; font-size: 13px;">
                Chat on WhatsApp (+91 99881 19276)
              </a>
            </div>
            <div style="margin-top: 25px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 12px; font-size: 11px; color: #71717a;">
              SuPuja Creations • <a href="https://supujacreations.com" style="color: #f5d77f; text-decoration: none;">supujacreations.com</a> • sales@supujacreations.com
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"SuPuja Creations" <${smtpUser}>`,
          to: lead.email,
          subject: `We Received Your Inquiry - SuPuja Creations (${lead.service})`,
          html: clientEmailHtml
        });
        console.log('📧 Client auto-confirmation email sent to:', lead.email);
      } catch (clientErr) {
        console.warn('⚠️ Could not send client auto-confirmation:', clientErr.message);
      }
    }

    return { success: true, messageId: adminInfo.messageId };

  } catch (error) {
    console.error('❌ Failed to send lead email notification:', error);
    return { success: false, error: error.message };
  }
}
