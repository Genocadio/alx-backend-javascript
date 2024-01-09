export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const newSet = [];
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      newSet.push(item.slice(startString.length));
    }
  }
  return newSet.join('-');
}
