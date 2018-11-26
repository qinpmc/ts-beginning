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
// ##  额外的属性检查
//对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候。
// 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
//let mySquare = createSquare({ colour: "red", width: 100 }); // colour 报错
var mySquare = createSquare({ width: 100, opacity: 0.5 }); //绕过编译器检查
//另外一种绕过
var squareOptions = { colour: "red", width: 100 };
var mySquare2 = createSquare(squareOptions);
