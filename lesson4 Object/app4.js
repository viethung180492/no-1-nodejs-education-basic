// 

var firstname = "John";
(function(lastname){
    // biến cục bộ
    // ưu tiên cục nó bên trong, nếu giống với biến toàn cục
    var firstname = "Anna";
    console.log(firstname);
    console.log(lastname);
}("Donn"));
// biến toàn cục
console.log(firstname);