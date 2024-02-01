import generateID from "../helper/sku_id";

class Shoes {
    constructor({
        id, brand, name, category, status, image,  amount, price, salePrice, description} = {
    })
    {
        this.id = id;
        this.brand = brand;
        this.name = name;
        this.category = category;
        this.status = status;
        this.image = image;
        this.amount = amount;
        this.price = price;
        this.salePrice = salePrice
        this.description = description
    }
}

export default Shoes;