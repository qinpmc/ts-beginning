
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

console.log("*********分割线**********");

//void

function doSomething():void{

}

let unusable: void = undefined;
console.log(unusable); ////undefined
unusable =null;
console.log(unusable); //null

