// In TypeScript, a constructor is a special method that is used to initialize values for class properties.
// The constructor is called when an object of the class is created.
// The syntax for a constructor in TypeScript is as follows:
// class ClassName {
//     constructor(parameters) {
//         // constructor body
//     }
// }
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var p1 = new Person("John", 25);
console.log(p1.name);
console.log(p1.age);
