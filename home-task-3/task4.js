function flatten1(arr) {
  return arr.join(',').split(',').map(el => + el);
}

function flatten2(arr) {
  return Array.from(arr.toString().split(','), Number);
}

function flatten3(arr) {
  let newArr = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      newArr = newArr.concat(flatten3(element));
    } else {
      newArr.push(element);
    }
  });
  return newArr;
}

const array = [1, 3, 6, [11, 12], [15, [19, 23]]];
//first
console.log(flatten1(array));
//second
console.log(flatten2(array));
//third
console.log(flatten3(array));