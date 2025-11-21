const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    service: 'IntelliTech Backend API',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/clients', require('./routes/clients'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/support', require('./routes/support'));
app.use('/api/invoices', require('./routes/invoices'));
app.use('/api/users', require('./routes/users'));

// Services route for frontend
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs with cutting-edge technologies.',
      features: ['Enterprise Applications', 'CRM Systems', 'Custom Solutions']
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'Native Apps']
    },
    {
      id: 3,
      icon: '🌐',
      title: 'Web Development',
      description: 'Responsive and scalable web applications with modern frameworks and best practices.',
      features: ['React/Next.js', 'Node.js', 'Progressive Web Apps', 'E-commerce']
    },
    {
      id: 4,
      icon: '📊',
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to boost your online presence and drive growth.',
      features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics']
    }
  ];
  res.json(services);
});

// MongoDB connection with fallback for Vercel
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/intellitech';

if (MONGODB_URI && MONGODB_URI !== 'mongodb://localhost:27017/intellitech') {
  mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => {
      console.log('❌ MongoDB connection error:', err.message);
      console.log('⚠️  Continuing without database - using mock data');
    });
} else {
  console.log('⚠️  No MongoDB URI provided - using mock data');
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    ...(process.env.NODE_ENV === 'development' && { error: err.message })
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'API endpoint not found' 
  });
});

// For Vercel, we need to export the app
module.exports = app;

// Only listen locally when not in Vercel
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 API Health: http://localhost:${PORT}/api/health`);
  });
}