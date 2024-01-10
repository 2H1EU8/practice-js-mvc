import generateID from '../helper/skuid';

class Shoes {
    constructor({
        id = generateID(), brand, product, category, status, amount, price, check,} = {
        check: false,
    },)
    {
        this.id = id;
        this.brand = brand;
        this.product = product;
        this.category = category;
        this.status = status;
        this.amount = amount;
        this.price = price;
        this.check = check;
    }
}

export default Shoes;
