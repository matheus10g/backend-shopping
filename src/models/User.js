const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nickname: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        unique: false,
        required: [true, 'Password is required'],
    },
    level: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model('User', UserSchema);