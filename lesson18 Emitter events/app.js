var Greetr = require('./greet');

var greet1 = new Greetr();

greet1.on('greet', function(data){
    console.log('Someone greeted : ' + data);
});

greet1.greet('Tony');