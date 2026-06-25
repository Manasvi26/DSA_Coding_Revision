// function throttle(fn, delay) {
//   let canRun = true; //IMP

//   return function () {
//     if (!canRun) return;

//     fn();

//     canRun = false;

//     setTimeout(() => {
//       canRun = true;
//     }, delay);
//   };
// }

//CLOSURE
function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const fn = outer();
fn(); //1
fn(); //2
fn(); //3
