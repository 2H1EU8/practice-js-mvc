import validateFormPassword from "../helper/validateForm";
import { createToast } from "./modules/handleToast";

class ChangePasswordView {
    constructor() {
        
    }

    changePassword(updatePassword){
        this.form = document.querySelector('form')
        this.form?.addEventListener('submit', (e) => {
            e.preventDefault()
            
            const password = document.getElementById('p').value
            const repassword = document.getElementById('p-c').value;

            const storedUser = localStorage.getItem('users');
            const user = storedUser ? JSON.parse(storedUser) : null;
                    
            if(validateFormPassword(user.firstName, user.lastName, password, user.email)){
                console.log(password, repassword);
                updatePassword(user.firstName, user.lastName, repassword, user.email, user.id)
                .then(()=>{
                    createToast('info', 'Change password sucessfully');
                    setTimeout(()=>{
                        window.location.pathname = "/product/table"
                    },2000)
                })
                .catch((err)=>{
                    console.error(err)
                    createToast('warning', 'Error. Please enter again');
                })
            }
        })
    }
}

export default ChangePasswordView