function linkedListSumRecursive(obj) {
  let sum = 0;
  if(obj.next === null) {
    return sum + obj.value;
  } else {
    sum += obj.value + linkedListSumRecursive(obj.next);
  }
  return sum;
}

function linkedListSumIterative(obj) {
  let deepObj = obj;
  let sum = 0;
  do {
    sum += deepObj.value;
    deepObj = deepObj.next;
  } while (deepObj.next !== null);
  sum += deepObj.value;
  
  return sum;
}

const linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null
        }
      }
    }
  }
};

console.log(linkedListSumRecursive(linkedList));

console.log(linkedListSumIterative(linkedList));