pry = require('pryjs')
module.exports = (app) => {
    var User = require('../controllers/user.controller.js');
    app.get('/users', User.beforeIndex);
    app.get('/users', User.index);
    app.get('/users',User.afterIndex);
}