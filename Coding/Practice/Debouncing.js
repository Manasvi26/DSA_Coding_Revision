// console.log("hello");

let counter = 0;
function getData() {
  counter++;
  console.log(`Fetching data ${counter}`);
}

function debouncing(fn, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, args);
    }, delay);
  };
}

let runner = debouncing(getData, 500);
