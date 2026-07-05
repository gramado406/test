// Very small in-memory cache helper
const cache = new Map();

function get(key) {
  const item = cache.get(key);
  if (!item) return null;
  if (item.expireAt && Date.now() > item.expireAt) {
    cache.delete(key);
    return null;
  }
  return item.value;
}

function set(key, value, ttlMs = 1000 * 60) {
  const expireAt = ttlMs ? Date.now() + ttlMs : null;
  cache.set(key, { value, expireAt });
}

module.exports = { get, set };
