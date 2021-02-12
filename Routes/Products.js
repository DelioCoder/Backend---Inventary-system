const { Router } = require('express');
const router = Router();

const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../Controllers/ProductController');

router.route('/')
    .get(getProducts)
    .post(createProduct)

router.route('/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct);

module.exports = router;