// Type conversion continues...

let val;
// changing strings to Numbers
// val = '5';  // toFixed doesn't work on strings.
val = Number('5');  // converted string to number
val = Number(true); // boolean to number gives 1
val = Number(false); // boolean to number. false is 0
val = Number(null); // null to number. gives 0
val = Number('hello'); // string to number . gives NaN -  Not a number
val = Number([1,2,3]); // you get a NaN

val = parseInt('100'); // parseInt function converts strings to Numbers if possible
val = parseInt('100.30') // still you get 100, as parseInt converts to Integers
val = parseFloat('100.40'); // converts to float.

//output
console.log(val);
console.log(typeof val);
// console.log(val.length); commenting out string function
console.log(val.toFixed(2)); // toFixed only works on numbers
