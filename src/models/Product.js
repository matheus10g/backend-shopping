const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    createdUser: {
        type: mongoose.SchemaTypes.ObjectId,
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    photo: {
        type: String,
        required: [true, 'Photo is required'],
    },
});

module.exports = mongoose.model('Product', ProductSchema);