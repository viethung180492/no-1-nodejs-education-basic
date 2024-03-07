var fs = require('fs');

// read file
var readable = fs.createReadStream(__dirname + '/greet.txt', 
{encoding: 'utf8', highWaterMark: 16 * 1024});

// write file
var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

//
readable.on('data', function(chuck){
    console.log(chuck);
    writeable.write(chuck);
});