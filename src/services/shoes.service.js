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
                    id: data.id,
                    notifications: data.notifications
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

    async addNoti(id, notifications){
        try {
            config.patch(`/users/${id}`, {notifications})
        } catch (error) {
            createToast('error', 'Error fetching user to notification');
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
            createToast('error', 'Error fetching all shoes');
        }
    }

    async getShoes(id) {
        try {
            const { data } = await config.get(`/shoes`, { params: { id } });
            return data[0];
        } catch (error) {
            createToast('error', 'Error fetching shoes by id');
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

    async searchShoes(name) {
        try {
            const { data } = await config.get('/shoes', {
                params: {
                    q: name
                }
            });

            return data;
        } catch (error) {
            createToast('error', 'Error searching shoes');
        }
    }

    async updateStatus(id, status){
        try {
            await config.patch(`/shoes/${id}`, {status});
        } catch(err){
            createToast('error', 'Error updating status');
        }
    }
}

export default ShoesService