import generateID from "../helper/sku_id";

class Shoes {
    constructor({
        sku_id = generateID(), brand, name, category, status, image,  amount, price} = {
    },)
    {
        this.sku_id = sku_id;
        this.brand = brand;
        this.name = name;
        this.category = category;
        this.status = status;
        this.image = image;
        this.amount = amount;
        this.price = price;
    }
}

export default Shoes;