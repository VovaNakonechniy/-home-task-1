function extend() {
  let obj = {};
  for (let i = 0; i < arguments.length; i++) {
    if(typeof(arguments[i]) === 'object') {
      obj = Object.assign(obj, arguments[i], Object.assign({}, obj));
    }
  }
  return obj;
}

console.log (extend({ a: 1, b: 2 }, { c: 3 }));

console.log (extend({ a: 1, b: 2 }, { c: 3 }, { d: 4 }));

console.log (extend({ a: 1, b: 2 }, 'text'));

console.log (extend({ a: false, b: null }, { a: true, b: 2, c: 3 }));

// В умові задічі є неоднозначність
// В описі задачі пише - "Make a function that returns a new object, containing all of the properties of TWO OBJECTS passed in as parameters"
// А в скріншотах задачі показаний приклад с трьома параметрами
// Тому я зробив функцію з будь якою кількістью параметрів