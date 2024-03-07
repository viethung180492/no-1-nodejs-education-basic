function greet(){
    console.log("hi");
}
greet();

function logGreetting(fn){
    fn();
}
logGreetting(greet);
// 
var greetMe = function(){
    console.log("Hi tonny");
}
//
greetMe();

logGreetting(greetMe);
//
logGreetting(function(){
    console.log("Hello Tonny!!");
});