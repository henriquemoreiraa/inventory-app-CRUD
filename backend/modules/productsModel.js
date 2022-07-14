const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    name : {
       type: String,
       required: true,  
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    number_in_stock: {
        type: Number,
        required: true,
    },
    categorie: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Categorie', 
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', productsSchema);