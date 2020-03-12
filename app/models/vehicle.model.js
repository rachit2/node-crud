const mongoose = require('mongoose');

const VehicleSchema = mongoose.Schema({
    name: String,
    number: Number,
    no_of_battery: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Vehicle', VehicleSchema);