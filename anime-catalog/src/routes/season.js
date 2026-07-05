const express = require('express');
const router = express.Router();
const catalog = require('../catalog');

// GET /api/season/:season
router.get('/:season', async (req, res) => {
  const season = req.params.season;
  try {
    const list = await catalog.listBySeason(season);
    res.json({ season, count: list.length, items: list });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch season' });
  }
});

module.exports = router;
