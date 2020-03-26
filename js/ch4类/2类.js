"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " moved " + distance);
    };
    return Animal;
}());
//派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。
//而且在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则。
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        var _this = _super.call(this, name) || this;
        _this.age = 1;
        console.log("Snake generate...");
        console.log("" + _this.age);
        return _this;
    }
    Snake.prototype.move = function () {
        console.log("\u5B50\u7C7B Snake moved ...");
    };
    return Snake;
}(Animal));
var snake1 = new Snake("snake1");
snake1.move();
snake1.move();
