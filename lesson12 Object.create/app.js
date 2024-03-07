var person = {
    firstname : '',
    lastname : '',
    greet : function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var john = Object.create(person);
john.firstname = "John";
john.lastname = "Doe";

var lana = Object.create(person);
lana.firstname = "Lana";
lana.lastname = "White";
console.log(john.greet());
console.log(lana.greet());