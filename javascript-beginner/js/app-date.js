let val;

const today = new Date();
let birthday = new Date('9-10-1981');
birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');  

// look at google date object javascript

// val = today;
// val = birthday;
val = today.getMonth();  // zero based, so Jan is 0, Feb is 1 and so on
val = today.getDate();
val = today.getDay(); // numberiacal representation of the day
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // amount of seconds passed since Jan 1st, 1970

birthday.setMonth(2) // Changing month for birthday to March (zero based)
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(2);
birthday.setMinutes(20);
birthday.setSeconds(40);

console.log(birthday);
console.log(val);