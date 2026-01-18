//Interface in Typescript

// An interface is a structure that defines the contract in your application. 
// It defines the structure for classes to follow. 
// It is a way to define the shape of an object, 
// which can be used to ensure that certain properties and methods are present in an object.

// Syntax of an Interface:

// interface InterfaceName {
//     property1: type;
//     property2: type;
//     method1(): returnType;
//     method2(): returnType;
// }

//class className implements InterfaceName {
//     // Implementation of properties and methods defined in the interface
// }

// Example of an Interface:

interface Person {
    name: string;
    age: number;
    greet(): void;
}

    class Student implements Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        greet(): void {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

class Teacher implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, I am ${this.name} and I am ${this.age} years old. I am a teacher.`);
    }
}

let student1 = new Student("Alice", 20);
student1.greet(); // Output: Hello, my name is Alice and I am 20 years old.
let teacher1 = new Teacher("Bob", 30);
teacher1.greet(); // Output: Hello, I am Bob and I am 30 years old. I am a teacher.