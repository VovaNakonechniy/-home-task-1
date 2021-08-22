function Vector(arr) {
  this.value = arr;

  this.add = vector2 => {
    if(this.value.length === vector2.value.length) {
      let newVector = vector2.value.map((element, key) => {
        return this.value[key] + element;
      });
      return new Vector(newVector);
    } else {
      return 'Error! Vectors have different lengths';
    }
  }

  this.subtract = vector2 => {
    if(this.value.length === vector2.value.length) {
      let newVector = vector2.value.map((element, key) => {
        return this.value[key] - element;
      });
      return new Vector(newVector);
    } else {
      return 'Error! Vectors have different lengths';
    }
  }

  this.dot = vector2 => {
    if(this.value.length === vector2.value.length) {
      return vector2.value.reduce((sum, element, key) => {
        return sum + this.value[key] * element;
      }, 0);
    } else {
      return 'Error! Vectors have different lengths';
    }
  }
}



const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);



console.log(a.add(b));

console.log(a.subtract(b));

console.log(a.dot(b));

console.log(a.add(c));