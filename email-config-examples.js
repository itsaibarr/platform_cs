// Email Configuration Examples
// Copy the appropriate configuration to your .env.local file

// Gmail Configuration
const gmailConfig = {
  EMAIL_USER: 'your-email@gmail.com',
  EMAIL_PASS: 'your-app-password', // Use App Password, not regular password
  RECIPIENT_EMAIL: 'teacher-email@example.com'
};

// Outlook/Hotmail Configuration
const outlookConfig = {
  SMTP_HOST: 'smtp-mail.outlook.com',
  SMTP_PORT: 587,
  SMTP_SECURE: false,
  SMTP_USER: 'your-email@outlook.com',
  SMTP_PASS: 'your-password',
  RECIPIENT_EMAIL: 'teacher-email@example.com'
};

// Yahoo Configuration
const yahooConfig = {
  SMTP_HOST: 'smtp.mail.yahoo.com',
  SMTP_PORT: 587,
  SMTP_SECURE: false,
  SMTP_USER: 'your-email@yahoo.com',
  SMTP_PASS: 'your-app-password', // Yahoo also uses App Passwords
  RECIPIENT_EMAIL: 'teacher-email@example.com'
};

// Custom SMTP Configuration (for other providers)
const customSMTPConfig = {
  SMTP_HOST: 'smtp.your-provider.com',
  SMTP_PORT: 587,
  SMTP_SECURE: false,
  SMTP_USER: 'your-email@your-provider.com',
  SMTP_PASS: 'your-password',
  RECIPIENT_EMAIL: 'teacher-email@example.com'
};

// Instructions for getting App Passwords:
// 1. Gmail: https://support.google.com/accounts/answer/185833
// 2. Yahoo: https://help.yahoo.com/kb/SLN15241.html
// 3. Outlook: Generally uses regular passwords, but check your provider

module.exports = {
  gmailConfig,
  outlookConfig,
  yahooConfig,
  customSMTPConfig
};
