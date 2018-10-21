# TypeScript数据类型

## 数据类型
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


- never类型
表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；    
变量也可能是 never类型，当它们被永不为真的类型保护所约束时。    
never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。  
 
```
//never
function error(mes:string):never{
    throw new Error(mes);
}
```


 
注意：1  __声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null__ .

```
let unusable: void = undefined;
```


2. undefined 类型的变量只能被赋值为 undefined    
null 类型的变量只能被赋值为 null   
与 void 的区别是， undefined 和 null 是所有类型的子类型。也就是说undefined 类型的变量，可以赋值给 number 类型的变量   

```
// 这样不会报错
let num: number = undefined;
// 这样也不会报错
let u: undefined;
let num: number = u;
```

3.any 类型

- 任意值上访问任何属性/方法都是允许的
- 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型

```
//任意值上访问任何属性/方法都是允许的
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

let something;
something = 'seven';
something = 7;

something.setName('Tom');
```

4. 类型推论

```
//类型推论
let myFavoriteNumber = 'seven';  // myFavoriteNumber 推论成 string
//myFavoriteNumber = 7; //报错
```





