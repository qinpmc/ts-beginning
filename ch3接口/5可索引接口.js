var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var arr1 = ["hh", "kk"];
console.log(arr1[1]);
var obj1 = { "addr": { "city": "pk" } };
console.log(obj1["addr"]);
/*
TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。
也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
*/
var Animal = (function () {
    function Animal() {
    }
    return Animal;
})();
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    return Dog;
})(Animal);
