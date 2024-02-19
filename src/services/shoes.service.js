import config from "../api/config";
import Shoes from "../model/shoes.model";
import { createToast } from "../views/modules/handleToast";

class ShoesService{
    constructor(){
        this.user = [];
        this.shoes = []
    }
    
    async getUser(email, password) {
        try {
            const res = await config.get('/users', {
                params: {
                    email,
                    password
                }
            });

            const data = res.data[0];

            if (data && data.email === email && data.password === password) {
                return {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    id: data.id
                };
            } else {
                return null;
            }
        } catch (error) {
            createToast('error', 'Error fetching user');
        }
    }

    async addUser(firstName, lastName, email, password) {
        try {
            config.post('/users', {firstName, lastName, email, password})
        } catch (error) {
            createToast('error', 'Error fetching user');
        }
    }

    async changePassword(firstName,lastName, password, email, id){
        try{
            config.patch(`/users/${id}`, {firstName, lastName, password, email})
        }catch(err){
            createToast('error', 'Error fetching password again');
        }
    }

    async getAllShoes() {
        try {
            let { data } = await config.get('/shoes');
            if (data) {
                this.shoes = await data.map((shoes) => new Shoes(shoes));
                return this.shoes
            }
        } catch (error) {
            createToast('error', 'Error fetching shoes');
        }
    }


    async addShoes(shoes){
        try {
            const { data } = await config.post('/shoes', shoes);
            if (data) {
                this.shoes.push(new Shoes(shoes));
            }
        } catch (error) {
            createToast('error', 'Error adding shoes');
        }
    }

    async updateShoes(id, newShoes){
        try {
            const { data } = await config.patch(`/shoes/${id}`, newShoes)
            if(data){
                this.shoes = this.shoes.map((shoes) =>
                    shoes.id === id ? new Shoes({ ...shoes, ...newShoes }) : shoes,
                );
            }
        } catch (error) {
            createToast('error', 'Error updating shoes');
        }
    }

    async deleteShoes(id){
        try {
            const { data } = await config.delete(`/shoes/${id}`,{
                params:{
                    id
                }
            })
            if(data) {
                this.shoes = this.shoes.filter((shoes)=>shoes.id !== id)
            }
        } catch(error){
            createToast('error', 'Error deleting shoes')
        }
    }

    
}

export default ShoesService