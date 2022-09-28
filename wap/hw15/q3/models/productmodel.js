const products = [];

module.exports = class Product {
    constructor(name, price, desc, id, pic){
        this.name = name;
        this.price = price;
        this.description = desc;
        this.id = id;
        this.pic = pic;
    }
    save(){
        products.push(this);
    }
    static getAll(){
        return products;
    }
}