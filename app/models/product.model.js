const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    base_price: Number,
    penalty_price:Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);