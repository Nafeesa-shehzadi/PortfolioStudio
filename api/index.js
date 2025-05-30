// Serverless entry point for the API
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Basic API route for testing
app.get('/api', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log('Contact form submission:', { name, email, subject, message });
  res.json({
    success: true,
    message: 'Thank you for your message! I\'ll get back to you soon.'
  });
});

// Serverless function handler for Vercel
export default app;
