function deleteProperty(obj, prop) {
  delete obj[prop];
  return obj;
}

const data = { a : 1, b : 2};

console.log(deleteProperty(data, 'b'));