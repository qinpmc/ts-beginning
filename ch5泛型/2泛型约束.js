/*
 事先不知道泛型是哪种类型，所以不能随意的操作它的属性或方法
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length); //Property 'length' does not exist on type 'T'.
    return arg;
}
*/
function logging(arg) {
    return arg;
}
console.log(logging("xxx")); //"xxx"
//console.log(logging(123));
var LengthSon = (function () {
    function LengthSon(length) {
        this.length = length;
    }
    return LengthSon;
})();
var ls1 = new LengthSon(3);
console.log(logging(ls1)); //LengthSon {length: 3}
