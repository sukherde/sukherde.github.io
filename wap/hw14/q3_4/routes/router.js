const express = require('express');
const productController = require('../controllers/productcontroller');

const options = {
    "caseSensitive": false,
    "strict": false
}

const router = express.Router(options);

router.get("/", productController.home);
router.get("/p", productController.product);
router.post("/addProduct", productController.addProduct);
router.get("/cart", productController.cart);
router.post("/addToCart", productController.addToCart);

module.exports = router;