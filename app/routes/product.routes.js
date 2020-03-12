pry = require('pryjs')
module.exports = (app) => {
    var Product = require('../controllers/product.controller.js');
    app.post('/product', Product.create);
}
