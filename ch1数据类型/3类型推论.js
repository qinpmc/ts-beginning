//类型推论
var myFavoriteNumber = 'seven'; // myFavoriteNumber 推论成 string
//myFavoriteNumber = 7; //报错
//如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
var myNumber;
myNumber = 'seven';
myNumber = 7;
console.log(myNumber); //7
