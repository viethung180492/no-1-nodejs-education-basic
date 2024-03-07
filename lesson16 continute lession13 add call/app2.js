var util = require('util');
//
function Person(){
    this.firstname = 'John';
    this.lastname = 'Doe';
}
//
Person.prototype.greet = function(){
    console.log('Hello ' + this.firstname +' ' + this.lastname);
}
//
function Policemen(){
    // call this
    Person.call(this);
    this.badgenumber = '1234';
}
//
util.inherits(Policemen, Person);
var officer = new Policemen();
officer.greet();