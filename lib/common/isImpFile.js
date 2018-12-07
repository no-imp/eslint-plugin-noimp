var impKiller = /^.*(?:imp).*$/gmi;

module.exports = function isIndexFile(parsed) {
  return !!parsed.name.match(impKiller);
};
