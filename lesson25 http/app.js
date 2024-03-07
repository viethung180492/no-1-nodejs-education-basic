var http = require('http');
http.createServer(function( request, response){
    //
    response.writeHead(200, { 'content-type' : 'text/plain'});
    response.end('Hello world!!!\n');
}).listen(1337, '127.0.0.1');