const express = require('express');
const router = express.Router();
const catalog = require('../catalog');

// GET /api/last-season
router.get('/', async (req, res) => {
  try {
    // Placeholder: return listAll
    const items = await catalog.listAll();
    res.json({ season: 'current', count: items.length, items });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch last season' });
  }
});

module.exports = router;
