const asyncHandler = require('express-async-handler');

const Products = require('../modules/productsModel');

const getProducts = asyncHandler( async (req, res) => {
    const product = await Products.find();

    res.status(200).json({ product: product });
});

const postProducts = asyncHandler( async (req, res) => {
    if (!req.body) {
        res.status(400);
        throw new Error('Please add the data!');
    };

    const product = await Products.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        number_in_stock: req.body.number_in_stock,
        categorie: req.body.categorie,
    });

    res.status(200).json(product);
});

const putProducts = asyncHandler( async (req, res) => {


    res.status(200).json({message: 'ola'});
});

const deleteProducts = asyncHandler( async (req, res) => {

    res.status(200).json({message: 'ola'});
});

module.exports = {
    getProducts,
    postProducts,
    putProducts,
    deleteProducts,
}