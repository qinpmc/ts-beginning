/*
ES6 类

class Aniaml{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        return `My name is ${this.name}`;
    }
}
let a = new Aniaml("Jack");
console.log(a.sayHi());*/

class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();