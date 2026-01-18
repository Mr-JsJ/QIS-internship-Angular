//Interface in Typescript
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Student;
}());
var Teacher = /** @class */ (function () {
    function Teacher(name, age) {
        this.name = name;
        this.age = age;
    }
    Teacher.prototype.greet = function () {
        console.log("Hello, I am ".concat(this.name, " and I am ").concat(this.age, " years old. I am a teacher."));
    };
    return Teacher;
}());
var student1 = new Student("Alice", 20);
student1.greet(); // Output: Hello, my name is Alice and I am 20 years old.
var teacher1 = new Teacher("Bob", 30);
teacher1.greet(); // Output: Hello, I am Bob and I am 30 years old. I am a teacher.
