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
    category: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category', 
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', productsSchema);