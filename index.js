const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// Configure Nodemailer for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use your email service (e.g., Gmail, Zoho)
  auth: {
    user: 'nolan.dol.team32@gmail.com', // Replace with your email
    pass: 'Emailserver%680',   // Replace with your email password or app-specific password
  },
});

// Function to send email logs
const sendEmailLog = (subject, content) => {
  const mailOptions = {
    from: 'nolan.dol.team32@gmail.com', // Your email
    to: 'airdropdev680@gmail',   // Your email (you'll receive the logs here)
    subject: subject,
    text: content,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// Track email opens
app.get('/track-open', (req, res) => {
  const email = req.query.email || 'Unknown';
  console.log(`Email opened by: ${email}`);
  sendEmailLog('Email Opened', `The email for ${email} was opened.`);
  res.send('<img src="data:image/gif;base64,R0lGODlhAQABAAAAACw=" />');
});

// Track link clicks
app.get('/track-click', (req, res) => {
  const email = req.query.email || 'Unknown';
  const url = req.query.url || 'Unknown';
  console.log(`Link clicked by: ${email}, Redirecting to: ${url}`);
  sendEmailLog('Link Clicked', `The email for ${email} clicked the link: ${url}`);
  res.redirect(url);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
