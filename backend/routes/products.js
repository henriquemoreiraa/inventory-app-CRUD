const express = require('express');
const router = express.Router();
const { getProducts, postProducts, putProducts, deleteProducts } = require('../controllers/ProductsControllers');

router.route('/').get(getProducts).post(postProducts);

router.route('/:id').put(putProducts).delete(deleteProducts);

module.exports = router;