// Prototype inheritance is a fundamental concept in JavaScript
// that "allows objects" "to inherit" "properties and methods" "from
// other objects" through their prototype chain.Every object in
// JavaScript has a prototype, and when a property or method
// is not found on an object, JavaScript looks for it in the
// object's prototype, and so on, creating a chain of prototypes.

//1. Creating constructor
// function Animal(name) {
//   this.name = name;
// }

//2. Adding a method to the prototype
// Animal.prototype.sayHello = function () {
//   return `Hello from ${this.name}`;
// };

//3. Creating an instance
// const dog = new Animal("Tommy");

// console.log(dog.sayHello());

//Tricky output based questions

//Example 1
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function () {
//   console.log(`Hello, I'm ${this.name}`);
// };

// const person1 = new Person("Alice");
// const person2 = new Person("Bob");

// person1.sayHello(); // Output: ?
// person2.sayHello(); // Output: ?

//Example 2
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.drive = function () {
  console.log(`Driving a ${this.type}`);
};

const car = new Vehicle("Car");
car.drive(); // Output: Driving a Car

Vehicle.prototype = {
  startEngine() {
    console.log("Engine started");
  },
};

car.drive(); // Output: ?
car.startEngine(); // Output: ?
