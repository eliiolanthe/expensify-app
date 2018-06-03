// Obj destructuring
const person = {
  name: 'Eli',
  age: 35,
  location: {
    city: 'BG',
    temp: 20
  }
};

const {name: firstname = 'No one', age = 10} = person;

console.log(`name is ${firstname} and age is ${age}`);

const {city, temp: temperature} = person.location;

console.log(`city is ${city} and temperature is ${temperature}`);

//Array dest
const address = ['122 Juniper Str', 'Philadelphia', 'Pennsylvania', 'USA'];
const [street, town, state, country] = address;
//const [, , , country] = address;
console.log(`You are in ${town}, ${state}.`);
//console.log(`You are in ${town}, ${state}.`);