const Product = require('../models/productmodel');

let products = [
    new Product("MacBook 13 Air", 899, "MacBook 13 inch Air", 1000, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gallery3-20201110?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1632937845000"),
    new Product("MacBook 13 Pro", 1099, "MacBook 13 inch Pro", 1001, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-gallery1-202206?wid=4000&hei=3074&fmt=jpeg&qlt=90&.v=1653439170882"),
    new Product("MacBook 14 Pro", 1399, "MacBook 14 inch Pro", 1002, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-gallery1-202110?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1632796170000")
];

module.exports = products;