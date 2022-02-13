let val;
// changing other data types to Strings
// Number to string
val = 5;
val = String(5);
val = String(4+4);
// Bool to String
val = String(true);

//Date to string
val = String(new Date());

//array to string
val = String([1,2,3,4,5]);

//toStrnig() function
val = (5).toString();
val = (true).toString();

//output
console.log(val);
console.log(typeof val);
console.log(val.length);
