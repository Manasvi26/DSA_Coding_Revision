// Given InputArr = [1, ‘a’, ‘b’, 5, 6], Implement InputArr.square() So that it return OutputArr = [1, ‘a’, ‘b’, 25, 36]

//////////////////////////////////////////////////////////

// var InputArr = new Array(1, "a", "b", 5, 6); //this is how JS defines array internally.Internally defined constructor "Array".

var InputArr = [1, "a", "b", 5, 6];
// console.log(InputArr);

Array.prototype.square = function () {
  //In invocation we are are defining "this" as "InputArr"
  //console.log(this.length);
  var size = this.length;
  for (let i = 0; i < size; i++) {
    if (typeof this[i] === "number") {
      this[i] = this[i] ** 2;
    }
  }
  console.log(this);
  //   return this;
};

InputArr.square(); //here we are saying "this" is "InputArr"
// console.log(InputArr.square());

////////////////////////////////////////////////////////////

/////----------NOTES------NOTES----NOTES-----//////////////

// let InputArr = [1, "a", "b", 5, 6];

// function square(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       arr[i] = arr[i] ** 2;
//     }
//   }
// }

// square(InputArr);
// console.log(InputArr);

// Array.prototype.square = function () {
//   for (let i = 0; i < Array.length; i++) {
//     if (typeof Array[i] === "number") {
//       Array[i] = Array[i] ** 2;
//     }
//   }
// };

// console.log(InputArr.square());

// function MyArray(x) {
//   //   console.log(arguments.length);

//   Object.defineProperty(this, "length", {
//     value: true,
//     writable: true,
//     enumerable: false,
//     configurable: true,
//   });

//     //insted of defining the method here, we will define it outside.

//   this.length = arguments.length;

//   for (let i = 0; i < this.length; i++) {
//     this[i] = arguments[i];
//   }
// }

// let arr = new MyArray(1, "a", "b", 5, 6);
// var arr = new Array(1, "a", "b", 5, 6); //this is how JS defines array internally.Internally defined constructor "Array".

// // console.log(arr);

// MyArray.prototype.squared = function () {
//   var size = this.length;

//   for (let i = 0; i < size; i++) {
//     if (typeof this[i] === "number") {
//       this[i] = this[i] ** 2;
//     }
//   }
//   console.log(Object.values(arr));
// };

// arr.squared();
