class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

//console.log(new Animal("Cat").name); // ts 编译出错，但编译后的js代码仍正常工作。，输出cat。

class Rhino extends Animal {
    constructor() {
        super("Rhino");
        //console.log(this.name); //Property 'name' is private and only accessible within class 'Animal'
    }
}

let rhino = new Rhino();
//console.log(rhino.name); //Property 'name' is private and only accessible within class 'Animal'