// Loops
// running same block of code with different values each time
// for , while, do-while - general loops
// array specific iteration - for each , map
// for in - used for interating through objects

// Looping over array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(i);
//   console.log(cars[i]);
// };

// for each
// for each takes in anonymous, self calling function
// anonymous function takes in three different things
// but only needs one thing - current iterator
// in this case we are taking singular name of the array
// as it rightly represents item in that array
// but you may see current or cur or something else as well.

// cars.forEach(function(car){
//   console.log(car);
// });

// forEach with two arguments
// cars.forEach(function(car, index){
//   console.log(`${index} : ${car}`);
// });


// forEach with Three arguments
// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });


// MAP
// Used to return something different
// return different array

// defining users array - which is array of objects
// const users = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karan'},
//   {id: 100, name: 'Ashish'} // try adding/deleting more users to this 
//   // you see ids are automatically reflected in map returned array.
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);


//For in loop
// used for looping through objects

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(x); // prints out keys
  console.log(`${x} : ${user[x]}`);
}