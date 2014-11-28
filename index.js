function move(from, to) {
  if (!to) {
    to = from.ownerDocument.createDocumentFragment();
  }
  while (from.firstNode) {
    to.appendChild(from.firstNode);
  }
  return to;
}

module.exports = move;