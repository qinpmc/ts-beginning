function createAry<T>(length:number,value:T):Array<T>{
    let result: T[] = [];
    for(let i=0;i<length;i++){
        result[i] = value;
    }
    return result;
}

console.log(createAry(3,9)); // [9, 9, 9]
console.log(createAry(5,"x")); //["x", "x", "x", "x", "x"]

// 多个泛型类型

function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]];
}
console.log(swap([1,"-1"])); // ["-1", 1]
