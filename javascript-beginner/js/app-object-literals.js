// Object Literals

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    'city': 'Miami',
    'state': 'FL'
  },
  getBirthYear: function(){
    return 2022 - this.age;
  }
}

let val;
val = person;
val = person.firstName; // finding value for firstName
val = person['lastName']; // another syntax. recommended is with dot.
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.getBirthYear();

console.log(val);


// arrays of objects
const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 50},
  {name: 'Nancy', age: 50},
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}