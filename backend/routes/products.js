const express = require('express');
const router = express.Router();
const { getProducts, postProducts, putProducts, deleteProducts, categorieDetail } = require('../controllers/ProductsControllers');

router.route('/').get(getProducts).post(postProducts);

router.route('/:id').get(categorieDetail).put(putProducts).delete(deleteProducts);

module.exports = router;