var express = require('express');
var app = express();
var mysql = require('mysql');

//
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

// use 1
app.use('/assets', express.static(__dirname + '/public'));

// use 2
app.use('/', function(request, response, next){
    console.log('Request Url: '+ request.url);

    // conection mysql
    var conn = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "123456",
		database: "addressbook"
	});

    conn.query('SELECT People.ID, Firstname, Lastname, Address'+
                'FROM `People`'+
                'INNER JOIN `PersonAddresses`' +
                    'ON People.ID = PersonAddresses.PersonID'+
                'INNER JOIN `Addresses`'+
                    'ON PersonAddresses.AddressID = Addresses.ID',
        function(err, rows){
            if(err) throw err;
                console.log(rows[0].Firstname);
    });
    next();
});

// set
app.set('view engine', 'ejs');

// get port
var port = process.env.port || 3000;

/* example 10 */
htmlController(app);

/* example 11 */
apiController(app);

app.listen(port);