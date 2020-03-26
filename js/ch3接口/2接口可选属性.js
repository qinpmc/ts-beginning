"use strict";
// age 属性可选，可以没有
var tom = {
    name: 'Tom'
};
// age 属性可选，也可以有
var tom2 = {
    name: 'Tom',
    age: 25
};
// 编译错误：仍然不允许添加未定义的属性 （gender）
var tom3 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
function createSquare(config) {
    // ...
    return {
        color: "color",
        area: 123
    };
}
//let mySquare = createSquare({ colour: "red", width: 100 }); // colour 报错,接口没有该属性
var mySquare = createSquare({ width: 100, opacity: 0.5 }); //绕过编译器检查
//另外一种绕过
var squareOptions = { colour: "red", width: 100 };
var mySquare2 = createSquare(squareOptions);
