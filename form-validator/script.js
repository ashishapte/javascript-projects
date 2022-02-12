const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show Input Error Message
function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//Show Success outline
function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check email validity
function checkEmail(input) {
  const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  // return re.test(String(email).toLowerCase());
  if(re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr){
  inputArr.forEach(function(input){
    if(input.value.trim() === ''){
      console.log(input.id);
      showError(input, `${getFieldName(input)} is required`);
    }
  })
}

function checkLength(input, min, max){
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

function checkPasswordsMatch(input1, input2){
  if(input1.value !== input2.value) {
    showError(input2, 'Passwords must match');
  } else {
    showSuccess(input2);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  checkRequired([username, email, password, password2]);
  checkLength(username, 4, 15);
  checkLength(password, 6, 20);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
})