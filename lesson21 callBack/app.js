function greet(callBack){
    console.log('Hello');
    var data = {
        name: 'John Doe'
    };
    callBack(data);
}
//
greet(function (data){
    console.log('The callBack was invoked!');
    console.log(data);
});
//
greet(function (data){
    console.log('a different callBack was invoked!');
    console.log(data.name);
});