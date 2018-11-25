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
