function transformObject(obj) {
  let newObj = {};
  for (const property in obj) {
    newObj[obj[property]] = property;
  }
  return newObj;
}

const myObj = { name: 'Object', length: 2 };
console.log(transformObject(myObj));