# TypeScript函数

### TypeScript支持：

- 函数声明
- 函数表达式
- 可选参数
- 默认参数
- 剩余参数
- 重载

### 注意点
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

//错误，可选参数必须在必须参数后面
/*
function buildName2(country:string,fName?:string,lName:string){
    if(lName){
        return fName+" "+ lName;
    }
    return fName;
}*/

// 默认参数，默认参数可在任何位置
function buildName3(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
```


