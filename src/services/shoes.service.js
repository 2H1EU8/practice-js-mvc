import Shoes from '../model/shoes.model';
import api from '../api/shoes';

class ShoesService{
    constructor() {
        this.shoes = [];
        this.getAllShoes();
    }

    async getAllShoes() {
        try {
            let { data } = await api.get('/shoes');
            if (data) {
                data = await data.map((shoes) => new Shoes(shoes));
                this.shoes = data;
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