pry = require('pryjs')
module.exports = (app) => {
    var Vehicle = require('../controllers/vehicle.controller.js');
    app.post('/vehicle', Vehicle.create);
}