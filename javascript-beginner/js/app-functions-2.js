// Functions



// // function with default values - ES6
// function greet(firstName = 'John', lastName = 'Doe'){
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// console.log(greet()); // without default values, you see undefined.

// Function Expression
// function is assigned to variable.
// note there is no name for the function, its anonymous
// if you like you can go ahead to name it e.g. function square(x){}

// for most of the cases expressions and declarations are similar
// but for advanced cases like hoisting, closure expression has advantages

const square = function(x = 3){
  return x * x;
};

// console.log(square(8));
// console.log(square());
/* ****************************** */

// Immediately invokable function expressions - IIFEs
// very useful in Module Pattern
// note its anonymous and called immediately
// (function(){
//   console.log('IIFE ran...');
// })();


// (function(name){
//   console.log(`Hello ${name}`);
// })('Ashish');

