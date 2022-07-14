const asyncHandler = require('express-async-handler');

const Category = require('../modules/categoriesModel');

const getCategories = asyncHandler( async (req, res) => {
    const category = await Category.find();

    res.status(200).json({ category: category });
});

const postCategories = asyncHandler( async (req, res) => {
    if(!req.body.name) {
        res.status(400);
        throw new Error('Please add a category name!');
    };

    const category = await Category.create({
        name: req.body.name,
    });

    res.status(200).json({ category: category });
});

const putCategories = asyncHandler( async (req, res) => {
    const categoryId = await Category.findById(req.params.id);

    if (!categoryId) {
        res.status(400);
        throw new Error('Category not fount');
    };

    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedCategory);
});

const deleteCategories = asyncHandler( async (req, res) => {
    const categoryId = await Category.findById(req.params.id);

    if (!categoryId) {
        res.status(400);
        throw new Error('Category not found');
    };

    await categoryId.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getCategories,
    postCategories,
    putCategories,
    deleteCategories,
}