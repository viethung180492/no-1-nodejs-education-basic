var http = require('http');
var fs = require('fs');

http.createServer(function( request, response){
    if(request.url === '/'){
        fs.createWriteStream(__dirname + '/index.html').pipe(response);
    }
    if(request.url == 'api'){
        response.writeHead(200, 
                        { 'Content-Type' : 'application/json' });
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        response.end(JSON.stringify(obj));
    }else{
        response.writeHead(404);
        response.end();
    }
    
}).listen(1337, '127.0.0.1');