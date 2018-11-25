class Animal {
    name:string;
    constructor(theName:string){
        this.name = theName;
    }
    move(distance:number=0){
        console.log(`${this.name} moved ${distance}`);
    }
}


//派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。
//而且在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则。
class Snake extends Animal{
    age:number = 1;
    constructor(name:string){
        super(name);
        console.log("Snake generate...");
        console.log(`${this.age}`);
    }
    move(){
        console.log(`子类 Snake moved ...`);
    }
}

let snake1 = new Snake("snake1");
snake1.move();
snake1.move();