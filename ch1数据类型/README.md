# TypeScript数据类型

##数据类型
- 布尔（boolean）
- 数字（number)
- 字符串（string)
- 数组（array)
- 元组（tuple)
- 枚举（enum）
- 任意（any）
- null
- undefined
- void
- never 

##数组类型

```
let arr:number[] = [1,2,3];
console.log(arr);

let arr2:Array<number> = [3,4,5];
console.log(arr2);
```


##元组类型

```
var tuple = [100, "hehe"];
console.log(tuple);

let xcatliu: [string, number] = ['Xcat Liu', 25];

```

##枚举

```
enum Days{Sun,Mon,Tue,Wed,Thu,Fri,Sat};
let day1 =Days.Thu;
console.log(day1); //4,枚举默认从0开始

enum Colors {Red =0,Blue=99,"Yellow" =5}

console.log(Colors.Red); //0
console.log(Colors.Blue); //99
console.log(Colors.Yellow); //5
```

##any
1. 任意值（Any）用来表示允许赋值为任意类型。   
2. 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

```
let box:any = document.getElementById("box");
box.style.backgroundColor = "red";


//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let something;
something = 'seven';
something = 7;
```


##void 
当一个函数没有返回值时，你通常会见到其返回值类型是 void    

注意：1  __声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null__ .

```
function doSomething():void{

}

let unusable: void = undefined;
console.log(unusable); ////undefined
unusable =null;
console.log(unusable); //null
```


##undefined 和 null
undefined 类型的变量只能被赋值为 undefined    
null 类型的变量只能被赋值为 null   
与 void 的区别是， undefined 和 null 是所有类型的子类型。也就是说undefined 类型的变量，可以赋值给 number 类型的变量   

```

// 这样不会报错
let num1: number = undefined;
console.log(num1); //undefined

// 这样也不会报错
let u: undefined;
let num2: number = u;
console.log(num2);  //undefined


// 这样也不会报错
let n1:null;
let num3: number = n1;
console.log(num3);  //null
```

 

##类型推论

```
//类型推论
let myFavoriteNumber = 'seven';  // myFavoriteNumber 推论成 string
//myFavoriteNumber = 7; //报错
```

##联合类型
- 联合类型使用 | 分隔每个类型
- 访问联合类型的属性或方法时，当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，
  我们只能访问此联合类型的所有类型里 __共有的属性或方法__

```
/*function getLength(something: string | number): number {
    return something.length; // 错误
}*/


function getString(something: string | number): string {
    return something.toString(); //string 和number 都有toString方法
}
```


##never类型
- never类型是任何类型的子类型，也可以赋值给任何类型.
- 表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；    
- 没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。  
 
```
function error(mes:string):never{
    throw new Error(mes);
}
//error("err");

let a : never;
a =(()=>{
    throw new Error("错误");
})()

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```






