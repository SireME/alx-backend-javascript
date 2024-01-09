export default function hasValuesFromArray(set, array) {
  const cset = new Set(array);
  for (const val of cset) {
    if (!set.has(val)) {
      return false;
    }
  }
  return true;
}
