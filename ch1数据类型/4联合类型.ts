//联合类型使用 | 分隔每个类型

let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

//访问联合类型的属性或方法
//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：


/*function getLength(something: string | number): number {
    return something.length; // 错误
}*/


function getString(something: string | number): string {
    return something.toString(); //string 和number 都有toString方法
}