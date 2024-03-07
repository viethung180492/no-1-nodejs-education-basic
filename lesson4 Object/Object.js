var person = {
    firstname: "John",
    lastname: "Peter",
    greet: function(){
        console.log(this.firstname + " " + this.lastname);
    }
};

person.greet();

console.log(person['firstname']);

//function create class by 'this'
function person2(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

// add prototype for class
person2.prototype.greet = function(){
    console.log("Hello " + this.firstname + " " + this.lastname);
};
var john = new person2("Clack", "Kent");
john.greet();

var lana = new person2("Hanna", "Lanna");
lana.greet();

// print attribute or function
console.log(john.__proto__);
console.log(lana.__proto__);
console.log(lana.__proto__ === john.__proto__);