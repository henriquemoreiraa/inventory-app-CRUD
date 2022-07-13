const asyncHandler = require('express-async-handler');

const Categorie = require('../modules/categoriesModel');

const getCategories = asyncHandler( async (req, res) => {
    const categorie = await Categorie.find();

    res.status(200).json({ categorie: categorie });
});

const postCategories = asyncHandler( async (req, res) => {
    if(!req.body.name) {
        res.status(400);
        throw new Error('Please add a categorie name!');
    };

    const categorie = await Categorie.create({
        name: req.body.name,
    });

    res.status(200).json({ categorie: categorie });
});

const putCategories = asyncHandler( async (req, res) => {
    const categorieId = await Categorie.findById(req.params.id);

    if (!categorieId) {
        res.status(400);
        throw new Error('Categorie not fount');
    };

    const updatedCategorie = await Categorie.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedCategorie);
});

const deleteCategories = asyncHandler( async (req, res) => {
    const categorieId = await Categorie.findById(req.params.id);

    if (!categorieId) {
        res.status(400);
        throw new Error('Categorie not found');
    };

    await categorieId.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getCategories,
    postCategories,
    putCategories,
    deleteCategories,
}