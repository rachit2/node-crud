pry = require('pryjs')
module.exports = (app) => {
    var Battery = require('../controllers/battery.controller.js');
    app.post('/battery', Battery.create);
}