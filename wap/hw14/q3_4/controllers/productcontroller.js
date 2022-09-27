const Product = require('../models/productmodel');
const products = require('../config/productconfig');

exports.home = (req, res, next) => {
    let n = (req.session.items) ? req.session.items.length : 0;

    res.render("index", {
        products: products,
        n: n
    });
};

exports.product = (req, res, next) => {
    let curProduct = products.filter((p) => p.id == req.query.id)[0];
    let n = (req.session.items) ? req.session.items.length : 0;    

    res.render("product", {
        p: curProduct,
        n: n,
        i: req.query.id
    });
};

exports.cart = (req, res, next) => {
    let n = (req.session.items) ? req.session.items.length : 0;
    var result = [];
    if (req.session.items) {
        let items = req.session.items;        
        items.reduce(function(res, value) {
            if (!res[value.name]) {
                res[value.name] = { name: value.name, price: 0, price: value.price, description: value.description, pic: value.pic, id: value.id };
                result.push(res[value.name])
            } else {
                res[value.name].price += value.price;
            }
            
            return res;
            }, {}
        );    
    }

    res.render('cart', {
        items: result,
        n: n
    });
};

exports.saveProduct = (req, res, next) => {
    const prod = new Product(req.body.name, req.body.price, req.body.desc, req.body.id);
    prod.save();
    res.redirect('/');
}

exports.addProduct = (req, res, next) => {
    if(!(req.session.items)){
        req.session.items=[];
    }
    let curProduct = products.filter((p) => p.id == req.body.i)[0];
    req.session.items.push(curProduct);
    res.redirect('/');
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