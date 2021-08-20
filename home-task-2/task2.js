let cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting: function() {
    console.log('Meow!');
  }
}


cat['name'] = 'Dog';

cat.greeting();

cat.color = 'black';

console.log(cat);