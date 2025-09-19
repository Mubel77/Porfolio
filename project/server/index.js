const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        error: 'Todos los campos son requeridos'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        ok: false,
        error: 'Email inválido'
      });
    }

    // TODO: Here you can add email sending functionality
    // For now, we'll just log the contact request
    console.log('Contact form submission:', { name, email, message });

    res.json({
      ok: true,
      message: 'Mensaje recibido correctamente'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      ok: false,
      error: 'Error interno del servidor'
    });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});