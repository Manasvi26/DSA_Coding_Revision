//Constructor Function
// function Player(n, t) {
//   this.name = n;
//   this.team = t;
// }

// var newPlayer = new Player("Messi", "Barcalona");

// console.log(newPlayer);
//////////////////////////////////////////////////

//Prototypes

Function.prototype.myMethod = function () {
  //   console.log("Manasvi");
  return "Manasvi";
};

function a() {}

console.log(a.myMethod());

///////////////////////////////////////////////////////

// var obj = {
//   name: "Manasvi",
//   age: "27",
// };

// var newObj = Object.create(obj);

// console.log(newObj); // {} //empty object is loged, but inside the prototype of this we can see all the properties of the parent object.
