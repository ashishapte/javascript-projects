// Strings and Methods 
const firstName = 'William';
const lastName = 'Johnson';
str = 'Hello there my name is Gargi';
tags = 'Web Development, Programming, Java, Python Developer'
let val;

val = firstName + lastName;

//concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

age = 36;
val = 'Hello my name is ' + firstName + ' and I am ' + age;

//Escaping
// val = 'That's awesome, I can't wait';  // error ... 
val = "That's awesome, I can't wait"; // solution 1 - use double quote
val = 'That\'s awesome, I can\'t wait'; // solution 2 - use escape char

// Length - its a property of string not method
val = firstName.length  // notice no parenthesis after length.

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[1]; // treating string as array

//indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);


// substring
val  = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3); // slice accepts -ve numbers starts from end.

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Gargi', 'Chinmayi');


// includes()
val = str.includes('Hello'); // gives true

val = str.includes('hello');  // gives false

console.log(val);