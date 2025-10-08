import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const RECIPIENTS = ['shashi@valardigital.com', 'tushar@valardigital.com'];

function getSesClient() {
  const region = process.env.AWS_SES_REGION || process.env.AWS_REGION;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  if (!region || !accessKeyId || !secretAccessKey) {
    throw new Error('Missing AWS SES environment configuration');
  }

  return new SESClient({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, subject, message } = body || {};

    if (!name || !email || !subject) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const sourceEmail = process.env.AWS_SES_SOURCE_EMAIL;
    if (!sourceEmail) {
      return NextResponse.json({ error: 'Server email not configured' }, { status: 500 });
    }

    const client = getSesClient();

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

    const sendCommand = new SendEmailCommand({
      Source: sourceEmail,
      Destination: { ToAddresses: RECIPIENTS },
      Message: {
        Subject: { Data: subject || 'New contact form submission' },
        Body: {
          Text: { Data: textBody },
          Html: { Data: htmlBody },
        },
      },
      ReplyToAddresses: email ? [email] : undefined,
    });

    await client.send(sendCommand);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('SES send error', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}


