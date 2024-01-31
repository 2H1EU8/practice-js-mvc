import { validateForm } from "../helper/validateForm";


class ShoesController {
    constructor(userView, userService) {
        this.userView = userView;
        this.userService  = userService;
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.logout = this.logout.bind(this);
        this.login()
        this.register()
        this.logout()
        this.showTable()
    }

    login() {
        this.formLogin = document.querySelector('.form__right');
        this.formLogin?.addEventListener('submit', async(e) => {

            e.preventDefault();
            const email = document.querySelector('.form__right input[type="text"]').value;
            const password = document.querySelector('.form__right input[type="password"]').value;
            const accepts = document.querySelectorAll('input[type]:checked')

            if (accepts?.length < 1) {
                alert('You need to agree policy')
                return
            }

            try {
                const users = await this.userService.getUser(email, password);

                if (users) {

                    localStorage.setItem('users', JSON.stringify({
                        firstName: users.firstName,
                        lastName: users.lastName
                    }));


                    alert('Login successfully');


                    window.location.href = '/product/table';
                } else {
                    alert('User not found');
                }
            } catch (err) {
                console.log(err);
            }

        });
    }


    register() {
        this.form = document.querySelector('form')
        this.form?.addEventListener('submit', e => {

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

    logout() {
        this.selects = document.querySelector('.header__select')
        this.selects?.addEventListener('change', (e) => {
            const {value} = e.target

            if (value === 'logout') {
                localStorage.removeItem('users')
                window.location.pathname = '/login'
            }
        })
    }

    async showTable() {
        const shoes = await this.userService.getAllShoes().then(data => data)
        this.userView.bindTable(shoes)

    }
}

export default ShoesController