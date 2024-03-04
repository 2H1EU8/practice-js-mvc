import { createToast } from "../views/modules/handleToast";

export function validateForm(firstName = '', lastName = '', password = '', email = '') {
  const validations = [
      { field: firstName, regex: /^[a-zA-Z]+$/, errorMessage: 'First name should contain only characters.' },
      { field: lastName, regex: /^[a-zA-Z]+$/, errorMessage: 'Last name should contain only characters.' },
      { field: firstName.trim(), errorMessage: 'First name cannot be empty.' },
      { field: lastName.trim(), errorMessage: 'Last name cannot be empty.' },
      { field: password, regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, errorMessage: 'Password must be at least 8 characters with at least one uppercase, one lowercase, one special character, and a number.' },
      { field: email.trim(), regex: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, errorMessage: 'Please enter a valid email address.' }
  ];
  let isValid = true;
  validations.forEach(validation => {
    switch (true) {
      case !validation.field:
          createToast('warning', validation.errorMessage);
          isValid = false;
          break;
      case validation.regex && !validation.regex.test(validation.field):
          createToast('warning', validation.errorMessage);
          isValid = false;
          break;
      default:
          break;
    }
  });
    return isValid;
}

export function validateShoes(){
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;
  const brand = document.getElementById('brand').value;
  const id = +document.getElementById('sku-id').value;
  const amount = document.getElementById('amount').value;
  const price = document.getElementById('price').value;
  const salePrice = document.getElementById('sale-price').value;

  const numericRegex = /^\d+$/;
  if(!numericRegex.test(id) || (!numericRegex.test(amount))){
    createToast('warning','Please enter number, can not use characters');
    return false;
  }

  if(!name.trim()||!description.trim() || !category.trim() || !brand.trim() || !amount.trim() || !price.trim() || !salePrice.trim()){
    createToast('warning','Please enter all fields in product detail');
    return false;
  }
  return true;
}

document.addEventListener('DOMContentLoaded', function () {
  // Password strength check
  var passwordInputs = document.querySelectorAll('.password');
  passwordInputs.forEach(function (input) {
    input.addEventListener('keyup', function () {
      var p_c = document.getElementById('p-c');
      var p = document.getElementById('p');

      if (p.value.length >= 8) {
        // Check for at least one uppercase letter
        var upperCaseRegex = /[A-Z]/;
        // Check for at least one lowercase letter
        var lowerCaseRegex = /[a-z]/;
        // Check for at least one special character
        var specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
        // Check for at least one number
        var numberRegex = /\d/;

        var isValid =
          upperCaseRegex.test(p.value) &&
          lowerCaseRegex.test(p.value) &&
          specialCharacterRegex.test(p.value) &&
          numberRegex.test(p.value);

        if (!isValid) {
          document.getElementById('valid').innerHTML = "Password does not meet the requirements";
        } else {
          document.getElementById('valid').innerHTML = '';
        }

        var strength = 'weak';
        if (p.value.length > 5 && p.value.match(/\d+/g)) {
          strength = 'medium';
        }
        if (p.value.length > 6 && p.value.match(/[^\w\s]/gi)) {
          strength = 'strong';
        }
        document.getElementById('strong').getElementsByTagName('span')[0].className = strength;
        document.getElementById('strong').getElementsByTagName('span')[0].innerHTML = strength;
      } else {
        document.getElementById('valid').innerHTML = "Password must be at least 8 characters long";
        document.getElementById('strong').getElementsByTagName('span')[0].className = '';
        document.getElementById('strong').getElementsByTagName('span')[0].innerHTML = '';
      }
    });
  });
});

function validateFormPassword() {
  const password = document.getElementById('p').value;
  const confirmPassword = document.getElementById('p-c').value;

  if (!password.trim() || !confirmPassword.trim()){
      createToast('warning','Please fill in all fields.');
      return false;
  }
  return true;
}

export default validateFormPassword
