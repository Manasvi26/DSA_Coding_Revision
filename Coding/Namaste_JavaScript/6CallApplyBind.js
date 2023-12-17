const obj = { name: "Manasvi", position: "sde" };

function dummyFunc() {
  return "Hello" + " " + this.name;
}

console.log(dummyFunc()); //o/p: Hello undefined
////////////////////////////////////////////////////////////////
//How can be "call" the dymmyFunc so that it uses the
//properties of "obj".
//Here "call" comes into place.

//"call" method

console.log(dummyFunc.call(obj)); //Output: Hello Manasvi

//also, second parameter will be the list of arguments
//so,

function sayHello(age, country) {
  return (
    "Hello" +
    " " +
    this.name +
    " " +
    "your age is" +
    " " +
    age +
    " " +
    "and your country is" +
    " " +
    country +
    "."
  );
}

console.log(sayHello.call(obj, 28, "India"));

////////////////////////////////////////////////////////////////

//What is apply ?
//Apply works same as "call", only difference is it takes all the arguments
// in the form of "array". i.e. list of arguments.

console.log(sayHello.apply(obj, [28, "India"]));

///////////////////////////////////////////////////////////////////

//What is "bind" ?
//now comes "bind". This as name suggests bind the "object" with that
//particular function and return an "resuable" function.

//Ex.
const bindFunc = sayHello.bind(obj); //now this will be a new function

//so, now we can pass whatever arguments we want to pass inside
//the new function we created using "bind".
//Ex.
console.log(bindFunc(30, "USA"));
console.log(bindFunc(26, "England"));

//we can also do:
const anotherBind = sayHello.bind(obj, 30, "Dubai");
console.log(anotherBind());

/////////////////////////////////////////////////////////////

//**********NOTE: "this" never points to the function. It will point ******/
// to the context of that function.
