export function validateForm(firstName = '', lastName = '', password = '', email = '') {
    
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        alert('First name and last name should contain only characters.');
        return false;
    }

    if(!firstName.trim() || !lastName.trim()) {
        alert('Can not leave empty field first name or last name')
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters with at least one uppercase, one lowercase, one special character, and a number.');
        return false;
    }

    const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!emailRegex.test(email) || !email.trim()) {
        alert("Please enter a valid email address")
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
      console.log(p.value + p_c.value);

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


