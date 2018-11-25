# TypeScript类

## 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。而且在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则。

```
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
```


## 公共，私有与受保护的修饰符
- public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的.      
- private 修饰的属性或方法是私有的，不能在声明它的类的外部访问.    
- protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的.    
   
       
       
       