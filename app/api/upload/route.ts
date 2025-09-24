import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure nodemailer transporter
// For Gmail, use these settings:
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS, // Use App Password for Gmail
//   },
// });

// For other SMTP providers, use:
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: parseInt(process.env.SMTP_PORT || '587'),
//   secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use App Password for Gmail
  },
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const studentName = formData.get('studentName') as string;
    const lessonTitle = formData.get('lessonTitle') as string;
    const moduleId = formData.get('moduleId') as string;
    const lessonId = formData.get('lessonId') as string;

    // Validate required fields
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    if (!studentName || !lessonTitle) {
      return NextResponse.json(
        { error: 'Missing required information' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'image/png',
      'image/jpeg'
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Allowed: PDF, DOCX, TXT, PNG, JPG' },
        { status: 400 }
      );
    }

    // Validate file size (10MB limit)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Maximum size: 10MB' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Email configuration
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER, // Default to sender if not specified
      subject: `Homework Submission: ${lessonTitle}`,
      html: `
        <h2>New Homework Submission</h2>
        <p><strong>Student:</strong> ${studentName}</p>
        <p><strong>Lesson:</strong> ${lessonTitle}</p>
        <p><strong>Module ID:</strong> ${moduleId}</p>
        <p><strong>Lesson ID:</strong> ${lessonId}</p>
        <p><strong>File:</strong> ${file.name}</p>
        <p><strong>File Size:</strong> ${(file.size / 1024 / 1024).toFixed(2)} MB</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Homework submitted successfully!'
    });

  } catch (error) {
    console.error('Error sending homework:', error);
    return NextResponse.json(
      { error: 'Failed to submit homework. Please try again.' },
      { status: 500 }
    );
  }
}
