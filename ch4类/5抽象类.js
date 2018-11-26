var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    return Department;
})();
var AccountingDepartment1 = (function (_super) {
    __extends(AccountingDepartment1, _super);
    function AccountingDepartment1() {
        _super.apply(this, arguments);
    }
    AccountingDepartment1.prototype.printMeeting = function () {
        console.log(("" + this.name) + " at meeting");
    };
    return AccountingDepartment1;
})(Department);
var ad1 = new AccountingDepartment1("son1");
ad1.printMeeting(); //son1 at meeting
var AccountingDepartment2 = (function (_super) {
    __extends(AccountingDepartment2, _super);
    function AccountingDepartment2() {
        _super.call(this, 'Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }
    AccountingDepartment2.prototype.printMeeting = function () {
        console.log(("" + this.name) + " at meeting22");
    };
    return AccountingDepartment2;
})(Department);
var ad2 = new AccountingDepartment2();
ad2.printMeeting(); //Accounting and Auditing at meeting22
//抽象类可以继承抽象类（子抽象类可以不实现父抽象类抽象方法）
var AccountingDepartment3 = (function (_super) {
    __extends(AccountingDepartment3, _super);
    function AccountingDepartment3() {
        _super.apply(this, arguments);
    }
    return AccountingDepartment3;
})(Department);
var Son = (function (_super) {
    __extends(Son, _super);
    function Son() {
        _super.call(this, "son");
    }
    Son.prototype.printMeeting = function () {
        console.log("son printMeeting");
    };
    Son.prototype.newAbstractMethod = function () {
        console.log("son newAbstractMethod");
    };
    return Son;
})(AccountingDepartment3);
var son = new Son();
son.printMeeting();
son.newAbstractMethod();
