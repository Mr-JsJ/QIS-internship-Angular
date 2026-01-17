// Polymorphism in TypeScript

//In programming, it means the same method name can perform different actions depending on the object.

// In TypeScript, we can achieve polymorphism through method overriding and method overloading.

//===============================================================================================================================

// Method overloading (Compile-time Polymorphism)
//===========================
// TypeScript supports method overloading using multiple function signatures with a single implementation.

// Method Overloading Example:

class Calculator {
    add(a: number, b: number): number;// Function signature for adding two numbers
    add(a: string, b: string): string;// Function signature for concatenating two strings
    add(a: any, b: any): any {
        if (typeof a === 'number' && typeof b === 'number') {// Implementation for adding two numbers
            return a + b;
        } else if (typeof a === 'string' && typeof b === 'string') {// Implementation for concatenating two strings
            return a + ' ' + b;
        }
    }
}

let calculator = new Calculator();
console.log(calculator.add(5, 10));
console.log(calculator.add("Hello", "World"));

//===============================================================================================================================

// Method overriding (Runtime Polymorphism)
//===========================
// Method overriding occurs when a subclass provides a specific implementation 
// of a method that is already defined in its superclass.

// Method Overriding Example:

class Animal {
    makeSound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    makeSound(): void { // Overriding the makeSound method of the Animal class
        console.log("Dog barks");
    }
}

let dog = new Dog();
dog.makeSound(); // Output: Dog barks