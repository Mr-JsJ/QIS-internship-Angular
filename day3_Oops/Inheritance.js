// Inheritance is a fundamental object-oriented programming concept that allows a child or subclass
// to inherit properties and behaviors from a parent or superclass. 
// This promotes code reusability and establishes a natural hierarchical relationship between classes.
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log("".concat(this.name, " is eating."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this; // calling the constructor of the parent class
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " is barking."));
    };
    return Dog;
}(Animal));
var myDog = new Dog("Buddy", "Golden Retriever");
myDog.eat(); // Buddy is eating.
myDog.bark(); // Buddy is barking.
