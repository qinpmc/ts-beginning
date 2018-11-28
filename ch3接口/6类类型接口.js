var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Door = (function () {
    function Door() {
    }
    return Door;
})();
// 类可以实现多个接口
var SecurityDoor = (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        _super.apply(this, arguments);
    }
    SecurityDoor.prototype.alert = function () {
        console.log('SecurityDoor alert');
    };
    SecurityDoor.prototype.lightOn = function () {
        console.log('SecurityDoor lightOn');
    };
    SecurityDoor.prototype.lightOff = function () {
        console.log('SecurityDoor lightOff');
    };
    return SecurityDoor;
})(Door);
