const user = {
  person: 'John',

  sayHi() {
    return `Hello, ${this.person}!`;
  },

  sayBye() {
    return `Goodbye, ${this.person}!`;
  }
}

console.log(user.sayHi());
//Цей метод виведе 'Hello, John!'

console.log(user.sayBye());
//А цей метод виведе 'Goodbye, John!'