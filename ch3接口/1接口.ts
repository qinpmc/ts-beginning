interface Person {
    name: string;
    age: number;
}
//定义的变量比接口少了一些属性是不允许的
let tom: Person = {
    name: 'Tom'
};


interface Person2 {
    name: string;
    age: number;
}

//多一些属性也是不允许的：
let tom2: Person2 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};



function printLabel1(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj1 = { size: 10, label: "Size 10 Object" };
printLabel1(myObj1); //Size 10 Object


interface LabelledValue {
    label: string;
}

function printLabel2(labelledObj: LabelledValue) {
/*    if(labelledObj.name){ //报错，引用不存在的属性

    }*/
    console.log(labelledObj.label);
}
let myObj2 = {size: 20, label: "Size 20 Object"};
printLabel2(myObj2); //Size 20 Object

//注意 ：这种方式下，编译报错，多出属性 size
printLabel2({
    size: 30,
    label: "Size 30 Object",
    name:"hh"
});












