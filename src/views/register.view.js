import { validateForm } from "../helper/validateForm";
import { createToast } from "./modules/handleToast";

class RegisterView {
    constructor() {
        console.log('view');
    }
    
    register(addUser) {
        this.form = document.querySelector('form')
        this.form?.addEventListener('submit', e => {
            e.preventDefault()
            const firstName = document.getElementById('firstName').value
            const lastName = document.getElementById('lastName').value
            const password = document.getElementById('password').value
            const email = document.getElementById('email').value

            const accepts = document.querySelectorAll('input[type]:checked')
            if (accepts?.length < 2) {
                createToast('warning', 'You need to agree policy');
                return
            }

            if (validateForm(firstName, lastName, password, email)) {
                addUser(firstName, lastName, email, password)
                .then(()=>{
                    createToast('info', 'Register successfully');
                    setTimeout(()=>{
                        window.location.href = '/login';
                    }, 5000);
                })
                .catch((err) => {
                    console.error(err);
                    createToast('error', 'Error registering user');
                })
            }
        })
    }
}

export default RegisterView
