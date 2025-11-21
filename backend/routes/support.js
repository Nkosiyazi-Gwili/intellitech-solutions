const express = require('express');
const router = express.Router();

// Mock support tickets data
let tickets = [
  {
    id: 1,
    title: 'Login issue',
    client: 'Acme Corporation',
    priority: 'high',
    status: 'open',
    createdAt: '2024-01-15'
  }
];

// Get all tickets
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: tickets,
      total: tickets.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching support tickets'
    });
  }
});

module.exports = router;