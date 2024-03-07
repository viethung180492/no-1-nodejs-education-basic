var express = require('express');
var app = express();
var mongooes = require('mongoose');
var config =require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/appController');

var port = process.env.PORT || 3000;

// use path /assets mapping to '/public
app.use('/assets', express.static(__dirname + '/public'));

// set file 
app.set('view engine', 'ejs');

// connect to database mongoDB
mongooes.connect(config.getDBConnectString());

// example 1
setupController(app);

// example 2
apiController(app);
app.listen(port);