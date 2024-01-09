export default function cleanSet(set, startString) {
  // Input validation
  if (!set || !Array.isArray(set)) {
    throw new Error('The "set" parameter must be a non-null array.');
  }

  if (typeof startString !== 'string') {
    throw new Error('The "startString" parameter must be a non-null string.');
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
