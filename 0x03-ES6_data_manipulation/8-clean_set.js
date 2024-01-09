export default function cleanSet(set, startString) {
  // Input validation
  if (!(set instanceof Set)) {
    return '';
  }

  if (typeof startString !== 'string') {
    return '';
  }

  let newString = '';
  const sLen = startString.length;

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      newString += `${value.slice(sLen)}-`;
    }
  }

  if (startString === '') {
    return '';
  }
  return newString.slice(0, -1);
}
