const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    createdUser: {
        type: mongoose.SchemaTypes.ObjectId,
    },
    name: {
        type: String,
        required: [true, 'Name required'],
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: [true, 'Price required'],
    },
    photo: {
        type: String,
        required: [true, 'Photo required'],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', ProductSchema);