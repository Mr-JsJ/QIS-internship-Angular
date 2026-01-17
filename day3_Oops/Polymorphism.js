// Polymorphism in TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//In programming, it means the same method name can perform different actions depending on the object.
// In TypeScript, we can achieve polymorphism through method overriding and method overloading.
//===============================================================================================================================
// Method overloading (Compile-time Polymorphism)
//===========================
// TypeScript supports method overloading using multiple function signatures with a single implementation.
// Method Overloading Example:
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        if (typeof a === 'number' && typeof b === 'number') { // Implementation for adding two numbers
            return a + b;
        }
        else if (typeof a === 'string' && typeof b === 'string') { // Implementation for concatenating two strings
            return a + ' ' + b;
        }
    };
    return Calculator;
}());
var calculator = new Calculator();
console.log(calculator.add(5, 10));
console.log(calculator.add("Hello", "World"));
//===============================================================================================================================
// Method overriding (Runtime Polymorphism)
//===========================
// Method overriding occurs when a subclass provides a specific implementation 
// of a method that is already defined in its superclass.
// Method Overriding Example:
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.makeSound = function () {
        console.log("Animal makes a sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Dog barks");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.makeSound(); // Output: Dog barks
