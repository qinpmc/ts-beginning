interface arrIndex{
    [index:number]:string
}

let arr1:arrIndex = ["hh","kk"];
console.log(arr1[1]);

interface objIndex{
    [index:string]:any
}

let obj1:objIndex = {"addr":{"city":"pk"}};
console.log(obj1["addr"]);


/*
TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。
也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
*/
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}

// 正确，Dog 是 Animal子类
interface Okay {
    [x: number]: Dog;
    [x: string]: Animal;
}

/***************************************/

//索引属性确保所有属性与其返回值类型相匹配，否则报错
//错误,age 返回类型为 number
interface Person {
    name: string;
    age?: number;
    [propName: string]: string;
}

// 正确
interface Person22 {
    name: string;
    address?: string;
    [propName: string]: string;
}