// Window object
// document object is part of window object as with many other things
// window is a global object in client side javascript.
// in server side nodejs  - javascript runs as a process on server
// and server is your runtime environment
// where as in client side java script, window or a browser is your environment.
// cool part is nodejs and chrome use same javascript engine called V8
// its only different environments.

// Window object has lot to it
// - Local storage
// - new fetch api
// - navigator object - which includes geo location
// - and methods like alert , prompt and confirm

// go to console.log and type windows and enter.
// you will see entire window object.

// console.log('test message');
// window.console.log('console is part of window object');

// Alert
// window.alert('Hello');
// alert('hello world');

// Prompt
// take in input
// const input = prompt();
// alert(input); // you may take whatever actions in promptwith input captured.


// Confirm
// usually used after delete action to confirm.
// if(confirm('Are you sure')){
//   console.log('YES'); // if you say yes then this block will run
// } else{
//   console.log('NO');
// }

let val;

// Outer height and width
val = window.outerHeight; // try changing window size and refresh
// you can create events and capture change in window and do differnt styling.
val = window.outerWidth; 
// Outer is end to end of the window

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;
// To demonstrate add following div to html. this will create a scrollbar
// <div style="margin-top:1000px;"></div>
// used in sites where animation happens when you scroll down 

// Location Object
val = window.location; // look at the output on console.
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // search parameters after ? key=value pairs
// you can extract these parameters from forms submitted by users and then do cool things with it.

// redirect
// window.location.href = 'http://google.com';


//reload - in this case it constantly reloads
// but you can make controlled use of this when you want to reload.
// window.location.reload(); 

// History object
// you can go to last history pages using index.
// window.history.go(-1)
val = window.history.length;

// Navigator object
// this is about Browser itself like chrome, firefox
// this is not about window or environment.
// named after netscape navigator famous old time browser.

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform; // so you check OS platform and do something if your code needs it.

val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);

//