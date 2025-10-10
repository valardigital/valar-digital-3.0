import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

const RECIPIENTS = ['shashi@valardigital.com', 'tushar@valardigital.com'];
// const RECIPIENTS = ['utkarsh@valardigital.com'];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, subject, message } = body || {};

    if (!name || !email || !subject) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const fromEmail = process.env.DEFAULT_FROM_EMAIL;
    if (!apiKey || !fromEmail) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    sgMail.setApiKey(apiKey);

    const textBody = [
      `New contact request via website:`,
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || '-'} ,`,
      `Subject: ${subject}`,
      '',
      `Message:`,
      `${message || ''}`,
    ].join('\n');

    const htmlBody = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>New Contact Request</title>
      </head>
      <body style="margin:0;padding:0;background:#F5F8FB;color:#0F172A;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#F5F8FB;">
          <tr>
            <td align="center" style="padding:24px 16px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;">
                <tr>
                  <td style="background:#075099;color:#ffffff;border-radius:12px 12px 0 0;padding:20px 24px;text-align:center;font-family:Inter,Segoe UI,Arial,Helvetica,sans-serif;">
                    <div style="font-size:18px;letter-spacing:.3px;font-weight:600;">Valar Digital</div>
                    <div style="opacity:.9;font-size:14px;margin-top:4px;">New contact request via website</div>
                  </td>
                </tr>
                <tr>
                  <td style="background:#ffffff;border:1px solid #E6EEF5;border-top:none;border-radius:0 0 12px 12px;padding:24px;font-family:Inter,Segoe UI,Arial,Helvetica,sans-serif;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate;border-spacing:0 10px;">
                      <tr>
                        <td style="width:160px;color:#334155;font-weight:600;font-size:14px;">Name</td>
                        <td style="color:#0F172A;font-size:14px;">${(name || '').replace(/</g, '&lt;')}</td>
                      </tr>
                      <tr>
                        <td style="width:160px;color:#334155;font-weight:600;font-size:14px;">Email</td>
                        <td style="color:#0F172A;font-size:14px;"><a href="mailto:${(email || '').replace(/"/g, '')}" style="color:#075099;text-decoration:none;">${(email || '').replace(/</g, '&lt;')}</a></td>
                      </tr>
                      <tr>
                        <td style="width:160px;color:#334155;font-weight:600;font-size:14px;">Company</td>
                        <td style="color:#0F172A;font-size:14px;">${((company || '-') as string).replace(/</g, '&lt;')}</td>
                      </tr>
                      <tr>
                        <td style="width:160px;color:#334155;font-weight:600;font-size:14px;">Subject</td>
                        <td style="color:#0F172A;font-size:14px;">${(subject || '').replace(/</g, '&lt;')}</td>
                      </tr>
                      <tr>
                        <td valign="top" style="width:160px;color:#334155;font-weight:600;font-size:14px;">Message</td>
                        <td style="color:#0F172A;font-size:14px;">
                          <div style="white-space:pre-wrap;line-height:1.6;border:1px solid #E6EEF5;background:#F8FBFF;border-radius:8px;padding:12px 14px;font-family:ui-monospace,Menlo,Consolas,monospace;">${(message || '').replace(/</g, '&lt;')}</div>
                        </td>
                      </tr>
                    </table>
                    <div style="margin-top:20px;padding-top:16px;border-top:1px solid #E6EEF5;color:#64748B;font-size:12px;">
                      This email was sent from the contact form on <span style="color:#075099;">valardigital.com</span>.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    await sgMail.send({
      to: RECIPIENTS,
      from: fromEmail,
      subject:'New contact form submission',
      text: textBody,
      html: htmlBody,
      replyTo: email || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('SendGrid send error', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}


