function add(x, y) {
    return x + y;
}
//函数表达式
var myAdd = function (x, y) { return x + y; };
//等同上方
var myAdd2 = function (x, y) {
    return x + y;
};
//可选参数
function buildName(fName, lName) {
    if (lName) {
        return fName + " " + lName;
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
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
