import generateID from "../helper/sku_id";

class Shoes {
    constructor({
        id = generateID(), brand, product, category, status, amount, price} = {
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
    }
}

export default Shoes;