// function myCareer(job) {
//   var income = 1000;

//   if (job) {
//     var income = 2000;
//   }

//   {
//     var income = 3000;
//     {
//       var income = 4000;
//     }
//   }

//   return income;
// }

// console.log(myCareer(true));

// Return third highest and third lowest from an array, without using INDEX.

// let arr = [4, 2, 3, 6, 1, 7, 8, 5];

// arr.sort((a, b) => {
//   return a - b;
// });

// console.log(arr);

// [1, 2, 3, 4, 5, 6, 7, 8];

// let thirdHighest = arr.length - 3;

// let thirdLowest =

// function a() {
//   let x = 10;
//   function b() {
//     let y = 20;
//     (function c() {
//       console.log(x + y);
//       //   return x + y;
//     })();
//     // c();
//     // console.log(c());
//   }
//   b();
// }
// a();

//Let's make this look more complicated
// function a() {
//   let x = 10;
//   return (function b() {
//     let x = 100;
//     const y = 20;
//     (function c() {
//       console.log(x + y);
//       //   return x + y;
//     })();
//   })();
// }

// a();
// console.log(a());

//Example for understanding "this" more.

var obj = {
  a: 10,
  me: this,
  b: function x() {
    console.log(this);
    // console.log("line 73", this.me); //{}
    // console.log("line 78", me); //ReferenceError: me is not defined, Can't get access to "keys" like this.
    function c() {
      //   console.log(this);
      console.log(this); //Can't access "this". Here, "this" refers to global (window) object.
    }
    c();
  },
};

obj.b();
