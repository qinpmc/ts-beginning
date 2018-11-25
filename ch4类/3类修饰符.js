var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
})();
//console.log(new Animal("Cat").name); // ts 编译出错，但编译后的js代码仍正常工作。，输出cat。
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        _super.call(this, "Rhino");
        //console.log(this.name); //Property 'name' is private and only accessible within class 'Animal'
    }
    return Rhino;
})(Animal);
var rhino = new Rhino();
//console.log(rhino.name); //Property 'name' is private and only accessible within class 'Animal' 
