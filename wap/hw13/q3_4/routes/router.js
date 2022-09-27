const express = require('express');
const productController = require('../controllers/productcontroller');

const options = {
    "caseSensitive": false,
    "strict": false
}

const router = express.Router(options);

router.get("/", productController.getAllProduct);
router.get("/addProduct", productController.addProduct);
router.post("/addToCart", productController.addToCart);

module.exports = router;