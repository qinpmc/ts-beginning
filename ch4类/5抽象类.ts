abstract class Department {

    constructor(public name: string) {
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment1 extends Department {
    printMeeting(): void {
        console.log(`${this.name}`+" at meeting");
    }
}
let ad1:AccountingDepartment1 = new AccountingDepartment1("son1");
ad1.printMeeting(); //son1 at meeting


class AccountingDepartment2 extends Department {

     constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
     }

    printMeeting(): void {
        console.log(`${this.name}`+" at meeting22");
    }
}
let ad2:AccountingDepartment2 = new AccountingDepartment2();
ad2.printMeeting(); //Accounting and Auditing at meeting22

//抽象类可以继承抽象类（子抽象类可以不实现父抽象类抽象方法）
abstract class AccountingDepartment3 extends Department {
    abstract newAbstractMethod(): void;
}

class Son extends AccountingDepartment3 {
    constructor(){
        super("son");
    }
    printMeeting():void {
        console.log("son printMeeting");
    }
    newAbstractMethod():void {
        console.log("son newAbstractMethod");
    }
}

let son = new Son();
son.printMeeting();
son.newAbstractMethod();