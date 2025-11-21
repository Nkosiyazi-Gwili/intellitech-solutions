const express = require('express');
const router = express.Router();

// Mock users data
let users = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@intellitech.com',
    role: 'admin',
    isActive: true,
    createdAt: new Date('2024-01-01')
  },
  {
    id: 2,
    name: 'Manager User',
    email: 'manager@intellitech.com',
    role: 'manager',
    isActive: true,
    createdAt: new Date('2024-01-02')
  },
  {
    id: 3,
    name: 'Developer User',
    email: 'developer@intellitech.com',
    role: 'developer',
    isActive: true,
    createdAt: new Date('2024-01-03')
  }
];

// Get all users
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: users,
      total: users.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching users'
    });
  }
});

// Get user by ID
router.get('/:id', (req, res) => {
  try {
    const user = users.find(u => u.id === parseInt(req.params.id));
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching user'
    });
  }
});

module.exports = router;