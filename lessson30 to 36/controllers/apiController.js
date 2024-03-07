var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

module.exports = function(app){
    /* example 9 method=GET path*/
    app.get('/api/example9/:id', function(request, response){
    // get that database from database
        response.json({ firstname: 'John', lastname: 'Doe' });
    });

    /* example 9 method=POST */
    app.post('/api/example9', jsonParser, function(request, response){
        // save to the database
    });

    app.delete('/api/example9/:id', jsonParser, function(request, response){
        // delete from the database
    });
}