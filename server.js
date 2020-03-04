const express = require('express');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
  app.set('views', './views');

app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

app.get('/form', function (req, res) {
  // var html='';
  // html +="<body>";
  // html += "<form action='/thank'  method='post' name='form1'>";
  // html += "Name:</p><input type= 'text' name='name'>";
  // html += "Email:</p><input type='text' name='email'>";
  // html += "address:</p><input type='text' name='address'>";
  // html += "Mobile number:</p><input type='text' name='mobilno'>";
  // html += "<input type='submit' value='submit'>";
  // html += "<INPUT type='reset'  value='reset'>";
  // html += "</form>";
  // html += "</body>";
  res.render('../views/users/form', {title :'a'});
  // res.send(html);
});


// app.post('/update', (req,res)=>{
// 	console.log('name', req.body.name)
// 	res.redirect('/')
// })


require('./app/routes/user.routes.js')(app);

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