const catalog = require('../catalog');

// Handler used by /api/all route registration in routes/all.js
async function handlerAll(req, res) {
  try {
    const items = await catalog.listAll();
    res.json({ count: items.length, items });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch all items' });
  }
}

module.exports = { handlerAll };
