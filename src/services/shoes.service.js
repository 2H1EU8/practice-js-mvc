import config from "../api/config";
import Shoes from "../model/shoes.model";

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
            console.error('Error fetching user:', error);
        }
    }

    async addUser(firstName, lastName, email, password) {
        try {
            config.post('/users', {firstName, lastName, email, password})
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }

    async changePassword(firstName,lastName, password, email, id){
        console.log(firstName, lastName, password, email);
        try{
            config.patch(`/users/${id}`, {firstName, lastName, password, email})
        }catch(err){
            console.error('Error fetching password again:', err)
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
            console.error('Error fetching shoes:', error);
        }
    }


    async addShoes(shoes){
        try {
            console.log(shoes);
            const { data } = await config.post('/shoes', shoes);
            if (data) {
                this.shoes.push(new Shoes(shoes));
            }
        } catch (error) {
            console.error('Error adding shoes:', error);
        }
    }
}

export default ShoesService