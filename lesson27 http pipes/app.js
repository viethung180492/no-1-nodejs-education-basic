var http = require('http');
var fs = require('fs');

http.createServer(function( request, response){
    // set response
    response.writeHead(200, { 'Content-Type' : 'text/html' });
    // pipes
    fs.createWriteStream(__dirname + '/index.html').pipe(response);
    
}).listen(1337, '127.0.0.1');