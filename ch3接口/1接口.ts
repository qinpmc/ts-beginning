function printLabel1(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj1 = { size: 10, label: "Size 10 Object" };
printLabel1(myObj1);

interface LabelledValue {
    label: string;
}

function printLabel2(labelledObj: LabelledValue) {
/*    if(labelledObj.name){ //报错，引用不存在的属性

    }*/
    console.log(labelledObj.label);
}

let myObj2 = {size: 20, label: "Size 20 Object"};
printLabel2(myObj2);




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


// ##  额外的属性检查
//对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候。
// 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
//let mySquare = createSquare({ colour: "red", width: 100 }); // colour 报错

let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig); //绕过编译器检查

//另外一种绕过
let squareOptions = { colour: "red", width: 100 };
let mySquare2 = createSquare(squareOptions);