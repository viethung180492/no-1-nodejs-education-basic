var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();
//
emtr.on(eventConfig.GREET, function(){
    console.log('somewhere, sometime said hello.');
});
emtr.on(eventConfig.GREET, function(){
    console.log('A greet occurred!!!');
});
//
console.log('Hello');
emtr.emit(eventConfig.GREET);