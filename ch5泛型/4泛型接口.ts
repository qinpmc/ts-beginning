interface CreateAry{
    <T>(length:number,value:T):Array<T>
}
let createAry:CreateAry = function<T>(length:number,value:T):Array<T>{
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createAry(3, 'x'); // ['x', 'x', 'x']


interface CreateArrayFunc<T> { //可以把泛型参数提前到接口名上：
    (length: number, value: T): Array<T>;
}

