interface Person {
    name: string;
    age?: number;
}
// age 属性可选，可以没有
let tom: Person = {
    name: 'Tom'
};


interface Person2 {
    name: string;
    age?: number;
}

// age 属性可选，也可以有
let tom2: Person2 = {
    name: 'Tom',
    age: 25
};


interface Person3 {
    name: string;
    age?: number;
}

// 编译错误：仍然不允许添加未定义的属性 （gender）
let tom3: Person3 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};


//可选属性
// ##  额外的属性检查
//对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候。
// 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
interface SquareConfig {
    color?: string;
    width: number;
}

function createSquare(config: SquareConfig):{ color: string; area: number } {
    // ...
    return {
        color:"color",
        area:123
    }
}

//let mySquare = createSquare({ colour: "red", width: 100 }); // colour 报错,接口没有该属性

let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig); //绕过编译器检查

//另外一种绕过
let squareOptions = { colour: "red", width: 100 };
let mySquare2 = createSquare(squareOptions);
