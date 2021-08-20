function extend(obj1, obj2) {
  let obj3 = {};
  if(typeof(obj1) === 'object') {
    obj3 = obj1;
  }
  if(typeof(obj2) === 'object') {
    obj3 = Object.assign(obj3, obj2);
  }
  return obj3;
}

console.log (extend({ a: 1, b: 2 }, { c: 3 }));

console.log (extend({ a: 1, b: 2 }, 'text'));

console.log (extend({ a: false, b: null }, { a: true, b: 2, c: 3 }));