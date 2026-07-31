'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const phone = formData.get('phone')?.toString().trim();
  const message = formData.get('message')?.toString().trim();

  if (!name || !email || !message) {
    return { error: 'All fields are required.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.PERSONAL_EMAIL as string,
      replyTo: email,
      subject: `New portfolio message from: ${name}`,
      text: `
        You have received a new message from your portfolio contact form!
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
      `,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true, data };
  } catch (error: unknown) {
    console.error('Resend error:', error);
    return { error: 'Failed to send message. Please try again later.' };
  }
}
