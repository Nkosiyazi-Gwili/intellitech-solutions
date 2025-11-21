const express = require('express');
const router = express.Router();

// Mock user data
const users = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@intellitech.com',
    password: 'password123',
    role: 'admin'
  }
];

// Login endpoint
router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      return res.status(401).json({ 
        success: false,
        message: 'Invalid email or password' 
      });
    }

    const token = 'demo-jwt-token-' + Date.now();

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Server error during login' 
    });
  }
});

// Get current user
router.get('/me', (req, res) => {
  // Mock authentication - in real app, verify token
  const user = users[0];
  
  res.json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  });
});

module.exports = router;