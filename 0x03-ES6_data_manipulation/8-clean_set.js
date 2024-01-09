export default function cleanSet(set, startString) {
  let newString = '';
  const sLen = startString.length;

  for (const value of set) {
    if (value.startsWith(startString)) {
      newString += `${value.slice(sLen)}-`;
    }
  }
  return newString.slice(0, -1);
}
