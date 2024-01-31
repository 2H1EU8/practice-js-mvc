import config from "../api/config";
import Shoes from "../model/shoes.model";

class ShoesService{
    constructor(){
        this.user = [];
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
                    email: data.email
                };
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }

    async addUser(firstName, lastName, email, password) {
        try {
            config.post('/users', {firstName, lastName, email, password})
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }

    async getAllShoes() {
        try {
            let { data } = await config.get('/shoes');
            if (data) {
                data = await data.map((shoes) => new Shoes(shoes));
                return data
            }
        } catch (error) {
            console.error('Error fetching shoes:', error);
            throw error;
        }
    }


    async add(shoes){
        try {
            const { data } = await api.post('/shoes', new Shoes(shoes));
            if (data) {
                this.shoes.push(new Shoes(shoes));
                this.commit();
            }
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

export default ShoesService