// Arrays and Array Methods
// two ways to create arrays
const numbers = [45, 43, 112, 56, 78, 99, 44];
const numbers2 = new Array(10, 23, 45, 67, 80);
const fruit = ['Apple', 'Pear', 'Banana', 'Orange'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()]

// let val;
// // Get length of the array
// val = numbers.length

// // check if it is an array
// val = Array.isArray(numbers);

// //get single value
// val = numbers[3];

// // Mutating arrays
// // adding onto end
// numbers.push(250);
// // adding onto front
// numbers.unshift(120);
// //Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();

// // Splice values ( delete values from array )
// numbers.splice(1,3);

// numbers.reverse();

// // Concatinating arrays
// val = numbers.concat(numbers2);

// // Sorting array
// val = fruit.sort();
// val = numbers.sort(); // incorrect answer as its sorting by position

// // use compare function to sort numbers
// val = numbers.sort(function(x, y){
//   return x - y;
// })

// // reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// })

// Find
function under50(num){
  return num < 50;
}

// Find
function over50(num){
  return num > 50;
}

val = numbers.find(under50);
val = numbers.find(over50);
console.log(numbers);
console.log(val);