import Shoes from "../model/shoes.model";

class ShoesController{

    async addShoes(shoeData) {
        try {

            if (!shoeData) {
                throw new Error('Invalid shoes data provided');
            }

            const newShoe = new Shoes(shoeData);
            this.Shoes.push(newShoe);

            return newShoe;

        } catch (error) {
            console.error('Error', error);
            throw error; 
        }
    }
}

export default ShoesController

