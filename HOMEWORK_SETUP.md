# Homework Submission Setup Guide

This guide explains how to configure the homework submission feature in your Next.js application.

## Features Implemented

1. **File Upload Interface**: Students can upload files (PDF, DOCX, TXT, PNG, JPG) up to 10MB
2. **Email Integration**: Files are sent as email attachments using Nodemailer
3. **Validation**: File type and size validation with user-friendly error messages
4. **Success/Error Feedback**: Clear messages for successful submissions and errors
5. **Progress Tracking**: Integration with existing progress system

## Setup Instructions

### 1. Install Dependencies

The required dependencies have already been installed:
- `nodemailer` - for sending emails
- `@types/nodemailer` - TypeScript types

### 2. Configure Email Settings

Create or update your `.env.local` file with your email configuration:

#### For Gmail:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=teacher-email@example.com
```

#### For Other SMTP Providers:
```env
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@your-provider.com
SMTP_PASS=your-password
RECIPIENT_EMAIL=teacher-email@example.com
```

### 3. Gmail Setup (if using Gmail)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `EMAIL_PASS` (not your regular Gmail password)

### 4. Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to a lesson page
3. Try uploading a file and submitting homework
4. Check if you receive the email with the attachment

## API Route: `/api/upload`

The API route handles:
- File validation (type and size)
- Form data processing
- Email sending with attachments
- Error handling and responses

## Component Updates

The `LessonContent.tsx` component now includes:
- Student name input field
- File upload input with validation
- Submit button with loading states
- Success/error message display
- Integration with existing progress tracking

## Customization

### Changing File Types
Edit the `allowedTypes` array in both `components/LessonContent.tsx` and `app/api/upload/route.ts`:

```typescript
const allowedTypes = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
  'image/png',
  'image/jpeg'
];
```

### Changing File Size Limit
Modify the `maxSize` variable in both files:

```typescript
const maxSize = 10 * 1024 * 1024; // 10MB in bytes
```

### Changing Email Template
Edit the `mailOptions.html` in `app/api/upload/route.ts` to customize the email content.

## Security Notes

- The API route includes file type and size validation
- Environment variables are used for sensitive email credentials
- Files are processed in memory and not stored on the server
- Consider adding rate limiting for production use

## Troubleshooting

### Common Issues:

1. **"Authentication failed" error**:
   - Check your email credentials
   - For Gmail, ensure you're using an App Password

2. **"File too large" error**:
   - Check file size (current limit: 10MB)
   - Consider increasing the limit if needed

3. **"Invalid file type" error**:
   - Ensure the file has a supported extension
   - Check the file's MIME type

4. **No email received**:
   - Check spam folder
   - Verify recipient email address
   - Test with a different email provider

## Production Deployment

For production deployment:
1. Use secure environment variables (not committed to version control)
2. Consider using a dedicated email service (SendGrid, Mailgun, etc.)
3. Add rate limiting to prevent abuse
4. Monitor email delivery and handle bounces

## Support

If you encounter issues:
1. Check the browser console for client-side errors
2. Check the server logs for API errors
3. Verify your email configuration
4. Test with a simple file upload first
