const bcrypt = require('bcryptjs');

const User = require('../models/User');

module.exports = {
    async show(req, res) {
        try {
            const { id } = req.params;

            const user = await User.findById(id);

            user.password = undefined;

            return res.json(user);
        } catch (err) {
            return res.json({ error: err });
        }
    },

    async store(req, res) {
        try {
            const { nickname, password } = req.body;

            let user = await User.findOne({ nickname: nickname }).select('+password');

            if (user && await !bcrypt.compare(password, user.password)) {
                return res.json({ error: 'Password invalid' });
            }

            if (user && await bcrypt.compare(password, user.password)) {
                user.password = undefined;

                return res.json(user);
            }

            user = await User.create({ nickname, password });

            user.password = undefined;

            return res.json(user);
        } catch (err) {
            return res.json({ error: err });
        }
    },
}