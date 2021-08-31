function uniqueArray(arr) {
  const setArr = new Set(arr);
  return Array.from(setArr).sort();
}

const array = [1,3,4,2,3,1,4,5];
console.log(uniqueArray(array));