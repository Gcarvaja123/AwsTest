const express = require('express'); //Import the express dependency
var path = require('path');
const app = express();
var bodyParser = require('body-parser');
var modelo = require('./Models');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
var index = require('./routes/index');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/', index);



module.exports = app;