function deleteProperty(obj, prop) {
  let data = {...obj};
  delete data[prop];
  return data;
}

const data = { a : 1, b : 2};

console.log(deleteProperty(data, 'b'));