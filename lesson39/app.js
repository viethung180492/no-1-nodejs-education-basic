var express = require('express');
var app = express();

var people = [
	{
		name: 'John'
	},
	{
		name: 'Peter'
	},
	{
		name: 'Due'
	},
	{
		name: 'John'
	}

]

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	
	res.render('index', { serverPeople: people});
	
});

app.listen(port);