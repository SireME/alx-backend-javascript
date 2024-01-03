export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (const av of array) {
    newArray.push(appendString + av);
  }

  return newArray;
}
