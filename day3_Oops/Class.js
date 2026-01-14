//syntax for function in TypeScript:
//function functionName(parameters): returnType{
//    //function body
//}
//===============================================================================================================================
//Object Oriented Programming in TypeScript
//syntax of class in TypeScript:
//class ClassName{
//    //properties and methods
//}
//syntax of creating object of class in TypeScript:
//let objectName = new ClassName();
//In TypeScript, we can define classes with properties and methods. 
// We can also use access modifiers like public, private, and protected to control the visibility of class members. 
// By default, all members are public.
//================================================================================================================================
var student = /** @class */ (function () {
    function student() {
        this.name = "shejin jose"; //public variable
        this.age = 22; //private variable
        this.oldage = 0; //public variable
    }
    student.prototype.getAge = function () {
        return this.age;
    };
    student.prototype.setAge = function (a) {
        this.oldage = this.age;
        this.age = a;
    };
    return student;
}());
var stu = new student(); //creating object of class
console.log(stu.name); //using object to access public variable name
stu.name = "arjun biju"; //using object to change the value of public variable name
console.log(stu.name); //using object to access public variable name after changing its value
console.log(stu.getAge()); //using object to access private variable age through method getAge()
stu.setAge(25); //using object to change the value of private variable age through method setAge() 
// and also storing the old age in oldage variable
console.log(stu.getAge()); //using object to access private variable age through method getAge() after changing its value
console.log(stu.oldage); //using object to access public variable oldage .
