const mongoose = require('mongoose');
const BatterySchema = mongoose.Schema({
    name: String,
    user_id: Number

}, {
    timestamps: true
});
module.exports = mongoose.model('Battery', BatterySchema);