function a() {
  var x = 10;

  function b() {
    console.log(x * 100);
  }

  b();

  console.log(x);
}

a();
