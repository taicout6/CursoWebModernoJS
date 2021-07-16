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
