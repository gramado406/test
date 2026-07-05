const express = require('express');
const router = express.Router();

// GET /api/genres
router.get('/', (req, res) => {
  // Placeholder genres
  res.json({ genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'] });
});

module.exports = router;
