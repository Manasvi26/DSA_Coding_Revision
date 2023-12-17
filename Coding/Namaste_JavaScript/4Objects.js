let obj = {
  name: "Manasvi",
  age: 28,
};

/////////////////////////////////////////////////////////
//to modify
// obj.name = "Sharma";
// console.log("1obj --->", obj);

/////////////////////////////////////////////////////////////////
//to delete (delete keyword can only be used for objects to delete properties.)
// delete obj.age;
// console.log("2obj --->", obj);

//////////////////////////////////////////////////////////////////////
//to add a property
// const property = "job";
// const value = "sde";

// const newObj = { ...obj, [property]: value };
// console.log("3newObj--->", newObj);

/////////////////////////////////////////////////////////////

//Snippits based ques.

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 100;
// a[c] = 200;

// console.log(a[b]);

//o/p will be: 200

// Why ? //As both a[b] and a[c] will become ["object object"]
//We will not have "a" as a key, neither we have "b" as a key.
// a[["object object"]] = 100;
//  a[["object object"]] = 200;
//this happens because an "object" can't be converted to "key..."
//unless it is a "string".

/////////////////////////////////////////////////////////////////////////

//JSON.stringify and JSON.parse

// const newUser = {
//   name: "Coder",
//   time: "morning",
// };

// const jsonUser = JSON.stringify(newUser);
// console.log("jsonUser --->", jsonUser);
// localStorage.setItem("newPerson", jsonUser); //web api
// const localStorageUser = localStorage.getItem("newPerson"); //web api
// const originalNewUser = JSON.parse(jsonUser);
// console.log("getUser --->", originalNewUser);

////////////////////////////////////////////////////////////////

// const a = {
//   greeting: "Hello",
// };

// let b;
// b = a;

//First
// b.greeting = "Hey";
// console.log("a ---->", a);
// console.log("b --->", b);

//Second
// a.greeting = "Namaste";
// console.log("a ---->", a);
// console.log("b --->", b);

//Output: We are mutating the "reference" over here, so in both
//the cases, we will get the modified object.

//////////////////////////////////////////////////////////

//What will be the output ?

// console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 });

//Output
//false
//false
// Why ? : Because both the objects are kept in different memory spaces.
//Here no matter we check strict or otherwise. As, both are going to point
//at different memory locations.

////////*************IMPORTANT************///////////////////////////

//***************MOST IMPORTANT : MODIFYING THE VALUE OF AN OBJECT WILL CHNAGE
//ITS ORIGINAL REFERENCE, BUT RE-ASSIGNING IT (object), WILL NOT
//CHANGE IT ORIGINAL REFERENCE*****************.

// ******************IMPORTANT**************/////////////////////

///////////////////////////////////////////////////////////////////////

//SHALLOW COPY vs DEEP COPY

// Shallow Copy:

// A shallow copy of an object creates a new object and
// copies the top - level properties and values from the
// original object.However, if the original object contains
// nested objects(sub - objects), those nested objects are
// still referenced in the copied object.
//************ */ In other words,
// changes to the nested objects in the copy will
// affect the original object*****************.

// // Original object
// const originalObject = { name: "John", age: 30, address: { city: "New York" } };

// // Shallow copy using Object.assign
// const shallowCopy = Object.assign({}, originalObject);

// shallowCopy.name = "Jane";
// shallowCopy.address.city = "San Francisco";

// console.log(originalObject.name); // "John" (unchanged)
// console.log(originalObject.address.city); // "San Francisco" (changed)

//Also,**********SPREAD OPERATORS create a "shallow copy"*****************.

// Original object with nested objects
// const originalObject = {
//   name: "John",
//   age: 30,
//   address: { city: "New York" },
// };

// // Shallow copy using the spread operator
// const shallowCopy = { ...originalObject };

// shallowCopy.name = "Jane";
// shallowCopy.address.city = "San Francisco";

// console.log(originalObject.name); // "John" (unchanged)
// console.log(originalObject.address.city); // "San Francisco" (changed)

//DEEP COPY:

//A deep copy of an object creates a completely independent copy of the
// original object, including all nested objects and their properties.
// Changes made to the nested objects in the copy do not affect the original object.

// Ex.
// Original object
// const originalObject = { name: "John", age: 30, address: { city: "New York" } };

// // Deep copy using JSON.parse and JSON.stringify
// const deepCopy = JSON.parse(JSON.stringify(originalObject));

// deepCopy.name = "Jane";
// deepCopy.address.city = "San Francisco";

// console.log(originalObject.name); // "John" (unchanged)
// console.log(originalObject.address.city); // "New York" (unchanged)
