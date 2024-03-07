// object
var obj = {
    greet : "Hello world"
};
console.log(obj.greet);
console.log(obj['greet']);

// array
var arr = [];
arr.push(function(){
    console.log("Hello world 1");
});
arr.push(function(){
    console.log("Hello world 2");
});
arr.push(function(){
    console.log("Hello world 3");
});

arr.forEach(function(item){
    item();
});