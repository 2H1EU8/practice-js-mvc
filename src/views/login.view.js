import { createToast } from "./modules/handleToast";

class LoginView {
    constructor() {
        
    }

    login(getUser) {
        this.formLogin = document.querySelector('.form__right');
        this.formLogin?.addEventListener('submit', async(e) => {
            e.preventDefault();
            const email = document.querySelector('.form__right input[type="text"]').value;
            const password = document.querySelector('.form__right input[type="password"]').value;
            const accepts = document.querySelectorAll('input[type]:checked')

            if (accepts?.length < 1) {
                createToast('warning', 'You need to agree policy');
                return
            }

            try {
                const users = await getUser(email, password);
                if (users) {
                    const {password, ...others} = users
                    console.log(others);
                    localStorage.setItem('users', JSON.stringify(others));
                    window.location.href = '/product/table';
                } else {
                    createToast('error', 'User not found')
                }
            } catch (err) {
                console.log(err);
            }

        });
    }
}

export default LoginView