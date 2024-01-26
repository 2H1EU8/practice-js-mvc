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
