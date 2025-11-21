const express = require('express');
const router = express.Router();

// Mock invoices data
let invoices = [
  {
    id: 1,
    invoiceNumber: 'INV-2024-001',
    client: 'Acme Corporation',
    amount: 12500,
    status: 'paid',
    dueDate: '2024-02-15'
  }
];

// Get all invoices
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: invoices,
      total: invoices.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching invoices'
    });
  }
});

module.exports = router;