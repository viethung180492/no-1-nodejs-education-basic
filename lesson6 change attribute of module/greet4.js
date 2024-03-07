function Greetr(){
    this.greeting = "Hello world",
    this.greet = function(){
        console.log(this.greeting);
    }
}
// defference greet3 and greet 4
module.exports = Greetr;