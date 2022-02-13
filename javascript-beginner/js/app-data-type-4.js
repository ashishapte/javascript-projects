// Javascript internally changing data type
// type coersion ??

// const val1 = 5;   // uncomment and check while doing exercise
// const val2 = 6;
// const sum = val1 + val2;

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;// this gives 56. So its converting 6 to string and concatinating.

//output
console.log(sum);
console.log(typeof sum);
// console.log(val.length); commenting out string function
console.log(sum.toFixed(2)); // toFixed only works on numbers
