import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// const RECIPIENTS = ['shashi@valardigital.com', 'tushar@valardigital.com'];
const RECIPIENTS = ['utkarsh@valardigital.com'];

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
      <div>
        <p><strong>New contact request via website</strong></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || '-'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,Consolas,monospace;">${(message || '').replace(/</g, '&lt;')}</pre>
      </div>
    `;

    await sgMail.send({
      to: RECIPIENTS,
      from: fromEmail,
      subject: subject || 'New contact form submission',
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


