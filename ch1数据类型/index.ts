let str:string = "hello";
let num:number = 123;
let b:boolean = true;

console.log(str);
console.log(num);
console.log(b);

let u: undefined = undefined;
/*let n: null = null;*/

console.log(u);
/*console.log(n);*/

let unNum:number;
console.log("unNum: ",unNum); //undefined





//never类型
function error(mes:string):never{
    throw new Error(mes);
}

