var fs = require('fs');
var zlib = require('zlib');

// read file
var readable =   fs.createReadStream(__dirname + '/greet.txt');

// write file
var writeable =  fs.createWriteStream(__dirname + '/greetcopy.txt');

// compressed
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');
// zip
var gzip = zlib.createGzip();

// pipes
readable.pipe(writeable);

readable.pipe(gzip).pipe(compressed);