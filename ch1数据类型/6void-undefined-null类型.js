// 这样不会报错
var num1 = undefined;
console.log(num1); //undefined
// 这样也不会报错
var u;
var num2 = u;
console.log(num2); //undefined
// 这样也不会报错
var n1 = null;
var num3 = n1;
console.log(num3); //null
console.log("*********分割线**********");
//void
function doSomething() {
}
var unusable = undefined;
console.log(unusable); ////undefined
unusable = null;
console.log(unusable); //null
