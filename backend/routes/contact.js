/**
 * Contact form routes for handling user inquiries
 */

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Mock contact submissions storage (in production, use a database)
const contactSubmissions = [];

/**
 * Email transporter configuration
 */
const createTransporter = () => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }
  return null;
};

/**
 * @route   POST /api/contact
 * @desc    Submit contact form
 * @access  Public
 */
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message, timestamp, userAgent, referrer } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
        message: 'Please provide name, email, subject, and message'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email',
        message: 'Please provide a valid email address'
      });
    }

    // Generate ticket ID
    const ticketId = `TG-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

    // Create contact submission record
    const submission = {
      id: ticketId,
      name,
      email,
      subject,
      message,
      timestamp: timestamp || new Date().toISOString(),
      userAgent,
      referrer,
      status: 'new',
      createdAt: new Date().toISOString()
    };

    // Store submission
    contactSubmissions.push(submission);

    // Try to send email notification
    const transporter = createTransporter();
    if (transporter) {
      try {
        // Send notification to admin
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: process.env.SMTP_USER, // Send to admin email
          subject: `New Contact Form Submission - ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Ticket ID:</strong> ${ticketId}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><strong>Submitted:</strong> ${new Date(submission.timestamp).toLocaleString()}</p>
            <p><strong>User Agent:</strong> ${userAgent || 'Not provided'}</p>
            <p><strong>Referrer:</strong> ${referrer || 'Direct'}</p>
          `
        });

        // Send confirmation to user
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: email,
          subject: 'Thank you for contacting TruthGuard',
          html: `
            <h2>Thank you for contacting TruthGuard</h2>
            <p>Dear ${name},</p>
            <p>We have received your message and will get back to you within 24-48 hours.</p>
            <p><strong>Your ticket ID:</strong> ${ticketId}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr>
            <p>Best regards,<br>The TruthGuard Team</p>
          `
        });

        console.log(`Contact form submitted and emails sent for ticket ${ticketId}`);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue processing even if email fails
      }
    }

    res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully',
      ticketId,
      data: {
        id: ticketId,
        name,
        email,
        subject,
        submittedAt: submission.timestamp
      }
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      success: false,
      error: 'Submission failed',
      message: 'An error occurred while processing your request'
    });
  }
});

/**
 * @route   GET /api/contact/submissions
 * @desc    Get all contact submissions (admin only)
 * @access  Private
 */
router.get('/submissions', (req, res) => {
  // In production, add proper authentication middleware
  res.status(200).json({
    success: true,
    count: contactSubmissions.length,
    submissions: contactSubmissions.map(sub => ({
      id: sub.id,
      name: sub.name,
      email: sub.email,
      subject: sub.subject,
      status: sub.status,
      createdAt: sub.createdAt
    }))
  });
});

/**
 * @route   GET /api/contact/submission/:id
 * @desc    Get specific contact submission
 * @access  Private
 */
router.get('/submission/:id', (req, res) => {
  const { id } = req.params;
  const submission = contactSubmissions.find(sub => sub.id === id);

  if (!submission) {
    return res.status(404).json({
      success: false,
      error: 'Submission not found',
      message: 'Contact submission not found'
    });
  }

  res.status(200).json({
    success: true,
    submission
  });
});

module.exports = router;