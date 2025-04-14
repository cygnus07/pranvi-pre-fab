// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { ContactFormData } from '@/components/types';
import { validateRecaptcha } from '@/lib/recaptcha';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: Request) {
  const formData: ContactFormData & { recaptchaToken?: string } = await request.json();

  try {
    // 1. Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // 2. Validate reCAPTCHA if in production
    if (process.env.NODE_ENV === 'production') {
      if (!formData.recaptchaToken) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification required' },
          { status: 400 }
        );
      }

      const isRecaptchaValid = await validateRecaptcha(formData.recaptchaToken);
      if (!isRecaptchaValid) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed' },
          { status: 400 }
        );
      }
    }

    // 3. Prepare email content
    const emailContent = {
      to: process.env.CONTACT_EMAIL || 'default@pranvibuildings.com',
      from: {
        email: process.env.FROM_EMAIL || 'noreply@pranvibuildings.com',
        name: 'Pranvi Website Contact'
      },
      replyTo: formData.email,
      subject: `New Contact Form Submission: ${formData.subject || 'No Subject'}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        
        Message:
        ${formData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${formData.subject || 'No subject'}</p>
          <h3 style="color: #1e3a8a; margin-top: 20px;">Message:</h3>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
      `
    };

    // 4. Send email
    await sgMail.send(emailContent);

    // 5. Log submission (optional)
    console.log(`Contact form submitted by ${formData.email}`);

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Specific error for SendGrid failures
    if (error instanceof Error && error.message.includes('Unauthorized')) {
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'An error occurred while submitting your form. Please try again later.' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';