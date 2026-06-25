function debounce(fn, delay) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

//Usage
function apiCall() {
  console.log("API will be called");
}

debounce(apiCall, 500);
