const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// JSON parsing
app.use(express.json());

// Mount routes
const catalogRoutes = require('./src/routes/all');
app.use('/api', catalogRoutes);

app.get('/', (req, res) => {
  res.send('Anime Catalog API');
});

app.listen(port, () => {
  console.log(`Anime Catalog listening on port ${port}`);
});
