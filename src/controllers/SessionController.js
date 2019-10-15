const User = require('../models/User');

module.exports = {
    async show(req, res) {
        const { id } = req.params;

        const user = await User.findById(id);

        user.password = undefined;

        return res.json(user);
    },

    async store(req, res) {
        const { nickname, password } = req.body;

        let user = await User.findOne({ nickname: nickname });

        if (user && user.password != password) {
            return res.json({ error: 'Password invalid' });
        }

        if (user && user.password === password) {
            return res.json(user);
        }

        user = await User.create({ nickname, password });

        return res.json(user);
    },
}