const express = require('express');
const router = express.Router();

// Mock clients data
let clients = [
  {
    id: 1,
    name: 'Acme Corporation',
    email: 'contact@acme.com',
    phone: '+1 (555) 123-4567',
    company: 'Acme Corp',
    status: 'active',
    joinDate: '2024-01-15'
  },
  {
    id: 2,
    name: 'Global Tech Solutions',
    email: 'info@globaltech.com',
    phone: '+1 (555) 987-6543',
    company: 'Global Tech',
    status: 'active',
    joinDate: '2024-01-10'
  }
];

// Get all clients
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: clients,
      total: clients.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching clients'
    });
  }
});

module.exports = router;