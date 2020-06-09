const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    avatar: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Profile', ProfileSchema);