import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

const RECIPIENTS = ['shashi@valardigital.com', 'tushar@valardigital.com'];
// const RECIPIENTS = ['utkarsh@valardigital.com'];
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, websiteUrl, budgetFrom, budgetTo, additionalInfo } = body || {};

    if (!fullName || !email || !websiteUrl || !budgetFrom || !budgetTo) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const fromEmail = process.env.DEFAULT_FROM_EMAIL;
    if (!apiKey || !fromEmail) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    sgMail.setApiKey(apiKey);

    const textBody = [
      'New growth report request via website',
      '',
      `Full Name: ${fullName}`,
      `Email: ${email}`,
      `Website URL: ${websiteUrl}`,
      `Budget: $${budgetFrom} - $${budgetTo}`,
      '',
      'Additional Info:',
      `${additionalInfo || '-'}`,
    ].join('\n');

    await sgMail.send({
      to: RECIPIENTS,
      from: fromEmail,
      subject: 'New growth report form submission',
      text: textBody,
      replyTo: email || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('SendGrid send error (growth report)', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}


