const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // allow all origins (can restrict in production)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate inputs
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required!' });
  }

  // Setup NodeMailer transporter (Gmail SMTP)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // TLS
    auth: {
      user: process.env.EMAIL_USER, // your Gmail
      pass: process.env.EMAIL_PASS  // your Google App Password
    },
    tls: { rejectUnauthorized: false }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER, // your email
    subject: `New Contact Form Message from ${name}`,
    text: message,
    html: `<p>${message}</p><p>From: ${name} - ${email}</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Mail Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend Running', docs: '/api/contact' });
});

// Start server on port 5009
const PORT = process.env.PORT || 5009;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
