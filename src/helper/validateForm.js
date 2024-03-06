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

const inputValidationRules = {
  name: /.+/,
  description: /.+/,
  category: /.+/,
  brand: /.+/,
  'sku-id': /^\d+$/,
  amount: /^\d+$/,
  price: /^\d+(\.\d{1,2})?$/,
  'sale-price': /^\d+(\.\d{1,2})?$/,
};

const inputCollection = {
  name: 'Name',
  description: 'Description',
  category: 'Category',
  brand: 'Brand',
  'sku-id': 'ID',
  amount: 'Amount',
  price: 'Price',
  'sale-price': 'Sale Price',
};

const errorMsg = {
  require: ' cannot be empty!',
  invalid: 'please enter valid ',
  tooShort: ' must be longer than 5 characters.',
  negativeNum: 'value must be greater than 0.',
};

const handleValidate = (input, condition, injectClass) => {
  if (condition) {
    input.classList.remove(injectClass);
  } else {
    input.classList.add(injectClass);
  }
};

const checkInput = (e, eventType) => {
  const inputTarget = e.target;
  const inputValue = e.target.value;
  const inputName = e.target.id;

  switch (eventType) {
    case 'focus': {
      handleValidate(inputTarget, true, 'invalid');
      break;
    }
    case 'blur': {
      const inputValidate = inputValidationRules[inputName].test(inputValue);
      if (inputValue.trim().length === 0) {
        createToast('warning', inputCollection[inputName] + errorMsg.require);
        handleValidate(inputTarget, false, 'invalid');
      } else if (inputName === 'amount' || inputName === 'price' || inputName === 'sale-price' || inputName === 'sku-id') {
        if (isNaN(parseFloat(inputValue)) || parseFloat(inputValue) <= 0) {
          createToast('warning', errorMsg.negativeNum);
          handleValidate(inputTarget, false, 'invalid');
        } else {
          handleValidate(inputTarget, true, 'invalid');
        }
      } else {
        if (inputValue.length < 5) {
          createToast('warning', inputCollection[inputName] + errorMsg.tooShort);
          handleValidate(inputTarget, false, 'invalid');
        } else if (!inputValidate) {
          createToast('warning', errorMsg.invalid + inputCollection[inputName]);
          handleValidate(inputTarget, inputValidate, 'invalid');
        } else {
          handleValidate(inputTarget, true, 'invalid');
        }
      }
      break;
    }
    default:
      break;
  }
};



export function validateShoes(form) {
  const inputs = form.querySelectorAll('.restore-value');
  let isValid = true;
  inputs.forEach((input) => {
    checkInput({ target: input }, 'blur');
    if (input.classList.contains('invalid')) {
      isValid = false;
    }
  });
  inputs.forEach(input => input.classList.remove('invalid'))
  return isValid;
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
