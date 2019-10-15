const Product = require('../models/Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find({});

        return res.json(products);
    },

    async show(req, res) {
        const { id } = req.params;
        const product = await Product.findById(id);

        return res.json(product);
    },

    async store(req, res) {
        const { filename } = req.file;
        const { name, description, price } = req.body;

        const product = await Product.create({
            name,
            description,
            price,
            photo: filename,
        });

        return res.json(product);
    },
}