class ShoesController {
    constructor(userView, userService) {
        this.userView = userView;
        this.userService  = userService;

        const storedUser = localStorage.getItem('users');
        const user = storedUser ? JSON.parse(storedUser) : null;
        // this.bindNotification(user.notifications);     
    }   

    // changePassword(){
    //     this.form = document.querySelector('form')
    //     this.form?.addEventListener('submit', (e) => {
    //         e.preventDefault()
            
    //         const password = document.getElementById('p').value
    //         const repassword = document.getElementById('p-c').value;

    //         const storedUser = localStorage.getItem('users');
    //         const user = storedUser ? JSON.parse(storedUser) : null;
                    
    //         if(validateFormPassword(user.firstName, user.lastName, password, user.email)){
    //             console.log(password, repassword);
    //             this.userService.changePassword(user.firstName, user.lastName, repassword, user.email, user.id)
    //             .then(()=>{
    //                 createToast('info', 'Change password sucessfully');
    //                 setTimeout(()=>{
    //                     window.location.pathname = "/product/table"
    //                 })
    //             })
    //             .catch((err)=>{
    //                 console.error(err)
    //                 createToast('warning', 'Error. Please enter again');
    //             })
    //         }
    //     })
    // }

    //  logout() {
    //     this.selects = document.querySelector('.header__select')
    //     this.selects?.addEventListener('change', (e) => {
    //         const {value} = e.target

    //         if (value === 'logout') {
    //             localStorage.removeItem('users')
    //             window.location.pathname = '/login'
    //         }

    //         if(value === 'changePassword'){
    //             window.location.pathname = '/change-password'
    //         }
    //     })
    // }

}

export default ShoesController