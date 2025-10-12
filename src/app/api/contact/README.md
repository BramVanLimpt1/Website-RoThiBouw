# Contact Form API

This API endpoint handles contact form submissions and sends emails to your business email address.

## Endpoint

`POST /api/contact`

## Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Business Inquiry",
  "message": "Hello, I'd like to know more about your services.",
  "company": "Acme Inc", // optional
  "phone": "+1234567890" // optional
}
```

## Response

### Success (200)
```json
{
  "message": "Thank you for your message! We'll get back to you soon."
}
```

### Error (400/500)
```json
{
  "error": "Name, email, and message are required"
}
```

## Setup Instructions

### 1. Choose Your Email Provider

The API supports multiple email providers. Uncomment one in `/src/app/api/contact/route.js`:

- **Nodemailer** (SMTP) - Most flexible, works with any email provider
- **SendGrid** - Popular email service
- **Resend** - Modern, developer-friendly service
- **Console Log** - For development/testing (default)

### 2. Install Dependencies

Based on your chosen provider:

```bash
# For Nodemailer
npm install nodemailer

# For SendGrid
npm install @sendgrid/mail

# For Resend
npm install resend
```

### 3. Environment Variables

Create a `.env.local` file with your email settings:

#### Nodemailer (SMTP)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=business@yourdomain.com
```

#### SendGrid
```env
SENDGRID_API_KEY=your-sendgrid-api-key
SENDGRID_FROM=noreply@yourdomain.com
CONTACT_EMAIL=business@yourdomain.com
```

#### Resend
```env
RESEND_API_KEY=your-resend-api-key
RESEND_FROM=noreply@yourdomain.com
CONTACT_EMAIL=business@yourdomain.com
```

### 4. Frontend Usage

```jsx
const handleSubmit = async (formData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
    } else {
      alert(result.error);
    }
  } catch (error) {
    alert('Failed to send message');
  }
};
```

## Features

✅ **Input Validation** - Validates required fields and email format
✅ **Multiple Providers** - Support for popular email services
✅ **Beautiful Emails** - HTML email template with responsive design
✅ **Security** - Basic spam protection and input sanitization
✅ **Error Handling** - Proper error responses and logging
✅ **Template Ready** - Easy to configure and customize

## Customization

- Edit email template in `generateEmailHTML()` function
- Add more validation rules as needed
- Customize error messages
- Add rate limiting for production use
- Add CAPTCHA for spam protection

## Development

The API currently logs submissions to console for testing. Check your terminal to see form submissions during development.