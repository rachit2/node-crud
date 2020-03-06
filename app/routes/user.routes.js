module.exports = (app) => {
    var User = require('../controllers/user.controller.js');

//     router.get('/', function(req, res) {
//   res.redirect('/catalog');
// });

    app.post('/users', User.create);
    // app.get('/users', users.findAll);
    app.get('/users', User.index)
    app.get('/users/:userId', User.edit);
    app.get('/users/:userId', User.edit);
    app.post('/users/:userId', User.update)
    // app.put('/users/:userId', users.update);
    app.delete('/users/:userId', User.delete);
}
