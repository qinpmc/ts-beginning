var str = "hello";
var num = 123;
var b = true;
console.log(str);
console.log(num);
console.log(b);
var u = undefined;
/*let n: null = null;*/
console.log(u);
/*console.log(n);*/
var unNum;
console.log("unNum: ", unNum); //undefined
//never类型
function error(mes) {
    throw new Error(mes);
}
