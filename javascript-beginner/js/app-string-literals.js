// Template Literals or Template Strings
const name = "John";
const age = 37;
const job = 'Web Development';
const city = 'Miami';

let html;
//without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';



// Or with new lines for clarity you would do it like this
html = '<ul>' +
       '<li>Name: ' + name + '</li>' + 
       '<li>Age: ' + age + '</li>' + 
       '<li>Job: ' + job + '</li>' + 
       '<li>City: ' + city + '</li>' +
       '</ul>';


// with template strings (es6)

// function
function hello(){
  return 'Hello There';
}

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>`;

  document.body.innerHTML = html;