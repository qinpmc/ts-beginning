class Generic<T>{
    zeroValue:T;
    add:(x:T,y:T) => T
}
let myGeneric = new Generic<number>(); // 泛型 明确为 number
myGeneric.zeroValue = 0;
myGeneric.add = function(x:number,y:number):number{
    return x+y
};


class MinClass<T>{
    public list:T[] =[];
    add(value:T):void{
        this.list.push(value);
    }
    min():T{
        let minValue = this.list[0];
        for(let i=0;i<this.list.length;i++){
            if(minValue>this.list[i]){
                minValue = this.list[i];
            }
        }
        return minValue;
    }
}
let minClass = new MinClass<number>();
minClass.add(3);
minClass.add(-3);
minClass.add(6);
console.log(minClass.min()); // -3

