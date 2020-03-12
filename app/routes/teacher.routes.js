pry = require('pryjs')
module.exports = (app) => {
    var Teacher = require('../controllers/teacher.controller.js');
    app.get('/teachers', Teacher.beforeIndex);
    app.get('/teachers', Teacher.index);
    app.get('/teachers', Teacher.afterIndex);

}