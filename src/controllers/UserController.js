const bcrypt = require('bcryptjs');

const User = require('../models/User');

module.exports = {
    async show(req, res) {
        try {
            const { _id } = req.params;

            const user = await User.findById(_id);

            if (!user) {
                return res.json({ error: 'User not found' });
            }

            user.password = undefined;

            return res.json(user);
        } catch (err) {
            return res.json({ error: err });
        }
    },

    async store(req, res) {
        try {
            const { cpf, password } = req.body;

            let user = await User.findOne({ cpf }).select('+password');

            if (user && await !bcrypt.compare(password, user.password)) {
                return res.json({ error: 'Password invalid' });
            }

            if (user && await bcrypt.compare(password, user.password)) {
                user.password = undefined;

                return res.json(user);
            }

            user = await User.create({ cpf, password });

            user.password = undefined;

            return res.json(user);
        } catch (err) {
            return res.json({ error: err });
        }
    },
}