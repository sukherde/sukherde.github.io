const products = [];

module.exports = class Product {
    constructor(name, price, desc, id){
        this.name = name;
        this.price = price;
        this.desc = desc;
        this.id = id;
    }
    save(){
        products.push(this);
    }
    static getAll(){
        return products;
    }
}