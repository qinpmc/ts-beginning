"use strict";
var Generic = /** @class */ (function () {
    function Generic() {
    }
    return Generic;
}());
var myGeneric = new Generic(); // 泛型 明确为 number
myGeneric.zeroValue = 0;
myGeneric.add = function (x, y) {
    return x + y;
};
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.min = function () {
        var minValue = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minValue > this.list[i]) {
                minValue = this.list[i];
            }
        }
        return minValue;
    };
    return MinClass;
}());
var minClass = new MinClass();
minClass.add(3);
minClass.add(-3);
minClass.add(6);
console.log(minClass.min()); // -3
