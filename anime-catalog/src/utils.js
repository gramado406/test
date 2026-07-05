function formatTitle(item) {
  if (!item) return '';
  return item.title || item.name || '';
}

module.exports = { formatTitle };
