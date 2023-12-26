// // // // let x = 'fog'
// // // // function first() {
// // // //  console.log(x)
// // // // }
// // // // x = 'pog'
// // // //  function second() {
// // // //    let x = 'rog'
// // // //   first()
// // // // }
// // // // second()
// // // // //rog

// // // // console.log('start');

// // // // const promise1 = Promise.resolve().then(() => {
// // // //   console.log('promise1');
// // // //   const timer2 = setTimeout(() => {
// // // //     console.log('timer2')
// // // //   }, 0)
// // // // });

// // // // const timer1 = setTimeout(() => {
// // // //   console.log('timer1')
// // // //   const promise2 = Promise.resolve().then(() => {
// // // //     console.log('promise2')
// // // //   })
// // // // }, 0)

// // // // console.log('end');;

// // // // setTimeout( () => console.log('1') )

// // // // Promise.resolve().then( () => console.log('promise2'))
// // // // Promise.resolve().then( () => setTimeout( () => console.log('3') ) )

// // // // new Promise( () => console.log('4') )
// // // // setTimeout( () => console.log('5') )

// // // // //1
// // // // //5
// // // // //promise2
// // // // //3
// // // // //undefined //error

// // // const promise = new Promise((resolve, reject) => {
// // //   console.log(1);
// // //   setTimeout(() => {
// // //     console.log("timerStart");
// // //     resolve("success");
// // //     console.log("timerEnd");
// // //   }, 0);
// // //   console.log(2);
// // // });
// // // promise.then((res) => {
// // //   console.log(res);
// // // });
// // // console.log(4);;

// // // //1
// // // //4
// // // //2
// // // //timerStart
// // // //timerEnd
// // // //success

// // // Write a function flatObject which takes an object as an input and  returns the flattened object as shown below:

// // function flatObject(target) {

// //   let obj ={}

// //   for(const key of target){

// //   }

// //   return obj;
// // }

// // const target = {
// //   field1: 1,
// //   field2: undefined,
// //   field3: "value",
// //   field4: {
// //     child: "child",
// //     child4: "child4",
// //     child2: {
// //       child3: "child2"
// //     }
// //   }
// // };

// // // {
// // //   field1: 1,
// // //   field2: undefined,
// // //   field3: "value",
// // //   "field4.child": "child",
// // //   "field4.child4": "child4",
// // //   "field4.child2.child3": "child2"
// // // };

// // // console.log(flatObject(target));

//  // Write the output

// const func1 =  () => {
//    try {
//      let a = func2();
//      console.log("func1", a);
//      return a;
//    } catch (e) {
//      console.log("func1 err", e);
//   }
//  };

//  const func2 = () => {
//    return new Promise((res, rej) => setTimeout(() => rej("rejected"), 1000))
//  };

//  const func3 = async () => {
//    try {
//      let b = await func1();
//      console.log("func3", b); //func3
//      return b;
//    } catch (e) {
//      console.log("func3 err", e);
//    }
//  };
//  // func3()

// // Case 1
// // func3 function itself
// //func1 function itself

// //func1
// //func1 err undefimed

// // Case 2
// //function1 rejected
// //func1 err

// // Case 3
// //func1 a
