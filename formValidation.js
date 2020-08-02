console.log("Form Validation");

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cnfmpassword = document.getElementById("confirm-password");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const error_msg = formControl.querySelector("span");
  error_msg.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Email Validation
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
  //   return re.test(String(email).toLowerCase());
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `* ${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//Getfieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// check password match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    console.log(input1.value);
    console.log(input2.value);
    showError(input2, "Passwords do not match");
  }
}

// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, cnfmpassword]);

  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkLength(cnfmpassword, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, cnfmpassword);

  //   // username validations for null
  //   if (username.value === "") {
  //     showError(username, "* Username is required");
  //   } else {
  //     showSuccess(username);
  //   }
  //   // email validations for null
  //   if (email.value === "") {
  //     showError(email, "* Email is required");
  //   } else if (!isValidateEmail(email.value)) {
  //     showError(email, "* Please enter a valid email address");
  //   } else {
  //     showSuccess(email);
  //   }
  //   // password validations for null
  //   if (password.value === "") {
  //     showError(password, "* Password is required");
  //   } else {
  //     showSuccess(password);
  //   }
  //   //confirm validations for null
  //   if (confirm_password.value === "") {
  //     showError(confirm_password, "* Confirm Password is required");
  //   } else {
  //     showSuccess(confirm_password);
  //   }
});
