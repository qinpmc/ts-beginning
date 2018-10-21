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



/*数组类型*/
let ary1:number[] = [1,2,3];
let ary2:Array<number> = [4,5,6];

console.log(ary1);
console.log(ary2);

/*元组类型*/
let tu1:[number,string] = [333,"hhh"];
console.log(tu1);


/*let tu2:[number,number,boolean] = [555,666,777,true]; //错误
console.log(tu2);*/


//枚举类型
enum Flag {
    success = 1,
    error= 0
}
console.log(Flag.success);  //1
let f1:Flag = Flag.error;
console.log(f1);   //0


enum Flag2 {
    red,
    yellow,
    blue
}
let f2:Flag2 = Flag2.red;
console.log(f2); //0

//never类型
function error(mes:string):never{
    throw new Error(mes);
}

