const Product = require('../models/Product');
const User = require('../models/User');

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
        const { _id } = req.headers;
        const { filename } = req.file;
        const { name, description, price } = req.body;

        let user = await User.findById(_id);

        if (!user) {
            return res.json({ error: 'User not found' });
        }

        if (user.level != 1) {
            return res.json({ error: 'Without permission' });
        }

        const product = await Product.create({
            createdUser: _id,
            name,
            description,
            price,
            photo: filename,
        });

        return res.json(product);
    },
}