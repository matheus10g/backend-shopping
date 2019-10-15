const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    nickname: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        select: false,
        required: [true, 'Password is required'],
    },
    level: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true,
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

module.exports = mongoose.model('User', UserSchema);