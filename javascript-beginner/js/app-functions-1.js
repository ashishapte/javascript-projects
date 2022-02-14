// Functions

// DECLARATION

// function greet(){
//   console.log('Hello');
// }

// greet();

/*********************/

// function with one parameter and returning value

// function greet(firstName){
//   return 'Hello ' + firstName;
// }

// console.log(greet('John'))

/*********************/

// function greet(firstName, lastName){
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// console.log(greet('John', 'Doe'));


/*********************/
// function with default values - ES5
// function greet(firstName, lastName){
//   // in ES5 world you need to do something like this
//   if(typeof firstName === 'undefined'){firstName = 'John'}
//   if(typeof lastName === 'undefined'){lastName = 'Doe'}
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// console.log(greet()); // without default values, you see undefined.


/*********************/


// function with default values - ES6
function greet(firstName = 'John', lastName = 'Doe'){
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet()); // without default values, you see undefined.
/*********************/
