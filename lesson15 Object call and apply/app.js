var obj = {
    name: 'John Doe',
    greet: function(){
        console.log(`Hello ${ this.name}`);
    }
}

obj.greet();
obj.greet.call({name: 'John Doe'});
obj.greet.apply({name: 'John Doe'});