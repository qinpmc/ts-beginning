# 泛型

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。    

## 泛型函数

```
function createAry<T>(length:number,value:T):Array<T>{
    let result: T[] = [];
    for(let i=0;i<length;i++){
        result[i] = value;
    }
    return result;
}

console.log(createAry(3,9)); // [9, 9, 9]
console.log(createAry(5,"x")); //["x", "x", "x", "x", "x"]

// 多个泛型类型

function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]];
}
console.log(swap([1,"-1"])); // ["-1", 1]
```


## 泛型约束
- 函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法

```
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);
    return arg;
}


```






















