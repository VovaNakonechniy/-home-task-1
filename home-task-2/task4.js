const student = {
  greeting: 'Hello, Student!',

  getGreeting() {
    const greeting = 'Hello, Earth!';
    return this.greeting;
  }
}

console.log(student.getGreeting());

//Виведется 'Hello, Student!', тому що this повертає об'єкт 'student'