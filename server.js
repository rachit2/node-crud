const express = require('express');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const app = express();
  const { mongooseAssociation } = require('mongoose-association')
//HTML
app.use(express.urlencoded({
 extended: true 
}))

//RAW
app.use(express.json())

app.set('view engine', 'ejs');
  app.set('views', './app/views');

app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

app.get('/users_template', function (req, res) {
  
  res.render('./users/template');
});

app.get('/teachers_template', function (req, res) {
  
  res.render('./teachers/template');
});

var a = 'false'

if (a == 'true') {
 app.use(express.static('./app/views/layout/users_layout/public'))
}
else
{
 app.use(express.static('./app/views/layout/teachers_layout/public'))
}

require('./app/routes/user.routes.js')(app);
require('./app/routes/teacher.routes.js')(app);
require('./app/routes/battery.routes.js')(app);
require('./app/routes/product.routes.js')(app);
require('./app/routes/vehicle.routes.js')(app);

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

 mongooseAssociation(mongoose)