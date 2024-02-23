import validateFormPassword, { validateForm } from "../helper/validateForm";
import Shoes from "../model/shoes.model";
import { validateShoes } from "../helper/validateForm";
import { createToast } from "../views/modules/handleToast";


class ShoesController {
    constructor(userView, userService) {
        this.userView = userView;
        this.userService  = userService;
        this.login()
        this.register()
        this.logout()
        this.showTable()
        this.changePassword()
        this.getTable()
        this.updateTable()
        this.deleteTable()

        const storedUser = localStorage.getItem('users');
        const user = storedUser ? JSON.parse(storedUser) : null;
        this.bindNotification(user.notifications);
        
    }

    login() {
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
                const users = await this.userService.getUser(email, password);

                if (users) {

                    const {password, ...others} = users

                    console.log(others);

                    localStorage.setItem('users', JSON.stringify(others));
                    
                    createToast('info', 'Login successfully');

                    setTimeout(()=>{
                        window.location.href = '/product/table';
                    }, 5000);

                } else {
                    createToast('error', 'User not found')
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
                createToast('warning', 'You need to agree policy');
                return
            }

            if (validateForm(firstName, lastName, password, email)) {
                this.userService.addUser(firstName, lastName, email, password)
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

    changePassword(){
        this.form = document.querySelector('form')
        this.form?.addEventListener('submit', (e) => {
            e.preventDefault()
            
            const password = document.getElementById('p').value
            const repassword = document.getElementById('p-c').value;

            const storedUser = localStorage.getItem('users');
            const user = storedUser ? JSON.parse(storedUser) : null;
                    
            if(validateFormPassword(user.firstName, user.lastName, password, user.email)){
                console.log(password, repassword);
                this.userService.changePassword(user.firstName, user.lastName, repassword, user.email, user.id)
                .then(()=>{
                    createToast('info', 'Change password sucessfully');
                    setTimeout(()=>{
                        window.location.pathname = "/product/table"
                    })
                })
                .catch((err)=>{
                    console.error(err)
                    createToast('warning', 'Error. Please enter again');
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

            if(value === 'changePassword'){
                window.location.pathname = '/change-password'
            }
        })
    }

    getTable(){
        const addShoes = document.getElementById('btn-add')
        const image = document.getElementById("imageUpload");
        console.log(image);
        const imagePreview = document.querySelectorAll(".img-preview");

        console.log(imagePreview);
        image.addEventListener("change", (e) => {
            console.log(e);
            if (e.target.files.length) {
                const src = URL.createObjectURL(e.target.files[0]);
                imagePreview.forEach(img =>{
                    img.src = src;
                })
            }
        });
        addShoes.addEventListener('click', async (e) => {
            const name = document.getElementById('name').value;
            const description = document.getElementById('description').value;
            const category = document.getElementById('category').value;
            const brand = document.getElementById('brand').value;
            const id = +document.getElementById('sku-id').value;
            const amount = document.getElementById('amount').value;
            const price = document.getElementById('price').value;
            const salePrice = document.getElementById('sale-price').value;
            const image = document.getElementById("imageUpload");
            
            
            if (validateShoes()) {
                var form = new FormData();
                form.append("image", image.files[0])
                
                fetch("https://api.imgbb.com/1/upload?key=12bf5830553fd071836060cc5f97b484", {
                    method : "POST",
                    body : form 
                })
                .then(res => res.json())
                .then(data => {
                    let imageUrl = data.data.url;
                    return imageUrl
                })
                .then((imageUrl) => {
                    this.userService.addShoes(new Shoes({brand, name, category, status: '', id, salePrice, amount, price, description, image: imageUrl}))
                    .then(()=>{
                        createToast('info', "Add shoes successfully");
                        setTimeout(()=>{
                            window.location.href = '/product/table';
                        }, 3000);
                    })
                    .catch(err => {
                        console.error(err);
                        createToast('error','Error adding shoes');
                    })
                    const storedUser = localStorage.getItem('users');
                    const user = storedUser ? JSON.parse(storedUser) : null;
                    const currentTime = new Date().toLocaleString(); 
                    console.log(user);
                    user.notifications.push(`You added product at ${currentTime}`);
                    console.log(user);
                    this.userService.addNoti(user.id, user.notifications);
                    localStorage.setItem('users', JSON.stringify(user));
                })
            } else {
                createToast('error', 'Error')
            }
        })
    }

    bindNotification(notification =[]){
        const updateNoti = document.querySelector(".noti-list");
        const notiList = notification.map(noti =>{
            return `<p class="noti-para">${noti}</p>`
        }).join('')
        updateNoti.innerHTML = notiList;
    }

    updateTable() {
        const updateShoes = document.getElementById('btn-update');
        updateShoes.addEventListener('click', (e)=>{
            const name = document.getElementById('name').value;
            const description = document.getElementById('description').value;
            const category = document.getElementById('category').value;
            const brand = document.getElementById('brand').value;
            const id = +document.getElementById('sku-id').value;
            const amount = document.getElementById('amount').value;
            const price = document.getElementById('price').value;
            const salePrice = document.getElementById('sale-price').value;
            const image = document.getElementById("imageUpload");

            if(validateShoes()){
                var form = new FormData();
                form.append("image", image.files[0])
                
                fetch("https://api.imgbb.com/1/upload?key=12bf5830553fd071836060cc5f97b484", {
                    method : "POST",
                    body : form 
                })
                .then(res => res.json())
                .then(data => {
                    let imageUrl = data.data.url;
                    return imageUrl
                })
                .then((imageUrl) => {
                    this.userService.updateShoes(id, new Shoes({id, brand, category, description, name, amount, price, salePrice, image: imageUrl}));
                    createToast('info', 'Update shoes succesfully')
                    setTimeout(()=>{
                        window.location.href = '/product/table';
                    }, 3000)
                })
            }
            else {
                createToast('error', 'Error updating table')
            }
        })
    }

    deleteTable(){
        const deleteShoes = document.getElementById('btn-delete');
        deleteShoes.addEventListener('click', (e)=>{
            const id = +document.getElementById('sku-id').value;    
            // if(validateShoes()){
                this.userService.deleteShoes(id);
                createToast('info', 'Delete shoes succesfully')
                setTimeout(()=>{
                    window.location.href = '/product/table';
                }, 3000)
                
            // }
            // else {
            //     createToast('error', 'Error deleting table')
            // }
        })
    }


    async showTable() {
        const user = localStorage.getItem('users')
        let shoes = []
        if (user) {
            shoes = await this.userService.getAllShoes().then(data => data)
        }
        this.userView.bindTable(shoes)
        
        const tableRows = document.querySelectorAll('.product-row');
        tableRows.forEach(row => {
            row.addEventListener('click', e => {
                this.id = e.target.closest('.product-row').id;
                window.location.href = '/product/detail';
            })
        })
    }     
    
}

export default ShoesController