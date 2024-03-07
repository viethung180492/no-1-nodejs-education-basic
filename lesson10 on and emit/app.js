var Emitter = require('./emitter');

var emtr = new Emitter();
//
emtr.on('greet', function(){
    console.log('somewhere, sometime said hello.');
});
emtr.on('greet', function(){
    console.log('A greet occurred!!!');
});
//
console.log('Hello');
emtr.emit('greet');