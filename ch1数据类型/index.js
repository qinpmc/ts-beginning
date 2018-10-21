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
/*数组类型*/
var ary1 = [1, 2, 3];
var ary2 = [4, 5, 6];
console.log(ary1);
console.log(ary2);
/*元组类型*/
var tu1 = [333, "hhh"];
console.log(tu1);
/*let tu2:[number,number,boolean] = [555,666,777,true]; //错误
console.log(tu2);*/
//枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 0] = "error";
})(Flag || (Flag = {}));
console.log(Flag.success); //1
var f1 = Flag.error;
console.log(f1); //0
var Flag2;
(function (Flag2) {
    Flag2[Flag2["red"] = 0] = "red";
    Flag2[Flag2["yellow"] = 1] = "yellow";
    Flag2[Flag2["blue"] = 2] = "blue";
})(Flag2 || (Flag2 = {}));
var f2 = Flag2.red;
console.log(f2); //0
//never类型
function error(mes) {
    throw new Error(mes);
}
