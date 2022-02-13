// if statements and comparison operators

// if(something true){
//   do something
// } else {
//   do something else
// }

const id = 100;

// //Equal to
// if(id == 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT')
// }

// //Not Equal to
// if(id != 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // === operator comparing value and type
// const id1 = '100'; // now 100 is string

// if(id1 == 100){
//   console.log('CORRECT');
// }   // you are getting correct even though string is compared to number
//     // this is because == operator is ignoring type

// if(id1 === 100){
//   console.log('CORRECT');
// } else{
//   console.log('INCORRECT');
// }   // it is recommended to use === for comparison always.


// if(id1 !== 100){
//   console.log('CORRECT');
// } else{
//   console.log('INCORRECT');
// }   // it is recommended to use === for comparison always.

// Testing ID and printing if exists
// Problem is when id doesn't exists code breaks with uncaught syntax error
// try commenting out id 
// if(id){
//   console.log(`The ID is ${id}`);
// } else{
//   console.log('NO ID');
// }

// // Solution is to test type of id and compare it with undefined type

// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else{
//   console.log('NO ID');
// }


// Greater than and less than
// > , >= , < , <=
// if(id > 200){
//   console.log('CORRECT');
// } else{
//   console.log('INCORRECT');
// }

// const color = 'red';
// if(color == 'red'){
//   console.log('color is red');
// } else if(color == 'blue'){
//   console.log('color is blue');
// } else{
//   console.log('color is not red or blue');
// }

// Logical operators
const name = 'Steve';
const age = 14;

// AND &&
if(age > 0 && age < 10){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else{
  console.log(`${name} is an adult`);
}

// OR ||

if(age <16 || age > 65){
  console.log(`${name} is not allowed to run in the race`);
} else{
  console.log(`${name} is registered in the race`);
}


// TERNARY OPERATORS
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// without braces - works for single line instructions in if
// gives error for more sentences in if
if(id == 100)
  console.log('CORRECT');
  //console.log('CORRECT again');
else
  console.log('INCORRECT');
