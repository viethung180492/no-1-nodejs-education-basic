var http = require('http');
var fs = require('fs');
http.createServer(function( request, response){
    // set response
    response.writeHead(200, { 'content-type' : 'text/html'});
    //
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    var message = "hello world....";
    html.replace('{Message}', message);
    // response
    response.end(html);
}).listen(1337, '127.0.0.1');