var bodyParser = require('body-parser');

var urlencodePars = bodyParser.urlencoded({ extended: false });

var jsonParser = bodyParser.json();

module.exports =function(app){
    // example 1 method=GET path /
    app.get('/example1', function(request, response){
        response.send('<html> '+
                    '<head>'+
                    '<link href=\'assets/style.css\' type=text/css rel=stylesheet />'+
                    '</head>'+
                    '<body><h1>Hello world!!!</h1></body>'+
                    '</html>');
    });

    // example 2 method=GET path
    app.get('/example2/api', function(request, response){
        response.json({firstname: 'John', lastname: 'Doe'});
    });

    // example 3 method=GET path
    app.get('/example3', function(request, response){
        response.send('<html> <head></head> <body>'+
        request.params.id +'</body> </html>');
    });

    // example 4 method=GET path
    app.get('/example4', function(request, response){
        response.render('example4');
    });

    // example 5 method=GET path
    app.get('/example5/:id', function(request, response){
        response.render('example5', { ID: request.params.id});
    });

    // example 6 method=GET path
    app.get('/example6/:id', function(request, response){
        response.render('example6', { ID: request.params.id,
                                    Qstr: request.query.qstr});
    });

    // example 7 method=GET path
    app.get('/example7', function(request, response){
        response.render('example7');
    });

    // example 7 method=POST
    app.post('/example7out', urlencodePars, function(request, response){
        response.send('Thank you!!!');
        console.log(request.body.firstname);
        console.log(request.body.lastname);
    });

    /* example 8 method=POST*/
    app.post('/example8', jsonParser, function(request, response){
        response.send('thank your on JSON data!!!');
        console.log(request.body.firstname);
        console.log(request.body.lastname);
    });
    
}