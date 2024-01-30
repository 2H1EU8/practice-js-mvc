import Shoes from '../model/shoes.model';
import config from '../api/config';

class ShoesService{
    constructor() {
        this.shoes = [];
        this.getAllShoes();
    }

    async getAllShoes() {
        try {
            let { data } = await config.get('/shoes');
            if (data) {
                data = await data.map((shoes) => new Shoes(shoes));
                this.shoes = data;
            }
        } catch (error) {
            console.error('Error fetching shoes:', error);
            throw error;
        }
    }

    async getUser(email, password) {
        try {
            const res = await config.get('/users', {
                params: {
                    email, password
                }
            })
            const data = res.data[0]
            console.log(data);
            console.log(data.email, data.password);
            return data.email === email && password === password
        } catch (error) {
            console.error('Error fetching shoes:', error);
            throw error;
        }
    }

    async addUser(firstName, lastName, email, password) {
        try {
            config.post('/users', {firstName, lastName, email, password})
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
