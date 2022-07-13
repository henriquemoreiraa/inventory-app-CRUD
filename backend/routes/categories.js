const express = require('express');
const router = express.Router();
const { getCategories, postCategories, putCategories, deleteCategories } = require('../controllers/CategoriesControllers');

router.route('/').get(getCategories).post(postCategories);

router.route('/:id').put(putCategories).delete(deleteCategories);

module.exports = router;