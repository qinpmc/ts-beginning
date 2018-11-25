# TypeScript函数

### TypeScript支持：

- 函数声明
- 函数表达式
- 可选参数
- 默认参数
- 剩余参数
- 重载


##函数声明/函数表达式
```
//函数声明
function add(x: number, y: number): number {
    return x + y;
}

//函数表达式
let myAdd = function(x: number, y: number): number { return x + y; };

//等同上方
let myAdd2:(baseValue:number,increment:number) =>number = function(x:number,y:number):number{
    return x+y;
}

```


##可选参数
注意点：  
- 可选参数后面不允许再出现必须参数（可选参数必须在参数最后面）
- 添加了默认值的参数识别为可选参数

```
//可选参数
function buildName(fName:string,lName?:string){
    if(lName){
        return fName+" "+ lName;
    }
    return fName;
}

console.log(buildName("qq1")); //qq1
console.log(buildName("qq1","aa1")); //qq1 aa1


//编译错误（可选参数必须在必须参数后面） ，但可以运行
function buildName2(country:string,fName?:string,lName:string){
    if(lName){
        return fName+" "+ lName;
    }
    return fName;
}

console.log(buildName2("qq2","aa2","zz2"));

```




##默认参数
- 默认参数可在任何位置

```
function buildName3(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
```

##剩余参数

```
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
```

##重载

