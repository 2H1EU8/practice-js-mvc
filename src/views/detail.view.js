import { toggleMenu } from "../helper/menu";
import { validateShoes } from "../helper/validateForm";
import Shoes from "../model/shoes.model";
import { createToast } from "./modules/handleToast";

class DetailView {
    constructor() {
        this.bindNotification(JSON.parse(localStorage.getItem('users')).notifications)
        toggleMenu()
    }

    async loadShoesSelected(getShoes) {
        try {
            const params = new URLSearchParams(window.location.search)
            const productId = params.get('productId')
            if (!productId) return 
            const shoes = await getShoes(productId);
            console.log(shoes);
            document.getElementById('name').value = shoes.name;
            document.getElementById('description').value = shoes.description;
            document.getElementById('category').value = shoes.category;
            document.getElementById('brand').value = shoes.brand;
            document.getElementById('sku-id').value = shoes.id;
            document.getElementById('amount').value = shoes.amount;
            document.getElementById('price').value = shoes.price;
            document.getElementById('sale-price').value = shoes.salePrice;
            const imagePreview = document.querySelectorAll(".img-preview");
            imagePreview.forEach(img => {
                img.src = shoes.image;
            })
        } catch(err){
            // createToast('error', 'Error loading selected shoes');
        }
    }

    async bindAddShoes(addShoes, addNoti, getShoes) {
        const addShoesButton = document.getElementById('btn-add')
        addShoesButton?.addEventListener('click', async () => {
            const name = document.getElementById('name').value;
            const description = document.getElementById('description').value;
            const category = document.getElementById('category').value;
            const brand = document.getElementById('brand').value;
            const id = +document.getElementById('sku-id').value;
            const amount = document.getElementById('amount').value;
            const price = document.getElementById('price').value;
            const salePrice = document.getElementById('sale-price').value;
            const image = document.getElementById("imageUpload");
            const productForm = document.querySelector('.product__form')
            if (validateShoes(productForm)) {
                const data =  await getShoes(id);
                console.log(data);
                if(data){
                    createToast('error', 'ID already existed');
                    return 
                }
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
                    addShoes(new Shoes({brand, name, category, status: '', id, salePrice, amount, price, description, image: imageUrl}))
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
                    user.notifications.push(`You added ${name} at ${currentTime}`);
                    console.log(user);
                    addNoti(user.id, user.notifications);
                    localStorage.setItem('users', JSON.stringify(user));
                })
            }else{
                createToast('error', 'Error adding shoes');
            }
        })
    }

    bindDeleteShoes(deleteShoes){
        const deleteShoesButton = document.getElementById('btn-delete');
        deleteShoesButton?.addEventListener('click', async ()=>{
            const id = Number(document.getElementById('sku-id').value);    
            const productForm = document.querySelector('.product__form')
            if(validateShoes(productForm)){
                deleteShoes(id);
                createToast('info', 'Delete shoes succesfully')
                setTimeout(()=>{
                    window.location.href = '/product/table';
                }, 3000)
            }
        })
    }

    cancelShoes(){
        const cancelShoesButton = document.getElementById('btn-cancel');
        if (cancelShoesButton) {
            cancelShoesButton.addEventListener('click', () => {
                this.resetForm();
            });
        }
    }

    resetForm() {
        const inputs = document.querySelectorAll('.restore-value');
        inputs.forEach(input => {
            if (!input.dataset.oldValue){
                input.dataset.oldValue = input.value;
            }
            input.placeholder = input.dataset.oldValue || "Fill in here";
        });
    }

    updateShoes(update) {
        const updateShoesButton = document.getElementById('btn-update');
        updateShoesButton?.addEventListener('click',() =>{
            const name = document.getElementById('name').value;
            const description = document.getElementById('description').value;
            const category = document.getElementById('category').value;
            const brand = document.getElementById('brand').value;
            const id = +document.getElementById('sku-id').value;
            const amount = document.getElementById('amount').value;
            const price = document.getElementById('price').value;
            const salePrice = document.getElementById('sale-price').value;
            const image = document.getElementById("imageUpload");
            const productForm = document.querySelector('.product__form')

            if(validateShoes(productForm)){
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
                    update(id, new Shoes({id, brand, category, description, name, amount, price, salePrice, image: imageUrl}));
                    createToast('info', 'Update shoes succesfully')
                    setTimeout(()=>{
                        window.location.href = '/product/table';
                    }, 2000);
                })
            }
            else {
                createToast('error', 'Error updating table')
            }
        })
    }

    uploadImage() {
        const image = document.getElementById("imageUpload");
        const imagePreview = document.querySelectorAll(".img-preview");

        image?.addEventListener("change", (e) => {
            if (e.target.files.length) {
                const src = URL.createObjectURL(e.target.files[0]);
                imagePreview.forEach(img =>{
                    img.src = src;
                })
            }
        });
    }

    bindNotification(notifications = []){
        const updateNoti = document.querySelector(".noti-list");
        const notiList = notifications.map(noti =>{
            return `<p class="noti-para">${noti}</p>`
        }).join('')
        updateNoti.innerHTML = notiList;
    }
}

export default DetailView