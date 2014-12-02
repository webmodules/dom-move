function move(from, to) {
  if (!to) {
    to = from.ownerDocument.createDocumentFragment();
  }
  while (from.firstChild) {
    to.appendChild(from.firstChild);
  }
  return to;
}

module.exports = move;