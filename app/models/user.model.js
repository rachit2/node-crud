const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email :String,
    password :String,
    city :String,
    address :String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
