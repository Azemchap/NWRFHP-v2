import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/db/drizzle/client'
import { contactSubmissions } from '@/db/drizzle/schema'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const [submission] = await db.insert(contactSubmissions).values({
      name,
      email,
      phone,
      subject,
      message,
      status: 'new',
    }).returning()

    if (resend && process.env.NEXT_PUBLIC_EMAIL) {
      try {
        await resend.emails.send({
          from: process.env.NEXT_PUBLIC_EMAIL,
          to: process.env.NEXT_PUBLIC_EMAIL,
          subject: `New Contact Form Submission: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <hr>
            <p><small>Received at: ${new Date().toLocaleString()}</small></p>
          `,
        })
      } catch (emailError) {
        console.error('Error sending email notification:', emailError)
      }
    }

    return NextResponse.json(
      { message: 'Contact form submitted successfully', id: submission.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
