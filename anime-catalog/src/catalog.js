const anilist = require('./anilist');
const cache = require('./cache');

async function listAll() {
  const cached = cache.get('all');
  if (cached) return cached;
  // Combine sources; here we fallback to an empty array
  const items = await anilist.search('');
  cache.set('all', items, 1000 * 60 * 5);
  return items;
}

async function listBySeason(season) {
  // stub
  return (await listAll()).filter(() => false);
}

module.exports = { listAll, listBySeason };
