import { validateForm } from "../helper/validateForm";
import Header from "../views/layouts/header";

class UserController {
    constructor(userView, userService) {
        this.userView = userView;
        this.userService  = userService;
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.login()
        this.register()
        
    }

    login() {
        this.formLogin = document.querySelector('.form__right');
        this.formLogin?.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.querySelector('.form__right input[type="text"]').value;
            const password = document.querySelector('.form__right input[type="password"]').value;
            const accepts = document.querySelectorAll('input[type]:checked')

            if (accepts?.length < 1) {
                alert('You need to agree policy')
                return
            }

            this.userService.getUser(email, password)
                .then(res => {
                    if (res) {
                        alert('Login successfully');
                        window.location.href = '/product/table';
                    } else {
                        alert("User not found");
                    }
                })
                .catch(err => console.log(err));
        });
    }


    register() {
        this.form = document.querySelector('form')
        console.log(this);
        this.form.addEventListener('submit', e => {

            e.preventDefault()
            const firstName = document.getElementById('firstName').value
            const lastName = document.getElementById('lastName').value
            const password = document.getElementById('password').value
            const email = document.getElementById('email').value

            const accepts = document.querySelectorAll('input[type]:checked')
            if (accepts?.length < 2) {
                alert('You need to agree policy')
                return
            }

            if (validateForm(firstName, lastName, password, email)) {
                this.userService.addUser(firstName, lastName, email, password)
                .then(()=>{
                    alert("Register successfully")
                    window.location.href = '/login';
                })
                .catch(err => {
                    console.error(err);
                    alert('Error registering user')
                })
            }
            
        })
    }

}

export default UserController