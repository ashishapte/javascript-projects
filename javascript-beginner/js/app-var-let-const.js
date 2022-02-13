// variables
// var, let, const
// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);  

// //Init Variable
// var greeting;
// console.log(greeting)
// console.log('greeting')  // what is the differenece in this line and above

// // letters , numbers , _, $
// // cannot start with number

// // multi word vars
// var firstName = 'John'; //Camel case
// var FirstName = 'Lee'; // Pascal case
// var first_name = 'Tom'; //Underscore
// var firstname = 'Rob'; // no convention followed.

// LET  - let has advantages over var in block level scopes
// let name = 'John';
// console.log(name);
// name = 'sarah'; // reassigned to another name
// console.log(name);

//CONST
const name = 'John';
console.log(name);
// cannot reassign
//name = 'Sarah'; // exception reported on console.
// have to assign value
//const greeting; // you see error on console

// Const with arrays and objects.
// you can modify values in arrays and objects
// you just can reassign the name of the object to some new object or array
// example
const person = {
  name: 'Ash',
  age: 40
}
person.name = 'Ashish';  // value for name key changed.
person.age = 42;
console.log(person)

// same thing with arrays
const numbers = [1,2,3,4,5];
numbers.push(6); // this is allowed.
console.log(numbers);

// numbers = [1,2,3,4,5,6,7]; // This is not allowed as its new entiry being assigned.