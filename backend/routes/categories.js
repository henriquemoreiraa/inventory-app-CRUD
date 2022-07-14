const express = require('express');
const router = express.Router();
const { getCategories, postCategories, putCategories, deleteCategories, categorieDetail } = require('../controllers/categoriesControllers');

router.route('/').get(getCategories).post(postCategories);

router.route('/:id').get(categorieDetail).put(putCategories).delete(deleteCategories);

module.exports = router;