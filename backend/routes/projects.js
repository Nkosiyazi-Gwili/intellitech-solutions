const express = require('express');
const router = express.Router();

// Mock projects data
let projects = [
  {
    id: 1,
    name: 'E-commerce Platform',
    client: 'Acme Corporation',
    status: 'in-progress',
    progress: 75,
    deadline: '2024-03-15',
    budget: 50000
  },
  {
    id: 2,
    name: 'Mobile Banking App',
    client: 'Global Tech Solutions',
    status: 'completed',
    progress: 100,
    deadline: '2024-01-10',
    budget: 75000
  }
];

// Get all projects
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: projects,
      total: projects.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching projects'
    });
  }
});

module.exports = router;