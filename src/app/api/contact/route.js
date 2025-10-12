// @next
import { NextResponse } from 'next/server';

/***************************  API - CONTACT FORM  ***************************/

// POST handler for /api/contact
export async function POST(request) {
  try {
    const { name, email, subject, message, company, phone } = await request.json();

    // Get language from request headers or default to 'en'
    const language = request.headers.get('accept-language')?.split(',')[0]?.split('-')[0] || 'en';

    // Language-specific messages
    const messages = {
      en: {
        required: 'Name, email, and message are required',
        invalidEmail: 'Please enter a valid email address',
        success: "Thank you for your message! We'll get back to you soon.",
        error: 'Failed to send message. Please try again later.'
      },
      nl: {
        required: 'Naam, e-mail en bericht zijn verplicht',
        invalidEmail: 'Voer een geldig e-mailadres in',
        success: 'Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.',
        error: 'Kan bericht niet verzenden. Probeer het later opnieuw.'
      }
    };

    const msg = messages[language] || messages.en;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: msg.required }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: msg.invalidEmail }, { status: 400 });
    }

    // Prepare email data
    const emailData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject?.trim() || 'New Contact Form Submission',
      message: message.trim(),
      company: company?.trim(),
      phone: phone?.trim(),
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
    };

    // Choose your email provider (uncomment one):

    // Option 1: Nodemailer (most flexible, works with any SMTP)
    // const result = await sendWithNodemailer(emailData);

    // Option 2: SendGrid (popular service)
    // const result = await sendWithSendGrid(emailData);

    // Option 3: Resend (modern, developer-friendly)
    // const result = await sendWithResend(emailData);

    // Option 4: Simple log (for testing/development)
    const result = await logEmail(emailData);

    if (result.success) {
      return NextResponse.json({ message: msg.success }, { status: 200 });
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: msg.error }, { status: 500 });
  }
}

/***************************  EMAIL PROVIDERS  ***************************/

// Option 1: Nodemailer (requires: npm install nodemailer)
async function sendWithNodemailer(emailData) {
  try {
    // Uncomment and configure when using Nodemailer:
    /*
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Contact Form: ${emailData.subject}`,
      html: generateEmailHTML(emailData),
      replyTo: emailData.email
    });
    */

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Option 2: SendGrid (requires: npm install @sendgrid/mail)
async function sendWithSendGrid(emailData) {
  try {
    // Uncomment and configure when using SendGrid:
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: process.env.CONTACT_EMAIL,
      from: process.env.SENDGRID_FROM,
      subject: `Contact Form: ${emailData.subject}`,
      html: generateEmailHTML(emailData),
      replyTo: emailData.email
    };

    await sgMail.send(msg);
    */

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Option 3: Resend (requires: npm install resend)
async function sendWithResend(emailData) {
  try {
    // Uncomment and configure when using Resend:
    /*
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.RESEND_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Contact Form: ${emailData.subject}`,
      html: generateEmailHTML(emailData),
      replyTo: emailData.email
    });
    */

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Option 4: Simple logging (for development/testing)
async function logEmail(emailData) {
  try {
    console.log('📧 Contact Form Submission:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`👤 Name: ${emailData.name}`);
    console.log(`📧 Email: ${emailData.email}`);
    console.log(`🏢 Company: ${emailData.company || 'Not provided'}`);
    console.log(`📱 Phone: ${emailData.phone || 'Not provided'}`);
    console.log(`📋 Subject: ${emailData.subject}`);
    console.log(`💬 Message: ${emailData.message}`);
    console.log(`🕒 Time: ${emailData.timestamp}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/***************************  EMAIL TEMPLATE  ***************************/

function generateEmailHTML(emailData) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: 600; color: #555; margin-bottom: 5px; display: block; }
        .value { background: #f8f9fa; padding: 12px; border-radius: 4px; border-left: 4px solid #667eea; }
        .message { background: #f8f9fa; padding: 20px; border-radius: 4px; border-left: 4px solid #28a745; white-space: pre-wrap; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 14px; color: #666; border-radius: 0 0 8px 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>💌 New Contact Form Submission</h1>
          <p>You have received a new message from your website</p>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">👤 Name:</span>
            <div class="value">${emailData.name}</div>
          </div>
          <div class="field">
            <span class="label">📧 Email:</span>
            <div class="value"><a href="mailto:${emailData.email}">${emailData.email}</a></div>
          </div>
          ${
            emailData.company
              ? `
          <div class="field">
            <span class="label">🏢 Company:</span>
            <div class="value">${emailData.company}</div>
          </div>`
              : ''
          }
          ${
            emailData.phone
              ? `
          <div class="field">
            <span class="label">📱 Phone:</span>
            <div class="value"><a href="tel:${emailData.phone}">${emailData.phone}</a></div>
          </div>`
              : ''
          }
          <div class="field">
            <span class="label">📋 Subject:</span>
            <div class="value">${emailData.subject}</div>
          </div>
          <div class="field">
            <span class="label">💬 Message:</span>
            <div class="message">${emailData.message}</div>
          </div>
        </div>
        <div class="footer">
          <p>Sent on ${new Date(emailData.timestamp).toLocaleString()}</p>
          <p>Reply directly to this email to respond to ${emailData.name}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
