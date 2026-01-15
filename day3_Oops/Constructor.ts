// In TypeScript, a constructor is a special method that is used to initialize values for class properties.
// The constructor is called when an object of the class is created.
// The syntax for a constructor in TypeScript is as follows:

// class ClassName {
//     constructor(parameters) {
//         // constructor body
//     }
// }

//===============================================================================================================================

// Example of a class with a constructor in TypeScript:

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) { //constructor definition with parameters name and age
    this.name = name;
    this.age = age;
  }
 
  DisplayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }

}

const p1 = new Person("John", 25);
const p2 = new Person("Jane", 30);

p1.DisplayInfo();//displaying information of person p1 using method DisplayInfo()

console.log(p2.name); //accessing public variable name of person p2 using object p2
console.log(p2.age); //accessing public variable age of person p2 using object p2