import config from "../api/config";
import Shoes from "../model/shoes.model";
import { createToast } from "../views/modules/handleToast";

class ProductsService {
    constructor() {

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

    async updateStatus(productId, status){
        try {
            await config.patch(`/shoes/${productId}`, {status});
        } catch(err){
            createToast('error', 'Error updating status');
        }
    }
}

export default ProductsService