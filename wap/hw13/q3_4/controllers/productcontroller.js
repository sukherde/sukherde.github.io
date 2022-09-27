const Product = require('../models/productmodel');


exports.saveProduct = (req, res, next) => {
    const prod = new Product(req.body.name, req.body.price, req.body.desc, req.body.id);
    prod.save();
    res.redirect('/');
}

exports.addProduct = (req, res, next) => {
    res.render(
        "product", 
        {
            title: "Add a product"
        }  
    )
}

exports.getAllProduct = (req, res, next) => {
    res.render(
        "cart", 
        {
            products : Product.getAll()                  
        }  
    )
};

exports.addToCart = (req, res, next) => {

    const prod = new Product(req.body.name, req.body.price, req.body.description, req.body.id);
    prod.save();
    res.redirect('/');
};