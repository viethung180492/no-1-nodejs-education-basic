var arrBuf = new ArrayBuffer(8);
var view = new Int32Array(arrBuf);
view[0] = 0;
view[1] = 15;
console.log(view);