const mongoose = require('mongoose');
// const { mongooseAssociation } = require('mongoose-association')
const UserSchema = mongoose.Schema({
    name: String,
    email :String,
    password :String,
    city :String,
    address :String
}, {
    timestamps: true
});

// mongooseAssociation(mongoose)

// UserSchema.hasMany('Battery')

module.exports = mongoose.model('User', UserSchema);
