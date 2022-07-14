const asyncHandler = require('express-async-handler');

const Product = require('../modules/productsModel');

const getProducts = asyncHandler( async (req, res) => {
    const product = await Product.find();

    res.status(200).json({ product: product });
});

const postProducts = asyncHandler( async (req, res) => {
    if (!req.body) {
        res.status(400);
        throw new Error('Please add the data!');
    };

    const product = await Product.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        number_in_stock: req.body.number_in_stock,
        categorie: req.body.categorie,
    });

    res.status(200).json(product);
});

const putProducts = asyncHandler( async (req, res) => {
    const productId = await Product.findById(req.params.id);

    if (!productId) {
        res.status(400);
        throw new Error('Product not fount');
    };

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });

    res.status(200).json(updatedProduct);
});

const deleteProducts = asyncHandler( async (req, res) => {
    const productId = await Product.findById(req.params.id);

    if (!productId) {
        res.status(400);
        throw new Error('Product not found');
    };

    await productId.remove();

    res.status(200).json({id: req.params.id});
});

const categorieDetail = asyncHandler( async (req, res) => {
    const productId = await Product.findById(req.params.id);

    if (!productId) {
        res.status(400);
        throw new Error('Product not found');
    };

    res.status(200).json(productId);
});

module.exports = {
    getProducts,
    postProducts,
    putProducts,
    deleteProducts,
    categorieDetail
}