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

                    const {password, ...others} = users

                    localStorage.setItem('users', JSON.stringify(others));

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
                .catch((err) => {
                    console.error(err);
                    alert('Error registering user')
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
                    alert('Change password sucessfully');
                    window.location.pathname = "/product/table"
                })
                .catch((err)=>{
                    console.error(err)
                    alert('Error. Please enter again');
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
        addShoes.addEventListener('click', async () => {
            const name = document.getElementById('name').value;
            const description = document.getElementById('description').value;
            const category = document.getElementById('category').value;
            const brand = document.getElementById('brand').value;
            const id = +document.getElementById('sku-id').value;
            const amount = document.getElementById('amount').value;
            const price = document.getElementById('price').value;
            const salePrice = document.getElementById('sale-price').value;
            const image = document.getElementById('imageUpload');

            if (!validateShoes()) {
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
                        alert("Add shoes successfully")
                        window.location.href = '/product/table';
                    })
                    .catch(err => {
                        console.error(err);
                        alert('Error adding shoes')
                    })
                })
            } else {
                alert("Error");
            }
        })
    }

    // async updateTable(id, newShoes) {
    //     try {
    //         await this.userService.updateShoes(id, newShoes);
    //         alert('Update shoes successfully');
    //         window.location.href = '/product/table';
    //     } catch (error) {
    //         console.error('Error updating shoes:', error);
    //         alert('Error updating shoes');
    //     }
    // }


    async showTable() {
        const user = localStorage.getItem('users')
        let shoes = []
        if (user) {
            shoes = await this.userService.getAllShoes().then(data => data)
        }
        this.userView.bindTable(shoes)
        
        // Add event listener for checkbox clicks
        // const checkboxes = document.querySelectorAll('.product-checkbox');
        // checkboxes.forEach(checkbox => {
        //     checkbox.addEventListener('change', () => {
        //         this.updateTableBasedOnCheckboxes();
        //     });
        // });
    } 

    // updateTableBasedOnCheckboxes() {
    //     const checkedCheckboxes = document.querySelectorAll('.product-checkbox:checked');
    //     const selectedProductIds = Array.from(checkedCheckboxes).map(checkbox => {
    //         const row = checkbox.closest('.product-row');
    //         return row.dataset.productId;
    //     });

    // }
}

export default ShoesController