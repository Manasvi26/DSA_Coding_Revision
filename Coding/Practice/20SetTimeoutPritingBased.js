function printNumbers() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

// Call the function to print numbers after 1 second each
// printNumbers();

//Prining it right with "let"

function printNumbersSol1() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
// printNumbersSol1();

//Now making the right solution work with "var" only.
//How ? With the help of closures

function printNumbersSolWithClosure() {
  for (var i = 1; i <= 5; i++) {
    (function closureFunction(num) {
      setTimeout(function () {
        console.log(num);
      }, num * 1000);
    })(i);
  }
}
printNumbersSolWithClosure();
