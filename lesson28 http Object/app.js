var http = require('http');
var fs = require('fs');

http.createServer(function( request, response){
    // set response
    response.writeHead(200, { 'Content-Type' : 'application/json' });
    // object
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    response.end(JSON.stringify(obj));
    
}).listen(1337, '127.0.0.1');