
/*
 事先不知道泛型是哪种类型，所以不能随意的操作它的属性或方法
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length); //Property 'length' does not exist on type 'T'.
    return arg;
}
*/

interface LengthWise{
    length:number
}

function logging<T extends LengthWise>(arg:T):T{
    return arg;
}

console.log(logging("xxx"));   //"xxx"
//console.log(logging(123));

class LengthSon implements LengthWise{

    constructor(public length:number){

    }
}
let ls1 = new LengthSon(3);
console.log(logging(ls1)); //LengthSon {length: 3}

