const person = {
  name: 'Ana',
  age: 26,
  address: {
    street: 'Rua ABC',
    number: 66
  }
};
console.log(person);

const { name, age } = person;
console.log(name, age);

const { lastName, happy = true } = person;
console.log(lastName, happy);

const { address: { street, number} } = person;
console.log(street, number);

const [n1, , n3, , n5, , n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota);

function random({ min = 0, max = 1000 } = {}) {
  const value = Math.random() * (max - min) + min;
  return Math.floor(value);
}

const obj = { max: 50, min: 40 };
console.log(random(obj));
console.log(random({ min: 50, max: 60 }));
console.log(random({ min: 950 }));
console.log(random({}));

function random2([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min];
  const value = Math.random() * (max - min) + min;
  return Math.floor(value);
}

console.log(random2([50, 40]));
console.log(random2([980]));
console.log(random2([]));
