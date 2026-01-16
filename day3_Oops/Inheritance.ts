// Inheritance is a fundamental object-oriented programming concept that allows a child or subclass
// to inherit properties and behaviors from a parent or superclass. 
// This promotes code reusability and establishes a natural hierarchical relationship between classes.

// In TypeScript, we can use the `extends` keyword to create a subclass that inherits from a superclass.

// The syntax for inheritance in TypeScript is as follows:

// class ParentClass {
//     // properties and methods of the parent class
// }

// class ChildClass extends ParentClass {
//     // additional properties and methods of the child class
// }

//===============================================================================================================================

// Example of inheritance in TypeScript:

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat(): void {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name); // calling the constructor of the parent class
        this.breed = breed;
    }

    bark(): void {
        console.log(`${this.name} is barking.`);
    }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.eat(); // Buddy is eating.
myDog.bark(); // Buddy is barking.
